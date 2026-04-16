import type { Metadata } from "next";

import { ListingPage } from "@/features/site/components/listing-page";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Destinations",
  description:
    "Discover Ujjain, Omkareshwar, Nalkheda, Maheshwar, Mandu, and Indore with local spiritual and heritage travel context.",
  path: "/destinations",
});

export default async function DestinationsPage() {
  const locale = await getCurrentLocale();

  return <ListingPage type="destinations" locale={locale} />;
}

