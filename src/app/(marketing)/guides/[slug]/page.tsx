import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuideCard } from "@/features/site/components/cards";
import { Breadcrumbs } from "@/features/site/components/common/breadcrumbs";
import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { getGuideBySlug, guideArticles } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideBySlug(slug);

  if (!article) {
    return createMetadata({
      title: "Guide Not Found",
      description: "The requested guide could not be found.",
      path: `/guides/${slug}`,
    });
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/guides/${article.slug}`,
    keywords: [article.seoKeyword],
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const locale = await getCurrentLocale();
  const { slug } = await params;
  const article = getGuideBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.96),rgba(241,226,205,0.74))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides" },
                { label: article.title },
              ]}
            />
            <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {article.accent}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {article.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-sm text-[var(--color-muted)]">
                {article.category}
              </span>
              <span className="rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-sm text-[var(--color-muted)]">
                {article.readTime}
              </span>
              <span className="rounded-full border border-[rgba(161,79,44,0.12)] bg-[rgba(161,79,44,0.06)] px-4 py-2 text-sm text-[var(--color-accent)]">
                {article.seoKeyword}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <SectionHeading
                eyebrow={article.category}
                title={article.content.ctaTitle}
                description={article.content.intro}
              />
              <div className="mt-8 grid gap-5 text-base leading-8 text-[var(--color-muted)]">
                {article.content.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                      {section.title}
                    </h3>
                    <p className="mt-3">{section.body}</p>
                  </div>
                ))}
                <p>
                  Primary keyword target for this guide: <strong>{article.seoKeyword}</strong>.
                </p>
              </div>
            </article>
            <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Why This Matters
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                Better discovery and stronger trust.
              </h2>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                {article.content.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
                {article.content.ctaBody}
              </p>
            </article>
          </div>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Related Guides"
              title="Explore more practical spiritual travel guides."
              description="These articles help visitors discover related temple routes, travel timing ideas, and better pilgrimage planning context."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {guideArticles
                .filter((item) => item.slug !== article.slug)
                .slice(0, 3)
                .map((item) => (
                  <GuideCard key={item.slug} article={item} />
                ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Travel Support"
          title="Need help turning this guide into a real route plan?"
          description="Use WhatsApp to discuss darshan timing, stay support, temple combinations, and a calmer family-friendly yatra flow."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}
