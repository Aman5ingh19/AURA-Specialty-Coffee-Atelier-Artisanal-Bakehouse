"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Compass } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CAFE_IMAGES } from "@/data/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StoryPreviewSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageColRef.current && textColRef.current) {
        gsap.fromTo(
          imageColRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          }
        );

        gsap.fromTo(
          textColRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
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
      className="py-24 sm:py-32 bg-cream-50 border-b border-subtle overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Layered Editorial Photography */}
          <div ref={imageColRef} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-subtle group">
              <Image
                src={CAFE_IMAGES.pageHeroes.story.src}
                alt={CAFE_IMAGES.pageHeroes.story.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping secondary photo */}
            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-cream-50 hidden sm:block">
              <Image
                src={CAFE_IMAGES.craftPillars.convectionRoast.src}
                alt={CAFE_IMAGES.craftPillars.convectionRoast.alt}
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>

            {/* Quality seal badge */}
            <div className="absolute top-6 left-6 bg-cream-50/90 backdrop-blur-md px-4 py-2 rounded-full border border-subtle shadow-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-caramel-600" />
              <span className="text-xs font-serif font-bold text-espresso-950">
                Portland Roast Guild 2024
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div ref={textColRef} className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-caramel-600" />
              <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold">
                Our Genesis & Vocation
              </span>
            </div>

            <h2 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl text-espresso-950 font-normal leading-[1.12]">
              Born from a quiet rebellion against rushed mornings.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-espresso-750 font-light leading-relaxed">
              <p>
                In 2021, AURA opened in an 1890s brick warehouse in the Pearl
                District. We set out with a simple hypothesis: that coffee
                tastes best when brewed without hurry, in a space bathed in
                soft morning light, surrounded by quiet warmth and the scent
                of cultured butter sourdough.
              </p>
              <p>
                We do not use automatic batch blenders or commercial syrups.
                Every roast profile is dialed in weekly by our founder,
                reflecting seasonal micro-climates from high-altitude farms in
                Colombia, Ethiopia, and Panama.
              </p>
            </div>

            {/* Roaster Quote */}
            <div className="p-5 rounded-2xl bg-cream-200/70 border-l-4 border-caramel-500">
              <p className="font-serif italic text-base sm:text-lg text-espresso-900 leading-snug">
                &ldquo;We don&apos;t chase bitter strength. We chase clarity, floral sweetness, and the kind of quiet comfort that anchors your whole day.&rdquo;
              </p>
              <span className="block text-xs uppercase tracking-wider text-caramel-700 font-semibold mt-2">
                — Julian Vance, Co-Founder & Head Roaster
              </span>
            </div>

            <div className="pt-2">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 bg-espresso-950 text-cream-50 hover:bg-caramel-600 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm"
              >
                <span>Read Full Story & Farming Partners</span>
                <ArrowUpRight className="w-4 h-4 text-caramel-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
