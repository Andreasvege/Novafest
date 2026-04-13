# Novafest - Project Context for Claude

## Om Andreas
- Oslo, nyutdannet fra datateknologi (~1 år siden)
- Erfaring: Java, Python, JS/TS, CSS, HTML, C#, Tailwind
- Jobber med prosjektet for å bygge skills + portfolio
- **Arbeidsform:** Andreas lar Claude skrive kode direkte — han leser, forstår og justerer selv. Kort og konsis kommunikasjon, ikke lange forklaringer med mindre han spør.

## Prosjektet
Novafest er Radio Novas (studentradio Oslo) årlige musikkfestival — 23–25. april 2026.

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS 4, React 19, Prisma 7 + PostgreSQL, Vercel

**Repo-struktur:**
```
Novafest/               ← git root
├── novafest/           ← Next.js-appen
│   ├── src/app/
│   ├── src/components/
│   └── public/
└── memory/             ← denne mappen
```

## Design System
**Farger (CSS vars i globals.css + @theme inline):**
- `--NovaBlack: #181818`
- `--NovaOrange: #f9a422`
- `--NovaGreen: #58B847`
- `--NovaPink: #EC1D8E`

**Font:** Redaction-familien (Regular, Bold, 10/20/35/50/70/100) i `/public/fonts/`

**Custom CSS-klasser:**
- `.hover-glitch` — font-glitch effekt ved hover (sykler gjennom Redaction-varianter)
- `.animate-spin-3d` — 3D Y-rotasjon, 4s loop
- `.nova-header` — bakgrunns+farge-swap ved hover via CSS-variabler `--c` og `--bg`

## Sider og fargetema
Navbar og BackgroundWrapper bruker `usePathname()` til å sette farge + bakgrunn per side:

| Side | Farge | Bakgrunn |
|------|-------|----------|
| `/artister`, `/artister/vorssamlingen`, `/artister/marie-loevaas` | NovaGreen | Grønn.png |
| `/frivillig`, `/artister/gustav1000`, `/artister/glassmanet` | NovaPink | Rosa.png |
| Alle andre | NovaOrange | Oransje.png |

Artist `[slug]`-sider bruker slug direkte (ikke pathname) for fargelogikk siden det er server component.

## Implementerte sider
- `/` — Hero (AnimertStjerne), ArtistCarousel, om-seksjon, Instagram-knapp
- `/artister` — Artistliste fra DB, grønn farge
- `/artister/[slug]` — Individuell artistside med bilde, beskrivelse, Instagram-knapp, tilbakeknapp
- `/program` — "Kommer snart" placeholder
- `/om` — Om Radio Nova og festivalen
- `/frivillig` — Frivillig-rekruttering, rosa tema, Google Form-lenke
- `not-found.tsx` — 404-side med hover-glitch

## Komponenter
- `navbar.tsx` — responsiv (856px breakpoint), hamburger-meny, farge/logo per side
- `backgroundwrapper.tsx` — bytter bakgrunnsbilde per side
- `artistcarousel.tsx` — hardkodet med 3 artister (Okinawa, Glass Manet, Marie Løvås)
- `novaheader.tsx` — tekst med bakgrunn + hover color-swap. Props: `color`, `bgColor` (CSS-verdier). Brukes ikke i produksjon ennå.
- `animertstjerne.tsx` — animert stjerne-video (WebM + MOV for Safari)
- `glitchlink.tsx` — finnes men brukes ikke

## Database (Prisma 7 + PostgreSQL)
- Prisma client output: `src/generated/prisma`
- `db.ts` bruker `PrismaPg`-adapter med `POSTGRES_URL` fra `.env.local`
- `prisma.config.ts` håndterer URL — `schema.prisma` skal IKKE ha `url` i datasource (Prisma 7)

**Artister i DB:** Okinawa, Glassmanet, Gustav1000, Marie Løvås (marielovas), SULT, Vorssamlingen

**Bilder:** Lagret i `public/artistside_bilder/` med lowercase filnavn (eks: `glassmanet.png`). DB lagrer kun filnavnet, koden prefixer `/artistside_bilder/`.

**DB-oppdatering via node-script:**
```js
// Bruk pg-klienten direkte med .env.local
import pg from "pg";
const env = readFileSync(".env.local", "utf8");
const match = env.match(/POSTGRES_URL=(.+)/);
const connectionString = match[1].trim().replace(/^["']|["']$/g, "");
// Kjør: node update-db.mjs
```

**Beskrivelser:** Lagret med `\n\n` for avsnittsskift. Koden bruker `whitespace-pre-wrap` + `.replace(/\\n/g, "\n")` for å rendre dem.

## Logoer og assets
- `logo.png` — oransje logo (default)
- `logo_green.png` — grønn logo (artister-sider)
- `logo_rosa.png` — rosa logo (frivillig/pink-sider)
- `instagram_[farge][1/2].png` — Instagram-ikoner, brukes med group hover (1→2 på hover)
- Bakgrunner: `Oransje.png`, `Grønn.png`, `Rosa.png` (fixed 1920px, center top)

## Kjente TODO-er
- [ ] Program-siden — faktisk innhold (Concert-tabellen har data)
- [ ] NovaHeader — hover-effekten er sannsynligvis ødelagt pga inline style-spesifisitet
- [ ] `toSlug()` er duplisert i to filer — burde ligge i `src/utils/slug.ts`
- [ ] `#231f20` hardkodet flere steder — burde bli en CSS-variabel
- [ ] Ingen error.tsx / loading.tsx på rutenivå
