import { db } from "@/app/lib/db";
import Link from "next/link";

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

function formatDayHeader(date: Date): { weekday: string; dayMonth: string } {
  const weekday = date.toLocaleDateString("nb-NO", {
    weekday: "long",
    timeZone: "Europe/Oslo",
  });
  const dayMonth = date.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Oslo",
  });
  return {
    weekday: weekday.charAt(0).toUpperCase() + weekday.slice(1),
    dayMonth,
  };
}

const dayAccents = [
  {
    text: "text-NovaOrange",
    muted: "text-NovaOrange/50",
    bg: "bg-NovaOrange",
    border: "border-NovaOrange/20",
    divider: "divide-NovaOrange/10",
    headerText: "text-NovaBlack",
  },
  {
    text: "text-NovaGreen",
    muted: "text-NovaGreen/50",
    bg: "bg-NovaGreen",
    border: "border-NovaGreen/20",
    divider: "divide-NovaGreen/10",
    headerText: "text-NovaBlack",
  },
  {
    text: "text-NovaPink",
    muted: "text-NovaPink/50",
    bg: "bg-NovaPink",
    border: "border-NovaPink/20",
    divider: "divide-NovaPink/10",
    headerText: "text-NovaBlack",
  },
];

export default async function ProgramPage() {
  const days = await db.day.findMany({
    orderBy: { date: "asc" },
    include: {
      concerts: {
        orderBy: { time: "asc" },
        include: { artist: true },
      },
    },
  });

  return (
    <main className="p-6 text-NovaOrange">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Program</h1>
        <p className="text-xl text-NovaOrange/70">23. – 25. April 2026</p>
      </section>

      {/* Three-column schedule */}
      <section className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
          {days.map((day, i) => {
            const accent = dayAccents[i % dayAccents.length];
            const { weekday, dayMonth } = formatDayHeader(day.date);

            return (
              <div key={day.id} className={`border ${accent.border} mb-8 md:mb-0`}>
                {/* Day header */}
                <div className={`${accent.bg} ${accent.headerText} px-5 py-4`}>
                  <h2 className="text-3xl font-bold">{weekday}</h2>
                  <p className="text-sm font-bold opacity-70">{dayMonth}</p>
                </div>

                {/* Concerts */}
                <div className={`divide-y ${accent.divider}`}>
                  {day.concerts.length === 0 && (
                    <p className={`px-5 py-4 text-sm ${accent.muted}`}>Ingen konserter enda</p>
                  )}
                  {day.concerts.map((concert) => (
                    <div key={concert.id} className="px-5 py-4 flex gap-4 items-start">
                      <span className={`text-sm font-bold ${accent.muted} w-12 shrink-0 mt-1`}>
                        {formatTime(concert.time)}
                      </span>
                      <div>
                        <Link
                          href={`/artister/${toSlug(concert.artist.name)}`}
                          className={`hover-glitch font-bold text-xl ${accent.text} leading-tight`}
                        >
                          {concert.artist.name}
                        </Link>
                        <p className={`text-sm ${accent.muted} mt-0.5`}>{concert.stage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Note */}
      <section className="max-w-6xl mx-auto text-center py-8">
        <p className="text-NovaOrange bg-NovaBlack inline-block font-bold text-lg p-1">
          Flere artister slippes fortløpende!
        </p>
      </section>
    </main>
  );
}
