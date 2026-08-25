import type { ShowroomContent } from "./types";

/**
 * Contenu éditorial de démonstration pour LuxurCars.
 * Textes à valider par l'agence avant publication.
 */
export const showroomContent: ShowroomContent = {
  hero: {
    eyebrow: "Genève — Suisse",
    titleLines: ["Une collection,", "pas un"],
    titleAccent: "parc de location.",
    subtitle:
      "Ferrari, Lamborghini, Maserati. Six modèles choisis un par un, confiés à la journée ou au mois, remis en main propre à Genève.",
    primaryCta: { label: "Découvrir la collection", href: "#collection" },
    secondaryCta: { label: "Réserver un modèle", href: "#reservation" },
    stats: [
      { value: "3", label: "Maisons italiennes" },
      { value: "6", label: "Modèles en collection" },
      { value: "24 h", label: "Réponse à votre demande" },
    ],
  },

  manifesto: {
    eyebrow: "Notre parti pris",
    title: "Nous ne louons pas des voitures. Nous en confions six.",
    paragraphs: [
      "Une flotte se compte, une collection se choisit. Nous avons préféré six modèles que nous connaissons par cœur à un catalogue que personne ne lit jusqu'au bout : chacun a son caractère, son usage, sa saison — et sa raison d'être ici.",
      "Chaque remise se fait en main propre, sur rendez-vous, sans comptoir ni file d'attente. Nous prenons le temps d'expliquer la voiture avant de vous en confier les clés, parce qu'une supercar mal comprise n'est jamais un bon souvenir.",
      "Le reste — les dates, la caution, le kilométrage — se règle en amont, par message ou de vive voix. Le jour J, il ne reste que la route.",
    ],
    signature: "L'équipe LuxurCars",
  },

  collection: {
    eyebrow: "La collection",
    title: "Trois maisons, trois manières de conduire.",
    intro:
      "Nous aurions pu classer ces modèles par cylindrée ou par tarif. Nous préférons les présenter par ce qu'ils font ressentir — c'est le seul critère qui compte au moment de choisir.",
    chapters: [
      {
        id: "ferrari",
        marque: "Ferrari",
        title: "L'évidence, en rouge ou non.",
        story: [
          "Ferrari est la marque que l'on nomme avant même de savoir quel modèle on veut. Nous en confions deux, volontairement opposés : la 296 GTB pour l'événement, la Roma pour le voyage.",
          "L'une se conduit comme un instrument, l'autre comme un grand tourisme feutré. Dans les deux cas, la même mécanique de précision — et la même façon de rendre ordinaire une route que l'on croyait connaître.",
        ],
        quote: "Une Ferrari ne se réserve pas pour aller quelque part. Elle se réserve pour le trajet.",
        hallmarks: [
          "Deux tempéraments : berlinette et grand tourisme",
          "Prise en main accompagnée systématique",
          "Idéal pour une occasion précise",
        ],
        image: "/brands/luxurcars/collection/ferrari.jpg",
        vehicleSlugs: ["ferrari-296-gtb", "ferrari-roma"],
      },
      {
        id: "lamborghini",
        marque: "Lamborghini",
        title: "L'énergie, assumée.",
        story: [
          "Une Lamborghini ne se fond dans aucun décor, et c'est exactement ce qu'on lui demande. La Huracán EVO garde l'un des derniers V10 atmosphériques de sa catégorie : un son qui monte sans filtre, une conduite qui exige un peu d'attention et le rend bien.",
          "L'Urus S, lui, raconte une autre histoire : cinq places, un coffre réel, la route de montagne en hiver — la même signature sonore, dans un format qui suit une famille pendant une semaine.",
        ],
        quote: "L'une pour une journée dont on se souvient. L'autre pour la semaine entière.",
        hallmarks: [
          "V10 atmosphérique sur la Huracán EVO",
          "Urus S équipé pour la montagne en saison",
          "Modèles les plus demandés en week-end",
        ],
        image: "/brands/luxurcars/collection/lamborghini.jpg",
        vehicleSlugs: ["lamborghini-huracan-evo", "lamborghini-urus-s"],
      },
      {
        id: "maserati",
        marque: "Maserati",
        title: "Le choix de ceux qui ont déjà tout essayé.",
        story: [
          "Maserati avance sans hausser le ton. La MC20 est une supercar à monocoque carbone et portes papillon que l'on croise rarement : c'est souvent la seconde réservation de nos clients, celle qui vient après la curiosité.",
          "Le Grecale Trofeo occupe l'autre extrémité de la collection — le modèle que l'on garde un mois, qui accepte le quotidien sans jamais devenir banal.",
        ],
        quote: "La marque que l'on choisit quand on n'a plus rien à prouver.",
        hallmarks: [
          "MC20 à châssis carbone et portes papillon",
          "Grecale Trofeo disponible en longue durée",
          "Le V6 Nettuno, dans deux carrosseries",
        ],
        image: "/brands/luxurcars/collection/maserati.jpg",
        vehicleSlugs: ["maserati-mc20", "maserati-grecale-trofeo"],
      },
    ],
  },

  experience: {
    eyebrow: "L'expérience",
    title: "De la demande aux clés, quatre moments.",
    intro:
      "Aucune étape ne se fait au comptoir. Tout est préparé en amont pour que la remise du véhicule reste le seul moment qui compte.",
    steps: [
      {
        title: "Vous nous dites ce que vous cherchez",
        description:
          "Un modèle précis, ou simplement une occasion — un anniversaire, un mariage, un week-end en montagne. Si vous hésitez, nous vous orientons vers la voiture qui correspond réellement à l'usage.",
      },
      {
        title: "Nous confirmons la disponibilité",
        description:
          "Réponse sous 24 heures avec les dates, les conditions exactes du modèle et le devis. Rien n'est engagé tant que vous n'avez pas validé l'offre.",
      },
      {
        title: "La voiture vous est remise en main propre",
        description:
          "À Genève ou à l'adresse de votre choix, sur rendez-vous. État des lieux, réglages, prise en main des modes de conduite : comptez une trentaine de minutes avant le départ.",
      },
      {
        title: "Nous restons joignables pendant la location",
        description:
          "Un numéro direct, du départ au retour. Question sur un itinéraire, un parking, une station-service : la réponse arrive dans la minute, pas dans la journée.",
      },
    ],
    services: [
      "Livraison et reprise à l'adresse de votre choix",
      "Prise en main accompagnée avant le départ",
      "Préparation du véhicule avant chaque remise",
      "Pneus hiver et porte-skis selon la saison",
      "Assistance directe pendant toute la location",
      "Conditions longue durée sur devis",
    ],
  },

  reservation: {
    eyebrow: "Réserver",
    title: "Dites-nous quand, nous nous occupons du reste.",
    intro:
      "Trois étapes, deux minutes. Vous recevez une réponse sous 24 heures avec la disponibilité, les conditions du modèle et le devis détaillé — sans engagement.",
    reassurances: [
      "Demande sans engagement : rien n'est débité en ligne",
      "Réponse humaine sous 24 heures, jamais un automate",
      "Conditions et caution communiquées avant toute validation",
      "Modification ou annulation possible selon les conditions du contrat",
    ],
    whatsappLabel: "Préférez-vous discuter ? Écrivez-nous sur WhatsApp",
  },

  faq: {
    eyebrow: "Questions fréquentes",
    title: "Ce que l'on nous demande avant de réserver.",
    intro:
      "Âge minimum, caution, kilométrage, sortie du territoire : les réponses les plus utiles, sans détour.",
  },

  collectionPage: {
    eyebrow: "La collection",
    title: "Six modèles, trois maisons.",
    intro:
      "Chaque voiture est présentée avec son caractère et son usage réel. Sélectionnez un modèle pour lire son récit, ses conditions et lancer une demande de réservation.",
  },
};
