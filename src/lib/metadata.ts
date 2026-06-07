import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [
      "BGMI Kerala",
      "Kerala BGMI Community",
      "BGMI Tournaments Kerala",
      "BGMI Players Kerala",
      "Kerala Esports Community",
      "BGMI Squads Kerala",
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    title: "BGMI-KL — Kerala's BGMI Community",
    description: siteConfig.description,
  }),
};
