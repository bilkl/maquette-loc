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

  /**
   * Gabarit de pages utilisé par cette agence.
   * - "classic" (défaut) : maquette location "pratique" (hero + flotte + réservation).
   * - "showroom" : maquette éditoriale "collection premium" (voir components/showroom/).
   *   Une agence en "showroom" doit fournir son contenu narratif dans data/showroom/<id>.ts.
   * - "garage" : atelier / garage automobile (voir components/garage/). Ton rassurant,
   *   sans-serif, prise de rendez-vous plutôt que réservation de véhicule. Une agence en
   *   "garage" doit fournir son contenu métier dans data/garage/<id>.ts.
   * - "dealer" : négoce automobile d'occasion (voir components/dealer/). Catalogue avec
   *   filtres, double parcours acheter/vendre, estimation de reprise. Une agence en
   *   "dealer" doit fournir son contenu métier dans data/dealer/<id>.ts et son catalogue
   *   dans data/occasion-vehicles/<id>.ts.
   */
  template?: "classic" | "showroom" | "garage" | "dealer";

  /**
   * Palette globale du site pour cette agence.
   * - "dark" (défaut) = fond sombre premium existant.
   * - "light" = variante fond clair.
   * - "showroom" = noir profond / anthracite chaud, pensé pour le gabarit "showroom".
   * - "garage" = blanc / gris neutre chaud, texte quasi noir, pensé pour le gabarit "garage".
   * - "dealer" = blanc / gris neutre froid, pensé pour le gabarit "dealer".
   */
  theme?: "dark" | "light" | "showroom" | "garage" | "dealer";

  images: {
    /** Image de fond de la section hero, doublée comme image OG/Twitter */
    hero: string;
    /**
     * Vidéo de fond optionnelle pour le hero (gabarit "showroom" uniquement).
     * Lue en boucle, muette, sans contrôles ; `images.hero` sert de poster et
     * reste seule utilisée pour l'OG/Twitter et comme repli si la vidéo ne
     * charge pas.
     */
    heroVideo?: string;
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
    /**
     * Complément de titre utilisé dans la balise <title> de la page d'accueil.
     * Défaut : "Location de véhicules de prestige en Suisse".
     */
    pageTitleSuffix?: string;
  };
}
