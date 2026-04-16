import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/features/site/components/common/breadcrumbs";
import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import {
  festivalPackages,
  getFestivalPackageBySlug,
} from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { buildWhatsAppLink } from "@/features/site/lib/whatsapp";
import { getCurrentLocale } from "@/shared/i18n/server";

type FestivalPackagePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return festivalPackages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: FestivalPackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getFestivalPackageBySlug(slug);

  if (!item) {
    return createMetadata({
      title: "Festival Package Not Found",
      description: "The requested festival package page could not be found.",
      path: `/festival-packages/${slug}`,
    });
  }

  return createMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/festival-packages/${item.slug}`,
  });
}

export default async function FestivalPackagePage({
  params,
}: FestivalPackagePageProps) {
  const locale = await getCurrentLocale();
  const { slug } = await params;
  const item = getFestivalPackageBySlug(slug);

  if (!item) {
    notFound();
  }

  const enquiryLink = buildWhatsAppLink(
    `Namaste Adiyogi Cabs & Tour, I want details for the festival route: ${item.title}.`,
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.96),rgba(241,226,205,0.74))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Festival Packages", href: "/festival-packages" },
                { label: item.title },
              ]}
            />
            <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {item.festival}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {item.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-sm text-[var(--color-muted)]">
                {item.duration}
              </span>
              <span className="rounded-full border border-[rgba(161,79,44,0.12)] bg-[rgba(161,79,44,0.06)] px-4 py-2 text-sm text-[var(--color-accent)]">
                {item.idealFor}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <SectionHeading
                eyebrow="Festival Highlights"
                title="Built around devotional timing and route practicality."
                description={item.note}
              />
              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Why this route works
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    What can be coordinated
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
                    {item.includes.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Planning Snapshot
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                Better for date-sensitive spiritual travel.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Festival traffic, temple demand, and stay availability can shift fast. This page is structured to encourage earlier and clearer planning.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  `Festival: ${item.festival}`,
                  `Duration: ${item.duration}`,
                  `Ideal for: ${item.idealFor}`,
                ].map((entry) => (
                  <div
                    key={entry}
                    className="rounded-[1.1rem] border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-muted)]"
                  >
                    {entry}
                  </div>
                ))}
              </div>
              <a
                href={enquiryLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
              >
                Enquire on WhatsApp
              </a>
            </article>
          </div>
        </section>

        <CTASection
          eyebrow="Custom Festival Route"
          title="Need this festival route adjusted for your family or arrival city?"
          description="Share your travel date, arrival point, temple priority, and stay preference to get a practical recommendation on WhatsApp."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} bookHref={enquiryLink} />
    </div>
  );
}
