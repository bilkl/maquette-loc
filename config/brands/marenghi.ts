import type { BrandConfig } from "./types";

/**
 * Garage Marenghi — Renens (région lausannoise). Deuxième agence sobre du
 * gabarit "garage" aux côtés de Garage Carlos Atelier (voir
 * components/garage/ et data/garage/marenghi.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram, WhatsApp).
 *
 * `contact.whatsappEnabled: false` — WhatsApp n'a pas été confirmé comme
 * canal utilisé par ce garage : tous les CTA WhatsApp restent masqués et la
 * prise de contact se fait par téléphone ou e-mail (voir lib/whatsapp.ts).
 *
 * Photos génériques libres de droits (Wikimedia Commons), en attendant les
 * vraies photos de l'atelier :
 * - hero.jpg : « Man under Volkswagen Beetle » par Nick Harris, CC BY-SA 2.0
 * - about.jpg : « Old car raised on car lift for diagnostics in workshop »,
 *   CC BY 2.0
 * `premium: true` pour que le hero affiche cette photo en fond plutôt que le
 * filigrane décoratif par défaut du gabarit "garage" (voir GarageHero.tsx).
 */
export const marenghi: BrandConfig = {
  id: "marenghi",
  name: "Garage Marenghi",
  legalName: "[RAISON SOCIALE]",
  tagline: "Le garage multimarques de confiance à Renens, depuis 1974.",
  description:
    "Garage Marenghi répare et entretient les véhicules de toutes marques à Renens, dans la région lausannoise, depuis 1974 : entretien, réparation, diagnostic, pneus, préparation à l'expertise et dépannage.",
  url: "https://www.garage-marenghi.ch",

  template: "garage",
  theme: "garage",
  premium: true,

  logo: {
    primaryText: "MARENGHI",
    accentText: "GARAGE",
  },

  colors: {
    /** Bleu foncé — sobriété et confiance, pas de code "prestige" */
    accent: "#1d3557",
    accentSoft: "#3d5a80",
  },

  images: {
    hero: "/brands/marenghi/hero.jpg",
    about: "/brands/marenghi/about.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage: "Bonjour Garage Marenghi, je souhaite prendre rendez-vous pour mon véhicule.",
    // WhatsApp non confirmé pour ce client : confirmation par téléphone/e-mail par défaut.
    whatsappEnabled: false,
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Renens",
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
      "garage automobile Renens",
      "réparation auto Lausanne",
      "garage multimarques Renens",
      "pneus Renens",
      "diagnostic électronique Lausanne",
      "préparation expertise véhicule Renens",
      "dépannage automobile Renens",
    ],
    pageTitleSuffix: "Garage automobile multimarques à Renens, depuis 1974",
  },
};
