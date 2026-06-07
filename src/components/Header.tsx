import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { useStore } from "../context/StoreContext";

export default function Header() {
  const { count, setCartOpen, setMenuOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent overlay only at the very top of the home page (over hero).
  const overlay = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        overlay
          ? "bg-transparent"
          : "bg-cream/90 shadow-soft backdrop-blur-md"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-charcoal/5 active:scale-95"
        >
          <Menu
            className={`h-5 w-5 ${overlay ? "text-cream" : "text-charcoal"}`}
            strokeWidth={1.5}
          />
        </button>

        <Logo
          className="absolute left-1/2 -translate-x-1/2"
          tone={overlay ? "light" : "dark"}
        />

        <button
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label={`Open shopping bag, ${count} items`}
          className="-mr-2 relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-charcoal/5 active:scale-95"
        >
          <ShoppingBag
            className={`h-5 w-5 ${overlay ? "text-cream" : "text-charcoal"}`}
            strokeWidth={1.5}
          />
          {count > 0 && (
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-cream">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
