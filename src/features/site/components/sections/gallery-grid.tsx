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
          className={`group relative min-h-[18rem] overflow-hidden rounded-[1.9rem] p-5 text-white shadow-[0_20px_54px_rgba(32,22,14,0.18)] transition duration-300 hover:-translate-y-1 sm:min-h-[21rem] sm:p-6 ${item.gradient}`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,8,0.1),rgba(9,8,8,0.82))]" />
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/20 bg-white/8" />
          <div className="relative flex h-full flex-col justify-end">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/76">{item.category}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-[1.9rem]">{item.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/82">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
