---
title: Spec-Driven Development
description: The philosophy at the core of Gangsta Agents — spec is law, code is implementation.
navigation.order: 7
---
**Spec is Law.** This is Omerta Law #5 and the philosophical foundation of Gangsta Agents.

::callout{type="warning" icon="i-lucide-scroll"}
Code that contradicts the spec means the spec needs revision — not the other way around. Never write code without a spec.
::

## The Problem Spec-Driven Development Solves

Traditional AI-assisted development follows a dangerous pattern:

1. User describes what they want
2. AI agent starts writing code immediately
3. Code grows organically without a plan
4. Edge cases are discovered late (or never)
5. Requirements drift as implementation evolves
6. The final product doesn't match what was intended

Sound familiar? This is **shadow development** — code written without specification, driven by implementation convenience rather than intentional design.

## The Spec-Driven Alternative

Gangsta Agents enforces spec-driven development through the Heist Pipeline:

| Phase | What Happens | Code Allowed? |
|-------|-------------|----------------|
| Reconnaissance | Gather intel, understand context | ❌ No |
| The Grilling | Debate approaches, surface risks | ❌ No |
| The Sit-Down | Write the specification (Contract) | ❌ **Absolutely not** |
| Resource Development | Plan tasks and allocate work | ❌ No |
| Execution | Implement the spec | ✅ Yes |
| The Delivery | Verify against the spec | ❌ Only review |

Notice that **code is only written during one phase** — Execution. And by that point, you have:

- A Dossier that proves you understand the codebase
- Grilling Conclusions that show you've debated alternatives
- A signed Contract that defines exactly what will be built
- An Execution Plan that breaks the work into manageable tasks

## The Contract: Source of Truth

The Contract produced during The Sit-Down is the authoritative document. It includes:

- **Objective** — What's being built and why
- **Requirements** — Functional and non-functional
- **Architectural Decisions** — Key design choices and rationale
- **Grilling Conclusions** — What was debated and decided
- **Applicable Rules** — Which constitution rules apply
- **Acceptance Criteria** — How to verify success
- **Out of Scope** — What's explicitly not being built

If during Execution, a developer discovers the spec is wrong, the correct process is:

1. **Stop implementation**
2. **Revise the Contract** (with Don approval)
3. **Then resume implementation**

This is not bureaucracy — it's discipline. Every spec revision is tracked and intentional.

## Spec vs. Code Priority

| Scenario | Correct Action |
|----------|---------------|
| Code works but contradicts spec | Revise the spec, then align the code |
| Spec says X, but implementation reveals X is wrong | Revise the spec first, then fix the code |
| Developer "knows better" than the spec | Follow the spec; propose a revision if needed |
| Edge case not covered by spec | Add it to the spec, then implement |

## The Heist Cycle Enforces This

The Heist Pipeline is structured specifically to prevent code-first development:

::callout{type="danger" icon="i-lucide-ban"}
The Sit-Down (Phase 3) has an explicit rule: **NO CODE ALLOWED.** If any code appears during spec drafting, the phase must restart. This is non-negotiable.
::

By the time code is written (Execution), there's no ambiguity about what to build. The spec was debated (The Grilling), documented (The Sit-Down), and decomposed (Resource Development). The implementation phase is purely execution — no design decisions, no architectural debates, no scope creep.

## Benefits

- **Predictable outcomes** — The spec defines success before code is written
- **Auditability** — Every design decision is documented with rationale
- **No scope creep** — The Contract defines what's in scope and what's not
- **Consistent quality** — TDD during Execution ensures code meets the spec
- **Team alignment** — Everyone works from the same specification
