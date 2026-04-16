import { Star } from "lucide-react";

import type { Testimonial } from "@/shared/types/site";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_18px_42px_rgba(46,31,18,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-[var(--color-ink)]">{testimonial.name}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{testimonial.city}</p>
        </div>
        <div className="rounded-full border border-[rgba(161,79,44,0.12)] bg-[rgba(161,79,44,0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {testimonial.sourceLabel || "Review"}
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex gap-1 text-[var(--color-accent)]">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <span className="text-sm font-medium text-[var(--color-ink)]">{testimonial.rating}.0/5</span>
      </div>
      <div className="mt-4 rounded-[1.3rem] bg-[var(--color-surface)] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {testimonial.trip}
        </p>
      </div>
      <p className="mt-5 line-clamp-6 text-[15px] leading-8 text-[var(--color-muted)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto pt-5">
        <div className="h-px bg-[linear-gradient(90deg,rgba(161,79,44,0.18),rgba(161,79,44,0.03))]" />
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Reviewed after a completed spiritual travel experience.
        </p>
      </div>
    </article>
  );
}
