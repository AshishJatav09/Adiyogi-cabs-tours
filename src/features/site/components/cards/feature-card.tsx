import type { FeatureItem } from "@/shared/types/site";

type FeatureCardProps = {
  feature: FeatureItem;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(226,242,249,0.95))] p-4 shadow-[var(--shadow-card)] sm:rounded-[1.75rem] sm:p-6">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(216,165,92,0.22),transparent_68%)] sm:h-24 sm:w-24" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs sm:tracking-[0.22em]">
        {feature.accent}
      </p>
      <h3 className="mt-2.5 min-h-[3.9rem] text-balance text-lg font-semibold leading-tight text-[var(--color-ink)] sm:mt-3 sm:min-h-[5.4rem] sm:text-2xl">
        {feature.title}
      </h3>
      <p className="mt-3.5 line-clamp-4 text-sm leading-6 text-[var(--color-muted)] sm:mt-4 sm:leading-7">
        {feature.description}
      </p>
    </article>
  );
}

