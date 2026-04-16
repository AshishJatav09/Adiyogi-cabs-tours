"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

const navItems = (locale: Locale) => [
  { label: localize(locale, "Home", "होम"), href: "/" },
  { label: localize(locale, "Packages", "पैकेज"), href: "/packages" },
  { label: localize(locale, "Puja", "पूजा"), href: "/puja-services" },
  { label: localize(locale, "Destinations", "स्थल"), href: "/destinations" },
  { label: localize(locale, "Guides", "गाइड"), href: "/guides" },
  { label: localize(locale, "Gallery", "गैलरी"), href: "/gallery" },
  { label: localize(locale, "About", "हमारे बारे में"), href: "/about" },
  { label: localize(locale, "Contact", "संपर्क"), href: "/contact" },
];

type NavigationProps = {
  locale: Locale;
};

export function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(255,250,244,0.94)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-10">
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold-soft)] bg-[radial-gradient(circle,rgba(213,171,103,0.22),rgba(255,255,255,0.95))] font-[family-name:var(--font-display)] text-sm text-[var(--color-accent)] shadow-[0_10px_24px_rgba(61,38,18,0.12)]">
            Om
          </div>
          <div className="min-w-0">
            <p className="truncate whitespace-nowrap font-[family-name:var(--font-display)] text-lg text-[var(--color-ink)] lg:text-xl">
              Adiyogi Cabs & Tour
            </p>
            <p className="hidden text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] sm:block">
              {localize(locale, "Spiritual Travel, Refined", "Adhyatmik Yatra, Salike Se")}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/88 p-1 text-sm text-[var(--color-muted)] lg:flex">
          {navItems(locale).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                className={`rounded-full px-3 py-2 transition ${
                  isActive(item.href)
                  ? "border border-[rgba(161,79,44,0.16)] bg-[rgba(213,171,103,0.16)] text-[var(--color-accent-strong)] shadow-[0_10px_24px_rgba(161,79,44,0.08)]"
                  : "hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={contactConfig.phoneHref}
            className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-gold-soft)] hover:text-[var(--color-ink)]"
          >
            {localize(locale, "Call Now", "Abhi Call Karein")}
          </a>
          <a
            href={getGeneralBookingLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(161,79,44,0.18)] transition hover:bg-[var(--color-accent-strong)]"
          >
            {localize(locale, "Book on WhatsApp", "WhatsApp Par Book Karein")}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={contactConfig.phoneHref}
            className="hidden h-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-4 text-sm font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(61,38,18,0.08)] sm:inline-flex"
          >
            <Phone className="mr-2 h-4 w-4" />
            {localize(locale, "Call", "Call")}
          </a>
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] shadow-[0_10px_24px_rgba(61,38,18,0.08)] transition hover:border-[var(--color-gold-soft)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-[var(--color-line)] bg-[rgba(255,250,244,0.98)] px-5 py-4 shadow-[0_24px_48px_rgba(45,31,18,0.08)] lg:hidden">
          <nav className="grid gap-2">
            {navItems(locale).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-[1.2rem] px-4 py-3 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "border border-[rgba(161,79,44,0.16)] bg-[rgba(213,171,103,0.16)] text-[var(--color-accent-strong)]"
                    : "border border-[var(--color-line)] bg-white text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3 sm:hidden">
            <a
              href={contactConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
            >
              {localize(locale, "Call Now", "Abhi Call Karein")}
            </a>
            <a
              href={getGeneralBookingLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white"
            >
              {localize(locale, "Book on WhatsApp", "WhatsApp Par Book Karein")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
