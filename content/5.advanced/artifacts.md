---
title: Artifacts Reference
description: Every file Gangsta Agents generates during a Heist — what they contain, where they live, and which phase produces them.
navigation.order: 5
---

Gangsta Agents generates structured documentation throughout every Heist. These artifacts are the paper trail — the evidence that work was done right, decisions were reasoned, and lessons were captured.

All artifacts live under `docs/gangsta/` in your project root.

## Full Directory Structure

```
docs/gangsta/
├── insights/
│   └── {date}-{slug}.md
├── fails/
│   └── {date}-{slug}.md
├── constitution/
│   └── rules.md
└── {heist-name}/
    ├── checkpoints/
    │   ├── 01-reconnaissance.md
    │   ├── 02-the-grilling.md
    │   ├── 03-the-sit-down.md
    │   ├── 04-resource-development.md
    │   ├── 05-the-hit.md
    │   └── 06-laundering.md
    ├── recon/
    │   └── {date}-recon-dossier.md
    ├── specs/
    │   └── {date}-contract.md
    └── plans/
        └── {date}-execution-plan.md
```

---

## Heist Artifacts

These artifacts are produced during a single Heist and stored under `docs/gangsta/{heist-name}/`.

### Recon Dossier

**Phase:** Reconnaissance (Phase 1)  
**Skill:** `gangsta:reconnaissance`  
**Path:** `docs/gangsta/{heist-name}/recon/{date}-recon-dossier.md`

The intelligence report that grounds every subsequent phase decision in verified facts.

| Section | Contents |
|---------|----------|
| Codebase Overview | Architecture, tech stack, directory structure, existing patterns |
| Dependencies | Related modules, APIs, and services |
| Constraints | Technical limitations, performance requirements, security considerations |
| Risks & Unknowns | What needs further investigation before design can begin |
| Recommended Scope | What reconnaissance suggests the feature should cover |

The Dossier is the single factual foundation for The Grilling and The Sit-Down. No design decision is valid unless grounded in the Dossier.

---

### Grilling Conclusions

**Phase:** The Grilling (Phase 2)  
**Skill:** `gangsta:the-grilling`  
**Incorporated into:** The Contract during The Sit-Down

The structured output of adversarial debate between the Proposer and Devil's Advocate. Not a standalone file — the conclusions are folded into the Contract.

| Section | Contents |
|---------|----------|
| Key Decisions | What was agreed upon and why |
| Rejected Alternatives | Approaches considered and explicitly rejected, with reasoning |
| Unresolved Objections | Disagreements escalated to the Don |
| Risk Assessment | Identified risks with severity and mitigation strategies |

---

### Contract

**Phase:** The Sit-Down (Phase 3)  
**Skill:** `gangsta:the-sit-down`  
**Path:** `docs/gangsta/{heist-name}/specs/{date}-contract.md`

The authoritative specification. Every implementation decision during The Hit traces back here. **This is law.**

| Section | Contents |
|---------|----------|
| Objective | What's being built and why |
| Requirements | Functional and non-functional requirements |
| Architectural Decisions | Key design choices with rationale |
| Grilling Conclusions | Design decisions and rejected alternatives from Phase 2 |
| Applicable Constitution Rules | Project-specific rules that apply to this Heist |
| Acceptance Criteria | How success is verified — each criterion is testable |
| Out of Scope | What is explicitly not being built |
| Open Risks | Known risks with severity and mitigation |

::callout{type="danger" icon="i-lucide-scroll"}
**Spec is Law.** If implementation contradicts the Contract, revise the Contract — not the implementation. Revisions require Don approval.
::

---

### Execution Plan

**Phase:** Resource Development (Phase 4)  
**Skill:** `gangsta:resource-development`  
**Path:** `docs/gangsta/{heist-name}/plans/{date}-execution-plan.md`

The operational blueprint. Translates the Contract into a parallel work schedule.

| Section | Contents |
|---------|----------|
| Work Packages | Discrete tasks with clear deliverables |
| Territory Assignments | Which domain each package belongs to |
| Budget Estimates | Resource budgets per package |
| Dependency Map | Which packages block which |
| Execution Order | Which tasks run in parallel vs. sequentially |
| Risk Mitigations | How to handle potential blockers |

---

### Checkpoints

**Phase:** All phases  
**Path:** `docs/gangsta/{heist-name}/checkpoints/{N}-{phase}.md`

Written at the end of each phase gate. Checkpoints are the session recovery mechanism — if a Heist is interrupted, the next session reads checkpoints to restore context.

Each checkpoint records:

- **Phase completed** — Which phase just finished
- **Gate status** — Whether the Don approved
- **Key decisions** — Major choices made during the phase
- **Artifacts produced** — Dossier, Contract, Execution Plan, etc.
- **Pending items** — Anything unresolved before the interruption

```
checkpoints/
├── 01-reconnaissance.md
├── 02-the-grilling.md
├── 03-the-sit-down.md
├── 04-resource-development.md
├── 05-the-hit.md
└── 06-laundering.md
```

See [Checkpoint Recovery](/advanced/checkpoint-recovery) for how to resume interrupted Heists.

---

## Ledger Artifacts

These artifacts persist across all Heists. They live directly under `docs/gangsta/` — not inside a heist subdirectory.

### Insights

**Written by:** The Delivery (Phase 6) or proactive capture during conversations  
**Path:** `docs/gangsta/insights/{date}-{slug}.md`

Non-obvious approaches, successful patterns, and domain knowledge worth preserving.

**Captured when:**
- A non-obvious approach is discovered
- The Don contributes domain knowledge
- A creative solution bypasses a complex constraint

**Example filenames:**
```
docs/gangsta/insights/
├── 2026-04-15-payment-idempotency.md
└── 2026-04-20-query-builder-pattern.md
```

---

### Fails

**Written by:** The Delivery (Phase 6) or proactive capture during conversations  
**Path:** `docs/gangsta/fails/{date}-{slug}.md`

Documented mistakes — approaches that caused rework, confusion, or wasted effort.

**Captured when:**
- The Don criticizes or rejects an approach
- An approach caused rework or confusion
- A repeated mistake pattern surfaces

**Example filenames:**
```
docs/gangsta/fails/
├── 2026-04-10-parallel-test-flakiness.md
└── 2026-04-18-raw-sql-bypassed-builder.md
```

---

### Constitution Rules

**Written by:** The Delivery (Phase 6), amended over time  
**Path:** `docs/gangsta/constitution/rules.md`

Accumulated project-specific commandments. These are project-level extensions of Omerta — rules the team has agreed should govern all future Heists.

**Grows over time** as each completed Heist proposes and ratifies new rules.

**Example entries:**
- "All database queries must use the QueryBuilder, never raw SQL"
- "Feature flags must be in `config/features.yml`, not hardcoded"
- "Every PR must include a test for the happy path and at least one error path"

::callout{type="info" icon="i-lucide-gavel"}
Constitution rules require Don approval before they are written. They are proposed at the end of The Delivery — never during implementation.
::

---

## Artifact Lifecycle

| Artifact | Created | Approved by | Lives in |
|----------|---------|-------------|---------|
| Recon Dossier | Reconnaissance | Don | `{heist}/recon/` |
| Grilling Conclusions | The Grilling | Don | Merged into Contract |
| Contract | The Sit-Down | Don (signed) | `{heist}/specs/` |
| Execution Plan | Resource Development | Don | `{heist}/plans/` |
| Checkpoints | All phases | Automatic | `{heist}/checkpoints/` |
| Insights | The Delivery / conversation | Don | `insights/` |
| Fails | The Delivery / conversation | Don | `fails/` |
| Constitution Rules | The Delivery | Don | `constitution/` |

## Commit Convention

All artifacts should be committed to version control after each phase gate:

```bash
# After each phase
git add docs/gangsta/
git commit -m "heist({heist-name}): phase N — {phase name} artifacts"

# Ledger entries
git add docs/gangsta/insights/ docs/gangsta/fails/ docs/gangsta/constitution/
git commit -m "ledger: add insight — {slug}"
```

This ensures artifacts survive across sessions, remain visible to the full team, and maintain a historical record of every Heist.
