"use client";

import { useEffect, useState } from "react";
import { Progress, Question } from "@/lib/types";
import { applyAnswer, emptyProgress, rankTitle } from "@/lib/xp";
import {
  loadLastGuide,
  loadProgress,
  resetProgress,
  saveLastGuide,
  saveProgress,
} from "@/lib/storage";
import { SEED_CS_QUESTIONS } from "@/lib/seed-questions";
import { StatusBar } from "./StatusBar";
import { QuestionCard } from "./QuestionCard";
import { SetupScreen } from "./SetupScreen";

type Phase = "setup" | "playing" | "finished";

export function GameSession() {
  const [hydrated, setHydrated] = useState(false);
  const [progress, setProgress] = useState<Progress>(emptyProgress());
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("setup");
  const [loading, setLoading] = useState(false);
  const [sourceNote, setSourceNote] = useState<string | null>(null);
  const [runStats, setRunStats] = useState({ correct: 0, total: 0, xp: 0 });
  const [initialGuide, setInitialGuide] = useState("");

  // Hydrate from localStorage after mount.
  useEffect(() => {
    setProgress(loadProgress());
    setInitialGuide(loadLastGuide());
    setHydrated(true);
  }, []);

  // Persist progress whenever it changes.
  useEffect(() => {
    if (hydrated) saveProgress(progress);
  }, [progress, hydrated]);

  async function startRun(guide: string) {
    setLoading(true);
    setSourceNote(null);
    saveLastGuide(guide);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ guide }),
      });
      const data = await res.json();
      const qs: Question[] = (data.questions || []).slice(0, 10);
      if (qs.length === 0) throw new Error("No questions");
      setQuestions(qs);
      setIndex(0);
      setRunStats({ correct: 0, total: 0, xp: 0 });
      setPhase("playing");
      if (data.note) setSourceNote(data.note);
      else if (data.source === "seed")
        setSourceNote("Using built-in CS warm-up pack.");
    } catch {
      setSourceNote("Couldn't reach the API — using the built-in warm-up.");
      setQuestions(SEED_CS_QUESTIONS.slice(0, 10));
      setIndex(0);
      setRunStats({ correct: 0, total: 0, xp: 0 });
      setPhase("playing");
    } finally {
      setLoading(false);
    }
  }

  function startSeed() {
    setQuestions(SEED_CS_QUESTIONS.slice(0, 10));
    setIndex(0);
    setSourceNote("Built-in CS warm-up — 10 questions on C++ basics.");
    setRunStats({ correct: 0, total: 0, xp: 0 });
    setPhase("playing");
  }

  async function handleSubmit(userAnswer: string) {
    const q = questions[index];
    const res = await fetch("/api/grade", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: q, userAnswer }),
    });
    const grade = await res.json();
    const { next, xpGained, leveledUp } = applyAnswer(progress, {
      correct: grade.correct,
      partial: grade.partial,
      difficulty: q.difficulty,
      questionId: q.id,
    });
    setProgress(next);
    setRunStats((s) => ({
      correct: s.correct + (grade.correct ? 1 : 0),
      total: s.total + 1,
      xp: s.xp + xpGained,
    }));
    return { grade, xpGained, leveledUp };
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      setPhase("finished");
    } else {
      setIndex(index + 1);
    }
  }

  function backToSetup() {
    setPhase("setup");
    setQuestions([]);
    setIndex(0);
  }

  function handleReset() {
    resetProgress();
    setProgress(emptyProgress());
  }

  if (!hydrated) {
    return (
      <div className="panel p-6 text-sq-muted text-sm">Loading your save…</div>
    );
  }

  return (
    <div className="space-y-5">
      <StatusBar progress={progress} />

      {phase === "setup" && (
        <SetupScreen
          progress={progress}
          initialGuide={initialGuide}
          loading={loading}
          onStart={startRun}
          onStartSeed={startSeed}
          onResetProgress={handleReset}
        />
      )}

      {phase === "playing" && questions[index] && (
        <>
          {sourceNote && (
            <div className="text-xs text-sq-muted px-1">{sourceNote}</div>
          )}
          <QuestionCard
            key={questions[index].id}
            question={questions[index]}
            index={index}
            total={questions.length}
            onSubmit={handleSubmit}
            onNext={handleNext}
          />
          <div className="flex justify-between text-xs text-sq-muted px-1">
            <button className="hover:text-sq-ink underline" onClick={backToSetup}>
              ← save & quit
            </button>
            <span>
              run: {runStats.correct} / {runStats.total} · +{runStats.xp} XP
            </span>
          </div>
        </>
      )}

      {phase === "finished" && (
        <div className="panel p-7 text-center animate-rise">
          <div className="text-5xl mb-2">🎉</div>
          <h2 className="text-2xl font-black mb-1">Run complete!</h2>
          <p className="text-sq-muted mb-5">
            You answered {runStats.correct} / {runStats.total} correctly and
            earned <span className="text-sq-gold font-bold">+{runStats.xp} XP</span>.
          </p>
          <p className="mb-6 text-sm">
            You're now {rankTitle(progress.level)} · Level {progress.level} ·{" "}
            {progress.xp} XP.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="btn-primary" onClick={backToSetup}>
              🚀 New run
            </button>
            <button className="btn-ghost" onClick={startSeed}>
              ⚔️ One more warm-up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
