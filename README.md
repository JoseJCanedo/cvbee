# Chattahoochee Valley Beekeepers Association Website

A modern, bold Next.js website for the CVBA — built with HeroUI v3, Tailwind CSS v4, and MDX-powered updates.

---

## Tech Stack

- **Next.js 15** (App Router)
- **HeroUI v3** (free) + **HeroUI Pro v3** (license required)
- **Tailwind CSS v4**
- **next-mdx-remote** for MDX-powered update posts
- **next-themes** for dark/light mode
- **Deployed on Render**

---

## HeroUI Pro License Setup

> ⚠️ Required before running `npm install` if you want Pro components.

1. Create a `.npmrc` file in the project root (this file is gitignored):

```
//registry.heroui.com/:_authToken=YOUR_LICENSE_KEY_HERE
```

2. Install the Pro package:

```bash
npm install @heroui/pro
```

3. Your license key can be found at https://heroui.pro/dashboard

> If you skip this step, free HeroUI components will still work. Pro components are marked with comments in the source.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Managing Content

### Officers & Meeting Info

Edit `src/lib/constants.ts` — all officer names, titles, emails, and meeting details live here. No code changes needed elsewhere.

### Posting Updates

Add a new `.mdx` file to `src/content/updates/`:

```
src/content/updates/2025-06-01-my-post-title.mdx
```

Frontmatter format:

```mdx
---
title: "Spring Inspection Results"
date: "2025-06-01"
excerpt: "A brief summary shown on the updates listing page."
author: "Carlos"
---

Your **markdown** content here. You can also use React components.
```

The filename becomes the URL slug: `/updates/2025-06-01-my-post-title`

Posts are sorted by date (newest first) automatically.

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout + theme provider
    page.tsx            # Homepage (assembles all sections)
    updates/
      page.tsx          # All updates listing
      [slug]/
        page.tsx        # Individual post page
  components/
    NavBar.tsx
    HeroSection.tsx
    OfficersSection.tsx
    MeetingSection.tsx
    UpdatesPreview.tsx
    UpdateCard.tsx
    HexBackground.tsx
    MdxRenderer.tsx
    ThemeToggle.tsx
    Footer.tsx
  content/
    updates/            # Add .mdx files here
  lib/
    constants.ts        # Officers data, meeting info
    mdx.ts              # MDX file reading helpers
  styles/
    globals.css
```

---

## Deployment (Render)

1. Connect your GitHub repo to Render
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Add environment variable for HeroUI Pro if needed:
   `HEROUI_LICENSE_TOKEN=your_key_here`
   Then in `.npmrc`: `//registry.heroui.com/:_authToken=${HEROUI_LICENSE_TOKEN}`
