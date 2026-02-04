export default function ProgramPage() {
  return (
    <main className="p-6 text-[#f9ed24]">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Program</h1>
        <p className="text-xl text-[#f9ed24]/70">23. - 25. April 2026</p>
      </section>

      {/* Schedule */}
      <section className="max-w-4xl mx-auto py-8">
        {/* Day 1 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-[#f9ed24]/30 pb-2">Fredag 23. april</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#f9ed24]/20">
              <div>
                <p className="text-2xl font-bold">Dagny</p>
                <p className="text-[#f9ed24]/60">Hovedscenen</p>
              </div>
              <p className="text-xl">18:00</p>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#f9ed24]/20">
              <div>
                <p className="text-2xl font-bold">Unge Ferrari</p>
                <p className="text-[#f9ed24]/60">Hovedscenen</p>
              </div>
              <p className="text-xl">20:00</p>
            </div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-[#f9ed24]/30 pb-2">Lørdag 24. april</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#f9ed24]/20">
              <div>
                <p className="text-2xl font-bold">Cezinando</p>
                <p className="text-[#f9ed24]/60">Hovedscenen</p>
              </div>
              <p className="text-xl">17:00</p>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#f9ed24]/20">
              <div>
                <p className="text-2xl font-bold">Sondre Justad</p>
                <p className="text-[#f9ed24]/60">Hovedscenen</p>
              </div>
              <p className="text-xl">19:00</p>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#f9ed24]/20">
              <div>
                <p className="text-2xl font-bold">Karpe</p>
                <p className="text-[#f9ed24]/60">Hovedscenen</p>
              </div>
              <p className="text-xl">21:30</p>
            </div>
          </div>
        </div>

        {/* Day 3 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-[#f9ed24]/30 pb-2">Søndag 25. april</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#f9ed24]/20">
              <div>
                <p className="text-2xl font-bold">Arif</p>
                <p className="text-[#f9ed24]/60">Hovedscenen</p>
              </div>
              <p className="text-xl">18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="max-w-4xl mx-auto text-center py-8 text-[#f9ed24]/50">
        <p>* Programmet kan bli endret. Flere artister slippes fortløpende.</p>
      </section>
    </main>
  );
}