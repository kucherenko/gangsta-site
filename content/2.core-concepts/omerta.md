---
title: Omerta — The Five Laws
description: The five governance laws that prevent chaos in AI-assisted development.
navigation.order: 4
---
Omerta is the code of silence — and in Gangsta Agents, it's the code of governance. Five laws that prevent the chaos typical of undisciplined AI-assisted development.

::callout{type="warning" icon="i-lucide-scale"}
These laws are always active. They're invoked via `gangsta:omerta` and govern every phase of every Heist.
::

## Law 1: The Introduction Rule

**No direct agent-to-agent communication.**

Agents never talk to each other directly. All communication flows through files — checkpoints, contracts, execution plans. This prevents the "telephone game" problem where messages get distorted through chains of agents.

**In practice:**
- Workers don't message other Workers
- Crew Leads don't message other Crew Leads
- All coordination happens through shared files in `docs/gangsta/`

## Law 2: The Rule of Availability

**Every state must be checkpointed to files.**

No agent holds critical state in memory. Everything is written to disk so any agent can pick up where another left off. This is what makes Heist resumption possible.

**In practice:**
- Dossiers, Contracts, Execution Plans — all persisted as files
- Checkpoints written after every phase
- Any new session can reconstruct the full state from files

## Law 3: The Rule of Truth

**Every claim must cite its source.**

Agents must reference where they found information. No "I think the database uses PostgreSQL" — instead: "The database config in `config/database.yml` line 42 shows PostgreSQL." This prevents hallucination from propagating.

**In practice:**
- File paths and line numbers for code claims
- URLs for documentation claims
- "I don't know" is acceptable; guessing is not

## Law 4: The Rule of Budget

**Resource budgets are tracked.**

Every task allocated to a Worker has a budget — estimated time or token cost. Budgets are tracked during Execution to prevent runaway tasks. If a task exceeds its budget, it must request an extension.

**In practice:**
- Execution Plans include budget estimates per task
- Workers report budget consumption during execution
- Over-budget tasks raise a flag for Don review

## Law 5: Spec is Law

**If code contradicts the spec, revise the spec — not the code.**

This is the philosophical foundation. The Contract (spec) is the authoritative source of truth. If implementation reveals a spec issue, the spec is formally revised. Code is never the primary artifact — the spec is.

**In practice:**
- The Sit-Down produces the Contract
- Execution implements the Contract
- Deviations require a Contract amendment, not a code-first approach
- This ensures consistency and auditability

## Why These Laws Matter

Without Omerta, AI-assisted development degenerates:

| Problem | Law That Prevents It |
|---------|---------------------|
| Agents contradict each other | Introduction Rule |
| Lost context across sessions | Rule of Availability |
| Hallucinated facts propagated | Rule of Truth |
| Runaway tasks consuming resources | Rule of Budget |
| Code drifting from requirements | Spec is Law |

These laws aren't bureaucratic overhead — they're the guardrails that make AI-assisted development reliable and repeatable.
