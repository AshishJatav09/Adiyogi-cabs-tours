import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { WhatsAppFloatingButton } from "@/features/site/components/sections";
import { pujaServices, spiritualAccents } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Puja Services",
  description:
    "Explore organized puja support for Kaal Sarp Dosh, Mangal Dosh, Rudrabhishek, Mahamrityunjay Jaap, and other spiritual services in Ujjain.",
  path: "/puja-services",
});

export default async function PujaServicesPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(241,226,205,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {spiritualAccents[1]}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              Trusted puja services with calmer coordination and clear support.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Build a stronger spiritual-services layer with verified ritual support, cleaner booking clarity, and a direct inquiry path.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Sacred Offerings"
            title="Puja support designed for devotees, families, and outstation visitors."
            description="This functionality brings tours and puja enquiries together in one premium spiritual-travel platform."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pujaServices.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {service.accent}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {service.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5">
                    {service.duration}
                  </span>
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5">
                    {service.priceLabel}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                  {service.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.idealFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/puja-services/${service.slug}`}
                  className="mt-7 inline-flex text-sm font-semibold text-[var(--color-accent)]"
                >
                  View details
                </Link>
              </article>
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
