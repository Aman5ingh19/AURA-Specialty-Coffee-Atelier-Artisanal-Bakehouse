"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CAFE_IMAGES } from "@/data/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EditorialParallaxBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax image movement
      if (imageRef.current && containerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -10, scale: 1.08 },
          {
            yPercent: 10,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Text reveal
      if (textRef.current && containerRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[65vh] sm:h-[75vh] min-h-[500px] overflow-hidden flex items-center justify-center"
    >
      {/* Full-bleed background image with subtle parallax */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={CAFE_IMAGES.gallery.morningLight.src}
          alt={CAFE_IMAGES.gallery.morningLight.alt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover filter brightness-[0.45] contrast-[1.1]"
        />
      </div>

      {/* Warm vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/30 to-espresso-950/70" />

      {/* Atmospheric Text Content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream-50 space-y-6"
      >
        <span className="font-editorial-subheading text-caramel-400 tracking-[0.3em] text-xs font-semibold uppercase block">
          The Sanctuary at Dawn
        </span>

        <h2 className="font-editorial-heading text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] text-cream-50">
          &ldquo;There is a sacred quiet in the first pour before the world wakes up.&rdquo;
        </h2>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-cream-300 font-serif italic text-center">
          <span className="h-px w-6 sm:w-8 bg-caramel-400 hidden sm:inline-block" />
          <span>7:00 AM • Natural Morning Light on Restoration Brick</span>
          <span className="h-px w-6 sm:w-8 bg-caramel-400 hidden sm:inline-block" />
        </div>
      </div>
    </section>
  );
}
