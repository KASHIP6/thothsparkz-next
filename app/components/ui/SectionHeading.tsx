import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const subColor = tone === "dark" ? "text-white/60" : "text-muted";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${
        className ?? ""
      }`}
    >
      {eyebrow && (
        <span className="eyebrow inline-block text-gold">{eyebrow}</span>
      )}
      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-14 bg-gradient-to-r from-gold to-transparent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
