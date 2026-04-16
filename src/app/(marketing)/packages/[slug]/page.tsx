import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/features/site/components/detail-page";
import { getPackageBySlug, packages } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

type PackageDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: PackageDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return createMetadata({
      title: "Package Not Found",
      description: "The requested package could not be found.",
      path: `/packages/${slug}`,
    });
  }

  return createMetadata({
    title: pkg.title,
    description: pkg.shortDescription,
    path: `/packages/${pkg.slug}`,
    keywords: pkg.destinations,
  });
}

export default async function PackageDetailPage({
  params,
}: PackageDetailPageProps) {
  const locale = await getCurrentLocale();
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <DetailPage type="package" item={pkg} locale={locale} />;
}
