import Link from "next/link";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

type FooterProps = {
  locale: Locale;
};

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/puja-services", label: "Puja Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/guides", label: "Guides" },
  { href: "/reviews", label: "Reviews" },
  { href: "/festival-packages", label: "Festival Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(252,242,228,0.95),rgba(234,210,180,0.92))]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
        <div className="grid gap-8 rounded-[2.1rem] border border-[rgba(124,88,54,0.16)] bg-[rgba(255,250,242,0.88)] p-6 shadow-[0_22px_56px_rgba(65,39,22,0.1)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-[rgba(181,106,47,0.18)] bg-[rgba(181,106,47,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {localize(locale, "Spiritual Travel Partner", "Spiritual Travel Partner")}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
              Adiyogi Cabs & Tours
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              {localize(
                locale,
                "Premium spiritual and heritage travel for families, devotees, and outstation guests across Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu, and Indore.",
                "Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu aur Indore ke liye premium spiritual aur heritage travel.",
              )}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Family Friendly", "Private Comfort", "WhatsApp-first Planning"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)]">
              {localize(locale, "Explore", "Explore")}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[var(--color-muted)]">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className="rounded-lg px-2 py-1 transition hover:bg-[rgba(181,106,47,0.08)] hover:text-[var(--color-ink)]"
                >
                  {localize(locale, link.label, link.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)]">
              {localize(locale, "Connect", "Connect")}
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--color-muted)]">
              <a href={contactConfig.phoneHref} className="rounded-xl bg-white/74 px-3 py-2">
                {contactConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="break-all rounded-xl bg-white/74 px-3 py-2"
              >
                {contactConfig.email}
              </a>
              <a
                href={getGeneralBookingLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
              >
                {localize(locale, "WhatsApp Booking", "WhatsApp Booking")}
              </a>
              <p>{contactConfig.address}</p>
              <p>
                {localize(
                  locale,
                  "Custom yatra planning available daily",
                  "Custom yatra planning available daily",
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-[var(--color-muted)]">
          <p>(c) {new Date().getFullYear()} Adiyogi Cabs & Tours</p>
          <p>
            {localize(
              locale,
              "Pilgrimage routes, thoughtfully managed.",
              "Pilgrimage routes, thoughtfully managed.",
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
