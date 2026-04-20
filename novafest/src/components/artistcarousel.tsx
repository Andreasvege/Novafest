import Link from "next/link";

const artists = [
  { name: "Okinawa",           href: "/artister/okinawa",           left: "0%",    width: "9.1%" },
  { name: "Glassmanet",        href: "/artister/glassmanet",        left: "9.1%",  width: "9.1%" },
  { name: "Sult",              href: "/artister/sult",              left: "18.2%", width: "9.1%" },
  { name: "Marie Løvås",       href: "/artister/marie-loevaas",     left: "27.3%", width: "9.1%" },
  { name: "Kacper",            href: "/artister/kacper",            left: "36.4%", width: "9.1%" },
  { name: "Parkvesenet",       href: "/artister/parkvesenet",       left: "45.5%", width: "9.1%" },
  { name: "DJ Refel",          href: "/artister/dj-refel",          left: "54.5%", width: "9.1%" },
  { name: "Vorssamlingen",     href: "/artister/vorssamlingen",     left: "63.6%", width: "9.1%" },
  { name: "Uironisk Distanse", href: "/artister/uironisk-distanse", left: "72.7%", width: "9.1%" },
  { name: "Tre40Fire",         href: "/artister/tre40fire",         left: "81.8%", width: "9.1%" },
  { name: "Gustav1000",        href: "/artister/gustav1000",        left: "90.9%", width: "9.1%" },
];

export default function ArtistCarousel() {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-max flex animate-carousel">
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="relative shrink-0">
            <img
              src="/karusell_ny.webp"
              alt={copy === 0 ? "Artistkarusell" : ""}
              aria-hidden={copy !== 0}
              className="h-[180px] md:h-[210px] lg:h-[240px]"
              fetchPriority="high"
            />
            {artists.map((artist) => (
              <Link
                key={artist.name}
                href={artist.href}
                aria-label={artist.name}
                tabIndex={copy !== 0 ? -1 : undefined}
                aria-hidden={copy !== 0 ? true : undefined}
                className="absolute inset-y-0"
                style={{ left: artist.left, width: artist.width }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
