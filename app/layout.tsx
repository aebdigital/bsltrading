import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

import { CookieConsentProvider } from "@/components/cookie-consent";
import { FadeInUpScope } from "@/components/fade-in-up-scope";
import { StructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildPageMetadata, createOrganizationJsonLd, createWebsiteJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
});

export const metadata: Metadata = buildPageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${inter.variable} ${figtree.variable} bg-[#f5f5f2] font-sans text-navy antialiased`}>
        <CookieConsentProvider>
          <StructuredData data={[createOrganizationJsonLd(), createWebsiteJsonLd()]} id="site-structured-data" />
          <div className="min-h-screen">
            <SiteHeader />
            <FadeInUpScope>{children}</FadeInUpScope>
            <SiteFooter />
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
