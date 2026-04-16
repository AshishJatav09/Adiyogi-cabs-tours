import Link from "next/link";

import { companyValues, serviceHighlights } from "@/features/site/config/brand";
import {
  destinations,
  faqItems,
  festivalPackages,
  galleryItems,
  heroMessages,
  packages,
  pujaServices,
  reviewStories,
  spiritualAccents,
  testimonials,
} from "@/features/site/content";
import {
  bookingSteps,
  serviceFeatures,
  trustHighlights,
  whyChooseFeatures,
} from "@/features/site/content/features";
import { guideArticles } from "@/features/site/content/guides";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

import {
  DestinationCard,
  FeatureCard,
  GuideCard,
  PackageCard,
  TestimonialCard,
} from "./cards";
import { Footer } from "./footer";
import { MobileActionBar } from "./mobile-action-bar";
import { Navigation } from "./navigation";
import { SectionHeading } from "./section-heading";
import {
  BookingSteps,
  CTASection,
  FAQAccordion,
  GalleryGrid,
  HeroSection,
  TrustBar,
  WhatsAppFloatingButton,
} from "./sections";

const destinationGroups = [
  "Pilgrimage Destinations",
  "Heritage & Riverside Experiences",
  "Travel Gateway",
] as const;

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const signaturePackage =
    packages.find((pkg) => pkg.slug === "2-night-3-day-ujjain-omkareshwar-nalkheda") ?? packages[0];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />

      <main>
        <HeroSection
          accent={spiritualAccents[3]}
          title={heroMessages[0]}
          description={localize(
            locale,
            "Premium cab and spiritual travel services with clean vehicles, professional drivers, flexible packages, and trusted support for your pilgrimage journey.",
            "साफ गाड़ियों, प्रोफेशनल ड्राइवर, फ्लेक्सिबल पैकेज और भरोसेमंद सहायता के साथ प्रीमियम आध्यात्मिक यात्रा सेवा।",
          )}
          locale={locale}
        />

        <TrustBar items={trustHighlights} />

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="Featured Packages"
            title="Curated darshan and heritage routes with premium travel comfort."
            description="Each package is designed to feel organized, devotional, and easy to enquire about, with direct WhatsApp-first conversion."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages
              .filter((pkg) => pkg.featured)
              .slice(0, 3)
              .map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
          </div>
          <div className="mt-10">
            <Link
              href="/packages"
              className="inline-flex rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-gold-soft)] hover:bg-[var(--color-surface)]"
            >
              {localize(locale, "Explore all packages", "सभी पैकेज देखें")}
            </Link>
          </div>
          <div className="mt-12 overflow-hidden rounded-[2.3rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(242,230,212,0.92))] shadow-[0_26px_72px_rgba(46,31,18,0.1)]">
            <div className="grid gap-8 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Signature Journey
                </p>
                <h3 className="mt-4 max-w-[14ch] font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
                  {signaturePackage.title}
                </h3>
                <p className="mt-5 max-w-[38rem] text-base leading-8 text-[var(--color-muted)]">
                  {signaturePackage.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[var(--color-line)] bg-white/75 px-4 py-2 text-sm text-[var(--color-muted)]">
                    {signaturePackage.duration}
                  </span>
                  <span className="rounded-full border border-[var(--color-line)] bg-white/75 px-4 py-2 text-sm text-[var(--color-muted)]">
                    {signaturePackage.priceLabel}
                  </span>
                  {signaturePackage.badges.slice(0, 2).map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[rgba(161,79,44,0.12)] bg-[rgba(161,79,44,0.06)] px-4 py-2 text-sm text-[var(--color-accent)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/packages/${signaturePackage.slug}`}
                    className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
                  >
                    View Signature Package
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-surface)]"
                  >
                    Ask for Custom Route
                  </Link>
                </div>
              </div>
              <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/78 p-6 shadow-[0_14px_36px_rgba(46,31,18,0.06)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Why this converts best
                </p>
                <div className="mt-5 grid gap-4">
                  {[
                    "Combines Mahakal darshan with Omkareshwar and Nalkheda spiritual depth.",
                    "Works well for outstation families who want a complete yet calm yatra flow.",
                    "Strong fit for hotel support, elder-friendly pacing, and private cab comfort.",
                  ].map((point) => (
                    <div key={point} className="rounded-[1.3rem] bg-[var(--color-surface)] px-4 py-4 text-sm leading-7 text-[var(--color-muted)]">
                      {point}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {signaturePackage.destinations.map((destination) => (
                    <span
                      key={destination}
                      className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]"
                    >
                      {destination}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10">
          <div className="section-shell mx-auto max-w-7xl rounded-[2.4rem] px-6 py-18 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Puja Services"
                title="Ritual support and spiritual services, not just transport."
                description="A stronger spiritual-travel platform should support both yatra packages and remedy or devotion-led puja enquiries."
              />
              <Link href="/puja-services" className="text-sm font-semibold text-[var(--color-accent)]">
                {localize(locale, "View all puja services", "सभी पूजा सेवाएं देखें")}
              </Link>
            </div>
            <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
              {pujaServices.slice(0, 3).map((service) => (
                <article
                  key={service.slug}
                  className="rounded-[1.9rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {service.accent}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]">
                      {service.duration}
                    </span>
                    <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]">
                      {service.priceLabel}
                    </span>
                  </div>
                  <Link
                    href={`/puja-services/${service.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)]"
                  >
                    {localize(locale, "View details", "विवरण देखें")}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10">
          <div className="section-shell mx-auto max-w-7xl rounded-[2.4rem] px-6 py-20 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Why Adiyogi"
              title="Built as a premium spiritual travel brand, not a generic local taxi website."
              description="The tone, service mix, and journey structure are designed to signal trust, comfort, and devotional care for pan-India travelers."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {whyChooseFeatures.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="Destinations Covered"
            title="Pilgrimage routes, heritage extensions, and gateway support across Madhya Pradesh."
            description="The destination system is grouped to make future temple guides, blog content, and multilingual layers easier to expand."
          />
          <div className="mt-12 grid gap-10">
            {destinationGroups.map((group) => (
              <div key={group} className="section-shell rounded-[2.2rem] p-6 sm:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      {group}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                      {group}
                    </h3>
                  </div>
                  <Link href="/destinations" className="text-sm font-semibold text-[var(--color-accent)]">
                    {localize(locale, "View all destinations", "सभी स्थल देखें")}
                  </Link>
                </div>
                <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
                  {destinations
                    .filter((destination) => destination.category === group)
                    .map((destination) => (
                      <DestinationCard key={destination.slug} destination={destination} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,rgba(241,230,216,0.74),rgba(247,242,234,0.3))]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <SectionHeading
              eyebrow="Premium Service Features"
              title="Thoughtful add-ons and travel details that make the experience feel dependable."
              description="These are the practical comforts that help the brand feel family-friendly, clean, and more premium than a typical local operator site."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceFeatures.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,rgba(255,248,240,0.9),rgba(238,224,202,0.72))]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <SectionHeading
              eyebrow="Booking Steps"
              title="A simple inquiry flow designed for reassurance and quick action."
              description="The flow is intentionally simple and practical: explore, inquire, confirm details, and finalize the journey through direct support."
            />
            <div className="mt-12">
              <BookingSteps steps={bookingSteps} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Why Devotees Trust Us"
                title="A trust-first brand story built around private comfort and local support."
                description="This section strengthens authority for families, senior citizens, and outstation travelers who need reassurance before inquiry."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {companyValues.concat(serviceHighlights).slice(0, 4).map((item) => (
                <article
                  key={item}
                  className="rounded-[1.7rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10">
          <div className="section-shell mx-auto max-w-7xl rounded-[2.4rem] px-6 py-18 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Special Services"
                title="Separate support funnels beyond standard package booking."
                description="These pages help visitors enquire faster when they already know they need cab service, hotel support, or VIP darshan planning."
              />
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                [
                  "Cab Services",
                  "Dedicated private cab options for airport pickup, temple circuits, family travel, and intercity movement.",
                  "/cab-services",
                ],
                [
                  "Hotel & Stay",
                  "Stay support for pilgrims who want standard, deluxe, or premium accommodation guidance with their route.",
                  "/hotel-stays",
                ],
                [
                  "VIP Darshan",
                  "Priority-oriented darshan assistance planning, route timing support, and better movement around temple schedules.",
                  "/vip-darshan-assistance",
                ],
              ].map(([title, body, href]) => (
                <article
                  key={title}
                  className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Service Funnel
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)]"
                  >
                    Explore service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Festival Pages"
              title="Festival-led routes that can pull higher-intent spiritual traffic."
              description="These seasonal pages make the brand more discoverable around sacred dates like Mahashivratri, Sawan, Navratri, and timing-sensitive Mahakal visits."
            />
            <Link href="/festival-packages" className="text-sm font-semibold text-[var(--color-accent)]">
              Explore festival routes
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {festivalPackages.slice(0, 4).map((item) => (
              <article
                key={item.slug}
                className="rounded-[1.9rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {item.festival}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]">
                    {item.duration}
                  </span>
                </div>
                <Link
                  href={`/festival-packages/${item.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)]"
                >
                  View festival details
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10">
          <div className="section-shell mx-auto max-w-7xl rounded-[2.4rem] px-6 py-20 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trust built through comfort, clarity, and devotional care."
              description="Designed to support future Google review embeds, video stories, and high-trust pilgrim feedback."
              align="center"
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                ["4.9/5", "Average pilgrimage satisfaction score"],
                ["250+", "Families and devotees served across key routes"],
                ["24/7", "WhatsApp-led support for planning and changes"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/88 px-5 py-5 text-center shadow-[var(--shadow-card)]"
                >
                  <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
                    {value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {reviewStories.slice(0, 2).map((review) => (
                <article
                  key={`${review.name}-${review.route}`}
                  className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 text-left shadow-[var(--shadow-card)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[rgba(161,79,44,0.12)] bg-[rgba(161,79,44,0.06)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {review.travelerType}
                    </span>
                    <span className="text-sm text-[var(--color-muted)]">{review.city}</span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                    {review.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {review.route}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{review.body}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{review.name}</p>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">
                      {"★".repeat(review.rating)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/reviews" className="text-sm font-semibold text-[var(--color-accent)]">
                View full review wall
              </Link>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                ["Route Confidence", "Temple-first planning with pickup and drop clarity before the journey begins."],
                ["Stay Coordination", "Practical hotel guidance for families, outstation devotees, and multi-day routes."],
                ["VIP Support", "Planning support for darshan-sensitive schedules and faster temple-day movement."],
              ].map(([title, body]) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/88 px-5 py-5 text-left shadow-[var(--shadow-card)]"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Gallery Preview"
              title="A premium visual space for darshan moments, cab comfort, and heritage travel."
              description="The gallery is ready to receive more real travel photos, reels, and customer-led proof over time."
            />
            <Link href="/gallery" className="text-sm font-semibold text-[var(--color-accent)]">
              {localize(locale, "View full gallery", "पूरी गैलरी देखें")}
            </Link>
          </div>
          <div className="mt-12">
            <GalleryGrid items={galleryItems.slice(0, 6)} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Guides & Planning"
              title="Practical guides for discovery, local SEO, and route confidence."
              description="These guides now work as usable article templates with route logic, destination context, and inquiry-led next steps."
            />
            <Link href="/guides" className="text-sm font-semibold text-[var(--color-accent)]">
              {localize(locale, "View all guides", "सभी गाइड देखें")}
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {guideArticles.slice(0, 3).map((article) => (
              <GuideCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Clear answers before your journey begins."
              description="The website is designed to reduce hesitation for families, first-time pilgrims, and outstation travelers looking for a trusted route partner."
            />
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        <CTASection
          eyebrow="Final CTA"
          title="Plan your spiritual journey with calm coordination."
          description="Share your travel date, city of arrival, and desired route. We will guide you to the right package or prepare a custom yatra plan on WhatsApp."
        />
      </main>

      <Footer locale={locale} />
      <WhatsAppFloatingButton />
      <MobileActionBar locale={locale} />
    </div>
  );
}
