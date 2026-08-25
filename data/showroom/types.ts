/**
 * Contenu éditorial du gabarit "showroom".
 *
 * Tout le texte affiché par les composants de components/showroom/ vit ici :
 * les composants ne contiennent aucune phrase en dur. Pour un nouveau prospect,
 * il suffit de copier data/showroom/<id>.ts, d'y écrire le récit de la marque,
 * puis de l'enregistrer dans data/showroom/index.ts.
 */

export interface ShowroomStat {
  value: string;
  label: string;
}

/** Un chapitre = une marque de la collection, racontée plutôt que listée. */
export interface ShowroomChapter {
  /** Ancre HTML, ex. "ferrari" */
  id: string;
  /** Nom de la marque mis en avant */
  marque: string;
  /** Titre narratif du chapitre */
  title: string;
  /** Paragraphes du récit */
  story: string[];
  /** Phrase mise en exergue */
  quote: string;
  /** Trois repères courts (caractère, usage, particularité) */
  hallmarks: string[];
  /** Illustration du chapitre (format portrait conseillé) */
  image: string;
  /** Slugs des modèles de data/vehicles/<id>.ts rattachés à ce chapitre */
  vehicleSlugs: string[];
}

export interface ShowroomStep {
  title: string;
  description: string;
}

export interface ShowroomContent {
  hero: {
    eyebrow: string;
    /** Chaque ligne est animée séparément à l'arrivée sur la page */
    titleLines: string[];
    /** Ligne du titre affichée en italique dans la couleur d'accent */
    titleAccent: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: ShowroomStat[];
  };

  manifesto: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    signature: string;
  };

  collection: {
    eyebrow: string;
    title: string;
    intro: string;
    chapters: ShowroomChapter[];
  };

  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: ShowroomStep[];
    services: string[];
  };

  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Arguments de réassurance affichés à côté du formulaire */
    reassurances: string[];
    whatsappLabel: string;
  };

  faq: {
    eyebrow: string;
    title: string;
    intro: string;
  };

  collectionPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
}
