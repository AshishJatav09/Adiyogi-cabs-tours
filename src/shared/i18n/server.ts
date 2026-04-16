import type { Locale } from "@/shared/i18n";

export async function getCurrentLocale(): Promise<Locale> {
  return "en";
}
