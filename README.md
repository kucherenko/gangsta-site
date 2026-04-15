# gangsta-site

Gangsta Framework documentation site — built with [Docus](https://docus.dev/).

## Quick Start

```bash
# Install dependencies
npm install

# Sync skills from GitHub (requires GITHUB_TOKEN)
export GITHUB_TOKEN=ghp_your_token_here
npm run sync

# Start dev server
npm run dev

# Build for production
npm run build
```

## Architecture

This is a dual-purpose site:
- **Human documentation** — Docus content pages in `content/`
- **Agent Skills endpoint** — Served at `/.well-known/skills/` via Docus's native Agent Skills module

Skills are auto-synced from [kucherenko/gangsta](https://github.com/kucherenko/gangsta) at build time.

## Deployment

Deployed to Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `.output/public`
- Node version: 20

A GitHub webhook triggers rebuilds when skill files change upstream.

## Project Structure

```
├── app/
│   └── components/content/  # Custom Vue components (PipelineFlow, HierarchyTree, PhaseGate)
├── assets/css/              # Theme styles (gold/amber on dark)
├── content/                 # Docus content pages
│   ├── index.md             # Landing page
│   ├── 1.getting-started/   # Installation, quickstart, 1% rule
│   ├── 2.core-concepts/      # Borgata, Heist, Omerta, Ledger, etc.
│   ├── 3.heist-pipeline/    # 6-phase deep-dives
│   ├── 4.skills/            # Auto-generated skill docs (from sync)
│   └── 5.advanced/          # Custom skills, multi-agent, contributing
├── scripts/
│   └── sync-skills.ts       # GitHub → skills/ + content/4.skills/
├── app.config.ts            # Docus configuration
├── nuxt.config.ts           # Nuxt configuration (Cloudflare preset)
└── package.json             # Dependencies and scripts
```

## License

MIT