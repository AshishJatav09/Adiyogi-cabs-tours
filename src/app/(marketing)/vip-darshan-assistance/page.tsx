import type { Metadata } from "next";

import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { CTASection, WhatsAppFloatingButton } from "@/features/site/components/sections";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "VIP Darshan Assistance",
  description:
    "VIP darshan assistance planning, route timing support, and temple-day coordination for Ujjain and nearby spiritual circuits.",
  path: "/vip-darshan-assistance",
});

export default async function VipDarshanAssistancePage() {
  const locale = await getCurrentLocale();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(241,226,205,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              VIP Darshan Assistance
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
              Timing-sensitive planning for smoother temple-day movement.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              For travelers with darshan-sensitive dates, family constraints, or tighter schedules, route timing and support planning matter as much as the destination list.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Support Scope"
            title="Helpful when temple timing and crowd movement influence the route."
            description="This is designed for travelers who want a calmer temple day, smarter movement, and better pacing around darshan priorities."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Temple timing-aware route planning",
              "Early departure and pickup structuring",
              "Senior citizen and family pacing support",
              "WhatsApp coordination before temple-day movement",
            ].map((item) => (
              <article
                key={item}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm leading-7 text-[var(--color-muted)]">{item}</p>
              </article>
            ))}
          </div>
        </section>
        <CTASection
          eyebrow="Darshan Planning"
          title="Send your temple priority and date for a better planned route."
          description="Tell us which temple matters most, what date you are visiting, and whether elders or children are traveling with you."
        />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}
