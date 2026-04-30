import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { reviewStories } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Reviews",
  description:
    "Read comfort-focused pilgrimage reviews for Ujjain, Omkareshwar, Nalkheda, Maheshwar, and private family spiritual tours.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Review Wall
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Trust signals shaped around comfort, clarity, and darshan support.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              This page gives families and outstation devotees a clearer picture of how the journey feels in practice, not just what routes are available.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["4.9/5", "Average journey satisfaction signal"],
                ["250+", "Pilgrims and families supported"],
                ["24/7", "WhatsApp-led planning response"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/88 px-5 py-5 shadow-[var(--shadow-card)]"
                >
                  <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
                    {value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Pilgrim Reviews"
            title="Stories that make the brand feel credible before inquiry."
            description="These review blocks are positioned to feel closer to real traveler feedback, with route context and comfort-led outcomes instead of generic praise."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {reviewStories.map((review) => (
              <article
                key={`${review.name}-${review.route}`}
                className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[rgba(181,106,47,0.12)] bg-[rgba(181,106,47,0.06)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {review.travelerType}
                  </span>
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {review.city}
                  </span>
                </div>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {review.title}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {review.route}
                </p>
                <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                  {review.body}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--color-line)] pt-5">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{review.name}</p>
                    <p className="text-sm text-[var(--color-muted)]">{review.city}</p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    {"â˜…".repeat(review.rating)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Route Confidence", "Visitors understand that pickup, darshan order, and return timing can be discussed before the trip starts."],
              ["Family Comfort", "The positioning feels more supportive for elders, children, and mixed-age groups."],
              ["Booking Clarity", "WhatsApp-led planning reduces confusion when route, hotel, or meal requirements change."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">{title}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-surface)]"
            >
              Enquire with your own route
            </Link>
          </div>
        </section>

        <CTASection
          eyebrow="Direct Planning"
          title="Want help planning a route with the same level of care?"
          description="Share your arrival city, desired temples, travel month, and family mix to get a calmer recommendation on WhatsApp."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}


