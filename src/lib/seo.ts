import { Metadata } from "next";
import { SITE } from "./constants";

interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  noIndex = false,
}: SeoConfig): Metadata {
  const defaultKeywords = [
    "best dentist pragathi nagar",
    "dental hospital hyderabad",
    "dental implants hyderabad",
    "root canal hyderabad",
    "smile designing hyderabad",
    "dentist near me",
    "emergency dentist hyderabad",
    "painless dentistry hyderabad",
    "tarun dental hospital",
    "pragathi nagar dentist",
  ];

  const fullTitle = title.includes("Tarun Dental")
    ? title
    : `${title} | Tarun Dental Hospital`;

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: canonical || SITE.url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || SITE.url,
      siteName: SITE.name,
      images: [
        {
          url: ogImage || "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage || "/og-default.jpg"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };
}
