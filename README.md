<div align="center">

<img src="novafest/public/forsidebanner.webp" width="640" alt="Novafest 2026">

### Nettsiden til Radio Novas musikkfestival · Oslo · 23.–25. april 2026

![Next.js](https://img.shields.io/badge/Next.js-181818?style=for-the-badge&logo=nextdotjs&logoColor=f9a422)
![Tailwind](https://img.shields.io/badge/Tailwind-181818?style=for-the-badge&logo=tailwindcss&logoColor=58B847)
![Postgres](https://img.shields.io/badge/PostgreSQL-181818?style=for-the-badge&logo=postgresql&logoColor=EC1D8E)
![Vercel](https://img.shields.io/badge/Vercel-181818?style=for-the-badge&logo=vercel&logoColor=f9a422)

</div>

---

## Glitch

Lenker og overskrifter glitcher når du holder musa over dem. Fonten (Redaction) finnes i mange varianter, og en CSS-animasjon bytter mellom dem på under et halvt sekund.

<div align="center">
  <img src="docs/glitch.gif" width="720" alt="Glitch-effekt på artistlista">
</div>

## Tre farger

Hver side har sin egen farge: oransje, grønn eller rosa. Navbar, logo og bakgrunn bytter etter hvilken side du er på.

<div align="center">
  <img src="docs/tema.gif" width="720" alt="Fargetemaene på sidene">
</div>

## Sidene

| | |
|:---:|:---:|
| <img src="docs/home.webp" alt="Forsiden"> | <img src="docs/program.webp" alt="Program"> |
| **Forsiden** · banner og artistkarusell | **Program** · tre dager, alle tider |
| <img src="docs/artister.webp" alt="Artister"> | <img src="docs/artist.webp" alt="Artistside"> |
| **Artister** · alle elleve artistene | **Artistside** · bilde, tekst og Instagram |

<div align="center">
  <img src="docs/frivillig.webp" width="49%" alt="Frivillig">
  <br>
  <b>Bli frivillig</b> · rekruttering av frivillige
</div>

## Lineup 2026

| Torsdag 23.4 | Fredag 24.4 | Lørdag 25.4 |
|---|---|---|
| Okinawa | Uironisk Distanse | Vorssamlingen |
| Marie Løvås | Parkvesenet | Glassmanet |
| Sult | Tre40Fire | Gustav1000 |
| | Kacper | DJ Refel |

## Kjør lokalt

```bash
cd novafest
npm install
npm run dev
```

Artistene ligger i en Postgres-database, så du trenger en `POSTGRES_URL` i `novafest/.env.local`. Fyll databasen med:

```bash
cp .env.local .env
npx prisma migrate dev
npx prisma db seed
```

---

<div align="center">
  <img src="novafest/public/logo.webp" width="80" alt="Novafest-logo">
  <br>
  Laget for <a href="https://radionova.no">Radio Nova</a>
</div>
