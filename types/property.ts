export type PropertyType = "Appartement" | "Villa" | "Terrain" | "Promotion";

/** Statut affiché sur la fiche et la carte du bien */
export type PropertyStatus = "à vendre" | "réservé" | "vendu";

export interface Property {
  /** Identifiant unique utilisé dans l'URL /biens/[slug] */
  slug: string;
  title: string;
  type: PropertyType;
  /** Commune ou quartier, ex. "Cologny" */
  location: string;
  /** Prix de vente, en CHF (montant unique, pas un loyer) */
  price: number;
  /** Surface habitable ou surface du terrain, en m² */
  surface: number;
  /** Nombre de pièces (absent pour un terrain) */
  rooms?: number;
  /** Nombre de chambres (absent pour un terrain) */
  bedrooms?: number;
  status: PropertyStatus;
  /** Image principale utilisée dans le catalogue */
  coverImage: string;
  /** Galerie complète affichée sur la fiche du bien */
  gallery: string[];
  description: string;
  highlights: string[];
}
