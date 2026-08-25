import type { BrandConfig } from "./types";

/**
 * LuxurCars — Genève. Première agence servie par le gabarit "showroom"
 * (voir components/showroom/ et data/showroom/luxurcars.ts).
 *
 * Raison sociale, téléphone et domaine repris de l'ancien site (luxurcars.ch).
 * Les coordonnées encore inconnues restent des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram).
 */
export const luxurcars: BrandConfig = {
  id: "luxurcars",
  name: "LuxurCars",
  legalName: "Remino & Co SA",
  tagline: "Une collection de supercars à Genève, confiée au jour depuis 2017.",
  description:
    "LuxurCars réunit à Genève, depuis 2017, une collection restreinte de Ferrari, Lamborghini et Maserati, proposée à la location avec remise en main propre et accompagnement personnalisé.",
  url: "https://www.luxurcars.ch",

  template: "showroom",
  theme: "showroom",

  logo: {
    primaryText: "LUXUR",
    accentText: "CARS",
  },

  colors: {
    /** Or patiné : accent principal du showroom */
    accent: "#c8a24a",
    accentSoft: "#e6cd8c",
  },

  images: {
    hero: "/brands/luxurcars/hero.jpg",
    heroVideo: "/brands/luxurcars/hero.mp4",
    about: "/brands/luxurcars/about.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "+41 78 718 41 88",
    // Même numéro que "phone" par défaut (mobile suisse, format 078 courant
    // pour WhatsApp) : à confirmer auprès de l'agence, ou à remplacer par un
    // numéro WhatsApp dédié si différent.
    whatsappNumber: "41787184188",
    whatsappDefaultMessage:
      "Bonjour LuxurCars, je souhaite des informations sur la location d'un modèle de votre collection.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Genève",
    country: "Suisse",
    mapsUrl: "[LIEN GOOGLE MAPS]",
  },

  hours: [
    { day: "Lundi – Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "[HORAIRES]" },
    { day: "Dimanche", hours: "Sur rendez-vous" },
  ],

  nav: [
    { label: "La collection", href: "/vehicules" },
    { label: "L'expérience", href: "/#experience" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "La collection", href: "/vehicules" },
      { label: "L'expérience", href: "/#experience" },
      { label: "À propos", href: "/a-propos" },
      { label: "Réserver", href: "/#reservation" },
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
      "location supercar Genève",
      "location Ferrari Genève",
      "location Lamborghini Genève",
      "location Maserati Genève",
      "location voiture de luxe Suisse romande",
      "LuxurCars",
    ],
    pageTitleSuffix: "Location de supercars à Genève",
  },
};
