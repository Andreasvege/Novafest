import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-[70vh]">
      <div className="p-6 m-4 max-w-2xl w-full text-NovaOrange bg-NovaBlack/60 text-center">
      <h1 className="text-8xl font-bold mb-6 hover-glitch">404</h1>
      <p className="text-2xl mb-8 text-NovaOrange/80">Denne siden finnes ikke.</p>
      <Link href="/" className="hover-glitch text-NovaOrange/70 hover:text-NovaOrange">
        ← Tilbake til forsiden
      </Link>
      </div>
    </main>
  );
}
