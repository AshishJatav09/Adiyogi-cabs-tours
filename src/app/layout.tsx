import type { Metadata } from "next";

import { brandConfig } from "@/features/site/config/brand";
import { coreKeywords } from "@/features/site/config/seo/keywords";
import { getCurrentLocale } from "@/shared/i18n/server";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brandConfig.siteUrl),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  title: {
    default: "Adiyogi Cabs and Tours",
    template: `%s | Adiyogi Cabs and Tours`,
  },
  description:
    "Best taxi service and tours. Book reliable cabs and tour packages with Adiyogi Cabs and Tours.",
  keywords: coreKeywords,
  alternates: {
    canonical: brandConfig.siteUrl,
  },
  openGraph: {
    title: "Adiyogi Cabs and Tours",
    description:
      "Best taxi service and tours. Book reliable cabs and tour packages with Adiyogi Cabs and Tours.",
    url: brandConfig.siteUrl,
    siteName: "Adiyogi Cabs and Tours",
    locale: brandConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adiyogi Cabs and Tours",
    description:
      "Best taxi service and tours. Book reliable cabs and tour packages with Adiyogi Cabs and Tours.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale === "hi" ? "hi" : "en"}
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}

