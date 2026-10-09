"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X, ArrowUpRight } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Announcement" className="relative bg-espresso-950 text-cream-100 text-xs tracking-wider border-b border-espresso-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex-1 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-center text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-caramel-500/20 text-caramel-400 font-medium shrink-0">
            <Sparkles className="w-3 h-3 text-caramel-400 animate-pulse" />
            <span>Seasonal Batch</span>
          </span>
          <span className="text-cream-200 hidden sm:inline">
            {CAFE_INFO.announcement}
          </span>
          <span className="text-cream-200 sm:hidden">
            Fresh Guji Reserve • Open 7 AM
          </span>
          <Link
            href="/menu"
            className="inline-flex items-center gap-0.5 text-caramel-400 hover:text-caramel-300 font-medium underline underline-offset-4 transition-colors ml-1 shrink-0 min-h-[32px]"
          >
            <span>View Notes</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-cream-400 hover:text-cream-100 min-w-[36px] min-h-[36px] flex items-center justify-center p-1 rounded-md transition-colors shrink-0 -mr-1"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
