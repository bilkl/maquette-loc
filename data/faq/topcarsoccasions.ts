import type { FaqItem } from "./types";

/**
 * Questions/réponses de démonstration pour TopCars Occasions.
 * Conditions exactes (garantie, financement, livraison) à valider par l'agence.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Les véhicules sont-ils contrôlés avant la vente ?",
    answer:
      "Oui, chaque véhicule passe par un contrôle avant sa mise en ligne. Le détail des points vérifiés vous est communiqué avec le dossier du véhicule.",
  },
  {
    question: "Une garantie est-elle incluse ?",
    answer:
      "Une garantie de 12 mois est incluse sur l'ensemble du catalogue. Une extension de garantie peut être proposée selon le véhicule choisi.",
  },
  {
    question: "Combien de temps pour recevoir une estimation de reprise ?",
    answer:
      "Après réception de votre demande (marque, modèle, année, kilométrage, état), nous vous recontactons avec une première estimation sous 24 heures.",
  },
  {
    question: "Puis-je me faire livrer mon véhicule ?",
    answer:
      "Oui, une livraison est possible dans toute la Suisse pour les clients qui ne peuvent pas se déplacer jusqu'à Lausanne ou Genève. Les modalités et frais éventuels vous sont communiqués avant confirmation.",
  },
  {
    question: "Proposez-vous des solutions de financement ?",
    answer:
      "Oui, crédit auto et leasing sont proposés selon votre situation. Le taux et les mensualités vous sont communiqués avant toute décision.",
  },
  {
    question: "Puis-je reprendre mon ancien véhicule à l'achat d'un nouveau ?",
    answer:
      "Oui, la valeur de reprise de votre véhicule peut être déduite directement du prix d'achat du véhicule choisi dans notre catalogue.",
  },
  {
    question: "Puis-je essayer un véhicule avant de l'acheter ?",
    answer:
      "Oui, un essai est possible sur rendez-vous. Contactez-nous pour convenir d'un créneau au bord du lac.",
  },
];
