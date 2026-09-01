import {
  DoorOpen,
  Hammer,
  Layers,
  Leaf,
  Ruler,
  Sofa,
  Sparkles,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import type { MenuiserieFamilyIcon, MenuiserieValue } from "@/data/menuiserie";

/** Associe chaque identifiant d'icône de famille de savoir-faire à son icône Lucide. */
export const familyIcons: Record<MenuiserieFamilyIcon, LucideIcon> = {
  cabinetry: Sofa,
  outdoor: TreePine,
  "door-window": DoorOpen,
  stairs: Layers,
};

/** Icônes disponibles pour un point fort de la section confiance */
export const valueIcons: Record<MenuiserieValue["icon"], LucideIcon> = {
  ...familyIcons,
  ruler: Ruler,
  leaf: Leaf,
  hammer: Hammer,
  sparkles: Sparkles,
};
