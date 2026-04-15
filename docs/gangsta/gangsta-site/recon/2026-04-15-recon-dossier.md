---
heist: gangsta-site
date: 2026-04-15
status: pending-review
---

# Reconnaissance Dossier: Gangsta Site

## Objective
Build a documentation/landing site for the Gangsta framework (https://github.com/kucherenko/gangsta) using Docus (https://docus.dev/). The site needs:
- A main landing page
- A documentation section covering all Gangsta skills, concepts, and the Heist Pipeline

## Codebase Overview

### Current Workspace
- **Empty directory** — no files, no git repo, no existing project
- Starting from absolute zero

### Gangsta Framework (Source Material)
- **Repository**: https://github.com/kucherenko/gangsta
- **License**: MIT (© 2026 Andrey Kucherenko)
- **Type**: Pure Markdown skill framework — no package.json, no runtime, no build system
- **Structure**: 20 skill directories, each with SKILL.md + subagent prompts
- **Content to document**:
  - 6-phase Heist Pipeline (Reconnaissance → The Grilling → The Sit-Down → Resource Development → The Hit → Laundering)
  - Borgata Hierarchy (Don, Consigliere, Underboss, Capo, Soldier, Associate)
  - Omerta: Five Laws of Governance
  - 20 Skills catalog (phase skills, hierarchy roles, dev skills)
  - The Family Ledger (institutional memory)
  - Installation & platform support (OpenCode, Codex, Gemini CLI, Claude Code, Cursor)
  - The 1% Rule, Intent Routing, Don Interrogation Protocol, Nash Equilibrium Termination, Stronzate Detection

### Docus Framework (Target Platform)
- **Version**: v5.9.0 (as of April 2026)
- **Type**: Nuxt 4 layer (`extends: ['docus']`)
- **Tech stack**: Nuxt 4, Nuxt Content, Nuxt UI, Tailwind CSS 4, better-sqlite3
- **Scaffold**: `npx create-docus my-docs`
- **Content system**: Markdown + MDC (Markdown Document Component) syntax
- **Landing page**: `content/index.md` using `u-page-hero`, `u-page-section`, `u-page-feature`, `u-button`
- **Docs section**: Content directory with numbered prefixes for sidebar ordering
- **Configuration**: `app.config.ts` (branding, colors, navigation, socials, github, toc) + `nuxt.config.ts` (Nuxt-level)
- **Theming**: Nuxt UI color system (primary, secondary, neutral aliases), Tailwind 4 CSS `@theme` directive
- **Search**: Built-in, zero config
- **Dark mode**: Built-in toggle (configurable)
- **Deployment**: SSG (`nuxt generate`) or SSR, Vercel zero-config
- **Custom components**: Override by creating same-named files in `components/` or `components/content/`
- **AI features**: MCP server, llms.txt, agent skills publishing

## Dependencies
- **docus**: latest (v5.9.0+)
- **nuxt**: ^4.3.1
- **better-sqlite3**: ^12.6.2
- No other runtime deps required by Docus

## Risks and Unknowns
1. **Nuxt 4 stability** — Nuxt 4 is relatively new; potential for breaking changes
2. **Docus v5 API stability** — Docus was rewritten for v4+; check if v5 API is stable
3. **Content volume** — Gangsta has 20 skills, 5 Omerta laws, 6 Heist phases, hierarchy roles, ledger docs — need to determine content organization strategy
4. **Mafia metaphor sensitivity** — The framework uses mafia terminology; the site should present this engagingly without being off-putting
5. **Visual identity** — No existing brand assets (logos, color palette) for Gangsta beyond what's in the GitHub repo
6. **Custom component needs** — May need custom Vue components for Heist Pipeline visualization, hierarchy diagram, etc.

## Recommended Scope
1. **Project scaffold** — Create Docus project with proper configuration
2. **Landing page** — Hero section + feature sections showcasing Gangsta's value proposition
3. **Documentation section** — Organized by:
   - Getting Started (installation, overview, quickstart)
   - Heist Pipeline (6 phases in detail)
   - Skills Reference (all 20 skills)
   - Hierarchy (roles and interaction)
   - Omerta (governance laws)
   - Ledger (institutional memory)
   - Platform Guides (OpenCode, Codex, Gemini CLI, etc.)
4. **Branding** — Appropriate color scheme, logo treatment, socials
5. **Git setup** — Initialize repo with proper .gitignore

## Artifacts from Reconnaissance
- Gangsta repo structure and content (from explorer)
- Docus framework capabilities and configuration (from librarian)
- Workspace status (empty, no prior work)