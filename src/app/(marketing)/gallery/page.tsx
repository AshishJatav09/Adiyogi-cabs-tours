import Image from "next/image";
import type { Metadata } from "next";

import { GalleryBrowser } from "@/features/site/components/gallery-browser";
import { Footer } from "@/features/site/components/footer";
import { MobileActionBar } from "@/features/site/components/mobile-action-bar";
import { Navigation } from "@/features/site/components/navigation";
import { SectionHeading } from "@/features/site/components/section-heading";
import { WhatsAppFloatingButton } from "@/features/site/components/sections";
import { galleryItems, spiritualAccents } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Browse darshan moments, premium cabs, heritage routes, hotel placeholders, and customer journey visuals from Adiyogi Tours.",
  path: "/gallery",
});

export default async function GalleryPage() {
  const locale = await getCurrentLocale();
  const fleetItems = [
    {
      name: "Toyota Innova",
      image: "/images/gallery/innova-real.jpg",
      details: "Best for family darshan, airport transfers, and premium private travel.",
    },
    {
      name: "Force Urbania",
      image: "/images/gallery/urbania-real.jpg",
      details: "Premium high-roof option for larger groups wanting more comfort and space.",
    },
    {
      name: "Tempo Traveller",
      image: "/images/gallery/tempo-traveller-real.jpg",
      details: "Ideal for yatra teams, family groups, and long-route temple journeys.",
    },
    {
      name: "Maruti Ertiga",
      image: "/images/gallery/ertiga-lxi.jpg",
      details: "Comfortable option for small families wanting a practical cab package.",
    },
    {
      name: "Swift Dzire",
      image: "/images/gallery/swift-dzire-real.jpg",
      details: "Good for same-day transfers, compact routes, and budget-friendly travel.",
    },
    {
      name: "Hyundai Aura",
      image: "/images/gallery/aura-front.png",
      details: "A neat sedan choice for city pickup-drop and short darshan routes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <Navigation locale={locale} />
      <main>
        <section className="bg-[linear-gradient(180deg,rgba(239,249,253,0.96),rgba(209,233,244,0.74))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {spiritualAccents[2]}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Gallery for darshan mood, premium cabs, and heritage travel moments.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Phase 1 uses premium mock visuals as placeholders for real trip
              photography, reels, and trust-building media content.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Visual Experience"
            title="A future-ready gallery space for travel proof, emotion, and trust."
            description="The layout is intentionally modular so it can later support filtered albums, videos, and customer-generated travel content."
          />
          <div className="mt-12">
            <GalleryBrowser items={galleryItems} />
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Vehicle options for every route, family size, and comfort need."
            description="These are the core cab categories available for darshan, heritage travel, hotel transfer, and multi-day spiritual circuits."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fleetItems.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white shadow-[0_18px_48px_rgba(32,22,14,0.12)]"
              >
                <div className="relative h-64">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,9,0.02),rgba(13,11,9,0.18))]" />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-ink)]">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {item.details}
                  </p>
                </div>
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



