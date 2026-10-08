import { GradeResult, Question } from "./types";

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[`'"]/g, "")
    .trim();

/** Looser normalization for prose answers: drops punctuation and dashes. */
const normProse = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’'`]/g, "")
    .replace(/[–—-]/g, " ")
    .replace(/[^a-z0-9%./\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Short terms (3 chars or fewer) must match a whole word; longer ones match as substrings. */
function hasTerm(text: string, term: string): boolean {
  const t = normProse(term);
  if (!t) return false;
  if (t.length <= 3) return ` ${text} `.includes(` ${t} `);
  return text.includes(t);
}

/** Grade free text against concept groups. Returns null when no groups exist. */
function gradeKeyGroups(q: Question, userAnswer: string): GradeResult | null {
  if (!q.keyGroups || q.keyGroups.length === 0) return null;
  const text = normProse(userAnswer);
  const hits = q.keyGroups.filter((g) => g.some((w) => hasTerm(text, w))).length;
  const total = q.keyGroups.length;
  if (hits === total) return { correct: true, score: 1, feedback: "Got it." };
  if (hits > 0 && hits >= total / 2) {
    return {
      correct: false,
      partial: true,
      score: hits / total,
      feedback: `Partly there: you covered ${hits} of ${total} key ideas.`,
    };
  }
  return null;
}

/** Score an essay by how many rubric points its text appears to cover. */
export function gradeEssayLocal(q: Question, userAnswer: string): GradeResult {
  const points = q.points ?? [];
  const text = normProse(userAnswer);
  if (!text || points.length === 0) {
    return { correct: false, score: 0, feedback: "No answer submitted." };
  }
  const covered = points.filter((pt) => pt.k.some((w) => hasTerm(text, w)));
  const ratio = covered.length / points.length;
  const missing = points.filter((pt) => !covered.includes(pt)).map((pt) => pt.p);
  const feedback =
    `You covered ${covered.length} of ${points.length} rubric points.` +
    (missing.length ? ` Missing: ${missing.join("; ")}.` : "");
  return {
    correct: ratio >= 0.6,
    partial: ratio >= 0.3 && ratio < 0.6,
    score: ratio,
    feedback,
  };
}

/** Local string-match grading for non-code questions. */
export function gradeLocal(q: Question, userAnswer: string): GradeResult {
  const u = norm(userAnswer);
  if (!u) {
    return { correct: false, score: 0, feedback: "No answer submitted." };
  }
  if (q.choices && q.answer) {
    const right = norm(q.answer) === u;
    return right
      ? { correct: true, score: 1, feedback: "Correct." }
      : { correct: false, score: 0, feedback: `Correct answer: ${q.answer}` };
  }
  const byGroups = gradeKeyGroups(q, userAnswer);
  if (byGroups) return byGroups;
  const candidates = [q.answer, ...(q.acceptable ?? [])]
    .filter((s): s is string => Boolean(s))
    .map(norm);

  if (candidates.includes(u)) {
    return { correct: true, score: 1, feedback: "Exact match. Nice." };
  }

  // Substring match either direction — covers "off by one" vs "off-by-one"
  // and short recall answers that contain the key phrase.
  const tokenized = candidates.find(
    (c) => u.includes(c) || (u.length >= 4 && c.includes(u) && u.length >= c.length * 0.6)
  );
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
