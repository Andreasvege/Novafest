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
          <div className="min-h-screen flex flex-col bg-[#2d292a]/35">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-NovaBlack focus:text-NovaOrange focus:border focus:border-NovaOrange">
              Hopp til innhold
            </a>
            <header>
              <Navbar />
            </header>
            <div id="main-content">
              {children}
            </div>
          </div>
        </BackgroundWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
