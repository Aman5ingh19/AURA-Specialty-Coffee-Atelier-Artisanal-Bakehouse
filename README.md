# ☕ AURA — Specialty Coffee Atelier & Artisanal Bakehouse

> A premium, award-worthy cafe business website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP & ScrollTrigger**, and **Lucide React**.

A boutique specialty coffee roastery and artisanal bakehouse experience in Portland, Oregon, crafted with editorial visual storytelling, refined typography, and luxury hospitality.

---

## ✨ Creative Direction & Design System

### 🎨 Curated Color Palette
- **Espresso Dark Roast**: `#120E0C` & `#211B17` (Deep roasted bean background & accents)
- **Warm Milk Cream**: `#F5F0E8` & `#FAF6EF` (Primary comfortable, warm canvas)
- **Artisanal Caramel**: `#B78B62` & `#9E724A` (Signature golden highlight & interactive focus)
- **Muted Olive**: `#6D7359` & `#82896C` (Regenerative botanical coffee plant tone)
- **Alabaster Soft White**: `#FFFCF7` (Surface card elevation & high contrast readability)

### 🔤 Typography Pairing
- **Editorial Headlines**: [`Cormorant Garamond`](https://fonts.google.com/specimen/Cormorant+Garamond) (Google Fonts) — Expressive serif weights, italics, and ligatures providing high-end editorial prestige.
- **Body & Navigation**: [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts) — Crisp, legible geometric sans-serif for UI elements, pricing, and sensory tasting tags.

---

## 🏛️ Website Architecture & Key Pages

### 1. Homepage (`/`)
1. **Announcement Bar**: Dismissible notification banner highlighting seasonal micro-lot drops with quick link to tasting notes.
2. **Glassmorphism Navigation Bar**: Logo wordmark, transparent hero state transitioning to a blurred cream backdrop on scroll, live opening status, and an accessible mobile drawer.
3. **Cinematic Hero Stage**:
   - Headline: *"Good coffee. Slow mornings. Better moments."*
   - Staggered GSAP entrance for headings, subtext, and CTAs.
   - Parallax image reveal with an authentic coffee bar composition and floating badge (*"Laminated pastries baked hourly"*).
   - Quick craft counters: *100% Direct Trade*, *72h Wild Ferment*, *9.2 Bar Precision*.
4. **Editorial Brand Marquee**: Continuous infinite ticker highlighting core craft principles.
5. **Brand Philosophy & Craft Pillars**: Staggered scroll reveals for *Direct Regenerative Terroir*, *Loring Single-Convection Roasting*, and *72-Hour Wild Sourdough Lamination*.
6. **Signature Experience Interactive Showcase**: Interactive progressive storytelling for 3 proprietary creations (*Smoked Bourbon Vanilla Flat White*, *24-Hour Kyoto Slow Drip Reserve*, *Cardamom Orange Blossom Shakerato*) with extraction technique and sensory flavor pills.
7. **Featured Menu Highlights**: Interactive category switcher with **photographic dish thumbnails**, pricing, and dietary indicators.
8. **Full-Bleed Panoramic Parallax Breaker**: *"The Sanctuary at Dawn"* — a cinematic visual pause with smooth parallax scrolling.
9. **Our Story Preview**: Layered photography with roaster quotes and craft philosophy.
10. **Space, Light & Atmosphere Gallery**: Asymmetric 6-photo editorial grid capturing interior natural lighting, custom Slayer espresso machine, and seating corners.
11. **Guest Impressions & Press Excerpts**: Curated feedback from culinary publications (*Pacific Northwest Gastronomy*, *Specialty Terroir Guild*) and regular neighbors.
12. **Visit Us & Operating Hours**: Verified Pearl District address, transit directions (Streetcar NS Line, bike corrals, parking), weekly service schedule, and Google Maps launcher.
13. **Final Atmospheric CTA**: High-impact dark roast visual section with reservation trigger.
14. **Footer**: Brand manifesto, newsletter subscription with input validation, weekly hours, location details, clickable phone/email, and social links.

---

### 2. The Menu Page (`/menu`)
- **Split Hero Stage**: Header copy paired with a high-resolution morning pour-over photograph.
- **Category Filter Tabs**: *All Offerings*, *Signature Craft*, *Espresso Bar*, *Filter & Pour Over*, *Tea & Tonics*, *Artisanal Bakes*, *Brunch Plates*.
- **Dietary Filter Buttons**: Instant toggles for *Vegan (VG)*, *Vegetarian (V)*, *Gluten-Free (GF)*, and *Dairy-Free (DF)*.
- **Live Search**: Instant keyword search across beans, dishes, and flavor notes.
- **Every Item with Photography**: All 24 offerings display an authentic, high-resolution photograph with hover zoom.
- **Barista Morning Pairing Spotlight**: Highlights the Kyoto slow-drip and butter croissant pairing.
- **Water Chemistry & Quality Standards**: Educational section explaining 120 PPM remineralized water, whole organic botanicals, and hourly lamination.

---

### 3. Our Story Page (`/our-story`)
- **Visual Hero Banner**: Historic timber roastery and convection roasting drum.
- **Chapter I • Direct Sourcing**: Paying 2.8x fair trade baselines directly to estate farmers.
- **Partner Farms Terroir Matrix**: Detailed origin data for Colombia (*Huila Finca El Paraiso*), Ethiopia (*Yirgacheffe Idido*), and Panama (*Boquete Hacienda La Esmeralda*).
- **Chapter II • Convection Roasting**: The thermodynamics of the Loring S15 Kestrel (80% emissions reduction, zero smoky scorch).
- **Meet the Artisans**: Biographies and portraits for Head Roaster Julian Vance & Pastry Chef Claire Moreau.

---

### 4. Visit & Reservations Page (`/visit`)
- **Storefront Hero Banner**: Welcoming Pearl District exterior and patio seating.
- **Visitor Logistics**: Address, walking directions from streetcar stations, bike parking, and garage parking.
- **Interactive Reservation & Tasting Inquiry Form**:
  - Full client-side validation for name, email, phone, date, time slot, party size (1 to 7+), and inquiry type (*Table*, *Private Cupping*, *Group Brunch*).
  - Honest confirmation voucher screen with reference ID (`AUR-XXXX`) and clear expectations.
- **Interactive FAQ Accordion**: Expandable questions addressing walk-in policies, Wi-Fi / laptop hours, pet-friendly courtyard, bean purchases, and parking.

---

## 📸 Centralized Image Management

All photographs are centralized in [`src/data/images.ts`](./src/data/images.ts). Every image has been verified with HTTP 200 status.

### How to Replace Images with Client Photography:
Open [`src/data/images.ts`](./src/data/images.ts) and replace any URL with your local files or CDN links:

```ts
// 1. Local Image (drop file in public/images/):
hero: {
  primary: {
    src: "/images/client-bar.jpg",
    alt: "Our Espresso Bar at Sunrise",
  },
}

// 2. Remote CDN Image:
hero: {
  primary: {
    src: "https://your-domain.com/photo.jpg",
    alt: "Our Espresso Bar at Sunrise",
  },
}
```
*Note: If using new external domains, add their hostnames to `images.remotePatterns` in `next.config.ts`.*

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom theme tokens & CSS variables
- **Animations**: GSAP 3 & ScrollTrigger (with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React
- **Images**: Next.js `Image` component with automatic optimization
- **Bundler**: Turbopack

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📈 SEO, Performance & Accessibility

- **Semantic HTML5**: `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<nav>`, and `<article>`.
- **OpenGraph & Twitter Cards**: High-resolution social share previews configured in `src/app/layout.tsx`.
- **Heading Hierarchy**: Exactly one `<h1>` per page with semantic `<h2>`, `<h3>` hierarchy.
- **Accessibility**: Keyboard navigable, visible focus rings, ARIA labels, and motion sensitivity toggles.
- **Fast First Paint**: Preloaded Google Fonts and optimized image aspect ratios.

---

## 📄 License
Created for **AURA Specialty Coffee Atelier**. All rights reserved.
