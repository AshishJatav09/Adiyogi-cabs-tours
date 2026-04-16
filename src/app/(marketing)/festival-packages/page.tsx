import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { festivalPackages } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Festival Packages",
  description:
    "Explore Mahashivratri, Sawan, Navratri, and Bhasma Aarti-oriented pilgrimage packages across Ujjain, Omkareshwar, and Nalkheda.",
  path: "/festival-packages",
});

export default async function FestivalPackagesPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.96),rgba(241,226,205,0.74))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Seasonal Spiritual Routes
            </p>
            <h1 className="mt-5 max-w-5xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              Festival-focused pilgrimage pages built for timing, crowd realism, and calmer support.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              These pages help the website speak to high-intent devotional travel windows instead of looking like a generic always-same package catalog.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Festival Collection"
            title="Routes tuned for sacred dates and real-world travel pressure."
            description="Festival travel feels different from standard tourism. These pages are framed around darshan timing, route practicality, and family comfort under heavier demand."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {festivalPackages.map((item) => (
              <article
                key={item.slug}
                className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {item.festival}
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{item.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-muted)]">
                    {item.duration}
                  </span>
                  <span className="rounded-full border border-[rgba(161,79,44,0.12)] bg-[rgba(161,79,44,0.06)] px-4 py-2 text-sm text-[var(--color-accent)]">
                    {item.idealFor}
                  </span>
                </div>
                <ul className="mt-6 grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <Link
                  href={`/festival-packages/${item.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)]"
                >
                  Explore festival page
                </Link>
              </article>
            ))}
          </div>
        </section>

        <CTASection
          eyebrow="Festival Inquiry"
          title="Planning around a sacred date or high-footfall weekend?"
          description="Use WhatsApp to discuss temple priorities, arrival city, hotel need, and whether the route should stay Ujjain-only or expand into a multi-day circuit."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}
