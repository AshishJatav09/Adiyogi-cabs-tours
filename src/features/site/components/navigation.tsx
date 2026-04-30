import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

const navItems = (locale: Locale) => [
  { label: localize(locale, "Home", "Home"), href: "/" },
  { label: localize(locale, "Packages", "Packages"), href: "/packages" },
  { label: localize(locale, "Puja", "Puja"), href: "/puja-services" },
  { label: localize(locale, "Destinations", "Destinations"), href: "/destinations" },
  { label: localize(locale, "Guides", "Guides"), href: "/guides" },
  { label: localize(locale, "Gallery", "Gallery"), href: "/gallery" },
  { label: localize(locale, "About", "About"), href: "/about" },
  { label: localize(locale, "Contact", "Contact"), href: "/contact" },
];

type NavigationProps = {
  locale: Locale;
};

export function Navigation({ locale }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(124,88,54,0.16)] bg-[rgba(255,249,239,0.88)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(216,165,92,0.36)] bg-[linear-gradient(145deg,rgba(255,249,239,0.96),rgba(241,224,198,0.94))] text-sm font-semibold tracking-[0.16em] text-[var(--color-accent)] shadow-[0_14px_30px_rgba(75,47,26,0.14)]">
              AT
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-[var(--color-ink)] sm:text-lg">
                Adiyogi Cabs & Tours
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] sm:block">
                {localize(locale, "Spiritual Travel, Elevated", "Spiritual Travel, Elevated")}
              </p>
            </div>
          </Link>

          <nav className="mx-2 hidden min-w-0 flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-[rgba(124,88,54,0.16)] bg-white/84 p-1 shadow-[0_14px_30px_rgba(65,39,22,0.08)]">
              {navItems(locale).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={false}
                  className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto hidden items-center gap-2 xl:flex">
            <a
              href={contactConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(124,88,54,0.2)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
            >
              <Phone className="h-4 w-4" />
              {localize(locale, "Call Now", "Call Now")}
            </a>
            <a
              href={getGeneralBookingLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(181,106,47,0.28)] transition hover:bg-[var(--color-accent-strong)]"
            >
              {localize(locale, "Book on WhatsApp", "Book on WhatsApp")}
            </a>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <a
              href={contactConfig.phoneHref}
              className="hidden h-11 items-center justify-center rounded-full border border-[rgba(124,88,54,0.18)] bg-white px-4 text-sm font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(75,47,26,0.08)] md:inline-flex"
            >
              <Phone className="mr-2 h-4 w-4" />
              {localize(locale, "Call", "Call")}
            </a>
            <details className="relative">
              <summary
                aria-label="Open menu"
                className="inline-flex h-11 w-11 list-none items-center justify-center rounded-full border border-[rgba(124,88,54,0.18)] bg-white text-[var(--color-ink)] shadow-[0_10px_24px_rgba(75,47,26,0.08)] transition hover:border-[var(--color-gold-soft)] [&::-webkit-details-marker]:hidden"
              >
                <Menu className="h-5 w-5" />
              </summary>
              <div className="absolute right-0 top-[calc(100%+0.65rem)] z-50 w-[min(20rem,calc(100vw-2rem))] rounded-[1.3rem] border border-[rgba(124,88,54,0.14)] bg-[rgba(255,249,239,0.98)] p-3 shadow-[0_24px_48px_rgba(65,39,22,0.08)]">
                <nav className="grid gap-2">
                  {navItems(locale).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      prefetch={false}
                      className="rounded-[1.2rem] border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[rgba(181,106,47,0.08)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-3 grid gap-3 border-t border-[rgba(124,88,54,0.14)] pt-3 sm:hidden">
                  <a
                    href={contactConfig.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
                  >
                    {localize(locale, "Call Now", "Call Now")}
                  </a>
                  <a
                    href={getGeneralBookingLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white"
                  >
                    {localize(locale, "Book on WhatsApp", "Book on WhatsApp")}
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
