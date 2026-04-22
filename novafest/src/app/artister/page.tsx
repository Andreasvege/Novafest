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
                                                            
const HEADLINE_ORDER = ["Gustav1000", "Kacper", "Sult", "Vorssamlingen", "Uironisk Distanse", "Glassmanet", "Marie Løvås", "Okinawa", "Parkvesenet", "Tre40Fire", "DJ Refel"];

  export default async function ArtisterPage() {
    const artists = await db.artist.findMany({
      orderBy: { name: "asc" },
    });

    const headlines = HEADLINE_ORDER.map((name) => artists.find((a) => a.name === name)).filter(Boolean);
    const rest = artists.filter((a) => !HEADLINE_ORDER.includes(a.name));
    const sorted = [...headlines, ...rest] as typeof artists;
                                                                                                                             
    return (                                                
      <main className="p-6 text-NovaBlack">
        <section className="text-center py-4">                                                                              
          <h1 className="text-6xl md:text-8xl bg-NovaBlack text-NovaGreen font-bold mb-4 inline-block">Artister</h1>
          <p className="text-xl font-bold text-NovaGreen/70">23. - 25. April 2026</p>                                                 
        </section>                                                                                                           
                                                                                                                             
        <section className="flex flex-wrap justify-center md:gap-3 gap-2 max-w-4xl mx-auto py-0">                                     
          {sorted.map((artist) => (                        
            <Link
              key={artist.id}
              href={`/artister/${toSlug(artist.name)}`}
              className="hover-glitch hover-glitch-stable text-NovaBlack bg-NovaGreen text-[32px] sm:text-5xl md:text-6xl font-bold hover:bg-NovaBlack hover:text-NovaGreen transition-colors"
              style={{padding: "2px 3px"}}
              data-text={artist.name}
            >                                                                                                                
              {artist.name}                                                                                                  
            </Link>                                         
          ))}
          {/* <NovaHeader color="var(--NovaBlack)" bgColor="var(--NovaGreen)">Uironisk Distanse</NovaHeader> */}
        </section>

        <section className="max-w-4xl text-xl mx-auto font-bold text-center py-8">                                     
          <Link className="text-NovaGreen bg-NovaBlack inline-block p-1" href="/program">Sjekk programmet her!</Link>
        </section>                                                                                                           
      </main>                                               
    );                                                                                                                       
  }              