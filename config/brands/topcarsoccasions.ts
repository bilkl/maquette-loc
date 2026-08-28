import type { BrandConfig } from "./types";

/**
 * TopCars Occasions — Lausanne / Genève. Première agence servie par le
 * gabarit "dealer" (voir components/dealer/, data/dealer/topcarsoccasions.ts
 * et data/occasion-vehicles/topcarsoccasions.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram).
 */
export const topcarsoccasions: BrandConfig = {
  id: "topcarsoccasions",
  name: "TopCars Occasions",
  legalName: "[RAISON SOCIALE]",
  tagline: "Négociant automobile toutes marques entre Lausanne et Genève.",
  description:
    "TopCars Occasions est un négociant automobile toutes marques au bord du Léman, entre Lausanne et Genève : achat, vente et reprise de véhicules d'occasion contrôlés et garantis.",
  url: "https://topcars-occasions.ch",

  template: "dealer",
  theme: "dealer",

  logo: {
    primaryText: "TOPCARS",
    accentText: "OCCASIONS",
  },

  colors: {
    /** Bleu lac Léman */
    accent: "#1d6fa5",
    accentSoft: "#4c93c4",
  },

  images: {
    hero: "/brands/topcarsoccasions/hero.svg",
    about: "/brands/topcarsoccasions/about.svg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage:
      "Bonjour TopCars Occasions, je vous contacte au sujet d'un véhicule.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Lausanne",
    country: "Suisse",
    mapsUrl: "[LIEN GOOGLE MAPS]",
  },

  hours: [
    { day: "Lundi – Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "[HORAIRES]" },
    { day: "Dimanche", hours: "Sur rendez-vous" },
  ],

  nav: [
    { label: "Nos véhicules", href: "/vehicules" },
    { label: "Vendre / Reprendre", href: "/#vendre" },
    { label: "Financement", href: "/#financement" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "Nos véhicules", href: "/vehicules" },
      { label: "Vendre ou reprendre", href: "/#vendre" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Conditions générales de vente", href: "/conditions-generales" },
    ],
  },

  seo: {
    keywords: [
      "voiture occasion Lausanne",
      "voiture occasion Genève",
      "négociant automobile Suisse romande",
      "reprise véhicule occasion",
      "achat voiture occasion Léman",
      "leasing voiture occasion",
      "TopCars Occasions",
    ],
    pageTitleSuffix: "Achat, vente et reprise de véhicules d'occasion",
  },
};
