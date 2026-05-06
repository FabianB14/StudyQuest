import { NextRequest, NextResponse } from "next/server";
import { getClient, MODEL_GEN } from "@/lib/anthropic";
import { Question } from "@/lib/types";
import { SEED_CS_QUESTIONS } from "@/lib/seed-questions";

export const runtime = "nodejs";

const SYSTEM = `You are a study-game question writer for StudyQuest, an ADHD-first study app.

Given a study guide, output a JSON array of 10 questions tuned for sustained attention:
- Mix question types: "trace" (trace code output), "fill" (fill in the blank), "bug" (spot the bug), "recall" (short factual recall), "code" (write a small snippet).
- Vary difficulty: a few easy, mostly medium, 1-2 hard, exactly 1 "boss" — the hardest concept in the guide.
- Keep prompts SHORT. One question, one focus. No multi-part questions.
- For "trace" and "bug", include a "snippet" with realistic code from the guide's domain.
- For "fill" and "recall", set "answer" to the short, canonical answer (1-6 words).
- For "code", omit "answer" (LLM will grade free-form). Include a clear example of the desired behavior in the prompt.
- Always include a 1-2 sentence "explanation" that teaches the concept, not just the answer.
- Add a short "tag" (1-3 words) naming the concept, used for spaced repetition later.

Return ONLY a JSON object: { "questions": [ ...10 items... ] }
Each item: { "id": string, "type": "trace"|"fill"|"bug"|"recall"|"code", "difficulty": "easy"|"medium"|"hard"|"boss", "prompt": string, "snippet"?: string, "answer"?: string, "acceptable"?: string[], "explanation": string, "tag": string }
Use unique ids like "q1", "q2", ... "q10". No prose, no markdown — JSON only.`;

function fallbackQuestions(): Question[] {
  return SEED_CS_QUESTIONS.slice(0, 10);
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
        acceptable: q.acceptable,
        explanation: q.explanation,
        tag: q.tag,
      }));
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const guide: string = (body.guide || "").toString().slice(0, 30_000);

  if (!guide.trim()) {
    return NextResponse.json({ questions: fallbackQuestions(), source: "seed" });
  }

  const client = getClient();
  if (!client) {
    return NextResponse.json({
      questions: fallbackQuestions(),
      source: "seed",
      note: "ANTHROPIC_API_KEY not set — using seed pack.",
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
          content: `STUDY GUIDE:\n\n${guide}\n\nReturn the JSON now.`,
        },
      ],
    });

    const textBlock = resp.content.find((b) => b.type === "text");
    const text = textBlock && textBlock.type === "text" ? textBlock.text : "";
    const parsed = tryParse(text);
    if (!parsed || parsed.length === 0) {
      return NextResponse.json({
        questions: fallbackQuestions(),
        source: "seed",
        note: "AI response could not be parsed — using seed pack.",
      });
    }
    return NextResponse.json({ questions: parsed, source: "ai" });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json({
      questions: fallbackQuestions(),
      source: "seed",
      note: `AI error: ${msg}`,
    });
  }
}
