/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        sand: "#EFE7DA",
        beige: "#E2D5C2",
        taupe: "#B7A892",
        stone: "#8C7E6A",
        charcoal: "#2B2A28",
        ink: "#1B1A18",
        gold: "#B68A4E",
        "gold-light": "#C9A66B",
        olive: "#5B5A3F",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(43,42,40,0.45)",
        soft: "0 8px 30px -18px rgba(43,42,40,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
