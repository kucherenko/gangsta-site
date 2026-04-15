---
title: The Borgata Hierarchy
description: The organizational structure of a Gangsta project — Don, Consigliere, Underboss, Capo, Soldier, and The Ledger.
navigation.order: 2
---

# The Borgata Hierarchy

Gangsta organizes AI agent roles around the Borgata — a mafia family hierarchy. Each role has specific responsibilities and authority levels. You (the user) are always the Don.

::hierarchy-tree{}

## The Roles

### Don (You)

The supreme authority. You approve every phase gate, sign every Contract, and declare every Heist complete. The framework never auto-advances without your explicit approval.

- **Authority:** Final decision on all matters
- **Responsibility:** Approve dossiers, sign contracts, approve war plans, declare heists complete
- **Invokes:** Any skill, at any time
- **Rule:** Your word is law. When instructions conflict, Don's explicit instructions override everything.

### Consigliere

The strategic advisor. Outside the chain of command — provides impartial architectural guidance, security review, and code auditing.

- **Invocation:** `gangsta:the-consigliere`
- **Authority:** Advisory only — no direct command power
- **Responsibility:** Architectural review, security analysis, impartial assessment
- **Used for:** Bug diagnosis, code review, architecture decisions

### Underboss

The Chief Operating Officer. Handles task decomposition, resource allocation, and planning. Dispatches work to Capos and Soldiers.

- **Invocation:** `gangsta:the-underboss`
- **Authority:** Task assignment and decomposition
- **Responsibility:** Break Contracts into work packages, assign territories, manage dependencies
- **Used for:** Resource Development phase, complex multi-task coordination

### Capo

The domain crew lead. Each Capo owns a territory (a domain of the codebase) and orchestrates work within it.

- **Invocation:** `gangsta:the-capo`
- **Authority:** Per-territory orchestration
- **Responsibility:** Coordinate soldiers within a territory, enforce local quality standards
- **Used for:** Multi-file changes within a domain, territory-specific execution

### Soldier (Subagent)

The executor. Stateless code-execution agents that implement assigned tasks. They follow orders, write code, and run tests.

- **Authority:** None — executes assigned tasks only
- **Responsibility:** Implement code per the Contract and War Plan
- **Used for:** The Hit phase — parallel code execution with TDD

### Associate (External Tool)

External tools and API proxies. Not part of the hierarchy — they provide services that Soldiers and Capos use.

- **Examples:** GitHub API, database clients, CI/CD systems
- **Used for:** Any external service interaction

### The Ledger

Institutional memory. Not a role but a record — persists insights, fails, and constitution rules across sessions.

- **Invocation:** `gangsta:the-ledger`
- **Location:** `docs/gangsta/` in your project
- **Contains:** Insights (successful patterns), Fails (documented mistakes), Constitution (accumulated rules)

## Chain of Command

The hierarchy enforces a strict chain of command:

```
Don (You)
  ├── Consigliere (Advisory)
  ├── Underboss (Operations)
  │   ├── Capo (Crew Lead)
  │   │   └── Soldiers (Execution)
  │   └── Associates (External)
  └── The Ledger (Memory)
```

This ensures:

- **No rogue agents** — Soldiers only execute assigned tasks
- **No skipped gates** — Every phase requires Don approval
- **No lost knowledge** — The Ledger persists across sessions
- **No architectural drift** — The Consigliere keeps the big picture

[Learn about The Ledger →](/core-concepts/the-ledger)