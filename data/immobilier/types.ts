/**
 * Contenu métier du gabarit "immobilier" (agence immobilière indépendante).
 *
 * Comme pour data/dealer/, tout le texte affiché par les composants de
 * components/immobilier/ vit ici. Pour une nouvelle agence ou un nouveau
 * courtier indépendant, il suffit de copier data/immobilier/<id>.ts, d'y
 * écrire son propre contenu, puis de l'enregistrer dans data/immobilier/index.ts.
 * Le catalogue de biens (data/properties/<id>.ts) est distinct de ce contenu
 * métier, comme data/occasion-vehicles/ l'est de data/dealer/.
 */

export interface ImmobilierStat {
  value: string;
  label: string;
}

export interface ImmobilierTestimonial {
  author: string;
  context?: string;
  rating: number;
  quote: string;
}

export interface ImmobilierService {
  icon: "sale" | "buy" | "estimate" | "promotion" | "legal";
  title: string;
  description: string;
}

export interface ImmobilierContent {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    browseCta: { label: string; description: string; href: string };
    estimateCta: { label: string; description: string; href: string };
    quickFacts: string[];
  };

  catalog: {
    eyebrow: string;
    title: string;
    intro: string;
  };

  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ImmobilierService[];
  };

  estimate: {
    eyebrow: string;
    title: string;
    intro: string;
    reassurances: string[];
    responseTime: string;
    whatsappLabel: string;
  };

  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: ImmobilierStat[];
    points: string[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ImmobilierTestimonial[];
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    commitments: string[];
  };
}
