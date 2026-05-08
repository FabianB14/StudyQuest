# Deploying StudyQuest to the web

The fastest path is **Vercel** (made by the same people as Next.js, free tier covers V0
easily, no build config needed). End-to-end this takes about 5 minutes.

## 1. Make sure GitHub is up to date

```bash
git push -u origin claude/studyquest-initial-setup-g9ie7
```

Vercel reads from GitHub, so any new commits you want live need to be pushed first.

## 2. Get an Anthropic API key

1. Go to <https://console.anthropic.com/>.
2. Sign in (Google works).
3. **Settings → API Keys → Create Key**. Name it something like "StudyQuest prod".
4. **Copy the key now** — Anthropic only shows it once. Save it somewhere safe (a password
   manager). If you lose it, you have to revoke it and make a new one.
5. Add at least $5 of credit under **Settings → Billing**. Haiku is ~$0.25 per million
   input tokens; a single 10-question study run costs fractions of a cent.

> **DO NOT** paste the key into any file in this repo. The `.gitignore` already
> excludes `.env.local`, but if you ever paste it into source code by accident,
> revoke it immediately on the console — assume anything in git history is public.

## 3. Connect the repo to Vercel

1. Go to <https://vercel.com> and sign in with GitHub.
2. Click **Add New… → Project**.
3. Find `FabianB14/StudyQuest` in the list and click **Import**.
4. On the configure screen:
   - **Framework Preset**: Next.js (auto-detected — leave as is)
   - **Root Directory**: `./` (leave as is)
   - **Build & Output Settings**: leave defaults
   - **Branch**: pick `claude/studyquest-initial-setup-g9ie7` for now, or merge to `main`
     first and use that
5. **Don't deploy yet** — first add the environment variable in the next step.

## 4. Add the API key as an environment variable

Still on the Vercel import screen (or later under **Project → Settings → Environment
Variables**):

| Name                   | Value                          | Environments                       |
| ---------------------- | ------------------------------ | ---------------------------------- |
| `ANTHROPIC_API_KEY`    | `sk-ant-api03-...` (your key)  | Production, Preview, Development   |
| `ANTHROPIC_MODEL_GEN`  | `claude-haiku-4-5-20251001`    | Production, Preview, Development   |
| `ANTHROPIC_MODEL_GRADE`| `claude-sonnet-4-6`            | Production, Preview, Development   |

The two model variables are optional — the code already defaults to those values.
Add them only if you want to override (e.g. swap the grader to Haiku to cut cost).

> **Critical:** never name an env var `NEXT_PUBLIC_ANTHROPIC_API_KEY` or anything
> with a `NEXT_PUBLIC_` prefix. That would ship the key to the browser, where any
> visitor could steal it. The code reads `process.env.ANTHROPIC_API_KEY` server-side
> only — keep it that way.

## 5. Deploy

Click **Deploy**. First deploy takes ~90 seconds. When it's done you'll get a URL like:

```
studyquest-fabianb14.vercel.app
```

Open it. Try the warm-up first to confirm the game loop works, then paste a study guide
to confirm the AI question generation works.

## 6. Set a custom domain (optional)

**Project → Settings → Domains → Add**. Vercel walks you through DNS. You can buy
a domain through Vercel directly or point an existing one. `studyquest.app` is taken;
`studyquest.fyi` and `studyquest.io` were available at last check.

## 7. Iterating

Every push to the connected branch auto-deploys. PRs auto-deploy as **preview**
URLs that you can share before merging. Production deploys only happen when you
push to the production branch (set under **Project → Settings → Git**).

## Troubleshooting

**Build fails with "Cannot find module '@anthropic-ai/sdk'"**
Vercel picked up an old lockfile. **Project → Deployments → Latest → Redeploy**
with "Use existing Build Cache" unchecked.

**Questions are generic / fall back to the seed pack**
The API key is missing or wrong. Check **Settings → Environment Variables** is
populated for the correct environment, then redeploy.

**429 / rate-limit errors**
You've hit Anthropic's free tier limits. Add billing credit on console.anthropic.com.
Long-term: cache generated question packs by guide hash so repeat runs are free.

**"AI grading unavailable" in feedback**
Same root cause — the server can't reach Anthropic. Either the key is missing or
the network blocked the request. Check Vercel function logs:
**Project → Deployments → Latest → Functions → /api/grade**.

## Cost expectations (rough)

For one student running ~5 study sessions a week:
- Question generation: ~10 questions × 5 sessions × ~2k tokens ≈ $0.05/week with Haiku
- Grading: ~50 grades/week, ~80% caught locally, ~10 hit Sonnet ≈ $0.10/week
- **Total: <$1/month per active student.**

At ~100 active students you're at ~$50/month in API costs, comfortably below
even a $5/month subscription tier.
