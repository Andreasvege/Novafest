export default function OmPage() {
  return (
    <main className="p-6 text-black">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Om oss</h1>
        <p className="text-xl text-gray-600">Historien bak Novafest</p>
      </section>

      {/* About Radio Nova */}
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Radio Nova</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Radio Nova er studentradioen i Oslo, drevet av over 250 studenter!
          Siden oppstarten for over 40 år siden har vi vært en plattform for nye stemmer, god musikk
          og engasjerende innhold med et mål om å lage god og underholdende radio for studenter.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Vi sender musikk og innhold fra studioet vårt i 4. etasje på Chateu Neuf, med programmer som
          spenner fra musikk og kultur til nyheter og underholdning.
        </p>
      </section>

      {/* About the Festival */}
      <section className="max-w-3xl mx-auto py-12 border-t">
        <h2 className="text-3xl font-bold mb-6">Festivalen</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Novafest er vår årlige feiring av musikk og studentkultur.
          Det som startet som en liten samling har vokst til å bli en av
          Oslos mest etterlengtede studentarrangementer.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Med fokus på norske artister, studentvennlige priser og god stemning,
          er Novafest en festival laget av studenter, for alle.
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto py-12 border-t">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="text-lg text-gray-700 mb-2">
          E-post: <a href="mailto:novafest@radionova.no" className="text-red-600 hover:underline">novafest@radionova.no</a>
        </p>
        <p className="text-lg text-gray-700">
          Instagram: <a href="https://instagram.com/novafest.2026" className="text-red-600 hover:underline">@novafest.2026</a>
        </p>
      </section>
    </main>
  );
}