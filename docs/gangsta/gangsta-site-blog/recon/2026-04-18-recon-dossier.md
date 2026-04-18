---
heist: gangsta-site-blog
date: 2026-04-18
status: pending-review
---

# Reconnaissance Dossier: Gangsta Site Blog

## Objective
Add a blog section to the existing gangsta.page site that:
- Does NOT appear in the documentation sidebar navigation
- Has a separate `/blog` page listing all articles
- Individual articles are accessible at `/blog/[slug]`

## Codebase Overview

### Stack
- **Framework**: Nuxt 4 + Docus v5 (`docus: ^5.10.0`, `nuxt: 4.3.1`)
- **Content engine**: Nuxt Content (built into Docus v5)
- **Deployment**: Cloudflare Pages via `nuxt generate` (SSG)
- **Source directory**: `app/` (Nuxt 4 compatibility mode: `future.compatibilityVersion: 4`)

### Key Files
| File | Purpose |
|------|---------|
| `app/app.config.ts` | Docus branding, navigation config, aside settings |
| `nuxt.config.ts` | Nuxt config, content fields, preset |
| `content/` | All documentation markdown (numbered for sidebar ordering) |
| `content/index.md` | Landing page (uses `navigation: false` frontmatter) |
| `content/1.getting-started/.navigation.yml` | Directory nav label + icon |
| `app/components/` | Custom Vue components (content + app layout slots) |

### Navigation Architecture
- Docus builds the sidebar from the `content/` directory structure automatically
- Numbered prefixes (`1.`, `2.`, etc.) control ordering
- `.navigation.yml` in each directory sets title + icon
- **`navigation: false`** in a `.navigation.yml` or page frontmatter hides from sidebar
- Existing sections: getting-started, core-concepts, heist-pipeline, skills, advanced

### No Existing Blog
- No `content/blog/` directory exists
- No `app/pages/` directory exists (Nuxt pages are handled by Docus catch-all)
- No blog-related packages (no @nuxt/blog, no contentlayer, etc.)

## Implementation Options

### Option A: Content-only (no custom pages)
- `content/blog/` with `navigation: false` in `.navigation.yml`
- `content/blog/index.md` as listing page using MDC query components
- Individual posts as `content/blog/slug.md`
- **Risk**: Docus MDC components may not support dynamic content listing easily

### Option B: Custom Nuxt pages + Content directory (Recommended)
- `content/blog/` for markdown articles (hidden from docs nav via `.navigation.yml`)
- `app/pages/blog/index.vue` — blog listing page (queries all blog content)
- `app/pages/blog/[...slug].vue` — individual post renderer (uses `<ContentRenderer>`)
- Custom pages take routing priority over Docus content catch-all
- **Benefit**: Full control over list UI; posts use standard Nuxt Content markdown

### Option C: External blog (e.g., Ghost, Substack embed)
- Out of scope per Don's request

## Recommended Scope
1. Create `content/blog/` with navigation hidden
2. Create `app/pages/blog/` with index + slug pages
3. Add 1–2 sample blog posts
4. Add "Blog" link in site footer or header (separate from docs nav)

## Risks and Unknowns
1. **Docus catch-all conflict** — Must verify custom pages in `app/pages/blog/` take priority; Docus uses its own content routing catch-all
2. **Styling consistency** — Blog pages need to match Docus/Nuxt UI design system (Tailwind 4, amber primary color)
3. **Author metadata** — Need to decide what frontmatter fields blog posts require
4. **Footer/header link placement** — Don wants a "separate link"; location TBD (header? footer? both?)
