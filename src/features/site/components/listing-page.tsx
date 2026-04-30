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
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
            <p className="inline-flex rounded-full border border-[rgba(181,106,47,0.2)] bg-[rgba(181,106,47,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {isPackages
                ? localize(locale, "Packages", "Packages")
                : localize(locale, "Destinations", "Destinations")}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
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

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
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

