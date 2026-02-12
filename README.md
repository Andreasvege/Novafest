# Novafest

Nettside for **Novafest** - den arlige musikkfestivalen arrangert av [Radio Nova](https://radionova.no), studentradioen i Oslo.
Nettsiden er live på [novafest.no](https://novafest.no)

**Festivaldato:** 23.--25. april 2026

## Om prosjektet

Novafest er en tredagers musikkfestival med fokus pa spennende, kommende artister. Denne nettsiden er bygget for a gi besokende all informasjon de trenger -- lineup, program, billetter og mer.

## Teknologi

- **Rammeverk:** Next.js 16 (App Router)
- **Sprak:** TypeScript
- **Styling:** Tailwind CSS 4
- **React:** 19
- **Hosting:** Vercel

## Sider

| Side | Rute | Beskrivelse |
|------|------|-------------|
| Hjem | `/` | Hero, om-teaser, lineup-teaser |
| Program | `/program` | Festivalprogram over tre dager |
| Artister | `/artister` | Oversikt over alle artister |
| Artist | `/artister/[slug]` | Individuell artistside |
| Om | `/om` | Om Radio Nova og festivalen |
| Billetter | `/billetter` | Kommer snart |

## Kom i gang

```bash
# Klon repoet
git clone https://github.com/andreasvege/Novafest.git

# Naviger til Next.js-prosjektet
cd Novafest/novafest

# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev
```

Apne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Prosjektstruktur

```
novafest/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Hjemmeside
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styling
│   │   ├── program/          # Programside
│   │   ├── artister/         # Artistoversikt + individuelle sider
│   │   ├── om/               # Om-side
│   │   └── billetter/        # Billettside (under utvikling)
│   └── components/
│       └── navbar.tsx        # Navigasjonsbar
└── public/
    ├── logo.png              # Novafest-logo
    ├── background.png        # Bakgrunnsbilde
    └── fonts/                # Redaction font-familie
```

## Design

Nettsiden bruker en mork, kornete visuell stil med **Redaction**-fontfamilien og en karakteristisk gul aksentfarge (`#f9ed24`). Interaktive elementer har en glitch-effekt som bytter mellom font-varianter ved hover.

## Lisens

Dette prosjektet er utviklet for Radio Nova / Novafest.
