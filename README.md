# StudyQuest

> Upload your study guide. AI turns it into a game. Earn XP. Actually remember things.

An ADHD-first study app that turns any study guide into a one-question-at-a-time game with instant feedback, XP, streaks, levels, and boss fights.

This repo is the **V0 prototype** as scoped in the founding doc, plus early V1 file upload:

- Web app, no auth, no database — progress lives in `localStorage`.
- Upload a **PDF, DOCX, TXT, or Markdown** file, or paste plain text.
  Files are parsed in the browser — they never touch the server.
- AI generates 10 mixed-type questions per run (trace, fill, bug, recall, code),
  with multiple acceptable phrasings per question to avoid word-for-word grading.
- XP / streak / level mechanics with level-up animation.
- Seed CS question pack ships as a fallback so the app works with zero setup.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling
- **Anthropic Claude API** for question generation and free-text grading
  - `claude-haiku-4-5-20251001` for question generation (cheap)
  - `claude-sonnet-4-6` for free-text / partial-credit grading (accurate)
  - Prompt caching is enabled on both system prompts to keep costs down
- **`pdfjs-dist`** + **`mammoth`** for in-browser PDF and DOCX parsing
  (lazy-loaded so the initial bundle stays small)
- **localStorage** for progress persistence

## Getting started

```bash
npm install
cp .env.example .env.local        # then add your ANTHROPIC_API_KEY
npm run dev
```

Open <http://localhost:3000>.

You can run the app **without** an API key — it will fall back to the built-in
CS warm-up pack (10 hand-written C++ questions) so you can demo the game loop
end-to-end. Add a key to unlock AI-generated questions from any pasted guide.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add `ANTHROPIC_API_KEY` as an environment variable.
4. Ship.

## Project layout

```
app/
  page.tsx                   # Mounts the game session
  layout.tsx, globals.css
  api/generate/route.ts      # POST — turns a study guide into 10 questions
  api/grade/route.ts         # POST — grades a single answer (local first, AI fallback)
components/
  GameSession.tsx            # Top-level state machine (setup -> playing -> finished)
  SetupScreen.tsx            # Paste-in guide + start buttons + stats summary
  QuestionCard.tsx           # The actual game UI: prompt, snippet, answer, feedback
  StatusBar.tsx              # Persistent XP / level / streak header
lib/
  types.ts                   # Question, Progress, GradeResult types
  xp.ts                      # Level curve, streak multipliers, applyAnswer reducer
  storage.ts                 # localStorage I/O
  parse.ts                   # Browser-side PDF / DOCX / TXT extraction
  grade-local.ts             # Free, deterministic grading for short-answer questions
  seed-questions.ts          # 10-question CS warm-up fallback pack
  anthropic.ts               # Lazy SDK client + model name constants
```

## What's deliberately NOT in V0

Per the founding doc, V0 is *intentionally* small. Things saved for V1+:

- Auth + database (Supabase planned)
- OCR for image-based PDFs and image uploads (Tesseract.js is ~10 MB — V2)
- Spaced repetition scheduler (the `missed[]` array is already collected)
- Class-mode / leaderboards
- Mobile app
- Subscription / paywall

The next thing to build, from the doc's checklist:

> Show it to 3 classmates. Watch them use it. Don't explain anything — see what's confusing.
