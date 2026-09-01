import { getActiveBrand } from "@/config/brands";
import { menuiseriebemContent as menuiseriebem } from "./menuiseriebem";
import type { MenuiserieContent } from "./types";

/**
 * Contenu métier du gabarit "menuiserie", résolu par agence — même logique
 * que data/electricien ou data/plombier. Seules les agences dont
 * config/brands/<id>.ts déclare `template: "menuiserie"` ont besoin d'une
 * entrée ici.
 */
const menuiserieByBrand: Record<string, MenuiserieContent> = {
  menuiseriebem,
};

const DEFAULT_MENUISERIE_ID = "menuiseriebem";

export function getMenuiserieContent(): MenuiserieContent {
  const { id } = getActiveBrand();
  const content = menuiserieByBrand[id];

  if (!content) {
    console.warn(
      `[menuiserie] Aucun contenu métier pour l'agence "${id}". Créez data/menuiserie/${id}.ts et enregistrez-le dans data/menuiserie/index.ts. Utilisation de "${DEFAULT_MENUISERIE_ID}" par défaut.`,
    );
    return menuiserieByBrand[DEFAULT_MENUISERIE_ID];
  }

  return content;
}

export type {
  MenuiserieContent,
  MenuiserieFamily,
  MenuiserieFamilyIcon,
  MenuiserieGalleryItem,
  MenuiserieStat,
  MenuiserieValue,
  MenuiserieTestimonial,
} from "./types";
