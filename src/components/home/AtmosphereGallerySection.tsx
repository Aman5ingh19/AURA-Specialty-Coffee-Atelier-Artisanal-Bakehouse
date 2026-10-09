"use client";

import React from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/cafeData";
import { Camera, Eye } from "lucide-react";

export default function AtmosphereGallerySection() {
  return (
    <section className="py-24 sm:py-32 bg-cream-100 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Camera className="w-4 h-4 text-caramel-600" />
            <span className="font-editorial-subheading text-caramel-600 tracking-[0.25em] text-xs font-semibold">
              The Physical Sanctuary
            </span>
          </div>

          <h2 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl text-espresso-950 font-normal">
            Space, Light & Atmosphere
          </h2>

          <p className="mt-4 text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
            Designed with natural white oak, restored brick, lime-wash plaster,
            and acoustic dampening for deep conversation and quiet focus.
          </p>
        </div>

        {/* Editorial Asymmetric Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, idx) => {
            const isSpan = idx === 0 || idx === 4;

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden shadow-card border border-subtle group ${
                  isSpan ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Caption and category pill */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-cream-50 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-caramel-400 font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-xl font-medium text-cream-50">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-cream-50/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-4 h-4 text-cream-50" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Atmosphere Quote */}
        <div className="mt-12 text-center text-xs sm:text-sm text-espresso-600 font-serif italic">
          &ldquo;Natural morning sun hits our espresso bar between 7:30 AM and 11:00 AM daily.&rdquo;
        </div>
      </div>
    </section>
  );
}
