import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
