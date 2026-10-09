import type { Metadata } from "next";
import StoryPageClient from "@/components/story/StoryPageClient";
import { CAFE_INFO } from "@/data/cafeData";

export const metadata: Metadata = {
  title: "Our Story & Terroir",
  description:
    "Discover the story behind AURA Specialty Coffee Atelier. From single-origin direct trade partnerships in Colombia and Ethiopia to our 72-hour wild sourdough bakehouse in Portland.",
  openGraph: {
    title: `Our Story • ${CAFE_INFO.name}`,
    description: "The craft of regenerative specialty coffee and slow morning Viennoiserie in Portland, OR.",
  },
};

export default function OurStoryPage() {
  return <StoryPageClient />;
}
