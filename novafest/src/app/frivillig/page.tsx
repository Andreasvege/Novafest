export default function OmPage() {
  return (
    <main className="p-6 text-NovaOrange bg-NovaBlack/60 max-w-6xl mx-auto rounded-2xl my-8">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Vi trenger frivillige!</h1>
        <p className="text-xl text-NovaOrange/70">Vil du hjelpe oss med å lage norges beste studentfestival?</p>
      </section>

      {/* About Radio Nova */}
      <section className="text-center max-w-3xl mx-auto py-6">
        <a href="https://forms.gle/9Zt7n2mLh1sH8jvG6" className="text-5xl lg:text-6xl bg-NovaOrange text-NovaBlack hover-glitch font-bold mt-12" style={{ textShadow: "-2px -2px 0 var(--NovaOrange), 2px -2px 0 var(--NovaOrange), -2px 2px 0 var(--NovaOrange), 2px 2px 0 var(--NovaOrange)" }}>Søk her</a>
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
    </main>
  );
}