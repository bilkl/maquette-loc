import {
  AlertTriangle,
  Gauge,
  Home,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Target,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ElectricienServiceIcon, ElectricienValue } from "@/data/electricien";

/** Associe chaque identifiant d'icône de service à son icône Lucide. */
export const serviceIcons: Record<ElectricienServiceIcon, LucideIcon> = {
  bolt: Zap,
  wifi: Wifi,
  "shield-check": ShieldCheck,
  "ev-charging": PlugZap,
  "home-cog": Home,
  "alert-triangle": AlertTriangle,
};

/** Icônes disponibles pour un point fort de la section "Pourquoi nous choisir" */
export const valueIcons: Record<ElectricienValue["icon"], LucideIcon> = {
  ...serviceIcons,
  sparkles: Sparkles,
  gauge: Gauge,
  target: Target,
};
