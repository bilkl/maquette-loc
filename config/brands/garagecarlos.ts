import type { BrandConfig } from "./types";

/**
 * Garage Carlos Atelier — Satigny (Genève). Première agence servie par le
 * gabarit "garage" (voir components/garage/ et data/garage/garagecarlos.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram).
 */
export const garagecarlos: BrandConfig = {
  id: "garagecarlos",
  name: "Garage Carlos Atelier",
  legalName: "[RAISON SOCIALE]",
  tagline: "Votre garage multimarques de confiance à Satigny, depuis 2008.",
  description:
    "Garage Carlos Atelier répare et entretient les véhicules de toutes marques à Satigny (Genève) depuis 2008 : révision, pneus, freins, diagnostic électronique et préparation à l'expertise.",
  url: "https://www.garage-carlos-atelier.ch",

  template: "garage",
  theme: "garage",

  logo: {
    primaryText: "CARLOS",
    accentText: "ATELIER",
  },

  colors: {
    /** Rouge de l'identité actuelle du garage */
    accent: "#dd3333",
    accentSoft: "#ef6b6b",
  },

  images: {
    hero: "/brands/garagecarlos/hero.svg",
    about: "/brands/garagecarlos/about.svg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage:
      "Bonjour Garage Carlos Atelier, je souhaite prendre rendez-vous pour mon véhicule.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Satigny",
    country: "Suisse",
    mapsUrl: "[LIEN GOOGLE MAPS]",
  },

  hours: [
    { day: "Lundi – Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "[HORAIRES]" },
    { day: "Dimanche", hours: "Fermé" },
  ],

  nav: [
    { label: "Nos prestations", href: "/prestations" },
    { label: "Pourquoi nous", href: "/#confiance" },
    { label: "Avis clients", href: "/#avis" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "Nos prestations", href: "/prestations" },
      { label: "Prendre rendez-vous", href: "/#rendez-vous" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Conditions générales", href: "/conditions-generales" },
    ],
  },

  seo: {
    keywords: [
      "garage automobile Satigny",
      "réparation auto Genève",
      "pneus Satigny",
      "diagnostic électronique Genève",
      "préparation expertise véhicule Genève",
      "garage multimarques Genève",
      "Autofit Genève",
    ],
    pageTitleSuffix: "Garage automobile multimarques à Satigny",
  },
};
