  import Link from "next/link";

  type Artist = {
    name: string;
    href: string;
    left: string;   // f.eks. "0%"
    width: string;  // f.eks. "22%"
  };

  const artists: Artist[] = [
    { name: "Okinawa",     href: "/artister/okinawa",     left: "0%",  width: "22%" },
    { name: "Glass Manet", href: "/artister/glass-manet", left: "43%", width: "29%" },
  ];

  export default function ArtistCarousel() {
    return (
      <section className="w-full overflow-hidden">
        <div className="flex animate-carousel">
          {[0, 1].map((copy) => (
            <div key={copy} className="relative flex-shrink-0">
              <img
                src="/Karusell.png"
                alt={copy === 0 ? "Karusell" : ""}
                aria-hidden={copy === 1}
                className="w-[1050px] md:w-[1200px] lg:w-[1400px] height-auto"
              />
              {artists.map((artist) => (
                <Link
                  key={artist.name}
                  href={artist.href}
                  aria-label={artist.name}
                  tabIndex={copy === 1 ? -1 : undefined}
                  aria-hidden={copy === 1 ? true : undefined}
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