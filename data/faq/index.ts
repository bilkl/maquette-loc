import { getActiveBrand } from "@/config/brands";
import { faqItems as nlprestige } from "./nlprestige";
import { faqItems as swisslocrent } from "./swisslocrent";
import type { FaqItem } from "./types";

const faqByBrand: Record<string, FaqItem[]> = {
  nlprestige,
  swisslocrent,
};

export const faqItems: FaqItem[] = faqByBrand[getActiveBrand().id] ?? nlprestige;

export type { FaqItem } from "./types";
