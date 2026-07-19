// Configuration centralisée du site NL Prestige.
// Toute donnée non confirmée par NL Prestige est marquée d'un commentaire TODO.
// Modifiez ce fichier pour mettre à jour les coordonnées affichées sur tout le site.

export type NavLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "NL Prestige",
  legalName: "NL Prestige Sàrl", // TODO: remplacer par la raison sociale officielle de NL Prestige
  tagline: "L'excellence automobile, le temps d'un trajet.",
  description:
    "Découvrez une sélection de véhicules de prestige disponibles en location courte et longue durée en Suisse.",
  url: "https://www.nl-prestige.ch", // TODO: remplacer par le nom de domaine officiel de NL Prestige

  contact: {
    email: "info@nl-prestige.ch",
    phone: "+41 00 000 00 00", // TODO: remplacer par le numéro de téléphone officiel de NL Prestige
    whatsappNumber: "41780000000", // TODO: remplacer par le numéro WhatsApp officiel (format international sans + ni espaces)
    whatsappDefaultMessage:
      "Bonjour NL Prestige, je souhaiterais obtenir des informations concernant la location d'un véhicule.",
  },

  social: {
    instagram: "https://instagram.com/nl.prestige",
  },

  address: {
    street: "Rue Exemple 1", // TODO: remplacer par l'adresse officielle de NL Prestige
    postalCode: "1000",
    city: "Ville à préciser", // TODO: remplacer par la ville officielle de NL Prestige
    country: "Suisse",
    mapsUrl: "https://maps.google.com", // TODO: remplacer par le lien Google Maps officiel
  },

  hours: [
    { day: "Lundi - Vendredi", hours: "09h00 - 18h30" }, // TODO: confirmer les horaires officiels
    { day: "Samedi", hours: "10h00 - 16h00" }, // TODO: confirmer les horaires officiels
    { day: "Dimanche", hours: "Sur rendez-vous" }, // TODO: confirmer les horaires officiels
  ],

  nav: [
    { label: "Accueil", href: "/" },
    { label: "Nos véhicules", href: "/vehicules" },
    { label: "Longue durée", href: "/longue-duree" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],

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
} as const;

export type SiteConfig = typeof siteConfig;
