/**
 * Contenu métier du gabarit "dealer" (négoce automobile d'occasion).
 *
 * Comme pour data/showroom/ et data/garage/, tout le texte affiché par les
 * composants de components/dealer/ vit ici. Pour un nouveau négociant, il
 * suffit de copier data/dealer/<id>.ts, d'y écrire son propre contenu, puis
 * de l'enregistrer dans data/dealer/index.ts.
 */

export interface DealerStat {
  value: string;
  label: string;
}

export interface DealerTestimonial {
  author: string;
  context?: string;
  rating: number;
  quote: string;
}

export interface DealerFinancingOption {
  icon: "percent" | "handshake" | "calendar" | "shield";
  title: string;
  description: string;
}

export interface DealerContent {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    buyCta: { label: string; description: string; href: string };
    sellCta: { label: string; description: string; href: string };
    quickFacts: string[];
  };

  catalog: {
    eyebrow: string;
    title: string;
    intro: string;
  };

  sell: {
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
    stats: DealerStat[];
    points: string[];
  };

  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: DealerTestimonial[];
  };

  financing: {
    eyebrow: string;
    title: string;
    intro: string;
    options: DealerFinancingOption[];
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    commitments: string[];
  };
}
