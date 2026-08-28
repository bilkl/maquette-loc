import type { DealerContent } from "./types";

/**
 * Contenu de démonstration pour TopCars Occasions.
 * Textes, avis et argumentaire à valider par l'agence avant publication.
 */
export const dealerContent: DealerContent = {
  hero: {
    eyebrow: "Lausanne — Genève, bord du Léman",
    title: "Votre prochaine voiture d'occasion,",
    highlight: "en toute confiance.",
    subtitle:
      "Négociant automobile toutes marques entre Lausanne et Genève : achat, vente et reprise de véhicules contrôlés et garantis.",
    buyCta: {
      label: "Acheter un véhicule",
      description: "Parcourez le catalogue, filtrez par marque, prix, kilométrage ou carburant.",
      href: "/vehicules",
    },
    sellCta: {
      label: "Vendre ou reprendre mon véhicule",
      description: "Décrivez votre véhicule, recevez une estimation sous 24 heures.",
      href: "/#vendre",
    },
    quickFacts: [
      "Véhicules contrôlés et garantis",
      "Livraison possible dans toute la Suisse",
      "Financement et leasing sur demande",
    ],
  },

  catalog: {
    eyebrow: "Nos véhicules",
    title: "Un catalogue toutes marques, mis à jour régulièrement.",
    intro:
      "Filtrez par marque, prix, kilométrage ou carburant pour trouver le véhicule qui correspond à votre budget et à votre usage.",
  },

  sell: {
    eyebrow: "Vendre ou reprendre",
    title: "Vendez ou reprenez votre véhicule, sans perte de temps.",
    intro:
      "Décrivez votre véhicule en quelques champs : marque, modèle, année, kilométrage et état général. Nous vous recontactons avec une première estimation.",
    reassurances: [
      "Estimation gratuite et sans engagement",
      "Réponse sous 24 heures",
      "Reprise possible lors de l'achat d'un autre véhicule",
      "Paiement rapide une fois l'offre acceptée",
    ],
    responseTime: "Réponse sous 24h",
    whatsappLabel: "Préférez-vous discuter directement ? Écrivez-nous sur WhatsApp",
  },

  trust: {
    eyebrow: "Pourquoi nous faire confiance",
    title: "Des véhicules contrôlés, une transaction sans mauvaise surprise.",
    intro:
      "Chaque véhicule proposé à la vente passe par un contrôle avant mise en ligne. Nous livrons aussi dans toute la Suisse pour les clients qui ne peuvent pas se déplacer jusqu'au bord du lac.",
    stats: [
      { value: "140+", label: "Points de contrôle par véhicule" },
      { value: "12 mois", label: "Garantie incluse" },
      { value: "24 h", label: "Réponse à votre demande" },
    ],
    points: [
      "Véhicules contrôlés avant mise en vente",
      "Garantie incluse sur l'ensemble du catalogue",
      "Livraison possible dans toute la Suisse",
      "Reprise de votre ancien véhicule à l'achat",
    ],
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients en ligne : professionnalisme, rapidité et transparence reviennent le plus souvent.",
    items: [
      {
        author: "Nicolas B.",
        context: "Achat d'une Audi A4 Avant",
        rating: 5,
        quote:
          "Transaction rapide et transparente. Le véhicule était exactement conforme à l'annonce, contrôle technique fourni, aucune mauvaise surprise.",
      },
      {
        author: "Camille V.",
        context: "Vente d'un véhicule",
        rating: 5,
        quote:
          "J'ai eu une estimation en moins de 24 heures et le paiement a suivi rapidement après acceptation. Équipe professionnelle du début à la fin.",
      },
      {
        author: "Yassine T.",
        context: "Achat avec livraison",
        rating: 5,
        quote:
          "Je suis à Zurich et le véhicule m'a été livré sans encombre. Communication claire à chaque étape, je recommande sans hésiter.",
      },
      {
        author: "Aline G.",
        context: "Reprise + achat d'un SUV",
        rating: 5,
        quote:
          "Ma reprise a été évaluée honnêtement et déduite directement du prix du nouveau véhicule. Simple, rapide, sans pression commerciale.",
      },
    ],
  },

  financing: {
    eyebrow: "Financement",
    title: "Des solutions de financement adaptées à votre budget.",
    intro:
      "Achat comptant, crédit auto ou leasing : nous vous présentons les options disponibles pour financer votre véhicule au meilleur taux.",
    options: [
      {
        icon: "percent",
        title: "Crédit auto",
        description:
          "Un financement adapté à votre budget mensuel, avec un taux communiqué avant toute décision.",
      },
      {
        icon: "calendar",
        title: "Leasing",
        description:
          "Conduisez un véhicule récent avec des mensualités maîtrisées, sans mobiliser tout votre capital.",
      },
      {
        icon: "handshake",
        title: "Reprise déduite",
        description:
          "La valeur de votre ancien véhicule est déduite directement du prix d'achat du nouveau.",
      },
      {
        icon: "shield",
        title: "Garantie incluse",
        description: "12 mois de garantie inclus, avec extension possible selon le véhicule choisi.",
      },
    ],
  },

  about: {
    eyebrow: "À propos",
    title: "Un négociant automobile entre Lausanne et Genève.",
    paragraphs: [
      "TopCars Occasions est un négociant automobile toutes marques basé au bord du Léman, entre Lausanne et Genève. Nous accompagnons nos clients dans l'achat, la vente et la reprise de véhicules d'occasion.",
      "Chaque véhicule mis en vente passe par un contrôle avant publication, et une garantie est incluse sur l'ensemble du catalogue. Notre objectif est simple : une transaction rapide, transparente, sans mauvaise surprise.",
      "Pour les clients qui ne peuvent pas se déplacer, une livraison est possible dans toute la Suisse. Des solutions de financement et de leasing sont également proposées selon votre situation.",
    ],
    commitments: [
      "Véhicules toutes marques, contrôlés avant la vente",
      "Garantie incluse sur l'ensemble du catalogue",
      "Estimation de reprise sous 24 heures",
      "Livraison possible dans toute la Suisse",
    ],
  },
};
