"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  Navigation,
  CheckCircle,
} from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";
import { CAFE_IMAGES } from "@/data/images";

export default function VisitPreviewSection() {
  return (
    <section className="py-24 sm:py-32 bg-cream-50 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hours & Visit Logistics */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-caramel-600" />
                <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold">
                  Atelier & Tasting Room
                </span>
              </div>

              <h2 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl text-espresso-950 font-normal">
                Visit Us in Portland
              </h2>

              <p className="mt-3 text-sm sm:text-base text-espresso-700 font-light leading-relaxed">
                Step inside our historic timber warehouse. Enjoy an espresso at the
                sunlit bar or find a quiet table for slow morning contemplation.
              </p>
            </div>

            {/* Address & Direction Card */}
            <div className="p-6 rounded-2xl bg-cream-100 border border-subtle space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-caramel-500/20 text-caramel-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-espresso-950">
                    Location & Transit
                  </h3>
                  <p className="text-sm text-espresso-800">
                    {CAFE_INFO.address.street}, {CAFE_INFO.address.district}
                  </p>
                  <p className="text-xs text-espresso-600">
                    {CAFE_INFO.address.city}, {CAFE_INFO.address.state} {CAFE_INFO.address.zip} • 2 min walk from Streetcar NW 10th
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CAFE_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-espresso-900 text-cream-50 hover:bg-caramel-600 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-caramel-400" />
                </a>

                <Link
                  href="/visit"
                  className="inline-flex items-center gap-2 bg-cream-50 hover:bg-cream-200 text-espresso-900 border border-subtle px-5 py-2.5 rounded-full text-xs font-medium transition-colors"
                >
                  <span>Directions & Parking Guide</span>
                </Link>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-espresso-600 font-semibold mb-2">
                <Clock className="w-3.5 h-3.5 text-caramel-600" />
                <span>Service Schedule</span>
              </div>

              {CAFE_INFO.hours.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-subtle/80 text-xs sm:text-sm"
                >
                  <span className="font-medium text-espresso-950">{h.days}</span>
                  <div className="text-right">
                    <span className="font-mono font-semibold text-espresso-900 block">
                      {h.time}
                    </span>
                    <span className="text-[11px] text-espresso-500 block">
                      {h.notes}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Pills */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <a
                href={`tel:${CAFE_INFO.contact.phone}`}
                className="inline-flex items-center gap-2 text-espresso-800 hover:text-caramel-600 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-caramel-600" />
                <span>{CAFE_INFO.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${CAFE_INFO.contact.email}`}
                className="inline-flex items-center gap-2 text-espresso-800 hover:text-caramel-600 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-caramel-600" />
                <span>{CAFE_INFO.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map & Atmosphere Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/12] rounded-3xl overflow-hidden shadow-2xl border border-subtle bg-espresso-900 group">
              {/* Stylized Map Backdrop Graphic */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('${CAFE_IMAGES.gallery.morningLight.src}')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/40 to-transparent" />

              {/* Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-caramel-500 flex items-center justify-center shadow-glow animate-pulse">
                    <MapPin className="w-6 h-6 text-espresso-950" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border-2 border-caramel-400/50 animate-ping" />
                </div>
                <div className="mt-3 px-4 py-1.5 rounded-full bg-espresso-950/90 backdrop-blur-md border border-caramel-500/50 text-cream-50 text-xs font-serif font-bold tracking-wide shadow-lg">
                  AURA Roastery Bar
                </div>
              </div>

              {/* Atmosphere Badges at bottom */}
              <div className="absolute bottom-6 inset-x-6 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 rounded-full bg-espresso-950/80 backdrop-blur-md text-[11px] text-cream-200 border border-espresso-800 flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Dog Friendly Patio</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-espresso-950/80 backdrop-blur-md text-[11px] text-cream-200 border border-espresso-800 flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Bike Racks Available</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-espresso-950/80 backdrop-blur-md text-[11px] text-cream-200 border border-espresso-800 flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Step-Free Accessible</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
