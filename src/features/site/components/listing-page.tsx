import { destinations, packages } from "@/features/site/content";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

import { DestinationCard } from "./cards";
import { Footer } from "./footer";
import { MobileActionBar } from "./mobile-action-bar";
import { Navigation } from "./navigation";
import { PackageBrowser } from "./package-browser";
import { SectionHeading } from "./section-heading";
import { WhatsAppFloatingButton } from "./sections";

type ListingPageProps =
  | {
      type: "packages";
      locale: Locale;
    }
  | {
      type: "destinations";
      locale: Locale;
    };

export function ListingPage(props: ListingPageProps) {
  const isPackages = props.type === "packages";
  const locale = props.locale;

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />

      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(241,226,205,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {isPackages
                ? localize(locale, "Packages", "Packages")
                : localize(locale, "Destinations", "Destinations")}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-tight text-[var(--color-ink)] sm:text-6xl">
              {isPackages
                ? "Package-led travel plans for pilgrimage, heritage, and custom yatras."
                : "Temple, heritage, and gateway destinations that shape the full travel ecosystem."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {isPackages
                ? "Browse all package options with comparison-ready cards, practical filters, and direct WhatsApp actions."
                : "Explore the six core destinations with structured information for spiritual meaning, travel value, and package usefulness."}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow={isPackages ? "All Packages" : "Destination Guides"}
            title={
              isPackages
                ? "Explore the current collection of pilgrimage, heritage, and custom routes."
                : "Explore detailed destination information designed for premium travel planning."
            }
            description={
              isPackages
                ? "Each package includes itinerary structure, inclusions, exclusions, add-ons, and a direct WhatsApp inquiry path."
                : "Each destination entry includes overview, significance, travel usefulness, and its role in the brand's route network."
            }
          />

          <div className="mt-12">
            {isPackages ? (
              <PackageBrowser packages={packages} />
            ) : (
              <div className="grid items-start gap-6 lg:grid-cols-3">
                {destinations.map((destination) => (
                  <DestinationCard key={destination.slug} destination={destination} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}
