import type { Metadata } from "next";

import { GuideCard } from "@/features/site/components/cards";
import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { WhatsAppFloatingButton } from "@/features/site/components/sections";
import { guideArticles } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Guides and Travel Insights",
  description:
    "Explore future-ready guides for Mahakaleshwar, Omkareshwar, Nalkheda, Ujjain temple circuits, Maheshwar, Mandu, and spiritual travel planning.",
  path: "/guides",
});

export default async function GuidesPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Blog & Guide Structure
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Future-ready travel and darshan guides for discovery and local SEO.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              This guide layer prepares the frontend for content marketing,
              search visibility, and stronger trust-building around destinations and pilgrimage planning.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Guide Library"
            title="Placeholder articles designed for future blog, guide, and CMS expansion."
            description="These cards are intentionally structured to grow into destination pages, editorial content, and long-tail search landing pages later."
          />
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {guideArticles.map((article) => (
              <GuideCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}



