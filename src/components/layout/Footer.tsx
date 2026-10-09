"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Heart, Mail, MapPin, Phone } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-espresso-850 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-espresso-800">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl font-bold tracking-tight text-cream-50 group-hover:text-caramel-400 transition-colors">
                AURA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-caramel-500 font-medium mt-0.5">
                Specialty Coffee Atelier
              </span>
            </Link>

            <p className="text-sm text-cream-300 leading-relaxed max-w-sm font-light">
              {CAFE_INFO.mission}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider text-caramel-400 font-semibold mb-2">
                The Roaster&apos;s Gazette
              </span>
              <p className="text-xs text-cream-400 mb-3">
                First access to seasonal microlot drops, cupping invitations, and pastry specials.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-espresso-900 border border-caramel-600/40 rounded-xl text-xs text-caramel-300">
                  <Check className="w-4 h-4 text-caramel-400 shrink-0" />
                  <span>Welcome to the community. We have reserved your welcome notes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-espresso-900 border border-espresso-750 focus:border-caramel-500 focus:outline-none text-cream-100 text-xs px-3.5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg w-full placeholder:text-espresso-400 transition-colors min-h-[44px]"
                      aria-label="Email for coffee newsletter"
                    />
                    <button
                      type="submit"
                      className="bg-caramel-500 hover:bg-caramel-400 text-espresso-950 font-semibold text-xs px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg transition-colors shrink-0 min-h-[44px] flex items-center justify-center"
                    >
                      Join
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-red-400">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-caramel-400 block">
              Exploration
            </span>
            <ul className="space-y-2 text-xs text-cream-300">
              <li>
                <Link href="/" className="inline-block py-1 hover:text-caramel-300 transition-colors min-h-[32px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="inline-block py-1 hover:text-caramel-300 transition-colors min-h-[32px]">
                  Seasonal Menu
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="inline-block py-1 hover:text-caramel-300 transition-colors min-h-[32px]">
                  Our Story & Terroir
                </Link>
              </li>
              <li>
                <Link href="/visit" className="inline-block py-1 hover:text-caramel-300 transition-colors min-h-[32px]">
                  Visit & Hours
                </Link>
              </li>
              <li>
                <Link href="/visit#reservations" className="inline-block py-1 hover:text-caramel-300 transition-colors min-h-[32px]">
                  Table Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-caramel-400 block">
              Hours of Service
            </span>
            <div className="space-y-3 text-xs">
              {CAFE_INFO.hours.map((item, idx) => (
                <div key={idx} className="border-b border-espresso-850 pb-2">
                  <div className="flex justify-between text-cream-200">
                    <span>{item.days}</span>
                    <span className="font-medium text-cream-50">{item.time}</span>
                  </div>
                  <span className="text-[11px] text-espresso-400 block mt-0.5">
                    {item.notes}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Atelier Location & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-caramel-400 block">
              The Roastery
            </span>
            <div className="space-y-3 text-xs text-cream-300">
              <div>
                <p className="text-cream-100 font-medium">{CAFE_INFO.address.street}</p>
                <p className="text-cream-400">
                  {CAFE_INFO.address.district}, {CAFE_INFO.address.city}, {CAFE_INFO.address.state} {CAFE_INFO.address.zip}
                </p>
                <a
                  href={CAFE_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-caramel-400 hover:text-caramel-300 mt-1 font-medium py-1 min-h-[32px]"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-1 space-y-1">
                <a
                  href={`tel:${CAFE_INFO.contact.phone}`}
                  className="inline-block py-1 text-cream-300 hover:text-caramel-400 transition-colors min-h-[32px]"
                >
                  {CAFE_INFO.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${CAFE_INFO.contact.email}`}
                  className="inline-block py-1 text-cream-400 hover:text-caramel-400 transition-colors min-h-[32px]"
                >
                  {CAFE_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-espresso-400 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {CAFE_INFO.fullName}. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {CAFE_INFO.socials.map((soc) => (
              <a
                key={soc.label}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-caramel-400 transition-colors text-xs font-medium py-1 min-h-[32px] inline-flex items-center"
              >
                {soc.label}
              </a>
            ))}
            <span className="text-espresso-700 hidden sm:inline">|</span>
            <span className="text-[11px] text-espresso-400 basis-full sm:basis-auto text-center">
              Roasted locally with 100% clean convection energy.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
