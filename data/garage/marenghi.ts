import type { GarageContent } from "./types";

/**
 * Contenu de démonstration pour Garage Marenghi.
 * Textes, tarifs indicatifs et avis à valider par le garage avant publication.
 */
export const garageContent: GarageContent = {
  hero: {
    eyebrow: "Renens — région lausannoise",
    title: "Le garage de confiance à Renens,",
    highlight: "depuis 1974.",
    subtitle:
      "Plus de 50 ans d'expérience au service de votre véhicule, toutes marques confondues. Prenez rendez-vous en ligne en moins de deux minutes, ou appelez-nous directement.",
    primaryCta: { label: "Prendre rendez-vous", href: "#rendez-vous" },
    secondaryCta: { label: "Appeler le garage" },
    quickFacts: [
      "Plus de 50 ans d'expérience",
      "Toutes marques acceptées",
      "Noté 5/5 par nos clients",
    ],
  },

  services: {
    eyebrow: "Nos prestations",
    title: "Un garage complet, pour toutes les marques.",
    intro:
      "De l'entretien courant au dépannage, notre équipe intervient sur tous types de véhicules avec le même sérieux depuis plus de 50 ans.",
    pricingNote:
      "Tarifs indicatifs, donnés à titre d'exemple pour cette maquette. Un devis précis et gratuit vous est toujours communiqué avant toute intervention.",
    items: [
      {
        slug: "entretien",
        icon: "wrench",
        name: "Entretien",
        shortDescription: "Entretien courant selon le carnet constructeur, toutes marques.",
        startingPrice: "Dès 120 CHF",
        details: [
          "Vidange huile moteur et remplacement du filtre",
          "Contrôle des niveaux et des points de sécurité",
          "Suivi du plan d'entretien du constructeur",
          "Réinitialisation des indicateurs de service",
        ],
      },
      {
        slug: "reparation-toutes-marques",
        icon: "car",
        name: "Réparation toutes marques",
        shortDescription: "Réparation mécanique complète, sur tous types de véhicules.",
        startingPrice: "Sur devis",
        details: [
          "Réparation mécanique toutes marques et tous modèles",
          "Remplacement de pièces d'usure et de composants défectueux",
          "Intervention sur véhicules récents comme anciens",
          "Devis détaillé avant toute réparation",
        ],
      },
      {
        slug: "diagnostic",
        icon: "diagnostic",
        name: "Diagnostic",
        shortDescription: "Lecture des voyants et pannes électroniques, toutes marques.",
        startingPrice: "Dès 60 CHF",
        details: [
          "Lecture et interprétation des codes défaut",
          "Diagnostic voyant moteur, ABS, airbag",
          "Recherche de panne électrique et électronique",
          "Compte-rendu clair avant toute réparation",
        ],
      },
      {
        slug: "pneus",
        icon: "tire",
        name: "Pneus",
        shortDescription: "Montage, équilibrage et changement saisonnier, dépannage crevaison.",
        startingPrice: "Dès 25 CHF / pneu",
        details: [
          "Montage et équilibrage toutes dimensions",
          "Changement pneus été / hiver avec stockage sur demande",
          "Réparation ou remplacement en cas de crevaison",
          "Conseils de choix selon votre usage et votre budget",
        ],
      },
      {
        slug: "preparation-expertise",
        icon: "clipboard-check",
        name: "Préparation à l'expertise",
        shortDescription: "Contrôle complet avant passage au service des automobiles.",
        startingPrice: "Dès 80 CHF",
        details: [
          "Contrôle des points vérifiés lors de l'expertise",
          "Liste claire des réparations nécessaires, si besoin",
          "Remise en conformité avant le rendez-vous officiel",
          "Conseils pour aborder l'expertise sereinement",
        ],
      },
      {
        slug: "depannage",
        icon: "hammer",
        name: "Dépannage",
        shortDescription: "Panne, crevaison, batterie à plat : une solution rapide.",
        startingPrice: "Sur devis",
        details: [
          "Diagnostic rapide en cas de panne",
          "Intervention prioritaire pour les situations bloquantes",
          "Remise en état ou orientation vers la réparation adaptée",
          "Conseils pour éviter que la panne ne se reproduise",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "Plus de 50 ans d'expérience, au service de votre véhicule.",
    intro:
      "Dirigé par Marco Marenghi, notre garage entretient et répare des véhicules de toutes marques à Renens depuis 1974, avec une exigence de sérieux et de rapidité qui n'a pas changé.",
    stats: [
      { value: "50+", label: "Années d'expérience" },
      { value: "5/5", label: "Note moyenne des clients" },
      { value: "100%", label: "Marques acceptées" },
    ],
    networkLabel: "Une clientèle fidèle depuis plusieurs générations",
    networkDescription:
      "De nombreux clients viennent chez nous depuis leurs premiers pas au volant, et nous confient aujourd'hui les véhicules de leurs enfants. Cette fidélité sur plusieurs générations reste notre meilleure référence.",
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients sur plusieurs plateformes : sérieux, rapidité et confiance reviennent le plus souvent.",
    items: [
      {
        author: "Jean-Pierre M.",
        context: "Client depuis plus de 20 ans",
        rating: 5,
        quote:
          "Je viens ici depuis toujours, comme mon père avant moi. Marco et son équipe sont d'un sérieux irréprochable, toujours honnêtes sur ce qui est vraiment nécessaire.",
      },
      {
        author: "Sandra V.",
        context: "Propriétaire d'une citadine",
        rating: 5,
        quote:
          "Accueil chaleureux et travail impeccable. Le diagnostic a été expliqué clairement, et la réparation faite dans les délais annoncés.",
      },
      {
        author: "Alain D.",
        context: "Propriétaire d'un utilitaire professionnel",
        rating: 5,
        quote:
          "Un garage d'une fiabilité totale pour l'entretien de mon véhicule professionnel. Rapides, disponibles, et toujours de bon conseil.",
      },
      {
        author: "Laura C.",
        context: "Nouvelle cliente",
        rating: 5,
        quote:
          "Panne de batterie un matin avant le travail : dépannée en moins d'une heure. Un service au-dessus de mes attentes pour une première visite.",
      },
    ],
  },

  appointment: {
    eyebrow: "Rendez-vous",
    title: "Réservez votre créneau en ligne.",
    intro:
      "Indiquez la prestation souhaitée, votre véhicule et vos disponibilités : nous confirmons votre rendez-vous rapidement par téléphone ou e-mail.",
    reassurances: [
      "Confirmation sous 24 heures, par téléphone ou e-mail",
      "Devis gratuit avant toute intervention",
      "Toutes marques et tous modèles acceptés",
      "Plus de 50 ans d'expérience à votre service",
    ],
  },

  about: {
    eyebrow: "À propos",
    title: "Un garage familial, dirigé par Marco Marenghi depuis 1974.",
    description:
      "Garage Marenghi est un garage automobile multimarques à Renens, dans la région lausannoise, actif depuis 1974 et dirigé par Marco Marenghi.",
    paragraphs: [
      "Garage Marenghi entretient et répare des véhicules de toutes marques depuis 1974, avec une équipe stable et une exigence de qualité qui a fait sa réputation sur plus de 50 ans.",
      "Notre approche reste simple : un diagnostic honnête, un devis clair avant toute intervention, et un travail fait dans les règles de l'art — entretien courant, réparation, ou préparation à l'expertise.",
      "Excellemment noté sur plusieurs plateformes d'avis, notre garage compte de nombreux clients fidèles depuis plusieurs générations, la meilleure preuve de confiance que nous puissions recevoir.",
    ],
    commitments: [
      "Plus de 50 ans d'expérience à Renens",
      "Toutes marques et tous modèles pris en charge",
      "Devis gratuit et transparent avant intervention",
      "Noté 5/5 sur plusieurs plateformes d'avis",
    ],
  },

  servicesPage: {
    eyebrow: "Nos prestations",
    title: "Tout ce dont votre véhicule a besoin, au même endroit.",
    intro:
      "Chaque prestation est présentée avec ce qu'elle comprend et un tarif indicatif. Un devis précis et gratuit vous est communiqué avant toute intervention.",
  },
};
