import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CAFE_INFO } from "@/data/cafeData";
import { CAFE_IMAGES } from "@/data/images";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${CAFE_INFO.name} • Specialty Coffee Atelier & Bakehouse`,
    template: `%s | ${CAFE_INFO.name} Specialty Coffee`,
  },
  description:
    "Boutique specialty coffee roastery and artisanal bakehouse in Portland, OR. Single-origin micro lots, 48-hour sourdough lamination, slow mornings, and precision extraction.",
  keywords: [
    "specialty coffee Portland",
    "artisan cafe",
    "single-origin roastery",
    "croissant bakehouse",
    "kyoto cold brew",
    "slow mornings cafe",
  ],
  authors: [{ name: "AURA Specialty Coffee Atelier" }],
  openGraph: {
    title: `${CAFE_INFO.name} • Specialty Coffee Atelier & Bakehouse`,
    description: "Good coffee. Slow mornings. Better moments. Specialty micro-roastery in Portland, OR.",
    type: "website",
    locale: "en_US",
    siteName: CAFE_INFO.fullName,
    images: [
      {
        url: CAFE_IMAGES.hero.primary.src,
        width: 1200,
        height: 630,
        alt: CAFE_IMAGES.hero.primary.alt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#211B17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream-200 text-espresso-950 font-sans selection:bg-caramel-500 selection:text-cream-50">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
