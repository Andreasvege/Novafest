export default function ProgramPage() {
  return (
    <main className="p-6 text-NovaOrange">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Kommer snart</h1>
        <p className="text-xl text-NovaOrange/70">23. - 25. April 2026</p>
      </section>

      {/* Schedule */}
      <section className="flex flex-col max-w-4xl mx-auto py-8 items-center justify-center text-center">
        <video autoPlay loop muted className="w-[350px] md:w-[400px] lg:w-[450px] bg-[#231f20]/00">
            <source src="/stjerne-logo-animert.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
      </section>

      {/* Note */}
      <section className="max-w-4xl text-xl text-bold mx-auto text-center py-8 text-NovaOrange">
        <p className="">Programmet kan bli endret. Flere artister slippes fortløpende.</p>
      </section>
    </main>
  );
}