import type { Metadata } from "next";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Cab Services",
  description:
    "Private cab services for Ujjain darshan, Omkareshwar, Nalkheda, Maheshwar, Mandu, airport pickup, and intercity spiritual travel.",
  path: "/cab-services",
});

export default async function CabServicesPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Cab Services
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Private cabs for darshan routes, airport pickups, and intercity spiritual travel.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Choose practical private cab support for family travel, same-day temple runs, multi-day yatra movement, and outstation arrival coordination.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Cab Formats"
            title="Vehicle support for every group size and route format."
            description="From compact city transfers to larger yatra group movement, the service structure is designed to stay flexible and WhatsApp-friendly."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Innova", "Premium family travel, airport pickup, and long-route darshan comfort."],
              ["Ertiga", "Small family groups wanting practical comfort and efficient movement."],
              ["Dzire / Aura", "Compact same-day travel for city transfers and short darshan routes."],
              ["Urbania", "Higher-comfort group movement with better space and premium feel."],
              ["Tempo Traveller", "Pilgrim groups, family clusters, and multi-stop temple travel."],
              ["Custom Cab Plan", "Cab type selection based on group size, luggage, route, and stay pattern."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Vehicle
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </section>
        <CTASection
          eyebrow="Cab Inquiry"
          title="Tell us your route and group size for the right cab recommendation."
          description="Share your pickup city, destination sequence, and number of travelers. We will suggest the most suitable private cab format on WhatsApp."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}


