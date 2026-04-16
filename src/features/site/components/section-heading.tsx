type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleColor =
    tone === "light" ? "text-white" : "text-[var(--color-ink)]";
  const descriptionColor =
    tone === "light" ? "text-white/74" : "text-[var(--color-muted)]";
  const eyebrowColor =
    tone === "light" ? "text-[var(--color-sand)]" : "text-[var(--color-accent)]";

  return (
    <div className={alignment}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.38em] sm:text-sm ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance font-[family-name:var(--font-display)] text-[2.55rem] leading-[0.98] sm:text-5xl lg:text-[3.45rem] ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`mt-5 max-w-[42rem] text-base leading-8 sm:text-lg ${align === "center" ? "mx-auto" : ""} ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
}
