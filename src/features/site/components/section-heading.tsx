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
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleColor = tone === "light" ? "text-white" : "text-[var(--color-ink)]";
  const descriptionColor = tone === "light" ? "text-white/80" : "text-[var(--color-muted)]";
  const eyebrowColor =
    tone === "light" ? "text-[var(--color-sand)]" : "text-[var(--color-accent)]";
  const eyebrowSurface =
    tone === "light"
      ? "border-white/30 bg-white/12"
      : "border-[rgba(181,106,47,0.18)] bg-[rgba(181,106,47,0.08)]";

  return (
    <div className={alignment}>
      <p
        className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${eyebrowColor} ${eyebrowSurface}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.2rem] ${titleColor}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-[42rem] text-base leading-7 sm:text-lg sm:leading-8 ${
          align === "center" ? "mx-auto" : ""
        } ${descriptionColor}`}
      >
        {description}
      </p>
    </div>
  );
}

