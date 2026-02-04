import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-black mb-6 hover:bg-red-600 hover:text-white">
          novafest 2026.
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-2">
          23. - 25. April 2026
        </p>
        <p className="text-xl text-gray-600 mb-8">
          Oslo
        </p>
        <Link
          href="https://www.instagram.com/novafest.2026/"
          className="bg-red-600 text-white text-xl font-bold px-8 py-4 rounded-lg hover:bg-orange-500 transition-colors duration-300"
        >
          Instagram
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Oslos studentfestival</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Novafest er Radio Novas årlige musikkfestival.
          En dag fylt med live musikk, god stemning og studentvennlige priser.
        </p>
      </section>

      {/* Lineup Teaser */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Lineup for 2026</h2>
          <p className="text-lg text-gray-600 mb-8">Artister slippes snart...</p>
          <Link
            href="/program"
            className="text-red-600 font-bold hover:underline"
          >
            Se program →
          </Link>
        </div>
      </section>
    </main>
  );
}