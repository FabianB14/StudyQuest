export type QuestionType =
  | "trace"        // Trace the output
  | "fill"         // Fill in the blank
  | "bug"          // Spot the bug
  | "recall"       // Quick recall
  | "code";        // Write the code (LLM-graded partial credit)

export type Difficulty = "easy" | "medium" | "hard" | "boss";

export interface Question {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  /** Optional code snippet rendered in monospace above the prompt. */
  snippet?: string;
  /** For fill/recall/trace: an exact-match answer (lowercased+trimmed compared). */
  answer?: string;
  /** Acceptable alternates for non-code answers. */
  acceptable?: string[];
  /** Short explanation shown after the player answers. */
  explanation: string;
  /** Concept tag — used later for spaced repetition. */
  tag?: string;
}

export interface GradeResult {
  correct: boolean;
  partial?: boolean;
  /** 0..1 score; useful for partial credit on code questions. */
  score: number;
  feedback: string;
}

export interface Progress {
  xp: number;
  level: number;
  streak: number;
  bestStreak: number;
  answered: number;
  correct: number;
  /** Question ids the player has missed; surfaced again next session. */
  missed: string[];
  lastPlayedISO?: string;
}

export const XP_PER_DIFFICULTY: Record<Difficulty, number> = {
  easy: 10,
  medium: 20,
  hard: 35,
  boss: 75,
};
