import {
  CircleDot,
  ClipboardCheck,
  Cpu,
  Disc,
  Snowflake,
  Car,
  Wrench,
  Hammer,
  PaintBucket,
  PanelTop,
  type LucideIcon,
} from "lucide-react";
import type { GarageServiceIcon } from "@/data/garage";

/** Associe chaque identifiant d'icône de service à son icône Lucide. */
export const serviceIcons: Record<GarageServiceIcon, LucideIcon> = {
  wrench: Wrench,
  tire: CircleDot,
  brake: Disc,
  diagnostic: Cpu,
  "clipboard-check": ClipboardCheck,
  snowflake: Snowflake,
  car: Car,
  hammer: Hammer,
  paint: PaintBucket,
  windshield: PanelTop,
};
