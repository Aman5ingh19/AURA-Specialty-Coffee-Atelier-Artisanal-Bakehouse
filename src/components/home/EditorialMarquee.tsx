"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  "SINGLE-ORIGIN MICRO LOTS",
  "72-HOUR WILD SOURDOUGH",
  "SLOW MORNINGS",
  "LORING CLEAN AIR ROAST",
  "120 PPM REMINERALIZED WATER",
  "NORMANDY CULTURED BUTTER",
  "DIRECT TRADE REGENERATIVE TERROIR",
  "9.2 BAR SATURATED EXTRACTION",
];

export default function EditorialMarquee() {
  return (
    <div className="w-full bg-espresso-950 text-cream-100 py-4 sm:py-5 border-y border-espresso-850 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {/* Render twice for continuous infinite loop */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center mx-6 sm:mx-8">
                <span className="font-editorial-subheading text-[11px] sm:text-xs tracking-[0.28em] text-cream-200 uppercase font-semibold">
                  {item}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-caramel-500 ml-6 sm:ml-8" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
