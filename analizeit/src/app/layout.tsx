import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/content/site";

import "./globals.css";
import "./editorial.css";
import "./home-v2.css";
import "./digital-home.css";
import "./digital-subpages.css";
import "./open-surfaces.css";
import "./site-system.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ANALIZE — rozwiązania procesowe w WEBCON BPS",
    template: "%s | ANALIZE",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "ANALIZE — rozwiązania procesowe w WEBCON BPS",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "ANALIZE — rozwiązania procesowe w WEBCON BPS",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#151917",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="pl">
      <body className={`${sourceSans.variable} ${manrope.variable} ${plexMono.variable}`}>
        <a className="skip-link" href="#main-content">Przejdź do treści</a>
        <StructuredData />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
