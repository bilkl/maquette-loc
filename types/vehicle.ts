export type VehicleCategory =
  | "Berline sportive"
  | "Compacte sportive"
  | "SUV de luxe"
  | "Sportive"
  | "Supercar"
  | "Grand Tourisme"
  | "SUV supersport";

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

  // ---------------------------------------------------------------------------
  // Champs optionnels consommés par le gabarit "showroom" (config/brands/types.ts).
  // Ils restent facultatifs pour ne rien changer aux agences en gabarit "classic".
  // ---------------------------------------------------------------------------

  /** Récit court du modèle, utilisé à la place d'une fiche technique sèche */
  story?: string;
  /** Phrase-signature affichée en exergue sur la fiche showroom */
  signature?: string;
  /** Puissance annoncée, ex. "830 ch" */
  power?: string;
  /** Accélération annoncée, ex. "0–100 km/h en 2.9 s" */
  acceleration?: string;
  /** Vitesse maximale annoncée, ex. "330 km/h" */
  topSpeed?: string;
  /** Âge minimum du conducteur pour ce modèle (validation du formulaire showroom) */
  minDriverAge?: number;
}
