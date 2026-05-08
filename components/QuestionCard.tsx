"use client";

import { Language, LANGUAGE_SHORT } from "@/lib/language";
import { GradeResult, Question } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const TYPE_LABEL: Record<Question["type"], string> = {
  trace: "Trace the output",
  fill: "Fill in the blank",
  bug: "Spot the bug",
  recall: "Quick recall",
  code: "Write the code",
};

const DIFF_STYLE: Record<Question["difficulty"], string> = {
  easy: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
  medium: "bg-amber-500/15 text-amber-200 border-amber-400/20",
  hard: "bg-rose-500/15 text-rose-300 border-rose-400/20",
  boss: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/30 animate-glow",
};

export interface QuestionCardProps {
  question: Question;
  language: Language;
  index: number;
  total: number;
  onSubmit: (answer: string) => Promise<{ grade: GradeResult; xpGained: number; leveledUp: boolean }>;
  onNext: () => void;
}

export function QuestionCard({ question, language, index, total, onSubmit, onNext }: QuestionCardProps) {
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [grade, setGrade] = useState<GradeResult | null>(null);
  const [xpGained, setXpGained] = useState(0);
  const [leveledUp, setLeveledUp] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Reset on question change.
  useEffect(() => {
    setAnswer("");
    setGrade(null);
    setXpGained(0);
    setLeveledUp(false);
    setShake(false);
    setTimeout(() => inputRef.current?.focus(), 80);
  }, [question.id]);

  async function handleSubmit() {
    if (!answer.trim() || submitting || grade) return;
    setSubmitting(true);
    const result = await onSubmit(answer);
    setGrade(result.grade);
    setXpGained(result.xpGained);
    setLeveledUp(result.leveledUp);
    if (!result.grade.correct && !result.grade.partial) {
      setShake(true);
      setTimeout(() => setShake(false), 380);
    }
    setSubmitting(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      if (!grade) handleSubmit();
      else onNext();
    } else if (e.key === "Enter" && !e.shiftKey && question.type !== "code") {
      e.preventDefault();
      if (!grade) handleSubmit();
      else onNext();
    }
  }

  const isBoss = question.difficulty === "boss";

  return (
    <div className={`panel p-5 sm:p-7 ${shake ? "animate-shake" : "animate-rise"}`}>
      <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="chip">{TYPE_LABEL[question.type]}</span>
          <span className={`chip border ${DIFF_STYLE[question.difficulty]}`}>
            {isBoss ? "👑 BOSS" : question.difficulty.toUpperCase()}
          </span>
          {(question.type === "trace" ||
            question.type === "bug" ||
            question.type === "code") && (
            <span className="chip text-sq-accent2 border-sq-accent2/30">
              {LANGUAGE_SHORT[language]}
            </span>
          )}
          {question.tag && <span className="chip text-sq-muted">#{question.tag}</span>}
        </div>
        <div className="text-xs text-sq-muted">
          {index + 1} / {total}
        </div>
      </div>

      {isBoss && (
        <div className="mb-3 text-fuchsia-300 font-bold tracking-wide animate-pop">
          ⚔️ A wild boss appears.
        </div>
      )}

      <h2 className="text-lg sm:text-xl font-semibold leading-snug mb-3">
        {question.prompt}
      </h2>

      {question.snippet && (
        <pre className="font-mono text-sm bg-black/40 rounded-xl p-4 mb-4 overflow-x-auto border border-white/5">
{question.snippet}
        </pre>
      )}

      <textarea
        ref={inputRef}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={!!grade || submitting}
        placeholder={
          question.type === "code"
            ? "Write your code here…"
            : question.type === "trace"
            ? "What does it print?"
            : "Your answer…"
        }
        rows={question.type === "code" ? 6 : 2}
        className="input font-mono"
      />

      <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
        <div className="text-xs text-sq-muted">
          Press <span className="kbd">Enter</span> to submit
          {question.type === "code" && (
            <>
              {" "}
              or <span className="kbd">⌘/Ctrl + Enter</span>
            </>
          )}
        </div>
        {!grade ? (
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={submitting || !answer.trim()}
          >
            {submitting ? "Grading…" : "Submit"}
          </button>
        ) : (
          <button className="btn-good animate-pop" onClick={onNext}>
            {index + 1 === total ? "Finish run →" : "Next →"}
          </button>
        )}
      </div>

      {grade && (
        <div
          className={`mt-5 rounded-xl p-4 border animate-rise ${
            grade.correct
              ? "bg-emerald-500/10 border-emerald-400/30"
              : grade.partial
              ? "bg-amber-500/10 border-amber-400/30"
              : "bg-rose-500/10 border-rose-400/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">
              {grade.correct ? "✅" : grade.partial ? "🟡" : "❌"}
            </span>
            <span className="font-bold">
              {grade.correct
                ? "Correct!"
                : grade.partial
                ? "Partial credit"
                : "Not quite."}
            </span>
            {xpGained > 0 && (
              <span className="ml-auto chip bg-sq-gold/20 text-sq-gold border-sq-gold/30 animate-pop">
                +{xpGained} XP
              </span>
            )}
          </div>
          <p className="text-sm text-sq-ink/90">{grade.feedback}</p>
          {!grade.correct && question.answer && (
            <p className="mt-2 text-xs text-sq-muted">
              Expected:{" "}
              <span className="font-mono text-sq-ink">{question.answer}</span>
            </p>
          )}
          {grade.feedback !== question.explanation && (
            <details className="mt-3 text-xs text-sq-muted">
              <summary className="cursor-pointer hover:text-sq-ink">
                Why?
              </summary>
              <p className="mt-1">{question.explanation}</p>
            </details>
          )}
          {leveledUp && (
            <div className="mt-3 text-sq-gold font-bold animate-pop">
              ⭐ LEVEL UP!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
