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
