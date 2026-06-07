import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  tone?: "dark" | "light";
}

/**
 * Text wordmark for Ela Home. The brand emblem image lives in
 * `src/assets/brand/logo.png` and is used on the menu drawer & footer.
 */
export default function Logo({ className = "", onClick, tone = "dark" }: LogoProps) {
  const main = tone === "light" ? "text-cream" : "text-charcoal";
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group flex flex-col items-center leading-none ${className}`}
      aria-label="Ela Home — home"
    >
      <span
        className={`font-serif text-[22px] tracking-[0.32em] ${main} pl-[0.32em]`}
      >
        ELA HOME
      </span>
      <span className="mt-1 text-[8.5px] font-medium uppercase tracking-[0.42em] text-gold pl-[0.42em]">
        Perde · Tepiha
      </span>
    </Link>
  );
}
