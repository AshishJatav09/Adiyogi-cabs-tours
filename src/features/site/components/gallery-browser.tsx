"use client";

import { useMemo, useState } from "react";

import { GalleryGrid } from "@/features/site/components/sections";
import type { GalleryItem } from "@/shared/types/site";

const galleryFilters = [
  "All",
  "Cars",
  "Darshan Moments",
  "Customer Journeys",
  "Hotels",
  "Temple Views",
  "Heritage Tours",
] as const;

type GalleryBrowserProps = {
  items: GalleryItem[];
};

export function GalleryBrowser({ items }: GalleryBrowserProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof galleryFilters)[number]>("All");

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0">
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
              activeFilter === filter
                ? "bg-[var(--color-accent)] text-white shadow-[0_10px_20px_rgba(181,106,47,0.28)]"
                : "border border-[var(--color-line)] bg-white text-[var(--color-muted)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <GalleryGrid items={visibleItems} />
      </div>
    </div>
  );
}

