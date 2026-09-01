/**
 * Contenu métier du gabarit "menuiserie".
 *
 * Même logique que data/electricien/ ou data/plombier/ : les composants de
 * components/menuiserie/ ne contiennent aucune phrase en dur, tout le texte
 * (et les images de la galerie) vivent ici. Pour un nouveau menuisier ou
 * artisan du bois proche, il suffit de copier data/menuiserie/<id>.ts, d'y
 * écrire son propre contenu, puis de l'enregistrer dans data/menuiserie/index.ts.
 *
 * Différence structurante avec garage/electricien/plombier : pas de ton
 * "urgence" (pas de champ `emergency`), et les prestations sont organisées en
 * grandes familles de savoir-faire plutôt qu'en liste exhaustive de services
 * tarifés à l'unité — le rendu visuel des réalisations prime sur la grille de
 * prix.
 */

/** Identifiants d'icônes disponibles pour une famille de savoir-faire (voir components/menuiserie/icons.ts) */
export type MenuiserieFamilyIcon = "cabinetry" | "outdoor" | "door-window" | "stairs";

export interface MenuiserieFamily {
  /** Identifiant unique, utilisé comme ancre (#famille-<slug>) et comme valeur du formulaire de devis */
  slug: string;
  icon: MenuiserieFamilyIcon;
  name: string;
  shortDescription: string;
  /** Exemples de réalisations concrètes affichés sur la page "Nos savoir-faire" */
  examples: string[];
}

export interface MenuiserieGalleryItem {
  slug: string;
  /** Famille de savoir-faire associée (voir MenuiserieFamily.slug) */
  familySlug: string;
  title: string;
  description: string;
  image: string;
  /**
   * Image "avant" facultative : quand elle est renseignée, l'élément est
   * affiché avec un curseur avant/après plutôt qu'une simple photo unique.
   */
  beforeImage?: string;
}

export interface MenuiserieTestimonial {
  author: string;
  /** Contexte facultatif, ex. "Cuisine sur mesure, Aigle" */
  context?: string;
  /** Note sur 5 */
  rating: number;
  quote: string;
}

export interface MenuiserieStat {
  value: string;
  label: string;
}

/** Un point fort mis en avant dans la section confiance */
export interface MenuiserieValue {
  icon: MenuiserieFamilyIcon | "ruler" | "leaf" | "hammer" | "sparkles";
  title: string;
  description: string;
}

export interface MenuiserieContent {
  hero: {
    eyebrow: string;
    title: string;
    /** Portion du titre affichée dans la couleur d'accent */
    highlight: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    /** Repères courts affichés sous les boutons, ex. "Devis gratuit" */
    quickFacts: string[];
  };

  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: MenuiserieFamily[];
  };

  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    items: MenuiserieGalleryItem[];
    cta: { label: string; href: string };
  };

  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: MenuiserieStat[];
    values: MenuiserieValue[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: MenuiserieTestimonial[];
  };

  appointment: {
    eyebrow: string;
    title: string;
    intro: string;
    reassurances: string[];
    /** Absent ou ignoré si `contact.whatsappEnabled` vaut `false` pour cette agence */
    whatsappLabel?: string;
  };

  about: {
    eyebrow: string;
    title: string;
    /** Résumé court en une phrase, ex. pour les balises meta description */
    description: string;
    paragraphs: string[];
    commitments: string[];
  };

  servicesPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };

  galleryPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
}
