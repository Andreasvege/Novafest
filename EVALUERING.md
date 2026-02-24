# Novafest — Full Kodebase-evaluering
*Gjennomført: 24. februar 2026*

---

## 1. BUGS (ting som faktisk er ødelagt)

### B1 — Spinne-animasjonen fungerer ikke (kritisk)
**Filer:** `app/program/page.tsx` og `app/artister/page.tsx`

```tsx
// Begge bruker denne klassen:
className="... animate-spin-z"

// Men CSS-en definerer denne:
.animate-spin-3d { ... }
```

**Løsning:** Bytt `animate-spin-z` → `animate-spin-3d` i begge filer.

---

### B2 — Glitch-animasjonen bruker fonter som ikke er deklarert
**Fil:** `app/globals.css`

`@keyframes font-glitch` refererer til:
- `Redaction40` (ved 60% og 100%)
- `Redaction80` (ved 70%)
- `Redaction60` (ved 80%)

Ingen av disse har `@font-face`-deklarasjoner. Disse trinnene faller stille tilbake til standardfonten, og glitch-effekten mister tre av ti trinn.

**Løsning:** Enten legg til manglende `@font-face`-regler for de tre fontene (hvis fontfilene finnes i `/public/fonts/`), eller erstatt de ugyldige stegene med varianter som faktisk er deklarert (10, 20, 35, 50, 70, 100).

---

### B3 — `artister_alt/` er et tomt spor (strukturelt bug)
CLAUDE.md dokumenterer `artister/[slug]/page.tsx` som en aktiv rute, men i virkeligheten:
- `/artister` viser bare en "Kommer snart"-placeholder
- Den faktiske artistlisten og individuelle artistsider ligger i `artister_alt/` og er **ikke tilgjengelig fra nettleseren**

**Løsning:** Se seksjon 3 (refactoring-plan). Dette løses når vi setter opp `src/lib/artists.ts` og aktiverer ekte artistsider.

---

### B4 — Tilbakelenke fra artistside peker feil
**Fil:** `app/artister_alt/[slug]/page.tsx` linje 58

```tsx
<a href="/program" className="hover-glitch ...">← Tilbake til program</a>
```

Siden er en artistside, ikke en programside. Lenken burde peke til `/artister`.

**Løsning:** Bytt `href="/program"` → `href="/artister"`.

---

### B5 — Nettstedet er merket som engelsk
**Fil:** `app/layout.tsx` linje 18

```tsx
<html lang="en">  // ← feil!
```

Alt innhold er på norsk. Dette er dårlig for SEO og tilgjengelighet (skjermlesere vil lese teksten med feil uttale).

**Løsning:** Bytt `lang="en"` → `lang="no"`.

---

## 2. ADVARSLER (ting som ikke er ødelagt, men bør fikses)

### A1 — Identiske sider: `program` og `artister`
De to placeholder-sidene er bokstavelig talt kopier av hverandre, linje for linje. Selv "Programmet kan bli endret"-teksten er på begge.

### A2 — `frivillig/page.tsx` har feil funksjonsnavn
```tsx
export default function OmPage() {  // ← copy-paste fra om/page.tsx
```
Bør hete `FrivilligPage`. Ingen funksjonell konsekvens, men forvirrende.

### A3 — `GlitchLink`-komponenten brukes ikke
`src/components/glitchlink.tsx` er skrevet og klar, men importeres aldri noe sted. Den bør enten tas i bruk eller slettes.

### A4 — Hardkodet `#231f20` brukes fremdeles
Fargen `#231f20` er hardkodet i:
- `app/page.tsx` (lineup-seksjon)
- `components/navbar.tsx` (hover-states, bg)
- `app/artister_alt/[slug]/page.tsx`
- `app/artister_alt/page.tsx`

Burde erstattes med `text-NovaBlack` / `bg-NovaBlack` for konsistens.

### A5 — `<img>` i stedet for Next.js `<Image>`
Prosjektet bruker ren HTML `<img>` overalt. Next.js sin `<Image>`-komponent gir:
- Automatisk lazy loading
- WebP-konvertering
- Størrelsesoptimalisering

For et lite prosjekt er dette lav prioritet, men verdt å merke seg.

### A6 — Kontaktseksjonen er duplisert
Identisk kontaktseksjon (e-post + Instagram) finnes i:
- `app/om/page.tsx`
- `app/frivillig/page.tsx`

---

## 3. SLAGPLAN — Komponenter og refactoring

### Fase 1: Rask bugfixing (gjør dette nå)
| # | Hva | Fil | Prioritet |
|---|-----|-----|-----------|
| 1 | Fiks `animate-spin-z` → `animate-spin-3d` | `program/page.tsx`, `artister/page.tsx` | Høy |
| 2 | Fiks `lang="en"` → `lang="no"` | `layout.tsx` | Høy |
| 3 | Fiks manglende fontdeklarasjoner i glitch-animasjon | `globals.css` | Medium |
| 4 | Fiks feil funksjonsnavn i `frivillig/page.tsx` | `frivillig/page.tsx` | Lav |
| 5 | Fiks tilbakelenke på artistside | `artister_alt/[slug]/page.tsx` | Lav |

---

### Fase 2: Opprett delt data-fil
Lag `src/lib/artists.ts` med en felles `artists`-array og `toSlug()`-hjelper.
Dette fjerner hardkodet artistdata fra `artister_alt/[slug]/page.tsx` og gjør det mulig å koble artistlisten til individuelle sider.

```ts
// src/lib/artists.ts
export type Artist = {
  id: number;
  name: string;
  description: string;
  link: string;
};

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export const artists: Artist[] = [
  // ...
];
```

---

### Fase 3: Lag felles komponenter

#### 3a — `ComingSoonPage`-komponent
Erstat de to identiske placeholder-sidene med én komponent:

```tsx
// src/components/ComingSoonPage.tsx
type Props = { title: string; note?: string };
export function ComingSoonPage({ title, note }: Props) { ... }
```

Brukes i `program/page.tsx` og `artister/page.tsx`.

#### 3b — `PageHeader`-komponent
Gjenbrukbar header med stor tittel + undertekst. Brukes på nesten alle sider:

```tsx
// src/components/PageHeader.tsx
type Props = { title: string; subtitle?: string };
export function PageHeader({ title, subtitle }: Props) { ... }
```

#### 3c — `ContactSection`-komponent
Fjerner duplisering mellom `om` og `frivillig`:

```tsx
// src/components/ContactSection.tsx
export function ContactSection() { ... }
```

#### 3d — Ta i bruk `GlitchLink`
Komponenten eksisterer allerede. Importer den i navbar og sider i stedet for å skrive `<Link className="hover-glitch">` manuelt overalt.

---

### Fase 4: Aktiver artistsider
Når `src/lib/artists.ts` er på plass:
1. Flytt `artister_alt/` → `artister/` (erstatt placeholder-sida)
2. Koble `<span>`-elementene i artistlisten til `<Link href={/artister/${toSlug(name)}}>`
3. Legg til `generateStaticParams()` i `[slug]/page.tsx` for statisk generering

---

### Fase 5: Erstatt hardkodede farger
Søk og erstatt `#231f20` → `NovaBlack` i alle filer.

---

## 4. Prioritert rekkefølge (oppsummert)

```
Nå (bugs):        B1 → B5 (ca. 15 min)
Snart (struktur): Fase 2 → Fase 3 (artistdata + komponenter)
Senere:           Fase 4 (aktivere artistsider)
Når tid:          Fase 5 (farger) + Next.js Image
```

---

## 5. Hva som er bra

- Designsystemet med CSS-variabler og `@theme inline` er satt opp riktig
- Responsiv navbar med hamburger-meny fungerer
- Glitch-fonteffekten er kreativ og unik
- Vercel Analytics er integrert
- Kodestrukturen er ryddig og lett å forstå
- `GlitchLink`-komponenten viser god komponenttenking (selv om den ikke er tatt i bruk ennå)
