"use client";
import { usePathname } from "next/navigation";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isArtister = pathname.startsWith("/artister");
    const isGreen = pathname.endsWith("vorssamlingen") || pathname.endsWith("/marie-loevaas") || pathname.endsWith("artister");
    const isPink = pathname.startsWith("/frivillig") || pathname.endsWith("gustav1000") || pathname.endsWith("glassmanet");
    //const isOrange = !isGreen && !isPink;

    const background = isGreen
        ? { backgroundImage: "url('/Grønn.png')", backgroundColor: "#2d292a" }
        : isPink
        ? { backgroundImage: "url('/Rosa.png')", backgroundColor: "#2d292a" }
        : { backgroundImage: "url('/Oransje.png')", backgroundColor: "#2d292a" };

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
