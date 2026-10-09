"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/cafeData";

type CategoryFilter = "all" | "signature" | "espresso" | "filter" | "pastries" | "brunch";

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: "All Selections", value: "all" },
  { label: "Signature Drinks", value: "signature" },
  { label: "Espresso Bar", value: "espresso" },
  { label: "Hand Pour & Filter", value: "filter" },
  { label: "Bakehouse Pastries", value: "pastries" },
  { label: "Kitchen Plates", value: "brunch" },
];

export default function FeaturedMenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredItems = (
    activeCategory === "all"
      ? MENU_ITEMS.slice(0, 8)
      : MENU_ITEMS.filter((item) => item.category === activeCategory)
  ).slice(0, 8);

  return (
    <section className="py-20 sm:py-28 bg-cream-200 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-caramel-600" />
              <span className="font-editorial-subheading text-espresso-700 tracking-[0.2em] text-xs">
                Crafted Daily
              </span>
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl text-espresso-950 font-normal">
              Featured Menu Highlights
            </h2>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-espresso-900 hover:text-caramel-600 transition-colors uppercase tracking-wider group"
          >
            <span>View Full 24-Item Menu</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Category Pills Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.value
                  ? "bg-espresso-900 text-cream-50 shadow-sm"
                  : "bg-cream-100 hover:bg-cream-50 text-espresso-750 border border-subtle"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Menu List Grid with High-Quality Dish Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-subtle shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4 sm:gap-5 group"
            >
              {/* Item Photo Thumbnail */}
              {item.image && (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 shadow-sm bg-cream-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              )}

              {/* Item Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2 truncate">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-950 group-hover:text-caramel-600 transition-colors truncate">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="text-[9px] uppercase font-semibold px-2 py-0.5 rounded-full bg-caramel-500/15 text-caramel-700 border border-caramel-500/30 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="font-serif text-base font-bold text-espresso-900 shrink-0">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs text-espresso-700 font-light leading-relaxed line-clamp-2 mb-2">
                  {item.description}
                </p>

                {/* Origin / Notes & Dietary Badges */}
                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px]">
                  {item.origin ? (
                    <span className="text-caramel-700 italic font-serif text-[11px] truncate max-w-[200px]">
                      {item.origin}
                    </span>
                  ) : item.notes ? (
                    <span className="text-espresso-500 text-[11px] truncate max-w-[200px]">
                      {item.notes.slice(0, 2).join(" • ")}
                    </span>
                  ) : (
                    <span />
                  )}

                  {item.dietary && (
                    <div className="flex items-center gap-1">
                      {item.dietary.map((d) => (
                        <span
                          key={d}
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cream-100 border border-subtle text-espresso-600"
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

        {/* Menu Footer Card */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-100 border border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-caramel-500/20 text-caramel-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-espresso-950">
                Dietary & Allergen Inquiries?
              </h4>
              <p className="text-xs text-espresso-600 font-light">
                We offer oat milk, almond milk, and multiple naturally gluten-free pastries daily.
              </p>
            </div>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-espresso-950 text-cream-50 hover:bg-espresso-850 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors shrink-0"
          >
            <span>Explore Complete Menu</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-caramel-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
