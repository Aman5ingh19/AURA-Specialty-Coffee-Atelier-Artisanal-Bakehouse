/**
 * CENTRALIZED CAFE ASSET DICTIONARY
 *
 * Replace any URL below with your own client photographs.
 * - Local paths: "/images/hero-bar.jpg"  (put files in public/)
 * - Remote CDN : "https://your-cdn.com/photo.jpg"
 *
 * Every key maps to a UNIQUE photo – no duplicates.
 */

export interface CafeImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export const CAFE_IMAGES = {
  // 0. Logo
  logo: {
    src: "/logo.png",
    alt: "AURA Specialty Coffee Atelier wordmark logo",
    width: 200,
    height: 200,
  },

  // 1. Hero & Branding Section
  hero: {
    // Full-screen hero — cafe bar with warm amber morning light
    primary: {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85",
      alt: "AURA Specialty Coffee Bar in Portland with morning ambient lighting and handcrafted ceramic mugs",
    },
    // Small accent — barista precision milk pour
    accentDetail: {
      src: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85",
      alt: "Barista precision milk pour creating a rosetta latte art pattern in stoneware",
    },
  },

  // 2. Page Hero Headers
  pageHeroes: {
    menu: {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85",
      alt: "Curated artisanal coffee and fresh morning pastries at the extraction bar",
    },
    story: {
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=85",
      alt: "Heritage brick coffee roastery with single-convection roasting drum and single-origin coffee sacks",
    },
    visit: {
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1600&q=85",
      alt: "Sun-drenched cafe seating area and welcoming Pearl District storefront",
    },
  },

  // 3. Signature Extractions & Craft Showcase
  signatures: {
    // Creamy flat white in white ceramic
    flatWhite: {
      src: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=85",
      alt: "Smoked Bourbon Vanilla Flat White — silky microfoam in hand-thrown stoneware",
    },
    // Iced cold brew / Japanese drip setup
    kyotoDrip: {
      src: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=1200&q=85",
      alt: "24-Hour Kyoto Slow Drip Reserve — Japanese cold-brew tower and crystal glass",
    },
    // Iced espresso in a coupe / fancy glassware
    shakerato: {
      src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85",
      alt: "Cardamom Orange Blossom Shakerato — aerated espresso crema in elegant coupe glass",
    },
    // Cortado — small espresso-milk glass
    misoCortado: {
      src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
      alt: "Miso Caramel Cortado — rich espresso balance in classic Duralex glassware",
    },
  },

  // 4. Craft Pillars & Story Chapters
  craftPillars: {
    terroir: {
      src: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1200&q=85",
      alt: "Ripe specialty coffee cherries at high altitude estate harvest in Huila, Colombia",
    },
    convectionRoast: {
      src: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?auto=format&fit=crop&w=1200&q=85",
      alt: "Clean air single-burner Loring S15 convection roaster chamber cooling tray",
    },
    sourdoughBakehouse: {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
      alt: "Traditional 72-hour wild levain sourdough cardamom knots with pearl sugar",
    },
  },

  // 5. Physical Atmosphere & Interior Gallery
  gallery: {
    // Cafe counter flooded with morning light
    morningLight: {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85",
      alt: "Morning sunlight streaming across the white oak counter and restored brick walls",
      title: "Morning Light at the Extraction Bar",
      category: "Interior & Light",
    },
    // V60 pour-over in action
    pourOverStation: {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
      alt: "V60 pour-over single origin extraction — slow bloom into a glass server",
      title: "V60 Single Origin Extraction Station",
      category: "Filter Coffee",
    },
    // Golden croissants on baking rack
    pastryLamination: {
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
      alt: "Freshly baked golden Normandy butter croissants cooling on baking racks",
      title: "Fresh Morning Bakehouse Lamination",
      category: "Bakery",
    },
    // Cozy reading nook seating
    quietSeating: {
      src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=85",
      alt: "Quiet sunlit reading corner with warm oak tables, olive plant, and stacked books",
      title: "Quiet Corner & Handcrafted Oak Tables",
      category: "Atmosphere",
    },
    // Barista at espresso machine — side angle
    baristaAtWork: {
      src: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85",
      alt: "Barista focused at the espresso machine during morning service",
      title: "Barista Precision at the Bar",
      category: "Barista Craft",
    },
    // Roasted coffee beans macro
    roasterChamber: {
      src: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1600&q=85",
      alt: "Freshly roasted single-origin beans — rich mahogany tones with aromatic oils",
      title: "Single-Origin Bean Profile",
      category: "Roastery",
    },
  },

  // 6. Complete Menu Dishes Library (High Resolution for Every Item)
  menuDishes: {
    // Espresso Classics
    espressoDouble: {
      src: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=800&q=85",
      alt: "Double origin espresso with thick golden hazelnut crema in ceramic cup",
    },
    cappuccino: {
      src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85",
      alt: "Artisan cappuccino with dense microfoam latte art",
    },
    cortado: {
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",
      alt: "Aura house cortado with silky crema in faceted glass",
    },
    americano: {
      src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=85",
      alt: "Caffè Americano with sparkling clarity and golden crema crest",
    },

    // Filter & Hand Pour
    geshaHandPour: {
      src: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85",
      alt: "Panama Gesha reserve hand pour — V60 bloom into a crystal glass server",
    },
    kalitaWave: {
      src: "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=800&q=85",
      alt: "Kalita Wave flat-bottom extraction of washed Kenya microlot on warm wooden tray",
    },
    batchBrew: {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=85",
      alt: "Steaming ceramic mug of single-origin batch brew of the day",
    },

    // Tea & Tonics
    matchaLatte: {
      src: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=85",
      alt: "Ceremonial stone-ground Uji matcha latte whisked with a bamboo chasen",
    },
    cascaraTonic: {
      src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85",
      alt: "Sparkling cascara tonic with espresso float and fresh rosemary sprig",
    },
    hojichaLatte: {
      src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85",
      alt: "Roasted Japanese hojicha latte with soft microfoam on dark background",
    },

    // Pastries & Bakes
    croissant: {
      src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=85",
      alt: "Isigny Ste. Mère French butter croissant — 27 flaky laminated layers",
    },
    cardamomKnot: {
      src: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=800&q=85",
      alt: "Traditional Swedish kardemummabulle cardamom knot with crushed pod sugar",
    },
    painAuChocolat: {
      src: "https://images.unsplash.com/photo-1602351447937-745cb720612f?auto=format&fit=crop&w=800&q=85",
      alt: "Valrhona dark chocolate pain au chocolat with shattering golden crust",
    },
    almondFrangipane: {
      src: "https://images.unsplash.com/photo-1568051243858-533a607809a5?auto=format&fit=crop&w=800&q=85",
      alt: "Twice-baked almond frangipane croissant crowned with toasted sliced almonds",
    },

    // Brunch Plates
    avocadoTartine: {
      src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85",
      alt: "48-hour sourdough avocado tartine with Meyer lemon oil and micro herbs",
    },
    scrambledBrioche: {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=85",
      alt: "Soft scrambled pasture-raised eggs on toasted brioche with shaved black truffle",
    },
    ricottaFigToast: {
      src: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=85",
      alt: "Whipped sheep ricotta and mission fig toast with lavender honey and pistachios",
    },
  },

  // 7. Roastery Team & Artisans
  artisans: {
    headRoaster: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      alt: "Julian Vance, Head Roaster & Co-Founder dialling in Slayer extraction profile",
    },
    pastryChef: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=85",
      alt: "Claire Moreau, Head of Viennoiserie laminating cultured butter dough",
    },
  },

  // 8. Background & Atmospheric CTAs
  atmosphericCta: {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1920&q=85",
    alt: "Warm ambient cafe interior in the Pearl District at golden-hour dusk",
  },
};
