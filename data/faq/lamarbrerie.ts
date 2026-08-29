import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour Carrosserie de la Marbrerie SA.
 * Conditions exactes (garantie, moyens de paiement, délais) à valider avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Dois-je faire réparer mon véhicule chez le garage recommandé par mon assurance ?",
    answer:
      "Non. La loi suisse vous laisse le libre choix de votre réparateur, même si votre assurance vous recommande un garage partenaire. Vous pouvez nous confier votre véhicule et nous nous chargeons des échanges avec votre assurance.",
  },
  {
    question: "Travaillez-vous sur toutes les marques de véhicules ?",
    answer:
      "Oui, notre atelier intervient sur toutes les marques et tous les modèles, avec le même équipement de diagnostic, de redressage et de peinture, qu'il s'agisse d'une petite rayure ou d'un choc important.",
  },
  {
    question: "Comment prendre rendez-vous après un accident ?",
    answer:
      "Via le formulaire de rendez-vous en ligne sur ce site : indiquez le type de dommage, votre véhicule et vos disponibilités. Nous confirmons votre créneau sous 24 heures, par téléphone ou par e-mail. Vous pouvez aussi nous appeler directement.",
  },
  {
    question: "Proposez-vous un véhicule de prêt ?",
    answer:
      "Un véhicule de prêt peut être mis à disposition pendant la durée des réparations, selon disponibilité. Précisez votre besoin lors de la prise de rendez-vous pour que nous puissions l'organiser.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. Après diagnostic, nous vous communiquons un devis clair et détaillé avant toute intervention. Aucune réparation n'est effectuée sans votre accord, ni sans validation de votre assurance si le dossier passe par elle.",
  },
  {
    question: "La teinte de peinture sera-t-elle exactement raccordée ?",
    answer:
      "Oui, c'est l'un des points sur lesquels nous sommes les plus exigeants : recherche de la teinte exacte constructeur et application en cabine de peinture professionnelle, pour un raccord invisible sur les éléments adjacents.",
  },
  {
    question: "Qu'est-ce que Carrosserie Suisse ?",
    answer:
      "Carrosserie Suisse est l'association professionnelle des carrossiers suisses. Sa section genevoise réunit des entreprises engagées sur la qualité des réparations, la transparence des prix et le respect des normes constructeur. Carrosserie de la Marbrerie SA en est membre.",
  },
];
