import type { BrandConfig } from "./types";

/**
 * Carrosserie de la Marbrerie SA — Carouge (Genève). Deuxième agence servie
 * par le gabarit "garage" (voir components/garage/ et
 * data/garage/lamarbrerie.ts), cette fois pour un carrossier-peintre plutôt
 * qu'un garage d'entretien courant : sections "avant/après" et "après un
 * accident" activées, WhatsApp désactivé (`contact.whatsappEnabled: false`)
 * car l'entreprise ne communique que par téléphone et e-mail.
 * Palette sombre et traitement `premium: true` (CTA en dégradé, photo de
 * fond dans le hero) — un choix visuel demandé pour cette agence, qui ne
 * change rien à l'apparence de Garage Carlos Atelier sur ce même gabarit.
 * Photos génériques libres de droits (licence Unsplash) en attendant les
 * vraies photos de l'atelier.
 *
 * ⚠️ Toutes les coordonnées ci-dessous sont des ESPACES RÉSERVÉS explicites,
 * entre crochets. Elles s'affichent telles quelles dans la maquette : aucun
 * faux numéro suisse plausible n'est utilisé, afin qu'aucune donnée fictive ne
 * puisse être prise pour une donnée réelle avant personnalisation.
 * Voir lib/placeholders.ts : les valeurs entre crochets ne sont jamais
 * transformées en lien cliquable (tel:, mailto:, Maps, Instagram).
 */
export const lamarbrerie: BrandConfig = {
  id: "lamarbrerie",
  name: "Carrosserie de la Marbrerie SA",
  legalName: "[RAISON SOCIALE]",
  tagline: "Carrosserie-peinture de confiance à Carouge, depuis 1969.",
  description:
    "Carrosserie de la Marbrerie SA répare et repeint les véhicules de toutes marques à Carouge (Genève) depuis 1969 : tôlerie, peinture automobile, redressage, remplacement de pare-brise et diagnostic après choc.",
  url: "https://www.carrosserie-marbrerie.ch",

  template: "garage",
  theme: "dark",
  premium: true,

  logo: {
    primaryText: "LA",
    accentText: "MARBRERIE",
  },

  colors: {
    /** Rouge cohérent avec le triangle rouge de l'identité actuelle */
    accent: "#c8102e",
    accentSoft: "#e8677d",
  },

  images: {
    hero: "/brands/lamarbrerie/hero.jpg",
    about: "/brands/lamarbrerie/about.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "",
    whatsappDefaultMessage: "",
    /** L'entreprise ne communique pas via WhatsApp : confirmation par téléphone ou e-mail. */
    whatsappEnabled: false,
  },

  social: {
    instagram: "[LIEN INSTAGRAM]",
  },

  address: {
    street: "[ADRESSE]",
    postalCode: "[NPA]",
    city: "Carouge",
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
      "carrosserie Carouge",
      "carrossier peintre Genève",
      "réparation carrosserie Genève",
      "peinture automobile Carouge",
      "tôlerie Genève",
      "redressage carrosserie Genève",
      "Carrosserie Suisse Genève",
    ],
    pageTitleSuffix: "Carrosserie-peinture automobile à Carouge",
  },
};
