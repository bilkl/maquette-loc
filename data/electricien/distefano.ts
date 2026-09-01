import type { ElectricienContent } from "./types";

/**
 * Contenu de démonstration pour Di Stefano Electricité Sàrl.
 * Textes, tarifs indicatifs et avis à valider par l'entreprise avant publication.
 */
export const distefanoContent: ElectricienContent = {
  hero: {
    eyebrow: "Cheseaux-sur-Lausanne — depuis 2003",
    title: "Votre électricien indépendant de confiance,",
    highlight: "intervention rapide garantie.",
    subtitle:
      "Installations électriques conformes, contrôles OIBT, domotique et bornes de recharge pour véhicules électriques. Un devis clair, une équipe qui connaît son métier depuis plus de 20 ans.",
    primaryCta: { label: "Demander un devis", href: "#devis" },
    secondaryCta: { label: "Appeler maintenant" },
    quickFacts: [
      "Devis gratuit sous 24 h",
      "Interventions dans tout le district de Lausanne",
      "Spécialiste bornes de recharge VE",
    ],
  },

  emergency: {
    label: "Une urgence électrique ?",
    callLabel: "Appelez-nous",
    whatsappLabel: "WhatsApp direct",
  },

  services: {
    eyebrow: "Nos prestations",
    title: "Toutes vos installations électriques, une seule équipe.",
    intro:
      "Du courant fort au courant faible, en passant par la conformité et la mobilité électrique, nous couvrons l'ensemble des besoins électriques d'un logement ou d'un local professionnel.",
    pricingNote:
      "Tarifs indicatifs, donnés à titre d'exemple pour cette maquette. Un devis précis et gratuit vous est toujours communiqué avant toute intervention.",
    items: [
      {
        slug: "installations-electriques",
        icon: "bolt",
        name: "Installations électriques",
        shortDescription: "Courant fort : neuf, rénovation, mise aux normes, tableaux électriques.",
        startingPrice: "Sur devis",
        details: [
          "Installation électrique complète pour neuf ou rénovation",
          "Mise à niveau et remplacement de tableaux électriques",
          "Création de circuits dédiés (cuisine, chauffage, extérieur)",
          "Mise en conformité selon les normes en vigueur",
        ],
      },
      {
        slug: "courant-faible",
        icon: "wifi",
        name: "Courant faible & domotique",
        shortDescription: "Réseau fibre, câblage informatique, domotique et objets connectés.",
        startingPrice: "Sur devis",
        details: [
          "Câblage réseau et raccordement fibre optique",
          "Installation de systèmes domotiques (éclairage, volets, chauffage)",
          "Vidéophonie et contrôle d'accès",
          "Intégration d'objets connectés sur mesure",
        ],
      },
      {
        slug: "controle-oibt",
        icon: "shield-check",
        name: "Contrôles OIBT",
        shortDescription: "Contrôle périodique et rapport de sécurité de votre installation.",
        startingPrice: "Dès 250 CHF",
        details: [
          "Contrôle périodique obligatoire de l'installation électrique",
          "Rapport de sécurité (RS) pour vente ou location de bien",
          "Levée des défauts constatés lors d'un contrôle",
          "Accompagnement dans les démarches auprès du distributeur",
        ],
      },
      {
        slug: "bornes-recharge-ve",
        icon: "ev-charging",
        name: "Bornes de recharge VE",
        shortDescription: "Étude, installation et mise en service de bornes pour véhicules électriques.",
        startingPrice: "Sur devis",
        details: [
          "Étude de faisabilité et dimensionnement du raccordement",
          "Installation de bornes en habitat individuel, collectif ou entreprise",
          "Gestion dynamique de charge pour plusieurs bornes",
          "Mise en service et explication d'utilisation",
        ],
      },
      {
        slug: "depannage-urgence",
        icon: "alert-triangle",
        name: "Dépannage d'urgence",
        shortDescription: "Panne, coupure, disjoncteur qui saute : intervention rapide.",
        startingPrice: "Dès 150 CHF",
        details: [
          "Diagnostic de panne et recherche de défaut",
          "Remise en service rapide après coupure",
          "Réparation de tableaux, prises et circuits défectueux",
          "Intervention prioritaire pour les situations à risque",
        ],
      },
    ],
  },

  evCharging: {
    eyebrow: "Mobilité électrique",
    title: "Votre borne de recharge, installée par des spécialistes.",
    intro:
      "Le nombre de véhicules électriques explose en Suisse : nous accompagnons particuliers, copropriétés et entreprises dans l'installation de leur solution de recharge, de l'étude à la mise en service.",
    points: [
      "Compatible avec toutes les marques de véhicules électriques et hybrides",
      "Gestion dynamique de charge pour plusieurs bornes sans surcharger l'installation",
      "Solutions pour maison individuelle, copropriété et flottes d'entreprise",
      "Accompagnement dans les démarches administratives et les subventions",
    ],
    stats: [
      { value: "20+", label: "Années d'expérience" },
      { value: "100%", label: "Marques compatibles" },
      { value: "48 h", label: "Devis sous ce délai" },
    ],
    cta: { label: "Demander un devis borne VE", href: "#devis" },
    note: "Chiffres de démonstration pour cette maquette, à confirmer avant publication.",
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "Plus de 20 ans d'exigence, au service de votre installation.",
    intro:
      "Actifs à Cheseaux-sur-Lausanne depuis 2003, avec une exigence constante qui a fait notre réputation depuis le début.",
    stats: [
      { value: "20+", label: "Années d'expérience" },
      { value: "24 h", label: "Réponse à votre demande" },
      { value: "100%", label: "Interventions conformes OIBT" },
    ],
    values: [
      {
        icon: "sparkles",
        title: "Qualité d'exécution",
        description:
          "Un travail soigné, conforme aux normes en vigueur, pensé pour durer — pas de solution provisoire.",
      },
      {
        icon: "shield-check",
        title: "Propreté du chantier",
        description:
          "Votre intérieur ou votre local professionnel respecté : protection des sols, nettoyage systématique après intervention.",
      },
      {
        icon: "gauge",
        title: "Rapidité d'intervention",
        description:
          "Un devis rapide et des délais tenus, avec une priorité donnée aux situations urgentes ou à risque.",
      },
      {
        icon: "target",
        title: "Efficacité",
        description:
          "Un diagnostic précis dès la première visite, pour éviter les allers-retours inutiles et maîtriser votre budget.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients : sérieux, propreté et rapidité reviennent le plus souvent.",
    items: [
      {
        author: "Nathalie B.",
        context: "Propriétaire à Cheseaux-sur-Lausanne",
        rating: 5,
        quote:
          "Installation de notre borne de recharge faite proprement et expliquée en détail. Un vrai gain de temps pour comprendre le fonctionnement dès le premier jour.",
      },
      {
        author: "Marc-André T.",
        context: "Gérant d'un cabinet médical",
        rating: 5,
        quote:
          "Intervention rapide suite à une panne de tableau électrique en pleine journée de consultations. Ponctuels, efficaces, et le chantier a été laissé impeccable.",
      },
      {
        author: "Sandrine G.",
        context: "Propriétaire, rénovation complète",
        rating: 5,
        quote:
          "Devis clair, délais respectés, et une vraie écoute sur nos besoins en domotique. On sent l'expérience de plus de 20 ans dans le métier.",
      },
      {
        author: "Julien R.",
        context: "Copropriété, installation de bornes VE",
        rating: 5,
        quote:
          "Accompagnement sérieux pour équiper notre parking en bornes de recharge, avec une solution de gestion de charge bien pensée pour ne pas surcharger l'installation.",
      },
    ],
  },

  appointment: {
    eyebrow: "Devis & rendez-vous",
    title: "Demandez votre devis en quelques minutes.",
    intro:
      "Indiquez le type d'intervention souhaité et vos disponibilités : nous revenons vers vous rapidement pour confirmer un rendez-vous, avec un rappel automatique par WhatsApp.",
    reassurances: [
      "Devis gratuit et sans engagement",
      "Réponse sous 24 heures, par téléphone ou WhatsApp",
      "Intervention d'urgence disponible pour les situations à risque",
      "Spécialiste reconnu des bornes de recharge pour véhicules électriques",
    ],
    whatsappLabel: "Besoin d'une réponse plus rapide ? Écrivez-nous sur WhatsApp",
  },

  about: {
    eyebrow: "À propos",
    title: "Un électricien indépendant, actif à Cheseaux-sur-Lausanne depuis 2003.",
    description:
      "Di Stefano Electricité Sàrl est une entreprise d'électricité indépendante à Cheseaux-sur-Lausanne, active depuis 2003.",
    paragraphs: [
      "Di Stefano Electricité Sàrl accompagne particuliers et professionnels depuis 2003, avec une équipe stable et une exigence constante sur la qualité d'exécution et le sérieux des interventions.",
      "Notre approche est directe : un diagnostic clair, un devis transparent avant toute intervention, et un travail réalisé dans les règles de l'art — qu'il s'agisse d'une installation neuve, d'un contrôle OIBT ou de l'installation d'une borne de recharge.",
      "Face à l'essor de la mobilité électrique en Suisse, nous avons développé une expertise spécifique sur les bornes de recharge, pour accompagner nos clients dans cette transition avec des solutions adaptées à chaque installation.",
    ],
    commitments: [
      "Installations conformes aux normes OIBT en vigueur",
      "Devis gratuit et transparent avant toute intervention",
      "Spécialiste des bornes de recharge pour véhicules électriques",
      "Intervention d'urgence pour les situations à risque",
    ],
  },

  servicesPage: {
    eyebrow: "Nos prestations",
    title: "Tout ce dont votre installation électrique a besoin, au même endroit.",
    intro:
      "Chaque prestation est présentée avec ce qu'elle comprend et un tarif indicatif. Un devis précis et gratuit vous est communiqué avant toute intervention.",
  },
};
