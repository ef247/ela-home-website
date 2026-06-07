import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Truck, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { featured } from "../data/products";

import heroImg from "../assets/lifestyle/showroom-1.jpg";
import carpetsCat from "../assets/carpets/abstract-gold.jpg";
import curtainsCat from "../assets/curtains/damask-navy-gold.jpg";
import styledRoom from "../assets/lifestyle/styled-room.jpg";

const categories = [
  {
    title: "Luxury Carpets",
    sub: "Hand-finished rugs & runners",
    to: "/collections/carpets",
    img: carpetsCat,
  },
  {
    title: "Premium Curtains",
    sub: "Made-to-measure drapery",
    to: "/collections/curtains",
    img: curtainsCat,
  },
];

const promises = [
  { icon: Ruler, label: "Made to measure", sub: "Cut to your exact window or floor" },
  { icon: Sparkles, label: "Artisan quality", sub: "Premium fabrics & dense weaves" },
  { icon: Truck, label: "Careful delivery", sub: "Insured shipping, white-glove option" },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------- HERO --------------------------------- */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Ela Home showroom with layered curtains"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

        <div className="container-px relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center text-center">
          <motion.span
            className="eyebrow text-gold-light"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Ela Home · Perde · Tepiha
          </motion.span>
          <motion.h1
            className="mt-5 max-w-2xl font-serif text-[40px] leading-[1.08] text-cream sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9 }}
          >
            Elegance for your floors and windows
          </motion.h1>
          <motion.p
            className="mt-5 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            Handcrafted carpets and made-to-measure curtains, created to bring
            warmth and quiet luxury to every room.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9 }}
          >
            <Link to="/collections/carpets" className="btn-primary bg-cream text-charcoal hover:bg-gold hover:text-cream">
              Shop Collections
            </Link>
            <Link
              to="/collections/curtains"
              className="text-[13px] font-medium uppercase tracking-[0.15em] text-cream link-underline"
            >
              Custom Curtains
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/50 p-1.5">
            <motion.span
              className="h-2 w-1 rounded-full bg-cream"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ------------------------------- PROMISES ------------------------------- */}
      <section className="border-b border-charcoal/10 bg-sand">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-5 py-7 sm:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.08}
              className="flex items-center gap-3 sm:justify-center"
            >
              <p.icon className="h-6 w-6 flex-none text-gold" strokeWidth={1.3} />
              <div>
                <p className="text-sm font-medium text-charcoal">{p.label}</p>
                <p className="text-xs text-stone">{p.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ CATEGORIES ------------------------------ */}
      <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
        <SectionHeading
          eyebrow="Explore"
          title="Shop by category"
          subtitle="Two crafts, one standard of quality — chosen to layer beautifully together."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Link
                to={c.to}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-card"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-xl text-cream sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-cream/75">{c.sub}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-gold-light">
                    Discover
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------- FEATURED PRODUCTS -------------------------- */}
      <section className="bg-sand py-16 sm:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Curated"
            title="Featured pieces"
            subtitle="A selection of our most-loved carpets and curtains, ready to be made yours."
          />
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Link to="/collections/carpets" className="btn-outline">
              View all products
            </Link>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- MADE TO MEASURE --------------------------- */}
      <section className="container-px mx-auto max-w-6xl py-16 sm:py-24">
        <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              <img
                src={styledRoom}
                alt="Styled interior with Ela Home carpet and curtains"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Bespoke service</span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              Made to your exact measurements
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Every curtain and carpet can be tailored to the centimetre. Enter
              your width and length on any product page and watch the price update
              instantly — no surprises, no compromise on fit.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal">
              {[
                "Free fabric & texture selection",
                "Live price calculator on every product",
                "Expert measuring guidance",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/collections/curtains" className="btn-primary mt-8">
              Start customising
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- QUOTE --------------------------------- */}
      <section className="bg-charcoal py-20">
        <Reveal className="container-px mx-auto max-w-3xl text-center">
          <span className="eyebrow text-gold-light">Our philosophy</span>
          <p className="mt-5 font-serif text-2xl leading-snug text-cream sm:text-3xl">
            “A home is dressed in its details. We weave comfort into every floor
            and frame every window with quiet elegance.”
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/60">
            — The Ela Home Atelier
          </p>
        </Reveal>
      </section>
    </>
  );
}
