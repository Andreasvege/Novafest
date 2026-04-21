export default function FrivilligPage() {
  return (
    <main className="p-6 pb-16 text-NovaPink bg-NovaBlack/60 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Vi trenger frivillige!</h1>
        <p className="text-xl text-NovaPink/70">Vil du hjelpe oss med å lage norges beste studentfestival?</p>
      </section>

      {/* About Radio Nova */}
      <section className="text-center max-w-3xl mx-auto py-6">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd18AVG9B5cz-QueKPoLdhM_OWxJxK43KHR8MmGuwx57OCFNQ/viewform" target="_blank" rel="noopener noreferrer" className="text-5xl lg:text-6xl bg-NovaPink text-NovaBlack hover-glitch font-bold mt-12" style={{ textShadow: "-2px -2px 0 var(--NovaPink), 2px -2px 0 var(--NovaPink), -2px 2px 0 var(--NovaPink), 2px 2px 0 var(--NovaPink)" }}>Søk her</a>
      </section>
    

      {/* Contact */}
      <section className="max-w-3xl mx-auto py-12 border-t border-NovaPink/30">
        <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
        <p className="text-lg text-NovaPink/80 mb-2">
          E-post: <a href="mailto:novafest@radionova.no" className="hover-glitch text-NovaPink font-bold hover:underline">novafest@radionova.no</a>
        </p>
        <p className="text-lg text-NovaPink/80">
          Instagram: <a href="https://instagram.com/novafest.2026" target="_blank" rel="noopener noreferrer" className="hover-glitch text-NovaPink font-bold hover:underline">@novafest.2026</a>
        </p>
      </section>
    </main>
  );
}