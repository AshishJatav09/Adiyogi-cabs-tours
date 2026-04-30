import Link from "next/link";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="inline-flex rounded-full border border-[rgba(157,74,36,0.12)] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {localize(locale, "Shubha Yatra", "Shubha Yatra")}
          </p>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
            Adiyogi Cabs & Tours
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
            {localize(
              locale,
              "Premium spiritual and heritage travel for families, devotees, and outstation guests across Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu, and Indore.",
              "Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu aur Indore ke liye premium spiritual aur heritage travel.",
            )}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {localize(locale, "Explore", "Explore")}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-[var(--color-muted)]">
            <Link href="/" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Home", "Home")}
            </Link>
            <Link href="/packages" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Tour Packages", "Tour Packages")}
            </Link>
            <Link href="/puja-services" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Puja Services", "Puja Services")}
            </Link>
            <Link href="/destinations" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Destinations", "Destinations")}
            </Link>
            <Link href="/gallery" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Gallery", "Gallery")}
            </Link>
            <Link href="/guides" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Guides", "Guides")}
            </Link>
            <Link href="/reviews" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Reviews", "Reviews")}
            </Link>
            <Link href="/festival-packages" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Festival Packages", "Festival Packages")}
            </Link>
            <Link href="/about" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "About Us", "About Us")}
            </Link>
            <Link href="/contact" prefetch className="transition hover:text-[var(--color-ink)]">
              {localize(locale, "Contact", "Contact")}
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {localize(locale, "Connect", "Connect")}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-[var(--color-muted)]">
            <a href={contactConfig.phoneHref}>{contactConfig.phoneDisplay}</a>
            <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            <a href={getGeneralBookingLink()} target="_blank" rel="noreferrer">
              {localize(locale, "WhatsApp Booking", "WhatsApp Booking")}
            </a>
            <p>{contactConfig.address}</p>
            <p>{localize(locale, "Custom yatra planning available daily", "Custom yatra planning available daily")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
