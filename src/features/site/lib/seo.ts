import type { Metadata } from "next";

import { brandConfig } from "@/features/site/config/brand";
import { coreKeywords } from "@/features/site/config/seo/keywords";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const absoluteUrl = new URL(path, brandConfig.siteUrl).toString();
  const combinedKeywords = [...coreKeywords, ...keywords];

  return {
    title,
    description,
    keywords: combinedKeywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: brandConfig.name,
      locale: brandConfig.locale,
      type: "website",
      images: [
        {
          url: brandConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${brandConfig.name} spiritual travel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brandConfig.defaultOgImage],
    },
  };
}

