---
title: Quickstart — Your First Heist
description: Walk through your first Gangsta Agents Heist cycle from start to finish.
navigation.order: 3
---
This guide walks you through a complete Heist cycle — the Gangsta Agents way to build a feature. By the end, you'll understand how the 6 phases work together and why structured development beats ad-hoc coding.

::callout{type="info" icon="i-lucide-rocket"}
**Before you start:** Make sure you've [installed Gangsta Agents](/getting-started/installation) and verified the installation works.
::

## Step 1: Express Your Intent

Start a fresh session with your AI tool and tell it what you want to build:

> "I want to add a user authentication system to my app"

That's it. The **1% Rule** kicks in automatically — the agent recognizes this as a "build something new" intent and invokes `gangsta:reconnaissance`.

## Step 2: Reconnaissance

The agent deploys its intel-gathering skills:

- Scans your codebase for existing patterns, dependencies, and architecture
- Identifies relevant files, conventions, and constraints
- Produces a **Dossier** — a structured report of findings
- Asks you to **approve the Dossier** before proceeding

::callout{type="warning" icon="i-lucide-shield"}
**Phase Gate:** You must approve the Dossier. If the intel is incomplete, ask for more reconnaissance before moving on.
::

## Step 3: The Grilling

The agent runs an **adversarial debate** — a Proposer argues for the best approach while a Devil's Advocate challenges every assumption. This surfaces edge cases, risks, and trade-offs you might miss in a single-pass design.

Output: **Grilling Conclusions** documenting the winning approach and rejected alternatives.

## Step 4: The Sit-Down

Now the agent drafts the **Contract** — a formal specification document:

- What will be built (scope)
- What won't be built (out of scope)
- Acceptance criteria
- Architectural decisions
- Applicable constitution rules

::callout{type="danger" icon="i-lucide-ban"}
**No code allowed.** The Sit-Down is purely about specification. If any code appears, the phase must restart.
::

You review and **sign the Contract** — this is the law that governs all subsequent implementation.

## Step 5: Resource Development

The agent decomposes the Contract into an **Execution Plan**:

- Breaks work into parallel task packages
- Assigns territories (domains of responsibility)
- Allocates resources and subagents
- Identifies dependencies between tasks

You approve the Execution Plan, and implementation begins.

## Step 6: Execution

Workers implement the Execution Plan in parallel:

- Each worker implements their assigned tasks
- Test-Driven Development (`gangsta:drill-tdd`) enforces Red-Green-Refactor
- Budgets are tracked per task
- Code respects the Contract — deviations require a spec revision

## Step 7: The Delivery

The Consigliere reviews all deliverables:

- Code review against the Contract
- Integration testing
- The Ledger is updated with insights and fails
- Production-ready code is delivered

::callout{type="success" icon="i-lucide-check-circle"}
**Phase Gate:** You declare the Heist complete. The feature is spec'd, built, verified, and documented.
::

## The Full Pipeline

Here's what your first Heist looks like end-to-end:

| Phase | Skill | You Do | Output |
|-------|-------|--------|--------|
| Reconnaissance | `gangsta:reconnaissance` | Approve Dossier | Intel report |
| The Grilling | `gangsta:the-grilling` | Approve Consensus | Design decisions |
| The Sit-Down | `gangsta:the-sit-down` | Sign Contract | Specification |
| Resource Dev | `gangsta:resource-development` | Approve Execution Plan | Task breakdown |
| Execution | `gangsta:the-hit` | Approve Completion | Working code |
| The Delivery | `gangsta:laundering` | Declare Complete | Clean delivery |

::callout{type="info" icon="i-lucide-external-link"}
**Deep dive:** Read the full Heist Pipeline documentation for detailed checklists, gate conditions, and phase-specific processes.
::

[Continue to the Heist Pipeline →](/heist-pipeline)
