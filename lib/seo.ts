import type { Metadata } from "next";

import { company, type Service } from "@/lib/site-content";

export const siteUrl = "https://bsltrading.sk";
export const siteName = "BSL TRADING";
export const defaultOgImage = "/images/hero.jpg";

const defaultDescription =
  "BSL TRADING s.r.o. prináša rekonštrukčné práce, výkopové práce, zatepľovanie budov, stavebné práce, buracie práce, referencie a kontakty firmy v prehľadnom novom webe.";

const defaultKeywords = [
  "BSL TRADING",
  "stavebná spoločnosť Humenné",
  "rekonštrukčné práce",
  "výkopové práce",
  "zatepľovanie budov",
  "stavebné práce",
  "buracie práce",
  "referencie stavieb",
  "Byty Strážske",
];

type MetadataType = "website" | "article";

type BuildPageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: MetadataType;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = defaultOgImage,
  keywords = [],
  type = "website",
}: BuildPageMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | ${company.tagline}`;
  const canonical = absoluteUrl(path);
  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description,
    applicationName: siteName,
    alternates: {
      canonical,
    },
    keywords: mergedKeywords,
    authors: [{ name: company.name }],
    creator: company.name,
    publisher: company.name,
    category: "construction",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: "sk_SK",
      url: canonical,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    alternateName: siteName,
    url: absoluteUrl("/"),
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address[0],
      postalCode: "066 01",
      addressLocality: "Humenné",
      addressCountry: "SK",
    },
    sameAs: [company.facebook],
    logo: absoluteUrl("/logo.png"),
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteName,
    url: absoluteUrl("/"),
    inLanguage: "sk-SK",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function createContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/kontakt#contact-page"),
    url: absoluteUrl("/kontakt"),
    name: `Kontakt | ${siteName}`,
    mainEntity: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function createServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.category,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: {
      "@type": "Country",
      name: "Slovensko",
    },
    url: absoluteUrl(service.href),
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
