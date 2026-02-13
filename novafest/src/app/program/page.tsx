export default function ProgramPage() {
  return (
    <main className="p-6 text-NovaOrange">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Kommer snart</h1>
        <p className="text-xl text-NovaOrange/70">23. - 25. April 2026</p>
      </section>

      {/* Schedule */}
      <section className="max-w-4xl mx-auto py-8">
        <img src="/logo.png" alt="Novafest 2026 logo" className="w-1/3 mx-auto animate-spin-z"></img>
      </section>

      {/* Note */}
      <section className="max-w-4xl mx-auto text-center py-8 text-NovaOrange/50">
        <p>* Programmet kan bli endret. Flere artister slippes fortløpende.</p>
      </section>
    </main>
  );
}