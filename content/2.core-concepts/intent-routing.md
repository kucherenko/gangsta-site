---
title: Intent Routing
description: How Gangsta Agents maps user intent to the right skill invocation.
navigation.order: 5
---

# Intent Routing

When you speak, the agent analyzes your intent and routes it to the appropriate Gangsta Agents skill. This routing is automatic — powered by the 1% Rule — but understanding the mapping helps you work more effectively.

## Intent → Skill Mapping

| User Intent | Action | Skill Invoked |
|-------------|--------|---------------|
| **Build something new** | Start a Heist | `gangsta:reconnaissance` |
| **Fix a bug or issue** | Get diagnosis first | `gangsta:the-consigliere` |
| **Debug a problem** | Systematic root-cause analysis | `gangsta:interrogation-debugging` |
| **Continue existing work** | Resume from checkpoint | Check `docs/gangsta/` for files |
| **Ask a question** | Answer directly | No skill needed |
| **Review or audit** | Structured assessment | `gangsta:audit-review` |
| **Write tests first** | TDD cycle | `gangsta:drill-tdd` |
| **Process feedback** | Rigorous review | `gangsta:receiving-orders` |

## Skill Priority

When multiple skills could apply, routing follows this order:

1. **Process skills first** — `reconnaissance`, `interrogation-debugging`, `drill-tdd`
   - These determine *how* to approach the task
   - They set up the methodology before any work begins

2. **Orchestration skills second** — `the-underboss`, `the-capo`
   - These manage *who* does what
   - They decompose work after the approach is established

3. **Implementation skills third** — `the-hit`, `resource-development`
   - These guide *execution*
   - They operate within the structure established by process skills

## Skill Types

Skills come in two flavors:

### Rigid Skills
Must be followed exactly. Don't adapt away from the discipline.

- `gangsta:drill-tdd` — Red-Green-Refactor, no shortcuts
- `gangsta:interrogation-debugging` — Systematic root-cause, no guessing
- `gangsta:omerta` — Laws apply always, no exceptions

### Flexible Skills
Adapt principles to context. The spirit matters more than the letter.

- `gangsta:reconnaissance` — Intel gathering adapts to codebase size
- `gangsta:the-grilling` — Debate depth adapts to feature complexity

## Common Routing Mistakes

::callout{type="danger" icon="i-lucide-alert-triangle"}
**Anti-patterns to avoid:**
::

1. **Skipping reconnaissance** — "I already know the codebase" → You probably don't know it as well as a systematic scan. Invoke `gangsta:reconnaissance`.

2. **Debugging without structure** — "Let me just try changing this line" → Use `gangsta:interrogation-debugging` for systematic root-cause analysis.

3. **Coding without a spec** — "I'll just start implementing" → This violates Omerta Law #5 (Spec is Law). Run a Heist first.

4. **Auto-advancing phases** — "The dossier looks fine, let's keep going" → Every phase gate requires explicit Don approval. No auto-advancing.

## The Flow in Practice

```
User says "I want to add notifications"
  └── Intent: Build something new
       └── Skill: gangsta:reconnaissance
            └── Don approves Dossier
                 └── gangsta:the-grilling
                      └── Don approves Consensus
                           └── gangsta:the-sit-down
                                └── Don signs Contract
                                     └── gangsta:resource-development
                                          └── Don approves Execution Plan
                                               └── gangsta:the-hit (Execution)
                                                    └── Don approves Completion
                                                         └── gangsta:laundering (The Delivery)
                                                              └── Don declares Complete
```

Each arrow represents a phase gate — a point where you must explicitly approve before proceeding.
