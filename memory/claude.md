# Novafest - Project Context for Claude

## About the Developer

- **Name:** Andreas
- **Location:** Oslo, Norway
- **Background:** Recent computer engineering graduate (finished ~6 months ago)
- **Experience:** Java, Python, JavaScript, CSS, HTML, C#, TypeScript, Tailwind
- **Current focus:** Job hunting for full-stack developer roles
- **Goal:** Build skills and portfolio through this project

## How I Like to Work

- **Explain things thoroughly** - I want to learn, not just get code
- **I write the code myself** - This is important to me
- **Small pieces** - Give me code in small chunks, not whole files
- **Clear guidance** - Tell me exactly where to write code and what each part does
- **Mentor approach** - Teach me concepts as we build

## Project Overview

**Novafest** is the annual music festival organized by Radio Nova (student radio in Oslo). Similar to festivals like Øya, Piknik i Parken, OverOslo.

### Timeline
- Festival date: 23-25 April 2026
- Initial launch: Need something live in a few weeks
- Approach: Incremental - start with basics, add features over time

### Features Needed
- [ ] Landing page (hero, basic info)
- [ ] Artist lineup / schedule (who plays when)
- [ ] Ticket link (external purchase page)
- [ ] About page (what the festival is)
- [ ] More features TBD

### Design
- Working with a designer who will provide logos and visual assets
- Visual identity coming soon

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **React:** 19
- **Hosting:** Vercel
- **Domain:** novafest.no (access available, not yet configured)
- **Backend (planned):** PostgreSQL + Prisma (for learning purposes)

## Project Structure

```
novafest/
├── novafest/          # Next.js app
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── layout.tsx      # Root layout
│   │   │   ├── globals.css
│   │   │   ├── program/
│   │   │   │   └── page.tsx    # Program page (3-day schedule)
│   │   │   ├── artister/
│   │   │   │   ├── page.tsx    # Artist listing page
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx # Individual artist pages (dynamic route)
│   │   │   └── om/
│   │   │       └── page.tsx    # About page
│   │   ├── lib/                # (to be created) Shared utilities
│   │   └── components/
│   │       └── navbar.tsx
│   └── public/
└── CLAUDE.md          # This file
```

## Current State (Updated April 1, 2026)

Pages implemented:
- `/` - Home (hero with NovafestLogoIntro.png, responsive logo sizing, Instagram link with text-shadow stroke, about teaser, lineup teaser)
- `/program` - "Kommer snart" placeholder with spinning logo (animate-spin-z)
- `/artister` - Artist listing fetched from DB, NovaGreen color scheme, clickable links to individual pages
- `/artister/[slug]` - Individual artist pages from DB (name, description, image, Spotify link). Image: `w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]`
- `/om` - About Radio Nova and the festival
- `/frivillig` - Volunteer recruitment page (links to Google Form, styled with bg overlay)
- `/billetter` - NOT YET IMPLEMENTED (linked in navbar)

Navbar is responsive:
- **Desktop (≥856px):** Logo + links + Billetter button (original layout)
- **Mobil (<856px):** Hamburger icon | Logo | Billetter button, with fullscreen slide-in menu
- Custom breakpoint `--breakpoint-navbar: 856px` defined in globals.css
- Navbar is a client component (`"use client"`) using `useState` for menu toggle

**Note:** Current artist names (Karpe, Cezinando, etc.) are placeholders. Real lineup will feature smaller upcoming artists.

## Design System

### Color Variables (defined in globals.css `:root` + `@theme inline`)
- **`--NovaBlack`:** `#181818` → Tailwind: `text-NovaBlack`, `bg-NovaBlack`
- **`--NovaOrange`:** `#f9a422` → Tailwind: `text-NovaOrange`, `bg-NovaOrange`, `border-NovaOrange`
- **`--NovaGreen`:** (added) → used on `/artister` and `/artister/[slug]` pages
- Hardcoded `#231f20` still used in some places (navbar bg, lineup teaser text, hover states)

**How it works:** `:root` defines the CSS variable value. `@theme inline` with `--color-<name>` prefix makes it available as Tailwind utility classes.

### Fonts
Using **Redaction** font family (in `/public/fonts/`):
- **Redaction Regular** - body text
- **Redaction Bold** - headings (h1-h6)
- **Redaction 10/20/35/50/70/100** - variants for glitch animation

### Custom CSS (in globals.css)
- **`.hover-glitch`** - Font glitch effect that cycles through Redaction variants on hover. Used on all clickable text elements.
- **`.animate-spin-3d`** - 3D Y-axis rotation (4s loop). Used on logo on placeholder pages.
- **`text-shadow` stroke** - Outer stroke effect on Instagram link (using 4-direction text-shadow with `var(--NovaOrange)`)

### Background
- Gradient image (`/public/Oransje.png`) — fixed pixel width, `center top` positioning, `no-repeat`
- 20% dark overlay (`bg-[#231f20]/20`)

## Assets

### In `/public/`
- `logo.png` - Novafest logo (navbar + placeholder pages)
- `NovafestLogoIntro.png` - Hero logo on homepage
- `Oransje.png` - Background gradient (currently active)
- `Grønn.png`, `Rosa 2.png` - Alternative gradient backgrounds
- `Logo.png`, `Logo Grønn.png`, `LOGO uten bakgrun.png`, `LOGO uten stjerne.png` - Logo variants
- `Nova fest Logo intro.png`, `Novafest LOGO sticker.png` - Additional logo assets
- `Rosa.png` - Rosa design asset
- `hvit.png` - White logo variant
- `Sjerne Gul.png` - Yellow star

### Design source files
- Located in `/design_filer/` (at repo root)
- Contains `Gradient/`, `Logo/`, fonts, and inspiration files

## TODO / Future Work
- [ ] Program page — enkel liste per dag (artister gruppert på 23/24/25 april), Concert-tabellen har data
- [ ] Make artists clickable from `/program` page
- [ ] Replace remaining hardcoded `#231f20` with a CSS variable/Tailwind class
- [x] Responsive navbar (hamburger menu for mobile)
- [x] Responsive background image (fixed size, no tiling)
- [x] Responsive hero section (logo + text scaling)
- [ ] Responsive frivillig page (needs polish)
- [x] Real artist lineup from DB
- [x] /artister page with DB data
- [x] /artister/[slug] individual pages with DB data
- [ ] Refactor pages into reusable components (Footer, ArtistCard, etc.)

## Database / Prisma

- **Prisma 7** med custom output: `src/generated/prisma`
- Klienten genereres med `./node_modules/.bin/prisma generate` (ikke global npx!)
- `db.ts` bruker `PrismaPg`-adapter med `POSTGRES_URL` fra `.env.local`
- `prisma.config.ts` håndterer URL og migrations — `schema.prisma` skal IKKE ha `url` i datasource (Prisma 7)
- `seed.ts` kjøres manuelt for å populere DB
- Artister: `Okinawa`, `Glass Manet`, `Marie Løvås` (og evt. flere)
- `toSlug()` brukes i begge artister-sidene — håndterer æøå: æ→ae, ø→oe, å→aa

## Per-side farger og bakgrunn

- **`BackgroundWrapper`** (`src/components/backgroundwrapper.tsx`) — klientkomponent som bruker `usePathname` til å bytte bakgrunnsbilde per side
- **Navbar** bruker `accent`-objekt basert på `usePathname` — bytter farge og logo per side
- Artistsider (`/artister*`): NovaGreen + `Grønn.png` bakgrunn
- Alle andre sider: NovaOrange + `Oransje.png` bakgrunn

## Notes

**Dynamic routes:** Using `[slug]` folder naming for individual artist pages. Slug is generated from artist name (e.g., "Unge Ferrari" → "unge-ferrari") using `toSlug()` helper function.

**Animations:** For logo/banner animations, prefer CSS animations over video. If complex motion graphics are needed, use WebM (VP9 with alpha channel) for transparency support.

**Vercel Analytics:** `@vercel/analytics/next` is integrated in layout.tsx.

**Tailwind CSS 4 note:** Buttons don't get `cursor: pointer` by default. Fixed globally in globals.css with `@layer base` rule.
