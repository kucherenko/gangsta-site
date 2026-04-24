---
title: Multi-Agent Patterns
description: How to use the Underboss and Crew Lead for task decomposition and territory orchestration.
navigation.order: 3
---
When a Heist involves multiple files, multiple domains, or multiple concerns, the Gangsta Agents hierarchy provides structured patterns for multi-agent coordination.

## The Two Orchestration Skills

### Underboss (`gangsta:the-underboss`)

The COO. Handles task decomposition and resource allocation.

**When to invoke:**
- Complex features that span multiple files or domains
- Tasks that have clear dependency chains
- When you need an Execution Plan broken into parallel work packages

**What the Underboss does:**
1. Analyzes the Contract
2. Decomposes work into discrete packages
3. Maps dependencies between packages
4. Assigns territories (domains) to Crew Leads
5. Estimates budgets per package
6. Produces the Execution Plan

### Crew Lead (`gangsta:the-capo`)

The domain crew lead. Orchestrates work within a territory.

**When to invoke:**
- When a territory has multiple related tasks
- When a domain needs coordinated changes across multiple files
- When sub-tasks within a territory need sequencing

**What the Crew Lead does:**
1. Receives territory assignment from the Underboss
2. Sequences tasks within the territory
3. Dispatches Workers for individual tasks
4. Enforces quality standards within the territory
5. Reports completion status

## Pattern 1: Parallel Territories

**Best for:** Features that touch independent domains (e.g., frontend + backend)

```
Underboss
├── Territory A (Frontend) → Crew Lead A → Worker 1, Worker 2
├── Territory B (Backend) → Crew Lead B → Worker 3
└── Territory C (Database) → Crew Lead C → Worker 4
```

**Workflow:**
1. Underboss decomposes the Contract into 3 territories
2. Each Crew Lead sequences their territory's tasks
3. Workers execute in parallel across territories
4. No cross-territory dependencies — maximum parallelism

## Pattern 2: Sequential Dependencies

**Best for:** Features with hard dependencies (e.g., database schema must exist before API endpoints)

```
Underboss
├── Phase 1: Territory A (Schema) → Crew Lead A → Worker 1
│   (gate: schema complete)
├── Phase 2: Territory B (API) → Crew Lead B → Worker 2
│   (gate: API complete)
└── Phase 3: Territory C (Frontend) → Crew Lead C → Worker 3
```

**Workflow:**
1. Underboss identifies dependency chain
2. Crew Leads execute sequentially, each waiting for the previous to complete
3. Each phase has a gate — next phase doesn't start until current one is verified

## Pattern 3: Mixed Parallel-Sequential

**Best for:** Most real-world features (some things can run in parallel, others can't)

```
Underboss
├── Phase 1: [Territory A (DB) | Territory B (Config)]  ← parallel
│   (gate: both complete)
├── Phase 2: [Territory C (API) | Territory D (Tests)]  ← parallel
│   (gate: both complete)
└── Phase 3: Territory E (Integration)  ← sequential
```

**Workflow:**
1. Within each phase, territories run in parallel
2. Phases run sequentially (phase 2 waits for phase 1)
3. The Execution Plan documents the dependency graph

## Communication Protocol

All inter-agent communication follows Omerta Law #1 (The Introduction Rule):

**Workers never communicate directly with each other.** All communication flows through files:

- **Contracts** → define what to build
- **Execution Plans** → define how to build it
- **Checkpoints** → track progress
- **The Ledger** → preserve knowledge

This prevents the "telephone game" problem where messages distort through chains of agents.

## Choosing the Right Pattern

| Situation | Pattern | Orchestration |
|-----------|---------|---------------|
| Single file, single concern | Sequential | Crew Lead only |
| Multiple independent concerns | Parallel Territories | Underboss + Crew Leads |
| Dependent stages | Sequential Dependencies | Underboss |
| Mixed dependencies | Mixed | Underboss + Crew Leads |

::callout{type="info" icon="i-lucide-lightbulb"}
**Tip:** If you're unsure which pattern to use, invoke `gangsta:the-underboss` during Resource Development. The Underboss will analyze the Contract and recommend the appropriate pattern in the Execution Plan.
::
