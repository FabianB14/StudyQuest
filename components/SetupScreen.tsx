"use client";

import { Progress } from "@/lib/types";
import { rankTitle } from "@/lib/xp";
import { useState } from "react";

interface SetupScreenProps {
  progress: Progress;
  initialGuide: string;
  loading: boolean;
  onStart: (guide: string) => void;
  onStartSeed: () => void;
  onResetProgress: () => void;
}

export function SetupScreen({
  progress,
  initialGuide,
  loading,
  onStart,
  onStartSeed,
  onResetProgress,
}: SetupScreenProps) {
  const [guide, setGuide] = useState(initialGuide);

  return (
    <div className="space-y-6">
      <div className="panel p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          📚⚔️ <span className="bg-gradient-to-r from-sq-accent to-sq-accent2 bg-clip-text text-transparent">StudyQuest</span>
        </h1>
        <p className="mt-2 text-sq-muted max-w-prose">
          Paste your study guide. AI turns it into a game. Beat levels. Earn XP.
          Actually remember things.
        </p>

        <div className="mt-6">
          <label htmlFor="guide" className="block text-sm font-semibold mb-2">
            Your study guide
          </label>
          <textarea
            id="guide"
            value={guide}
            onChange={(e) => setGuide(e.target.value)}
            placeholder={`Paste topics, notes, code snippets, vocab, etc.\n\nExample: "C++ basics for CSC 2430 — strings, vectors, loops, the rule of three, common bugs to spot..."`}
            rows={8}
            className="input font-mono text-sm"
          />
          <div className="mt-1 text-xs text-sq-muted">
            {guide.length.toLocaleString()} / 30,000 chars · stays in your browser unless you start a run
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            className="btn-primary"
            disabled={loading || guide.trim().length < 20}
            onClick={() => onStart(guide)}
          >
            {loading ? "Generating…" : "🎮 Start the quest"}
          </button>
          <button className="btn-ghost" onClick={onStartSeed} disabled={loading}>
            ⚡ Try a CS warm-up
          </button>
        </div>
      </div>

      <div className="panel p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="text-sm text-sq-muted">Your stats</div>
            <div className="font-bold">
              {rankTitle(progress.level)} · Level {progress.level} · {progress.xp} XP
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="chip">🎯 answered {progress.answered}</span>
            <span className="chip">✅ correct {progress.correct}</span>
            <span className="chip">🏆 best streak {progress.bestStreak}</span>
            {progress.missed.length > 0 && (
              <span className="chip text-amber-300">
                🔁 {progress.missed.length} to review
              </span>
            )}
            {progress.answered > 0 && (
              <button
                className="text-xs text-sq-muted hover:text-rose-300 underline ml-2"
                onClick={() => {
                  if (confirm("Reset all XP, levels, and streaks?")) onResetProgress();
                }}
              >
                reset progress
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="panel p-5 sm:p-6 text-sm text-sq-muted">
        <p className="font-semibold text-sq-ink mb-2">How it works</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Drop in any study guide — code, vocab, history, biology, anything.</li>
          <li>AI generates 10 questions: trace output, fill blanks, spot bugs, recall, write code.</li>
          <li>One question at a time. Instant feedback. Earn XP. Build streaks.</li>
          <li>Missed questions get flagged for review next session.</li>
        </ul>
      </div>
    </div>
  );
}
