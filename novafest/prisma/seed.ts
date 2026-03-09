 import 'dotenv/config'
  import { PrismaClient } from "../src/generated/prisma/client";
  import { PrismaPg } from "@prisma/adapter-pg";

  const connectionString = process.env.POSTGRES_URL;

  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });

  async function main() {
    await prisma.artist.createMany({
      data: [
        {   name: "Okinawa",
            link: "https://open.spotify.com/artist/39PbmQ1z1fEAH5JZzpMKjJ?si=dZU-_zzCTAG4Z90dNefe_Q",
            imageUrl: "okinawa.jpg",
            description: "Okinawa spiller energisk psykedelisk indie-pop med fengende riff og energiske improvisasjons-strekk. Med klare paralleller til jazz, og en harmonisk palett farget av brasiliansk populærmusikk fra 70-tallet, spiller Okinawa musikk som både utfordrer og fenger. Okinawas karakteristiske lyd preges av at alle fire medlemmene bidrar som vokalister. Med inspirasjon fra band som The Beatles og Beach Boys plukker bandet opp arven etter en svunnet boy-band kultur. Groovy gitarriff og drømmende lyder fra vibrafon skaper en umiskjennelig sound som er helt unik for Okinawa. Det hele leveres med et lekent samspill og en eksentrisk scenedynamikk der ingen to konserter blir helt like."
         },
        {   name: "Glass Manet",
            link: "https://open.spotify.com/artist/7hHXHLcOB8lpSArvAvhoOt?si=UY58pI9AR5SfcuedNxs75A",
            imageUrl: "glassmanet.jpg",
            description: "Glassmanet er en Oslobasert trio som skaper lydbølger inspirert av psykedelisk rock, drømmepop og shoegaze. Siden 2020 har bandet nådd lyttere på tvers av verdenshav gjennom audiovisuelle utgivelser i form av mikroalbum, EP-er, og musikkvideoer. De siste årene har Glassmanet spilt en rekke konserter, deriblant på by:Larm i Oslo, Vill Vill Vest i Bergen, Lyse Netter-festivalen i Moss og på Third Man Records i London. I november 2024 ga Glassmanet ut EP-en FLOW, som blant annet har blitt spilt på NRK P2, og på Radio X i Storbritannia. Glassmanet har nå dykket inn i innspilling av sitt første fullengderalbum, hvor soundet flyter inn i nye ukjente farvann."
        },
        {   name: "Marie Løvås",
            link: "https://open.spotify.com/artist/4bExkUKWY4gvXgvr8HVvey?si=JMJqBiQJTVykdFsNm3swQQ",
            imageUrl: "marielovas.png",
            description:"Med sitt kritikerroste album «Alle mine svar blei om til såpebobleregn» (oktober 2024) har Marie Løvås nå tatt steget ut til et bredt publikum. Hun ble nylig tildelt Norsk Viseforum sitt artiststipend, og med en klokkeklar vokal og sterke låter, har hun blitt omtalt som en av de beste på den norske visepopscenen. Dagsavisen kalte henne en del av «den absolutte eliten» av norske visepopartister, og singler som August, Siste trikk og Telthusbakken seint i mai har fått jevnt med spilletid på NRK P1 og P3. Låta Hundretusen hjerteslag ble også en del av Kirkens Bymisjons julekampanje, og ble en folkefavoritt. Spellemanspris i 2025, et tydelig bevis på at hun er en av de mest spennende artistene på den norske musikkscenen i dag. Med melodiske, ærlige og uforutsigbare viser har Marie Løvås funnet sitt unike uttrykk. Oppdag henne nå – hun er her for å bli!"
        }
      ],
    });

    console.log("Artister lagt inn!");
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });