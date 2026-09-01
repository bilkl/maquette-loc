import type { MenuiserieContent } from "./types";

/**
 * Contenu de démonstration pour Menuiserie BEM.
 * Textes, exemples de réalisations et avis à valider par l'entreprise avant publication.
 *
 * Photos de galerie génériques libres de droits (Wikimedia Commons — CC0, CC BY 2.0 ou
 * CC BY-SA 2.0/4.0 selon l'image, voir config/brands/menuiseriebem.ts pour le détail des
 * crédits), en attendant les vraies photos des réalisations de l'entreprise.
 */
export const menuiseriebemContent: MenuiserieContent = {
  hero: {
    eyebrow: "Aigle — Vaud & Chablais valaisan",
    title: "L'artisanat du bois,",
    highlight: "façonné sur mesure.",
    subtitle:
      "Menuisier-ébéniste indépendant basé à Aigle, Menuiserie BEM conçoit et réalise vos agencements, escaliers, portes et menuiseries extérieures sur mesure, dans tout le canton de Vaud et le Chablais valaisan.",
    primaryCta: { label: "Demander un devis", href: "#devis" },
    secondaryCta: { label: "Voir nos réalisations", href: "/realisations" },
    quickFacts: [
      "Devis gratuit et sans engagement",
      "Neuf comme rénovation",
      "Essences de bois choisies avec vous",
    ],
  },

  services: {
    eyebrow: "Nos savoir-faire",
    title: "Quatre grandes familles de réalisations.",
    intro:
      "Du mobilier sur mesure à la charpente extérieure, chaque projet est pensé et façonné dans notre atelier, avec le même souci du détail.",
    items: [
      {
        slug: "agencements-sur-mesure",
        icon: "cabinetry",
        name: "Agencements sur mesure",
        shortDescription: "Cuisines, dressings et mobilier conçus pour votre intérieur.",
        examples: [
          "Cuisines sur mesure, du dessin à la pose",
          "Dressings et rangements optimisés au millimètre",
          "Mobilier intégré : bibliothèques, meubles TV, banquettes",
        ],
      },
      {
        slug: "menuiserie-exterieure",
        icon: "outdoor",
        name: "Menuiserie extérieure",
        shortDescription: "Terrasses, pergolas et portails en bois durable.",
        examples: [
          "Terrasses et caillebotis bois adaptés à votre extérieur",
          "Pergolas et abris de jardin sur mesure",
          "Portails et clôtures en bois",
        ],
      },
      {
        slug: "portes-fenetres",
        icon: "door-window",
        name: "Portes & fenêtres",
        shortDescription: "Fabrication, pose et rénovation en bois massif.",
        examples: [
          "Portes intérieures et d'entrée sur mesure",
          "Fenêtres et volets en bois, neuf ou rénovation",
          "Réparation et remise en état de menuiseries anciennes",
        ],
      },
      {
        slug: "escaliers-parquets",
        icon: "stairs",
        name: "Escaliers & parquets",
        shortDescription: "Structures et sols en bois, du choix de l'essence à la pose.",
        examples: [
          "Escaliers droits, quart tournant ou hélicoïdaux",
          "Parquets massifs et contrecollés, pose et rénovation",
          "Rampes, garde-corps et finitions sur mesure",
        ],
      },
    ],
  },

  gallery: {
    eyebrow: "Réalisations",
    title: "Le travail du bois, en grand format.",
    intro:
      "Une sélection de réalisations présentées en grand format pour donner à voir la qualité d'exécution — de la conception à la finition.",
    items: [
      {
        slug: "cuisine-sur-mesure",
        familySlug: "agencements-sur-mesure",
        title: "Cuisine sur mesure",
        description:
          "Rangements optimisés, bois clair et finitions soignées jusque dans le tiroir à couverts.",
        image: "/brands/menuiseriebem/gallery/agencements.jpg",
      },
      {
        slug: "pergola-terrasse",
        familySlug: "menuiserie-exterieure",
        title: "Pergola et terrasse",
        description:
          "Structure extérieure en bois massif, pensée pour résister aux saisons tout en restant élégante.",
        image: "/brands/menuiseriebem/gallery/exterieur.jpg",
      },
      {
        slug: "fenetre-volets-bois",
        familySlug: "portes-fenetres",
        title: "Fenêtre et volets bois",
        description: "Rénovation de menuiserie extérieure, essence et teinte choisies avec le client.",
        image: "/brands/menuiseriebem/gallery/portes-fenetres.jpg",
      },
      {
        slug: "escalier-parquet-chene",
        familySlug: "escaliers-parquets",
        title: "Escalier et parquet chêne",
        description:
          "Structure d'escalier et parquet posé en harmonie, pour un rendu continu du sol à la rampe.",
        image: "/brands/menuiseriebem/gallery/escaliers-parquets.jpg",
      },
      {
        slug: "exemple-curseur-avant-apres",
        familySlug: "escaliers-parquets",
        title: "Exemple d'interface avant/après",
        description:
          "Démonstration du curseur avant/après avec deux photos génériques — à remplacer par vos propres photos de chantier une fois vos réalisations documentées.",
        image: "/brands/menuiseriebem/gallery/escaliers-parquets.jpg",
        beforeImage: "/brands/menuiseriebem/hero.jpg",
      },
    ],
    cta: { label: "Voir toutes les réalisations", href: "/realisations" },
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "Un savoir-faire artisanal, pensé pour durer.",
    intro:
      "Menuisier-ébéniste indépendant à Aigle, nous accompagnons chaque projet du premier croquis à la pose finale, dans le canton de Vaud et le Chablais valaisan.",
    stats: [
      { value: "100%", label: "Projets sur mesure" },
      { value: "24 h", label: "Réponse à votre demande" },
      { value: "0 CHF", label: "Devis et visite d'estimation" },
    ],
    values: [
      {
        icon: "ruler",
        title: "Sur-mesure",
        description:
          "Chaque pièce est dessinée et façonnée pour votre espace exact — aucune contrainte de catalogue standard.",
      },
      {
        icon: "leaf",
        title: "Choix des essences",
        description:
          "Chêne, hêtre, mélèze ou noyer : nous vous conseillons l'essence la plus adaptée à votre projet et à votre budget.",
      },
      {
        icon: "hammer",
        title: "Neuf & rénovation",
        description:
          "D'une construction neuve à la restauration d'un élément ancien, nous intervenons à chaque étape de vie de votre bien.",
      },
      {
        icon: "sparkles",
        title: "Devis gratuit",
        description:
          "Une visite sur place et un devis détaillé, sans engagement, avant toute décision de votre part.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients : qualité d'exécution, écoute et respect des délais reviennent le plus souvent.",
    items: [
      {
        author: "Nathalie F.",
        context: "Cuisine sur mesure, Aigle",
        rating: 5,
        quote:
          "Un vrai travail d'artisan : chaque tiroir, chaque finition a été pensée pour notre usage. Le résultat dépasse ce qu'on imaginait sur plan.",
      },
      {
        author: "Olivier D.",
        context: "Pergola et terrasse, Chablais",
        rating: 5,
        quote:
          "Conseils précieux sur le choix de l'essence pour résister aux hivers de la région. Deux ans plus tard, la pergola est toujours impeccable.",
      },
      {
        author: "Sophie M.",
        context: "Escalier et parquet, Villeneuve",
        rating: 5,
        quote:
          "Le raccord entre l'escalier et le parquet est d'une précision remarquable. Un travail soigné du début à la fin du chantier.",
      },
      {
        author: "Marc T.",
        context: "Rénovation de fenêtres, Aigle",
        rating: 5,
        quote:
          "Nos fenêtres d'origine ont été restaurées plutôt que remplacées, avec un résultat magnifique et un coût bien plus raisonnable.",
      },
    ],
  },

  appointment: {
    eyebrow: "Devis & visite",
    title: "Demandez votre devis en quelques minutes.",
    intro:
      "Décrivez votre projet et joignez quelques photos si vous le souhaitez : nous revenons vers vous rapidement pour organiser une visite d'estimation, gratuite et sans engagement.",
    reassurances: [
      "Devis gratuit et sans engagement",
      "Réponse sous 24 heures, par téléphone ou WhatsApp",
      "Visite d'estimation sur place, dans tout le Vaud et le Chablais valaisan",
      "Un interlocuteur unique, du dessin à la pose",
    ],
    whatsappLabel: "Besoin d'une réponse plus rapide ? Écrivez-nous sur WhatsApp",
  },

  about: {
    eyebrow: "À propos",
    title: "Menuisier-ébéniste indépendant, basé à Aigle.",
    description:
      "Menuiserie BEM est un atelier de menuiserie-ébénisterie indépendant basé à Aigle, intervenant dans tout le canton de Vaud et le Chablais valaisan.",
    paragraphs: [
      "Menuiserie BEM conçoit et façonne des agencements, escaliers, menuiseries extérieures et intérieures sur mesure, dans notre atelier à Aigle, pour des clients particuliers et professionnels de toute la région.",
      "Notre approche reste artisanale à chaque étape : un dessin adapté à votre espace, un choix d'essence discuté avec vous, et une fabrication soignée en atelier avant la pose sur place.",
      "Que votre projet soit une construction neuve ou la rénovation d'un élément existant, nous nous déplaçons dans tout le canton de Vaud et le Chablais valaisan pour une visite d'estimation gratuite.",
    ],
    commitments: [
      "Conception et fabrication sur mesure, en atelier",
      "Devis gratuit et visite d'estimation sans engagement",
      "Choix de l'essence adapté à votre projet et à votre budget",
      "Intervention dans tout le canton de Vaud et le Chablais valaisan",
    ],
  },

  servicesPage: {
    eyebrow: "Nos savoir-faire",
    title: "Un artisan, quatre grandes familles de réalisations.",
    intro:
      "Chaque famille de savoir-faire est présentée avec des exemples concrets de réalisations. Un devis précis et gratuit vous est communiqué après une visite sur place.",
  },

  galleryPage: {
    eyebrow: "Réalisations",
    title: "Nos réalisations en grand format.",
    intro:
      "Une sélection de projets menés par Menuiserie BEM, présentés en grand format pour donner à voir la qualité d'exécution du travail du bois.",
  },
};
