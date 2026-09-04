import type { ImmobilierContent } from "./types";

/**
 * Contenu de démonstration pour B. Mooser Immobilier.
 * Textes, chiffres et avis à valider par l'agence avant publication.
 */
export const bmimmobilierContent: ImmobilierContent = {
  hero: {
    eyebrow: "Cointrin — Genève, depuis 2009",
    title: "Votre agence immobilière de confiance,",
    highlight: "en Suisse romande.",
    subtitle:
      "B. Mooser Immobilier accompagne particuliers et investisseurs dans la vente et l'achat de biens résidentiels à Genève et en Suisse romande, du premier contact jusqu'à la signature chez le notaire.",
    browseCta: {
      label: "Découvrir nos biens",
      description: "Appartements, villas, terrains et promotions en Suisse romande.",
      href: "/biens",
    },
    estimateCta: {
      label: "Estimation gratuite",
      description: "Une première estimation de votre bien, sans engagement.",
      href: "/#estimation",
    },
    quickFacts: [
      "Plus de 15 ans d'expérience",
      "Accompagnement de bout en bout",
      "Estimation gratuite et sans engagement",
    ],
  },

  catalog: {
    eyebrow: "Nos biens",
    title: "Une sélection de biens en Suisse romande.",
    intro:
      "Appartements, villas, terrains et biens de prestige : découvrez une sélection de biens actuellement en portefeuille.",
  },

  services: {
    eyebrow: "Nos services",
    title: "Un accompagnement complet, à chaque étape.",
    intro:
      "De la première estimation à la signature chez le notaire, nous accompagnons vendeurs et acheteurs à chaque étape de leur projet immobilier.",
    items: [
      {
        icon: "sale",
        title: "Vente",
        description:
          "Mise en valeur de votre bien, diffusion ciblée et suivi personnalisé jusqu'à la signature de l'acte de vente.",
      },
      {
        icon: "buy",
        title: "Achat",
        description:
          "Recherche personnalisée selon vos critères, visites organisées et accompagnement dans la négociation.",
      },
      {
        icon: "estimate",
        title: "Estimation gratuite",
        description:
          "Une estimation précise de la valeur de votre bien, basée sur le marché local et sans engagement de votre part.",
      },
      {
        icon: "promotion",
        title: "Promotion immobilière",
        description:
          "Accompagnement de projets de promotion, de la commercialisation à la vente des lots aux acquéreurs.",
      },
      {
        icon: "legal",
        title: "Conseil juridique & fiscal",
        description:
          "Mise en relation avec des partenaires notaires et fiscalistes pour sécuriser chaque étape de votre transaction.",
      },
    ],
  },

  estimate: {
    eyebrow: "Estimation gratuite",
    title: "Quelle est la valeur de votre bien ?",
    intro:
      "Indiquez le type de bien, sa surface et sa localisation : nous revenons vers vous rapidement avec une première estimation, gratuite et sans engagement.",
    reassurances: [
      "Estimation gratuite et sans engagement",
      "Réponse sous 24 heures, par téléphone ou WhatsApp",
      "Analyse basée sur le marché local actuel",
      "Accompagnement possible jusqu'à la vente, si vous le souhaitez",
    ],
    responseTime: "Réponse sous 24 heures",
    whatsappLabel: "Besoin d'une réponse plus rapide ? Écrivez-nous sur WhatsApp",
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "Plus de 15 ans d'expérience sur le marché romand.",
    intro:
      "Agence indépendante basée à Cointrin, B. Mooser Immobilier accompagne ses clients depuis 2009 dans leurs projets d'achat et de vente en Suisse romande.",
    stats: [
      { value: "15+", label: "Années d'expérience" },
      { value: "24 h", label: "Réponse à votre demande" },
      { value: "100%", label: "Estimations gratuites" },
    ],
    points: [
      "Accompagnement personnalisé, du premier contact à la signature notaire",
      "Connaissance fine du marché immobilier genevois et romand",
      "Réseau de partenaires notaires, fiscalistes et artisans",
      "Une équipe indépendante, joignable directement",
    ],
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients : professionnalisme, disponibilité et résultats rapides reviennent le plus souvent.",
    items: [
      {
        author: "Isabelle R.",
        context: "Vente d'un appartement à Cointrin",
        rating: 5,
        quote:
          "Vente conclue en moins de deux mois, à un prix conforme à nos attentes. Un accompagnement professionnel du premier rendez-vous jusqu'à la signature chez le notaire.",
      },
      {
        author: "Marc-Antoine B.",
        context: "Achat d'une villa à Cologny",
        rating: 5,
        quote:
          "Une équipe disponible et à l'écoute, qui a su nous proposer des biens correspondant vraiment à nos critères, sans nous faire perdre de temps sur des visites hors sujet.",
      },
      {
        author: "Sophie L.",
        context: "Estimation puis vente à Vernier",
        rating: 5,
        quote:
          "L'estimation gratuite était précise et argumentée. Le bien s'est vendu au prix estimé, avec un suivi rassurant à chaque étape.",
      },
      {
        author: "David K.",
        context: "Investisseur, plusieurs transactions",
        rating: 5,
        quote:
          "Je travaille avec B. Mooser Immobilier depuis plusieurs années sur différents projets. Toujours réactifs, toujours transparents sur l'état du marché.",
      },
    ],
  },

  about: {
    eyebrow: "À propos",
    title: "Une agence indépendante, active à Genève depuis 2009.",
    description:
      "B. Mooser Immobilier est une agence immobilière indépendante basée à Cointrin (Genève), active depuis 2009 dans la vente et l'achat de biens résidentiels en Suisse romande.",
    paragraphs: [
      "B. Mooser Immobilier accompagne particuliers et investisseurs depuis 2009, avec une connaissance fine du marché immobilier genevois et romand.",
      "Notre approche reste personnalisée à chaque étape : une estimation précise, une mise en valeur soignée de chaque bien, et un accompagnement direct jusqu'à la signature chez le notaire.",
      "Que vous souhaitiez vendre, acheter ou simplement estimer votre bien, notre équipe reste joignable directement, sans intermédiaire, du premier contact à la conclusion de la transaction.",
    ],
    commitments: [
      "Plus de 15 ans d'expérience sur le marché romand",
      "Estimation gratuite et sans engagement",
      "Accompagnement personnalisé, du premier contact à la signature notaire",
      "Réseau de partenaires notaires et fiscalistes",
    ],
  },
};
