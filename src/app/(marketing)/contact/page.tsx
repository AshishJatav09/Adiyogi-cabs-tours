import type { Metadata } from "next";

import { contactConfig } from "@/features/site/config/contact";
import { destinationCategories, faqCategories } from "@/features/site/config/constants";
import { ContactForm } from "@/features/site/components/forms/contact-form";
import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { WhatsAppFloatingButton } from "@/features/site/components/sections";
import { spiritualAccents } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Adiyogi Cabs & Tours for Ujjain darshan packages, route support, pickup and drop assistance, and WhatsApp-first spiritual travel planning.",
  path: "/contact",
});

export default async function ContactPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(241,226,205,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {spiritualAccents[4]}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              Contact and inquiry for spiritual travel planning.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Ask about packages, custom yatra plans, hotel stay support, meal
              add-ons, and family-friendly darshan arrangements.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="self-start rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_18px_55px_rgba(45,31,18,0.08)]">
              <SectionHeading
                eyebrow="Reach Us"
                title="Direct and simple inquiry flow."
                description="Phase 2 keeps the journey practical: a cleaner form, better validation, and a direct WhatsApp-ready inquiry path."
              />
              <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Phone:</span>{" "}
                  <a href={contactConfig.phoneHref}>{contactConfig.phoneDisplay}</a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Email:</span>{" "}
                  <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Coverage:</span>{" "}
                  {contactConfig.address}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Best for:</span>{" "}
                  Family travel, senior citizen-friendly darshan planning,
                  pilgrimage packages, and custom spiritual tours.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Average Response", "Usually within minutes on WhatsApp during active hours."],
              ["Pilgrim Support", "Family-friendly route pacing and senior-focused travel support."],
              ["Planning Types", "Packages, puja, hotel stay, cab-only routes, and VIP darshan requests."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-[var(--color-line)] bg-white px-5 py-5 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[var(--color-surface)]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-3 lg:px-10">
            <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Service Areas
              </p>
              <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
                {destinationCategories.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
            <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Route Support
              </p>
              <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
                <p>Airport, railway, hotel, and city pickup support.</p>
                <p>Intercity darshan planning with private comfort-first movement.</p>
                <p>Local support for families, outstation travelers, and custom routes.</p>
              </div>
            </article>
            <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Discovery FAQ Clusters
              </p>
              <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
                {faqCategories.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)]">
              <SectionHeading
                eyebrow="Business Contact Cards"
                title="Practical help before the booking starts."
                description="These content blocks are designed for local reassurance and future business information expansion."
              />
              <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
                <p>Pickup and drop support across key travel touchpoints</p>
                <p>Flexible route planning for darshan and heritage circuits</p>
                <p>Local travel help for timing, pacing, and comfort decisions</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-dashed border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(241,230,216,0.7))] p-8 shadow-[var(--shadow-card)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Map Placeholder
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                Future map and location embed area.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                This placeholder prepares the contact page for future Google Maps or
                location embeds without redesigning the page layout.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}

