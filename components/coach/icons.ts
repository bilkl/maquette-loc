import {
  Activity,
  Battery,
  Dumbbell,
  Flame,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import type { CoachIcon } from "@/data/coach";

/** Associe chaque identifiant d'icône ("Pour qui" / "Méthode" / "Résultats") à son icône Lucide. */
export const coachIcons: Record<CoachIcon, LucideIcon> = {
  target: Target,
  battery: Battery,
  heart: Heart,
  "trending-up": TrendingUp,
  "user-check": UserCheck,
  "shield-check": ShieldCheck,
  flame: Flame,
  activity: Activity,
  sparkles: Sparkles,
  dumbbell: Dumbbell,
};
