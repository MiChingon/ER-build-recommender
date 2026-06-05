---
name: write-pr-report
description: Use when the user wants to draft a Pull Request description, summarize a branch's changes for review, or generate the body for `gh pr create`. Triggers include the slash command `/write-pr-report`, phrases like "draft a PR description", "summarize my changes for a PR", "write the PR body", "format this for review". Also invoked by the `/commit` command to produce the canonical PR body. Generates a concise, reviewer-friendly Markdown description from the current branch's diff against `main`, grouped by this project's actual layers (components, recommender, data, docs, scaffolding), with credible validation that reflects this codebase (no test runner).
---

# Write PR Report

## Purpose

Generate a Pull Request description that a human reviewer can quickly understand and trust.

The output must prioritize clarity, signal, and reviewability over completeness.

This skill is also the canonical PR-body generator invoked from [`ai-specs/.commands/commit.md`](../../.commands/commit.md). The same output is suitable both as the PR body and as the basis for the commit message subject + body.

## Core Principles

1. The output is written for a human reviewer, not for documentation.
2. Be concise. Remove anything that does not help understanding the change.
3. Do not expose internal reasoning, planning artifacts, or implementation noise.
4. Prefer clarity over completeness.
5. Avoid AI-style verbosity and generic explanations.
6. Ground every claim in this project's actual file paths. Never invent layers we do not have (no API routes, no service classes, no test suites).

## Strict Output Rules (Mandatory)

### 1. Keep it short

- Target length: approximately 150 to 300 words
- No long paragraphs
- No repetition

### 2. Only include relevant information

Include:
- What was added or changed
- Where, at a high level, with real paths (e.g. `src/lib/recommender.ts`, `src/pages/components/<Name>/`)
- Why it matters
- How it was validated, briefly

Exclude:
- Internal helper details
- Refactoring noise
- Planning artifacts such as `tasks_for_AI/`, `ai-specs/requirements/`, High-Level Technical Contracts
- Implementation mechanics unless critical
- Restating the diff line-by-line

### 3. Validation must be credible — and project-aware

This project has **no test runner**. The honest validation surface is:

- `tsc -b` (chained inside `npm run build`)
- `npm run build` (tsc + Vite production build)
- `npm run doctor` (`npx react-doctor@latest` scan)
- Manual browser smoke checks via `npm run dev` (port 5179)

Allowed phrasings:
- "`tsc -b` clean"
- "`npm run build` clean"
- "`npm run doctor` clean" or "remaining warnings are pre-classified FPs"
- "Manually verified: <specific flow> in the dev server"
- "No user-visible behavior change; refactor is mechanical"

Forbidden phrasings:
- "All tests passing" — we have none
- "Integration tests added for X" — there is no test runner; do not claim tests exist
- Dumping raw `git log` / `git diff` output
- "Cannot reproduce locally"
- "Based on execution report"

Named npm scripts (`tsc -b`, `npm run build`, `npm run doctor`, `npm run dev`) are not "raw commands" — they are the canonical validation vocabulary for this repo.

### 4. Language constraints

- Use simple, direct English
- Avoid phrases like:
  - "The implementation introduces..."
  - "This change aims to..."
  - "Based on the current repository evidence..."
- Prefer:
  - "Adds"
  - "Fixes"
  - "Removes"
  - "Replaces"
  - "Keeps"

### 5. Title constraints

- ≤ 72 characters
- Value-leading: lead with verb + outcome + scope (e.g. "Clear 37 react-doctor warnings and adopt SDD scaffold")
- **No conventional-commit prefix** (`feat:`, `chore:`, etc.) — the commit log carries that; the PR title is for humans skimming the list.
- Match the dominant change. If the PR bundles two areas, name both ("Lift react-doctor score 90 → 96 and adopt SDD scaffold").

### 6. Structure is fixed

Always produce:

```markdown
# <Short title>

## Summary
<2 to 3 sentences max>

## What Changed
- grouped by area (see Layer responsibility map below)

## Validation

### Automated
<short bullet list>

### Manual
<short bullet list or "None">

## Reviewer Notes
<where to look>

## Risks
<only real risks>

## Rollback
<one short sentence>
```

Do not add extra sections.

### 7. Layer responsibility map (for "What Changed")

Group bullets under these labels (omit any label with no entries):

- **Components / pages**: changes to `src/pages/`, `src/pages/components/<Name>/`, `src/pages/hooks/`, `src/common/components/`
- **Recommender / lib**: changes to `src/lib/recommender.ts`, `src/lib/pdf-report.ts`, `src/lib/types.ts`, `src/lib/analytics.ts`
- **Data layer**: changes to `src/data/*.ts` — distinguish hand-curated edits (`classes.ts`, `weapons.ts`, `spells.ts`, `talismans.ts`) from machine-generated regenerations (`armor.ts`, `weapons-extras.ts`, `damage-types.ts`)
- **App shell**: changes to `src/App.tsx`, `src/main.tsx`, theme wiring, the ads banner
- **Docs**: changes to `docs/doc_*.md`, `CLAUDE.md`, `docs/elden-ring/*.md`
- **SDD scaffold**: changes to `ai-specs/`, `.claude/{agents,commands,skills}` symlinks
- **Build / config**: changes to `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig*.json`, `.claude/launch.json`

If a change spans labels (e.g. a feature touches both recommender and a page component), pick the dominant label and mention the secondary in the same bullet.

### 8. No speculation or critique

- Do not question the implementation
- Do not highlight risks unless they are obvious and relevant
- Do not audit the code
- This is a description, not a review

### 9. No internal artifacts

Never mention:
- `tasks_for_AI/`
- `ai-specs/requirements/`
- `.claude/doc/<feature>/`
- "High-Level Technical Contract"
- "execution report"
- "this session"
- "AI-generated"

If a planning document or a contract exists for this change, reference it via the PR's commit history or a separate internal-only thread — never in the PR body.

## Process

1. Determine the PR's base and head:
   - Base is typically `main` (confirm with `git remote show origin | grep "HEAD branch"` if unsure)
   - Head is the current branch (`git branch --show-current`)
2. Read the commit history with `git log <base>..HEAD --oneline` to understand the branch's narrative.
3. Read the cumulative diff with `git diff <base>...HEAD --stat` for the file-level shape, then targeted `git diff <base>...HEAD -- <path>` for areas you need to summarize.
4. If there are uncommitted changes that will be part of this PR, include them in your scope (`git status --short`, `git diff`, `git diff --staged`).
5. Group changes per the Layer responsibility map.
6. Extract intent — answer: what user-visible behavior changes, what infrastructure improves, what tech-debt this pays down.
7. Generate the PR description following the Strict Output Rules.

## Reviewer Notes guidance

Use the "Reviewer Notes" section to point at the file the reviewer should open first, especially when:

- A diff is large but mechanical (e.g. `src/lib/recommender.ts` after a bulk demote — say so, so the reviewer skims instead of reading every hunk).
- A new doc or scaffold has a README/index file (e.g. `ai-specs/README.md`) that documents the rest — link to it.
- A change in one file changes behavior elsewhere implicitly (e.g. a new field on `Recommendation` is consumed by `BuildPicker.tsx` and `pdf-report.ts` — name them).
- The only runtime-affecting hunk in a large diff is a few lines — call them out by file:line.

## Output

Return only the PR description in Markdown.

No explanations. No meta commentary. No code fences around the whole output.

If the user (or `/commit`) needs the body persisted to a file for `gh pr create --body-file`, render the body to chat AND write it to `/tmp/pr-body.md` so the caller can pass `--body-file /tmp/pr-body.md` in one shot.
