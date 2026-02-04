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
- Festival date: Early May 2025
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
│   │   │   └── program/
│   │   │       └── page.tsx    # Program page (needs work)
│   │   └── components/
│   │       └── navbar.tsx      # Navigation (not yet integrated)
│   └── public/
└── claude.md          # This file
```

## Current State (Updated Feb 2026)

Pages implemented:
- `/` - Home (hero, about teaser, lineup teaser)
- `/program` - Festival schedule (hardcoded 3-day schedule)
- `/artister` - Artist list (Karpe, Cezinando, Dagny, etc.)
- `/om` - About Radio Nova and the festival
- `/billetter` - NOT YET IMPLEMENTED (linked in navbar)

Navbar is integrated with logo.

## Design System

### Colors
- **Dark (navbar/accents):** `#231f20`
- **Gray (page background):** `#2d292a`
- **Yellow (text/accents):** `#f9ed24`

### Fonts
Using **Redaction** font family (in `/public/fonts/`):
- **Redaction Regular** - body text
- **Redaction Bold** - headings (h1-h6)
- **Redaction 10/20/35/50/70/100** - variants for glitch animation

### Custom CSS (in globals.css)
- **`.hover-glitch`** - Font glitch effect that cycles through Redaction variants on hover. Used on all clickable text elements.

### Background
- Grainy gradient image (`/public/background.png`)
- 70% dark overlay (`bg-[#231f20]/70`) for readability

## Assets
- `/public/logo.png` - Novafest logo (navbar)
- `/public/background.png` - Grainy gradient background
- Design source files: `C:/Users/andyv/Documents/GitHub/Novafest/design_filer/`

## TODO / Future Work
- [ ] Implement `/billetter` (tickets) page
- [ ] Connect Prisma database for dynamic artist/schedule content
- [ ] Photo layering effect (discussed, shelved for now)
- [ ] More animations/pixelation effects

## Notes

(Add notes here as the project progresses)
