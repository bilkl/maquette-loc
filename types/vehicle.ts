export type VehicleCategory =
  | "Berline sportive"
  | "Compacte sportive"
  | "SUV de luxe"
  | "Sportive";

export type FuelType = "Essence" | "Diesel" | "Hybride" | "Électrique";
export type Transmission = "Automatique" | "Manuelle";
export type RentalDuration = "courte" | "longue" | "courte-et-longue";

export interface Vehicle {
  /** Identifiant unique utilisé dans l'URL /vehicules/[slug] */
  slug: string;
  brand: string;
  model: string;
  category: VehicleCategory;
  seats: number;
  transmission: Transmission;
  fuel: FuelType;
  /** Prix indicatif par jour, en CHF */
  pricePerDay: number;
  /** Disponibilité affichée sur la maquette */
  available: boolean;
  durations: RentalDuration[];
  /** Image principale utilisée dans les listes et cartes */
  coverImage: string;
  /** Galerie complète affichée sur la fiche véhicule */
  gallery: string[];
  description: string;
  highlights: string[];
  /** Options additionnelles proposées à la réservation */
  options: string[];
  essentialConditions: string[];
}
