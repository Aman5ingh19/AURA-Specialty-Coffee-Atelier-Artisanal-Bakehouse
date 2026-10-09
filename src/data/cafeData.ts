import { CAFE_IMAGES } from "./images";

export interface MenuItem {
  id: string;
  name: string;
  category: "signature" | "espresso" | "filter" | "tea-tonics" | "pastries" | "brunch";
  price: string;
  description: string;
  origin?: string;
  notes?: string[];
  dietary?: ("V" | "VG" | "GF" | "DF")[]; // V=Vegetarian, VG=Vegan, GF=Gluten-Free, DF=Dairy-Free
  badge?: string;
  image?: string;
}

export interface SignatureDrink {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  process: string;
  tastingNotes: string[];
  image: string;
  originTerroir: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  source: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

export const CAFE_INFO = {
  name: "AURA",
  fullName: "AURA Specialty Coffee Atelier",
  descriptor: "Specialty Micro-Roastery & Artisanal Bakehouse",
  tagline: "Good coffee. Slow mornings. Better moments.",
  mission: "We treat coffee as an agricultural craft. Sourced directly from regenerative microlot farms, roasted in micro-batches in Portland, and brewed with precision extraction.",
  announcement: "Freshly roasted single-origin Ethiopian Guji Reserve now on bar • Visit us daily from 7 AM",
  address: {
    street: "42 Heritage Roastery Lane",
    district: "Pearl District",
    city: "Portland",
    state: "OR",
    zip: "97204",
    country: "USA",
    mapUrl: "https://maps.google.com/?q=42+Heritage+Lane+Portland+OR",
  },
  contact: {
    phone: "+1 (503) 847-2910",
    phoneDisplay: "(503) 847-2910",
    email: "bonjour@auracoffee.com",
    reservationsEmail: "tables@auracoffee.com",
  },
  hours: [
    { days: "Monday – Friday", time: "07:00 – 18:00", notes: "Full brunch until 14:30" },
    { days: "Saturday", time: "08:00 – 19:00", notes: "Weekend bakery drop at 08:30" },
    { days: "Sunday", time: "08:00 – 17:00", notes: "Slow drip reserve & acoustic jazz" },
  ],
  socials: [
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Substack", url: "https://substack.com" },
    { label: "Spotify", url: "https://spotify.com" },
  ],
};

export const SIGNATURE_EXPERIENCES: SignatureDrink[] = [
  {
    id: "smoked-vanilla-flat-white",
    name: "Smoked Bourbon Vanilla Flat White",
    subtitle: "Signature Extraction • Velvety Silken Texture",
    price: "$6.80",
    description:
      "Double ristretto pulled from our Colombia Huila Pink Bourbon lot, gently infused with cold-smoked Madagascar vanilla bean syrup and steamed microfoam.",
    process: "48-Hour Infusion • 9.2 Bar Saturated Group Extraction",
    tastingNotes: ["Toasted Marshmallow", "Wild Honey", "Dark Cacao", "Bourbon Oak"],
    originTerroir: "Finca El Paraiso, Huila, Colombia (1,950m)",
    image: CAFE_IMAGES.signatures.flatWhite.src,
  },
  {
    id: "kyoto-slow-drip",
    name: "24-Hour Kyoto Slow Drip Reserve",
    subtitle: "Cold Gravity Extraction • Single-Origin Lot",
    price: "$7.50",
    description:
      "Ice-cold gravity water filtered drop-by-drop through hand-ground Ethiopian Yirgacheffe over 24 hours. Served over a hand-carved crystal ice sphere.",
    process: "1 Drop Every 4 Seconds • Japanese Glass Tower",
    tastingNotes: ["Bergamot Blossom", "Candied Peach", "Jasmine Tea", "Champagne Crisp"],
    originTerroir: "Idido Co-op, Yirgacheffe, Ethiopia (2,100m)",
    image: CAFE_IMAGES.signatures.kyotoDrip.src,
  },
  {
    id: "cardamom-orange-shakerato",
    name: "Cardamom Orange Blossom Shakerato",
    subtitle: "Aerated Chilled Espresso • Mediterranean Essence",
    price: "$7.00",
    description:
      "A chilled shot of washed Kenya Nyeri espresso aggressively hand-shaken over hand-cut ice with organic orange blossom water and freshly cracked green cardamom.",
    process: "Hard Boston Shake • Double Fine Strain",
    tastingNotes: ["Bright Tangerine", "Cardamom Spice", "Brown Sugar Foam", "Floral Finish"],
    originTerroir: "Gatomboya Mill, Nyeri, Kenya (1,800m)",
    image: CAFE_IMAGES.signatures.shakerato.src,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature
  {
    id: "m1",
    name: "Smoked Bourbon Vanilla Flat White",
    category: "signature",
    price: "$6.80",
    description: "Pink Bourbon double ristretto, cold-smoked Madagascar vanilla bean, velvety whole milk or oat.",
    origin: "Colombia Huila Pink Bourbon",
    notes: ["Bourbon Vanilla", "Toasted Pecan", "Dark Chocolate"],
    dietary: ["V"],
    badge: "Guest Favorite",
    image: CAFE_IMAGES.signatures.flatWhite.src,
  },
  {
    id: "m2",
    name: "24-Hour Kyoto Slow Drip Reserve",
    category: "signature",
    price: "$7.50",
    description: "Drop-by-drop cold glass extraction over 24 hours. Served over crystal hand-carved ice sphere.",
    origin: "Ethiopia Yirgacheffe Anaerobic",
    notes: ["Jasmine Flower", "White Peach", "Cacao Nibs"],
    dietary: ["VG", "GF", "DF"],
    badge: "Limited Daily",
    image: CAFE_IMAGES.signatures.kyotoDrip.src,
  },
  {
    id: "m3",
    name: "Cardamom Orange Blossom Shakerato",
    category: "signature",
    price: "$7.00",
    description: "Double espresso shaken with organic orange blossom distillate and crushed green cardamom.",
    origin: "Kenya Nyeri Washed",
    notes: ["Candied Citrus", "Cardamom Pod", "Silky Crema Foam"],
    dietary: ["VG", "GF", "DF"],
    badge: "Seasonal",
    image: CAFE_IMAGES.signatures.shakerato.src,
  },
  {
    id: "m4",
    name: "Miso Caramel Cortado",
    category: "signature",
    price: "$6.25",
    description: "Equal parts espresso and textured milk stirred with house-made white miso caramel reduction.",
    origin: "Guatemala Antigua",
    notes: ["Salted Caramel", "Umami Sweetness", "Hazelnut"],
    dietary: ["V"],
    image: CAFE_IMAGES.signatures.misoCortado.src,
  },

  // Espresso Classics
  {
    id: "e1",
    name: "Double Origin Espresso",
    category: "espresso",
    price: "$4.25",
    description: "Rotating microlot espresso pulled at 1:2.2 ratio on our custom walnut Slayer machine.",
    origin: "Ethiopia Guji Anaerobic Natural",
    notes: ["Blackberry", "Meyer Lemon", "Dark Honey"],
    dietary: ["VG", "GF", "DF"],
    image: CAFE_IMAGES.menuDishes.espressoDouble.src,
  },
  {
    id: "e2",
    name: "Artisan Cappuccino",
    category: "espresso",
    price: "$5.25",
    description: "Balanced ratio of espresso, silky steamed local Jersey cow milk or organic Minor Figures oat milk.",
    notes: ["Creamy Cocoa", "Pecan Praline"],
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.cappuccino.src,
  },
  {
    id: "e3",
    name: "Aura House Cortado",
    category: "espresso",
    price: "$4.95",
    description: "1:1 ratio served in traditional Spanish Duralex glass, preserving crisp crema notes.",
    notes: ["Roasted Hazelnut", "Brown Sugar"],
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.cortado.src,
  },
  {
    id: "e4",
    name: "Caffè Americano",
    category: "espresso",
    price: "$4.50",
    description: "Double espresso poured gently over 92°C filtered mineral water.",
    dietary: ["VG", "GF", "DF"],
    image: CAFE_IMAGES.menuDishes.americano.src,
  },

  // Filter & Hand Pour
  {
    id: "f1",
    name: "V60 Hand Pour: Gesha Reserve",
    category: "filter",
    price: "$9.00",
    description: "Panama Boquete Geisha lot, slow kettle pour with pristine 120ppm remineralized mountain water.",
    origin: "Hacienda La Esmeralda, Panama",
    notes: ["Bergamot", "Honeysuckle", "Meyer Lemon", "Apricot"],
    dietary: ["VG", "GF", "DF"],
    badge: "Rare Lot",
    image: CAFE_IMAGES.menuDishes.geshaHandPour.src,
  },
  {
    id: "f2",
    name: "Kalita Wave: Kenya Nyeri Washed",
    category: "filter",
    price: "$6.50",
    description: "Flat-bed dripper extraction highlighting explosive blackcurrant and grapefruit acidity.",
    origin: "Nyeri Hill Estate, Kenya",
    notes: ["Blackcurrant", "Grapefruit", "Cane Sugar"],
    dietary: ["VG", "GF", "DF"],
    image: CAFE_IMAGES.menuDishes.kalitaWave.src,
  },
  {
    id: "f3",
    name: "Batch Brew of the Day",
    category: "filter",
    price: "$4.00",
    description: "Freshly brewed every 45 minutes on our Fetco pulse-extractor.",
    dietary: ["VG", "GF", "DF"],
    image: CAFE_IMAGES.menuDishes.batchBrew.src,
  },

  // Tea & Tonics
  {
    id: "t1",
    name: "Ceremonial Uji Matcha Latte",
    category: "tea-tonics",
    price: "$6.75",
    description: "Single-estate stone-ground ceremonial matcha from Uji, Kyoto, whisked with bamboo chasen and oat milk.",
    notes: ["Sweet Grass", "Creamy Umami", "Pistachio Finish"],
    dietary: ["VG", "DF"],
    image: CAFE_IMAGES.menuDishes.matchaLatte.src,
  },
  {
    id: "t2",
    name: "Espresso Sparkling Cascara Tonic",
    category: "tea-tonics",
    price: "$6.50",
    description: "Dried coffee cherry tea brew, Mediterranean Fever-Tree tonic, espresso float, fresh rosemary sprig.",
    notes: ["Rosehip", "Tangerine Zest", "Herbal Refreshment"],
    dietary: ["VG", "GF", "DF"],
    image: CAFE_IMAGES.menuDishes.cascaraTonic.src,
  },
  {
    id: "t3",
    name: "Smoked Hojicha Latte",
    category: "tea-tonics",
    price: "$6.25",
    description: "Roasted Japanese green tea leaves ground fine, notes of toasted caramel and roasted hazelnut.",
    dietary: ["VG", "DF"],
    image: CAFE_IMAGES.menuDishes.hojichaLatte.src,
  },

  // Pastries & Bakes
  {
    id: "p1",
    name: "Isigny Ste. Mère Butter Croissant",
    category: "pastries",
    price: "$5.00",
    description: "Laminated over 72 hours with Normandy AOP butter, 27 featherweight flaky layers.",
    dietary: ["V"],
    badge: "Baked Hourly",
    image: CAFE_IMAGES.menuDishes.croissant.src,
  },
  {
    id: "p2",
    name: "Kardemummabulle (Cardamom Knot)",
    category: "pastries",
    price: "$5.50",
    description: "Traditional Swedish knotted dough infused with toasted crushed cardamom pods and pearl sugar crystals.",
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.cardamomKnot.src,
  },
  {
    id: "p3",
    name: "Valrhona Pain au Chocolat",
    category: "pastries",
    price: "$5.75",
    description: "Twin batons of 70% Guanaja single-origin chocolate wrapped in slow-fermented buttery pastry.",
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.painAuChocolat.src,
  },
  {
    id: "p4",
    name: "Almond & Frangipane Twice-Baked",
    category: "pastries",
    price: "$6.25",
    description: "Soaked in Bourbon vanilla syrup, filled with rich roasted almond cream and toasted sliced almonds.",
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.almondFrangipane.src,
  },

  // Brunch & Kitchen Plates
  {
    id: "b1",
    name: "Heritage Sourdough Avocado Tartine",
    category: "brunch",
    price: "$14.50",
    description: "48-hour house sourdough, hass avocado smash, pickled shallots, dukkah seeds, Meyer lemon oil, micro herbs.",
    dietary: ["VG", "DF"],
    badge: "Kitchen Favorite",
    image: CAFE_IMAGES.menuDishes.avocadoTartine.src,
  },
  {
    id: "b2",
    name: "Soft Scrambled Brioche with Truffle",
    category: "brunch",
    price: "$16.00",
    description: "Pasture-raised eggs gently scrambled in French cultured butter on toasted brioche with shaved black truffle.",
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.scrambledBrioche.src,
  },
  {
    id: "b3",
    name: "Whipped Ricotta & Fig Toast",
    category: "brunch",
    price: "$13.50",
    description: "Local whipped sheep ricotta, seasonal mission figs, lavender wildflower honey, toasted pistachios.",
    dietary: ["V"],
    image: CAFE_IMAGES.menuDishes.ricottaFigToast.src,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: CAFE_IMAGES.gallery.morningLight.title,
    category: CAFE_IMAGES.gallery.morningLight.category,
    image: CAFE_IMAGES.gallery.morningLight.src,
    aspect: "landscape",
  },
  {
    id: "g2",
    title: CAFE_IMAGES.gallery.baristaAtWork.title,
    category: CAFE_IMAGES.gallery.baristaAtWork.category,
    image: CAFE_IMAGES.gallery.baristaAtWork.src,
    aspect: "portrait",
  },
  {
    id: "g3",
    title: CAFE_IMAGES.gallery.pastryLamination.title,
    category: CAFE_IMAGES.gallery.pastryLamination.category,
    image: CAFE_IMAGES.gallery.pastryLamination.src,
    aspect: "square",
  },
  {
    id: "g4",
    title: CAFE_IMAGES.gallery.pourOverStation.title,
    category: CAFE_IMAGES.gallery.pourOverStation.category,
    image: CAFE_IMAGES.gallery.pourOverStation.src,
    aspect: "portrait",
  },
  {
    id: "g5",
    title: CAFE_IMAGES.gallery.roasterChamber.title,
    category: CAFE_IMAGES.gallery.roasterChamber.category,
    image: CAFE_IMAGES.gallery.roasterChamber.src,
    aspect: "landscape",
  },
  {
    id: "g6",
    title: CAFE_IMAGES.gallery.quietSeating.title,
    category: CAFE_IMAGES.gallery.quietSeating.category,
    image: CAFE_IMAGES.gallery.quietSeating.src,
    aspect: "square",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "A rare haven where specialty coffee craft and Scandinavian architectural restraint meet. Their Kyoto slow-drip extraction is transcendent.",
    author: "Elena Rostova",
    role: "Culinary Editor",
    source: "Pacific Northwest Gastronomy",
    rating: 5,
  },
  {
    quote:
      "The bourbon vanilla flat white ruined every other cup in town for me. The light, the warmth, the music—it feels like stepping into a sanctuary.",
    author: "Marcus Chen",
    role: "Regular Neighbor & Architect",
    source: "Verified Guest",
    rating: 5,
  },
  {
    quote:
      "A masterclass in intentional hospitality. The pastries taste like a Parisian morning, but the coffee roast profile is undeniably modern Oregon terroir.",
    author: "Sarah Lindqvist",
    role: "Coffee Quality Reviewer",
    source: "Specialty Terroir Guild",
    rating: 5,
  },
];

export const STORY_PILLARS = [
  {
    number: "01",
    title: "Direct Regenerative Terroir",
    subtitle: "Beyond fair trade, into generational partnership",
    text: "We partner directly with family estates across Huila, Yirgacheffe, and Boquete. By paying 2.8x fair trade baselines, we incentivize regenerative soil health and anaerobic varietal experiments that redefine flavor.",
    image: CAFE_IMAGES.craftPillars.terroir.src,
  },
  {
    number: "02",
    title: "Loring Single-Convection Roasting",
    subtitle: "Zero smoky taint, pure fruit clarity",
    text: "Our roaster in the back room circulates superheated clean air instead of scorching beans against hot steel. The result is pure, vibrant sweetness and crystal-clear acidity that honors the elevation where each bean was born.",
    image: CAFE_IMAGES.craftPillars.convectionRoast.src,
  },
  {
    number: "03",
    title: "72-Hour Wild Sourdough Lamination",
    subtitle: "Patience you can taste in every crumb",
    text: "Our bakehouse team begins before dawn. Using a five-year-old levain starter, organic stoneground flour, and Normandy butter, every pastry is rolled by hand in small daily batches that sell out by early afternoon.",
    image: CAFE_IMAGES.craftPillars.sourdoughBakehouse.src,
  },
];
