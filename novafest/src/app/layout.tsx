import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import BackgroundWrapper from "@/components/backgroundwrapper";

export const metadata: Metadata = {
  title: "Novafest",
  description: "Radio Novas årlige festival",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="no">
      <body className="antialiased">
        <BackgroundWrapper>
          <div className="min-h-screen bg-[#2d292a]/30">
            <Navbar />
            {children}
          </div>
        </BackgroundWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
