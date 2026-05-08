import { GradeResult, Question } from "./types";

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[`'"]/g, "")
    .trim();

/** Local string-match grading for non-code questions. */
export function gradeLocal(q: Question, userAnswer: string): GradeResult {
  const u = norm(userAnswer);
  if (!u) {
    return { correct: false, score: 0, feedback: "No answer submitted." };
  }
  const candidates = [q.answer, ...(q.acceptable ?? [])]
    .filter((s): s is string => Boolean(s))
    .map(norm);

  if (candidates.includes(u)) {
    return { correct: true, score: 1, feedback: "Exact match. Nice." };
  }

  // Substring match either direction — covers "off by one" vs "off-by-one"
  // and short recall answers that contain the key phrase.
  const tokenized = candidates.find((c) => u.includes(c) || c.includes(u));
  if (tokenized) {
    return { correct: true, score: 1, feedback: "Got it." };
  }

  return {
    correct: false,
    score: 0,
    feedback: q.answer ? `Expected: ${q.answer}` : "Not quite.",
  };
}

/**
 * Local rubric-based grading for code questions. Returns null if the rubric
 * is missing or the result is borderline — caller should fall through to AI
 * grading in that case.
 */
export function gradeCodeLocal(
  q: Question,
  userAnswer: string
): GradeResult | null {
  if (!q.rubric || q.rubric.length === 0) return null;
  const code = norm(userAnswer);
  if (!code) {
    return { correct: false, score: 0, feedback: "No code submitted." };
  }
  const total = q.rubric.length;
  const hits = q.rubric.filter((token) => {
    const t = norm(token);
    return t.length > 0 && code.includes(t);
  }).length;

  if (hits === total) {
    return {
      correct: true,
      score: 1,
      feedback: "All required pieces are there. Nice work.",
    };
  }
  if (hits >= Math.max(2, Math.ceil(total * 0.7))) {
    return {
      correct: false,
      partial: true,
      score: hits / total,
      feedback: `Close — ${hits}/${total} of the required elements are there. Take a look at what might be missing.`,
    };
  }
  // Too few hits to call it locally — let the AI grader take a closer look
  // (it can still find a correct answer that uses different syntax).
  return null;
}
