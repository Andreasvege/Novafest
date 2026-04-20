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
  { gradient: "/Oransje.png", badge: "/logo.png",       color: "#f9a422" },
  { gradient: "/Grønn.png",   badge: "/logo_green.png", color: "#58B847" },
  { gradient: "/Rosa.png",    badge: "/logo_rosa.png",  color: "#EC1D8E" },
];

export default async function ProgramPage() {
  const days = await db.day.findMany({
    orderBy: { date: "asc" },
    include: { artists: { orderBy: { time: "asc" } } },
  });

  return (
    <main
      className="min-h-screen px-4 py-16"
    >
      <h1 className="text-center text-6xl md:text-8xl font-bold text-white mb-16">
        <span className="bg-NovaBlack text-NovaOrange px-4 py-1 inline-block">Program</span>
      </h1>

      <div className="grid gap-6 max-w-6xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
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
              {/* Dato øverst til høyre */}
              <div className="flex justify-end px-6 pt-6">
                <span className="text-2xl font-bold bg-NovaBlack px-2 py-0.5" style={{ color: cfg.color }}>
                  {date}
                </span>
              </div>

              {/* Ukedag med mørk bar */}
              <div className="bg-NovaBlack/80 px-6 py-2 mt-1">
                <h2
                  className="font-bold leading-none"
                  style={{ color: cfg.color, fontSize: "clamp(3rem, 8vw, 5rem)" }}
                >
                  {weekday}
                </h2>
              </div>

              {/* Artistliste */}
              <div className="flex flex-col px-6 pt-6 gap-3 flex-1">
                {day.artists.map((artist) => (
                  <div key={artist.id} className="flex flex-col items-start">
                    {artist.time && (
                      <span
                        className="text-xl font-bold leading-none mb-1 bg-NovaBlack px-2 py-0.5"
                        style={{ color: cfg.color }}
                      >
                        {formatTime(artist.time)}
                      </span>
                    )}
                    <Link
                      href={`/artister/${toSlug(artist.name)}`}
                      className="hover-glitch font-bold leading-tight bg-NovaBlack px-2"
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

      
    </main>
  );
}
