import type { BrandConfig } from "./types";

export const swisselite: BrandConfig = {
  id: "swisselite",
  name: "SwissElite",
  legalName: "SwissElite Location Sàrl", // TODO: remplacer par la raison sociale officielle
  tagline: "Location de véhicules d'exception à Genève et alentours.",
  description:
    "Découvrez une sélection de véhicules de prestige disponibles en location courte et longue durée à Genève et dans ses environs.",
  url: "https://www.swisselite-location.ch", // TODO: remplacer par le nom de domaine officiel

  logo: {
    primaryText: "SWISS",
    accentText: "ELITE",
  },

  colors: {
    accent: "#c8102e",
    accentSoft: "#e14a5f",
  },

  images: {
    hero: "/brands/swisselite/hero.svg",
    about: "/brands/swisselite/about.svg",
  },

  contact: {
    email: "info@swisselite-location.ch", // TODO: remplacer par l'adresse e-mail officielle
    phone: "+41 00 000 00 00", // TODO: remplacer par le numéro officiel
    whatsappNumber: "41780000000", // TODO: remplacer par le numéro WhatsApp officiel
    whatsappDefaultMessage:
      "Bonjour SwissElite, je souhaiterais obtenir des informations concernant la location d'un véhicule.",
  },

  social: {
    instagram: "https://www.instagram.com/swisselitelocation",
  },

  address: {
    street: "Rue Exemple 1", // TODO: remplacer par l'adresse officielle
    postalCode: "1200",
    city: "Genève",
    country: "Suisse",
    mapsUrl: "https://maps.google.com", // TODO: remplacer par le lien Google Maps officiel
  },

  hours: [
    { day: "Lundi - Vendredi", hours: "09h00 - 18h30" }, // TODO: confirmer les horaires officiels
    { day: "Samedi", hours: "10h00 - 16h00" },
    { day: "Dimanche", hours: "Sur rendez-vous" },
  ],

  nav: [
    { label: "Accueil", href: "/" },
    { label: "Nos véhicules", href: "/vehicules" },
    { label: "Longue durée", href: "/longue-duree" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "À propos", href: "/a-propos" },
      { label: "Nos véhicules", href: "/vehicules" },
      { label: "Longue durée", href: "/longue-duree" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Conditions générales de location", href: "/conditions-generales" },
    ],
  },

  seo: {
    keywords: [
      "location voiture de prestige Genève",
      "location voiture de luxe Suisse",
      "location longue durée Genève",
      "SwissElite",
    ],
  },
};
