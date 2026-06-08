# CVBA Website — Agent Context Document

This document is intended for AI coding assistants (Claude, GitHub Copilot, etc.) to understand the architecture, conventions, and design system of this project before making edits or creating new components.

**Read this entire document before writing or modifying any code.**

---

## Project Overview

This is the website for the **Chattahoochee Valley Beekeepers Association (CVBA)**, a non-profit beekeeping club based in Columbus, Georgia. It is built with Next.js 15 (App Router), HeroUI v3 (with optional Pro license), Tailwind CSS v4, and MDX for content.

The site has no database. All content is file-based: constants in TypeScript, posts as MDX files, marketplace listings as JSON.

---

## Tech Stack

| Technology | Version | Notes |
|---|---|---|
| Next.js | 15 | App Router only. No Pages Router. |
| React | 19 | |
| TypeScript | 5 | Strict mode enabled. |
| Tailwind CSS | 4 | Uses `@tailwindcss/postcss`. No `tailwind.config.js`. |
| HeroUI | v3 (free) | `@heroui/react`, `@heroui/styles` |
| HeroUI Pro | v3 (licensed) | `@heroui/pro` — requires `.npmrc` auth token |
| next-themes | 0.4 | Dark/light mode via `ThemeProvider` |
| next-mdx-remote | 5 | MDX rendering for update posts |
| gray-matter | 4 | Frontmatter parsing |

---

## Project Structure

```
src/
  app/                        # Next.js App Router pages
    layout.tsx                # Root layout — ThemeProvider + HeroUIProvider
    page.tsx                  # Homepage — assembles section components
    products/
      page.tsx                # Member marketplace page
    updates/
      page.tsx                # All posts listing
      [slug]/
        page.tsx              # Individual MDX post
  components/                 # One component per file. No exceptions.
    CategoryChip.tsx          # Toggleable filter chip button
    Footer.tsx                # Site footer
    HeroSection.tsx           # Above-the-fold hero
    HexBackground.tsx         # SVG honeycomb grid motif
    MarketFilter.tsx          # Client: chip state + filtered member grid
    MdxRenderer.tsx           # Wraps next-mdx-remote for post rendering
    MeetingSection.tsx        # Meeting schedule and location
    MemberCard.tsx            # Single marketplace member listing card
    NavBar.tsx                # Fixed top nav with mobile drawer
    OfficerCard.tsx           # Single officer card with avatar
    OfficersSection.tsx       # Grid of officer cards
    ThemeToggle.tsx           # Dark/light mode toggle button
    UpdateCard.tsx            # Single post preview card
    UpdatesPreview.tsx        # Homepage section: latest 3 posts
  content/
    updates/                  # MDX post files — one file per post
  data/
    members-market.json       # Marketplace member listings
  lib/
    constants.ts              # Site-wide constants: officers, meetings, nav
    market.ts                 # MarketMember type, MARKET_CATEGORIES
    mdx.ts                    # MDX file reading helpers: getAllPosts, getPostBySlug
  styles/
    globals.css               # Tailwind import, CSS variables, typography
```

---

## Component Rules

These rules are **non-negotiable** and must be followed for every component created or edited.

1. **One component per file.** Never define more than one exported component in a file. Helper sub-components (e.g. an icon) may be defined in the same file only if they are not exported and are only used by that file's main component.

2. **Keep components under ~150–200 lines.** If a component is getting long, split it. Prefer composing smaller components over building large monolithic ones.

3. **Use `"use client"` when required.** Any component that uses React hooks (`useState`, `useEffect`, `useTheme`, etc.) or imports from `@heroui/react` or `@heroui/pro` **must** have `"use client"` as its very first line. Forgetting this causes a build error.

4. **Server components are the default.** Page files (`app/**/page.tsx`) and pure presentational components that do not use hooks or HeroUI components should remain server components — do not add `"use client"` unless needed.

5. **No prop drilling through many layers.** If data needs to reach deeply nested components, consider passing it at the page level or reading from `constants.ts` / `market.ts` directly.

---

## Design System

### Visual Direction

Bold and modern with a warm honeycomb identity. The hex motif is used as a **structural geometric element** — think grid lines and field patterns, not clipart bees. The site should feel like a well-funded civic organization, not a craft fair flyer.

### Color Palette

All colors are defined as CSS custom properties in `src/styles/globals.css`. **Always use these variables** — never hardcode hex or rgb color values.

| Variable | Light mode | Dark mode | Usage |
|---|---|---|---|
| `--accent` | Honey gold `oklch(0.72 0.18 75)` | `oklch(0.78 0.19 75)` | Primary brand color, CTAs, active states, links |
| `--accent-foreground` | Near-black warm | Near-black warm | Text on top of accent-colored backgrounds |
| `--amber-deep` | Deep amber `oklch(0.58 0.16 60)` | same | Secondary accent, hover states |
| `--background` | Warm off-white | Deep charcoal | Page background |
| `--foreground` | Near-black warm | Warm near-white | Body text |
| `--card` | Slightly warm white | Dark charcoal | Card/surface backgrounds |
| `--card-foreground` | Same as foreground | Same as foreground | Text inside cards |
| `--muted` | Medium warm gray | Medium warm gray | Subdued text, meta info, labels |
| `--border` | Warm light gray | Dark warm gray | All borders, dividers |
| `--hex-fill` | Accent at 8% opacity | Accent at 6% opacity | SVG hex fill |
| `--hex-stroke` | Accent at 25% opacity | Accent at 20% opacity | SVG hex stroke |

**Tailwind utility classes for these variables** (defined in globals.css):
- `text-accent` — applies `--accent` color
- `bg-accent` — applies `--accent` as background
- `border-accent` — applies `--accent` as border color

For other variables, use inline styles: `style={{ color: "var(--muted)" }}` or reference them in Tailwind's arbitrary value syntax: `text-[var(--muted)]`.

### Typography

| Font | Family | Usage |
|---|---|---|
| **Syne** | `font-family: "Syne", sans-serif` | All headings: h1–h4, section titles, card titles. Bold/extrabold weights. |
| **DM Sans** | `font-family: "DM Sans", sans-serif` | All body text, UI labels, nav links, metadata. |

Both fonts are loaded from Google Fonts in `globals.css`. They do not need to be imported again in components.

In `globals.css`, `h1`–`h4` automatically use Syne. For headings inside components that use Tailwind classes, apply `font-display` — however, note that `font-display` is **not** a Tailwind default class. Use the inline style or a custom class if needed, or just write `style={{ fontFamily: "Syne, sans-serif" }}`.

**Typographic scale patterns used in this project:**

- Page eyebrow / section label: `text-xs uppercase tracking-widest font-semibold text-accent`
- Section heading: `text-4xl font-bold` (Syne)
- Page H1: `text-5xl font-bold` (Syne)
- Hero H1: `text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight` (Syne)
- Body / description: `text-base text-foreground/70 leading-relaxed`
- Card body: `text-sm text-foreground/75 leading-relaxed`
- Meta / muted label: `text-xs text-muted` or `text-sm text-muted`

### Spacing & Layout

- Max content width: `max-w-6xl mx-auto px-6`
- Section vertical padding: `py-24`
- Page top padding (below fixed nav): `pt-24` or `pt-28`
- Card inner padding: `p-6`
- Grid gaps: `gap-4 md:gap-6` for cards

### Border Radius

- Cards and panels: `rounded-xl`
- Buttons / chips: `rounded-lg` (standard) or `rounded-full` (pill/chip)
- Avatars: `rounded-full`
- Small badges: `rounded`

### Cards

Cards use HeroUI's `<Card>` and `<CardBody>` from `@heroui/react`. Always apply:
```tsx
<Card className="border border-border bg-card hover:border-accent transition-colors duration-200">
```
This gives the consistent hover accent border effect seen across the site.

### Buttons / CTAs

Two button styles are used throughout the site:

**Primary (filled accent):**
```tsx
<a className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
```

**Secondary (outlined):**
```tsx
<a className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors text-sm">
```

For icon-only buttons, use HeroUI's `<Button isIconOnly variant="ghost">`.

### Icons

Icons are inline SVG only — no icon library is installed. Keep icons small (16–22px viewBox), use `stroke="currentColor"` with `fill="none"`, and `strokeWidth="1.8"` to `"2"`. Always include `aria-hidden="true"` on decorative icons.

Pattern:
```tsx
function MyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* paths */}
    </svg>
  );
}
```

### Section Structure Pattern

Every homepage section follows this pattern:

```tsx
<section id="section-id" className="py-24 [optional: bg-card/50 for alternating]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section eyebrow + heading */}
    <div className="mb-12">
      <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
        Eyebrow Label
      </p>
      <h2 className="font-display text-4xl font-bold">
        Section Heading
      </h2>
    </div>

    {/* Section content */}

  </div>
</section>
```

Alternate sections between `bg-transparent` and `bg-card/50` to create visual separation without hard lines.

### Dark Mode

Dark mode is implemented via `next-themes` with `attribute="class"`. The `dark` class is added to `<html>`. All CSS variables automatically switch via the `.dark {}` block in `globals.css`.

**Rules:**
- Never use Tailwind's `dark:` prefix for color overrides — use CSS variables instead, they handle both modes automatically.
- `dark:` prefix is acceptable for structural/layout differences (e.g. `dark:border-opacity-50`) but not for color values.
- Test every new component in both light and dark mode.

---

## HeroUI Usage

### Free Components (`@heroui/react`)

Used throughout the project. Any file importing from this package **must** be a client component (`"use client"`).

Currently used:
- `Card`, `CardBody` — in `OfficerCard`, `UpdateCard`, `MemberCard`
- `Button` — in `ThemeToggle`

### Pro Components (`@heroui/pro`)

Requires a valid license and `.npmrc` auth token. See `README.md` and `.npmrc.example`.

Any file using a Pro component must include this comment at the top:
```tsx
// HeroUI Pro component — requires @heroui/pro package and valid license
// See .npmrc.example for registry auth token setup
```

Opportunities for Pro components are noted with comments in:
- `OfficerCard.tsx` — Pro Avatar Card
- `UpdateCard.tsx` — Pro Blog/News Card
- `NavBar.tsx` — Pro Navbar with drawer

---

## Data & Content

### Site Constants (`src/lib/constants.ts`)

Single source of truth for:
- `SITE_NAME`, `SITE_SHORT_NAME`, `SITE_TAGLINE`, `SITE_DESCRIPTION`
- `CONTACT_EMAIL`, `SOCIAL_LINKS`
- `NAV_LINKS` — array of `{ label, href }` — edit to add/remove nav items
- `OFFICERS` — array of `Officer` objects (name, title, email, photo)
- `MEETING_INFO` — schedule, location, what to expect, notes
- `UPDATES_PER_PAGE`

When building a new page or section that needs site-level data, import from here rather than hardcoding values.

### MDX Posts (`src/content/updates/*.mdx`)

Frontmatter schema:
```mdx
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "One or two sentence summary shown on listing pages."
author: "Author Name"
---
```

Helper functions in `src/lib/mdx.ts`:
- `getAllPosts()` — returns all `PostMeta[]` sorted newest first (no content)
- `getPostBySlug(slug)` — returns full `Post` including raw MDX content string
- `getAllPostSlugs()` — returns string array for `generateStaticParams`
- `formatDate(dateStr)` — formats `"YYYY-MM-DD"` → `"June 1, 2025"`

### Marketplace Data (`src/data/members-market.json`)

Array of `MarketMember` objects. Types defined in `src/lib/market.ts`.

`MarketMember` shape:
```ts
{
  id: string;
  name: string;
  companyName: string;      // "" if none
  email: string;
  phone: string;
  location: string;         // "Columbus, GA"
  categories: MarketCategory[];
  description: string;
  availability: string;
  website: string;          // "" if none
  memberSince: number;      // year, e.g. 2019
  active: boolean;          // false = hidden, not deleted
}
```

`MARKET_CATEGORIES` (defined in `market.ts`):
```ts
["Queens", "Nucs", "Packages", "Honey", "Beeswax Products", "Equipment", "Services"]
```

To add a new category: add it to the `MARKET_CATEGORIES` array in `market.ts`. It will automatically appear as a filter chip with no other changes.

---

## Routing

| Route | File | Type |
|---|---|---|
| `/` | `app/page.tsx` | Server |
| `/updates` | `app/updates/page.tsx` | Server |
| `/updates/[slug]` | `app/updates/[slug]/page.tsx` | Server (static params) |
| `/products` | `app/products/page.tsx` | Server |

All pages use the shared root layout (`app/layout.tsx`) which provides `ThemeProvider` and `HeroUIProvider`.

When adding a new page:
1. Create `src/app/your-page/page.tsx`
2. Export a default async component
3. Add `export const metadata` for SEO
4. Use `<NavBar />` at the top and `<Footer />` at the bottom
5. Add it to `NAV_LINKS` in `constants.ts` if it should appear in the nav

---

## Hex Motif Usage

The `<HexBackground />` component generates a pure SVG honeycomb grid. It uses `--hex-fill` and `--hex-stroke` CSS variables so it automatically adapts to light/dark mode.

Use it as a positioned background element, always with `pointer-events-none` and `aria-hidden="true"`. It is currently used in `HeroSection` with a gradient overlay to fade it at the edges. Follow the same pattern if reusing it:

```tsx
<div className="absolute inset-0 pointer-events-none">
  <HexBackground className="absolute right-0 top-0 h-full w-1/2" opacity={0.6} />
  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
</div>
```

---

## Common Pitfalls

- **Forgetting `"use client"`** on any component that imports from `@heroui/react` or uses hooks. This causes a build error: `'client-only' cannot be imported from a Server Component module`.
- **Hardcoding colors.** Always use CSS variables. Never write `text-amber-500` or `bg-yellow-400`.
- **Multiple components in one file.** Only one exported component per file. Helper functions and non-exported sub-components are fine.
- **Importing JSON without `resolveJsonModule`.** Already enabled in `tsconfig.json`. JSON files in `src/data/` can be imported directly.
- **Using `dark:` Tailwind prefix for colors.** Use CSS variables instead — they handle theming globally.
- **Adding nav links by editing `NavBar.tsx`.** Always edit `NAV_LINKS` in `constants.ts` instead.