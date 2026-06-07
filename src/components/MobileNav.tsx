import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Instagram, Facebook, Phone } from "lucide-react";
import { useStore } from "../context/StoreContext";
import logo from "../assets/brand/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Luxury Carpets", to: "/collections/carpets" },
  { label: "Premium Curtains", to: "/collections/curtains" },
  { label: "All Collections", to: "/collections/carpets" },
];

const secondary = [
  { label: "Our Atelier", to: "/" },
  { label: "Made to Measure", to: "/collections/curtains" },
  { label: "Contact", to: "/" },
];

export default function MobileNav() {
  const { menuOpen, setMenuOpen } = useStore();

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 flex w-[86%] max-w-sm flex-col bg-cream"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <img src={logo} alt="Ela Home" className="h-14 w-auto" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-charcoal/5 active:scale-95"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-charcoal/10 py-4 font-serif text-2xl text-charcoal transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3 px-6">
              {secondary.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.15em] text-stone transition-colors hover:text-charcoal"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-charcoal/10 px-6 py-6">
              <a
                href="tel:+38760000000"
                className="flex items-center gap-2 text-sm text-charcoal"
              >
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
                +387 60 000 000
              </a>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
                >
                  <Facebook className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
