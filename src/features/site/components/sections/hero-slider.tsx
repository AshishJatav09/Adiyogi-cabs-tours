"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { contactConfig } from "@/features/site/config/contact";
import { getGeneralBookingLink } from "@/features/site/lib/whatsapp";
import type { Locale } from "@/shared/i18n";
import { localize } from "@/shared/i18n";

type HeroSliderProps = {
  accent: string;
  title: string;
  description: string;
  locale: Locale;
};

type HeroSlide = {
  id: string;
  image: string;
  objectPosition: string;
  label: string;
};

const AUTO_ROTATE_MS = 6500;

export function HeroSlider({ accent, title, description, locale }: HeroSliderProps) {
  const slides = useMemo<HeroSlide[]>(
    () => [
      {
        id: "mahakal",
        image: "/images/destinations/ujjain-mahakal.jpg",
        objectPosition: "center 38%",
        label: "Ujjain Mahakal",
      },
      {
        id: "omkareshwar",
        image: "/images/destinations/omkareshwar.jpg",
        objectPosition: "center 44%",
        label: "Omkareshwar",
      },
      {
        id: "mandu",
        image: "/images/destinations/mandu.jpg",
        objectPosition: "center 42%",
        label: "Mandu Heritage",
      },
    ],
    [],
  );

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((index) => (index + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slides.length]);

  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden text-white sm:min-h-[86vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            activeSlideIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={activeSlideIndex !== index}
        >
          <Image
            src={slide.image}
            alt={`${title} slide ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(18,11,8,0.88)_0%,rgba(18,11,8,0.58)_42%,rgba(18,11,8,0.28)_72%,rgba(18,11,8,0.76)_100%)]" />
      <div className="absolute inset-0 soft-grid opacity-[0.14]" />
      <div className="ornament-ring left-[5%] top-16 hidden h-36 w-36 md:block" />
      <div className="ornament-ring right-[8%] top-24 hidden h-52 w-52 md:block" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end px-4 py-8 sm:min-h-[86vh] sm:px-6 sm:py-11 lg:px-10 lg:py-14">
        <div className="w-full rounded-[2.1rem] border border-white/24 bg-[rgba(11,7,5,0.42)] p-6 shadow-[0_32px_82px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="max-w-[50rem]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-sand)] sm:tracking-[0.3em]">
              <Sparkles className="h-4 w-4" />
              {accent}
            </p>
            <h1 className="mt-6 max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-[5.2rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-[42rem] text-sm leading-7 text-white/84 sm:text-base sm:leading-8">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getGeneralBookingLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(181,106,47,0.38)] transition hover:bg-[var(--color-accent-strong)] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                {localize(locale, "Book on WhatsApp", "Book on WhatsApp")}
              </a>
              <Link
                href="/packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/34 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
              >
                {localize(locale, "Explore Packages", "Explore Packages")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={contactConfig.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-sand)]/62 bg-transparent px-6 py-3.5 text-sm font-semibold text-[var(--color-sand)] transition hover:bg-white/12 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {localize(locale, "Call Now", "Call Now")}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlideIndex(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition ${
                    index === activeSlideIndex
                      ? "border-[var(--color-sand)] bg-[var(--color-sand)]/20 text-[var(--color-sand)]"
                      : "border-white/28 bg-white/10 text-white/80 hover:bg-white/18"
                  }`}
                  aria-label={localize(locale, "Go to slide", "Go to slide") + ` ${index + 1}`}
                  aria-current={index === activeSlideIndex}
                >
                  {slide.label}
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-[var(--color-sand)] transition-[width] duration-500"
                  style={{ width: `${((activeSlideIndex + 1) / slides.length) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlideIndex((index) => (index - 1 + slides.length) % slides.length)
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/18"
                  aria-label={localize(locale, "Previous slide", "Previous slide")}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlideIndex((index) => (index + 1) % slides.length)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/18"
                  aria-label={localize(locale, "Next slide", "Next slide")}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

