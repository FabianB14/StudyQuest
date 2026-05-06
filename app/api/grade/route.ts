import { NextRequest, NextResponse } from "next/server";
import { getClient, MODEL_GRADE } from "@/lib/anthropic";
import { GradeResult, Question } from "@/lib/types";
import { gradeLocal } from "@/lib/grade-local";

export const runtime = "nodejs";

const SYSTEM = `You are a fair, encouraging grader for StudyQuest study questions.

You will get a question, the expected/canonical answer (if any), and the student's answer. Decide if the student's answer demonstrates understanding.

Be GENEROUS on partial credit for "code" type questions:
- If the student's snippet would work or only has minor syntax issues, mark "correct": true.
- If the logic is mostly right but has one bug, mark "partial": true with score 0.5-0.7.
- If they got the concept but not the code, give partial credit and explain.

Be STRICT on "trace" questions — wrong output is wrong.

Reply ONLY with JSON: { "correct": boolean, "partial": boolean, "score": number (0..1), "feedback": string (1-2 sentences, friendly, teaches) }
No prose, no markdown.`;

interface GradeBody {
  question: Question;
  userAnswer: string;
}

export async function POST(req: NextRequest) {
  const { question, userAnswer }: GradeBody = await req.json();

  // For non-code questions with a known answer, local grading is faster + free.
  if (question.type !== "code" && question.answer) {
    const local = gradeLocal(question, userAnswer);
    if (local.correct) {
      return NextResponse.json({ ...local, feedback: question.explanation });
    }
    // Fall through to AI grading only if a key is set; otherwise return local result.
    if (!getClient()) {
      return NextResponse.json(local);
    }
  }

  const client = getClient();
  if (!client) {
    // Best-effort local grading for code without a key.
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
EXPECTED ANSWER: ${question.answer ?? "(open-ended — judge by correctness)"}
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
