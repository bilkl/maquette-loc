import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour Le Plombier (Jean-Marc Basler).
 * Conditions exactes (garantie, délais, zone d'intervention) à valider avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Intervenez-vous pour les particuliers et les entreprises ?",
    answer:
      "Oui, nous intervenons aussi bien chez les particuliers (villas, appartements) que pour les entreprises et les régies, pour tout type de dépannage, d'installation ou de rénovation sanitaire.",
  },
  {
    question: "Que faire en cas de fuite d'eau ?",
    answer:
      "Coupez l'arrivée d'eau générale si possible, puis contactez-nous directement par téléphone ou WhatsApp via le bouton d'urgence présent sur chaque page. Nous priorisons systématiquement les fuites en cours.",
  },
  {
    question: "Comment demander un devis ou une intervention ?",
    answer:
      "Via le formulaire en ligne sur ce site : indiquez le type de problème et vos disponibilités. Nous revenons vers vous sous 24 heures, avec un rappel automatique par WhatsApp. Vous pouvez aussi nous appeler directement.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. Après diagnostic, nous vous communiquons un devis clair et détaillé avant toute intervention. Aucun travail n'est effectué sans votre accord préalable.",
  },
  {
    question: "Intervenez-vous dans quelle région ?",
    answer:
      "Nous intervenons au Mont-sur-Lausanne et dans toute la région lausannoise. N'hésitez pas à nous contacter pour vérifier la disponibilité pour votre adresse.",
  },
  {
    question: "Proposez-vous un accompagnement pour une rénovation complète de salle de bains ?",
    answer:
      "Oui, de la conception à la pose finale, nous accompagnons chaque étape d'une rénovation de salle de bains, avec un devis détaillé avant le début des travaux.",
  },
  {
    question: "Comment savoir si j'ai une fuite non visible ?",
    answer:
      "Une facture d'eau anormalement élevée ou des traces d'humidité inexpliquées peuvent indiquer une fuite cachée. Nous proposons un service de détection pour localiser précisément le problème avant qu'il ne s'aggrave.",
  },
];
