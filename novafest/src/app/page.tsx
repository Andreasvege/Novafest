import AnimertStjerne from "@/components/animertstjerne";
import ArtistCarousel from "@/components/artistcarousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-NovaOrange">
      {/* Hero Section */}
      <section className="min-h-[54vh] flex flex-col items-center justify-center text-center">
        {/* <img src="/NovafestLogoIntro.png" className="w-[350px] md:w-[400px] lg:w-[450px] bg-[#231f20]/00" alt="Nova fest logo"></img> */}
        {/* <Link href="https://www.instagram.com/novafest.2026/" className="text-5xl lg:text-6xl bg-NovaOrange text-NovaBlack hover-glitch font-bold mt-12" style={{ textShadow: "-2px -2px 0 var(--NovaOrange), 2px -2px 0 var(--NovaOrange), -2px 2px 0 var(--NovaOrange), 2px 2px 0 var(--NovaOrange)" }}>Instagram</Link> */}
        <img src="/forsidebanner.webp" className="md:w-[800px] w-[600px]"/>

      </section>
      
      {/* Artist Carousel */}
      <ArtistCarousel />
      

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">23. - 25. April</h1>
        <h2 className="text-3xl font-bold mb-6">Der stjerner blir født</h2>
        <p className="text-lg text-NovaOrange/95 leading-relaxed font-bold">
          Novafest er Radio Novas årlige musikkfestival.
          Tre dager fylt med live musikk, god stemning og studentvennlige priser.
        </p>
      </section>

      {/* Lineup Teaser */}
      <section className="py-16 px-4 bg-NovaOrange">
        <div className="flex flex-col max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#231f20]">Flere artister kommer snart</h2>
          <p className="text-lg text-[#231f20]/90 mb-8">Følg med her og på Instagram for oppdateringer!</p>
          <Link href="https://instagram.com/novafest.2026" target="_blank" rel="noopener noreferrer" className="mx-auto group">
            <img src="/instagram_orange1.webp" alt="Instagram" className="w-16 h-16 block group-hover:hidden" />
            <img src="/instagram_orange2.webp" alt="Instagram" className="w-16 h-16 hidden group-hover:block" />
          </Link>
        </div>
      </section>
    </main>
  );
}