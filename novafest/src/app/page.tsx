import Link from "next/link";

export default function Home() {
  return (
    <main className="text-NovaOrange">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <img src="/NovafestLogoIntro.png" className="w-1/3 bg-[#231f20]/00" alt="Nova fest logo"></img>
          <Link href="https://www.instagram.com/novafest.2026/" className="text-6xl bg-NovaOrange text-NovaBlack hover-glitch font-bold mt-12" style={{ textShadow: "-2px -2px 0 var(--NovaOrange), 2px -2px 0 var(--NovaOrange), -2px 2px 0 var(--NovaOrange), 2px 2px 0 var(--NovaOrange)" }}>Instagram</Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Oslos studentfestival</h2>
        <p className="text-lg text-NovaOrange/80 leading-relaxed">
          Novafest er Radio Novas årlige musikkfestival.
          En dag fylt med live musikk, god stemning og studentvennlige priser.
        </p>
      </section>

      {/* Lineup Teaser */}
      <section className="py-16 px-4 bg-NovaOrange">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#231f20]">Lineup for 2026</h2>
          <p className="text-lg text-[#231f20]/70 mb-8">Artister slippes snart...</p>
          <Link
            href="/program"
            className="hover-glitch text-[#231f20] font-bold hover:underline"
          >
            Se program →
          </Link>
        </div>
      </section>
    </main>
  );
}