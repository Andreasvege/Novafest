import AnimertStjerne from "@/components/animertstjerne";
import ArtistCarousel from "@/components/artistcarousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col text-NovaOrange">
      {/* Hero Section */}
      <section className="min-h-[38vh] md:min-h-[44vh] flex flex-col items-center justify-center text-center">
        {/* <img src="/NovafestLogoIntro.png" className="w-[350px] md:w-[400px] lg:w-[450px] bg-[#231f20]/00" alt="Nova fest logo"></img> */}
        {/* <Link href="https://www.instagram.com/novafest.2026/" className="text-5xl lg:text-6xl bg-NovaOrange text-NovaBlack hover-glitch font-bold mt-12" style={{ textShadow: "-2px -2px 0 var(--NovaOrange), 2px -2px 0 var(--NovaOrange), -2px 2px 0 var(--NovaOrange), 2px 2px 0 var(--NovaOrange)" }}>Instagram</Link> */}
        <img src="/forsidebanner.webp" alt="Novafest 2026 — 23.–25. april" className="lg:w-[800px] md:w-[600px] w-[464px]"/>
      </section>
      <section className="text-center pt-0 pb-8">
        <Link href="https://instagram.com/novafest.2026" target="_blank" rel="noopener noreferrer">
          <h3 className="text-4xl md:text-6xl bg-NovaBlack text-NovaOrange mb-2 font-bold inline-block hover-glitch hover:bg-NovaOrange hover:text-NovaBlack">TAKK FOR I ÅR</h3>
        </Link>
      </section>
      
      {/* Artist Carousel */}
      <ArtistCarousel />
      

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Der stjerner blir født</h2>
        <p className="text-lg text-NovaOrange/95 leading-relaxed font-bold">
          Novafest er Radio Novas årlige musikkfestival.
          Tre dager fylt med live musikk, god stemning og studentvennlige priser.
        </p>
      </section>

      {/* Footer */}
      <footer className="flex-1 py-10 px-4 bg-NovaOrange">
        <div className="flex flex-col max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#231f20]">Vi sees på Chateau Neuf!</h2>
          <p className="text-lg text-[#231f20]/90 mb-8">Følg med her, på Instagram og TikTok for oppdateringer!</p>
          {/* <div className="flex items-center justify-between w-full absolute left-0 px-12">
              <img src="/RadioNova.webp" alt="Radio Nova" className="w-50 grayscale contrast-200" />
              <img src="/Oslologo-sort-Skjerm.png" alt="Oslo kommune" className="w-60" />
          </div> */}
          <Link href="https://instagram.com/novafest.2026" target="_blank" rel="noopener noreferrer" className="mx-auto group">
            <img src="/instagram_orange1.webp" alt="Instagram" className="w-16 h-16 block group-hover:hidden" />
            <img src="/instagram_orange2.webp" alt="Instagram" className="w-16 h-16 hidden group-hover:block" />
          </Link>
        </div>
      </footer>
    </main>
  );
}