import type { PlombierContent } from "./types";

/**
 * Contenu de démonstration pour Le Plombier (Jean-Marc Basler).
 * Textes, tarifs indicatifs et avis à valider par l'entreprise avant publication.
 */
export const leplombierContent: PlombierContent = {
  hero: {
    eyebrow: "Le Mont-sur-Lausanne — depuis plus de 20 ans",
    title: "Votre plombier de confiance,",
    highlight: "intervention rapide garantie.",
    subtitle:
      "Fuite d'eau, panne, installation ou rénovation de salle de bains : Jean-Marc Basler intervient dans toute la région lausannoise avec le sérieux d'un artisan indépendant depuis plus de 20 ans.",
    primaryCta: { label: "Demander une intervention", href: "#devis" },
    secondaryCta: { label: "Appeler maintenant" },
    quickFacts: [
      "Devis gratuit sous 24 h",
      "Intervention dans toute la région lausannoise",
      "Plombier indépendant depuis plus de 20 ans",
    ],
  },

  emergency: {
    label: "Une fuite d'eau, une urgence ?",
    callLabel: "Appelez-nous",
    whatsappLabel: "WhatsApp direct",
  },

  services: {
    eyebrow: "Nos prestations",
    title: "Toute la plomberie de votre logement, un seul artisan.",
    intro:
      "De l'urgence à la rénovation complète, en passant par l'entretien courant, nous couvrons l'ensemble des besoins en plomberie sanitaire d'un logement ou d'un local professionnel.",
    pricingNote:
      "Tarifs indicatifs, donnés à titre d'exemple pour cette maquette. Un devis précis et gratuit vous est toujours communiqué avant toute intervention.",
    items: [
      {
        slug: "installations-sanitaires",
        icon: "wrench",
        name: "Installations sanitaires",
        shortDescription: "Pose et raccordement d'appareils sanitaires, neuf ou remplacement.",
        startingPrice: "Sur devis",
        details: [
          "Installation de lavabos, éviers, WC et robinetterie",
          "Raccordement de chauffe-eau et de machines à laver",
          "Mise en place de nouveaux points d'eau",
          "Conseils sur le choix des équipements",
        ],
      },
      {
        slug: "depannage",
        icon: "alert-triangle",
        name: "Dépannage",
        shortDescription: "Fuite, panne, canalisation bouchée : intervention rapide.",
        startingPrice: "Dès 150 CHF",
        details: [
          "Réparation de fuites sur canalisations et raccords",
          "Remise en service rapide après panne",
          "Réparation ou remplacement de robinetterie défectueuse",
          "Intervention prioritaire en cas d'urgence",
        ],
      },
      {
        slug: "renovation-salle-de-bains",
        icon: "bath",
        name: "Rénovation salle de bains",
        shortDescription: "Transformation complète, de la conception à la pose.",
        startingPrice: "Sur devis",
        details: [
          "Conception et conseil d'aménagement",
          "Dépose de l'ancienne installation",
          "Pose de douche, baignoire, sanitaires et carrelage",
          "Mise aux normes de l'installation existante",
        ],
      },
      {
        slug: "debouchage",
        icon: "droplet",
        name: "Débouchage",
        shortDescription: "Canalisations, WC et évacuations bouchées, toutes causes.",
        startingPrice: "Dès 120 CHF",
        details: [
          "Débouchage mécanique ou haute pression",
          "Intervention sur canalisations, WC et évacuations",
          "Diagnostic de la cause du bouchon",
          "Conseils pour éviter la récidive",
        ],
      },
      {
        slug: "detartrage",
        icon: "thermometer",
        name: "Détartrage",
        shortDescription: "Chauffe-eau, robinetterie et canalisations entartrés.",
        startingPrice: "Dès 100 CHF",
        details: [
          "Détartrage de chauffe-eau et ballons d'eau chaude",
          "Entretien préventif de la robinetterie",
          "Contrôle de la pression et du débit d'eau",
          "Recommandations selon la dureté de l'eau",
        ],
      },
      {
        slug: "detection-fuites",
        icon: "search-check",
        name: "Détection de fuites",
        shortDescription: "Recherche de fuite non visible avant qu'elle ne s'aggrave.",
        startingPrice: "Sur devis",
        details: [
          "Recherche de fuite sur réseau enterré ou encastré",
          "Diagnostic de surconsommation d'eau inexpliquée",
          "Localisation précise avant travaux",
          "Rapport clair pour la suite de l'intervention",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "Plus de 20 ans d'expérience, au service de votre installation.",
    intro:
      "Plombier indépendant au Mont-sur-Lausanne, actif depuis plus de 20 ans dans la région lausannoise.",
    stats: [
      { value: "20+", label: "Années d'expérience" },
      { value: "24 h", label: "Réponse à votre demande" },
      { value: "100%", label: "Devis gratuits et transparents" },
    ],
    values: [
      {
        icon: "clock",
        title: "Intervention rapide",
        description:
          "Une urgence n'attend pas : priorité donnée aux fuites et pannes, avec un déplacement rapide dans la région.",
      },
      {
        icon: "sparkles",
        title: "Travail soigné",
        description:
          "Chaque intervention est réalisée avec le même souci du détail, du simple dépannage à la rénovation complète.",
      },
      {
        icon: "shield-check",
        title: "Confiance",
        description:
          "Plus de 20 ans d'expérience au Mont-sur-Lausanne, avec des clients qui reviennent d'une génération à l'autre.",
      },
      {
        icon: "wrench",
        title: "Artisan indépendant",
        description:
          "Un interlocuteur unique, du premier appel à la fin des travaux — pas d'intermédiaire, pas de sous-traitance.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients : rapidité, sérieux et confiance reviennent le plus souvent.",
    items: [
      {
        author: "Claire M.",
        context: "Propriétaire au Mont-sur-Lausanne",
        rating: 5,
        quote:
          "Fuite d'eau un dimanche soir : il est venu dans l'heure et a réglé le problème proprement. On sent l'expérience de quelqu'un qui fait ce métier depuis longtemps.",
      },
      {
        author: "Thierry V.",
        context: "Rénovation complète de salle de bains",
        rating: 5,
        quote:
          "Devis clair, délais tenus, et un travail impeccable pour la rénovation de notre salle de bains. Aucune mauvaise surprise du début à la fin.",
      },
      {
        author: "Isabelle R.",
        context: "Propriétaire, entretien annuel",
        rating: 5,
        quote:
          "Toujours ponctuel et honnête sur ce qui est vraiment nécessaire. Un plombier de confiance, ça se garde précieusement.",
      },
      {
        author: "David P.",
        context: "Gérant d'un immeuble locatif",
        rating: 5,
        quote:
          "Détection d'une fuite invisible qui faisait grimper la facture d'eau depuis des mois. Diagnostic précis, intervention rapide.",
      },
    ],
  },

  appointment: {
    eyebrow: "Devis & intervention",
    title: "Demandez votre intervention en quelques minutes.",
    intro:
      "Indiquez le type de problème et vos disponibilités : nous revenons vers vous rapidement pour confirmer une intervention, avec un rappel automatique par WhatsApp.",
    reassurances: [
      "Devis gratuit et sans engagement",
      "Réponse sous 24 heures, par téléphone ou WhatsApp",
      "Intervention d'urgence disponible en cas de fuite",
      "Plombier indépendant, un interlocuteur unique du début à la fin",
    ],
    whatsappLabel: "Besoin d'une réponse plus rapide ? Écrivez-nous sur WhatsApp",
  },

  about: {
    eyebrow: "À propos",
    title: "Un plombier indépendant, actif au Mont-sur-Lausanne depuis plus de 20 ans.",
    description:
      "Le Plombier (Jean-Marc Basler) est un plombier indépendant au Mont-sur-Lausanne, actif depuis plus de 20 ans dans la région lausannoise.",
    paragraphs: [
      "Jean-Marc Basler accompagne particuliers et professionnels depuis plus de 20 ans, avec une exigence constante sur la qualité d'exécution et le sérieux des interventions.",
      "Notre approche est directe : un diagnostic clair, un devis transparent avant toute intervention, et un travail réalisé dans les règles de l'art — qu'il s'agisse d'un simple dépannage, d'un entretien ou d'une rénovation complète de salle de bains.",
      "Une fuite d'eau ne prévient pas : nous priorisons toujours les situations urgentes, avec un déplacement rapide dans toute la région lausannoise.",
    ],
    commitments: [
      "Plus de 20 ans d'expérience au Mont-sur-Lausanne",
      "Devis gratuit et transparent avant toute intervention",
      "Intervention prioritaire en cas d'urgence (fuite d'eau)",
      "Un interlocuteur unique, du premier appel à la fin des travaux",
    ],
  },

  servicesPage: {
    eyebrow: "Nos prestations",
    title: "Tout ce dont votre installation sanitaire a besoin, au même endroit.",
    intro:
      "Chaque prestation est présentée avec ce qu'elle comprend et un tarif indicatif. Un devis précis et gratuit vous est communiqué avant toute intervention.",
  },
};
