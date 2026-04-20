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
    default: brandConfig.name,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
  keywords: coreKeywords,
  openGraph: {
    title: brandConfig.name,
    description: brandConfig.description,
    siteName: brandConfig.name,
    locale: brandConfig.locale,
    type: "website",
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

