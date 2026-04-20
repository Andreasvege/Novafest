import { db } from "@/app/lib/db";
import Link from "next/link";
import Image from "next/image";

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa");
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Oslo",
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Europe/Oslo",
  });
}

function formatWeekday(date: Date): string {
  const w = date.toLocaleDateString("nb-NO", { weekday: "long", timeZone: "Europe/Oslo" });
  return w.charAt(0).toUpperCase() + w.slice(1);
}

const dayConfig = [
  { gradient: "/Oransje.webp", badge: "/logo.webp",       color: "#f9a422", doors: "Dørene åpner 18:30", extra: { time: "17:00", name: "Musikkbingo i galleriet" } },
  { gradient: "/Grønn.webp",   badge: "/logo_green.webp", color: "#58B847", doors: "Dørene åpner 19:30", extra: null },
  { gradient: "/Rosa.webp",    badge: "/logo_rosa.webp",  color: "#EC1D8E", doors: "Dørene åpner 19:00", extra: { time: "13:00", name: "Klesmarked i foajeen" } },
];

export default async function ProgramPage() {
  const days = await db.day.findMany({
    orderBy: { date: "asc" },
    include: { artists: { orderBy: { time: "asc" } } },
  });

  return (
    <main
      className="min-h-screen px-4 py-6"
    >
      <h1 className="text-center text-6xl md:text-8xl font-bold text-white mb-6">
        <span className="bg-NovaBlack text-NovaOrange px-4 py-1 inline-block">Program</span>
      </h1>

      <div className="grid gap-6 max-w-[84rem] mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {days.map((day, i) => {
          const cfg = dayConfig[i % dayConfig.length];
          const weekday = formatWeekday(day.date);
          const date = formatDate(day.date);

          return (
            <div
              key={day.id}
              className="relative flex flex-col overflow-hidden"
              style={{
                backgroundImage: `url('${cfg.gradient}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "560px",
                border: "3px solid #181818",
                boxShadow: "-6px 6px 0px #181818",
              }}
            >
              {/* Dato og dører øverst */}
              <div className="flex justify-between items-start px-6 pt-6">
                <span className="text-lg font-bold bg-NovaBlack px-1" style={{ color: cfg.color, fontFamily: "Redaction50-Italic" }}>
                  {cfg.doors}
                </span>
                <span className="text-2xl font-bold bg-NovaBlack px-1" style={{ color: cfg.color, fontFamily: "Redaction50-Italic" }}>
                  {date}
                </span>
              </div>

              {/* Ukedag med mørk bar */}
              <div className="bg-NovaBlack px-4 py-1 mt-1">
                <h2
                  className="font-bold leading-none"
                  style={{ color: cfg.color, fontSize: "clamp(3rem, 8vw, 5rem)" }}
                >
                  {weekday}
                </h2>
              </div>

              {/* Ekstra arrangement */}
              {cfg.extra && <div className="flex flex-col items-start px-6 pt-6 gap-1">
                <span className="text-sm font-bold leading-none px-1" style={{ color: "#181818", backgroundColor: cfg.color, fontFamily: "Redaction50-Italic" }}>
                  {cfg.extra.time}
                </span>
                <span className="font-bold leading-tight px-1" style={{ color: "#181818", backgroundColor: cfg.color, fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>
                  {cfg.extra.name}
                </span>
              </div>}

              {/* Artistliste */}
              <div className="flex flex-col px-6 pt-6 gap-3 flex-1">
                {day.artists.map((artist) => (
                  <div key={artist.id} className="flex flex-col items-start">
                    {artist.time && (
                      <span
                        className="text-xl font-bold leading-none mb-1 bg-NovaBlack px-1"
                        style={{ color: cfg.color, fontFamily: "Redaction50-Italic" }}
                      >
                        {formatTime(artist.time)}
                      </span>
                    )}
                    <Link
                      href={`/artister/${toSlug(artist.name)}`}
                      className="hover-glitch font-bold leading-tight bg-NovaBlack px-1"
                      style={{
                        color: cfg.color,
                        fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                      }}
                    >
                      {artist.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Badge nederst til høyre */}
              <div className="flex justify-end px-6 pb-6 pt-4">
                <Image
                  src={cfg.badge}
                  alt="Novafest 2026"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-NovaOrange font-bold text-lg mt-10 bg-NovaBlack/60 px-4 py-2 max-w-xl mx-auto">
        Hele arrangementet skjer på Betong på Chateau Neuf
      </p>
    </main>
  );
}
