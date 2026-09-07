import type { CoachContent } from "./types";

/**
 * Contenu de démonstration pour AM Coach Sportif (Anthony M.).
 * Textes, tarifs et avis à valider par le coach avant publication.
 */
export const amcoachContent: CoachContent = {
  hero: {
    eyebrow: "Genève — coaching individuel 40 ans et +",
    title: "Je transforme les corps.",
    titleSecondary: "Je répare la fatigue.",
    subtitle:
      "Pas plus de volonté, une meilleure méthode. Un accompagnement individuel pensé pour les plus de 40 ans qui veulent retrouver énergie et forme, sans méthode brutale.",
    primaryCta: { label: "Réserver mon bilan", href: "#bilan" },
    secondaryCta: { label: "Découvrir la méthode", href: "#methode" },
    quickFacts: ["200+ transformations accompagnées", "Bilan gratuit et sans engagement", "Suivi 100% individuel"],
  },

  audience: {
    eyebrow: "Pour qui",
    title: "Vous en avez fait beaucoup. Il manquait la bonne méthode.",
    intro:
      "AM Coach Sportif s'adresse aux personnes de plus de 40 ans qui veulent retrouver de l'énergie, perdre du poids durablement ou simplement se sentir mieux dans leur corps — sans programme générique ni méthode brutale.",
    points: [
      {
        icon: "battery",
        title: "Vous manquez d'énergie au quotidien",
        description:
          "Fatigue persistante, journées qui s'enchaînent sans réserve : on travaille d'abord sur ce qui vous freine avant de parler performance.",
      },
      {
        icon: "target",
        title: "Vous avez déjà essayé, sans résultat durable",
        description:
          "Régimes, salles de sport abandonnées, programmes trop génériques : la méthode s'adapte à vous, pas l'inverse.",
      },
      {
        icon: "heart",
        title: "Vous voulez une approche respectueuse de votre corps",
        description:
          "Pas de méthode brutale ni d'objectifs irréalistes : une progression pensée pour durer, adaptée à votre forme actuelle.",
      },
      {
        icon: "user-check",
        title: "Vous cherchez un accompagnement, pas juste un programme",
        description:
          "Un suivi individuel, des ajustements réguliers, un interlocuteur unique qui connaît votre histoire et vos contraintes.",
      },
    ],
  },

  method: {
    eyebrow: "La méthode",
    title: "Un accompagnement individuel, pas un programme générique.",
    intro:
      "Chaque parcours commence par un bilan complet, puis s'ajuste au fil des séances — pas de plan figé imposé à tout le monde.",
    steps: [
      {
        icon: "target",
        title: "Bilan initial complet",
        description:
          "Objectifs, contraintes physiques, mode de vie et niveau d'énergie : un point de départ précis pour construire votre programme.",
      },
      {
        icon: "dumbbell",
        title: "Programme personnalisé",
        description:
          "Un plan d'entraînement et d'hygiène de vie construit pour votre corps et votre quotidien — jamais copié d'un autre client.",
      },
      {
        icon: "activity",
        title: "Suivi individuel régulier",
        description:
          "Des séances et des points de suivi réguliers pour ajuster le programme selon vos progrès et votre ressenti.",
      },
      {
        icon: "trending-up",
        title: "Progression durable",
        description:
          "L'objectif n'est pas un résultat rapide et éphémère, mais une transformation qui tient dans la durée.",
      },
    ],
  },

  results: {
    eyebrow: "Résultats",
    title: "Plus de 200 transformations accompagnées.",
    intro:
      "Perte de poids, regain d'énergie, remise en forme durable : un aperçu des types de résultats obtenus par les personnes accompagnées.",
    stats: [
      { value: "200+", label: "Transformations accompagnées" },
      { value: "40+", label: "Âge moyen des clients" },
      { value: "100%", label: "Suivi individuel" },
    ],
    examples: [
      {
        icon: "flame",
        title: "Perte de poids durable",
        description: "Une évolution progressive du poids et de la composition corporelle, sans effet yo-yo.",
      },
      {
        icon: "battery",
        title: "Regain d'énergie au quotidien",
        description: "Moins de fatigue, un meilleur sommeil et davantage d'énergie dans la journée.",
      },
      {
        icon: "trending-up",
        title: "Remise en forme progressive",
        description: "Une amélioration mesurable de la forme physique générale, sans brusquer le corps.",
      },
    ],
    disclaimer:
      "Exemples illustratifs — pas de vraies photos avant/après de clients : aucune photo n'est publiée sans consentement explicite. Les résultats individuels varient selon chaque personne.",
  },

  pricing: {
    eyebrow: "Tarifs",
    title: "Un accompagnement à la mesure de votre objectif.",
    intro:
      "Chaque formule inclut un suivi individuel. Le bilan initial reste gratuit et sans engagement, quelle que soit la formule choisie ensuite.",
    plans: [
      {
        name: "Bilan découverte",
        price: "Gratuit",
        description: "Un premier échange pour comprendre votre objectif et évaluer votre point de départ.",
        features: [
          "Bilan complet de 45 minutes",
          "Évaluation de votre niveau et de vos contraintes",
          "Recommandations personnalisées, sans engagement",
        ],
      },
      {
        name: "Suivi mensuel",
        price: "[TARIF]",
        period: "/ mois",
        description: "Un accompagnement individuel régulier, pour une progression continue.",
        features: [
          "Séances individuelles hebdomadaires",
          "Programme ajusté chaque mois",
          "Suivi entre les séances (messages, conseils)",
        ],
        highlighted: true,
      },
      {
        name: "Programme trimestriel",
        price: "[TARIF]",
        period: "/ trimestre",
        description: "Pour une transformation en profondeur, avec un engagement sur la durée.",
        features: [
          "Tout le contenu du suivi mensuel",
          "Bilans d'étape réguliers",
          "Tarif préférentiel sur la durée",
        ],
      },
    ],
    note: "Tarifs de démonstration pour cette maquette, à confirmer par AM Coach Sportif avant publication.",
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent les personnes accompagnées.",
    intro:
      "Des avis repris dans l'esprit des retours reçus : écoute, méthode adaptée et résultats durables reviennent le plus souvent.",
    items: [
      {
        author: "Christine, 52 ans",
        context: "Perte de poids et regain d'énergie",
        rating: 5,
        quote:
          "Après plusieurs tentatives sans résultat durable, j'ai enfin trouvé une méthode qui respecte mon rythme. Moins fatiguée, plus énergique, et une perte de poids qui tient dans la durée.",
      },
      {
        author: "Philippe, 47 ans",
        context: "Remise en forme après une longue pause sportive",
        rating: 5,
        quote:
          "Un suivi vraiment individuel, pas un programme copié-collé. Chaque séance est ajustée selon comment je me sens, sans jamais me brusquer.",
      },
      {
        author: "Nathalie, 44 ans",
        context: "Gestion de la fatigue chronique",
        rating: 5,
        quote:
          "Je venais surtout pour la fatigue, pas pour perdre du poids. Le résultat a dépassé mes attentes sur les deux plans, avec une approche à l'écoute de mon corps.",
      },
      {
        author: "Marc, 55 ans",
        context: "Transformation physique sur un an",
        rating: 5,
        quote:
          "Un accompagnement sérieux, sans promesse irréaliste. Les progrès sont arrivés progressivement, et surtout ils sont restés.",
      },
    ],
  },

  booking: {
    eyebrow: "Bilan gratuit",
    title: "Réservez votre bilan gratuit.",
    intro:
      "Indiquez votre objectif principal et vos disponibilités : nous revenons vers vous rapidement pour organiser un premier échange, gratuit et sans engagement.",
    reassurances: [
      "Bilan gratuit et sans engagement",
      "Réponse sous 24 heures, par téléphone ou WhatsApp",
      "Un accompagnement individuel, pensé pour les plus de 40 ans",
      "Aucune méthode brutale, une progression adaptée à votre rythme",
    ],
    whatsappLabel: "Besoin d'une réponse plus rapide ? Écrivez-nous sur WhatsApp",
  },

  about: {
    eyebrow: "À propos",
    title: "Anthony M., coach sportif indépendant à Genève.",
    description:
      "AM Coach Sportif est un coaching sportif indépendant à Genève, spécialisé dans la transformation physique des personnes de plus de 40 ans.",
    paragraphs: [
      "Anthony M. accompagne depuis plusieurs années des personnes de plus de 40 ans dans leur transformation physique, avec une conviction simple : la motivation ne suffit pas, c'est la méthode qui fait la différence.",
      "Chaque accompagnement commence par un bilan complet et se construit ensuite au fil des séances, en tenant compte des contraintes physiques, du mode de vie et du niveau d'énergie de chaque personne.",
      "Plus de 200 transformations ont déjà été accompagnées, avec un objectif constant : des résultats qui durent, obtenus sans méthode brutale ni promesse irréaliste.",
    ],
    commitments: [
      "Suivi 100% individuel, sans programme générique",
      "Bilan gratuit et sans engagement",
      "Spécialiste des transformations physiques après 40 ans",
      "Une méthode pensée pour durer, pas pour un résultat éphémère",
    ],
  },
};
