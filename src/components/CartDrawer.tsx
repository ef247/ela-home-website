import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { currency } from "../lib/format";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, items, removeItem, setQty, subtotal, count } =
    useStore();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-md flex-col bg-cream"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <h2 className="font-serif text-xl">
                Your Bag{" "}
                <span className="text-sm text-stone">({count})</span>
              </h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close bag"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-charcoal/5 active:scale-95"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <ShoppingBag
                  className="h-10 w-10 text-taupe"
                  strokeWidth={1.2}
                />
                <p className="font-serif text-xl">Your bag is empty</p>
                <p className="text-sm text-stone">
                  Explore our collections of handcrafted carpets and made-to-measure
                  curtains.
                </p>
                <Link
                  to="/collections/carpets"
                  onClick={() => setCartOpen(false)}
                  className="btn-outline mt-2"
                >
                  Shop Collections
                </Link>
              </div>
            ) : (
              <>
                <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-4">
                  {items.map((item) => (
                    <div
                      key={item.key}
                      className="flex gap-4 border-b border-charcoal/10 py-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-20 flex-none rounded-lg object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-serif text-base leading-tight">
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-xs text-stone">
                              {item.fabric}
                              {item.width && item.length
                                ? ` · ${item.width}×${item.length} cm`
                                : ""}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.key)}
                            className="text-xs uppercase tracking-wide text-stone underline-offset-2 hover:text-charcoal hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center rounded-full border border-charcoal/15">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => setQty(item.key, item.qty - 1)}
                              className="flex h-8 w-8 items-center justify-center active:scale-90"
                            >
                              <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                            </button>
                            <span className="w-6 text-center text-sm">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => setQty(item.key, item.qty + 1)}
                              className="flex h-8 w-8 items-center justify-center active:scale-90"
                            >
                              <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                            </button>
                          </div>
                          <p className="text-sm font-medium">
                            {currency(item.unitPrice * item.qty)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-charcoal/10 px-6 pb-7 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.15em] text-stone">
                      Subtotal
                    </span>
                    <span className="font-serif text-xl">
                      {currency(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-stone">
                    Shipping &amp; made-to-measure lead times calculated at checkout.
                  </p>
                  <button type="button" className="btn-primary mt-4 w-full">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
