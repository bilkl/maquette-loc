import { nlprestige } from "./nlprestige";
import { swisslocrent } from "./swisslocrent";
import type { BrandConfig } from "./types";

export const brands: Record<string, BrandConfig> = {
  nlprestige,
  swisslocrent,
};

export const DEFAULT_BRAND_ID = "nlprestige";

/**
 * Résout l'agence active à partir de la variable d'environnement NEXT_PUBLIC_BRAND.
 * Chaque projet Vercel pointe vers ce même dépôt et définit sa propre valeur ;
 * le build de production embarque alors uniquement les données de cette agence.
 * Ajouter une nouvelle agence : créer config/brands/<id>.ts, l'enregistrer ici,
 * puis créer un projet Vercel avec NEXT_PUBLIC_BRAND=<id>.
 */
export function getActiveBrand(): BrandConfig {
  const id = process.env.NEXT_PUBLIC_BRAND?.trim() || DEFAULT_BRAND_ID;
  const brand = brands[id];

  if (!brand) {
    console.warn(
      `[brands] NEXT_PUBLIC_BRAND="${id}" est inconnu (agences disponibles : ${Object.keys(brands).join(", ")}). Utilisation de "${DEFAULT_BRAND_ID}" par défaut.`,
    );
    return brands[DEFAULT_BRAND_ID];
  }

  return brand;
}

export type { BrandConfig, NavLink } from "./types";
