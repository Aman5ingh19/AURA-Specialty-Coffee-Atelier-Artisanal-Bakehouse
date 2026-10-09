import type { Metadata } from "next";
import VisitPageClient from "@/components/visit/VisitPageClient";
import { CAFE_INFO } from "@/data/cafeData";

export const metadata: Metadata = {
  title: "Visit Us & Table Inquiries",
  description:
    "Plan your visit to AURA Specialty Coffee Atelier in Portland, OR. Find opening hours, directions, transit guides, and table reservation inquiries.",
  openGraph: {
    title: `Visit & Inquiries • ${CAFE_INFO.name}`,
    description: "Location, hours, directions, and table inquiries for AURA in Portland, OR.",
  },
};

export default function VisitPage() {
  return <VisitPageClient />;
}
