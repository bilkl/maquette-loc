import type { BrandConfig } from "./types";

/**
 * B. Mooser Immobilier — Cointrin (Genève). Première agence servie par le
 * gabarit "immobilier" (voir components/immobilier/ et
 * data/immobilier/bmimmobilier.ts, catalogue dans data/properties/bmimmobilier.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets — y compris lorsque les vraies coordonnées sont connues
 * (+41 22 700 91 70, contact@bm-immo.ch) : elles s'affichent telles quelles
 * dans la maquette tant qu'elle n'a pas été validée par l'agence, afin
 * qu'aucune donnée ne puisse être prise pour une donnée publiée par erreur.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram, WhatsApp) —
 * et voir lib/whatsapp.ts : tant que `contact.whatsappNumber` reste un
 * placeholder, tout CTA WhatsApp est masqué plutôt que de pointer vers un
 * lien wa.me sans destinataire.
 *
 * Photos génériques libres de droits (Wikimedia Commons, licence CC BY 2.0),
 * en attendant les vraies photos des biens et de l'agence :
 * - hero.jpg et properties/villa-cologny-1.jpg : « Modern living room with
 *   large windows showing view of trees and lake in daylight »
 * - about.jpg et properties/villa-cologny-2.jpg / duplex-vernier-1.jpg :
 *   « Modern luxury living room with kitchen interior »
 * - properties/appartement-cointrin-1.jpg : « Modern living room with
 *   stylish furniture and a view of the outdoors in a cozy apartment
 *   setting »
 * - properties/terrain-bellevue.svg : schéma de démonstration (pas de photo
 *   générique pertinente trouvée pour un terrain à bâtir)
 */
export const bmimmobilier: BrandConfig = {
  id: "bmimmobilier",
  name: "B. Mooser Immobilier",
  legalName: "[RAISON SOCIALE]",
  tagline: "Agence immobilière indépendante à Cointrin, Genève, depuis 2009.",
  description:
    "B. Mooser Immobilier est une agence immobilière indépendante basée à Cointrin (Genève), active depuis 2009 dans la vente et l'achat de biens résidentiels en Suisse romande : appartements, villas, terrains et promotion immobilière.",
  url: "https://www.bm-immo.ch",

  template: "immobilier",
  theme: "immobilier",
  premium: true,

  logo: {
    primaryText: "B. MOOSER",
    accentText: "IMMOBILIER",
  },

  colors: {
    /** Bleu profond — confiance et solidité, marché du bien haut de gamme */
    accent: "#14304d",
    accentSoft: "#3d6d99",
  },

  images: {
    hero: "/brands/bmimmobilier/hero.jpg",
    about: "/brands/bmimmobilier/about.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage: "Bonjour B. Mooser Immobilier, je souhaite une estimation / des informations.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Cointrin",
    country: "Suisse",
    mapsUrl: "[LIEN GOOGLE MAPS]",
  },

  hours: [
    { day: "Lundi – Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "Sur rendez-vous" },
    { day: "Dimanche", hours: "Fermé" },
  ],

  nav: [
    { label: "Nos biens", href: "/biens" },
    { label: "Nos services", href: "/#services" },
    { label: "Pourquoi nous", href: "/#confiance" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "Nos biens", href: "/biens" },
      { label: "Estimation gratuite", href: "/#estimation" },
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
      "agence immobilière Genève",
      "agence immobilière Cointrin",
      "estimation immobilière gratuite Genève",
      "vente appartement Genève",
      "villa à vendre Genève",
      "terrain à bâtir Genève",
      "promotion immobilière Genève",
      "agence immobilière indépendante Suisse romande",
    ],
    pageTitleSuffix: "Agence immobilière indépendante à Genève",
  },
};
