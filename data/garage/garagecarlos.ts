import type { GarageContent } from "./types";

/**
 * Contenu de démonstration pour Garage Carlos Atelier.
 * Textes, tarifs indicatifs et avis à valider par le garage avant publication.
 */
export const garageContent: GarageContent = {
  hero: {
    eyebrow: "Satigny — Genève",
    title: "Votre garage de confiance à Satigny,",
    highlight: "depuis 2008.",
    subtitle:
      "Réparation toutes marques, pneus, diagnostic et préparation à l'expertise. Prenez rendez-vous en ligne en moins de deux minutes, ou appelez-nous directement.",
    primaryCta: { label: "Prendre rendez-vous", href: "#rendez-vous" },
    secondaryCta: { label: "Appeler le garage" },
    quickFacts: [
      "Devis gratuit",
      "Toutes marques acceptées",
      "Voiture de courtoisie sur demande",
    ],
  },

  services: {
    eyebrow: "Nos prestations",
    title: "Un atelier complet, pour toutes les marques.",
    intro:
      "De l'entretien courant à la préparation à l'expertise, notre équipe intervient sur tous types de véhicules avec le même souci du détail.",
    pricingNote:
      "Tarifs indicatifs, donnés à titre d'exemple pour cette maquette. Un devis précis et gratuit vous est toujours communiqué avant toute intervention.",
    items: [
      {
        slug: "revision-vidange",
        icon: "wrench",
        name: "Révision et vidange",
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
        slug: "freins-embrayage",
        icon: "brake",
        name: "Freins et embrayage",
        shortDescription: "Contrôle, remplacement de plaquettes, disques et embrayage.",
        startingPrice: "Dès 90 CHF",
        details: [
          "Contrôle gratuit du système de freinage",
          "Remplacement plaquettes, disques et étriers",
          "Diagnostic et remplacement d'embrayage",
          "Purge et remplacement du liquide de frein",
        ],
      },
      {
        slug: "diagnostic-electronique",
        icon: "diagnostic",
        name: "Diagnostic électronique",
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
        slug: "climatisation",
        icon: "snowflake",
        name: "Climatisation",
        shortDescription: "Contrôle, recharge et désinfection du circuit de climatisation.",
        startingPrice: "Dès 70 CHF",
        details: [
          "Contrôle de l'étanchéité et de la pression du circuit",
          "Recharge de gaz réfrigérant",
          "Désinfection et remplacement du filtre habitacle",
          "Diagnostic en cas de climatisation inefficace",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "16 ans d'expérience, au service de votre véhicule.",
    intro:
      "Depuis 2008, l'équipe de Garage Carlos Atelier répare, entretient et prépare des véhicules de toutes marques à Satigny, avec la même exigence de sérieux et de rapidité.",
    stats: [
      { value: "16+", label: "Années d'expérience" },
      { value: "100%", label: "Marques acceptées" },
      { value: "24 h", label: "Réponse à votre demande" },
    ],
    networkLabel: "Membre du réseau Autofit",
    networkDescription:
      "Garage Carlos Atelier fait partie du réseau Autofit, qui réunit des garages indépendants engagés sur la qualité de service, la transparence des prix et le sérieux des interventions.",
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients en ligne : professionnalisme, rapidité et confiance reviennent le plus souvent.",
    items: [
      {
        author: "Marc D.",
        context: "Propriétaire d'une Volkswagen Golf",
        rating: 5,
        quote:
          "Un accueil professionnel et un travail sérieux. Le diagnostic a été expliqué clairement, sans jargon inutile, et la réparation faite le jour même.",
      },
      {
        author: "Sophie R.",
        context: "Propriétaire d'une Audi A3",
        rating: 5,
        quote:
          "Rapide et de confiance. J'ai eu un rendez-vous très vite pour un problème de freins, et le devis annoncé a été respecté à la lettre.",
      },
      {
        author: "Julien M.",
        context: "Propriétaire d'un utilitaire",
        rating: 5,
        quote:
          "Ça fait plusieurs années que je viens ici pour l'entretien de mon véhicule professionnel. Toujours ponctuels, toujours honnêtes sur ce qui est vraiment nécessaire.",
      },
      {
        author: "Émilie P.",
        context: "Propriétaire d'une Renault Clio",
        rating: 5,
        quote:
          "Pneu crevé un matin avant le travail : ils m'ont dépannée dans l'heure. Un vrai soulagement de savoir qu'on peut compter sur un garage comme ça.",
      },
    ],
  },

  appointment: {
    eyebrow: "Rendez-vous",
    title: "Réservez votre créneau en ligne.",
    intro:
      "Indiquez la prestation souhaitée, votre véhicule et vos disponibilités : nous confirmons votre rendez-vous rapidement, avec un rappel automatique par WhatsApp.",
    reassurances: [
      "Confirmation sous 24 heures, par téléphone ou WhatsApp",
      "Devis gratuit avant toute intervention",
      "Toutes marques et tous modèles acceptés",
      "Voiture de courtoisie disponible sur demande",
    ],
    whatsappLabel: "Besoin d'une réponse plus rapide ? Écrivez-nous sur WhatsApp",
  },

  about: {
    eyebrow: "À propos",
    title: "Un garage indépendant, actif à Satigny depuis 2008.",
    paragraphs: [
      "Garage Carlos Atelier entretient et répare des véhicules de toutes marques depuis 2008, avec une équipe stable qui connaît ses clients et leurs véhicules.",
      "Notre approche est simple : un diagnostic honnête, un devis clair avant toute intervention, et un travail fait dans les règles de l'art — que ce soit pour un entretien courant, une panne, ou une préparation à l'expertise.",
      "Membres du réseau Autofit, nous nous engageons sur la transparence des prix et la qualité de nos interventions, avec l'équipement d'un grand garage et la proximité d'un atelier de quartier.",
    ],
    commitments: [
      "Toutes marques et tous modèles pris en charge",
      "Devis gratuit et transparent avant intervention",
      "Diagnostic électronique à jour des dernières technologies",
      "Voiture de courtoisie disponible sur demande",
    ],
  },

  servicesPage: {
    eyebrow: "Nos prestations",
    title: "Tout ce dont votre véhicule a besoin, au même endroit.",
    intro:
      "Chaque prestation est présentée avec ce qu'elle comprend et un tarif indicatif. Un devis précis et gratuit vous est communiqué avant toute intervention.",
  },
};
