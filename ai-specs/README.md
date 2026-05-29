# ai-specs/

Canonical source of truth for the Spec-Driven Development workflow in this repo.

## Layout

```
ai-specs/
├── .agents/                 # Role definitions consumed by Claude Code (and any other copilot via symlinks)
│   ├── frontend-developer.md          — planning agent for the Vite + React + MUI SPA
│   └── product-strategy-analyst.md    — ideation/strategy agent
├── .commands/               # Lightweight slash-command utilities
│   ├── commit.md            — staged-commit + PR helper
│   ├── explain.md           — concept-focused explainer
│   └── meta-prompt.md       — prompt rewriter
└── skills/                  # Long-running workflows (the main SDD entrypoints)
    ├── enrich-user-story/SKILL.md     — closes a vague request into a decision-locked requirement
    ├── write-pr-report/SKILL.md       — formats reviewer-friendly PR descriptions
    └── react-doctor/SKILL.md          — react-doctor lint workflow
```

## Symlinks

Claude Code reads from `.claude/`. The folders below are symlinks to the canonical content in this directory:

- `.claude/agents`   → `../ai-specs/.agents`
- `.claude/commands` → `../ai-specs/.commands`
- `.claude/skills`   → `../ai-specs/skills`

Update files here; Claude Code picks the change up immediately through the symlink. Do not duplicate content into `.claude/` directly.

## Adding new workflows

- Prefer **skills** over commands for any recurring task (skills can carry their own instructions and run independent of a single prompt).
- Add new skills under `skills/<skill-name>/SKILL.md`. Use the existing skills as templates.
- Reserve `.commands/` for short, parameterized one-shot utilities.
- Reserve `.agents/` for role definitions used via Claude Code's `Agent` tool.

## Related documents

- [`docs/doc_architecture.md`](../docs/doc_architecture.md) — project architecture and layer responsibilities.
- [`docs/doc_ai_planning_mode.md`](../docs/doc_ai_planning_mode.md) — planning-mode rules and the High-Level Technical Contract format.
- [`docs/doc_verification_guide.md`](../docs/doc_verification_guide.md) — verification paths for changes.
- [`CLAUDE.md`](../CLAUDE.md) — repo-level codebase guide.
