"use client";
import { usePathname } from "next/navigation";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isGreen = pathname.endsWith("vorssamlingen") || pathname.endsWith("/marie-loevaas") || pathname.endsWith("artister") || pathname.endsWith("kacper");
    const isPink = pathname.startsWith("/frivillig") || pathname.endsWith("gustav1000") || pathname.endsWith("glassmanet") || pathname.endsWith("tre40fire");
    //const isOrange = !isGreen && !isPink;

    const background = isGreen
        ? { backgroundImage: "url('/Grønn.webp')", backgroundColor: "#2d292a" }
        : isPink
        ? { backgroundImage: "url('/Rosa.webp')", backgroundColor: "#2d292a" }
        : { backgroundImage: "url('/Oransje.webp')", backgroundColor: "#2d292a" };

    return (
        <div style={{
            ...background,
            backgroundSize: "1920px auto",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
        }}>
            {children}
        </div>
    );
}
