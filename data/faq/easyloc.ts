import type { FaqItem } from "./types";

/**
 * Réponses volontairement prudentes : les conditions réelles doivent être
 * confirmées par Easy-Loc avant toute publication définitive.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Livrez-vous le véhicule à mon domicile ou sur mon lieu de travail ?",
    answer:
      "Oui, la livraison fait partie du service : le véhicule peut être amené à votre domicile, sur votre lieu de travail ou à un autre endroit convenu, à Genève et alentours. Le secteur et les éventuels frais de livraison vous sont confirmés avant la réservation.",
  },
  {
    question: "Quels documents sont nécessaires pour louer un véhicule ?",
    answer:
      "En général, une pièce d'identité et un permis de conduire valide sont demandés. Les documents exacts peuvent varier selon le véhicule et vous seront confirmés avant la réservation.",
  },
  {
    question: "Quel âge faut-il avoir pour louer ?",
    answer:
      "Un âge minimum est requis et peut varier selon la catégorie du véhicule. Cette information vous sera confirmée avant la réservation.",
  },
  {
    question: "Une caution est-elle demandée ?",
    answer:
      "Oui, une caution est généralement demandée avant la remise des clés. Son montant dépend du véhicule choisi et vous sera communiqué avant la confirmation.",
  },
  {
    question: "Le kilométrage est-il limité ?",
    answer:
      "Un forfait kilométrique peut s'appliquer selon la formule choisie, avec la possibilité d'ajouter une option kilométrage étendu. Les détails vous seront communiqués avant la confirmation.",
  },
  {
    question: "Les véhicules peuvent-ils sortir de Suisse ?",
    answer:
      "Cela dépend du véhicule et des conditions en vigueur au moment de la réservation. Elles vous seront confirmées avant la réservation.",
  },
  {
    question: "Comment fonctionne la location longue durée ?",
    answer:
      "La location longue durée est construite sur mesure selon vos besoins. Contactez Easy-Loc par formulaire ou WhatsApp pour recevoir une offre personnalisée.",
  },
  {
    question: "Comment connaître la disponibilité d'un véhicule ?",
    answer:
      "La disponibilité affichée sur le site est indicative. Pour une confirmation précise sur vos dates, contactez-nous par formulaire ou WhatsApp : nous vous répondrons rapidement.",
  },
];
