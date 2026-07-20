export type NavLink = {
  label: string;
  href: string;
};

export interface BrandConfig {
  /** Identifiant unique, valeur attendue de la variable d'environnement NEXT_PUBLIC_BRAND */
  id: string;
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;

  logo: {
    /** Première partie du logo texte, ex. "NL" */
    primaryText: string;
    /** Seconde partie, affichée dans la couleur d'accent, ex. "PRESTIGE" */
    accentText: string;
  };

  colors: {
    /** Couleur d'accent principale (boutons, liens, icônes) */
    accent: string;
    /** Variante plus claire, utilisée pour les sweeps/hover */
    accentSoft: string;
  };

  images: {
    /** Image de fond de la section hero, doublée comme image OG/Twitter */
    hero: string;
    /** Illustration utilisée sur la page "À propos" */
    about: string;
  };

  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
  };

  social: {
    instagram: string;
  };

  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    mapsUrl: string;
  };

  hours: { day: string; hours: string }[];

  nav: NavLink[];

  footerLinks: {
    entreprise: NavLink[];
    legal: NavLink[];
  };

  seo: {
    keywords: string[];
  };
}
