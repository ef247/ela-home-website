import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import type { Product } from "../data/products";
import { currency } from "../lib/format";
import { useStore } from "../context/StoreContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useStore();

  const quickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    const fabric = product.fabrics[0];
    addItem({
      key: `${product.id}-${fabric.name}-quick`,
      productId: product.id,
      name: product.name,
      image: product.images[0],
      fabric: fabric.name,
      unitPrice: product.basePrice,
      qty: 1,
    });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group flex flex-col"
      aria-label={product.name}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-card">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal backdrop-blur">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={quickAdd}
          aria-label={`Add ${product.name} to bag`}
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 text-charcoal shadow-soft backdrop-blur transition-all duration-300 hover:bg-gold hover:text-cream active:scale-90"
        >
          <Plus className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg leading-snug text-charcoal">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-stone">
            {product.category === "carpets" ? "Carpet" : "Curtain"}
          </p>
        </div>
        <p className="whitespace-nowrap pt-1 text-sm text-charcoal">
          <span className="text-stone">from </span>
          {currency(product.basePrice)}
        </p>
      </div>
    </Link>
  );
}
