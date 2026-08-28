import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour Garage Carlos Atelier.
 * Conditions exactes (garantie, moyens de paiement, délais) à valider par le garage.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Travaillez-vous sur toutes les marques de véhicules ?",
    answer:
      "Oui, notre atelier intervient sur toutes les marques et tous les modèles, avec le même équipement de diagnostic et le même souci du détail, qu'il s'agisse d'une révision courante ou d'une réparation plus complexe.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Via le formulaire de rendez-vous en ligne sur ce site : indiquez la prestation souhaitée, votre véhicule et vos disponibilités. Nous confirmons votre créneau sous 24 heures, avec un rappel automatique par WhatsApp. Vous pouvez aussi nous appeler directement.",
  },
  {
    question: "Proposez-vous une voiture de courtoisie ?",
    answer:
      "Une voiture de courtoisie peut être mise à disposition sur demande, selon disponibilité. Précisez votre besoin lors de la prise de rendez-vous pour que nous puissions l'organiser.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. Après diagnostic, nous vous communiquons un devis clair et détaillé avant toute intervention. Aucune réparation n'est effectuée sans votre accord préalable.",
  },
  {
    question: "Puis-je venir sans rendez-vous en cas d'urgence (pneu crevé, panne) ?",
    answer:
      "Pour les urgences comme un pneu crevé ou une panne, contactez-nous directement par téléphone ou WhatsApp : nous faisons notre possible pour vous dépanner rapidement, selon les disponibilités de l'atelier.",
  },
  {
    question: "Qu'est-ce que le réseau Autofit ?",
    answer:
      "Autofit est un réseau de garages indépendants suisses engagés sur la transparence des prix, la qualité des interventions et le sérieux du service. Garage Carlos Atelier en est membre.",
  },
  {
    question: "Accompagnez-vous la préparation à l'expertise ?",
    answer:
      "Oui. Nous contrôlons les points vérifiés lors de l'expertise du service des automobiles et vous indiquons clairement les éventuelles réparations nécessaires avant votre rendez-vous officiel.",
  },
];
