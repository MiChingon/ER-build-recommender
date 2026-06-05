---
name: enrich-user-story
description: Use when the user wants to turn a vague feature idea or rough request into a decision-closed, senior-reviewable user story ready for SDD planning. Triggers include the slash command `/enrich-user-story`, phrases like "turn this into a story", "spec this out", "I have an idea for X, help me structure it", "close decisions for X", or "make a requirement for X". Asks structured clarifying questions grounded in the actual codebase, drafts the requirement only after the user confirms, and persists it to `ai-specs/requirements/<slug>.md` so the planning workflow can consume it.
---

# Enrich User Story

## Purpose

Help the user transform a vague idea into a **decision-closed, technically clear user story**.

This artifact must be understandable by a senior engineer and serve as input for [Spec-Driven Development (SDD) planning](../../../docs/doc_ai_planning_mode.md).

Do not optimize for wording.
Optimize for **clarity, completeness, and closed decisions**.

---

## Context

You MUST read the following files before asking any questions:

- [`docs/doc_architecture.md`](../../../docs/doc_architecture.md) — layer responsibilities, conventions, anti-patterns
- [`CLAUDE.md`](../../../CLAUDE.md) — the day-to-day codebase guide

If you cannot access or read these files, stop and inform the user.

Once read, ground every suggested default in the actual code (file paths, component names, recommender helpers, data files). Generic suggestions are forbidden when code-based evidence is available.

---

## Behavior

### 1. Understand the request

Read the input and briefly identify:
- what the user wants
- what problem it solves
- what is unclear

---

### 2. Ask clarifying questions

Ask questions in the same language used by the user.

Your goal is NOT to explore — it is to **force decisions**.

Rules:
- tone: conversational
- ask as many questions as needed to fully close decisions (no artificial limit)
- each question must resolve a concrete decision
- avoid redundant or overlapping questions
- prefer trade-off questions (A vs B) over open-ended ones
- whenever possible, include a suggested default grounded in the codebase

---

### Mandatory decision dimensions

Your questions MUST collectively cover these dimensions:

1. **Solution shape**
   (e.g. new component under `src/pages/components/<Name>/` vs extending an existing component, new field in the `Recommendation` shape vs deriving inline, new data row in a hand-curated `src/data/*.ts` vs regenerating a machine-generated file)

2. **Expected output**
   (what the user sees in the UI, what the recommender returns, what gets written to `Recommendation` / `Weapon` / new types, what the PDF report shows)

3. **Behavior**
   (normal flow, edge cases, failure scenarios — including empty loadout, missing data, slider hitting min/max level, two-hand toggle interactions)

4. **Actor and usage context**
   (who triggers this, from where in the UI, why)

5. **Scope boundaries**
   (what is in scope vs out of scope — in particular: no backend changes, no machine-generated file edits, no test runner additions, no removal of the ads banner)

6. **Success criteria**
   (how we know this is correctly implemented — `tsc -b` clean, `npm run doctor` no new regressions, specific manual-browser flow passes)

If any of these is unclear, you MUST ask about it.

---

### Code-grounded suggestions (CRITICAL)

Before proposing any suggested default:

- inspect the existing codebase when relevant
- identify current patterns, file paths, component splits, hooks, data shapes
- align with the architecture described in [`docs/doc_architecture.md`](../../../docs/doc_architecture.md)

Suggested defaults must be grounded in:

- existing per-component files under `src/pages/components/<Name>/index.tsx`
- existing shared primitives under `src/common/components/`
- the `useBuildPickerState` hook and the shape of `BuildPickerProps`
- the recommender's loadout-driven contract (`recommend(weapon, opts)` and `getTargetStats`)
- existing data shapes in `src/data/*.ts`
- the MUI v9 `sx` prop pattern and theme tokens (`primary.main`, `action.hover`, `STAT_COLORS`)

Avoid generic suggestions when code-based evidence is available.

When suggesting defaults:
- explain briefly why the recommendation fits the current system
- reference specific files, components, or helpers (e.g. "extend `LoadoutDamagePanel` rather than a new card — it already owns the AP breakdown layout")

---

### 3. Iterate until decisions are closed

- If answers are incomplete → ask again
- If something is ambiguous → ask again
- Do not proceed while decisions remain open

---

### 4. Confirm before writing

When all key decisions are resolved, ask:

"Everything looks clear now. Do you want me to draft the final user story?"

Do not write it yet.

---

### 5. Draft only after confirmation

Only if the user explicitly confirms:

1. Render the user story inline in chat (so the user can read it immediately) using the **`# User Story`** template below.
2. Persist the same content to `ai-specs/requirements/<slug>.md` where `<slug>` is a short kebab-case derivation of the title (e.g. "Add dark-mode toggle to BuildPicker" → `add-dark-mode-toggle-to-buildpicker.md`).
3. If `ai-specs/requirements/` does not exist, create it.
4. Report the final file path to the user so the SDD planning step can pick it up.

---

## Output

### If there are still open decisions

Respond in the same language as the user:

```markdown
## Understanding

<what you believe the user wants>

## Questions

1. <question>

   Suggested default:
   <recommended option grounded in code and architecture>

2. <question>

   Suggested default:
   <recommended option grounded in code and architecture>
```

---

### If everything is clear but not confirmed

Respond in the same language as the user:

```markdown
## Status

All key decisions are clear and no relevant ambiguity remains.

## Confirmation

Do you want me to draft the final user story?
```

---

### If confirmed — `# User Story` template

Render this BOTH in chat and at `ai-specs/requirements/<slug>.md`:

```markdown
# User Story: <clear title>

## Story

As a <actor>,
I want <capability>,
so that <outcome>.

## Objective

<what this enables for the user>

## Context

<problem and why it matters; cite the existing code paths affected>

## Scope

### In scope

- <item>
- <item>

### Out of scope

- <item>
- <item>

## Closed decisions

- <decision>
- <decision>

## Expected behavior

- <normal behavior>
- <edge case behavior>
- <failure behavior>

## Expected output

- <what the user sees / what the recommender returns / what shape changes>

## Affected files (anticipated)

- `src/pages/components/<Name>/index.tsx` — <reason>
- `src/lib/recommender.ts` — <reason>
- `src/data/<file>.ts` — <reason>
- <etc>

## Success criteria

- `tsc -b` and `npm run build` clean
- `npm run doctor` no new regressions
- <specific manual-browser flow that passes>
- <specific observable behavior in the UI>
```

After rendering, end the chat message with:

> Saved to `ai-specs/requirements/<slug>.md`. Hand off to the SDD planning step ([`docs/doc_ai_planning_mode.md`](../../../docs/doc_ai_planning_mode.md)) to generate a High-Level Technical Contract.

---

## Rules

- Do not write code
- Do not assume missing decisions
- Do not draft if decisions remain open
- Always respond in the user's language
- Optimize for clarity, not verbosity
- Never propose changes outside this project's architecture (no backend, no test runner, no hand-edits to machine-generated data files, no removal of the `src/App.tsx` ads banner)
- Always persist the final story to `ai-specs/requirements/<slug>.md` after drafting
