 import { db } from "@/app/lib/db";                                                                                         
  import Link from "next/link";                             
  import { notFound } from "next/navigation";
                                                                                                                             
  function toSlug(name: string): string {
    return name.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa");     
  }                                                                                                                          
  
  export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {                              
    const { slug } = await params;                          

    const artists = await db.artist.findMany();                                                                              
    const artist = artists.find((a) => toSlug(a.name) === slug);
                                                                                                                             
    if (!artist) notFound();                                                                                                 
  
    return (                                                                                                                 
      <main className="p-6 text-NovaGreen">                
        <section className="text-center py-12">
          <h1 className="text-6xl md:text-8xl hover-glitch font-bold">{artist.name}</h1>                                     
        </section>                                                                                                           
                                                                                                                             
        <section className="max-w-3xl mx-auto py-12">                                                                        
          {artist.description && (                          
            <p className="text-lg text-NovaGreen/80 leading-relaxed mb-4">                                                  
              {artist.description}                                                                                           
            </p>
          )}                                                                                                                 
          {artist.link && (                                                                                                  
            <a
              href={artist.link}                                                                                             
              target="_blank"                               
              className="mt-4 inline-block bg-NovaGreen text-[#231f20] px-4 py-2 rounded hover:bg-NovaGreen/80 
  transition-colors"                                                                                                         
            >
              Se på Spotify                                                                                                  
            </a>                                            
          )}
        </section>

        <section className="max-w-3xl mx-auto py-8 border-t border-NovaGreen/30">                                           
          <Link href="/artister" className="hover-glitch text-NovaGreen/70 hover:text-NovaGreen">
            ← Tilbake til artister                                                                                           
          </Link>                                           
        </section>                                                                                                           
      </main>                                               
    );
  }
