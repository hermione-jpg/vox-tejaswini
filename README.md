# VOX — rebuilt in Next.js

A Next.js + Tailwind rebuild of the VOX Framer design-system site
(voxai.framer.website), structured so you can edit content without
touching layout code, and deploy straight to Vercel.

## What's here

- **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
- Pages: Home (`/`), Case Studies (`/case-study`, `/case-study/[slug]`),
  Fundamentals (`/fundamentals`, `/fundamentals/[slug]`), Glossary (`/dict`),
  Overview (`/overview`)
- All copy lives in plain `content/*.ts` files — edit those, not the
  `app/` page files, for day-to-day changes.

## Palette

Using the exact hex values pulled from Figma:

| Token | Hex | Used for |
|---|---|---|
| `paper` (Color 5) | `#DAE6ED` | Main page background |
| `card` (Color 6) | `#F7FAFB` | Sidebar, cards, quote blocks |
| `ink` (Color 3) | `#364D5C` | Headings — darkest text |
| `ink-soft` (Color 2) | `#51748B` | Body copy |
| `ink-faint` / `accent` (Color 1) | `#6C9BB9` | Labels, links, hover states |
| `accentLight` / `line` (Color 4) | `#91B4CB` | Hairline dividers, subtle fills |

All defined in `tailwind.config.ts` under `theme.extend.colors` — change
a value there and it updates everywhere at once.

## Typography

Inter is used for both the display headings (heavier weight, tight
tracking) and body copy, set up in `app/layout.tsx` via `next/font/google`.
Uppercase labels/eyebrows also use Inter, tracked out, rather than a
separate mono face.

## Layout

Navigation is a fixed left side panel (Framer-style), not a top bar:
- `components/SiteSidebar.tsx` — the main panel (Home / Case Studies /
  Glossary / Fundamentals / Overview + the pinned Figma link), used by
  every top-level page via `app/(site)/layout.tsx`.
- `components/LessonSidebar.tsx` — a second, separate side panel scoped
  to `/fundamentals/*` pages only, listing lessons by section
  (Foundations, Real-Time Conversations), matching the source site's
  behavior of swapping the main nav for a lesson list once you're inside
  Fundamentals.
- Both collapse to a compact top bar / expandable panel on mobile.

Case studies are shown as a card grid (`/case-study`) instead of a plain
list — each card is editable via `content/case-studies.ts`.

## Editing content

### Case studies — `content/case-studies.ts`
Each entry is one object with `slug`, `title`, `summary`, and a `body`
array of simple blocks (`heading`, `paragraph`, `list`, `quote`). Add a
new object to add a new case study page automatically — no routing code
needed, it's generated from this file.

### Fundamentals lessons — `content/fundamentals.ts`
Same block pattern as case studies, plus `group` (controls which sidebar
section it appears under) and an optional `next` link. Add/reorder/remove
lessons here.

### Glossary — `content/glossary.ts`
Array of `{ term, definition }`. Sorted alphabetically automatically.

### Home page / nav / footer copy — `content/site.ts`
All hero and section text from the homepage, plus the nav links and
footer text.

### Design tokens (colors, fonts, spacing) — `tailwind.config.ts`
Edit the `colors` block (`paper`, `ink`, `ink-soft`, `line`, `card`, etc.)
to retune the palette everywhere at once. Fonts are set in
`app/layout.tsx` (currently Instrument Serif for display, Inter for body,
IBM Plex Mono for labels/eyebrows) — swap the `next/font/google` imports
for any other Google Font.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

### Option B — Git + Vercel dashboard (recommended for ongoing work)
```bash
git init
git add .
git commit -m "Initial VOX rebuild"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```
Then in the Vercel dashboard: **New Project → Import** your GitHub repo.
Vercel auto-detects Next.js — no config needed (framework is pinned in
`vercel.json` as a safeguard). Every push to `main` auto-deploys; every
PR gets a preview URL, which is the easiest way to "scale" this
site — add pages/content on branches, review the preview, merge.

## Adding a custom domain
Project → Settings → Domains in the Vercel dashboard, then point your
domain's DNS per Vercel's instructions.

## Scaling ideas beyond this starter
- Swap the `content/*.ts` files for a headless CMS (Sanity, Contentful,
  or even a simple Vercel-hosted Postgres + Drizzle) once non-developers
  need to publish without a code deploy.
- Add `app/sitemap.ts` and `app/robots.ts` for SEO once the domain is live.
- Add `next/og` dynamic OG images per case study/lesson for social shares.
