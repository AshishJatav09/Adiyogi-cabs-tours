import type { MetadataRoute } from "next";

import { brandConfig } from "@/features/site/config/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${brandConfig.siteUrl}/sitemap.xml`,
  };
}
