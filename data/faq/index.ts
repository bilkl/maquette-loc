import { getActiveBrand } from "@/config/brands";
import { faqItems as bmimmobilier } from "./bmimmobilier";
import { faqItems as bullrent } from "./bullrent";
import { faqItems as distefano } from "./distefano";
import { faqItems as eagledrive } from "./eagledrive";
import { faqItems as elegancyrent } from "./elegancyrent";
import { faqItems as garagecarlos } from "./garagecarlos";
import { faqItems as lamarbrerie } from "./lamarbrerie";
import { faqItems as leplombier } from "./leplombier";
import { faqItems as luxurcars } from "./luxurcars";
import { faqItems as luxurydrive } from "./luxurydrive";
import { faqItems as menuiseriebem } from "./menuiseriebem";
import { faqItems as nlprestige } from "./nlprestige";
import { faqItems as slgrent } from "./slgrent";
import { faqItems as swisselite } from "./swisselite";
import { faqItems as swisslocrent } from "./swisslocrent";
import { faqItems as topcarsoccasions } from "./topcarsoccasions";
import type { FaqItem } from "./types";

const faqByBrand: Record<string, FaqItem[]> = {
  nlprestige,
  swisslocrent,
  swisselite,
  bullrent,
  eagledrive,
  elegancyrent,
  slgrent,
  luxurydrive,
  luxurcars,
  garagecarlos,
  lamarbrerie,
  topcarsoccasions,
  distefano,
  leplombier,
  menuiseriebem,
  bmimmobilier,
};

export const faqItems: FaqItem[] = faqByBrand[getActiveBrand().id] ?? nlprestige;

export type { FaqItem } from "./types";
