/**
 * Product catalogue for Ela Home.
 *
 * IMAGE ASSETS
 * ------------
 * Every product references images imported from `src/assets/{carpets,curtains}`.
 * To swap in your own high-resolution photography, simply replace the files in
 * those folders (keeping the same file names) — no layout changes required.
 * New products can be added to the arrays below following the `Product` shape.
 */

// Carpet imagery
import greekKeyIvory from "../assets/carpets/greek-key-ivory.jpg";
import abstractGold from "../assets/carpets/abstract-gold.jpg";
import basketweaveStone from "../assets/carpets/basketweave-stone.jpg";
import roundFringeBeige from "../assets/carpets/round-fringe-beige.jpg";
import shagMist from "../assets/carpets/shag-mist.jpg";
import stairTreadsSand from "../assets/carpets/stair-treads-sand.jpg";
import abstractCharcoal from "../assets/carpets/abstract-charcoal.jpg";
import striatedCream from "../assets/carpets/striated-cream.jpg";

// Curtain imagery
import sheerIvory from "../assets/curtains/sheer-ivory.jpg";
import sheerCharcoal from "../assets/curtains/sheer-charcoal.jpg";
import damaskNavyGold from "../assets/curtains/damask-navy-gold.jpg";
import herringboneTaupe from "../assets/curtains/herringbone-taupe.jpg";
import blackoutEspresso from "../assets/curtains/blackout-espresso.jpg";
import linenGrey from "../assets/curtains/linen-grey.jpg";
import blackoutCocoa from "../assets/curtains/blackout-cocoa.jpg";

export type Category = "carpets" | "curtains";

export interface Fabric {
  name: string;
  /** CSS color used to render the selectable swatch */
  swatch: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  /** Short marketing line shown on the detail page */
  tagline: string;
  /** Displayed "from" price (currency units) */
  basePrice: number;
  /** Custom price driver: cost per square metre */
  pricePerSqm: number;
  /** Optional ribbon, e.g. "Bestseller" */
  badge?: string;
  images: string[];
  fabrics: Fabric[];
  description: string;
  care: string[];
  details: string[];
}

export const products: Product[] = [
  // ---------------------------- CARPETS ----------------------------
  {
    id: "c-aurelia",
    slug: "aurelia-abstract-rug",
    name: "Aurelia Abstract Rug",
    category: "carpets",
    tagline: "Hand-finished viscose blend with a molten gold patina",
    basePrice: 290,
    pricePerSqm: 165,
    badge: "Bestseller",
    images: [abstractGold, striatedCream, greekKeyIvory],
    fabrics: [
      { name: "Gold Mist", swatch: "#C9A66B" },
      { name: "Pearl Grey", swatch: "#C9C7C1" },
      { name: "Warm Taupe", swatch: "#B7A892" },
    ],
    description:
      "A painterly abstract weave where soft ivory grounds dissolve into veins of muted gold and silver. The high-density viscose-cotton blend gives the Aurelia a gentle sheen that shifts with the light through the day.",
    care: [
      "Vacuum regularly on a low-suction setting without a beater bar.",
      "Blot spills immediately with a clean, dry cloth — never rub.",
      "Professional cleaning recommended once a year.",
    ],
    details: [
      "Composition: 70% viscose, 30% cotton",
      "Pile height: 11 mm",
      "Backing: anti-slip cotton canvas",
      "Made to order in 2–3 weeks",
    ],
  },
  {
    id: "c-meander",
    slug: "meander-greek-key-rug",
    name: "Meander Greek-Key Rug",
    category: "carpets",
    tagline: "Sculpted relief pattern in ivory and oat",
    basePrice: 260,
    pricePerSqm: 150,
    images: [greekKeyIvory, basketweaveStone, abstractGold],
    fabrics: [
      { name: "Ivory / Oat", swatch: "#E9E2D4" },
      { name: "Stone", swatch: "#B7A892" },
    ],
    description:
      "A timeless meander motif carved in low relief, lending quiet architecture to any room. Dense, plush and impossibly soft underfoot.",
    care: [
      "Vacuum weekly to lift the pile.",
      "Rotate every few months for even wear.",
      "Spot clean with mild detergent and cool water.",
    ],
    details: [
      "Composition: 100% polypropylene heat-set yarn",
      "Pile height: 13 mm",
      "Backing: jute-blend anti-slip",
      "Made to order in 2–3 weeks",
    ],
  },
  {
    id: "c-basque",
    slug: "basque-basketweave-rug",
    name: "Basque Basketweave Rug",
    category: "carpets",
    tagline: "Tactile chenille weave in misted stone",
    basePrice: 245,
    pricePerSqm: 140,
    images: [basketweaveStone, abstractCharcoal, shagMist, striatedCream],
    fabrics: [
      { name: "Misted Stone", swatch: "#C4BEB3" },
      { name: "Soft Grey", swatch: "#B9B7B2" },
    ],
    description:
      "An interlaced basketweave with a deep chenille hand-feel. Subtle tonal variation gives the surface a lived-in, artisanal warmth.",
    care: [
      "Vacuum regularly without a rotating brush.",
      "Avoid prolonged direct sunlight to preserve tone.",
      "Professional cleaning for deep refresh.",
    ],
    details: [
      "Composition: 60% chenille, 40% polyester",
      "Pile height: 12 mm",
      "Backing: anti-slip latex grid",
      "Made to order in 2–3 weeks",
    ],
  },
  {
    id: "c-luna",
    slug: "luna-round-rug",
    name: "Luna Round Rug",
    category: "carpets",
    tagline: "Fringed circular rug with a watercolour wash",
    basePrice: 220,
    pricePerSqm: 155,
    images: [roundFringeBeige, striatedCream, abstractGold],
    fabrics: [
      { name: "Sand", swatch: "#D8C9B2" },
      { name: "Champagne", swatch: "#E4D8C2" },
    ],
    description:
      "A softly faded circular rug edged with hand-knotted fringe. Its watercolour distressing brings understated luxury to bedrooms and reading nooks.",
    care: [
      "Shake or vacuum gently to keep the fringe neat.",
      "Comb fringe straight by hand after cleaning.",
      "Blot spills; avoid soaking the fringe.",
    ],
    details: [
      "Shape: round (diameter sizing)",
      "Composition: 80% viscose, 20% cotton",
      "Pile height: 10 mm",
      "Made to order in 2–3 weeks",
    ],
  },
  {
    id: "c-nimbus",
    slug: "nimbus-shag-rug",
    name: "Nimbus Shag Rug",
    category: "carpets",
    tagline: "Deep, cloud-soft high-pile shag",
    basePrice: 275,
    pricePerSqm: 170,
    images: [shagMist, basketweaveStone, roundFringeBeige],
    fabrics: [
      { name: "Cloud Grey", swatch: "#BFBDB7" },
      { name: "Greige", swatch: "#C9BFAE" },
    ],
    description:
      "Indulgently long, dense pile that sinks underfoot. The Nimbus brings hush and softness to spaces that ask to be lingered in.",
    care: [
      "Use a suction-only vacuum, no beater bar.",
      "Shake smaller sizes outdoors to revive the pile.",
      "Spot clean immediately; professional clean yearly.",
    ],
    details: [
      "Composition: 100% polyester micro-shag",
      "Pile height: 40 mm",
      "Backing: anti-slip cotton",
      "Made to order in 2–3 weeks",
    ],
  },
  {
    id: "c-ascot",
    slug: "ascot-stair-treads",
    name: "Ascot Stair Treads",
    category: "carpets",
    tagline: "Plush self-adhesive stair treads, set of 14",
    basePrice: 130,
    pricePerSqm: 120,
    images: [stairTreadsSand, basketweaveStone, shagMist],
    fabrics: [
      { name: "Sand", swatch: "#CDBfa6" },
      { name: "Taupe", swatch: "#B7A892" },
    ],
    description:
      "Soft, sound-dampening stair treads that protect timber steps while adding warmth. Discreet grip backing keeps each tread securely in place.",
    care: [
      "Vacuum each tread individually.",
      "Lift and re-position to refresh the grip backing.",
      "Machine washable cold on a delicate cycle.",
    ],
    details: [
      "Set of 14 treads",
      "Composition: 100% polypropylene",
      "Backing: residue-free grip film",
      "In stock — ships in 3–5 days",
    ],
  },
  // ---------------------------- CURTAINS ----------------------------
  {
    id: "p-celeste",
    slug: "celeste-sheer-curtain",
    name: "Celeste Sheer Curtain",
    category: "curtains",
    tagline: "Airy linen-look voile that filters light beautifully",
    basePrice: 95,
    pricePerSqm: 48,
    badge: "Bestseller",
    images: [sheerIvory, sheerCharcoal, linenGrey],
    fabrics: [
      { name: "Ivory", swatch: "#EDE7DC" },
      { name: "Pearl", swatch: "#D8D6D0" },
      { name: "Charcoal", swatch: "#4A4844" },
    ],
    description:
      "A wave-fold voile with the texture of fine linen. The Celeste softens daylight into a warm glow while preserving privacy and a sense of openness.",
    care: [
      "Machine wash cold on a gentle cycle.",
      "Hang damp to drop creases — no ironing needed.",
      "Do not tumble dry.",
    ],
    details: [
      "Header: S-fold / wave heading",
      "Composition: 100% polyester voile",
      "Light: filtering (semi-transparent)",
      "Custom-made to your measurements",
    ],
  },
  {
    id: "p-noir",
    slug: "noir-blackout-curtain",
    name: "Noir Blackout Curtain",
    category: "curtains",
    tagline: "Triple-weave blackout in deep espresso",
    basePrice: 140,
    pricePerSqm: 72,
    images: [blackoutEspresso, blackoutCocoa, herringboneTaupe],
    fabrics: [
      { name: "Espresso", swatch: "#5A4636" },
      { name: "Cocoa", swatch: "#6E5847" },
      { name: "Charcoal", swatch: "#3A3733" },
    ],
    description:
      "A sumptuous ribbed velvet-touch blackout that blocks light and muffles sound. Generous weight gives a deep, architectural drape.",
    care: [
      "Dry clean recommended to retain the nap.",
      "Steam on low to release folds.",
      "Vacuum with an upholstery brush between cleans.",
    ],
    details: [
      "Header: pinch-pleat or eyelet",
      "Composition: 100% polyester, blackout coating",
      "Light: 100% blackout",
      "Custom-made to your measurements",
    ],
  },
  {
    id: "p-imperial",
    slug: "imperial-damask-curtain",
    name: "Imperial Damask Curtain",
    category: "curtains",
    tagline: "Midnight ground with embroidered gold medallions",
    basePrice: 185,
    pricePerSqm: 95,
    badge: "Signature",
    images: [damaskNavyGold, sheerIvory, linenGrey],
    fabrics: [
      { name: "Midnight / Gold", swatch: "#1F3148" },
      { name: "Charcoal / Gold", swatch: "#33312C" },
    ],
    description:
      "Our signature drape: a deep midnight jacquard scattered with hand-embroidered gold medallions. Pair with the Celeste sheer for a layered, hotel-suite finish.",
    care: [
      "Dry clean only to protect the embroidery.",
      "Steam gently on the reverse.",
      "Keep clear of prolonged direct sun.",
    ],
    details: [
      "Header: pinch-pleat",
      "Composition: 65% polyester, 35% viscose jacquard",
      "Light: room-darkening",
      "Custom-made to your measurements",
    ],
  },
  {
    id: "p-savile",
    slug: "savile-herringbone-curtain",
    name: "Savile Herringbone Curtain",
    category: "curtains",
    tagline: "Tailored herringbone weave in warm taupe",
    basePrice: 150,
    pricePerSqm: 78,
    images: [herringboneTaupe, blackoutEspresso, linenGrey],
    fabrics: [
      { name: "Warm Taupe", swatch: "#A88C6E" },
      { name: "Greige", swatch: "#B9A88F" },
    ],
    description:
      "A menswear-inspired herringbone with substantial drape and a refined matte finish. Quietly confident in any living space.",
    care: [
      "Dry clean or cold gentle wash.",
      "Hang to dry; steam to finish.",
      "Avoid wringing the fabric.",
    ],
    details: [
      "Header: pinch-pleat or wave",
      "Composition: 80% polyester, 20% linen",
      "Light: room-darkening",
      "Custom-made to your measurements",
    ],
  },
  {
    id: "p-mistral",
    slug: "mistral-textured-curtain",
    name: "Mistral Textured Curtain",
    category: "curtains",
    tagline: "Subtle slub weave in soft pewter grey",
    basePrice: 120,
    pricePerSqm: 60,
    images: [linenGrey, sheerCharcoal, herringboneTaupe],
    fabrics: [
      { name: "Pewter", swatch: "#9C9A95" },
      { name: "Dove", swatch: "#BDBBB5" },
    ],
    description:
      "A lightly textured slub weave that brings depth without pattern. The Mistral layers effortlessly over sheers for a calm, contemporary window.",
    care: [
      "Machine wash cold, gentle cycle.",
      "Hang damp to drop creases.",
      "Cool iron on the reverse if needed.",
    ],
    details: [
      "Header: wave / eyelet",
      "Composition: 100% polyester slub",
      "Light: filtering",
      "Custom-made to your measurements",
    ],
  },
  {
    id: "p-onyx",
    slug: "onyx-trellis-curtain",
    name: "Onyx Trellis Curtain",
    category: "curtains",
    tagline: "Charcoal ground with fine gold trellis",
    basePrice: 165,
    pricePerSqm: 88,
    images: [sheerCharcoal, damaskNavyGold, blackoutEspresso],
    fabrics: [
      { name: "Charcoal / Gold", swatch: "#36332E" },
      { name: "Slate", swatch: "#4C4A45" },
    ],
    description:
      "A dramatic charcoal panel laced with a delicate gold trellis. Designed to anchor a room and frame sheers with quiet opulence.",
    care: [
      "Dry clean recommended.",
      "Steam on low from the reverse.",
      "Dust seams with a soft brush.",
    ],
    details: [
      "Header: pinch-pleat",
      "Composition: 70% polyester, 30% viscose",
      "Light: room-darkening",
      "Custom-made to your measurements",
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getByCategory = (category: Category) =>
  products.filter((p) => p.category === category);

export const featured = [
  "c-aurelia",
  "p-imperial",
  "c-meander",
  "p-celeste",
  "c-nimbus",
  "p-noir",
].map((id) => products.find((p) => p.id === id)!);
