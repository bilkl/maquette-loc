import { getActiveBrand } from "@/config/brands";
import { bmimmobilierContent as bmimmobilier } from "./bmimmobilier";
import type { ImmobilierContent } from "./types";

/**
 * Contenu métier du gabarit "immobilier", résolu par agence — même logique
 * que data/dealer. Seules les agences dont config/brands/<id>.ts déclare
 * `template: "immobilier"` ont besoin d'une entrée ici.
 */
const immobilierByBrand: Record<string, ImmobilierContent> = {
  bmimmobilier,
};

const DEFAULT_IMMOBILIER_ID = "bmimmobilier";

export function getImmobilierContent(): ImmobilierContent {
  const { id } = getActiveBrand();
  const content = immobilierByBrand[id];

  if (!content) {
    console.warn(
      `[immobilier] Aucun contenu métier pour l'agence "${id}". Créez data/immobilier/${id}.ts et enregistrez-le dans data/immobilier/index.ts. Utilisation de "${DEFAULT_IMMOBILIER_ID}" par défaut.`,
    );
    return immobilierByBrand[DEFAULT_IMMOBILIER_ID];
  }

  return content;
}

export type { ImmobilierContent, ImmobilierService, ImmobilierStat, ImmobilierTestimonial } from "./types";
