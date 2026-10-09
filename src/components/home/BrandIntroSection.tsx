"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, Leaf, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_PILLARS } from "@/data/cafeData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline reveal on scroll
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Pillar cards staggered reveal
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".pillar-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream-100 border-y border-subtle relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-editorial-subheading text-caramel-600 tracking-[0.25em] text-xs font-semibold block mb-3">
            The Philosophy of Origin & Craft
          </span>

          <h2
            ref={headlineRef}
            className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl text-espresso-950 font-normal leading-[1.12]"
          >
            We believe extraordinary coffee is an{" "}
            <span className="italic font-serif text-caramel-600">
              agricultural dialogue
            </span>
            , not an industrial commodity.
          </h2>

          <p className="mt-6 text-espresso-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Every green bean arrives unroasted from farmers we know by name.
            Every morning pastry honors the slow art of sourdough fermentation.
            We leave nothing to shortcuts.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {STORY_PILLARS.map((pillar, idx) => {
            const icons = [
              <Leaf key="leaf" className="w-5 h-5 text-olive-500" />,
              <Flame key="flame" className="w-5 h-5 text-caramel-600" />,
              <Sparkles key="sparkles" className="w-5 h-5 text-caramel-500" />,
            ];

            return (
              <div
                key={pillar.number}
                className="pillar-card bg-cream-50 rounded-2xl overflow-hidden border border-subtle shadow-card flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-espresso-950/80 backdrop-blur-sm text-cream-50 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider">
                    {pillar.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {icons[idx]}
                      <span className="text-[11px] uppercase tracking-wider text-espresso-500 font-semibold">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-espresso-950 font-semibold mb-3 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-light">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-subtle flex items-center justify-between text-xs text-caramel-600 font-medium">
                    <span>Learn standard</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Link Callout */}
        <div className="mt-14 text-center">
          <Link
            href="/our-story"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-espresso-900 hover:text-caramel-600 transition-colors uppercase tracking-widest border-b border-espresso-900 hover:border-caramel-600 pb-1"
          >
            <span>Read our complete story & roastery roots</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
