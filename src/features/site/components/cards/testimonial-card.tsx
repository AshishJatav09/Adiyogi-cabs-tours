import { Star } from "lucide-react";

import type { Testimonial } from "@/shared/types/site";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-[var(--color-line)] bg-[linear-gradient(170deg,rgba(255,251,244,0.98),rgba(228,243,249,0.95))] p-4 shadow-[var(--shadow-card)] sm:rounded-[1.8rem] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)] sm:text-base">{testimonial.name}</p>
          <p className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">{testimonial.city}</p>
        </div>
        <div className="rounded-full border border-[rgba(181,106,47,0.2)] bg-[rgba(181,106,47,0.1)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] sm:px-3 sm:text-[11px]">
          {testimonial.sourceLabel || "Review"}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
        <div className="flex gap-1 text-[var(--color-accent)]">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
          ))}
        </div>
        <span className="text-xs font-medium text-[var(--color-ink)] sm:text-sm">{testimonial.rating}.0/5</span>
      </div>
      <div className="mt-3.5 rounded-[1rem] border border-[var(--color-line)] bg-white/75 px-3 py-2.5 sm:mt-4 sm:rounded-[1.2rem] sm:px-4 sm:py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] sm:text-[11px] sm:tracking-[0.18em]">
          {testimonial.trip}
        </p>
      </div>
      <p className="mt-4 line-clamp-6 text-sm leading-7 text-[var(--color-muted)] sm:mt-5 sm:text-[15px] sm:leading-8">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto pt-4 sm:pt-5">
        <div className="h-px bg-[linear-gradient(90deg,rgba(181,106,47,0.25),rgba(181,106,47,0.02))]" />
        <p className="mt-3 text-xs text-[var(--color-muted)] sm:mt-4 sm:text-sm">
          Reviewed after a completed spiritual travel experience.
        </p>
      </div>
    </article>
  );
}

