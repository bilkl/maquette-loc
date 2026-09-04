import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour B. Mooser Immobilier.
 * Conditions exactes (délais, honoraires, zone d'intervention) à valider avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "L'estimation de mon bien est-elle vraiment gratuite ?",
    answer:
      "Oui, l'estimation est entièrement gratuite et sans engagement. Elle est basée sur le marché local actuel et les caractéristiques précises de votre bien.",
  },
  {
    question: "Combien de temps faut-il pour vendre un bien ?",
    answer:
      "Le délai dépend du type de bien, de sa localisation et du marché au moment de la mise en vente. Nous vous donnons une estimation réaliste lors du premier rendez-vous.",
  },
  {
    question: "Accompagnez-vous jusqu'à la signature chez le notaire ?",
    answer:
      "Oui, notre accompagnement couvre l'ensemble du processus : de l'estimation initiale à la signature de l'acte de vente chez le notaire, en passant par les visites et la négociation.",
  },
  {
    question: "Travaillez-vous avec des acheteurs et des vendeurs ?",
    answer:
      "Oui, nous accompagnons aussi bien les propriétaires qui souhaitent vendre que les particuliers ou investisseurs à la recherche d'un bien à Genève et en Suisse romande.",
  },
  {
    question: "Proposez-vous un accompagnement pour les questions juridiques et fiscales ?",
    answer:
      "Nous vous mettons en relation avec des partenaires notaires et fiscalistes pour sécuriser chaque étape de votre transaction, de l'offre d'achat à la signature.",
  },
  {
    question: "Dans quelles régions intervenez-vous ?",
    answer:
      "Nous intervenons principalement à Genève et dans l'ensemble de la Suisse romande. Contactez-nous pour vérifier la couverture pour votre projet.",
  },
  {
    question: "Accompagnez-vous des projets de promotion immobilière ?",
    answer:
      "Oui, nous accompagnons des projets de promotion immobilière, de la commercialisation à la vente des lots aux acquéreurs finaux.",
  },
];
