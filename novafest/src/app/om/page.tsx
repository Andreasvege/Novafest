export default function OmPage() {
  return (
    <main className="p-6 my-8 text-NovaOrange bg-NovaBlack/60 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Om oss</h1>
        <p className="text-xl text-NovaOrange/70">Historien bak Novafest</p>
      </section>

      {/* About Radio Nova */}
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Radio Nova</h2>
        <p className="text-lg text-NovaOrange/80 leading-relaxed mb-4">
          Radio Nova er studentradioen i Oslo, drevet av over 250 studenter!
          Siden oppstarten for over 40 år siden har vi vært en plattform for nye stemmer, god musikk
          og engasjerende innhold med et mål om å lage god og underholdende radio for studenter.
        </p>
        <p className="text-lg text-NovaOrange/80 leading-relaxed">
          Vi sender musikk og innhold fra studioet vårt i 4. etasje på Chateau Neuf, med programmer som
          spenner fra musikk og kultur til nyheter og underholdning.
        </p>
      </section>

      {/* About the Festival */}
      <section className="max-w-3xl mx-auto py-12 border-t border-NovaOrange/30">
        <h2 className="text-3xl font-bold mb-6">Festivalen</h2>
        <p className="text-lg text-NovaOrange/80 leading-relaxed mb-4">
          Novafest er vår årlige feiring av musikk og studentkultur.
          Det som startet som et liten samling har vokst til å bli en av
          Oslos mest etterlengtede studentarrangementer.
        </p>
        <p className="text-lg text-NovaOrange/80 leading-relaxed">
          Med fokus på norske artister, studentvennlige priser og god stemning,
          er Novafest en festival laget av studenter, for alle. 
        </p>
        <br />
        <p className="text-lg text-NovaOrange/80 leading-relaxed">
          I år tar hele festivalen sted på Chateau Neuf, og vi lover tre dager fylt med fantastisk musikk og uforglemmelige opplevelser!
          Alle konsertene spilles på Betong i underetasjen - et perfekt lokale for å se disse kommende stjernene på nært hold.
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto py-12 border-t border-NovaOrange/30">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="text-lg text-NovaOrange/80 mb-2">
          E-post: <a href="mailto:novafest@radionova.no" className="hover-glitch text-NovaOrange font-bold hover:underline">novafest@radionova.no</a>
        </p>
        <p className="text-lg text-NovaOrange/80">
          Instagram: <a href="https://instagram.com/novafest.2026" className="hover-glitch text-NovaOrange font-bold hover:underline">@novafest.2026</a>
        </p>
      </section>

      {/* Støttespillere */}
      <section className="max-w-3xl mx-auto py-12 border-t border-NovaOrange/30 flex justify-center">
        <img src="/Oslologo-tekst-sort-skjerm.png" className="w-150 [filter:brightness(0)_saturate(100%)_invert(63%)_sepia(96%)_saturate(500%)_hue-rotate(350deg)_brightness(97%)]" alt="Økonomisk støtte av Oslo kommune" />
      </section>
    </main>
  );
}