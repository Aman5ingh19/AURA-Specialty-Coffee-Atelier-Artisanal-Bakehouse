"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Flame,
  Leaf,
  Sparkles,
  Heart,
  ArrowUpRight,
  Globe2,
  Clock,
  CheckCircle,
} from "lucide-react";
import { CAFE_IMAGES } from "@/data/images";

const ORIGIN_FARMS = [
  {
    country: "Colombia",
    region: "Huila • Finca El Paraiso",
    elevation: "1,950m",
    varietal: "Pink Bourbon",
    process: "Double Anaerobic Fermentation",
    notes: "Wild honey, bourbon vanilla, mandarin zest",
  },
  {
    country: "Ethiopia",
    region: "Yirgacheffe • Idido Washing Station",
    elevation: "2,150m",
    varietal: "Heirloom Kurume & Dega",
    process: "Washed / Raised African Drying Beds",
    notes: "Jasmine flower, bergamot, candied peach",
  },
  {
    country: "Panama",
    region: "Boquete • Hacienda La Esmeralda",
    elevation: "1,800m",
    varietal: "Green Tip Gesha",
    process: "Slow Patio Sun-Drying",
    notes: "Honeysuckle, Meyer lemon, apricot blossom",
  },
];

const CRAFTSPEOPLE = [
  {
    name: "Julian Vance",
    role: "Head Roaster & Co-Founder",
    bio: "Q-Grader certified with 14 years across Scandinavian and Pacific Northwest roasting ateliers. Julian spends 3 months every year in Huila and Yirgacheffe cupping lots at origin.",
    badge: "14 Yrs Experience",
  },
  {
    name: "Claire Moreau",
    role: "Head of Viennoiserie & Bakes",
    bio: "Trained in Lyon and Paris before bringing classical 72-hour wild levain lamination methods to Portland. She oversees our 4:00 AM daily bakehouse drop.",
    badge: "Lyon & Paris Trained",
  },
];

export default function StoryPageClient() {
  return (
    <div className="min-h-screen bg-cream-200 text-espresso-950 pb-28">
      {/* Editorial Story Hero with Roastery Photography */}
      <section className="relative pt-10 pb-16 sm:pb-24 bg-cream-100 border-b border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-caramel-700 font-semibold">
                <Compass className="w-4 h-4 text-caramel-600" />
                <span>Genesis & Terroir</span>
              </div>

              <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl text-espresso-950 font-normal leading-[1.05]">
                Coffee as an agricultural craft.
                <span className="block italic text-caramel-600 font-serif">
                  Not a commodity.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-espresso-750 font-light leading-relaxed max-w-xl">
                We started AURA in 2021 inside a quiet, sun-drenched timber warehouse
                in Portland&apos;s Pearl District. Our dream was unapologetically slow:
                uncompromising roast profiles, honest partnerships with farmers, and
                the timeless hospitality of a Parisian neighborhood cafe.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-subtle group">
                <Image
                  src={CAFE_IMAGES.pageHeroes.story.src}
                  alt={CAFE_IMAGES.pageHeroes.story.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50 text-xs font-serif italic">
                  Portland Roastery & Tasting Room • Est. 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Terroir Story */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-caramel-600" />
              <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold">
                Chapter I • Direct Sourcing
              </span>
            </div>

            <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal leading-tight">
              Honoring the soil before we ever spark the roaster.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-espresso-750 font-light leading-relaxed">
              <p>
                Commercial coffee models commoditize green beans into indistinguishable blends.
                We operate on the exact opposite principle: 100% direct trade micro-lots.
              </p>
              <p>
                By guaranteeing purchase volumes directly with estate managers and paying an
                average of <strong>2.8x Fair Trade minimums</strong>, we support long-term soil regeneration,
                organic composting, and shade-canopy biodiversity across three continents.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cream-100 border border-subtle">
              <span className="text-xs font-serif font-bold text-espresso-950 block mb-1">
                Our Guaranteed Pricing Baseline:
              </span>
              <p className="text-xs text-espresso-600">
                Minimum $4.85 / lb paid FOB directly to farm gates, fostering multi-generational agricultural succession.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-card border border-subtle group">
              <Image
                src={CAFE_IMAGES.craftPillars.terroir.src}
                alt={CAFE_IMAGES.craftPillars.terroir.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Farms Terroir Matrix */}
      <section className="bg-cream-100 py-16 border-y border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold block mb-2">
              Estate Provenance
            </span>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl text-espresso-950 font-normal">
              Current Partner Micro-Lots
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ORIGIN_FARMS.map((farm, idx) => (
              <div
                key={idx}
                className="bg-cream-50 p-6 rounded-2xl border border-subtle shadow-soft space-y-4"
              >
                <div className="flex items-center justify-between border-b border-subtle pb-3">
                  <span className="font-serif text-lg font-bold text-espresso-950">
                    {farm.country}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cream-200 text-espresso-800">
                    {farm.elevation}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-espresso-750">
                  <p>
                    <strong>Terroir:</strong> {farm.region}
                  </p>
                  <p>
                    <strong>Varietal:</strong> {farm.varietal}
                  </p>
                  <p>
                    <strong>Method:</strong> {farm.process}
                  </p>
                </div>

                <div className="pt-2 border-t border-subtle text-[11px] text-caramel-700 italic font-serif">
                  Tasting profile: {farm.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 2: The Roasting Science & Convection */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-card border border-subtle group">
              <Image
                src={CAFE_IMAGES.craftPillars.convectionRoast.src}
                alt={CAFE_IMAGES.craftPillars.convectionRoast.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-caramel-600" />
              <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold">
                Chapter II • Roasting Philosophy
              </span>
            </div>

            <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal leading-tight">
              Single-Burner Convection. Zero smoky taint.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-espresso-750 font-light leading-relaxed">
              <p>
                Traditional cast-iron drum roasters scorch the bean surface through contact heat,
                leaving a bitter carbon footprint. We roast exclusively on a Loring S15 Kestrel.
              </p>
              <p>
                Using a closed-loop superheated air circulation system, our beans float gently in
                a cushion of pure hot air. This develops deep core caramelization while preserving
                the delicate floral esters, jasmine fragrances, and crisp malic fruit acidity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-cream-50 border border-subtle">
                <span className="font-serif text-2xl font-bold text-espresso-950 block">80%</span>
                <span className="text-xs text-espresso-600">Reduction in Roasting Emissions</span>
              </div>
              <div className="p-4 rounded-xl bg-cream-50 border border-subtle">
                <span className="font-serif text-2xl font-bold text-espresso-950 block">100%</span>
                <span className="text-xs text-espresso-600">Clean Air Extraction Purity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftspeople of the Atelier */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold block mb-2">
            The Artisans
          </span>
          <h3 className="font-editorial-heading text-3xl sm:text-4xl text-espresso-950 font-normal">
            Meet the Craftspeople
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CRAFTSPEOPLE.map((person, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-2xl overflow-hidden border border-subtle shadow-soft p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-espresso-900 text-cream-100 flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-sm border border-espresso-750">
                {person.name.split(" ").map((n) => n[0]).join("")}
              </div>

              <div className="space-y-2 text-left flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-serif text-2xl font-bold text-espresso-950">
                    {person.name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-cream-200 text-caramel-800 font-semibold rounded-full border border-caramel-300/40">
                    {person.badge}
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-caramel-600 block">
                  {person.role}
                </span>
                <p className="text-xs sm:text-sm text-espresso-750 font-light leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to visit */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="p-10 rounded-3xl bg-espresso-950 text-cream-50 border border-espresso-800 space-y-6">
          <h3 className="font-editorial-heading text-3xl sm:text-4xl font-normal text-cream-50">
            Taste our story at the bar.
          </h3>
          <p className="text-xs sm:text-sm text-cream-300 font-light max-w-md mx-auto">
            Our baristas are always delighted to talk through current cupping notes
            and share a slow pour-over.
          </p>
          <div className="pt-2">
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 bg-caramel-500 hover:bg-caramel-400 text-espresso-950 font-semibold px-7 py-3 rounded-full text-xs tracking-wider transition-colors shadow-sm"
            >
              <span>Visit Us in the Pearl District</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
