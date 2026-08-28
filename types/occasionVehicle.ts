export type OccasionCategory =
  | "Citadine"
  | "Berline"
  | "Break"
  | "SUV"
  | "Utilitaire"
  | "Sportive"
  | "Cabriolet";

export type OccasionFuel = "Essence" | "Diesel" | "Hybride" | "Électrique";
export type OccasionTransmission = "Automatique" | "Manuelle";

/** État général du véhicule, tel qu'affiché sur la fiche */
export type OccasionCondition = "Excellent état" | "Très bon état" | "Bon état";

export interface OccasionVehicle {
  /** Identifiant unique utilisé dans l'URL /vehicules/[slug] */
  slug: string;
  brand: string;
  model: string;
  category: OccasionCategory;
  /** Année de première mise en circulation */
  year: number;
  /** Kilométrage au compteur */
  mileage: number;
  seats: number;
  transmission: OccasionTransmission;
  fuel: OccasionFuel;
  /** Prix de vente, en CHF (montant unique, pas un tarif journalier) */
  price: number;
  condition: OccasionCondition;
  /** Disponibilité affichée sur la maquette */
  available: boolean;
  /** Image principale utilisée dans le catalogue */
  coverImage: string;
  /** Galerie complète affichée sur la fiche véhicule */
  gallery: string[];
  description: string;
  highlights: string[];
  /** Contrôles et prestations incluses à la vente (garantie, expertise, carnet…) */
  included: string[];
}
