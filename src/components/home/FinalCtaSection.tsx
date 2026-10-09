"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { CAFE_IMAGES } from "@/data/images";

export default function FinalCtaSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-espresso-950 text-cream-50 overflow-hidden">
      {/* Background Photography with atmospheric dark roast overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.38] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${CAFE_IMAGES.atmosphericCta.src}')`,
        }}
      />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/70 to-espresso-950/80" />

      {/* Warm caramel radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-caramel-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-500/20 text-caramel-400 border border-caramel-500/30 text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Slow Mornings Begin Here</span>
        </div>

        <h2 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-cream-50">
          Step into warmth.
          <span className="block italic text-caramel-400 font-serif">
            Take your first slow sip.
          </span>
        </h2>

        <p className="text-sm sm:text-lg text-cream-200 font-light max-w-xl mx-auto leading-relaxed">
          Whether you need twenty uninterrupted minutes with a book or an
          editorial hand-pour pulled to perfection, our doors are open every
          morning at 7:00 AM.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-caramel-500 hover:bg-caramel-400 text-espresso-950 font-semibold px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider transition-all shadow-glow hover:scale-105 duration-300 min-h-[48px]"
          >
            <span>Reserve a Table or Walk In</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-espresso-900/80 hover:bg-espresso-800 text-cream-100 border border-espresso-700 px-8 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-colors min-h-[48px]"
          >
            <span>Explore Current Roasts</span>
          </Link>
        </div>

        <p className="text-xs text-cream-400/80 pt-2 font-mono">
          42 Heritage Roastery Lane • Pearl District, Portland, OR
        </p>
      </div>
    </section>
  );
}
