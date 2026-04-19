---
title: The Heist Pipeline
description: The 6-phase development cycle that every feature goes through in Gangsta Agents.
navigation.order: 3
---

# The Heist Pipeline

Every feature development cycle in Gangsta Agents is called a **Heist** — a structured 6-phase process that ensures specs are written before code, designs are debated before committing, and results are verified before delivery.

::pipeline-flow{}

## The Six Phases

### 1. Reconnaissance

**Skill:** `gangsta:reconnaissance`

Gather intel. The agent deploys associates to explore the codebase, identify patterns, find dependencies, and understand requirements. The output is a **Dossier** — a structured intelligence report.

**Gate:** Don approves the Dossier.

[Reconnaissance deep dive →](/heist-pipeline/reconnaissance)

### 2. The Grilling

**Skill:** `gangsta:the-grilling`

Adversarial debate. A Proposer argues for the best approach while a Devil's Advocate challenges every assumption. This surfaces edge cases, risks, and trade-offs that single-perspective design misses. The output is **Grilling Conclusions**.

**Gate:** Don approves the consensus.

[The Grilling deep dive →](/heist-pipeline/the-grilling)

### 3. The Sit-Down

**Skill:** `gangsta:the-sit-down`

Spec drafting. No code is allowed during this phase — only specification. The Contract defines scope, out-of-scope, acceptance criteria, architectural decisions, and applicable rules. The output is a **signed Contract**.

**Gate:** Don signs the Contract.

[The Sit-Down deep dive →](/heist-pipeline/the-sit-down)

### 4. Resource Development

**Skill:** `gangsta:resource-development`

Task decomposition. The Contract is broken into parallel work packages, territories are assigned to Crew Leads, and resources are allocated. The output is an **Execution Plan**.

**Gate:** Don approves the Execution Plan.

[Resource Development deep dive →](/heist-pipeline/resource-development)

### 5. Execution

**Skill:** `gangsta:the-hit`

Parallel implementation. Workers implement their assigned tasks, using TDD (`gangsta:drill-tdd`) for each work package. Budgets are tracked. The output is **implemented code with budget reports**.

**Gate:** Don approves completion.

[Execution deep dive →](/heist-pipeline/the-hit)

### 6. The Delivery

**Skill:** `gangsta:laundering`

Verification and integration. The Consigliere reviews all deliverables against the Contract. The Ledger is updated with insights and fails. The output is **clean, production-ready code**.

**Gate:** Don declares the Heist complete.

[The Delivery deep dive →](/heist-pipeline/laundering)

## Phase Gates

Every phase ends with a gate — a checkpoint that requires the Don's explicit approval. This is non-negotiable:

::callout{type="warning" icon="i-lucide-shield"}
**No auto-advancing.** The framework never moves to the next phase without your approval. If you're unsure, ask for more information. If the output is incomplete, reject it and ask for revisions.
::

## Starting a Heist

To start a Heist, simply express a building intention in your AI tool:

> "I want to build a new feature"

The agent will invoke `gangsta:reconnaissance` automatically (the 1% Rule ensures this). From there, each phase flows into the next — with your approval at every gate.

## Resuming a Heist

If a session is interrupted, the next session can resume from the last checkpoint:

1. Check `docs/gangsta/` for checkpoint files
2. Read the latest checkpoint
3. Present the resume context to the Don
4. Continue from the phase where you left off

[Checkpoint Recovery →](/advanced/checkpoint-recovery)
