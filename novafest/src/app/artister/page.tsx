 import { db } from "@/app/lib/db";                                                                                         
import NovaHeader from "@/components/novaheader";
  import Link from "next/link";                                                                                              
   
  function toSlug(name: string): string {                                                                                    
    return name.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa");         
  }                                                                                                                          
                                                            
  export default async function ArtisterPage() {
    const artists = await db.artist.findMany({
      orderBy: { name: "asc" },                                                                                              
    });
                                                                                                                             
    return (                                                
      <main className="p-6 text-NovaGreen">
        <section className="text-center py-12">                                                                              
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Artister</h1>
          <p className="text-xl text-NovaGreen/70">23. - 25. April 2026</p>                                                 
        </section>                                                                                                           
                                                                                                                             
        <section className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto py-8">                                     
          {artists.map((artist) => (                        
            <Link                                                                                                            
              key={artist.id}                               
              href={`/artister/${toSlug(artist.name)}`}
              className="hover-glitch text-NovaBlack bg-NovaGreen sm:text-4xl md:text-6xl font-bold hover:bg-NovaBlack hover:text-NovaGreen px-4 py-2 transition-colors"
  style={{padding: "2px 3px"}}                                                                                                         
            >                                                                                                                
              {artist.name}                                                                                                  
            </Link>                                         
          ))}
          {/* <NovaHeader color="var(--NovaBlack)" bgColor="var(--NovaGreen)">Uironisk Distanse</NovaHeader> */}
        </section>

        <section className="max-w-4xl text-xl mx-auto font-bold text-center py-8">                                     
          <p className="text-NovaGreen bg-NovaBlack inline-block p-1">Flere artister kommer!</p>
        </section>                                                                                                           
      </main>                                               
    );                                                                                                                       
  }              