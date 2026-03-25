"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";


import Link from "next/link";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isArtister = pathname.startsWith("/artister");
    const accent = isArtister
      ? { text: "text-NovaGreen", 
        border: "border-NovaGreen", 
        bg: "bg-NovaGreen", 
        bgHover: "hover:bg-NovaGreen/80",
        logo: "/logo_grønn.png" 
    }

      : { text: "text-NovaOrange", 
        border: "border-NovaOrange", 
        bg: "bg-NovaOrange", 
        bgHover: "hover:bg-NovaOrange/80",
        logo: "/logo.png"
    };

    return (
        <nav className={`p-6 m-4 bg-NovaBlack/80 border-2 ${accent.border} ${accent.text} text-xl`}>
            <div className="flex justify-between items-center">
                {/* Desktop / widescreen navbar */}
                <ul className="hidden navbar:flex gap-12 text-2xl items-center">
                    <li className="font-bold hover:opacity-60 hover:animate-spin transition-all">
                         <Link href="/"><img src={accent.logo} alt="Novafest logo" className="h-16" /></Link>
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
                {/* Mobile navbar */}
                <div className="flex navbar:hidden items-center gap-4">
                    <button onClick={() => setIsOpen(true)} className={`${accent.text} text-4xl`}>☰</button>
                    <Link href="/">
                        <img src="/logo.png" alt="Novafest logo" className="h-16 hover:animate-spin" />
                    </Link>
                </div>

                <a href="https://novafest.ticketco.events/no/nb/e/novafest_2026" className={`hover-glitch font-bold ${accent.bg} text-NovaBlack px-4 py-2 w-27 ${accent.bgHover} transition-all`}>
                    Billetter
                </a>
            </div>

            {/* Fullscreen menu */}
            <div className={`fixed inset-0 bg-NovaBlack z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={() => setIsOpen(false)} className={`absolute top-8 left-8 ${accent.text} text-4xl`}>✕</button>
                <Link href="/program" className="text-4xl hover-glitch" onClick={() => setIsOpen(false)}>Program</Link>
                <Link href="/artister" className="text-4xl hover-glitch" onClick={() => setIsOpen(false)}>Artister</Link>
                <Link href="/frivillig" className="text-4xl hover-glitch" onClick={() => setIsOpen(false)}>Bli frivillig</Link>
                <Link href="/om" className="text-4xl hover-glitch" onClick={() => setIsOpen(false)}>Om oss</Link>
                <a href="https://novafest.ticketco.events/no/nb/e/novafest_2026" className={`font-bold ${accent.bg} text-NovaBlack px-4 py-2 ${accent.bgHover} transition-all`} onClick={() => setIsOpen(false)}>
                    Billetter
                </a>
            </div>

        </nav>
    );
};