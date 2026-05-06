import { Difficulty, Progress, XP_PER_DIFFICULTY } from "./types";

/**
 * Level curve: 100 XP for level 2, then each level needs 50 more than the last.
 * Lvl 2 = 100, Lvl 3 = 250, Lvl 4 = 450, Lvl 5 = 700...
 */
export function xpToReachLevel(level: number): number {
  if (level <= 1) return 0;
  let total = 0;
  for (let i = 2; i <= level; i++) {
    total += 100 + (i - 2) * 50;
  }
  return total;
}

export function levelForXP(xp: number): number {
  let lvl = 1;
  while (xpToReachLevel(lvl + 1) <= xp) lvl++;
  return lvl;
}

export function progressToNextLevel(xp: number) {
  const lvl = levelForXP(xp);
  const cur = xpToReachLevel(lvl);
  const next = xpToReachLevel(lvl + 1);
  const into = xp - cur;
  const span = next - cur;
  return { level: lvl, into, span, pct: Math.min(1, into / span) };
}

/** Streak multiplier — every 5 correct in a row = +25% bonus, capped at +100%. */
export function streakMultiplier(streak: number): number {
  return 1 + Math.min(1, Math.floor(streak / 5) * 0.25);
}

export function applyAnswer(
  prev: Progress,
  args: { correct: boolean; partial?: boolean; difficulty: Difficulty; questionId: string }
): { next: Progress; xpGained: number; leveledUp: boolean } {
  const base = XP_PER_DIFFICULTY[args.difficulty];
  let xpGained = 0;
  if (args.correct) {
    xpGained = Math.round(base * streakMultiplier(prev.streak + 1));
  } else if (args.partial) {
    xpGained = Math.round(base * 0.4);
  }
  const xp = prev.xp + xpGained;
  const newLevel = levelForXP(xp);
  const streak = args.correct ? prev.streak + 1 : 0;
  const missed = args.correct
    ? prev.missed.filter((id) => id !== args.questionId)
    : Array.from(new Set([...prev.missed, args.questionId]));
  return {
    next: {
      ...prev,
      xp,
      level: newLevel,
      streak,
      bestStreak: Math.max(prev.bestStreak, streak),
      answered: prev.answered + 1,
      correct: prev.correct + (args.correct ? 1 : 0),
      missed,
      lastPlayedISO: new Date().toISOString(),
    },
    xpGained,
    leveledUp: newLevel > prev.level,
  };
}

export function emptyProgress(): Progress {
  return {
    xp: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    answered: 0,
    correct: 0,
    missed: [],
  };
}

export function rankTitle(level: number): string {
  if (level >= 15) return "Legendary";
  if (level >= 10) return "Master";
  if (level >= 7) return "Expert";
  if (level >= 4) return "Adept";
  if (level >= 2) return "Apprentice";
  return "Rookie";
}
