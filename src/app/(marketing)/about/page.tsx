import type { Metadata } from "next";

import { FeatureCard } from "@/features/site/components/cards";
import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { companyValues, futureIntegrationAreas } from "@/features/site/config/brand";
import { serviceFeatures, whyChooseFeatures } from "@/features/site/content/features";
import { spiritualAccents } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about the premium spiritual travel vision, family-safe service values, and future-ready approach behind Adiyogi Tours.",
  path: "/about",
});

export default async function AboutPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(241,226,205,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {spiritualAccents[0]}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              A premium spiritual travel brand built around trust, comfort, and devotion.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Adiyogi Tours is designed to feel more like a guided travel
              partner for darshan and heritage movement than a simple taxi listing.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="Brand Vision"
              title="Spiritual travel with modern clarity and family-friendly service."
              description="The business vision is to offer complete darshan and travel experiences with clean vehicles, organized routing, optional hotel and meal support, and a premium service tone."
            />
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_18px_55px_rgba(45,31,18,0.08)]">
              <p className="text-base leading-8 text-[var(--color-muted)]">
                The website is intentionally structured as a conversion-first brand
                experience. It helps families, devotees, senior citizens, and
                outstation travelers understand routes, packages, and trust
                signals quickly before moving into a direct WhatsApp inquiry.
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                This creates a calm, premium, and scalable foundation for future
                booking systems, multilingual support, CRM integrations, and
                editorial content.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[var(--color-surface)]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionHeading
              eyebrow="Why We Stand Out"
              title="Positioned above the typical local travel website."
              description="The brand language, route design, and trust-building details are intended to feel cleaner, calmer, and more premium."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {whyChooseFeatures.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Service Promise"
            title="A practical service model that supports real pilgrimage travel."
            description="These are the service pillars that make Adiyogi Tours future-ready for deeper package, blog, admin, and booking expansion."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </section>
        <section className="bg-[var(--color-surface)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <SectionHeading
                eyebrow="Brand Authority"
                title="Why devotees and families can trust the service model."
                description="The frontend is intentionally written to reinforce trust, cleanliness, private comfort, family safety, and local route support."
              />
              <div className="mt-8 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                {companyValues.map((value) => (
                  <p key={value}>{value}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Future Readiness
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                Structured for future business growth.
              </h2>
              <div className="mt-6 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                {futureIntegrationAreas.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTASection
          eyebrow="Plan With Confidence"
          title="Speak with Adiyogi Tours for your next darshan route."
          description="Use WhatsApp to discuss package options, custom plans, family support, stay requirements, and arrival details."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}

