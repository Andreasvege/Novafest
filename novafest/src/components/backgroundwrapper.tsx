"use client";
import { usePathname } from "next/navigation";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isArtister = pathname.startsWith("/artister");

    const background = isArtister
        ? { backgroundImage: "url('/Grønn.png')", backgroundColor: "#2d292a" }
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
