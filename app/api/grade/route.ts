import { NextRequest, NextResponse } from "next/server";
import { getClient, MODEL_GRADE } from "@/lib/anthropic";
import { GradeResult, Question } from "@/lib/types";
import { gradeCodeLocal, gradeEssayLocal, gradeLocal } from "@/lib/grade-local";

export const runtime = "nodejs";

const SYSTEM = `You are a fair, encouraging grader for StudyQuest study questions.

CORE PRINCIPLE: grade for UNDERSTANDING, not word-for-word matching.
- Accept synonyms, different phrasings, different word orders, and shorter or longer versions of the canonical answer.
- A student who writes "endl flushes" should get full credit when the canonical answer is "endl flushes the output buffer".
- A student who writes "off by one — should be i < 10" should get full credit when the canonical answer is "off-by-one".
- Only mark "correct": false when the underlying concept is genuinely wrong or missing.

Per question type:
- "recall" / "fill" / "bug": be GENEROUS. Any phrasing that demonstrates the concept = correct.
- "trace": be STRICT on the actual output value. "6 5" and "6, 5" are both fine, but "6 6" is wrong.
- "code": be GENEROUS on style.
  * If the snippet would work or only has minor syntax issues → "correct": true.
  * Logic mostly right with one bug → "partial": true, score 0.5-0.7.
  * Got the concept but messy code → partial credit and a kind explanation.
- "essay": grade against the RUBRIC POINTS provided. A point counts when the student explains it, in any wording; name-dropping a term without explaining it does not count. score = fraction of points covered. "correct" when score >= 0.6, "partial" when 0.3–0.6. In feedback, name the 1-2 most important missing points.

Reply ONLY with JSON: { "correct": boolean, "partial": boolean, "score": number (0..1), "feedback": string (1-2 sentences, friendly, teaches) }
No prose, no markdown.`;

interface GradeBody {
  question: Question;
  userAnswer: string;
}

export async function POST(req: NextRequest) {
  const { question, userAnswer }: GradeBody = await req.json();

  // Multiple choice is always graded locally.
  if (question.choices && question.choices.length) {
    const local = gradeLocal(question, userAnswer);
    return NextResponse.json({ ...local, feedback: question.explanation });
  }

  // Essays: AI grading against the rubric when a key is set, keyword rubric otherwise.
  if (question.type === "essay" && !getClient()) {
    return NextResponse.json(gradeEssayLocal(question, userAnswer));
  }

  // Free local fast-path. Exact / paraphrase matches return instantly with no
  // API call. Borderline answers fall through to AI grading.
  if (question.type === "essay") {
    // handled by the AI grader below
  } else if (question.type === "code") {
    const localCode = gradeCodeLocal(question, userAnswer);
    if (localCode?.correct) {
      return NextResponse.json({ ...localCode, feedback: question.explanation });
    }
    if (localCode && !getClient()) {
      return NextResponse.json(localCode);
    }
  } else if (
    question.answer ||
    (question.acceptable && question.acceptable.length) ||
    (question.keyGroups && question.keyGroups.length)
  ) {
    const local = gradeLocal(question, userAnswer);
    if (local.correct) {
      return NextResponse.json({ ...local, feedback: question.explanation });
    }
    if (!getClient()) {
      return NextResponse.json(local);
    }
  }

  const client = getClient();
  if (!client) {
    const local: GradeResult = {
      correct: false,
      score: 0,
      feedback:
        "AI grading unavailable (no API key). Compare your answer to the explanation below.",
    };
    return NextResponse.json(local);
  }

  try {
    const resp = await client.messages.create({
      model: MODEL_GRADE,
      max_tokens: 400,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      messages: [
        {
          role: "user",
          content: `QUESTION (${question.type}, ${question.difficulty}):
${question.prompt}
${question.snippet ? `\nSNIPPET:\n${question.snippet}\n` : ""}
EXPECTED ANSWER: ${question.answer ?? "(open-ended — judge by correctness)"}${
  question.points?.length
    ? `\nRUBRIC POINTS:\n${question.points.map((p, i) => `${i + 1}. ${p.p}`).join("\n")}`
    : ""
}
EXPLANATION: ${question.explanation}

STUDENT ANSWER:
${userAnswer}

Grade now. JSON only.`,
        },
      ],
    });

    const textBlock = resp.content.find((b) => b.type === "text");
    const text = textBlock && textBlock.type === "text" ? textBlock.text : "";
    const cleaned = text.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
    const parsed = JSON.parse(cleaned);
    const result: GradeResult = {
      correct: !!parsed.correct,
      partial: !!parsed.partial,
      score: typeof parsed.score === "number" ? parsed.score : parsed.correct ? 1 : 0,
      feedback: parsed.feedback || question.explanation,
    };
    return NextResponse.json(result);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json({
      correct: false,
      score: 0,
      feedback: `Grader error (${msg}). See explanation below.`,
    });
  }
}
