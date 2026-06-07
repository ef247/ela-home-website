import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/brand/logo.png";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Luxury Carpets", to: "/collections/carpets" },
      { label: "Premium Curtains", to: "/collections/curtains" },
      { label: "Made to Measure", to: "/collections/curtains" },
      { label: "New Arrivals", to: "/collections/carpets" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Shipping & Delivery", to: "/" },
      { label: "Measuring Guide", to: "/" },
      { label: "Care & Cleaning", to: "/" },
      { label: "Returns", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-px mx-auto max-w-6xl py-14">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-5">
            <img
              src={logo}
              alt="Ela Home"
              className="h-16 w-auto rounded-xl bg-cream/95 p-2"
            />
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              Handcrafted carpets and made-to-measure curtains for considered,
              elegant interiors. Elegance for your floors and windows.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cream/70 transition-colors hover:text-cream"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-cream/70">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                  +387 60 000 000
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                  hello@elahome.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 flex-none text-gold" strokeWidth={1.5} />
                  Showroom — Sarajevo, BiH
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ela Home. All rights reserved.</p>
          <p>Perde · Tepiha — crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
