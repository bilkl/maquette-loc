import { getActiveBrand } from "@/config/brands";
import { amcoachContent as amcoach } from "./amcoach";
import type { CoachContent } from "./types";

/**
 * Contenu métier du gabarit "coach", résolu par agence — même logique que
 * data/electricien ou data/plombier. Seules les agences dont
 * config/brands/<id>.ts déclare `template: "coach"` ont besoin d'une entrée
 * ici.
 */
const coachByBrand: Record<string, CoachContent> = {
  amcoach,
};

const DEFAULT_COACH_ID = "amcoach";

export function getCoachContent(): CoachContent {
  const { id } = getActiveBrand();
  const content = coachByBrand[id];

  if (!content) {
    console.warn(
      `[coach] Aucun contenu métier pour l'agence "${id}". Créez data/coach/${id}.ts et enregistrez-le dans data/coach/index.ts. Utilisation de "${DEFAULT_COACH_ID}" par défaut.`,
    );
    return coachByBrand[DEFAULT_COACH_ID];
  }

  return content;
}

export type {
  CoachContent,
  CoachIcon,
  CoachPoint,
  CoachStat,
  CoachTestimonial,
  CoachPricingPlan,
  CoachResultExample,
} from "./types";
