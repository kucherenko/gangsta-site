---
title: The Heist Pipeline
description: The 6-phase development cycle — from reconnaissance to the delivery.
navigation.order: 1
---

# The Heist Pipeline

Every feature development cycle in Gangsta Agents follows the same structured process — a 6-phase Heist that ensures specs are written before code, designs are debated before committing, and results are verified before delivery.

::pipeline-flow{}

## Phase Overview

| # | Phase | Skill | Gate | Output |
|---|-------|-------|------|--------|
| 1 | [Reconnaissance](/heist-pipeline/reconnaissance) | `gangsta:reconnaissance` | Dossier approved | Intel report |
| 2 | [The Grilling](/heist-pipeline/the-grilling) | `gangsta:the-grilling` | Consensus approved | Design decisions |
| 3 | [The Sit-Down](/heist-pipeline/the-sit-down) | `gangsta:the-sit-down` | Contract signed | Specification |
| 4 | [Resource Development](/heist-pipeline/resource-development) | `gangsta:resource-development` | Execution Plan approved | Task breakdown |
| 5 | [Execution](/heist-pipeline/the-hit) | `gangsta:the-hit` | Completion approved | Working code |
| 6 | [The Delivery](/heist-pipeline/laundering) | `gangsta:laundering` | Heist complete | Clean delivery |

## Phase Gates

Every phase ends with a **gate** — a checkpoint requiring the Don's explicit approval. The framework never auto-advances to the next phase.

::callout{type="warning" icon="i-lucide-shield"}
**You are the Don.** Your approval is required at every gate. If the output is incomplete or incorrect, reject it. The Heist only progresses when you say so.
::

## Starting a Heist

Express a building intention to your AI tool:

> "I want to add user notifications to my app"

The 1% Rule triggers `gangsta:reconnaissance` automatically. From there, each phase flows into the next with your approval at every gate.

## Resuming a Heist

If a session is interrupted:

1. Check `docs/gangsta/` for checkpoint files
2. Read the latest checkpoint
3. Present the resume context to the Don
4. Continue from the last completed phase

[Checkpoint Recovery guide →](/advanced/checkpoint-recovery)

## The Full Cycle

```
Reconnaissance → The Grilling → The Sit-Down → Resource Dev → Execution → The Delivery
     │                │                │               │            │             │
  Dossier         Consensus        Contract       Execution     Code +         Clean
  approved         approved          signed          Plan        Budgets      Delivery
                                                   approved
```

Each phase produces a concrete artifact that the next phase depends on. You cannot skip phases, and you cannot proceed without explicit approval.
