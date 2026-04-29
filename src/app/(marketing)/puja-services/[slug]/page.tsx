import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { WhatsAppFloatingButton } from "@/features/site/components/sections";
import { getPujaServiceBySlug, pujaServices } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { buildWhatsAppLink } from "@/features/site/lib/whatsapp";
import { getCurrentLocale } from "@/shared/i18n/server";

type PujaDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return pujaServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PujaDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getPujaServiceBySlug(slug);

  if (!service) {
    return createMetadata({
      title: "Puja Service Not Found",
      description: "The requested puja service could not be found.",
      path: `/puja-services/${slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/puja-services/${service.slug}`,
  });
}

export default async function PujaDetailPage({ params }: PujaDetailPageProps) {
  const locale = await getCurrentLocale();
  const { slug } = await params;
  const service = getPujaServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const enquiryLink = buildWhatsAppLink(
    `Namaste Adiyogi Tours, I want details for ${service.title}.`,
  );

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {service.accent}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {service.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-sm text-[var(--color-muted)]">
                {service.duration}
              </span>
              <span className="rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-sm text-[var(--color-muted)]">
                {service.priceLabel}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <SectionHeading
                eyebrow="Overview"
                title="Devotional support with clearer coordination."
                description={service.overview}
              />
              <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
                {service.inclusions.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Booking Snapshot
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                {service.priceLabel}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Duration: {service.duration}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={enquiryLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white"
              >
                Enquire on WhatsApp
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} bookHref={enquiryLink} />
    </div>
  );
}


