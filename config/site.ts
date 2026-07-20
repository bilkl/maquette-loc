// Point d'entrée unique consommé par tout le reste du site.
// Le contenu réel (nom, couleurs, coordonnées, textes, images...) vit dans
// config/brands/<id>.ts et est sélectionné via NEXT_PUBLIC_BRAND au build.
// Voir config/brands/index.ts pour ajouter une nouvelle agence.
import { getActiveBrand } from "@/config/brands";

export const siteConfig = getActiveBrand();

export type SiteConfig = typeof siteConfig;
export type { NavLink } from "@/config/brands";
