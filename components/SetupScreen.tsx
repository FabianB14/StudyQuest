"use client";

import { ParseError, parseFile } from "@/lib/parse";
import { Progress } from "@/lib/types";
import { rankTitle } from "@/lib/xp";
import { useRef, useState } from "react";

interface SetupScreenProps {
  progress: Progress;
  initialGuide: string;
  loading: boolean;
  onStart: (guide: string) => void;
  onStartSeed: () => void;
  onResetProgress: () => void;
}

const MAX_GUIDE_CHARS = 30_000;

export function SetupScreen({
  progress,
  initialGuide,
  loading,
  onStart,
  onStartSeed,
  onResetProgress,
}: SetupScreenProps) {
  const [guide, setGuide] = useState(initialGuide);
  const [parsing, setParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parseInfo, setParseInfo] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          Upload your study guide. AI turns it into a game. Beat levels. Earn XP.
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

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            className="btn-primary"
            disabled={loading || parsing || guide.trim().length < 20}
            onClick={() => onStart(guide)}
          >
            {loading ? "Generating…" : "🎮 Start the quest"}
          </button>
          <button
            className="btn-ghost"
            onClick={onStartSeed}
            disabled={loading || parsing}
          >
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
          <li>Drop in a PDF, Word doc, or paste any study guide.</li>
          <li>AI generates 10 questions: trace output, fill blanks, spot bugs, recall, write code.</li>
          <li>One question at a time. Instant feedback. Earn XP. Build streaks.</li>
          <li>Missed questions get flagged for review next session.</li>
        </ul>
      </div>
    </div>
  );
}
