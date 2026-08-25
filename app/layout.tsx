import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ShowroomWhatsAppButton } from "@/components/showroom/ShowroomWhatsAppButton";
import { ShowroomHeader } from "@/components/showroom/ShowroomHeader";
import { ShowroomFooter } from "@/components/showroom/ShowroomFooter";
import { definedValues } from "@/lib/placeholders";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Les deux serifs sont déclarés ici alors qu'un build n'en utilise qu'un : le
// gabarit actif est choisi à la volée (--font-display ci-dessous). next/font
// exige des options littérales, impossible donc de ne précharger que le bon —
// `preload: false` évite qu'un build télécharge la police de l'autre gabarit.
// Elles restent chargées dès l'analyse du CSS, avec repli métrique ajusté.

/** Serif du gabarit "classic" */
const fraunces = Fraunces({
  variable: "--font-display-classic",
  subsets: ["latin"],
  axes: ["opsz"],
  preload: false,
});

/** Serif du gabarit "showroom" : plus contrasté, pensé pour les grands titres */
const playfair = Playfair_Display({
  variable: "--font-display-showroom",
  subsets: ["latin"],
  style: ["normal", "italic"],
  preload: false,
});

const isShowroom = siteConfig.template === "showroom";

const pageTitle = `${siteConfig.name} | ${
  siteConfig.seo.pageTitleSuffix ?? "Location de véhicules de prestige en Suisse"
}`;

/**
 * Jetons de palette par thème. "dark" reprend les valeurs historiques du site
 * (fond sombre premium, texte ivoire). "light" les inverse pour un fond clair
 * et un texte noir, en gardant la même hiérarchie sémantique de surfaces.
 * "showroom" pousse le contraste plus loin — noir profond et gris chauds — pour
 * le gabarit éditorial de components/showroom/.
 */
const themeTokens = {
  dark: {
    black: "#0a0a0b",
    charcoal: "#16171a",
    anthracite: "#202226",
    line: "#33353a",
    ivory: "#f5f1e8",
    silver: "#9ca0a8",
  },
  light: {
    black: "#faf9f6",
    charcoal: "#f0eee7",
    anthracite: "#e4e1d7",
    line: "#d8d4c8",
    ivory: "#161513",
    silver: "#5c584f",
  },
  showroom: {
    black: "#050506",
    charcoal: "#0c0c0e",
    anthracite: "#131316",
    line: "#2a2a2f",
    ivory: "#f2ece1",
    silver: "#8e8a83",
  },
} as const;

const activeTheme = themeTokens[siteConfig.theme ?? "dark"];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.hero,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: [siteConfig.images.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Les coordonnées encore à l'état d'espace réservé (ex. "[TÉLÉPHONE]") sont
// omises du JSON-LD plutôt que publiées telles quelles (voir lib/placeholders.ts).
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: siteConfig.name,
  description: siteConfig.description,
  ...(definedValues(siteConfig.contact.email).length > 0
    ? { email: siteConfig.contact.email }
    : {}),
  ...(definedValues(siteConfig.contact.phone).length > 0
    ? { telephone: siteConfig.contact.phone }
    : {}),
  address: {
    "@type": "PostalAddress",
    ...(definedValues(siteConfig.address.street).length > 0
      ? { streetAddress: siteConfig.address.street }
      : {}),
    ...(definedValues(siteConfig.address.postalCode).length > 0
      ? { postalCode: siteConfig.address.postalCode }
      : {}),
    addressLocality: siteConfig.address.city,
    addressCountry: "CH",
  },
  sameAs: definedValues(siteConfig.social.instagram),
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
      data-template={siteConfig.template ?? "classic"}
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${playfair.variable} h-full antialiased`}
      style={
        {
          "--color-brand-accent": siteConfig.colors.accent,
          "--color-brand-accent-soft": siteConfig.colors.accentSoft,
          "--font-display": isShowroom
            ? "var(--font-display-showroom)"
            : "var(--font-display-classic)",
          "--background": activeTheme.black,
          "--foreground": activeTheme.ivory,
          "--color-brand-black": activeTheme.black,
          "--color-brand-charcoal": activeTheme.charcoal,
          "--color-brand-anthracite": activeTheme.anthracite,
          "--color-brand-line": activeTheme.line,
          "--color-brand-ivory": activeTheme.ivory,
          "--color-brand-silver": activeTheme.silver,
        } as React.CSSProperties
      }
    >
      <body className="flex min-h-full flex-col bg-brand-black text-brand-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {isShowroom ? <ShowroomHeader /> : <Header />}
        {/* Réserve la hauteur de l'en-tête fixe. Le hero du gabarit showroom
            annule ce décalage (-mt-20) pour passer sous l'en-tête transparent. */}
        <main className="flex-1 pt-20">{children}</main>
        {isShowroom ? <ShowroomFooter /> : <Footer />}
        {isShowroom ? <ShowroomWhatsAppButton /> : <WhatsAppButton />}
      </body>
    </html>
  );
}
