"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Filter,
  Check,
  Coffee,
  Info,
  Flame,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { MENU_ITEMS, MenuItem, CAFE_INFO } from "@/data/cafeData";
import { CAFE_IMAGES } from "@/data/images";

type CategoryFilter = "all" | "signature" | "espresso" | "filter" | "tea-tonics" | "pastries" | "brunch";
type DietaryFilter = "ALL" | "V" | "VG" | "GF" | "DF";

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Offerings", value: "all" },
  { label: "Signature Craft", value: "signature" },
  { label: "Espresso Bar", value: "espresso" },
  { label: "Filter & Pour Over", value: "filter" },
  { label: "Tea & Tonics", value: "tea-tonics" },
  { label: "Artisanal Bakes", value: "pastries" },
  { label: "Brunch Plates", value: "brunch" },
];

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeDietary, setActiveDietary] = useState<DietaryFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      // Dietary check
      if (activeDietary !== "ALL") {
        if (!item.dietary || !item.dietary.includes(activeDietary as any)) {
          return false;
        }
      }
      // Search check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesOrigin = item.origin?.toLowerCase().includes(q) || false;
        const matchesNotes = item.notes?.some((n) => n.toLowerCase().includes(q)) || false;
        return matchesName || matchesDesc || matchesOrigin || matchesNotes;
      }
      return true;
    });
  }, [activeCategory, activeDietary, searchQuery]);

  return (
    <div className="min-h-screen bg-cream-200 text-espresso-950 pb-28">
      {/* Editorial Menu Hero with High-Quality Photography */}
      <section className="relative pt-10 pb-16 sm:pb-24 border-b border-subtle bg-cream-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-caramel-700 font-semibold">
                <Sparkles className="w-4 h-4 text-caramel-600" />
                <span>Autumn / Winter Seasonal Extraction</span>
              </div>

              <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl text-espresso-950 font-normal leading-[1.05]">
                The Seasonal Menu
              </h1>

              <p className="text-base sm:text-lg text-espresso-750 font-light leading-relaxed max-w-xl">
                All coffee is roasted in-house in small 12-kilo batches on our
                Loring S15 Kestrel. Milk is sourced from local grass-fed Jersey
                farms, and all syrups are infused with natural whole botanicals.
              </p>

              {/* Daily Roaster Notice */}
              <div className="pt-2 flex items-center gap-3 text-xs text-espresso-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  <strong>Feature Pour Today:</strong> Panama Hacienda La Esmeralda Gesha ($9.00)
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-subtle group">
                <Image
                  src={CAFE_IMAGES.pageHeroes.menu.src}
                  alt={CAFE_IMAGES.pageHeroes.menu.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50 text-xs font-serif italic">
                  Morning extraction bar • 7:00 AM daily
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barista Daily Pairing Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 z-10 relative">
        <div className="bg-espresso-950 text-cream-50 rounded-2xl p-6 sm:p-8 shadow-card border border-espresso-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-caramel-500/20 text-caramel-400 flex items-center justify-center shrink-0 border border-caramel-500/30">
              <Coffee className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-caramel-400 font-bold block mb-1">
                Barista Morning Pairing
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-cream-50 font-medium">
                24-Hour Kyoto Slow Drip & Normandy Butter Croissant
              </h3>
              <p className="text-xs sm:text-sm text-cream-300 font-light mt-1">
                The bright candied-peach clarity of the cold drip perfectly balances the rich, 27-layer butter lamination.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="font-serif text-2xl font-bold text-caramel-400">
              $11.50
            </span>
            <Link
              href="/visit"
              className="bg-caramel-500 hover:bg-caramel-400 text-espresso-950 font-semibold px-5 py-2.5 rounded-full text-xs tracking-wider transition-colors"
            >
              Order at Bar
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <div className="sticky top-20 z-30 bg-cream-200/95 backdrop-blur-md border-b border-subtle mt-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Navigation Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.value
                      ? "bg-espresso-950 text-cream-50 shadow-sm"
                      : "bg-cream-100 hover:bg-cream-50 text-espresso-800 border border-subtle"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-64">
              <input
                type="text"
                placeholder="Search beans, notes, dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cream-50 border border-subtle focus:border-caramel-500 focus:outline-none rounded-full px-4 py-2 text-xs text-espresso-900 placeholder:text-espresso-400"
              />
            </div>
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-2 text-xs text-espresso-600 flex-wrap">
            <span className="font-semibold text-espresso-800 text-[11px] uppercase tracking-wider mr-1">
              Dietary Preference:
            </span>
            {(
              [
                { label: "All Items", val: "ALL" },
                { label: "Vegan (VG)", val: "VG" },
                { label: "Vegetarian (V)", val: "V" },
                { label: "Gluten-Free (GF)", val: "GF" },
                { label: "Dairy-Free (DF)", val: "DF" },
              ] as const
            ).map((item) => (
              <button
                key={item.val}
                onClick={() => setActiveDietary(item.val)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                  activeDietary === item.val
                    ? "bg-caramel-600 text-cream-50"
                    : "bg-cream-100 hover:bg-cream-50 text-espresso-700 border border-subtle"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-cream-50 rounded-2xl border border-subtle">
            <Coffee className="w-10 h-10 text-espresso-400 mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-espresso-950 font-medium">
              No menu items match your search
            </h3>
            <p className="text-xs text-espresso-600 mt-1 max-w-sm mx-auto">
              Try adjusting your dietary filter or search query to see our other offerings.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveDietary("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-espresso-900 text-cream-50 rounded-full text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="bg-cream-50 rounded-2xl overflow-hidden border border-subtle shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Optional Item Image */}
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-espresso-950/80 backdrop-blur-md text-caramel-300 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-espresso-800">
                        {item.badge}
                      </div>
                    )}
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl font-bold text-espresso-950 group-hover:text-caramel-600 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-espresso-900 shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-espresso-700 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-subtle">
                    {item.origin && (
                      <div className="text-[11px] text-caramel-700 font-serif italic">
                        <strong>Origin Terroir:</strong> {item.origin}
                      </div>
                    )}

                    {item.notes && item.notes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.notes.map((note) => (
                          <span
                            key={note}
                            className="px-2 py-0.5 rounded-full text-[10px] bg-cream-200 text-espresso-700"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Dietary Tags */}
                    {item.dietary && (
                      <div className="flex items-center gap-1.5 pt-1">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cream-100 border border-subtle text-espresso-600"
                            title={
                              d === "VG"
                                ? "Vegan"
                                : d === "V"
                                ? "Vegetarian"
                                : d === "GF"
                                ? "Gluten-Free"
                                : "Dairy-Free"
                            }
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sourcing & Water Chemistry Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-subtle">
          <div className="max-w-2xl mb-8">
            <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold block mb-2">
              The Standards Behind Every Extraction
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl text-espresso-950 font-normal">
              Water, Milk & Bean Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-semibold text-espresso-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-caramel-600" />
                <span>120 PPM Remineralized Water</span>
              </h4>
              <p className="text-xs text-espresso-700 font-light leading-relaxed">
                Reverse-osmosis water dialed to custom magnesium and calcium
                ion ratios optimal for extracting delicate floral esters without bitterness.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg font-semibold text-espresso-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-caramel-600" />
                <span>Whole Organic Botanicals</span>
              </h4>
              <p className="text-xs text-espresso-700 font-light leading-relaxed">
                Our bourbon vanilla, green cardamom, and orange blossom infusions
                are prepared weekly in our kitchen from unrefined whole ingredients.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg font-semibold text-espresso-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-caramel-600" />
                <span>Hourly Fresh Lamination</span>
              </h4>
              <p className="text-xs text-espresso-700 font-light leading-relaxed">
                Our croissants and brioches are rolled with Normandy AOP butter
                and slow fermented for 72 hours, resulting in 27 crisp, airy layers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
