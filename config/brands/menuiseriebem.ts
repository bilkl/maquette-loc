import type { BrandConfig } from "./types";

/**
 * Menuiserie BEM — Aigle. Première agence servie par le gabarit "menuiserie"
 * (voir components/menuiserie/ et data/menuiserie/menuiseriebem.ts).
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram, WhatsApp) —
 * et voir lib/whatsapp.ts : tant que `contact.whatsappNumber` reste un
 * placeholder, tout CTA WhatsApp est masqué plutôt que de pointer vers un
 * lien wa.me sans destinataire.
 *
 * Photos génériques libres de droits (Wikimedia Commons), en attendant les
 * vraies photos des réalisations de l'entreprise :
 * - hero.jpg : « Wooden spiral stairs (Nebotičnik, Ljubljana) », CC BY-SA 4.0
 * - about.jpg : « Wood workshop », CC BY-SA 2.0
 * - gallery/agencements.jpg : « Kitchen drawer », Unsplash via Commons, CC0
 * - gallery/exterieur.jpg : « Detail of pergola in vineyard », CC0
 * - gallery/portes-fenetres.jpg : « Window with wooden shutters of an old
 *   house in Motovun », CC BY 2.0
 * - gallery/escaliers-parquets.jpg : « Brass bannisters spiral wooden
 *   staircase, Aarhus City Hall », CC BY-SA 4.0
 */
export const menuiseriebem: BrandConfig = {
  id: "menuiseriebem",
  name: "Menuiserie BEM",
  legalName: "[RAISON SOCIALE]",
  tagline: "Menuisier-ébéniste indépendant à Aigle, dans le Vaud et le Chablais valaisan.",
  description:
    "Menuiserie BEM est un atelier de menuiserie-ébénisterie indépendant basé à Aigle : agencements sur mesure, menuiserie extérieure, portes et fenêtres, escaliers et parquets, dans tout le canton de Vaud et le Chablais valaisan.",
  url: "https://www.menuiserie-bem.ch",

  template: "menuiserie",
  theme: "menuiserie",
  premium: true,

  logo: {
    primaryText: "MENUISERIE",
    accentText: "BEM",
  },

  colors: {
    /** Vert forêt — évoque le bois et l'artisanat, sans les codes du "prestige" */
    accent: "#3a5a40",
    accentSoft: "#6b8f71",
  },

  images: {
    hero: "/brands/menuiseriebem/hero.jpg",
    about: "/brands/menuiseriebem/about.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage: "Bonjour Menuiserie BEM, je souhaite un devis pour un projet.",
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Aigle",
    country: "Suisse",
    mapsUrl: "[LIEN GOOGLE MAPS]",
  },

  hours: [
    { day: "Lundi – Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "Sur rendez-vous" },
    { day: "Dimanche", hours: "Fermé" },
  ],

  nav: [
    { label: "Nos savoir-faire", href: "/prestations" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Pourquoi nous", href: "/#confiance" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "Nos savoir-faire", href: "/prestations" },
      { label: "Réalisations", href: "/realisations" },
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
      "menuisier Aigle",
      "ébéniste Vaud",
      "cuisine sur mesure Aigle",
      "escalier bois Vaud",
      "menuiserie extérieure Chablais",
      "portes fenêtres bois Vaud",
      "menuisier Chablais valaisan",
    ],
    pageTitleSuffix: "Menuisier-ébéniste indépendant à Aigle",
  },
};
