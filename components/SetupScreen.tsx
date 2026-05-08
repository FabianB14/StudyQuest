"use client";

import {
  Language,
  LANGUAGES,
  LANGUAGE_LABELS,
  detectLanguage,
} from "@/lib/language";
import { ParseError, parseFile } from "@/lib/parse";
import { Progress } from "@/lib/types";
import { rankTitle } from "@/lib/xp";
import { useEffect, useMemo, useRef, useState } from "react";

interface SetupScreenProps {
  progress: Progress;
  initialGuide: string;
  initialLanguageOverride: Language | null;
  loading: boolean;
  onStart: (guide: string, language: Language) => void;
  onStartSeed: () => void;
  onResetProgress: () => void;
  onLanguageOverrideChange: (override: Language | null) => void;
}

const MAX_GUIDE_CHARS = 30_000;

export function SetupScreen({
  progress,
  initialGuide,
  initialLanguageOverride,
  loading,
  onStart,
  onStartSeed,
  onResetProgress,
  onLanguageOverrideChange,
}: SetupScreenProps) {
  const [guide, setGuide] = useState(initialGuide);
  const [override, setOverride] = useState<Language | null>(
    initialLanguageOverride
  );
  const [parsing, setParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parseInfo, setParseInfo] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const detection = useMemo(() => detectLanguage(guide), [guide]);
  const effectiveLanguage: Language = override ?? detection.language;

  useEffect(() => {
    onLanguageOverrideChange(override);
  }, [override, onLanguageOverrideChange]);

  async function handleFile(file: File) {
    setParseError(null);
    setParseInfo(null);
    setParsing(true);
    try {
      const result = await parseFile(file);
      let text = result.text;
      let truncatedNote = "";
      if (text.length > MAX_GUIDE_CHARS) {
        text = text.slice(0, MAX_GUIDE_CHARS);
        truncatedNote = ` (trimmed to first ${MAX_GUIDE_CHARS.toLocaleString()} chars)`;
      }
      setGuide(text);
      const sizeKb = (file.size / 1024).toFixed(0);
      const pageInfo = result.pages ? `${result.pages} pages · ` : "";
      setParseInfo(
        `Loaded ${file.name} · ${pageInfo}${sizeKb} KB · ${text.length.toLocaleString()} chars${truncatedNote}`
      );
    } catch (err) {
      const msg =
        err instanceof ParseError
          ? err.userMessage
          : err instanceof Error
          ? err.message
          : "Couldn't read that file.";
      setParseError(msg);
    } finally {
      setParsing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function onPickFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) void handleFile(file);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void handleFile(file);
  }

  function onLanguagePick(value: string) {
    if (value === "auto") setOverride(null);
    else if ((LANGUAGES as readonly string[]).includes(value))
      setOverride(value as Language);
  }

  return (
    <div className="space-y-6">
      <div className="panel p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          📚⚔️{" "}
          <span className="bg-gradient-to-r from-sq-accent to-sq-accent2 bg-clip-text text-transparent">
            StudyQuest
          </span>
        </h1>
        <p className="mt-2 text-sq-muted max-w-prose">
          Solo study, gamified. Upload a study guide, and the AI generates a
          run of 10 questions in your language. Earn XP. Build streaks.
          Actually remember things.
        </p>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`mt-6 rounded-2xl border-2 border-dashed p-5 transition-colors ${
            dragOver
              ? "border-sq-accent bg-sq-accent/5"
              : "border-white/10 bg-sq-panel2/40"
          }`}
        >
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="text-sm">
              <div className="font-semibold">📎 Drop a file or pick one</div>
              <div className="text-sq-muted text-xs mt-0.5">
                PDF · DOCX · TXT · MD — up to 10 MB. Files are parsed in your browser.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt,.md,.markdown,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"
                onChange={onPickFile}
                disabled={parsing || loading}
                className="hidden"
                id="file-input"
              />
              <label
                htmlFor="file-input"
                className={`btn-ghost cursor-pointer ${
                  parsing || loading ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                {parsing ? "Reading…" : "Choose file"}
              </label>
            </div>
          </div>
          {parseError && (
            <div className="mt-3 text-sm text-rose-300 bg-rose-500/10 border border-rose-400/20 rounded-lg p-3">
              ⚠️ {parseError}
            </div>
          )}
          {parseInfo && !parseError && (
            <div className="mt-3 text-xs text-emerald-300">✓ {parseInfo}</div>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="guide" className="block text-sm font-semibold mb-2">
            Your study guide{" "}
            <span className="text-sq-muted font-normal">(or paste directly)</span>
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
            {guide.length.toLocaleString()} / {MAX_GUIDE_CHARS.toLocaleString()} chars · stays
            in your browser unless you start a run
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 flex-wrap">
          <label htmlFor="language" className="text-sm text-sq-muted">
            🧪 Language for code questions
          </label>
          <select
            id="language"
            value={override ?? "auto"}
            onChange={(e) => onLanguagePick(e.target.value)}
            className="bg-sq-panel2 border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-sq-accent/70"
          >
            <option value="auto">
              Auto{detection.detected ? ` · detected ${LANGUAGE_LABELS[detection.language]}` : ""}
            </option>
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {LANGUAGE_LABELS[l]}
              </option>
            ))}
          </select>
          <span className="chip text-[11px]">
            using {LANGUAGE_LABELS[effectiveLanguage]}
            {override === null && detection.detected && " (auto)"}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <button
            className="btn-primary"
            disabled={loading || parsing || guide.trim().length < 20}
            onClick={() => onStart(guide, effectiveLanguage)}
          >
            {loading ? "Generating…" : "🎮 Start solo session"}
          </button>
          <button
            className="btn-ghost"
            onClick={onStartSeed}
            disabled={loading || parsing}
          >
            ⚡ Try a C++ warm-up
          </button>
          <button
            className="btn-ghost opacity-50 cursor-not-allowed"
            disabled
            title="Multiplayer Party Mode is planned for V2 — see the founding doc."
          >
            👥 Party Up
            <span className="text-[10px] ml-1 chip">V2</span>
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
          <li>Drop in a PDF, Word doc, or paste any study guide.</li>
          <li>
            Code questions auto-match your guide&apos;s language — C++, Python, Java,
            JS/TS, or C#. Override anytime.
          </li>
          <li>AI generates 10 questions: trace output, fill blanks, spot bugs, recall, write code.</li>
          <li>One question at a time. Instant feedback. Earn XP. Build streaks.</li>
          <li>Missed questions get flagged for review next session.</li>
        </ul>
      </div>
    </div>
  );
}
