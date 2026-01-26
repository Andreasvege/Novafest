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

## Current State

- Basic Next.js setup from create-next-app
- Minimal homepage with "nova fest" text
- Program page has placeholder code that doesn't work yet
- Navbar component exists but isn't used in layout
- Metadata still has defaults ("Create Next App")

## Notes

(Add notes here as the project progresses)
