---
title: The 1% Rule
description: The core behavioral rule of Gangsta — if there's even a 1% chance a skill applies, you must invoke it.
navigation.order: 4
---

# The 1% Rule

The 1% Rule is the single most important rule in Gangsta. It's the behavioral contract that makes the entire framework work:

::callout{type="danger" icon="i-lucide-shield"}
**If there is even a 1% chance that a Gangsta skill applies to what you are doing, you MUST invoke it.**

This is not negotiable. This is not optional. You cannot rationalize your way out of it.
::

## Why the 1% Rule Exists

Without the 1% Rule, AI agents default to ad-hoc behavior:

- They jump straight to code without specs
- They skip planning and start implementing
- They ignore edge cases because "it's simple"
- They produce inconsistent results across sessions

The 1% Rule enforces discipline. It ensures every task, no matter how small, goes through the appropriate structured process. This produces reliable, repeatable outcomes.

## How It Works

When you (the Don) express an intent, the agent evaluates whether any Gangsta skill could apply. Even a slight possibility triggers invocation:

| Your Action | Skill Triggered | Why |
|-------------|----------------|-----|
| "I want to build a new feature" | `gangsta:reconnaissance` | New build = start a Heist |
| "Fix this bug" | `gangsta:the-consigliere` | Bug = need diagnosis first |
| "This code isn't working" | `gangsta:interrogation-debugging` | Debugging = systematic root-cause |
| "Continue where we left off" | Check `docs/gangsta/` | Resuming = read checkpoints |
| "Review this PR" | `gangsta:audit-review` | Review = structured assessment |

## Common Rationalizations (and Why They Fail)

The framework explicitly calls out the rationalizations agents use to skip skills:

| Rationalization | Reality |
|----------------|---------|
| "This is just a simple task" | Simple tasks become complex. Check for skills. |
| "I'll just write the code directly" | Code without a spec is a shadow hotfix. |
| "The Don wants it fast" | Speed without structure produces *stronzate* (garbage). The Heist IS the fast path. |
| "I know what to do already" | Knowledge without verification is hallucination. |
| "This doesn't need a full Heist" | The Don decides what needs a Heist. Ask, don't assume. |

## The Skill Check Protocol

Before every action, the agent runs this mental checklist:

1. **Could `gangsta:reconnaissance` apply?** — Am I building something new?
2. **Could `gangsta:the-consigliere` apply?** — Am I diagnosing or reviewing?
3. **Could `gangsta:interrogation-debugging` apply?** — Am I debugging a problem?
4. **Could `gangsta:drill-tdd` apply?** — Am I writing implementation code?
5. **Could `gangsta:the-hit` apply?** — Am I in an active Heist execution phase?
6. **Could any other skill apply?** — Check the full skill catalog.

If any answer is "maybe" — that's a 1%. **Invoke the skill.**

## Priority Order

When multiple skills could apply, the 1% Rule follows a priority order:

1. **Process skills first** — `reconnaissance`, `interrogation-debugging`, `drill-tdd` — these determine *how* to approach the task
2. **Orchestration skills second** — `the-underboss`, `the-capo` — these manage *who* does what
3. **Implementation skills third** — `the-hit`, `resource-development` — these guide *execution*

::callout{type="info" icon="i-lucide-lightbulb"}
**Example:** If you say "Build X," the agent first invokes `gangsta:reconnaissance` (process), then during The Hit phase will use `gangsta:drill-tdd` (implementation) for code writing.
::

## Living the Rule

The 1% Rule isn't just for AI agents. As the Don, you should:

- **Expect structured process** — If your agent jumps to code, redirect it to the appropriate skill
- **Approve or reject at every gate** — The Heist only works if you exercise your authority
- **Hold the agent accountable** — "Did you check for applicable skills?" is a fair question at any point

The 1% Rule is what separates Gangsta-assisted development from undisciplined chat-driven coding. Respect it, and your projects will be spec'd before they're built.