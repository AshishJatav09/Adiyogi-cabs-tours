import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Destination } from "@/shared/types/site";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2.1rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,240,231,0.98))] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--color-gold-soft)]"
    >
      <div className="relative h-56 overflow-hidden">
        {destination.image ? (
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,13,0.08),rgba(11,14,13,0.78))]" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-sand)]">
            {destination.accent}
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white">
            {destination.name}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="line-clamp-4 text-sm leading-7 text-[var(--color-muted)]">
          {destination.overview}
        </p>
        <div className="mt-6 flex min-h-[4.3rem] flex-wrap content-start gap-2">
          {destination.highlights.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-xs text-[var(--color-muted)]"
            >
              {item}
            </span>
          ))}
        </div>
        <span className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
          Explore guide
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

