 import { db } from "@/app/lib/db";
  import Link from "next/link";
  import { notFound } from "next/navigation";

  function toSlug(name: string): string {
    return name.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa");
  }

  export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const artists = await db.artist.findMany();
    const artist = artists.find((a) => toSlug(a.name) === slug);

    if (!artist) notFound();

    const isGreen = slug === "vorssamlingen" || slug === "marie-loevaas";
    const isPink = slug === "gustav1000" || slug === "glassmanet" || slug === "tre40fire";
    const accent = isGreen
      ? { text: "text-NovaGreen", textMuted: "text-NovaGreen/80", border: "border-NovaGreen/30", bg: "bg-NovaGreen", bgHover: "hover:bg-NovaGreen/80", back: "text-NovaGreen/70 hover:text-NovaGreen", ig1: "/instagram_green1.webp", ig2: "/instagram_green2.webp" }
      : isPink
      ? { text: "text-NovaPink", textMuted: "text-NovaPink/80", border: "border-NovaPink/30", bg: "bg-NovaPink", bgHover: "hover:bg-NovaPink/80", back: "text-NovaPink/70 hover:text-NovaPink", ig1: "/instagram_pink1.webp", ig2: "/instagram_pink2.webp" }
      : { text: "text-NovaOrange", textMuted: "text-NovaOrange/80", border: "border-NovaOrange/30", bg: "bg-NovaOrange", bgHover: "hover:bg-NovaOrange/80", back: "text-NovaOrange/70 hover:text-NovaOrange", ig1: "/instagram_orange1.webp", ig2: "/instagram_orange2.webp" };

    return (
      <main className={`p-6 my-4 max-w-4xl mx-auto ${accent.text}`}>

        <section className="flex justify-center mb-4">
          {artist.imageUrl && (
            <img src={"/artistside_bilder/" + artist.imageUrl.replace(/\.png$/i, ".webp")} alt={artist.name} className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto rounded" />
          )}
        </section>
        <section className="max-w-3xl mx-auto py-12">
          {artist.description && (
            <p className={`text-[21px] ${accent.textMuted} font-bold bg-NovaBlack/60 p-4 leading-relaxed mb-4 whitespace-pre-wrap`}>
              {artist.description.replace(/\\n/g, "\n")}
            </p>
          )}

          {artist.link && (
            <a href={artist.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block group">
              <img src={accent.ig1} alt="Instagram" className="w-12 h-12 block group-hover:hidden" />
              <img src={accent.ig2} alt="Instagram" className="w-12 h-12 hidden group-hover:block" />
            </a>
          )}
        </section>

        <section className={`max-w-3xl mx-auto py-8 border-t ${accent.border}`}>
          <Link href="/artister" className={`hover-glitch ${accent.bg} text-NovaBlack px-4 py-2 text-xl font-bold`}>
            ← Tilbake til artister
          </Link>
        </section>
      </main>
    );
  }
