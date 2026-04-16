import type { FeatureItem } from "@/shared/types/site";

type FeatureCardProps = {
  feature: FeatureItem;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,241,232,0.96))] p-6 shadow-[var(--shadow-card)]">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(196,154,108,0.16),transparent_68%)]" />
      <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {feature.accent}
      </p>
      <h3 className="mt-3 min-h-[5.4rem] text-balance font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--color-ink)]">
        {feature.title}
      </h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-[var(--color-muted)]">
        {feature.description}
      </p>
    </article>
  );
}

