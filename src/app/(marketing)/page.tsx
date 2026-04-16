import type { Metadata } from "next";

import { HomePage } from "@/features/site/components/home-page";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Premium Spiritual Travel and Darshan Packages",
  description:
    "Explore Ujjain darshan packages, Mahakal darshan cab service, Omkareshwar tour packages, and premium WhatsApp-first pilgrimage travel across Madhya Pradesh.",
  path: "/",
});

export default async function Page() {
  const locale = await getCurrentLocale();

  return <HomePage locale={locale} />;
}

