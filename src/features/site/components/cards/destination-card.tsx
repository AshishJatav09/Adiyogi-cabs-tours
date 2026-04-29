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
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(244,234,220,0.96))] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(181,106,47,0.36)] sm:rounded-[2rem]"
    >
      <div className="relative h-44 overflow-hidden sm:h-56">
        {destination.image ? (
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,13,0.12),rgba(11,14,13,0.8))]" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-sand)] sm:text-xs sm:tracking-[0.24em]">
            {destination.accent}
          </p>
          <h3 className="mt-1.5 text-[1.35rem] font-semibold text-white sm:mt-2 sm:text-[1.95rem]">{destination.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <p className="line-clamp-4 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">{destination.overview}</p>
        <div className="mt-4 flex min-h-[3.1rem] flex-wrap content-start gap-1.5 sm:mt-5 sm:min-h-[4.2rem] sm:gap-2">
          {destination.highlights.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-line)] bg-white/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-[var(--color-muted)] sm:px-3 sm:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold text-[var(--color-accent)] sm:pt-6 sm:text-sm">
          Explore guide
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

