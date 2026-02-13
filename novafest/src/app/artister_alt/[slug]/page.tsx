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
      <main className="p-6 text-NovaOrange">
        <h1 className="text-4xl font-bold">Artist ikke funnet!</h1>
        </main>
    );
  }
  
  return (
    <main className="p-6 text-NovaOrange">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl hover-glitch hover:bg-NovaOrange hover:text-[#231f20] font-bold">{artist.name}</h1>
      </section>

      {/* Artist Info */}
      <section className="max-w-3xl mx-auto py-12">
        
        {artist.description && 
        <p className="text-lg text-NovaOrange/80 leading-relaxed mb-4">
          {artist.description}
        </p>
        }
        <a href={artist.link} target="_blank" className="mt-4 inline-block bg-NovaOrange text-[#231f20] px-4 py-2 rounded hover:bg-NovaOrange/80 transition-colors">
          Se på Spotify
        </a>
      </section>

      {/* Back link */}
      <section className="max-w-3xl mx-auto py-8 border-t border-NovaOrange/30">
        <a href="/program" className="hover-glitch text-NovaOrange/70 hover:text-NovaOrange">
          ← Tilbake til program
        </a>
      </section>
    </main>
    
    )
  }

