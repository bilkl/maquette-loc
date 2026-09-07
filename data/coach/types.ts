/**
 * Contenu métier du gabarit "coach".
 *
 * Même logique que data/electricien/ ou data/plombier/ : les composants de
 * components/coach/ ne contiennent aucune phrase en dur, tout le texte vit
 * ici. Pour un nouveau coach sportif ou professionnel du fitness proche, il
 * suffit de copier data/coach/<id>.ts, d'y écrire son propre contenu, puis
 * de l'enregistrer dans data/coach/index.ts.
 *
 * Pas de catalogue (contrairement à dealer/immobilier) : ce gabarit reste un
 * site vitrine mono-page avec ancres, orienté conversion vers un bilan
 * gratuit plutôt que vers une liste d'offres à parcourir.
 */

/** Identifiants d'icônes disponibles pour un point "Pour qui"/"Méthode"/"Résultats" (voir components/coach/icons.ts) */
export type CoachIcon =
  | "target"
  | "battery"
  | "heart"
  | "trending-up"
  | "user-check"
  | "shield-check"
  | "flame"
  | "activity"
  | "sparkles"
  | "dumbbell";

export interface CoachPoint {
  icon: CoachIcon;
  title: string;
  description: string;
}

export interface CoachStat {
  value: string;
  label: string;
}

export interface CoachTestimonial {
  author: string;
  /** Contexte facultatif, ex. "48 ans, perte de 12 kg en 6 mois" */
  context?: string;
  rating: number;
  quote: string;
}

export interface CoachPricingPlan {
  name: string;
  price: string;
  /** Ex. "/ mois" — absent pour une formule au forfait unique */
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

/** Un exemple de transformation en section "Résultats" — jamais une vraie photo (voir ResultsSection.tsx) */
export interface CoachResultExample {
  icon: CoachIcon;
  title: string;
  description: string;
}

export interface CoachContent {
  hero: {
    eyebrow: string;
    title: string;
    /** Seconde phrase du message fort, ex. "Je répare la fatigue." */
    titleSecondary: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    quickFacts: string[];
  };

  audience: {
    eyebrow: string;
    title: string;
    intro: string;
    points: CoachPoint[];
  };

  method: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: CoachPoint[];
  };

  results: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: CoachStat[];
    examples: CoachResultExample[];
    /** Rappel explicite : exemples illustratifs, pas de vraies photos avant/après */
    disclaimer: string;
  };

  pricing: {
    eyebrow: string;
    title: string;
    intro: string;
    plans: CoachPricingPlan[];
    note: string;
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CoachTestimonial[];
  };

  booking: {
    eyebrow: string;
    title: string;
    intro: string;
    reassurances: string[];
    whatsappLabel?: string;
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    commitments: string[];
  };
}
