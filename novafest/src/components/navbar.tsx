import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="p-6 m-4 bg-NovaBlack/80 rounded-2xl border-2 border-NovaOrange text-NovaOrange text-xl">
            <div className="flex justify-between items-center">
                <ul className="flex gap-12 text-2xl items-center">
                    <li className="font-bold hover:text-NovaOrange/60 hover:animate-spin transition-all">
                         <Link href="/"><img src="/logo.png" alt="Novafest logo" className="h-18" /></Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/program">Program</Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/artister">Artister</Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/frivillig">Bli frivillig</Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/om">Om oss</Link>
                    </li>
                </ul>
                <a href="https://novafest.ticketco.events/no/nb/e/novafest_2026" className="hover-glitch font-bold bg-NovaOrange text-NovaBlack px-4 py-2 rounded-lg hover:bg-NovaOrange/80 transition-all">
                    Billetter
                </a>
            </div>
        </nav>
    );
};