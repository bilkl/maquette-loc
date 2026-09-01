import { getActiveBrand } from "@/config/brands";
import { leplombierContent as leplombier } from "./leplombier";
import type { PlombierContent } from "./types";

/**
 * Contenu métier du gabarit "plombier", résolu par agence — même logique
 * que data/electricien. Seules les agences dont config/brands/<id>.ts
 * déclare `template: "plombier"` ont besoin d'une entrée ici.
 */
const plombierByBrand: Record<string, PlombierContent> = {
  leplombier,
};

const DEFAULT_PLOMBIER_ID = "leplombier";

export function getPlombierContent(): PlombierContent {
  const { id } = getActiveBrand();
  const content = plombierByBrand[id];

  if (!content) {
    console.warn(
      `[plombier] Aucun contenu métier pour l'agence "${id}". Créez data/plombier/${id}.ts et enregistrez-le dans data/plombier/index.ts. Utilisation de "${DEFAULT_PLOMBIER_ID}" par défaut.`,
    );
    return plombierByBrand[DEFAULT_PLOMBIER_ID];
  }

  return content;
}

export type {
  PlombierContent,
  PlombierService,
  PlombierServiceIcon,
  PlombierStat,
  PlombierValue,
  PlombierTestimonial,
} from "./types";
