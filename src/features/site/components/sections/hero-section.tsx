import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

type HeroSectionProps = {
  accent: string;
  title: string;
  description: string;
  locale: Locale;
};

export function HeroSection({ accent, title, description, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,249,242,0.96),rgba(241,226,205,0.78))] text-[var(--color-ink)]">
      <div className="absolute inset-0 soft-grid opacity-[0.24]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(231,185,120,0.16),_transparent_30%),radial-gradient(circle_at_left,_rgba(220,105,54,0.08),_transparent_28%)]" />
      <div className="ornament-ring left-[6%] top-14 h-40 w-40" />
      <div className="ornament-ring right-[8%] top-24 h-56 w-56" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(247,240,230,0.96))]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-26">
        <div className="max-w-[42rem]">
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(157,74,36,0.12)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] shadow-[0_12px_32px_rgba(92,58,28,0.08)]">
            <Sparkles className="h-4 w-4" />
            {accent}
          </p>
          <h1 className="mt-8 max-w-[13ch] font-[family-name:var(--font-display)] text-5xl leading-[0.93] tracking-[-0.03em] sm:text-6xl lg:text-[5.15rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-[38rem] text-lg leading-8 text-[var(--color-muted)] sm:text-[1.18rem]">
            {description}
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <a
              href={getGeneralBookingLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(161,79,44,0.18)] transition hover:bg-[var(--color-accent-strong)]"
            >
              <MessageCircle className="h-4 w-4" />
              {localize(locale, "Book on WhatsApp", "WhatsApp Par Book Karein")}
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] shadow-[0_14px_30px_rgba(61,38,18,0.06)] transition hover:bg-[var(--color-surface)]"
            >
              {localize(locale, "Explore Packages", "Packages Dekhein")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contactConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-gold-soft)] bg-transparent px-6 py-3.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[color:rgba(196,154,108,0.12)]"
            >
              <Phone className="h-4 w-4" />
              {localize(locale, "Call Now", "Abhi Call Karein")}
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              [
                localize(locale, "6 Core Routes", "6 Core Routes"),
                localize(locale, "Pilgrimage, heritage, and travel gateway coverage", "Pilgrimage, heritage aur gateway coverage"),
              ],
              [
                localize(locale, "WhatsApp First", "WhatsApp First"),
                localize(locale, "Simple premium inquiry flow without booking friction", "Simple premium inquiry flow without booking friction"),
              ],
              [
                localize(locale, "Family Ready", "Family Ready"),
                localize(locale, "Comfort-focused pacing for elders and family groups", "Comfort-focused pacing for elders and family groups"),
              ],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/78 p-4 shadow-[0_14px_28px_rgba(61,38,18,0.05)] backdrop-blur"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">{label}</p>
                <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 self-end">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "/images/destinations/ujjain.jpg",
                localize(locale, "Mahakal dawn arrivals", "Mahakal dawn arrivals"),
                localize(locale, "Darshan-led movement with graceful pacing and calm coordination.", "Darshan-led movement with graceful pacing and calm coordination."),
              ],
              [
                "/images/destinations/omkareshwar.jpg",
                localize(locale, "Narmada-side stillness", "Narmada-side stillness"),
                localize(locale, "Riverside pauses that make the route feel devotional and restorative.", "Riverside pauses that make the route feel devotional and restorative."),
              ],
            ].map(([src, heading, text]) => (
              <div key={src} className="relative min-h-72 overflow-hidden rounded-[2rem] border border-[var(--color-line)] shadow-[0_24px_56px_rgba(61,38,18,0.14)]">
                <Image src={src} alt={heading} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,21,15,0.02),rgba(31,21,15,0.64))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-lg font-semibold">{heading}</p>
                  <p className="mt-2 text-sm leading-7 text-white/76">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[2.2rem] border border-[var(--color-gold-soft)]/40 bg-[linear-gradient(135deg,rgba(250,243,230,0.98),rgba(233,221,202,0.9))] p-7 text-[var(--color-ink)] shadow-[0_18px_54px_rgba(20,12,6,0.14)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {localize(locale, "Signature circuit", "Signature circuit")}
            </p>
            <h2 className="mt-4 max-w-[16ch] font-[family-name:var(--font-display)] text-3xl leading-tight">
              {localize(
                locale,
                "Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu, and Indore.",
                "Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu and Indore.",
              )}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              {localize(
                locale,
                "A premium spiritual travel identity designed for pilgrimage, heritage, and comfortable multi-city movement.",
                "Pilgrimage, heritage aur comfortable multi-city movement ke liye ek premium spiritual travel identity.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                localize(locale, "Pilgrimage", "Pilgrimage"),
                localize(locale, "Heritage", "Heritage"),
                localize(locale, "Family Travel", "Family Travel"),
                localize(locale, "Custom Yatra", "Custom Yatra"),
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(161,79,44,0.12)] bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
