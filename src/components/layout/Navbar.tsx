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
      if (window.scrollY > 30) {
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-cream-100/90 backdrop-blur-md shadow-soft border-b border-subtle py-3.5"
            : "bg-transparent py-5 sm:py-6"
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

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-cream-50/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-subtle">
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
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right hidden xl:block">
                <span className="block text-[10px] uppercase tracking-wider text-espresso-500">
                  Open Today
                </span>
                <span className="block text-xs font-semibold text-espresso-900">
                  07:00 — 18:00
                </span>
              </div>

              <Link
                href="/visit"
                className="inline-flex items-center gap-2 bg-espresso-900 text-cream-50 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-espresso-800 active:scale-95 transition-all shadow-sm hover:shadow-md group border border-espresso-700"
              >
                <span>Reserve / Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-caramel-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-espresso-900 hover:bg-cream-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel-400"
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
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso-950/40 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream-100 shadow-2xl p-6 flex flex-col justify-between border-l border-cream-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-subtle">
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
                  className="p-2 rounded-full text-espresso-800 hover:bg-cream-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col space-y-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-xl font-serif py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-cream-200 text-espresso-950 font-semibold"
                          : "text-espresso-800 hover:bg-cream-200/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-caramel-500" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-subtle space-y-4">
              <div className="space-y-2 text-xs text-espresso-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-caramel-600 shrink-0" />
                  <span>{CAFE_INFO.address.street}, {CAFE_INFO.address.district}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-caramel-600 shrink-0" />
                  <span>Mon–Fri 07:00–18:00 • Sat–Sun 08:00–19:00</span>
                </div>
              </div>

              <Link
                href="/visit"
                className="w-full flex items-center justify-center gap-2 bg-espresso-900 text-cream-50 py-3 rounded-xl text-sm font-semibold tracking-wider hover:bg-espresso-800 transition-colors shadow-sm"
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
