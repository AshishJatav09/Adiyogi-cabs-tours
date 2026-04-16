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
  const [activeFilter, setActiveFilter] =
    useState<(typeof galleryFilters)[number]>("All");

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "bg-[var(--color-accent)] text-white"
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

