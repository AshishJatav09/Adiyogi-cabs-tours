"use client";

import { useMemo, useState } from "react";

import { PackageCard } from "@/features/site/components/cards";
import type { TravelPackage } from "@/shared/types/site";

const filterOptions = [
  "All",
  "Pilgrimage",
  "Heritage",
  "1 Day",
  "2 Day",
  "3 Day",
  "Custom",
] as const;

type FilterValue = (typeof filterOptions)[number];

type PackageBrowserProps = {
  packages: TravelPackage[];
};

function matchesFilter(pkg: TravelPackage, filter: FilterValue) {
  if (filter === "All") return true;
  if (filter === "Pilgrimage") return pkg.category.includes("Pilgrimage");
  if (filter === "Heritage") return pkg.category.includes("Heritage");
  if (filter === "Custom") return pkg.category === "Custom";
  if (filter === "1 Day") return pkg.duration.includes("1 Day");
  if (filter === "2 Day") return pkg.duration.includes("2 Day") || pkg.duration.includes("2 Days");
  if (filter === "3 Day") return pkg.duration.includes("3 Day") || pkg.duration.includes("3 Days");
  return true;
}

export function PackageBrowser({ packages }: PackageBrowserProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [sortOrder, setSortOrder] = useState("featured");

  const visiblePackages = useMemo(() => {
    const filtered = packages.filter((pkg) => matchesFilter(pkg, activeFilter));

    if (sortOrder === "duration") {
      return [...filtered].sort((a, b) => a.duration.localeCompare(b.duration));
    }

    if (sortOrder === "title") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [activeFilter, packages, sortOrder]);

  return (
    <div>
      <div className="section-shell rounded-[2.2rem] p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-[var(--color-accent)] text-white"
                  : "border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-muted)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm font-medium text-[var(--color-muted)]">
          Sort
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-ink)] outline-none"
          >
            <option value="featured">Featured first</option>
            <option value="title">Title</option>
            <option value="duration">Duration</option>
          </select>
        </label>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Quick Compare", "Use filters to narrow package duration and route style."],
            ["WhatsApp Ready", "Each package card opens with a prefilled inquiry."],
            ["Family Focused", "Badges highlight comfort, hotel, food, and senior support."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/85 px-4 py-4"
            >
              <p className="text-sm font-semibold text-[var(--color-ink)]">{title}</p>
              <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
        {visiblePackages.length} package{visiblePackages.length === 1 ? "" : "s"} available
        under the current filter.
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visiblePackages.length > 0 ? (
          visiblePackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)
        ) : (
          <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-8 text-[var(--color-muted)] shadow-[var(--shadow-card)] lg:col-span-2">
            No packages match this filter right now. Try another duration or category.
          </div>
        )}
      </div>
    </div>
  );
}

