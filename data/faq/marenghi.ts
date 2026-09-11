import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour Garage Marenghi.
 * Conditions exactes (garantie, délais, horaires) à valider avant publication.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Travaillez-vous sur toutes les marques de véhicules ?",
    answer:
      "Oui, notre garage intervient sur toutes les marques et tous les modèles, sans exception, depuis 1974.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Via le formulaire de rendez-vous en ligne sur ce site : indiquez la prestation souhaitée, la marque et le modèle de votre véhicule, ainsi que vos disponibilités. Nous confirmons votre créneau sous 24 heures par téléphone ou e-mail. Vous pouvez aussi nous appeler directement.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. Un devis clair et détaillé vous est toujours communiqué avant toute intervention, sans surprise sur la facture finale.",
  },
  {
    question: "Proposez-vous un service de dépannage en cas de panne ?",
    answer:
      "Oui, nous intervenons rapidement en cas de panne, de crevaison ou de batterie à plat. Contactez-nous directement par téléphone pour toute situation urgente.",
  },
  {
    question: "Que comprend une préparation à l'expertise ?",
    answer:
      "Un contrôle complet des points vérifiés lors du passage au service des automobiles, avec une liste claire des éventuelles réparations nécessaires avant votre rendez-vous officiel.",
  },
  {
    question: "Depuis combien de temps le garage existe-t-il ?",
    answer:
      "Garage Marenghi est actif à Renens depuis 1974, soit plus de 50 ans d'expérience au service de notre clientèle, sur plusieurs générations.",
  },
];
