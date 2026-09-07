import type { BrandConfig } from "./types";

/**
 * AM Coach Sportif (Anthony M.) — Genève. Première agence servie par le
 * gabarit "coach" (voir components/coach/ et data/coach/amcoach.ts).
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
 * La section "Résultats" (voir components/coach/ResultsSection.tsx) n'utilise
 * volontairement aucune photo, réelle ou générique : uniquement des
 * pictogrammes et un texte de démonstration, pour ne jamais laisser croire
 * qu'une photo de client a été publiée sans son consentement.
 *
 * Photos génériques libres de droits (Wikimedia Commons, licence CC BY 2.0),
 * en attendant les vraies photos du coach : hero.jpg « Fitness enthusiast
 * lifts vibrant dumbbell during home workout », about.jpg « Woman lifting
 * pink dumbbells during a workout in a bright indoor space with soft
 * lighting ». Aucune des deux ne représente un client identifiable — ce sont
 * des photos d'ambiance, pas des preuves de résultat.
 */
export const amcoach: BrandConfig = {
  id: "amcoach",
  name: "AM Coach Sportif",
  legalName: "[RAISON SOCIALE]",
  tagline: "Coaching sportif individuel à Genève, pour les 40 ans et plus.",
  description:
    "AM Coach Sportif (Anthony M.) est un coach sportif indépendant à Genève, spécialisé dans la transformation physique des personnes de plus de 40 ans : perte de poids, remise en forme, gestion de la fatigue.",
  url: "https://www.amcoach-sportif.ch",

  template: "coach",
  theme: "coach",
  premium: true,

  logo: {
    primaryText: "AM",
    accentText: "COACH",
  },

  colors: {
    /** Orange énergique — transformation et énergie, pas de code "prestige" */
    accent: "#ff5a1f",
    accentSoft: "#ff8a4c",
  },

  images: {
    hero: "/brands/amcoach/hero.jpg",
    about: "/brands/amcoach/about.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "[TÉLÉPHONE]",
    whatsappNumber: "[NUMÉRO WHATSAPP]",
    whatsappDefaultMessage: "Bonjour AM Coach Sportif, je souhaite réserver mon bilan gratuit.",
  },

  social: {
    instagram: "[INSTAGRAM]",
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
    { day: "Samedi", hours: "Sur rendez-vous" },
    { day: "Dimanche", hours: "Fermé" },
  ],

  nav: [
    { label: "Pour qui", href: "/#pour-qui" },
    { label: "La méthode", href: "/#methode" },
    { label: "Résultats", href: "/#resultats" },
    { label: "Tarifs", href: "/#tarifs" },
    { label: "À propos", href: "/a-propos" },
  ],

  footerLinks: {
    entreprise: [
      { label: "Pour qui", href: "/#pour-qui" },
      { label: "La méthode", href: "/#methode" },
      { label: "Réserver mon bilan", href: "/#bilan" },
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
      "coach sportif Genève",
      "coaching sportif 40 ans",
      "perte de poids Genève",
      "remise en forme Genève",
      "coach sportif indépendant Genève",
      "transformation physique Genève",
      "coach sportif senior Genève",
    ],
    pageTitleSuffix: "Coach sportif indépendant à Genève",
  },
};
