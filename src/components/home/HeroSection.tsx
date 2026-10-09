"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Coffee, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CAFE_IMAGES } from "@/data/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const heroImageWrapRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const floatingBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Title & Text Stagger Entrance
      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.15 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaGroupRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          heroImageWrapRef.current,
          { scale: 0.94, opacity: 0, clipPath: "inset(12% 8% 12% 8% round 24px)" },
          {
            scale: 1,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            duration: 1.4,
            ease: "power2.out",
          },
          "-=0.9"
        )
        .fromTo(
          floatingBadgeRef.current,
          { scale: 0.7, opacity: 0, rotate: -6 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.5"
        );

      // Subtle parallax on hero image when scrolling
      if (heroImageRef.current && containerRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-6 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background ambient warm glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-caramel-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        {/* Top Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="h-px w-10 bg-caramel-500" />
          <span className="font-editorial-subheading text-espresso-700 tracking-[0.2em] text-xs">
            Portland, Oregon • Specialty Micro-Roastery & Bakery
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            <div>
              <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-espresso-950 font-normal leading-[1.03] tracking-tight">
                <span ref={titleLine1Ref} className="block">
                  Good coffee.
                </span>
                <span ref={titleLine2Ref} className="block italic text-caramel-600 font-serif">
                  Slow mornings.
                </span>
                <span className="block font-sans text-3xl sm:text-4xl md:text-5xl font-light text-espresso-800 tracking-tight mt-1">
                  Better moments.
                </span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-base sm:text-lg text-espresso-700 max-w-xl font-light leading-relaxed"
            >
              Every cup begins with intentionality. We source regenerative
              single-origin beans, roast them in small batches on clean air,
              and bake naturally leavened pastries before the city awakens.
            </p>

            {/* CTAs & Micro-details */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 bg-espresso-900 text-cream-50 px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-caramel-600 hover:text-white transition-all duration-300 shadow-md group"
              >
                <span>Explore Seasonal Menu</span>
                <ArrowUpRight className="w-4 h-4 text-caramel-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/visit"
                className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-50 text-espresso-900 border border-espresso-800/20 px-7 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
              >
                <span>Find a Table & Hours</span>
              </Link>
            </div>

            {/* Origin Quick Counter */}
            <div className="pt-6 border-t border-subtle grid grid-cols-3 gap-4 max-w-md">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-espresso-950">
                  100%
                </span>
                <span className="text-[11px] text-espresso-600 uppercase tracking-wider">
                  Direct Trade
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-espresso-950">
                  72h
                </span>
                <span className="text-[11px] text-espresso-600 uppercase tracking-wider">
                  Wild Ferment
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-espresso-950">
                  9.2
                </span>
                <span className="text-[11px] text-espresso-600 uppercase tracking-wider">
                  Bar Precision
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div
              ref={heroImageWrapRef}
              className="relative w-full aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl border border-espresso-800/10 group"
            >
              <div ref={heroImageRef} className="relative w-full h-[115%] -top-[7%]">
                <Image
                  src={CAFE_IMAGES.hero.primary.src}
                  alt={CAFE_IMAGES.hero.primary.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom Card Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-cream-50/90 backdrop-blur-md border border-subtle shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-caramel-600 font-bold block">
                    Now Pouring On Bar
                  </span>
                  <span className="font-serif text-sm font-semibold text-espresso-950">
                    Ethiopia Guji Anaerobic Reserve
                  </span>
                </div>
                <div className="h-8 w-8 rounded-full bg-caramel-500/20 text-caramel-600 flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Floating Editorial Badge */}
            <div
              ref={floatingBadgeRef}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-espresso-950 text-cream-50 p-4 sm:p-5 rounded-2xl shadow-xl border border-espresso-750 max-w-[170px] hidden sm:block"
            >
              <div className="flex items-center gap-1.5 text-caramel-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-semibold tracking-wider">
                  Artisanal
                </span>
              </div>
              <p className="text-xs font-serif leading-tight text-cream-200">
                Laminated pastries baked hourly in-house
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs text-espresso-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Coffee bar currently open • Welcoming walk-ins</span>
        </div>

        <a
          href="#philosophy"
          className="inline-flex items-center gap-1.5 text-espresso-600 hover:text-espresso-950 transition-colors"
          aria-label="Scroll down to explore"
        >
          <span>Scroll to uncover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
