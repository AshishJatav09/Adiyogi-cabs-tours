import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { getPackageInquiryLink } from "@/features/site/content";
import type { TravelPackage } from "@/shared/types/site";

type PackageCardProps = {
  pkg: TravelPackage;
};

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,243,235,0.98))] p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(45,31,18,0.14)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-gold-soft),transparent)]" />
      <div className="flex flex-wrap gap-2">
        {pkg.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-[rgba(161,79,44,0.1)] bg-[rgba(161,79,44,0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]"
          >
            {badge}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {pkg.accent}
      </p>
      <h3 className="mt-3 line-clamp-2 min-h-[5.2rem] font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-ink)]">
        {pkg.title}
      </h3>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
        <span className="rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.7)] px-3 py-1.5">
          {pkg.duration}
        </span>
        <span className="rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.7)] px-3 py-1.5">
          {pkg.priceLabel}
        </span>
      </div>
      <p className="mt-6 line-clamp-3 min-h-[6rem] text-base leading-8 text-[var(--color-muted)]">
        {pkg.shortDescription}
      </p>
      <div className="mt-7 flex min-h-[4.5rem] flex-wrap content-start gap-2">
        {pkg.destinations.slice(0, 4).map((destination) => (
          <span
            key={destination}
            className="rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-sm text-[var(--color-muted)]"
          >
            {destination}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[rgba(109,77,49,0.1)] pt-5">
        <Link
          href={`/packages/${pkg.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
        >
          View details
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
        <a
          href={getPackageInquiryLink(pkg)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
        >
          <MessageCircle className="h-4 w-4" />
          Book on WhatsApp
        </a>
      </div>
    </article>
  );
}

