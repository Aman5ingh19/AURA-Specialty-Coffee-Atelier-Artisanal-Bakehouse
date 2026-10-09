import type { Metadata } from "next";
import MenuPageClient from "@/components/menu/MenuPageClient";
import { CAFE_INFO } from "@/data/cafeData";

export const metadata: Metadata = {
  title: "Seasonal Menu",
  description:
    "Explore our full cafe menu: proprietary signature extractions, single-origin V60 hand-pours, espresso classics, and fresh hourly laminated Viennoiserie.",
  openGraph: {
    title: `Seasonal Menu • ${CAFE_INFO.name}`,
    description: "Curated coffee extractions, hand pours, and artisanal bakes in Portland, OR.",
  },
};

export default function MenuPage() {
  return <MenuPageClient />;
}
