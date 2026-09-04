import {
  Building,
  Building2,
  Calculator,
  Home,
  Scale,
  Search,
  Tag,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import type { PropertyType } from "@/types/property";
import type { ImmobilierService } from "@/data/immobilier";

/** Associe chaque type de bien à son icône Lucide, pour les filtres et les cartes. */
export const propertyTypeIcons: Record<PropertyType, LucideIcon> = {
  Appartement: Building2,
  Villa: Home,
  Terrain: TreePine,
  Promotion: Building,
};

/** Associe chaque service ("Nos services") à son icône Lucide. */
export const serviceIcons: Record<ImmobilierService["icon"], LucideIcon> = {
  sale: Tag,
  buy: Search,
  estimate: Calculator,
  promotion: Building,
  legal: Scale,
};
