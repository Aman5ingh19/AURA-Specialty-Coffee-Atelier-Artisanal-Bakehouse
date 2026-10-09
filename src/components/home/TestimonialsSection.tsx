"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/cafeData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-200 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold block mb-2">
            Editorial Reviews & Guest Impressions
          </span>
          <h2 className="font-editorial-heading text-3xl sm:text-5xl text-espresso-950 font-normal">
            Kind Words From Our Tables
          </h2>
          <span className="inline-block mt-2 text-[11px] text-espresso-500 uppercase tracking-widest font-mono">
            Sample client reviews & verified press excerpts
          </span>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream-50 p-8 rounded-2xl border border-subtle shadow-soft flex flex-col justify-between relative group hover:border-caramel-500/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-caramel-400/40 mb-4" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-caramel-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-caramel-500" />
                ))}
              </div>

              {/* Quote Content */}
              <blockquote className="font-serif italic text-base sm:text-lg text-espresso-900 leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author & Source */}
              <div className="pt-4 border-t border-subtle flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-xs sm:text-sm text-espresso-950">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-espresso-600">
                    {item.role}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-olive-600 font-mono bg-olive-500/10 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-olive-600" />
                  <span>{item.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
