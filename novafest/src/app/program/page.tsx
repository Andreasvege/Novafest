export default function ProgramPage() {
  return (
    <main className="p-6 text-black min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-6">Program</h1>
      <p className="text-xl text-gray-600 mb-2">Kommer snart...</p>
      <p className="text-lg text-gray-500">
        Følg med på{" "}
        <a
          href="https://www.instagram.com/novafest.2026/"
          className="text-red-600 font-bold hover:text-red-700 hover:rotate-3 inline-block transition-transform"
        >
          Instagram
        </a>
        {" "}for oppdateringer!
      </p>
    </main>
  );
}