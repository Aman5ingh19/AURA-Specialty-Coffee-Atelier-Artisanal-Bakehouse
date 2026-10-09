import React from "react";
import HeroSection from "@/components/home/HeroSection";
import EditorialMarquee from "@/components/home/EditorialMarquee";
import BrandIntroSection from "@/components/home/BrandIntroSection";
import SignatureExperienceSection from "@/components/home/SignatureExperienceSection";
import FeaturedMenuSection from "@/components/home/FeaturedMenuSection";
import EditorialParallaxBreak from "@/components/home/EditorialParallaxBreak";
import StoryPreviewSection from "@/components/home/StoryPreviewSection";
import AtmosphereGallerySection from "@/components/home/AtmosphereGallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VisitPreviewSection from "@/components/home/VisitPreviewSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Seamless Editorial Brand Marquee */}
      <EditorialMarquee />

      {/* 3. Brand Introduction & Philosophy Pillars */}
      <BrandIntroSection />

      {/* 4. Signature Experience / Featured Drinks Interactive Showcase */}
      <SignatureExperienceSection />

      {/* 5. Featured Menu Highlights Preview */}
      <FeaturedMenuSection />

      {/* 6. Full-Bleed Panoramic Parallax Atmosphere Breaker */}
      <EditorialParallaxBreak />

      {/* 7. Our Story & Roastery Roots Preview */}
      <StoryPreviewSection />

      {/* 8. Space, Light & Interior Atmosphere Gallery */}
      <AtmosphereGallerySection />

      {/* 9. Guest Impressions & Press Excerpts */}
      <TestimonialsSection />

      {/* 10. Visit Us, Opening Hours & Location Info */}
      <VisitPreviewSection />

      {/* 11. Final Atmospheric CTA */}
      <FinalCtaSection />
    </div>
  );
}
