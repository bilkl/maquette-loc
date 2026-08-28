/**
 * Contenu métier du gabarit "garage".
 *
 * Comme pour data/showroom/, tout le texte affiché par les composants de
 * components/garage/ vit ici : les composants ne contiennent aucune phrase
 * en dur. Pour un nouveau garage ou carrossier, il suffit de copier
 * data/garage/<id>.ts, d'y écrire son propre contenu, puis de l'enregistrer
 * dans data/garage/index.ts.
 */

/** Identifiants d'icônes disponibles pour une prestation (voir components/garage/icons.ts) */
export type GarageServiceIcon =
  | "wrench"
  | "tire"
  | "brake"
  | "diagnostic"
  | "clipboard-check"
  | "snowflake"
  | "car";

export interface GarageService {
  /** Identifiant unique, utilisé comme ancre (#service-<slug>) */
  slug: string;
  icon: GarageServiceIcon;
  name: string;
  shortDescription: string;
  /** Détails affichés sur la page "Nos prestations" */
  details: string[];
  /** Tarif indicatif affiché tel quel, ex. "Dès 39 CHF" — donnée de démonstration */
  startingPrice?: string;
}

export interface GarageTestimonial {
  author: string;
  /** Contexte facultatif, ex. "Propriétaire d'une Golf GTI" */
  context?: string;
  /** Note sur 5 */
  rating: number;
  quote: string;
}

export interface GarageStat {
  value: string;
  label: string;
}

export interface GarageContent {
  hero: {
    eyebrow: string;
    title: string;
    /** Portion du titre affichée dans la couleur d'accent */
    highlight: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    /** Bouton secondaire — généralement un appel direct (tel:) */
    secondaryCta: { label: string };
    /** Repères courts affichés sous les boutons, ex. "Devis gratuit" */
    quickFacts: string[];
  };

  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: GarageService[];
    /** Note affichée sous la grille, ex. tarifs à titre indicatif */
    pricingNote: string;
  };

  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: GarageStat[];
    networkLabel: string;
    networkDescription: string;
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: GarageTestimonial[];
  };

  appointment: {
    eyebrow: string;
    title: string;
    intro: string;
    reassurances: string[];
    whatsappLabel: string;
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    commitments: string[];
  };

  servicesPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
}
