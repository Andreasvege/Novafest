import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Novafest",
  description: "Radio Novas årlige festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{
          backgroundImage: "url('/Oransje.png')",
          backgroundSize: "190%",
          backgroundPosition: "0px -40%",
          backgroundAttachment: "fixed",
          backgroundColor: "#2d292a",
        }}
      >
        <div className="min-h-screen bg-[#231f20]/20">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
