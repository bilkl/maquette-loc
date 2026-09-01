import {
  AlertTriangle,
  Bath,
  Clock,
  Droplet,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { PlombierServiceIcon, PlombierValue } from "@/data/plombier";

/** Associe chaque identifiant d'icône de service à son icône Lucide. */
export const serviceIcons: Record<PlombierServiceIcon, LucideIcon> = {
  droplet: Droplet,
  wrench: Wrench,
  bath: Bath,
  "search-check": SearchCheck,
  thermometer: Thermometer,
  "alert-triangle": AlertTriangle,
};

/** Icônes disponibles pour un point fort de la section confiance */
export const valueIcons: Record<PlombierValue["icon"], LucideIcon> = {
  ...serviceIcons,
  "shield-check": ShieldCheck,
  clock: Clock,
  sparkles: Sparkles,
};
