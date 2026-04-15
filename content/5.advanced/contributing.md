---
title: Contributing
description: How to contribute skills to the Gangsta framework.
navigation.order: 5
---

# Contributing

Gangsta is open source (MIT) and welcomes contributions — especially new skills that follow the established patterns.

## What You Can Contribute

- **New skills** — Following the SKILL.md format
- **Skill improvements** — Enhancements to existing skills
- **Documentation fixes** — Corrections and clarifications
- **Bug reports** — Issues with skill behavior

## Creating a Skill for Contribution

### 1. Fork the Repository

```bash
git clone https://github.com/kucherenko/gangsta.git
cd gangsta
git checkout -b my-new-skill
```

### 2. Create the Skill Directory

```bash
mkdir -p skills/my-new-skill
```

### 3. Write the SKILL.md

Every skill must follow this structure:

```yaml
---
name: my-new-skill
description: |
  Clear description of what the skill does and when to invoke it.
  This is what AI agents read to decide whether to use this skill.
type: flexible  # or: rigid
---

# My New Skill

## When to Invoke

Specific conditions under which this skill should be activated.

## Process

1. Step one — describe what happens
2. Step two — describe what happens next
3. Step three — describe the output

## Checklist Before Proceeding

- [ ] Verification item one
- [ ] Verification item two

## Outputs

What this skill produces when complete.
```

### 4. Skill Quality Standards

Before submitting, ensure your skill:

- **Has a clear invocation trigger** — When should the AI use this skill?
- **Follows an existing pattern** — Look at `skills/reconnaissance/SKILL.md` for reference
- **Has a complete process** — Every step is described, no gaps
- **Includes a checklist** — Phase gates need verification items
- **Specifies output artifacts** — What does the skill produce?
- **Uses correct skill type** — `rigid` for processes that must be followed exactly, `flexible` for adaptable ones

### 5. Subagent Prompts (Optional)

If your skill delegates work to subagents, include prompt files:

```
skills/my-new-skill/
├── SKILL.md
├── planner-prompt.md
└── executor-prompt.md
```

### 6. Test Your Skill

1. Install your skill locally (see [Installation](/getting-started/installation))
2. Start a new session with your AI tool
3. Trigger the skill with an appropriate intent
4. Walk through the full process
5. Verify all checklist items are actionable
6. Confirm the expected outputs are produced

## Submitting a PR

```bash
# Push your branch
git push origin my-new-skill
```

Then open a Pull Request against `kucherenko/gangsta` with:

1. **Description** — What the skill does and why it's needed
2. **Skill type** — Rigid or flexible, and why
3. **Testing** — How you verified the skill works
4. **Pattern alignment** — How it follows existing Gangsta conventions

## PR Review Criteria

Maintainers will review for:

- **Invocation clarity** — Is the description specific enough for AI agents?
- **Process completeness** — Are all steps actionable?
- **Omerta compliance** — Does it follow the Five Laws?
- **Consistency** — Does it match the tone and style of existing skills?
- **No code** — Skills are Markdown, not code

## Code of Conduct

Gangsta uses the mafia metaphor as a playful organizational framework. Contributions should:

- Maintain the metaphor consistently
- Be respectful and inclusive
- Focus on structured, disciplined development processes
- Not glorify actual criminal activity

The metaphor exists to make structured development memorable and engaging. Keep it fun, keep it professional.

## Getting Help

- **GitHub Issues** — [github.com/kucherenko/gangsta/issues](https://github.com/kucherenko/gangsta/issues)
- **Discussions** — [github.com/kucherenko/gangsta/discussions](https://github.com/kucherenko/gangsta/discussions)