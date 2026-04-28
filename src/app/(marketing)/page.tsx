import type { Metadata } from "next";

import { HomePage } from "@/features/site/components/home-page";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

export const metadata: Metadata = createMetadata({
  title: "Adiyogi Cabs and Tours",
  description:
    "Best taxi service and tours. Book reliable cabs and tour packages with Adiyogi Cabs and Tours.",
  path: "/",
});

export default async function Page() {
  const locale = await getCurrentLocale();

  return <HomePage locale={locale} />;
}

