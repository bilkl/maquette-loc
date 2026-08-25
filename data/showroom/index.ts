import { getActiveBrand } from "@/config/brands";
import { showroomContent as luxurcars } from "./luxurcars";
import type { ShowroomContent } from "./types";

/**
 * Contenu éditorial du gabarit "showroom", résolu par agence — même logique que
 * data/vehicles et data/faq. Seules les agences dont config/brands/<id>.ts
 * déclare `template: "showroom"` ont besoin d'une entrée ici.
 */
const showroomByBrand: Record<string, ShowroomContent> = {
  luxurcars,
};

const DEFAULT_SHOWROOM_ID = "luxurcars";

export function getShowroomContent(): ShowroomContent {
  const { id } = getActiveBrand();
  const content = showroomByBrand[id];

  if (!content) {
    console.warn(
      `[showroom] Aucun contenu éditorial pour l'agence "${id}". Créez data/showroom/${id}.ts et enregistrez-le dans data/showroom/index.ts. Utilisation de "${DEFAULT_SHOWROOM_ID}" par défaut.`,
    );
    return showroomByBrand[DEFAULT_SHOWROOM_ID];
  }

  return content;
}

export type { ShowroomContent, ShowroomChapter, ShowroomStat, ShowroomStep } from "./types";
