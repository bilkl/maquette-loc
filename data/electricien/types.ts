/**
 * Contenu métier du gabarit "electricien".
 *
 * Même logique que data/garage/ : les composants de components/electricien/
 * ne contiennent aucune phrase en dur, tout le texte vit ici. Pour un nouvel
 * électricien ou artisan proche (chauffagiste, domoticien...), il suffit de
 * copier data/electricien/<id>.ts, d'y écrire son propre contenu, puis de
 * l'enregistrer dans data/electricien/index.ts.
 */

/** Identifiants d'icônes disponibles pour une prestation (voir components/electricien/icons.ts) */
export type ElectricienServiceIcon =
  | "bolt"
  | "wifi"
  | "shield-check"
  | "ev-charging"
  | "home-cog"
  | "alert-triangle";

export interface ElectricienService {
  /** Identifiant unique, utilisé comme ancre (#service-<slug>) et comme valeur du formulaire de devis */
  slug: string;
  icon: ElectricienServiceIcon;
  name: string;
  shortDescription: string;
  /** Détails affichés sur la page "Nos prestations" */
  details: string[];
  /** Tarif indicatif affiché tel quel, ex. "Dès 120 CHF" — donnée de démonstration */
  startingPrice?: string;
}

export interface ElectricienTestimonial {
  author: string;
  /** Contexte facultatif, ex. "Propriétaire d'une villa à Cheseaux" */
  context?: string;
  /** Note sur 5 */
  rating: number;
  quote: string;
}

export interface ElectricienStat {
  value: string;
  label: string;
}

/** Un point fort mis en avant dans la section "Pourquoi nous choisir" */
export interface ElectricienValue {
  icon: ElectricienServiceIcon | "shield-check" | "sparkles" | "gauge" | "target";
  title: string;
  description: string;
}

export interface ElectricienEvChargingContent {
  eyebrow: string;
  title: string;
  intro: string;
  /** Bénéfices présentés en liste, ex. "Compatible toutes marques de véhicules" */
  points: string[];
  stats: ElectricienStat[];
  cta: { label: string; href: string };
  note: string;
}

export interface ElectricienContent {
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

  /** Bandeau d'urgence, affiché dans l'en-tête et dans le menu mobile */
  emergency: {
    label: string;
    callLabel: string;
    whatsappLabel: string;
  };

  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ElectricienService[];
    /** Note affichée sous la grille, ex. tarifs à titre indicatif */
    pricingNote: string;
  };

  evCharging: ElectricienEvChargingContent;

  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: ElectricienStat[];
    values: ElectricienValue[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ElectricienTestimonial[];
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
