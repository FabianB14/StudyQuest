/**
 * Per the V2 founding-doc Principle 2: code questions must be generated in
 * the user's actual language. This module handles detection (heuristic), the
 * supported set, and the prompt-side hints sent to Claude.
 */

export const LANGUAGES = ["cpp", "python", "java", "js", "csharp"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  cpp: "C++",
  python: "Python",
  java: "Java",
  js: "JavaScript / TypeScript",
  csharp: "C#",
};

export const LANGUAGE_SHORT: Record<Language, string> = {
  cpp: "C++",
  python: "Python",
  java: "Java",
  js: "JS/TS",
  csharp: "C#",
};

/** Phrasing handed to Claude when generating questions for this language. */
export const LANGUAGE_PROMPT_HINTS: Record<Language, string> = {
  cpp: "C++ (use std:: namespace, #include headers, cout/cin or printf, modern C++ idioms)",
  python: "Python 3 (PEP 8 style, type hints when natural, no semicolons)",
  java: "Java (full class boilerplate where needed, System.out.println, modern Java idioms)",
  js: "JavaScript or TypeScript (modern ES syntax, prefer const/let, arrow functions; TS types when the guide implies TS)",
  csharp: "C# (Console.WriteLine, modern C# with var and using directives, top-level statements OK)",
};

interface Signal {
  weight: number;
  pattern: RegExp;
}

const SIGNALS: Record<Language, Signal[]> = {
  cpp: [
    { weight: 5, pattern: /\bstd::/g },
    { weight: 4, pattern: /#include\s*<[^>]+>/g },
    { weight: 4, pattern: /\bcout\s*<<|\bcin\s*>>/g },
    { weight: 3, pattern: /\bnullptr\b/g },
    { weight: 3, pattern: /\busing\s+namespace\b/g },
    { weight: 3, pattern: /\bint\s+main\s*\(/g },
    { weight: 2, pattern: /\bendl\b/g },
    { weight: 2, pattern: /\bvector\s*<|\bunique_ptr\b|\bshared_ptr\b/g },
    { weight: 2, pattern: /->\s*\w/g },
  ],
  python: [
    { weight: 4, pattern: /^\s*def\s+\w+\s*\(/gm },
    { weight: 4, pattern: /^\s*from\s+[\w.]+\s+import/gm },
    { weight: 3, pattern: /^\s*import\s+\w/gm },
    { weight: 3, pattern: /\bprint\s*\(/g },
    { weight: 3, pattern: /__init__|__name__|__main__/g },
    { weight: 3, pattern: /\belif\b/g },
    { weight: 2, pattern: /\bself\b/g },
    { weight: 2, pattern: /\b(None|True|False)\b/g },
    { weight: 2, pattern: /\blambda\b\s+\w/g },
  ],
  java: [
    { weight: 5, pattern: /\bSystem\.out\.println\b/g },
    { weight: 5, pattern: /public\s+static\s+void\s+main\s*\(\s*String\s*\[\]/g },
    { weight: 4, pattern: /^\s*import\s+java\./gm },
    { weight: 3, pattern: /@Override\b/g },
    { weight: 3, pattern: /\bpublic\s+(class|interface)\s+\w+/g },
    { weight: 2, pattern: /\b(extends|implements)\b\s+\w/g },
    { weight: 2, pattern: /\bSystem\.out\.print\b/g },
  ],
  js: [
    { weight: 4, pattern: /\bconsole\.log\s*\(/g },
    { weight: 3, pattern: /\b(const|let)\s+\w+\s*=/g },
    { weight: 3, pattern: /=>\s*[\{(]/g },
    { weight: 3, pattern: /^\s*import\s+.+\s+from\s+['"]/gm },
    { weight: 3, pattern: /\binterface\s+\w+\s*\{/g },
    { weight: 2, pattern: /:\s*(string|number|boolean|any|void)\b/g },
    { weight: 2, pattern: /\bfunction\s+\w+\s*\(/g },
    { weight: 2, pattern: /\b(async|await)\b/g },
    { weight: 2, pattern: /`[^`]*\$\{/g },
  ],
  csharp: [
    { weight: 5, pattern: /\bConsole\.WriteLine\b/g },
    { weight: 4, pattern: /\busing\s+System(\.\w+)*\s*;/g },
    { weight: 3, pattern: /\bnamespace\s+\w/g },
    { weight: 3, pattern: /\b(public|internal|private)\s+(class|record|struct|interface)\s+\w/g },
    { weight: 2, pattern: /\bvar\s+\w+\s*=/g },
    { weight: 2, pattern: /\bstring\s*\[\s*\]\s*args\b/g },
    { weight: 2, pattern: /\b(await|async)\s+Task\b/g },
  ],
};

export interface DetectionResult {
  language: Language;
  confidence: number;
  scores: Record<Language, number>;
  /** True only when the heuristic found enough signal to be worth showing. */
  detected: boolean;
}

const EMPTY_SCORES: Record<Language, number> = {
  cpp: 0,
  python: 0,
  java: 0,
  js: 0,
  csharp: 0,
};

export function detectLanguage(text: string): DetectionResult {
  if (!text || text.length < 20) {
    return { language: "cpp", confidence: 0, scores: { ...EMPTY_SCORES }, detected: false };
  }
  const sample = text.slice(0, 30_000);
  const scores: Record<Language, number> = { ...EMPTY_SCORES };
  for (const lang of LANGUAGES) {
    let score = 0;
    for (const sig of SIGNALS[lang]) {
      const matches = sample.match(sig.pattern);
      if (matches) score += sig.weight * matches.length;
    }
    scores[lang] = score;
  }

  let best: Language = "cpp";
  let bestScore = 0;
  for (const lang of LANGUAGES) {
    if (scores[lang] > bestScore) {
      best = lang;
      bestScore = scores[lang];
    }
  }
  if (bestScore < 4) {
    // Too little signal — let the caller treat this as "no detection".
    return { language: "cpp", confidence: 0, scores, detected: false };
  }
  const sorted = Object.values(scores).sort((a, b) => b - a);
  const runnerUp = sorted[1] || 0;
  const confidence = Math.min(1, (bestScore - runnerUp) / Math.max(1, bestScore));
  return { language: best, confidence, scores, detected: true };
}
