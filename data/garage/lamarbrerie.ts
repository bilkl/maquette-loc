import type { GarageContent } from "./types";

/**
 * Contenu de démonstration pour Carrosserie de la Marbrerie SA.
 * Textes, tarifs indicatifs et avis à valider par l'entreprise avant publication.
 */
export const garageContent: GarageContent = {
  hero: {
    eyebrow: "Carouge — Genève",
    title: "Votre carrosserie de confiance à Carouge,",
    highlight: "depuis 1969.",
    subtitle:
      "Tôlerie, peinture automobile et redressage, toutes marques. Prenez rendez-vous en ligne en moins de deux minutes, ou appelez-nous directement après un choc.",
    primaryCta: { label: "Prendre rendez-vous", href: "#rendez-vous" },
    secondaryCta: { label: "Appeler la carrosserie" },
    quickFacts: [
      "Devis gratuit",
      "Toutes marques et toutes assurances",
      "Véhicule de prêt pendant les réparations",
    ],
  },

  services: {
    eyebrow: "Nos prestations",
    title: "Un atelier de carrosserie complet, pour toutes les marques.",
    intro:
      "De la petite rayure au choc important, notre équipe de carrossiers-peintres intervient sur tous types de véhicules avec le même souci du détail.",
    pricingNote:
      "Tarifs indicatifs, donnés à titre d'exemple pour cette maquette. Un devis précis et gratuit vous est toujours communiqué avant toute intervention, directement en lien avec votre assurance si besoin.",
    items: [
      {
        slug: "tolerie",
        icon: "hammer",
        name: "Tôlerie",
        shortDescription: "Réparation de carrosserie après choc, chocs et enfoncements.",
        startingPrice: "Sur devis",
        details: [
          "Redressage et remplacement des panneaux de carrosserie",
          "Réparation de portières, ailes, capots et pare-chocs",
          "Débosselage sans peinture pour les petits impacts",
          "Contrôle de l'alignement de la carrosserie après réparation",
        ],
      },
      {
        slug: "peinture-automobile",
        icon: "paint",
        name: "Peinture automobile",
        shortDescription: "Peinture au raccord de teinte exacte, cabine de peinture professionnelle.",
        startingPrice: "Sur devis",
        details: [
          "Recherche et raccord exact de la teinte d'origine",
          "Application en cabine de peinture professionnelle",
          "Retouches localisées ou reprise complète d'un élément",
          "Traitement anticorrosion avant peinture",
        ],
      },
      {
        slug: "redressage",
        icon: "wrench",
        name: "Redressage",
        shortDescription: "Remise en géométrie du châssis et de la structure après un choc important.",
        startingPrice: "Sur devis",
        details: [
          "Contrôle de la géométrie du châssis sur marbre",
          "Redressage structurel après choc important",
          "Vérification de la sécurité passive du véhicule",
          "Rapport détaillé transmis à votre assurance",
        ],
      },
      {
        slug: "remplacement-pare-brise",
        icon: "windshield",
        name: "Remplacement pare-brise",
        shortDescription: "Remplacement et calibrage des aides à la conduite, toutes marques.",
        startingPrice: "Dès 250 CHF",
        details: [
          "Remplacement pare-brise, vitres latérales et lunette arrière",
          "Calibrage des caméras et capteurs d'aide à la conduite",
          "Prise en charge directe par votre assurance casco",
          "Intervention rapide, souvent le jour même",
        ],
      },
      {
        slug: "diagnostic-apres-choc",
        icon: "diagnostic",
        name: "Diagnostic après choc",
        shortDescription: "Contrôle complet du véhicule après un accident, avant toute réparation.",
        startingPrice: "Dès 60 CHF",
        details: [
          "Contrôle électronique et mécanique après impact",
          "Détection des dommages non visibles à l'œil nu",
          "Devis détaillé poste par poste pour votre assurance",
          "Conseils clairs sur l'étendue réelle des réparations",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "Pourquoi nous choisir",
    title: "Plus de 55 ans d'expérience, au service de votre carrosserie.",
    intro:
      "Depuis 1969, l'équipe familiale de Carrosserie de la Marbrerie SA répare et repeint des véhicules de toutes marques à Carouge, avec la même exigence de sérieux et de précision.",
    stats: [
      { value: "55+", label: "Années d'expérience" },
      { value: "5", label: "Carrossiers-peintres" },
      { value: "24 h", label: "Réponse à votre demande" },
    ],
    networkLabel: "Membre de Carrosserie Suisse — Section Genève",
    networkDescription:
      "Carrosserie de la Marbrerie SA fait partie de Carrosserie Suisse, section Genève, qui réunit des carrossiers indépendants engagés sur la qualité des réparations, la transparence des prix et le respect des normes constructeur.",
  },

  testimonials: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients.",
    intro:
      "Des avis repris dans l'esprit de ceux laissés par nos clients en ligne : professionnalisme, précision du travail et confiance reviennent le plus souvent.",
    items: [
      {
        author: "Nathalie B.",
        context: "Propriétaire d'une Audi A3",
        rating: 5,
        quote:
          "Après un choc arrière, j'ai eu un devis clair en 24 heures et un véhicule de prêt immédiatement. Le raccord de peinture est parfait, on ne voit plus rien.",
      },
      {
        author: "David K.",
        context: "Propriétaire d'un utilitaire de société",
        rating: 5,
        quote:
          "Une équipe qui s'occupe de tout, y compris des échanges avec l'assurance. Travail soigné et délais annoncés respectés.",
      },
      {
        author: "Isabelle F.",
        context: "Propriétaire d'une Volvo V60",
        rating: 5,
        quote:
          "Rayure profonde sur toute la portière : le résultat est irréprochable et la teinte parfaitement raccordée. Une vraie maison de confiance depuis des générations à Carouge.",
      },
      {
        author: "Marc T.",
        context: "Propriétaire d'une BMW Série 1",
        rating: 5,
        quote:
          "Mon assurance me poussait vers un autre garage, mais j'ai fait valoir mon libre choix. Bien m'en a pris : diagnostic honnête et réparation impeccable.",
      },
    ],
  },

  appointment: {
    eyebrow: "Rendez-vous",
    title: "Réservez votre créneau en ligne.",
    intro:
      "Indiquez le type de dommage, votre véhicule et vos disponibilités : nous confirmons votre rendez-vous rapidement, par téléphone ou par e-mail.",
    reassurances: [
      "Confirmation sous 24 heures, par téléphone ou e-mail",
      "Devis gratuit avant toute intervention",
      "Toutes marques, tous modèles et toutes assurances acceptés",
      "Véhicule de prêt disponible pendant la durée des réparations",
    ],
  },

  about: {
    eyebrow: "À propos",
    title: "Un carrossier-peintre familial, actif à Carouge depuis 1969.",
    description:
      "Carrosserie de la Marbrerie SA est une carrosserie-peinture automobile familiale à Carouge (Genève), active depuis 1969.",
    paragraphs: [
      "Carrosserie de la Marbrerie SA répare et repeint des véhicules de toutes marques depuis 1969, avec une équipe de 5 carrossiers-peintres qui connaît ses clients et leur fait confiance depuis parfois plusieurs générations.",
      "Notre approche est simple : un diagnostic honnête après chaque choc, un devis clair avant toute intervention, et un travail fait dans les règles de l'art — de la petite retouche de peinture au redressage structurel après un accident important.",
      "Membres de Carrosserie Suisse, section Genève, nous nous engageons sur la transparence des prix et la qualité de nos interventions, avec l'équipement d'un grand atelier et la proximité d'une entreprise familiale de quartier.",
    ],
    commitments: [
      "Toutes marques, tous modèles et toutes assurances pris en charge",
      "Devis gratuit et transparent avant intervention",
      "Cabine de peinture professionnelle pour un raccord de teinte exact",
      "Véhicule de prêt disponible pendant la durée des réparations",
    ],
  },

  servicesPage: {
    eyebrow: "Nos prestations",
    title: "Tout ce dont votre carrosserie a besoin, au même endroit.",
    intro:
      "Chaque prestation est présentée avec ce qu'elle comprend et un tarif indicatif. Un devis précis et gratuit vous est communiqué avant toute intervention.",
  },

  beforeAfter: {
    eyebrow: "Nos réalisations",
    title: "Avant / après : des réparations qui ne laissent pas de trace.",
    intro:
      "Un aperçu du type de réparations menées par notre atelier — de la rayure profonde au choc plus important, avec toujours le même souci du raccord de teinte parfait.",
    note: "Photos d'exemple — illustrations génériques en attendant les vraies réalisations de l'atelier, à fournir avant publication.",
    items: [
      {
        damageType: "Choc latéral — portière et aile avant",
        description:
          "Redressage de la portière et de l'aile, remplacement des éléments trop endommagés, peinture raccordée sur l'ensemble du flanc du véhicule.",
      },
      {
        damageType: "Rayure profonde — capot",
        description:
          "Ponçage, traitement anticorrosion et reprise complète de la peinture du capot, avec raccord invisible sur les ailes adjacentes.",
      },
      {
        damageType: "Pare-chocs arrière enfoncé",
        description:
          "Débosselage, remplacement des fixations cassées et peinture du pare-chocs en cabine, capteurs de stationnement recalibrés.",
      },
      {
        damageType: "Grêle — carrosserie complète",
        description:
          "Débosselage sans peinture sur l'ensemble de la carrosserie, avec reprise localisée de peinture sur les zones les plus marquées.",
      },
    ],
  },

  postAccidentAdvice: {
    eyebrow: "Après un accident",
    title: "Les bons réflexes après un choc.",
    intro:
      "Quelques conseils pratiques pour bien gérer les premières heures après un accident, avant même de penser à la réparation.",
    tips: [
      {
        title: "Prenez des photos avant tout déplacement",
        description:
          "Si la situation le permet en sécurité, photographiez les dégâts sur les deux véhicules ainsi que la scène dans son ensemble, avant de déplacer les véhicules.",
      },
      {
        title: "Remplissez un constat amiable",
        description:
          "Décrivez les faits avec l'autre conducteur, sans admettre de tort sur place : les responsabilités seront établies par les assurances sur la base des éléments objectifs.",
      },
      {
        title: "Vous avez le libre choix de votre réparateur",
        description:
          "Même si votre assurance vous recommande un garage partenaire, la loi suisse vous laisse le libre choix du réparateur. Vous pouvez faire réparer votre véhicule où vous le souhaitez.",
      },
      {
        title: "Contactez-nous avant toute réparation",
        description:
          "Nous établissons un devis détaillé et pouvons échanger directement avec votre assurance pour la prise en charge du dossier, avant le début des travaux.",
      },
    ],
    cta: { label: "Nous contacter après un choc", href: "#rendez-vous" },
  },
};
