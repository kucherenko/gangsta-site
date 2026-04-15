---
title: Installation
description: Install Gangsta skills on your preferred AI development platform.
navigation.order: 2
---

# Installation

Gangsta is a skills framework — it doesn't run as a standalone application. Instead, you install it into your AI coding tool so the agent can invoke skills automatically. Choose your platform below.

::callout{type="info" icon="i-lucide-package"}
**What you're installing:** A collection of Markdown-based skill files that tell your AI agent when and how to use structured development processes. No runtime dependencies, no build step, no package manager required.
::

## Prerequisites

- Git
- An AI coding tool (Claude Code, OpenCode, Codex, Gemini CLI, or Cursor)
- A project directory where you want to use Gangsta

## Install for Your Platform

::code-group

```bash [Claude Code]
# 1. Clone the Gangsta repo
git clone https://github.com/kucherenko/gangsta.git ~/gangsta

# 2. Add the skills path to your Claude Code config
# Edit ~/.claude/settings.json (or your project's .claude/settings.json)
# Add under "mcpServers" or the appropriate config key:
{
  "mcpServers": {},
  "skills": {
    "paths": ["~/gangsta/skills"]
  }
}

# 3. Restart Claude Code
```

```bash [OpenCode]
# 1. Clone the Gangsta repo
git clone https://github.com/kucherenko/gangsta.git ~/gangsta

# 2. Create or edit opencode.json in your project root
# Add the Gangsta plugin with skills path:
{
  "plugins": {
    "gangsta": {
      "source": "~/gangsta"
    }
  },
  "skills": {
    "paths": ["~/gangsta/skills"]
  }
}

# 3. Restart OpenCode
```

```bash [Codex]
# 1. Clone the Gangsta repo
git clone https://github.com/kucherenko/gangsta.git ~/gangsta

# 2. Symlink skills to the Codex skills directory
mkdir -p ~/.agents/skills
ln -s ~/gangsta/skills/gangsta ~/.agents/skills/gangsta

# 3. Restart Codex
```

```bash [Gemini CLI]
# Install directly via the Gemini extensions registry
gemini extensions install https://github.com/kucherenko/gangsta

# This handles cloning, path configuration, and registration automatically
```

```bash [Cursor]
# 1. Clone the Gangsta repo
git clone https://github.com/kucherenko/gangsta.git ~/gangsta

# 2. Follow the Claude Code installation steps
# Cursor uses the same conventions as Claude Code for skill registration

# 3. In Cursor settings, add the skills path:
#    ~/gangsta/skills

# 4. Restart Cursor
```

::

## Verify Installation

After installing, start a **new session** with your AI tool and test with this prompt:

::callout{type="success" icon="i-lucide-check-circle"}
**Verification prompt:** Start a new session and say:

> "I want to build a new feature"

The agent should **automatically invoke** `gangsta:reconnaissance` and begin gathering intel about your codebase and requirements. If it does, installation is successful.
::

If the agent doesn't invoke the skill:

1. Check that the skills path is correctly configured
2. Ensure you're starting a **fresh session** (skills are loaded at session start)
3. Verify the `skills/` directory contains `.md` files (not nested too deep)

## Updating

To update Gangsta skills to the latest version:

::code-group

```bash [Git Clone (All Platforms)]
cd ~/gangsta
git pull origin main
```

```bash [Gemini CLI]
gemini extensions update gangsta
```

::

::callout{type="warning" icon="i-lucide-refresh-cw"}
Always update before starting a new Heist. Skill definitions evolve, and using the latest version ensures you have the most current process definitions.
::

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Agent doesn't invoke skills | Check skills path configuration; restart session |
| Skills appear but produce errors | Verify skill files are `.md` format, not corrupted |
| Partial skill invocation | Ensure the entire `skills/` directory is linked, not individual files |
| Gemini CLI extension not found | Ensure `gemini extensions install` completed without errors |