export type Locale = "en" | "hi";

export const localeCookieName = "adiyogi_locale";

export function normalizeLocale(value?: string | null): Locale {
  return value === "hi" ? "hi" : "en";
}

export function localize(locale: Locale, en: string, hi: string) {
  return locale === "hi" ? hi : en;
}
