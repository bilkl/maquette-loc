import type { FaqItem } from "./types";

/**
 * Réponses volontairement prudentes : les conditions réelles doivent être
 * confirmées par Bull Rent avant toute publication définitive.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Quels documents sont nécessaires pour louer un véhicule ?",
    answer:
      "En général, une pièce d'identité, un permis de conduire valide et un justificatif de domicile sont demandés. Les documents exacts peuvent varier selon le véhicule et vous seront confirmés avant la réservation.",
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
    question: "Les véhicules peuvent-ils sortir de Suisse ?",
    answer:
      "Cela dépend du véhicule et des conditions en vigueur au moment de la réservation. Les conditions exactes peuvent varier selon le véhicule. Elles vous seront confirmées avant la réservation.",
  },
  {
    question: "Le kilométrage est-il limité ?",
    answer:
      "Un forfait kilométrique peut s'appliquer selon la formule choisie, avec la possibilité d'ajouter une option kilométrage étendu. Les détails vous seront communiqués avant la confirmation.",
  },
  {
    question: "Comment fonctionne la location longue durée ?",
    answer:
      "La location longue durée est construite sur mesure selon votre profil et vos besoins. Un conseiller Bull Rent revient vers vous après votre demande pour établir une offre personnalisée.",
  },
  {
    question: "Puis-je ajouter un conducteur supplémentaire ?",
    answer:
      "Oui, l'ajout d'un conducteur supplémentaire est possible en option. Les conditions exactes peuvent varier selon le véhicule et vous seront confirmées avant la réservation.",
  },
  {
    question: "Comment connaître la disponibilité d'un véhicule ?",
    answer:
      "La disponibilité affichée sur le site est indicative. Pour une confirmation précise sur vos dates, contactez-nous par formulaire ou WhatsApp : nous vous répondrons rapidement.",
  },
];
