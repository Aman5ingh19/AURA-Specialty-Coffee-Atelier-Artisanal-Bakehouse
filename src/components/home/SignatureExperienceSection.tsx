"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Droplets, Flame, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SIGNATURE_EXPERIENCES } from "@/data/cafeData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SignatureExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);

  const current = SIGNATURE_EXPERIENCES[activeIndex];

  // GSAP animation when switching active signature drink
  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;

    gsap.to([imageCardRef.current, contentCardRef.current], {
      opacity: 0,
      y: 15,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(idx);
        gsap.to([imageCardRef.current, contentCardRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        });
      },
    });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal on scroll
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-espresso-950 text-cream-100 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-caramel-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-caramel-400" />
              <span className="font-editorial-subheading text-caramel-400 tracking-[0.25em] text-xs font-semibold">
                Curated Craft Editions
              </span>
            </div>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl lg:text-6xl text-cream-50 font-normal leading-tight">
              The Signature Creations
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-cream-400 max-w-md font-light leading-relaxed">
            Three proprietary extractions developed across hundreds of cuppings,
            marrying precision water chemistry with artisanal botanicals.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-4 border-b border-espresso-850">
          {SIGNATURE_EXPERIENCES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2.5 ${
                activeIndex === idx
                  ? "bg-caramel-500 text-espresso-950 font-semibold shadow-lg scale-[1.02]"
                  : "bg-espresso-900 text-cream-300 hover:bg-espresso-800 hover:text-cream-100 border border-espresso-800"
              }`}
            >
              <span>{item.name}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  activeIndex === idx
                    ? "bg-espresso-950 text-caramel-300"
                    : "bg-espresso-800 text-cream-400"
                }`}
              >
                {item.price}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-espresso-900/60 rounded-3xl p-6 sm:p-10 border border-espresso-800 shadow-2xl backdrop-blur-sm">
          {/* Visual Showcase Side */}
          <div
            ref={imageCardRef}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-espresso-750 group"
          >
            <Image
              src={current.image}
              alt={current.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-black/20" />

            <div className="absolute top-4 left-4 bg-espresso-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-caramel-300 border border-espresso-800 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-caramel-400" />
              <span>Limited Daily Allocation</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-cream-100">
              <span className="text-[11px] uppercase tracking-widest text-caramel-400 font-semibold block">
                Origin Terroir
              </span>
              <p className="font-serif text-sm sm:text-base text-cream-50 font-medium">
                {current.originTerroir}
              </p>
            </div>
          </div>

          {/* Editorial Specs Side */}
          <div
            ref={contentCardRef}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-espresso-800">
                <span className="text-xs uppercase tracking-[0.2em] text-caramel-400 font-semibold">
                  {current.subtitle}
                </span>
                <span className="font-serif text-2xl text-cream-50 font-bold">
                  {current.price}
                </span>
              </div>

              <h3 className="font-editorial-heading text-3xl sm:text-4xl text-cream-50 font-normal mt-4 mb-3">
                {current.name}
              </h3>

              <p className="text-sm sm:text-base text-cream-300 font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Process Extraction Detail */}
            <div className="p-4 rounded-xl bg-espresso-950/70 border border-espresso-800">
              <div className="flex items-center gap-2 text-xs text-caramel-400 font-medium mb-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Extraction Technique</span>
              </div>
              <p className="text-xs text-cream-200 font-mono">
                {current.process}
              </p>
            </div>

            {/* Tasting Notes Pills */}
            <div>
              <span className="block text-xs uppercase tracking-wider text-cream-400 mb-2 font-medium">
                Sensory Profile Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {current.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1 rounded-full text-xs bg-espresso-800 text-cream-100 border border-espresso-750 flex items-center gap-1.5"
                  >
                    <Droplets className="w-3 h-3 text-caramel-400" />
                    <span>{note}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-caramel-500 hover:bg-caramel-400 text-espresso-950 px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm"
              >
                <span>View Complete Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/visit"
                className="text-xs text-cream-300 hover:text-caramel-400 transition-colors underline underline-offset-4"
              >
                Experience at the bar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
