import Link from "next/link";

export default function Home() {
  return (
    <main className="text-[#f9ed24]">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold mb-6 hover:bg-[#f9ed24] hover:text-[#231f20] transition-colors cursor-default">
          <span className="hover-glitch">Novafest 2026</span>
        </h1>
        <p className="text-2xl md:text-3xl text-[#f9ed24]/80 mb-2">
          23. - 26. April 2026
        </p>
        <p className="text-xl text-[#f9ed24]/60 mb-8">
          Oslo
        </p>
        <Link
          href="https://www.instagram.com/novafest.2026/"
          className="hover-glitch bg-[#f9ed24] text-[#231f20] text-xl font-bold px-8 py-4 rounded-lg hover:bg-[#f9ed24]/80 transition-colors duration-300"
        >
          Instagram
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Oslos studentfestival</h2>
        <p className="text-lg text-[#f9ed24]/80 leading-relaxed">
          Novafest er Radio Novas årlige musikkfestival.
          En dag fylt med live musikk, god stemning og studentvennlige priser.
        </p>
      </section>

      {/* Lineup Teaser */}
      <section className="py-16 px-4 bg-[#f9ed24]">
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