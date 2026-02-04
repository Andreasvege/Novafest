import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="p-6 m-4 bg-[#231f20] rounded-2xl border-2 border-[#f9ed24] text-[#f9ed24] text-xl">
            <div className="flex justify-between items-center">
                <ul className="flex gap-12 text-2xl items-center">
                    <li className="font-bold hover:text-[#f9ed24]/60 hover:animate-spin transition-all">
                         <Link href="/"><img src="/logo.png" alt="Novafest logo" className="h-18" /></Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/program">Program</Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/artister">Artister</Link>
                    </li>
                    <li className="transition-all">
                        <Link className="hover-glitch" href="/om">Om oss</Link>
                    </li>
                </ul>
                <Link href="/billetter" className="hover-glitch font-bold bg-[#f9ed24] text-[#231f20] px-4 py-2 rounded-lg hover:bg-[#f9ed24]/80 transition-all">
                    Billetter
                </Link>
            </div>
        </nav>
    );
};