---
title: The Ledger
description: Gangsta's institutional memory — insights, fails, and constitution rules that persist across sessions.
navigation.order: 6
---

# The Ledger

The Ledger is Gangsta's institutional memory. It persists across sessions, ensuring that lessons learned aren't lost when your AI session ends.

::callout{type="info" icon="i-lucide-book-open"}
**Invocation:** `gangsta:the-ledger`

**Location:** `docs/gangsta/` in your project root
::

## What the Ledger Contains

### Insights

Successful patterns, non-obvious approaches, and domain knowledge worth preserving.

**Examples:**
- "The payment gateway requires idempotency keys for all POST requests"
- "React Query's `useSuspenseQuery` works better than `useQuery` for this project's SSR setup"
- "The database migration system doesn't support column renames — always add + remove instead"

### Fails

Documented mistakes — approaches that caused rework, confusion, or wasted effort.

**Examples:**
- "Don't use `any` in TypeScript configs — it bypasses the type checker in ways that aren't obvious"
- "The external API rate-limits to 100 req/min, not 1000 as the docs claim"
- "Running tests in parallel on this project causes flaky failures due to shared database state"

### Constitution

Accumulated rules that the team has agreed upon — project-specific extensions of Omerta.

**Examples:**
- "All database queries must use the QueryBuilder, never raw SQL"
- "Feature flags must be in the `config/features.yml` file, not hardcoded"
- "Every PR must include a test for the happy path and at least one error path"

## File Structure

The Ledger lives in your project at `docs/gangsta/`:

```
docs/gangsta/
├── insights/
│   └── 2026-04-15-payment-idempotency.md
├── fails/
│   └── 2026-04-10-parallel-test-flakiness.md
├── constitution/
│   └── rules.md
└── {heist-name}/
    ├── checkpoints/
    │   ├── 01-reconnaissance.md
    │   ├── 02-the-grilling.md
    │   └── ...
    ├── recon/
    │   └── 2026-04-15-recon-dossier.md
    ├── specs/
    │   └── 2026-04-15-contract.md
    └── plans/
        └── 2026-04-15-war-plan.md
```

## When to Write to the Ledger

The Ledger is updated during two key moments:

### During Laundering

The final Heist phase (`gangsta:laundering`) includes a Ledger update step. The Consigliere reviews what worked, what failed, and what rules should be added to the constitution.

### During Conversations

After any significant exchange outside a Heist — if the Don shares domain knowledge or if an approach is discovered that's worth preserving — offer to write a Ledger entry:

::callout{type="info" icon="i-lucide-pen-line"}
**Protocol:** After the exchange resolves, ask once: *"Worth saving to the Ledger as an insight or fail?"*

- If yes: write the entry using the Ledger format
- If no: drop it — never ask again for the same topic in the same session
- Never write a Ledger entry without explicit Don approval
::

## Proactive Memory Capture

Gangsta encourages proactive memory capture:

| Situation | Action |
|-----------|--------|
| Non-obvious approach discovered | Offer to save as **Insight** |
| Don shares domain knowledge | Offer to save as **Insight** |
| Creative solution to a constraint | Offer to save as **Insight** |
| Don rejects an approach | Offer to save as **Fail** |
| Approach causes rework | Offer to save as **Fail** |
| Repeated mistake pattern | Offer to save as **Fail** |

## Why the Ledger Matters

Without institutional memory, every session starts from zero. The Ledger ensures:

- **Insights compound** — Successful patterns are reused, not rediscovered
- **Fails aren't repeated** — Documented mistakes prevent future waste
- **Constitution grows** — Project-specific rules accumulate over time
- **New sessions are informed** — Any agent can read `docs/gangsta/` and understand the project's history