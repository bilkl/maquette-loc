import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour Di Stefano Electricité Sàrl.
 * Conditions exactes (garantie, délais, subventions bornes VE) à valider avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Intervenez-vous pour les particuliers et les entreprises ?",
    answer:
      "Oui, nous intervenons aussi bien chez les particuliers (villas, appartements) que pour les entreprises et copropriétés, pour tout type d'installation électrique, de contrôle OIBT ou de borne de recharge.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Via le formulaire de devis en ligne sur ce site : indiquez le type d'intervention souhaité et vos disponibilités. Nous revenons vers vous sous 24 heures, avec un rappel automatique par WhatsApp. Vous pouvez aussi nous appeler directement.",
  },
  {
    question: "Que faire en cas d'urgence électrique (panne, coupure) ?",
    answer:
      "Contactez-nous directement par téléphone ou WhatsApp via le bouton d'urgence présent sur chaque page. Nous priorisons les situations à risque et faisons notre possible pour intervenir rapidement.",
  },
  {
    question: "Installez-vous des bornes de recharge pour tous les véhicules électriques ?",
    answer:
      "Oui, nos installations sont compatibles avec toutes les marques de véhicules électriques et hybrides rechargeables. Nous étudions votre installation existante pour dimensionner correctement le raccordement, y compris pour plusieurs bornes avec gestion dynamique de charge.",
  },
  {
    question: "Qu'est-ce qu'un contrôle OIBT et à quelle fréquence est-il obligatoire ?",
    answer:
      "Le contrôle OIBT (Ordonnance sur les Installations à Basse Tension) vérifie la sécurité de votre installation électrique. Sa périodicité dépend du type de bâtiment ; nous vous accompagnons dans les démarches et établissons le rapport de sécurité (RS) nécessaire.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. Après diagnostic ou étude de votre projet, nous vous communiquons un devis clair et détaillé avant toute intervention. Aucun travail n'est effectué sans votre accord préalable.",
  },
  {
    question: "Proposez-vous des solutions de domotique sur mesure ?",
    answer:
      "Oui, de l'éclairage connecté au contrôle d'accès en passant par la gestion du chauffage, nous concevons des solutions domotiques adaptées à votre logement ou votre local professionnel.",
  },
];
