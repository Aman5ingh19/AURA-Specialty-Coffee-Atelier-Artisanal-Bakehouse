"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Compass, Clock, MapPin } from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "The Menu", href: "/menu" },
  { name: "Our Story", href: "/our-story" },
  { name: "Visit & Hours", href: "/visit" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-100/95 backdrop-blur-md shadow-soft border-b border-subtle py-3 sm:py-3.5"
            : "bg-cream-200/90 backdrop-blur-sm border-b border-subtle/40 py-3.5 sm:py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Wordmark */}
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none"
              aria-label="AURA Home"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 group-hover:text-caramel-600 transition-colors">
                  AURA
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-caramel-500 inline-block mb-1" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-espresso-500 -mt-1 group-hover:text-espresso-800 transition-colors">
                Specialty Atelier
              </span>
            </Link>

            {/* Desktop Navigation Links (Visible on Large Screens lg+) */}
            <nav className="hidden lg:flex items-center space-x-1.5 bg-cream-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-subtle">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                      isActive
                        ? "text-espresso-950 font-semibold bg-cream-300/60 shadow-xs"
                        : "text-espresso-700 hover:text-espresso-950 hover:bg-cream-200/50"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-caramel-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-right hidden xl:block">
                <span className="block text-[10px] uppercase tracking-wider text-espresso-500">
                  Open Today
                </span>
                <span className="block text-xs font-semibold text-espresso-900">
                  07:00 — 18:00
                </span>
              </div>

              {/* Quick Visit Link on Tablet & Desktop */}
              <Link
                href="/visit"
                className="hidden sm:inline-flex items-center gap-2 bg-espresso-900 text-cream-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-espresso-800 active:scale-95 transition-all shadow-sm hover:shadow-md group border border-espresso-700 shrink-0"
              >
                <span>Reserve / Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-caramel-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Mobile Hamburger Button (Visible on mobile & tablet < lg) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-espresso-900 hover:bg-cream-300/60 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-caramel-400"
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-espresso-950" />
                ) : (
                  <Menu className="w-6 h-6 text-espresso-950" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso-950/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation menu"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream-100 shadow-2xl p-5 sm:p-6 flex flex-col justify-between border-l border-cream-300 overflow-y-auto max-h-[100dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-subtle">
                <div>
                  <span className="font-serif text-2xl font-bold text-espresso-950">
                    AURA
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-espresso-500">
                    Portland, Oregon
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-espresso-800 hover:bg-cream-200 active:scale-95 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 sm:mt-8 flex flex-col space-y-2 sm:space-y-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg sm:text-xl font-serif py-3 px-4 rounded-xl transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? "bg-cream-200 text-espresso-950 font-semibold shadow-xs"
                          : "text-espresso-800 hover:bg-cream-200/60 active:bg-cream-300"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-caramel-500" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-subtle space-y-4 mt-6">
              <div className="space-y-2 text-xs text-espresso-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-caramel-600 shrink-0 mt-0.5" />
                  <span>{CAFE_INFO.address.street}, {CAFE_INFO.address.district}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-caramel-600 shrink-0 mt-0.5" />
                  <span>Mon–Fri 07:00–18:00 • Sat–Sun 08:00–19:00</span>
                </div>
              </div>

              <Link
                href="/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-espresso-900 text-cream-50 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider hover:bg-espresso-800 active:scale-95 transition-all shadow-sm min-h-[44px]"
              >
                <span>Find a Table / Visit</span>
                <ArrowUpRight className="w-4 h-4 text-caramel-400" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
