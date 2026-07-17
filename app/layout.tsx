import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NL Prestige | Location de véhicules de prestige en Suisse",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "location voiture de prestige",
    "location voiture de luxe Suisse",
    "location longue durée Suisse",
    "NL Prestige",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "NL Prestige | Location de véhicules de prestige en Suisse",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero/hero-prestige.svg",
        width: 1200,
        height: 630,
        alt: "NL Prestige — location de véhicules de prestige en Suisse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NL Prestige | Location de véhicules de prestige en Suisse",
    description: siteConfig.description,
    images: ["/images/hero/hero-prestige.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: siteConfig.name,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    addressLocality: siteConfig.address.city,
    addressCountry: "CH",
  },
  sameAs: [siteConfig.social.instagram],
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-black text-brand-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
