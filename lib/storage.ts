"use client";

import { Language, LANGUAGES } from "./language";
import { Progress } from "./types";
import { emptyProgress } from "./xp";

const PROGRESS_KEY = "studyquest:progress:v1";
const GUIDE_KEY = "studyquest:guide:v1";
const LANG_OVERRIDE_KEY = "studyquest:langOverride:v1";

export function loadProgress(): Progress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return emptyProgress();
    return { ...emptyProgress(), ...JSON.parse(raw) };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PROGRESS_KEY);
}

export function loadLastGuide(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(GUIDE_KEY) ?? "";
}

export function saveLastGuide(text: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(GUIDE_KEY, text);
}

export function loadLanguageOverride(): Language | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(LANG_OVERRIDE_KEY);
  if (raw && (LANGUAGES as readonly string[]).includes(raw)) {
    return raw as Language;
  }
  return null;
}

export function saveLanguageOverride(lang: Language | null) {
  if (typeof window === "undefined") return;
  if (lang === null) localStorage.removeItem(LANG_OVERRIDE_KEY);
  else localStorage.setItem(LANG_OVERRIDE_KEY, lang);
}
