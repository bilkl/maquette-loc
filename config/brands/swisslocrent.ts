import type { BrandConfig } from "./types";

export const swisslocrent: BrandConfig = {
  id: "swisslocrent",
  name: "SwissLoc Rent",
  legalName: "SwissLoc Rent Sàrl", // TODO: remplacer par la raison sociale officielle
  tagline: "L'excellence automobile, le temps d'un trajet.",
  description:
    "Découvrez une sélection de véhicules de prestige disponibles en location courte et longue durée en Suisse.",
  url: "https://www.swissloc-rent.ch", // TODO: remplacer par le nom de domaine officiel

  logo: {
    primaryText: "SWISSLOC",
    accentText: "RENT",
  },

  colors: {
    accent: "#c9a227",
    accentSoft: "#e5c158",
  },

  images: {
    hero: "/brands/swisslocrent/hero.svg",
    about: "/brands/swisslocrent/about.svg",
  },

  contact: {
    email: "info@swissloc-rent.ch",
    phone: "+41 00 000 00 00", // TODO: remplacer par le numéro officiel
    whatsappNumber: "41780000000", // TODO: remplacer par le numéro WhatsApp officiel
    whatsappDefaultMessage:
      "Bonjour SwissLoc Rent, je souhaiterais obtenir des informations concernant la location d'un véhicule.",
  },

  social: {
    instagram: "https://instagram.com/swissloc_rent",
  },

  address: {
    street: "Rue Exemple 1", // TODO: remplacer par l'adresse officielle
    postalCode: "1000",
    city: "Ville à préciser", // TODO: remplacer par la ville officielle
    country: "Suisse",
    mapsUrl: "https://maps.google.com", // TODO: remplacer par le lien Google Maps officiel
  },

  hours: [
    { day: "Lundi - Vendredi", hours: "09h00 - 18h30" },
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
      "location voiture de prestige",
      "location voiture de luxe Suisse",
      "location longue durée Suisse",
      "SwissLoc Rent",
    ],
  },
};
