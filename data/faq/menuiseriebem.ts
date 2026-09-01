import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour Menuiserie BEM.
 * Conditions exactes (délais, garantie, zone d'intervention) à valider avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Intervenez-vous dans quelle région ?",
    answer:
      "Menuiserie BEM est basée à Aigle et intervient dans tout le canton de Vaud et le Chablais valaisan. N'hésitez pas à nous contacter pour vérifier la disponibilité pour votre adresse.",
  },
  {
    question: "Comment se déroule une demande de devis ?",
    answer:
      "Décrivez votre projet via le formulaire en ligne (type de projet, description, photos si vous le souhaitez) et vos disponibilités pour une visite. Nous revenons vers vous sous 24 heures pour organiser une visite d'estimation gratuite, puis vous transmettons un devis détaillé.",
  },
  {
    question: "Le devis et la visite d'estimation sont-ils gratuits ?",
    answer:
      "Oui, la visite sur place et le devis détaillé sont entièrement gratuits et sans engagement.",
  },
  {
    question: "Puis-je choisir l'essence de bois utilisée ?",
    answer:
      "Oui, nous vous conseillons sur le choix de l'essence (chêne, hêtre, mélèze, noyer...) selon votre projet, votre budget et l'usage prévu, en intérieur comme en extérieur.",
  },
  {
    question: "Travaillez-vous aussi bien en neuf qu'en rénovation ?",
    answer:
      "Oui, nous intervenons aussi bien sur des constructions neuves que sur la rénovation ou la restauration d'éléments existants (fenêtres, escaliers, mobilier ancien).",
  },
  {
    question: "Quels délais faut-il prévoir pour un projet sur mesure ?",
    answer:
      "Les délais dépendent de la nature et de l'ampleur du projet. Ils vous sont communiqués précisément lors du devis, après la visite d'estimation.",
  },
  {
    question: "Proposez-vous des visites pour des projets hors du canton de Vaud ?",
    answer:
      "Nous intervenons principalement dans le canton de Vaud et le Chablais valaisan. Contactez-nous pour toute demande en dehors de cette zone, nous étudierons la faisabilité au cas par cas.",
  },
];
