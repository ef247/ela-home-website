# Ela Home — Luxury Carpets & Custom Curtains

A premium, **mobile-first** e-commerce frontend for **Ela Home** (Perde · Tepiha),
a luxury home-decor brand specialising in handcrafted carpets and made-to-measure
curtains.

Built with **Vite + React + TypeScript + Tailwind CSS**, with Framer Motion for
scroll animations. Designed phone-first with elegant, minimalist aesthetics:
Playfair Display headers, Inter body, and a cream / taupe / muted-gold / charcoal
palette.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run lint     # eslint
npm run preview  # preview the production build
```

## Project structure

```
src/
  assets/        Brand logo + product photography
    brand/       Logo
    lifestyle/   Hero / room shots
    carpets/     Carpet product photos
    curtains/    Curtain product photos
  components/    Header, MobileNav, CartDrawer, Footer, ProductCard, Reveal, …
  context/       StoreContext — cart + drawer state
  data/          products.ts — the product catalogue
  lib/           format.ts — currency + custom-price helpers
  pages/         Home, Collection, ProductDetail
```

## Pages

- `/` — hero, category grid, featured products, made-to-measure band
- `/collections/:category` — `carpets` | `curtains` listings
- `/product/:slug` — gallery, fabric selector, live size/price calculator, cart

## Swapping in your own images

Product imagery is imported per product in `src/data/products.ts` from
`src/assets/{carpets,curtains,lifestyle}`. Replace those files (keeping the same
names) to drop in your own high-resolution photography — no layout changes needed.

## Custom pricing

Made-to-measure items are priced by area:

```
price = basePrice + (widthCm / 100 × lengthCm / 100) × pricePerSqm
```

Editing the width/length inputs on a product page updates the price live.
