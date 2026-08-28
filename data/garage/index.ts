import { getActiveBrand } from "@/config/brands";
import { garageContent as garagecarlos } from "./garagecarlos";
import type { GarageContent } from "./types";

/**
 * Contenu métier du gabarit "garage", résolu par agence — même logique que
 * data/showroom. Seules les agences dont config/brands/<id>.ts déclare
 * `template: "garage"` ont besoin d'une entrée ici.
 */
const garageByBrand: Record<string, GarageContent> = {
  garagecarlos,
};

const DEFAULT_GARAGE_ID = "garagecarlos";

export function getGarageContent(): GarageContent {
  const { id } = getActiveBrand();
  const content = garageByBrand[id];

  if (!content) {
    console.warn(
      `[garage] Aucun contenu métier pour l'agence "${id}". Créez data/garage/${id}.ts et enregistrez-le dans data/garage/index.ts. Utilisation de "${DEFAULT_GARAGE_ID}" par défaut.`,
    );
    return garageByBrand[DEFAULT_GARAGE_ID];
  }

  return content;
}

export type {
  GarageContent,
  GarageService,
  GarageServiceIcon,
  GarageStat,
  GarageTestimonial,
} from "./types";
