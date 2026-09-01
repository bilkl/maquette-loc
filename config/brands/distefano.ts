import type { BrandConfig } from "./types";

/**
 * Di Stefano Electricité Sàrl — Cheseaux-sur-Lausanne. Première agence servie
 * par le gabarit "electricien" (voir components/electricien/ et
 * data/electricien/distefano.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram, WhatsApp).
 */
export const distefano: BrandConfig = {
  id: "distefano",
  name: "Di Stefano Electricité",
  legalName: "[RAISON SOCIALE]",
  tagline: "Électricien indépendant à Cheseaux-sur-Lausanne, depuis 2003.",
  description:
    "Di Stefano Electricité Sàrl est un électricien indépendant à Cheseaux-sur-Lausanne, actif depuis 2003 : installations électriques, courant faible, contrôles OIBT, domotique et bornes de recharge pour véhicules électriques.",
  url: "https://www.distefano-electricite.ch",

  template: "electricien",
  theme: "electricien",
  premium: true,

  logo: {
    primaryText: "DI STEFANO",
    accentText: "ÉLECTRICITÉ",
  },

  colors: {
    /** Bleu électrique — univers technique, courant fort/faible */
    accent: "#2563eb",
    accentSoft: "#60a5fa",
  },

  images: {
    hero: "/brands/distefano/hero.svg",
    about: "/brands/distefano/about.svg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage:
      "Bonjour Di Stefano Electricité, je souhaite une intervention / un devis.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Cheseaux-sur-Lausanne",
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
    { label: "Bornes VE", href: "/#bornes-ve" },
    { label: "Pourquoi nous", href: "/#confiance" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "Nos prestations", href: "/prestations" },
      { label: "Bornes de recharge VE", href: "/#bornes-ve" },
      { label: "Demander un devis", href: "/#devis" },
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
      "électricien Cheseaux-sur-Lausanne",
      "installation électrique Lausanne",
      "contrôle OIBT Lausanne",
      "borne de recharge véhicule électrique Vaud",
      "domotique Lausanne",
      "dépannage électrique urgence Lausanne",
      "électricien indépendant Vaud",
    ],
    pageTitleSuffix: "Électricien indépendant à Cheseaux-sur-Lausanne",
  },
};
