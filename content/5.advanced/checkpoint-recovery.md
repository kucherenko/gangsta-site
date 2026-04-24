---
title: Checkpoint Recovery
description: How to resume interrupted Heists from checkpoint files.
navigation.order: 4
---
Heists can be interrupted — your AI session might time out, you might need to step away, or a technical issue might cut things short. Gangsta Agents' checkpoint system ensures you never lose progress.

## How Checkpoints Work

Every phase of the Heist writes checkpoints to `docs/gangsta/`:

```
docs/gangsta/{heist-name}/
├── checkpoints/
│   ├── 01-reconnaissance.md
│   ├── 02-the-grilling.md
│   ├── 03-the-sit-down.md
│   ├── 04-resource-development.md
│   └── 05-the-hit.md
├── recon/
│   └── 2026-04-15-recon-dossier.md
├── specs/
│   └── 2026-04-15-contract.md
└── plans/
    └── 2026-04-15-execution-plan.md
```

Each checkpoint records:
- **Phase completed** — Which phase just finished
- **Gate status** — Whether the Don approved
- **Key decisions** — Major choices made during the phase
- **Artifacts produced** — Dossier, Contract, Execution Plan, etc.
- **Pending items** — Anything unresolved

## Resuming an Interrupted Heist

When you start a new session after an interruption:

### Step 1: Check for Checkpoints

Look in `docs/gangsta/` for heist directories with checkpoint files.

### Step 2: Read the Latest Checkpoint

The checkpoint tells you:
- Which phase was last completed
- What artifacts were produced
- Any pending decisions

### Step 3: Present Context to the Don

Start your new session by:

> "I'm resuming a Heist that was interrupted. The last completed phase was [Phase X]. Here's the context: [summary of checkpoint]. Should we continue from [Phase X+1]?"

### Step 4: Continue from the Last Approved Phase

Resume from the phase after the last **approved** checkpoint. If the last phase was completed but not approved, present the output for Don review before proceeding.

## Example: Interrupted During The Hit

```
docs/gangsta/notifications/
├── checkpoints/
│   ├── 01-reconnaissance.md  ← approved
│   ├── 02-the-grilling.md    ← approved
│   ├── 03-the-sit-down.md    ← approved
│   ├── 04-resource-development.md  ← approved
│   └── 05-the-hit.md         ← INCOMPLETE
├── recon/
│   └── 2026-04-15-recon-dossier.md
├── specs/
│   └── 2026-04-15-contract.md
└── plans/
    └── 2026-04-15-execution-plan.md
```

**Resume approach:**
1. Read all checkpoints to understand the full context
2. Read the Execution Plan to see which tasks were assigned
3. Check the incomplete Execution checkpoint for partial progress
4. Resume The Hit from where it left off, or restart if the partial work is unclear

## Example: Clean Resume After The Delivery

If the Heist completed successfully and you want to build something new:

1. The previous Heist's Ledger entries are preserved
2. Start a new Heist with `gangsta:reconnaissance`
3. The agent will read `docs/gangsta/` for context and institutional memory
4. Previous insights and fails inform the new Heist

## Best Practices

::callout{type="info" icon="i-lucide-save"}
**Checkpoint frequently:** The more granular your checkpoints, the easier it is to resume. The Heist Pipeline creates natural checkpoints at every phase gate.
::

::callout{type="warning" icon="i-lucide-alert-triangle"}
**Don't skip phases on resume.** Even if you're confident about where you left off, read the checkpoints. Context can be subtly different from what you remember, and the Rule of Truth (Omerta Law #3) requires citing sources — checkpoints are your sources.
::

## Checkpoint and Git

Checkpoints are files in `docs/gangsta/` — they should be committed to version control:

```bash
# After each phase gate
git add docs/gangsta/
git commit -m "heist: phase N checkpoint — [phase name]"
```

This ensures:
- Checkpoints survive across sessions
- The team can see Heist progress
- History is preserved even if the local environment changes