import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { getPackageInquiryLink } from "@/features/site/content";
import type { TravelPackage } from "@/shared/types/site";

type PackageCardProps = {
  pkg: TravelPackage;
};

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(160deg,rgba(255,251,244,0.98),rgba(226,242,249,0.96))] p-4 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(65,39,22,0.16)] sm:rounded-[2rem] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-gold-soft),transparent)]" />

      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {pkg.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-[rgba(181,106,47,0.16)] bg-[rgba(181,106,47,0.1)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] sm:px-3 sm:text-[11px]"
          >
            {badge}
          </span>
        ))}
      </div>

      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:mt-5 sm:text-xs sm:tracking-[0.22em]">
        {pkg.accent}
      </p>

      <h3 className="mt-2.5 line-clamp-2 min-h-[3.8rem] text-[1.35rem] font-semibold leading-tight text-[var(--color-ink)] sm:mt-3 sm:min-h-[5rem] sm:text-[1.95rem]">
        {pkg.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--color-muted)] sm:mt-5 sm:gap-2.5 sm:text-sm">
        <span className="rounded-full border border-[var(--color-line)] bg-white/76 px-2.5 py-1.5 sm:px-3">
          {pkg.duration}
        </span>
        <span className="rounded-full border border-[var(--color-line)] bg-white/76 px-2.5 py-1.5 sm:px-3">
          {pkg.priceLabel}
        </span>
      </div>

      <p className="mt-4 line-clamp-3 min-h-[4.3rem] text-sm leading-6 text-[var(--color-muted)] sm:mt-5 sm:min-h-[5.8rem] sm:text-base sm:leading-8">
        {pkg.shortDescription}
      </p>

      <div className="mt-5 flex min-h-[3.3rem] flex-wrap content-start gap-1.5 sm:mt-6 sm:min-h-[4.3rem] sm:gap-2">
        {pkg.destinations.slice(0, 4).map((destination) => (
          <span
            key={destination}
            className="rounded-full border border-[var(--color-line)] bg-white/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-muted)] sm:px-3 sm:text-xs"
          >
            {destination}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[rgba(124,88,54,0.14)] pt-4 sm:gap-4 sm:pt-5">
        <Link
          href={`/packages/${pkg.slug}`}
          prefetch={false}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)] sm:text-sm"
        >
          View details
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
        <a
          href={getPackageInquiryLink(pkg)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-ink)] sm:text-sm"
        >
          <MessageCircle className="h-3.5 w-3.5 text-[var(--color-accent)] sm:h-4 sm:w-4" />
          Book on WhatsApp
        </a>
      </div>
    </article>
  );
}

