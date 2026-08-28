import { getActiveBrand } from "@/config/brands";
import { dealerContent as topcarsoccasions } from "./topcarsoccasions";
import type { DealerContent } from "./types";

/**
 * Contenu métier du gabarit "dealer", résolu par agence — même logique que
 * data/showroom et data/garage. Seules les agences dont config/brands/<id>.ts
 * déclare `template: "dealer"` ont besoin d'une entrée ici.
 */
const dealerByBrand: Record<string, DealerContent> = {
  topcarsoccasions,
};

const DEFAULT_DEALER_ID = "topcarsoccasions";

export function getDealerContent(): DealerContent {
  const { id } = getActiveBrand();
  const content = dealerByBrand[id];

  if (!content) {
    console.warn(
      `[dealer] Aucun contenu métier pour l'agence "${id}". Créez data/dealer/${id}.ts et enregistrez-le dans data/dealer/index.ts. Utilisation de "${DEFAULT_DEALER_ID}" par défaut.`,
    );
    return dealerByBrand[DEFAULT_DEALER_ID];
  }

  return content;
}

export type { DealerContent, DealerFinancingOption, DealerStat, DealerTestimonial } from "./types";
