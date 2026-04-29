import type { Metadata } from "next";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Hotel and Stay Support",
  description:
    "Hotel and stay planning support for Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu, and multi-day pilgrimage routes.",
  path: "/hotel-stays",
});

export default async function HotelStaysPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Hotel & Stay
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Stay support for standard, deluxe, and premium pilgrimage comfort.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Hotel planning is available for family darshan routes, elder-friendly travel, and multi-day circuits where comfort matters as much as the temple schedule.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Stay Types"
            title="Different stay levels depending on comfort, route, and budget."
            description="These categories help travelers quickly explain what kind of accommodation support they want before final package confirmation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Standard Stay", "Clean and practical rooms for pilgrims who want a simple, route-first plan."],
              ["Deluxe Stay", "Better comfort for family groups needing calmer overnight breaks and smoother multi-day pacing."],
              ["Premium Stay", "Higher-comfort options for senior-friendly travel, special family trips, and premium route planning."],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Stay Category
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
          eyebrow="Stay Inquiry"
          title="Share your city, route, and comfort preference for stay guidance."
          description="We can help match hotel support with family size, travel pace, and the number of nights in your spiritual circuit."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}


