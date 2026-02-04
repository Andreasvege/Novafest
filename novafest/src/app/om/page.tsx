export default function OmPage() {
  return (
    <main className="p-6 text-[#f9ed24]">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Om oss</h1>
        <p className="text-xl text-[#f9ed24]/70">Historien bak Novafest</p>
      </section>

      {/* About Radio Nova */}
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Radio Nova</h2>
        <p className="text-lg text-[#f9ed24]/80 leading-relaxed mb-4">
          Radio Nova er studentradioen i Oslo, drevet av over 250 studenter!
          Siden oppstarten for over 40 år siden har vi vært en plattform for nye stemmer, god musikk
          og engasjerende innhold med et mål om å lage god og underholdende radio for studenter.
        </p>
        <p className="text-lg text-[#f9ed24]/80 leading-relaxed">
          Vi sender musikk og innhold fra studioet vårt i 4. etasje på Chateu Neuf, med programmer som
          spenner fra musikk og kultur til nyheter og underholdning.
        </p>
      </section>

      {/* About the Festival */}
      <section className="max-w-3xl mx-auto py-12 border-t border-[#f9ed24]/30">
        <h2 className="text-3xl font-bold mb-6">Festivalen</h2>
        <p className="text-lg text-[#f9ed24]/80 leading-relaxed mb-4">
          Novafest er vår årlige feiring av musikk og studentkultur.
          Det som startet som en liten samling har vokst til å bli en av
          Oslos mest etterlengtede studentarrangementer.
        </p>
        <p className="text-lg text-[#f9ed24]/80 leading-relaxed">
          Med fokus på norske artister, studentvennlige priser og god stemning,
          er Novafest en festival laget av studenter, for alle.
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto py-12 border-t border-[#f9ed24]/30">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="text-lg text-[#f9ed24]/80 mb-2">
          E-post: <a href="mailto:novafest@radionova.no" className="hover-glitch text-[#f9ed24] font-bold hover:underline">novafest@radionova.no</a>
        </p>
        <p className="text-lg text-[#f9ed24]/80">
          Instagram: <a href="https://instagram.com/novafest.2026" className="hover-glitch text-[#f9ed24] font-bold hover:underline">@novafest.2026</a>
        </p>
      </section>
    </main>
  );
}