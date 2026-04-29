import type { Locale } from "@/shared/i18n";

import { HeroSlider } from "./hero-slider";

type HeroSectionProps = {
  accent: string;
  title: string;
  description: string;
  locale: Locale;
};

export function HeroSection({ accent, title, description, locale }: HeroSectionProps) {
  return <HeroSlider accent={accent} title={title} description={description} locale={locale} />;
}
