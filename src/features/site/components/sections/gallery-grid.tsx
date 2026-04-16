import Image from "next/image";

import type { GalleryItem } from "@/shared/types/site";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.id}
          className={`group relative min-h-[21rem] overflow-hidden rounded-[2rem] p-6 text-white shadow-[0_18px_48px_rgba(32,22,14,0.16)] transition duration-300 hover:-translate-y-1 ${item.gradient}`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,8,0.12),rgba(6,9,8,0.78))]" />
          <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-white/15 bg-white/5" />
          <div className="relative flex h-full flex-col justify-end">
            <p className="text-xs uppercase tracking-[0.28em] text-white/72">
              {item.category}
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">
              {item.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/78">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

