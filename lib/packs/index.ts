import { Language } from "../language";
import { SEED_CS_QUESTIONS } from "../seed-questions";
import { Question } from "../types";
import { PSYCH4110_EXAM1 } from "./psych4110";

/** A ready-made question bank a player can start without pasting a guide. */
export interface TopicPack {
  id: string;
  name: string;
  blurb: string;
  language: Language;
  questions: Question[];
}

export const PACKS: TopicPack[] = [
  {
    id: "psych4110-exam1",
    name: "Psych 4110 · Exam 1",
    blurb: "Psychopharmacology, Weeks 1–2 lectures plus textbook Ch 1–5 review questions",
    language: "none",
    questions: PSYCH4110_EXAM1,
  },
  {
    id: "cpp-warmup",
    name: "C++ warm-up",
    blurb: "10 questions on C++ basics",
    language: "cpp",
    questions: SEED_CS_QUESTIONS,
  },
];

export function getPack(id: string): TopicPack | undefined {
  return PACKS.find((p) => p.id === id);
}

function shuffle<T>(items: T[]): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build one run from a pack: up to 3 previously missed questions first
 * (spaced repetition), then fresh ones, and one essay boss at the end
 * when the pack has essays. Small packs are returned whole.
 */
export function buildPackRun(pack: TopicPack, missed: string[], size = 10): Question[] {
  if (pack.questions.length <= size) return pack.questions.slice();
  const essays = pack.questions.filter((q) => q.type === "essay");
  const regular = pack.questions.filter((q) => q.type !== "essay");
  const missedSet = new Set(missed);
  const review = shuffle(regular.filter((q) => missedSet.has(q.id))).slice(0, 3);
  const fresh = shuffle(regular.filter((q) => !missedSet.has(q.id)));
  const slots = essays.length ? size - 1 : size;
  const run = shuffle([...review, ...fresh.slice(0, slots - review.length)]);
  if (essays.length) {
    const missedEssay = essays.find((q) => missedSet.has(q.id));
    run.push(missedEssay ?? shuffle(essays)[0]);
  }
  return run;
}
