/**
 * Contenu métier du gabarit "plombier".
 *
 * Même logique que data/electricien/ : les composants de components/plombier/
 * ne contiennent aucune phrase en dur, tout le texte vit ici. Pour un nouveau
 * plombier ou artisan du bâtiment proche (chauffagiste...), il suffit de
 * copier data/plombier/<id>.ts, d'y écrire son propre contenu, puis de
 * l'enregistrer dans data/plombier/index.ts.
 */

/** Identifiants d'icônes disponibles pour une prestation (voir components/plombier/icons.ts) */
export type PlombierServiceIcon =
  | "droplet"
  | "wrench"
  | "bath"
  | "search-check"
  | "thermometer"
  | "alert-triangle";

export interface PlombierService {
  /** Identifiant unique, utilisé comme ancre (#service-<slug>) et comme valeur du formulaire */
  slug: string;
  icon: PlombierServiceIcon;
  name: string;
  shortDescription: string;
  /** Détails affichés sur la page "Nos prestations" */
  details: string[];
  /** Tarif indicatif affiché tel quel, ex. "Dès 120 CHF" — donnée de démonstration */
  startingPrice?: string;
}

export interface PlombierTestimonial {
  author: string;
  /** Contexte facultatif, ex. "Propriétaire au Mont-sur-Lausanne" */
  context?: string;
  /** Note sur 5 */
  rating: number;
  quote: string;
}

export interface PlombierStat {
  value: string;
  label: string;
}

/** Un point fort mis en avant dans la section confiance */
export interface PlombierValue {
  icon: PlombierServiceIcon | "shield-check" | "clock" | "sparkles";
  title: string;
  description: string;
}

export interface PlombierContent {
  hero: {
    eyebrow: string;
    title: string;
    /** Portion du titre affichée dans la couleur d'accent */
    highlight: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    /** Bouton secondaire — appel direct (tel:) */
    secondaryCta: { label: string };
    /** Repères courts affichés sous les boutons, ex. "Devis gratuit" */
    quickFacts: string[];
  };

  /** Bandeau d'urgence, affiché en permanence dans l'en-tête et le menu mobile */
  emergency: {
    label: string;
    callLabel: string;
    whatsappLabel: string;
  };

  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: PlombierService[];
    /** Note affichée sous la grille, ex. tarifs à titre indicatif */
    pricingNote: string;
  };

  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: PlombierStat[];
    values: PlombierValue[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: PlombierTestimonial[];
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
}
