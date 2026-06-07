import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import { getByCategory, type Category } from "../data/products";

import carpetsHero from "../assets/carpets/striated-cream.jpg";
import curtainsHero from "../assets/curtains/sheer-ivory.jpg";

const meta: Record<
  Category,
  { title: string; eyebrow: string; blurb: string; hero: string; other: Category }
> = {
  carpets: {
    title: "Luxury Carpets",
    eyebrow: "Tepiha",
    blurb:
      "Hand-finished rugs, runners and stair treads in dense, soft weaves — made to your size.",
    hero: carpetsHero,
    other: "curtains",
  },
  curtains: {
    title: "Premium Curtains",
    eyebrow: "Perde",
    blurb:
      "Made-to-measure sheers, blackouts and statement drapery, cut to your exact window.",
    hero: curtainsHero,
    other: "carpets",
  },
};

export default function Collection() {
  const { category } = useParams<{ category: string }>();
  const cat: Category = category === "curtains" ? "curtains" : "carpets";
  const info = meta[cat];
  const items = getByCategory(cat);

  return (
    <>
      {/* Banner */}
      <section className="relative h-[46vh] min-h-[300px] w-full overflow-hidden">
        <img
          src={info.hero}
          alt={info.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="container-px relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center pt-16 text-center">
          <Reveal>
            <span className="eyebrow text-gold-light">{info.eyebrow}</span>
            <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">
              {info.title}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm text-cream/80">
              {info.blurb}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category switch */}
      <div className="container-px mx-auto flex max-w-6xl items-center justify-center gap-2 py-6">
        {(["carpets", "curtains"] as Category[]).map((c) => (
          <Link
            key={c}
            to={`/collections/${c}`}
            className={`rounded-full px-5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors ${
              c === cat
                ? "bg-charcoal text-cream"
                : "border border-charcoal/20 text-charcoal hover:bg-charcoal/5"
            }`}
          >
            {c === "carpets" ? "Carpets" : "Curtains"}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <section className="container-px mx-auto max-w-6xl pb-20">
        <p className="mb-6 text-xs uppercase tracking-[0.14em] text-stone">
          {items.length} pieces
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
