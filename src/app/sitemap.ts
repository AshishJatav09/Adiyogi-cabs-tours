import type { MetadataRoute } from "next";

import {
  destinations,
  festivalPackages,
  guideArticles,
  packages,
  pujaServices,
} from "@/features/site/content";
import { brandConfig } from "@/features/site/config/brand";

const staticRoutes = [
  "/",
  "/about",
  "/cab-services",
  "/contact",
  "/destinations",
  "/festival-packages",
  "/gallery",
  "/guides",
  "/hotel-stays",
  "/packages",
  "/puja-services",
  "/reviews",
  "/vip-darshan-assistance",
] as const;

const dynamicRoutes = [
  ...destinations.map(({ slug }) => `/destinations/${slug}`),
  ...festivalPackages.map(({ slug }) => `/festival-packages/${slug}`),
  ...guideArticles.map(({ slug }) => `/guides/${slug}`),
  ...packages.map(({ slug }) => `/packages/${slug}`),
  ...pujaServices.map(({ slug }) => `/puja-services/${slug}`),
];

function toSitemapEntry(
  path: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: new URL(path, brandConfig.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...new Set([...staticRoutes, ...dynamicRoutes])];

  return routes.map((path) => toSitemapEntry(path, path === "/" ? 1 : 0.8));
}
