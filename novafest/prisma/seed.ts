import 'dotenv/config'
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.POSTGRES_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Ryd opp eksisterende data
  await prisma.artist.deleteMany();
  await prisma.day.deleteMany();
  await prisma.year.deleteMany();

  // Opprett år
  const year2026 = await prisma.year.create({ data: { year: 2026 } });

  // Opprett dager
  const torsdag = await prisma.day.create({
    data: { date: new Date("2026-04-23T00:00:00.000Z"), yearId: year2026.id },
  });
  const fredag = await prisma.day.create({
    data: { date: new Date("2026-04-24T00:00:00.000Z"), yearId: year2026.id },
  });
  const lordag = await prisma.day.create({
    data: { date: new Date("2026-04-25T00:00:00.000Z"), yearId: year2026.id },
  });

  // Torsdag 23. april
  await prisma.artist.createMany({
    data: [
      {
        name: "Okinawa",
        imageUrl: "okinawa.png",
        link: "https://www.instagram.com/okinawa.band/",
        time: new Date("2026-04-23T17:30:00.000Z"), // 19:30 norsk tid
        dayId: torsdag.id,
        description:
          "Okinawa spiller energisk psykedelisk indie-pop med fengende riff og energiske improvisasjons-strekk. Med klare paralleller til jazz, og en harmonisk palett farget av brasiliansk populærmusikk fra 70-tallet, spiller Okinawa musikk som både utfordrer og fenger.\n\nOkinawas karakteristiske lyd preges av at alle fire medlemmene bidrar som vokalister. Med inspirasjon fra band som The Beatles og Beach Boys plukker bandet opp arven etter en svunnet boy-band kultur.\n\nGroovy gitarriff og drømmende lyder fra vibrafon skaper en umiskjennelig sound som er helt unik for Okinawa. Det hele leveres med et lekent samspill og en eksentrisk scenedynamikk der ingen to konserter blir helt like.",
      },
      {
        name: "Marie Løvås",
        imageUrl: "marielovas.png",
        link: "https://www.instagram.com/marielvs/",
        time: new Date("2026-04-23T18:45:00.000Z"), // 20:45 norsk tid
        dayId: torsdag.id,
        description:
          "Med sitt kritikerroste album «Alle mine svar blei om til såpebobleregn» (oktober 2024) har Marie Løvås nå tatt steget ut til et bredt publikum. Hun ble nylig tildelt Norsk Viseforum sitt artiststipend, og med en klokkeklar vokal og sterke låter, har hun blitt omtalt som en av de beste på den norske visepopscenen.\n\nDagsavisen kalte henne en del av «den absolutte eliten» av norske visepopartister, og singler som August, Siste trikk og Telthusbakken seint i mai har fått jevnt med spilletid på NRK P1 og P3. Låta Hundretusen hjerteslag ble også en del av Kirkens Bymisjons julekampanje, og ble en folkefavoritt.\n\nSpellemanspris i 2025, et tydelig bevis på at hun er en av de mest spennende artistene på den norske musikkscenen i dag. Med melodiske, ærlige og uforutsigbare viser har Marie Løvås funnet sitt unike uttrykk. Oppdag henne nå – hun er her for å bli!",
      },
      {
        name: "Sult",
        imageUrl: "sult01.png",
        link: "https://instagram.com/sultbandet",
        time: new Date("2026-04-23T20:00:00.000Z"), // 22:00 norsk tid
        dayId: torsdag.id,
        description:
          "SULT er fem gode kompiser fra Indre Østfold som har spilt sammen helt siden barndommen, og siden den gang vært en musikalsk familie. Med Eskil på vokal og gitar, Gustav på trommer, Edvard på bass, og Theodor og Kristoffer på gitar og synth. Bandet gir en eksplosiv og rungende miks av rock, pop med direkte tekster som både sparker, trøster og treffer rett i hjertet.\n\nMed musikalske forbilder på skalaen fra Dumdum Boys, til Zach Bryan og Håkan Hellstrøm. Lager SULT låter som representerer ungdomstidens essens; ærlig, uperfekt og full av nerve.\n\nFra MGP-jr til P3 Urørt viser Sult en veldig god musikkforståelse og at de vil nå langt! Målsetningene er høye og ambisjonene er store. 2026 blir året der SULT havner på vår radar!",
      },
    ],
  });

  // Fredag 24. april
  await prisma.artist.createMany({
    data: [
      {
        name: "Uironisk Distanse",
        imageUrl: null,
        link: null,
        time: new Date("2026-04-24T18:00:00.000Z"), // 20:00 norsk tid
        dayId: fredag.id,
        description: "Kommer snart.",
      },
      {
        name: "Parkvesenet",
        imageUrl: null,
        link: null,
        time: new Date("2026-04-24T19:15:00.000Z"), // 21:15 norsk tid
        dayId: fredag.id,
        description: "Kommer snart.",
      },
      {
        name: "Tre40Fire",
        imageUrl: null,
        link: null,
        time: new Date("2026-04-24T20:30:00.000Z"), // 22:30 norsk tid
        dayId: fredag.id,
        description: "Kommer snart.",
      },
      {
        name: "Safario",
        imageUrl: null,
        link: null,
        time: new Date("2026-04-24T21:45:00.000Z"), // 23:45 norsk tid
        dayId: fredag.id,
        description: "Kommer snart.",
      },
    ],
  });

  // Lørdag 25. april
  await prisma.artist.createMany({
    data: [
      {
        name: "Vorssamlingen",
        imageUrl: "vorssamlingen.png",
        link: "https://www.instagram.com/vorssamlingen_kor/",
        time: new Date("2026-04-25T18:00:00.000Z"), // 20:00 norsk tid
        dayId: lordag.id,
        description:
          "Fikk du ikke med deg vorset på Carls den 13. mars? Frykt ikke, Vorssamlingen geleider oss igjennom vorset, så vi blir klare for Novafest!\n\nLiker du vors? Liker du kor? Da kommer du til å elske Vorssamlingen, fordi de har blandet kor og vors og skapt den perfekte stemningsbalubaen! Alle sangene du legger til i køen på fest, de har dem!",
      },
      {
        name: "Glassmanet",
        imageUrl: "glassmanet.png",
        link: "https://www.instagram.com/glassmanetmusic/",
        time: new Date("2026-04-25T19:30:00.000Z"), // 21:30 norsk tid
        dayId: lordag.id,
        description:
          "Glassmanet er en Oslobasert trio som skaper lydbølger inspirert av psykedelisk rock, drømmepop og shoegaze. Siden 2020 har bandet nådd lyttere på tvers av verdenshav gjennom audiovisuelle utgivelser i form av mikroalbum, EP-er, og musikkvideoer.\n\nDe siste årene har Glassmanet spilt en rekke konserter, deriblant på by:Larm i Oslo, Vill Vill Vest i Bergen, Lyse Netter-festivalen i Moss og på Third Man Records i London.\n\nI november 2024 ga Glassmanet ut EP-en FLOW, som blant annet har blitt spilt på NRK P2, og på Radio X i Storbritannia. Glassmanet har nå dykket inn i innspilling av sitt første fullengderalbum, hvor soundet flyter inn i nye ukjente farvann.",
      },
      {
        name: "Gustav1000",
        imageUrl: "gustav1000.png",
        link: "https://www.instagram.com/1000gustav",
        time: new Date("2026-04-25T20:45:00.000Z"), // 22:45 norsk tid
        dayId: lordag.id,
        description:
          "Gustav1000 er duoen som har funnet sin egen nisje i skjæringspunktet mellom techno og slampoesi. Med pulserende beats og ordspill som stikker seg ut, har de etablert seg som et av de mest særegne navnene i norsk musikk.\n\nGustav og Ulvar møttes på ungdomsskolen i Tønsberg, hvor de begynte å eksperimentere med musikk. Fra å freestyle rappe over Skrillex-beats til å produsere egne låter. Den lekne og eksperimentelle energien fra de tidlige dagene preger fortsatt musikken deres, og høres tydelig i låter som «Ta tlf pls», «Galaksen» og «Crazy ravejente».\n\nNylig solgte duoen ut Parkteateret i Oslo, og bekreftet posisjonen sin som et liveopptreden verdt å få med seg. Nå er de klare for neste kapittel. 25. april inntar Gustav1000 scenen på Novafest.",
      },
      {
        name: "DJ Refel",
        imageUrl: null,
        link: null,
        time: new Date("2026-04-25T21:45:00.000Z"), // 23:45 norsk tid
        dayId: lordag.id,
        description: "Kommer snart.",
      },
    ],
  });

  console.log("Alt lagt inn! 3 dager, 11 artister.");
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
