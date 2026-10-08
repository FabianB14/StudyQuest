import { NextRequest, NextResponse } from "next/server";
import { getClient, MODEL_GEN } from "@/lib/anthropic";
import { Question } from "@/lib/types";
import {
  isCodeLanguage,
  Language,
  LANGUAGES,
  LANGUAGE_LABELS,
  LANGUAGE_PROMPT_HINTS,
} from "@/lib/language";
import { SEED_CS_QUESTIONS } from "@/lib/seed-questions";

export const runtime = "nodejs";

const SYSTEM = `You are a study-game question writer for StudyQuest, an ADHD-first study app.

Given a study guide, output a JSON array of 10 questions tuned for sustained attention:
- Mix question types: "trace" (trace code output), "fill" (fill in the blank), "bug" (spot the bug), "recall" (short factual recall), "code" (write a small snippet). If the user message says the subject is general (not programming), follow the question mix it gives instead.
- Vary difficulty: a few easy, mostly medium, 1-2 hard, exactly 1 "boss" — the hardest concept in the guide.
- Keep prompts SHORT. One question, one focus. No multi-part questions.
- For "trace" and "bug", include a "snippet" with realistic code from the guide's domain.
- Always include a 1-2 sentence "explanation" that teaches the concept, not just the answer.
- Add a short "tag" (1-3 words) naming the concept, used for spaced repetition later.

CRITICAL — generate generous accepted-answer variants up front so word-for-word matching is NOT required:

For "fill", "recall", "trace", "bug" questions:
- "answer": the SHORTEST canonical answer (1-6 words, lowercase if it's prose).
- "acceptable": an array of 4-5 ALTERNATIVE phrasings a student might reasonably write. Include:
  * a longer, fuller-sentence version
  * a shorter keyword-only version
  * one with different word order
  * a common synonym ("returns nothing" / "no return value" / "void")
  * if the answer has a value, include common formatting variants ("6 5", "6, 5", "6  5")
- DO NOT include obviously wrong variants. Only phrasings that genuinely demonstrate understanding.

For "code" questions:
- "prompt": clearly describe the desired behavior with a tiny example.
- "answer": one short reference solution (used as a hint only).
- "acceptable": 2-3 ALTERNATIVE reference solutions with different but valid approaches.
- "rubric": an array of 3-6 SHORT literal tokens/keywords (1-3 chars to ~10 chars) that ANY correct answer must contain. Examples: ["for", "i <", "cout", "endl"]. Be conservative — only include tokens that are truly required regardless of approach. Use lowercase.

Return ONLY a JSON object: { "questions": [ ...10 items... ] }
Each item: { "id": string, "type": "trace"|"fill"|"bug"|"recall"|"code"|"essay", "difficulty": "easy"|"medium"|"hard"|"boss", "prompt": string, "snippet"?: string, "answer"?: string, "acceptable"?: string[], "rubric"?: string[], "choices"?: string[], "keyGroups"?: string[][], "points"?: {"p": string, "k": string[]}[], "explanation": string, "tag": string }
Use unique ids like "q1", "q2", ... "q10". No prose, no markdown — JSON only.`;

/** The C++ seed pack only makes sense as a fallback for C++ guides. */
function fallbackQuestions(language: Language = "cpp"): Question[] {
  return language === "cpp" ? SEED_CS_QUESTIONS.slice(0, 10) : [];
}

function tryParse(text: string): Question[] | null {
  // Be forgiving — strip ```json fences if the model adds them.
  const cleaned = text.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  try {
    const obj = JSON.parse(cleaned);
    const arr = Array.isArray(obj) ? obj : obj.questions;
    if (!Array.isArray(arr)) return null;
    return arr
      .filter((q) => q && typeof q.prompt === "string" && typeof q.explanation === "string")
      .map((q, i) => ({
        id: q.id || `q${i + 1}`,
        type: q.type || "recall",
        difficulty: q.difficulty || "medium",
        prompt: q.prompt,
        snippet: q.snippet,
        answer: q.answer,
        acceptable: Array.isArray(q.acceptable) ? q.acceptable : undefined,
        rubric: Array.isArray(q.rubric) ? q.rubric : undefined,
        choices: Array.isArray(q.choices) ? q.choices : undefined,
        keyGroups: Array.isArray(q.keyGroups) ? q.keyGroups : undefined,
        points: Array.isArray(q.points) ? q.points : undefined,
        explanation: q.explanation,
        tag: q.tag,
      }));
  } catch {
    return null;
  }
}

/** Per-run instructions: lock code to one language, or switch to a no-code question mix. */
function languageInstructions(language: Language): string {
  if (!isCodeLanguage(language)) {
    return `SUBJECT TYPE: general (not a programming subject).

Do NOT generate "code", "trace", or "bug" questions. Use this mix of 10 instead:
- 5-6 "recall" or "fill" questions. For about half of them, add "choices": an array of 4 short options, and set "answer" to the exact correct option.
- For free-text recall questions, add "keyGroups": an array of 1-4 inner arrays. Each inner array lists lowercase synonyms or word stems for ONE idea a correct answer must contain, e.g. [["liver","hepat"],["kidney","renal"]]. Keep stems short so paraphrases still match.
- 2-3 "recall" questions that apply a concept to a short scenario or ask "why".
- Exactly 1 "essay" question with difficulty "boss": an exam-style prompt that asks the student to explain and use evidence. Give it "points": an array of 5-8 rubric items, each { "p": "one key point", "k": ["2-4 lowercase keywords or stems that signal the point"] }. Omit "answer" for essays.
- Use the guide's own examples, studies, and numbers in prompts and explanations.`;
  }
  return `LANGUAGE: ${LANGUAGE_LABELS[language]} — ${LANGUAGE_PROMPT_HINTS[language]}

ALL "code", "trace", and "bug" questions MUST use ${LANGUAGE_LABELS[language]} syntax. Do NOT mix in other languages even if the study guide mentions them in passing. "fill" and "recall" questions can be language-agnostic when the concept is universal, but should otherwise also default to ${LANGUAGE_LABELS[language]}.`;
}

function isLanguage(value: unknown): value is Language {
  return (
    typeof value === "string" && (LANGUAGES as readonly string[]).includes(value)
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const guide: string = (body.guide || "").toString().slice(0, 30_000);
  const language: Language = isLanguage(body.language) ? body.language : "none";

  if (!guide.trim()) {
    return NextResponse.json({ questions: fallbackQuestions(language), source: "seed" });
  }

  const client = getClient();
  if (!client) {
    return NextResponse.json({
      questions: fallbackQuestions(language),
      source: "seed",
      note:
        language === "cpp"
          ? "ANTHROPIC_API_KEY not set — using seed pack."
          : "AI question generation needs ANTHROPIC_API_KEY. Add it (see DEPLOY.md), or play a built-in pack below.",
    });
  }

  try {
    const resp = await client.messages.create({
      model: MODEL_GEN,
      max_tokens: 4000,
      system: [
        {
          type: "text",
          text: SYSTEM,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: `${languageInstructions(language)}

STUDY GUIDE:

${guide}

Return the JSON now.`,
        },
      ],
    });

    const textBlock = resp.content.find((b) => b.type === "text");
    const text = textBlock && textBlock.type === "text" ? textBlock.text : "";
    const parsed = tryParse(text);
    if (!parsed || parsed.length === 0) {
      return NextResponse.json({
        questions: fallbackQuestions(language),
        source: "seed",
        note: "The AI response couldn't be read. Try again.",
      });
    }
    return NextResponse.json({ questions: parsed, source: "ai" });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json({
      questions: fallbackQuestions(language),
      source: "seed",
      note: `AI error: ${msg}`,
    });
  }
}
