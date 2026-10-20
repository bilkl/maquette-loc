import type { BrandConfig } from "./types";

export const easyloc: BrandConfig = {
  id: "easyloc",
  name: "Easy-Loc",
  legalName: "[RAISON SOCIALE]",
  tagline: "Location de véhicules sportifs à Genève, livrés chez vous.",
  description:
    "Location de véhicules courte et longue durée à Genève et alentours, avec livraison jusqu'à votre domicile ou votre lieu de travail.",
  url: "https://www.easy-loc.ch", // TODO: remplacer par le nom de domaine officiel

  logo: {
    primaryText: "EASY",
    accentText: "LOC",
  },

  colors: {
    accent: "#2fbf4a",
    accentSoft: "#5fd978",
  },

  hero: {
    eyebrow: "Genève et alentours",
    title: "Votre voiture, livrée là où vous êtes.",
    subtitle:
      "Location de véhicules courte et longue durée. Nous livrons le véhicule à votre domicile, sur votre lieu de travail ou à l'endroit de votre choix.",
    highlights: ["Livraison à domicile", "Courte et longue durée", "Réponse rapide sur WhatsApp"],
  },

  images: {
    hero: "/images/vehicles/audi-rs3-1.jpg",
    about: "/images/vehicles/mercedes-amg-a45-s-1.jpg",
  },

  contact: {
    email: "[E-MAIL]",
    phone: "+41 77 950 71 95", // numéro WhatsApp indiqué par Easy-Loc sur son profil Snapchat, à confirmer
    whatsappNumber: "41779507195", // à confirmer
    whatsappDefaultMessage:
      "Bonjour Easy-Loc, je souhaiterais obtenir des informations concernant la location d'un véhicule.",
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
    { day: "Lundi - Vendredi", hours: "[HORAIRES]" },
    { day: "Samedi", hours: "[HORAIRES]" },
    { day: "Dimanche", hours: "[HORAIRES]" },
  ],

  nav: [
    { label: "Accueil", href: "/" },
    { label: "Nos véhicules", href: "/vehicules" },
    { label: "Longue durée", href: "/longue-duree" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    entreprise: [
      { label: "À propos", href: "/a-propos" },
      { label: "Nos véhicules", href: "/vehicules" },
      { label: "Longue durée", href: "/longue-duree" },
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
      "location voiture Genève",
      "location voiture sportive Genève",
      "location voiture livraison domicile Genève",
      "location longue durée Genève",
      "Easy-Loc",
    ],
    pageTitleSuffix: "Location de voitures à Genève, livrées chez vous",
  },
};
