import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailPage } from "@/features/site/components/detail-page";
import { destinations, getDestinationBySlug } from "@/features/site/content";
import { createMetadata } from "@/features/site/lib/seo";
import { getCurrentLocale } from "@/shared/i18n/server";

type DestinationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return createMetadata({
      title: "Destination Not Found",
      description: "The requested destination could not be found.",
      path: `/destinations/${slug}`,
    });
  }

  return createMetadata({
    title: destination.name,
    description: destination.overview,
    path: `/destinations/${destination.slug}`,
    keywords: [destination.name, destination.category],
  });
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const locale = await getCurrentLocale();
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return <DetailPage type="destination" item={destination} locale={locale} />;
}
