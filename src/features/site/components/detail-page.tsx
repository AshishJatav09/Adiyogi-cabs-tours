import Image from "next/image";
import { BedDouble, Check, MessageCircle, ShieldCheck, UtensilsCrossed, Users } from "lucide-react";

import {
  getDestinationByName,
  getDestinationInquiryLink,
  getPackageInquiryLink,
  getRelatedPackages,
  getRelatedPackagesForDestination,
} from "@/features/site/content";
import type { Locale } from "@/shared/i18n";
import type { Destination, TravelPackage } from "@/shared/types/site";

import { PackageCard } from "./cards";
import { Breadcrumbs } from "./common/breadcrumbs";
import { Footer } from "./footer";
import { MobileActionBar } from "./mobile-action-bar";
import { Navigation } from "./navigation";
import { SectionHeading } from "./section-heading";
import { WhatsAppFloatingButton } from "./sections";
import { PackageInquiryForm } from "./forms/package-inquiry-form";

type DetailPageProps =
  | {
      type: "package";
      item: TravelPackage;
      locale: Locale;
    }
  | {
      type: "destination";
      item: Destination;
      locale: Locale;
    };

export function DetailPage(props: DetailPageProps) {
  const isPackage = props.type === "package";
  const locale = props.locale;
  const heroImages = isPackage
    ? props.item.destinations
        .map((destination) => getDestinationByName(destination))
        .filter((item): item is Destination => Boolean(item?.image))
        .slice(0, 3)
    : props.item.image
      ? [props.item]
      : [];
  const packageSummary = isPackage
    ? [
        {
          label: "Duration",
          value: props.item.duration,
          icon: ShieldCheck,
        },
        {
          label: "Travel Style",
          value: props.item.badges.includes("Family Friendly") ? "Family Friendly" : props.item.category,
          icon: Users,
        },
        {
          label: "Stay Option",
          value: props.item.badges.includes("Hotel Available") ? "Hotel Available" : "On Request",
          icon: BedDouble,
        },
        {
          label: "Meals",
          value: props.item.badges.includes("Food Add-on") ? "Add-on Available" : "Optional",
          icon: UtensilsCrossed,
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />

      <main>
        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.95),rgba(241,226,205,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            {isPackage ? (
              <>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Packages", href: "/packages" },
                    { label: props.item.title },
                  ]}
                />
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {props.item.accent}
                </p>
                <h1 className="mt-7 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-tight text-[var(--color-ink)] sm:text-6xl">
                  {props.item.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                  {props.item.shortDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {props.item.destinations.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-line)] bg-white/72 px-4 py-2 text-sm text-[var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_0.85fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {props.item.accent}
                  </p>
                  <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-tight text-[var(--color-ink)] sm:text-6xl">
                    {props.item.name}
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                    {props.item.storyIntro}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {props.item.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-line)] bg-white/72 px-4 py-2 text-sm text-[var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/88 p-6 shadow-[var(--shadow-card)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Why It Pulls People In
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                    A destination with story, faith, and strong route value.
                  </h2>
                  <div className="mt-5 grid gap-3">
                    {props.item.interestingFacts.map((fact) => (
                      <div
                        key={fact}
                        className="rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm leading-7 text-[var(--color-muted)]"
                      >
                        {fact}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            )}
            {isPackage ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {packageSummary.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/82 px-5 py-4 shadow-[0_12px_30px_rgba(46,31,18,0.06)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(161,79,44,0.08)] text-[var(--color-accent)]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
            {heroImages.length > 0 ? (
              <div
                className={`mt-8 grid gap-4 ${
                  isPackage ? "lg:grid-cols-3" : "max-w-3xl"
                }`}
              >
                {heroImages.map((item) => (
                  <div
                    key={item.slug}
                    className="relative min-h-56 overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] shadow-[0_18px_44px_rgba(46,31,18,0.1)]"
                  >
                    <Image
                      src={item.image!}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,15,12,0.08),rgba(21,15,12,0.62))]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/72">
                        {item.accent}
                      </p>
                      {isPackage ? (
                        <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white">
                          {item.name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {isPackage ? (
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_16px_48px_rgba(46,33,20,0.07)]">
                <SectionHeading
                  eyebrow="Itinerary"
                  title="Journey overview"
                  description="A package detail structure built for better understanding, stronger conversion, and future operational expansion."
                />
                <div className="mt-8 grid gap-5">
                  {props.item.itinerary.map((entry) => (
                    <article
                      key={entry.day + entry.title}
                      className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
                    >
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        {entry.day}
                      </p>
                      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                        {entry.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        {entry.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid items-start gap-6 lg:sticky lg:top-24">
                {[
                  { title: "Inclusions", items: props.item.inclusions },
                  { title: "Exclusions", items: props.item.exclusions },
                  { title: "Add-ons", items: props.item.addOns },
                  { title: "Recommended For", items: props.item.recommendedFor },
                ].map((section) => (
                  <article
                    key={section.title}
                    className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                      {section.title}
                    </h3>
                    <div className="mt-5 grid gap-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex gap-3">
                          <Check className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
                          <p className="text-sm leading-7 text-[var(--color-muted)]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="grid gap-6">
                <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,239,227,0.96))] p-6 shadow-[var(--shadow-card)]">
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Booking Summary
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                    Confirm this package on WhatsApp.
                  </h3>
                  <div className="mt-5 grid gap-3 text-sm text-[var(--color-muted)]">
                    <p>Pickup: {props.item.pickupSupport}</p>
                    <p>Drop: {props.item.dropSupport}</p>
                    <p>Price: {props.item.priceLabel}</p>
                  </div>
                  <a
                    href={getPackageInquiryLink(props.item)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book this package on WhatsApp
                  </a>
                </article>
                <PackageInquiryForm pkg={props.item} />
              </div>
              <div className="grid gap-6">
                <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                  <SectionHeading
                    eyebrow="Pricing Tiers"
                    title="Choose the comfort level that fits your journey."
                    description="These indicative tiers make it easier to compare cab comfort, stay support, and route flexibility before enquiry."
                  />
                  <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {props.item.pricingTiers.map((tier) => (
                      <article
                        key={tier.label}
                        className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
                      >
                        <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          {tier.label}
                        </p>
                        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                          {tier.price}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                          {tier.bestFor}
                        </p>
                        <div className="mt-4 grid gap-3">
                          {tier.features.map((feature) => (
                            <div key={feature} className="flex gap-3">
                              <Check className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
                              <p className="text-sm leading-7 text-[var(--color-muted)]">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </article>
                <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                  <SectionHeading
                    eyebrow="Top Attractions Covered"
                    title="Places and darshan points usually included in this route."
                    description="These highlights help travelers understand the spiritual and practical value of the package at a glance."
                  />
                  <div className="mt-6 grid gap-4">
                    {props.item.highlightsCovered.map((highlight) => (
                      <article
                        key={highlight}
                        className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4"
                      >
                        <p className="text-sm font-semibold text-[var(--color-ink)]">{highlight}</p>
                      </article>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)] lg:col-span-2">
                <SectionHeading
                  eyebrow="Travel Notes"
                  title="Useful planning notes before booking."
                  description="These notes make the package easier to understand and are ready to connect to a richer FAQ or operational system later."
                />
                <div className="mt-6 grid gap-3">
                  {props.item.travelNotes.map((note) => (
                    <div key={note} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
                      <p className="text-sm leading-7 text-[var(--color-muted)]">{note}</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-24">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Support
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                  Pickup and drop support
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {props.item.pickupSupport}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {props.item.dropSupport}
                </p>
              </article>
            </div>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-24">
                <SectionHeading
                  eyebrow="Package FAQ"
                  title="Questions travelers often ask before confirming."
                  description="A package-level FAQ helps remove hesitation and supports better WhatsApp conversion."
                />
                <div className="mt-6 grid gap-4">
                  {props.item.packageFaqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
                    >
                      <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </article>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <SectionHeading
                  eyebrow="Related Packages"
                  title="Compare nearby routes"
                  description="Helpful alternatives for travelers still deciding on duration, heritage mix, or temple combinations."
                />
                <div className="mt-6 grid gap-4">
                  {getRelatedPackages(props.item.slug).map((relatedPackage) => (
                    <PackageCard key={relatedPackage.id} pkg={relatedPackage} />
                  ))}
                </div>
              </article>
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_16px_48px_rgba(46,33,20,0.07)]">
              <SectionHeading
                eyebrow="Destination Story"
                title={`What makes ${props.item.name} worth slowing down for.`}
                description={props.item.overview}
              />
              <div className="mt-8 grid gap-7 text-base leading-8 text-[var(--color-muted)]">
                {props.item.articleSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                      {section.title}
                    </h3>
                    <p className="mt-3">{section.body}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
              {[
                ["Why It Matters", props.item.significance],
                ["History Snapshot", props.item.shortHistory],
                ["How It Fits Your Route", props.item.whyInPackageEcosystem],
              ].map(([title, body]) => (
                <article
                  key={title}
                  className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_16px_48px_rgba(46,33,20,0.07)]"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {title}
                  </p>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
              <SectionHeading
                eyebrow="Structured Spiritual Content"
                title="Temple and destination-specific information blocks."
                description="These blocks make the destination pages extensible for future editorial content, temple guides, and pilgrimage planning notes."
              />
              <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
                {props.item.infoBlocks.map((block) => (
                  <article key={block.title} className="rounded-[1.6rem] bg-white p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      {block.label}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {block.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <SectionHeading
                  eyebrow="How To Reach"
                  title="Practical route planning before you arrive."
                  description="These travel notes help pilgrims understand the easiest entry point and the most practical movement pattern for this destination."
                />
                <div className="mt-6 grid gap-4">
                  {[
                    ["By Air", props.item.howToReach.byAir],
                    ["By Train", props.item.howToReach.byTrain],
                    ["By Road", props.item.howToReach.byRoad],
                  ].map(([title, body]) => (
                    <article
                      key={title}
                      className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
                    >
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        {title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
                    </article>
                  ))}
                </div>
              </article>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <SectionHeading
                  eyebrow="Best Time & Travel"
                  title="Season, timing, and route convenience at a glance."
                  description="A quick planning block for travelers deciding when to visit and how the destination fits into a larger yatra circuit."
                />
                <div className="mt-6 rounded-[1.4rem] bg-[var(--color-surface)] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    Best Time To Visit
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {props.item.bestTimeToVisit}
                  </p>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {props.item.travelTimes.map((time) => (
                    <article
                      key={`${time.from}-${time.duration}`}
                      className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-4"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">
                        {time.from}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[var(--color-ink)]">
                        {time.duration}
                      </p>
                    </article>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <SectionHeading
                  eyebrow="Nearby Attractions"
                  title="Stops commonly paired with this destination."
                  description="Helpful for travelers planning a fuller darshan route rather than a single-stop visit."
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {props.item.nearbyAttractions.map((attraction) => (
                    <article
                      key={attraction}
                      className="rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4"
                    >
                      <p className="text-sm font-semibold text-[var(--color-ink)]">{attraction}</p>
                    </article>
                  ))}
                </div>
              </article>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <SectionHeading
                  eyebrow="Darshan Tips"
                  title="Useful local advice before you finalize the route."
                  description="These tips improve pacing, comfort, and the devotional quality of the journey."
                />
                <div className="mt-6 grid gap-3">
                  {props.item.darshanTips.map((tip) => (
                    <div key={tip} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 text-[var(--color-accent)]" />
                      <p className="text-sm leading-7 text-[var(--color-muted)]">{tip}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,239,227,0.96))] p-6 shadow-[var(--shadow-card)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Destination Inquiry
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  Ask about travel for {props.item.name}.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  Enquire directly about darshan planning, route combinations,
                  hotel support, or how this destination fits your journey.
                </p>
                <a
                  href={getDestinationInquiryLink(props.item)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire on WhatsApp
                </a>
              </article>
              <article className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <SectionHeading
                  eyebrow="Related Packages"
                  title="Packages that include this destination."
                  description="This helps visitors move from destination interest into a practical package inquiry."
                />
                <div className="mt-6 grid gap-4">
                  {getRelatedPackagesForDestination(props.item.name).map((relatedPackage) => (
                    <PackageCard key={relatedPackage.id} pkg={relatedPackage} />
                  ))}
                </div>
              </article>
            </div>
          </section>
        )}
      </main>

      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar
        locale={locale}
        bookHref={isPackage ? getPackageInquiryLink(props.item) : getDestinationInquiryLink(props.item)}
      />
    </div>
  );
}

