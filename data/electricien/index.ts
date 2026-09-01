import { getActiveBrand } from "@/config/brands";
import { distefanoContent as distefano } from "./distefano";
import type { ElectricienContent } from "./types";

/**
 * Contenu métier du gabarit "electricien", résolu par agence — même logique
 * que data/garage. Seules les agences dont config/brands/<id>.ts déclare
 * `template: "electricien"` ont besoin d'une entrée ici.
 */
const electricienByBrand: Record<string, ElectricienContent> = {
  distefano,
};

const DEFAULT_ELECTRICIEN_ID = "distefano";

export function getElectricienContent(): ElectricienContent {
  const { id } = getActiveBrand();
  const content = electricienByBrand[id];

  if (!content) {
    console.warn(
      `[electricien] Aucun contenu métier pour l'agence "${id}". Créez data/electricien/${id}.ts et enregistrez-le dans data/electricien/index.ts. Utilisation de "${DEFAULT_ELECTRICIEN_ID}" par défaut.`,
    );
    return electricienByBrand[DEFAULT_ELECTRICIEN_ID];
  }

  return content;
}

export type {
  ElectricienContent,
  ElectricienService,
  ElectricienServiceIcon,
  ElectricienStat,
  ElectricienValue,
  ElectricienTestimonial,
  ElectricienEvChargingContent,
} from "./types";
