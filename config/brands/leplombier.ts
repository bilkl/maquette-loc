import type { BrandConfig } from "./types";

/**
 * Le Plombier (Jean-Marc Basler) — Le Mont-sur-Lausanne. Première agence
 * servie par le gabarit "plombier" (voir components/plombier/ et
 * data/plombier/leplombier.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram, WhatsApp).
 */
export const leplombier: BrandConfig = {
  id: "leplombier",
  name: "Le Plombier",
  legalName: "[RAISON SOCIALE]",
  tagline: "Jean-Marc Basler, plombier indépendant au Mont-sur-Lausanne, depuis plus de 20 ans.",
  description:
    "Le Plombier (Jean-Marc Basler) est un plombier indépendant au Mont-sur-Lausanne, actif depuis plus de 20 ans : installations sanitaires, dépannage, rénovation de salle de bains, débouchage, détartrage et détection de fuites.",
  url: "https://www.leplombier-basler.ch",

  template: "plombier",
  theme: "plombier",
  premium: true,

  logo: {
    primaryText: "LE",
    accentText: "PLOMBIER",
  },

  colors: {
    /** Bleu plomberie/eau */
    accent: "#0b6fb8",
    accentSoft: "#4da3e0",
  },

  images: {
    hero: "/brands/leplombier/hero.svg",
    about: "/brands/leplombier/about.svg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage: "Bonjour, je souhaite une intervention / un devis pour de la plomberie.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Le Mont-sur-Lausanne",
    country: "Suisse",
    mapsUrl: "[LIEN GOOGLE MAPS]",
  },

  hours: [
    { day: "Lundi – Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "[HORAIRES]" },
    { day: "Dimanche", hours: "Urgences uniquement" },
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
      { label: "Demander une intervention", href: "/#devis" },
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
      "plombier Le Mont-sur-Lausanne",
      "dépannage plomberie Lausanne",
      "fuite d'eau urgence Lausanne",
      "rénovation salle de bains Lausanne",
      "débouchage canalisation Lausanne",
      "détection de fuite Vaud",
      "plombier indépendant Vaud",
    ],
    pageTitleSuffix: "Plombier indépendant au Mont-sur-Lausanne",
  },
};
