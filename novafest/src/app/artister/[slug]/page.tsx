const artists = [
    {
      id: 1,
      name: "Karpe",
      description: "Norsk hip hop-duo bestående av Magdi og Chirag.",
      link: "https://open.spotify.com/artist/2oQX8QiMNsCTvDwVMgqfnq",
      imageUrl: "..../public/karpetestbilde.png",
    },
    {
      id: 2,
      name: "Cezinando",
      description: "Norsk rapper og artist fra Oslo.",
      link: "https://open.spotify.com/artist/504cl42JQLRqlZddfZ3S4z?si=ab9a134924fe42cf",
      imageUrl: null,
    },
  ];

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}
  
export default async function ArtisterPage({ params }: { params: { slug: string } }) {
  const {slug} = await params;

  //hente artistnavn som matcher slug
  const artist = artists.find(artist => toSlug(artist.name) === slug);
  
  if (!artist) {
    return (
      <main className="p-6 text-[#f9ed24]">
        <h1 className="text-4xl font-bold">Artist ikke funnet!</h1>
        </main>
    );
  }
  
  return (
    <main className="p-6 text-[#f9ed24]">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl hover-glitch hover:bg-[#f9ed24] hover:text-[#231f20] font-bold">{artist.name}</h1>
      </section>

      {/* Artist Info */}
      <section className="max-w-3xl mx-auto py-12">
        
        {artist.description && 
        <p className="text-lg text-[#f9ed24]/80 leading-relaxed mb-4">
          {artist.description}
        </p>
        }
        <a href={artist.link} target="_blank" className="mt-4 inline-block bg-[#f9ed24] text-[#231f20] px-4 py-2 rounded hover:bg-[#e0d51c] transition-colors">
          Se på Spotify
        </a>
      </section>

      {/* Back link */}
      <section className="max-w-3xl mx-auto py-8 border-t border-[#f9ed24]/30">
        <a href="/program" className="hover-glitch text-[#f9ed24]/70 hover:text-[#f9ed24]">
          ← Tilbake til program
        </a>
      </section>
    </main>
    
    )
  }

//  Gammel placeholder

/*export default function ArtisterPage(){
  return (
    <div className="p-6 flex flex-col justify-center gap-6 text-[#f9ed24] items-center py-12">
      <h1 className="text-6xl md:text-8xl font-bold mb-8">Artister</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        <span className="hover-glitch text-3xl md:text-4xl font-bold hover:bg-[#f9ed24] hover:text-[#231f20] px-4 py-2 transition-colors cursor-default">Cezinando</span>
        <span className="hover-glitch text-3xl md:text-4xl font-bold hover:bg-[#f9ed24] hover:text-[#231f20] px-4 py-2 transition-colors cursor-default">Sondre Justad</span>
        <span className="hover-glitch text-3xl md:text-4xl font-bold hover:bg-[#f9ed24] hover:text-[#231f20] px-4 py-2 transition-colors cursor-default">Unge Ferrari</span>
        <span className="hover-glitch text-3xl md:text-4xl font-bold hover:bg-[#f9ed24] hover:text-[#231f20] px-4 py-2 transition-colors cursor-default">Arif</span>
        <span className="hover-glitch text-3xl md:text-4xl font-bold hover:bg-[#f9ed24] hover:text-[#231f20] px-4 py-2 transition-colors cursor-default">Karpe</span>
        <span className="hover-glitch text-3xl md:text-4xl font-bold hover:bg-[#f9ed24] hover:text-[#231f20] px-4 py-2 transition-colors cursor-default">Dagny</span>
      </div>
    </div>
  )
}
  */