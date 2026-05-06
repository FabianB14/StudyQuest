"use client";

import { Progress } from "@/lib/types";
import { progressToNextLevel, rankTitle } from "@/lib/xp";

export function StatusBar({ progress }: { progress: Progress }) {
  const { level, into, span, pct } = progressToNextLevel(progress.xp);
  return (
    <div className="panel p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sq-accent to-sq-accent2
                     flex items-center justify-center font-black text-lg shadow-lg shadow-violet-900/40"
          aria-label="level"
        >
          {level}
        </div>
        <div>
          <div className="text-sm text-sq-muted">{rankTitle(level)}</div>
          <div className="font-bold">Level {level}</div>
        </div>
      </div>
      <div className="flex-1 sm:mx-4">
        <div className="flex justify-between text-xs text-sq-muted mb-1">
          <span>{progress.xp} XP</span>
          <span>
            {into} / {span} to lvl {level + 1}
          </span>
        </div>
        <div className="h-3 rounded-full bg-sq-panel2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sq-accent to-sq-accent2 transition-all duration-500"
            style={{ width: `${Math.round(pct * 100)}%` }}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="chip" title="Current streak">
          {progress.streak >= 3 ? "🔥" : "⚡"} streak {progress.streak}
        </span>
        <span className="chip" title="Best streak">
          🏆 best {progress.bestStreak}
        </span>
      </div>
    </div>
  );
}
