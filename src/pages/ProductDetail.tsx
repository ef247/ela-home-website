import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import { getProduct, products, type Product } from "../data/products";
import { currency, customPrice } from "../lib/format";
import { useStore } from "../context/StoreContext";

function Gallery({ product }: { product: Product }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(product.images.length - 1, i));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex aspect-[4/5] w-full snap-x snap-mandatory overflow-x-auto sm:rounded-3xl"
      >
        {product.images.map((src, i) => (
          <div key={i} className="relative h-full w-full flex-none snap-center">
            <img
              src={src}
              alt={`${product.name} view ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* arrows (hidden on small touch screens) */}
      {product.images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => scrollTo(active - 1)}
            className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/85 text-charcoal shadow-soft backdrop-blur transition hover:bg-cream sm:flex"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => scrollTo(active + 1)}
            className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/85 text-charcoal shadow-soft backdrop-blur transition hover:bg-cream sm:flex"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {product.images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-cream" : "w-1.5 bg-cream/60"
            }`}
          />
        ))}
      </div>

      {/* thumbnails */}
      <div className="mt-3 hidden gap-2 px-1 sm:flex">
        {product.images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`h-16 w-14 overflow-hidden rounded-lg border-2 transition ${
              active === i ? "border-gold" : "border-transparent opacity-70"
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-[0.12em] text-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-stone transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm leading-relaxed text-stone">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  const { addItem } = useStore();

  const isCarpet = product?.category === "carpets";
  const [fabric, setFabric] = useState(0);
  const [width, setWidth] = useState(isCarpet ? 200 : 150);
  const [length, setLength] = useState(isCarpet ? 300 : 250);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const unitPrice = useMemo(() => {
    if (!product) return 0;
    return customPrice(product.basePrice, product.pricePerSqm, width, length);
  }, [product, width, length]);

  if (!product) {
    return (
      <div className="container-px mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-4 pt-24 text-center">
        <p className="font-serif text-2xl">Product not found</p>
        <Link to="/collections/carpets" className="btn-outline">
          Back to collections
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    addItem({
      key: `${product.id}-${product.fabrics[fabric].name}-${width}x${length}`,
      productId: product.id,
      name: product.name,
      image: product.images[0],
      fabric: product.fabrics[fabric].name,
      width,
      length,
      unitPrice,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const sizeLabel = isCarpet ? "Rug size" : "Window size";

  return (
    <div className="pb-28">
      {/* breadcrumb spacer for fixed header */}
      <div className="container-px mx-auto max-w-6xl pt-20">
        <div className="flex items-center gap-2 py-3 text-xs uppercase tracking-[0.12em] text-stone">
          <Link to="/" className="hover:text-charcoal">
            Home
          </Link>
          <span>/</span>
          <Link
            to={`/collections/${product.category}`}
            className="hover:text-charcoal"
          >
            {product.category === "carpets" ? "Carpets" : "Curtains"}
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      <div className="container-px mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 sm:gap-12">
        {/* Gallery */}
        <div className="-mx-5 sm:mx-0">
          <Gallery product={product} />
        </div>

        {/* Info */}
        <div>
          <span className="eyebrow">
            {product.category === "carpets" ? "Tepiha · Carpet" : "Perde · Curtain"}
          </span>
          <h1 className="mt-2 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-stone">{product.tagline}</p>
          <p className="mt-4 font-serif text-2xl text-charcoal">
            {currency(unitPrice)}
            <span className="ml-2 align-middle text-xs uppercase tracking-[0.12em] text-stone">
              {width}×{length} cm
            </span>
          </p>

          {/* Fabric / texture selector */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-charcoal">
                {isCarpet ? "Texture" : "Fabric"}
              </p>
              <p className="text-sm text-stone">{product.fabrics[fabric].name}</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.fabrics.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  onClick={() => setFabric(i)}
                  aria-label={f.name}
                  className={`relative h-10 w-10 rounded-full ring-offset-2 ring-offset-cream transition ${
                    fabric === i ? "ring-2 ring-gold" : "ring-1 ring-charcoal/15"
                  }`}
                  style={{ backgroundColor: f.swatch }}
                >
                  {fabric === i && (
                    <Check
                      className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-cream mix-blend-difference"
                      strokeWidth={2}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Measurement calculator */}
          <div className="mt-7 rounded-2xl border border-charcoal/10 bg-sand/60 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-charcoal">
                {sizeLabel}
              </p>
              <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-gold">
                Made to measure
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.1em] text-stone">
                  Width (cm)
                </span>
                <input
                  type="number"
                  min={50}
                  max={600}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                  className="mt-1.5 w-full rounded-lg border border-charcoal/15 bg-cream px-3 py-2.5 text-base text-charcoal outline-none focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.1em] text-stone">
                  Length (cm)
                </span>
                <input
                  type="number"
                  min={50}
                  max={800}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                  className="mt-1.5 w-full rounded-lg border border-charcoal/15 bg-cream px-3 py-2.5 text-base text-charcoal outline-none focus:border-gold"
                />
              </label>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {(isCarpet
                ? [
                    [160, 230],
                    [200, 300],
                    [240, 340],
                  ]
                : [
                    [140, 250],
                    [200, 260],
                    [300, 280],
                  ]
              ).map(([w, l]) => {
                const selected = w === width && l === length;
                return (
                  <button
                    key={`${w}x${l}`}
                    type="button"
                    onClick={() => {
                      setWidth(w);
                      setLength(l);
                    }}
                    className={`rounded-full px-3 py-1.5 text-xs transition ${
                      selected
                        ? "bg-charcoal text-cream"
                        : "border border-charcoal/15 text-charcoal hover:bg-charcoal/5"
                    }`}
                  >
                    {w}×{l}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-3">
              <span className="text-xs text-stone">
                {((width / 100) * (length / 100)).toFixed(2)} m² ·{" "}
                {currency(product.pricePerSqm)}/m²
              </span>
              <span className="font-serif text-lg text-charcoal">
                {currency(unitPrice)}
              </span>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium uppercase tracking-[0.12em] text-charcoal">
              Quantity
            </span>
            <div className="flex items-center rounded-full border border-charcoal/15">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-9 w-9 items-center justify-center active:scale-90"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="flex h-9 w-9 items-center justify-center active:scale-90"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Desktop add button */}
          <button
            type="button"
            onClick={handleAdd}
            className="btn-primary mt-7 hidden w-full sm:inline-flex"
          >
            {added ? "Added to bag" : `Add to Bag · ${currency(unitPrice * qty)}`}
          </button>

          {/* Accordions */}
          <div className="mt-8">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Product Details">
              <ul className="space-y-2">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Care Instructions">
              <ul className="space-y-2">
                {product.care.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Shipping & Lead Time">
              Made-to-measure pieces are crafted in 2–3 weeks and shipped with
              insured delivery. In-stock items ship within 3–5 working days.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="container-px mx-auto mt-20 max-w-6xl">
        <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">
          You may also like
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <Reveal key={p.id}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sticky add-to-bag bar (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-charcoal/10 bg-cream/95 px-5 py-3 backdrop-blur-md sm:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-none">
            <p className="text-[10px] uppercase tracking-[0.12em] text-stone">
              {width}×{length} cm
            </p>
            <p className="font-serif text-lg leading-tight text-charcoal">
              {currency(unitPrice * qty)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="btn-primary flex-1"
          >
            {added ? (
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" strokeWidth={2} /> Added
              </span>
            ) : (
              "Add to Bag"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
