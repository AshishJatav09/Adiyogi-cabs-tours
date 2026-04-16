import type { Metadata } from "next";

import { ListingPage } from "@/features/site/components/listing-page";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Packages",
  description:
    "Explore Ujjain darshan packages, Omkareshwar tour packages, Nalkheda darshan packages, Maheshwar tours, and custom spiritual travel packages.",
  path: "/packages",
});

export default async function PackagesPage() {
  const locale = await getCurrentLocale();

  return <ListingPage type="packages" locale={locale} />;
}

