import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour LuxurCars.
 * Les conditions exactes (âge, caution, kilométrage, assurance) doivent être
 * validées par l'agence avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Quelles conditions faut-il remplir pour conduire un modèle de la collection ?",
    answer:
      "Chaque modèle a son âge minimum et son ancienneté de permis, indiqués sur sa fiche. Une pièce d'identité, un permis valide et une caution sont demandés à la remise des clés. Les conditions définitives vous sont confirmées avant toute réservation ferme.",
  },
  {
    question: "Comment se passe la remise du véhicule ?",
    answer:
      "La remise se fait sur rendez-vous, à notre adresse genevoise ou à l'adresse de votre choix. Comptez une trentaine de minutes : état des lieux, réglages, prise en main des modes de conduite et réponses à vos questions avant le départ.",
  },
  {
    question: "Le kilométrage est-il limité ?",
    answer:
      "Un forfait kilométrique journalier est inclus, extensible sur demande au moment de la réservation. Le forfait applicable dépend du modèle et de la durée ; il est précisé dans votre offre.",
  },
  {
    question: "Puis-je sortir de Suisse avec le véhicule ?",
    answer:
      "C'est possible pour certains modèles et certaines destinations, à condition de l'annoncer avant le départ afin d'adapter la couverture d'assurance et les documents de bord. Merci de nous indiquer votre itinéraire lors de la demande.",
  },
  {
    question: "Faut-il réserver longtemps à l'avance ?",
    answer:
      "La collection est volontairement restreinte : nous conseillons de réserver quelques semaines à l'avance pour les week-ends, les périodes de salon et la saison d'hiver. Pour une date proche, contactez-nous directement, il arrive qu'un modèle se libère.",
  },
  {
    question: "Proposez-vous des locations de plusieurs semaines ou plusieurs mois ?",
    answer:
      "Oui, principalement sur les modèles SUV de la collection. Les conditions longue durée (kilométrage, entretien, tarif dégressif) sont établies sur devis, en fonction de la durée et de l'usage prévu.",
  },
  {
    question: "Une assurance est-elle comprise ?",
    answer:
      "Le véhicule est assuré, avec une franchise dont le montant dépend du modèle. Des options de réduction de franchise peuvent être proposées. Le détail exact des couvertures figure dans les conditions générales de location.",
  },
];
