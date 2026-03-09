# Novafest Project Memory

## Project
- Working dir: C:\Users\andyv\documents\github\novafest
- Next.js app lives in: novafest/ subfolder
- User: Andreas, Oslo, recent comp-eng grad
- Style: Explain thoroughly, give small code chunks, mentor approach

## Key Architecture
- Framework: Next.js 16, TypeScript, Tailwind CSS 4, React 19
- Colors: --NovaBlack (#181818), --NovaOrange (#f9a422) via CSS vars + @theme inline
- Font: Redaction family (Regular, Bold, variants 10/20/35/50/70/100) in /public/fonts/
- Background: /public/Oransje.png fixed 1920px wide, center top

## Database (Prisma 7 + PostgreSQL) — satt opp mars 2026
- Prisma CLI: 6.19.2, @prisma/client: 7.3.0 (må matche!)
- prisma.config.ts bruker dotenv/config + process.env["POSTGRES_URL"] for migrations
- Prisma 7: url skal IKKE i schema.prisma — kun i prisma.config.ts
- Driver adapter kreves i Prisma 7: @prisma/adapter-pg, send adapter til PrismaClient({ adapter })
- Seed-fil: novafest/prisma/seed.ts — kjøres med: npx tsx prisma/seed.ts
- Seed bruker POSTGRES_URL (direkte postgres), ikke PRISMA_DATABASE_URL (Accelerate)
- Okinawa og Glass Manet er lagt inn i Artist-tabellen ✅
- Artister kan også redigeres direkte i Prisma dashboard på prisma.io

## Neste steg
- Legg til beskrivelse, lenke og imageUrl på Okinawa og Glass Manet (kan gjøres i Prisma dashboard eller seed.ts)
- Oppdater seed.ts med fullstendig artistinfo (backup mot database-reset)
- Aktivere /artister/[slug]-sider med ekte data fra DB (artister_alt/ er dormant mal)
- Klikkområder i ArtistCarousel peker allerede på /artister/okinawa og /artister/glass-manet
- GlitchLink-komponenten: glitchlink.tsx finnes men er ubrukt — avklar med Andreas hva den skal gjøre

## Recent work (mars 2026)
- Animert logo: to filer — stjerne-logo-animert.webm (Chrome/Firefox) + safari-logo.mov (HEVC med alfa, Safari/iOS)
- Video-tag krever autoPlay loop muted playsInline for iOS
- safari-logo.mov laget med FFmpeg: ffmpeg -i original.mov -c:v hevc_videotoolbox -allow_sw 1 -alpha_quality 0.75 -tag:v hvc1 safari-logo.mov
- Karusell: ArtistCarousel-komponent (src/components/artistcarousel.tsx)
- Karusell ligger utenfor hero-seksjonen i page.tsx for kant-til-kant bredde
- Karusell-bildet er /Karusell.png — byttes ut når endelig bilde er klart
- TODO: sjekk filstørrelser på videoene, vurder å redusere alpha_quality til 0.5

## Karusell-bug (uløst, mars 2026)
- Byttet fra w-[1632px] til h-[] + w-auto for å slippe å endre bredde per bilde
- Problem: det andre bildet (copy 1) loader ikke/rendres ikke av nettleseren fordi det starter langt utenfor viewport
- Resulterer i en synlig pause/gap i animasjonen når copy 1 skal dukke opp
- Forsøkt: loading="eager", will-change-transform, CSS var i keyframe, ready-state, getBoundingClientRect, window.Image() preloader, WAAPI — ingenting funket
- Nåværende kode bruker WAAPI (element.animate()) med window.Image() preloader — fortsatt gap
- Mulige neste steg: CSS background-image repeat-x (unngår to kopier helt), eller komprimere bildet kraftig (er 8MB større enn forrige), eller tilbake til w-[] med fast bredde

## Active Routes
- / → homepage (hero + Instagram link + about + lineup teaser)
- /program → "Kommer snart" placeholder with spinning logo
- /artister → "Kommer snart" placeholder with spinning logo
- /om → About Radio Nova and festival
- /frivillig → Volunteer recruitment page
- /billetter → NOT implemented (external TicketCo link in navbar)
- artister_alt/ → Artist listing + [slug] pages (NOT accessible from navbar — dormant)

## Known Bugs (from Feb 24 evaluation)
- B1: animate-spin-z used in program/page.tsx and artister/page.tsx but CSS defines .animate-spin-3d
- B2: font-glitch keyframes reference Redaction40/60/80 which have no @font-face declarations
- B3: artister_alt/ is dormant - artist pages not routed from navbar
- B4: Back link on artist page goes to /program instead of /artister
- B5: lang="en" in layout.tsx should be lang="no"

## Components
- navbar.tsx: client component, responsive (856px breakpoint), hamburger menu
- glitchlink.tsx: EXISTS but is NEVER USED anywhere
- ArtistCarousel.tsx: src/app/components/ArtistCarousel.tsx — marquee-karusell med klikkbare artistområder, bruker artists[]-array for enkel utvidelse

## Workflow preferences
- Always flag when something should be a component instead of inline page code

## Refactoring Plan
See EVALUERING.md at repo root for full battle plan.
Phases: 1=bugfix, 2=lib/artists.ts, 3=ComingSoonPage/PageHeader/ContactSection components, 4=activate artist pages, 5=replace hardcoded #231f20
