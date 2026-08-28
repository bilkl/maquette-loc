import { getDealerContent } from "@/data/dealer";
import { DealerHero } from "@/components/dealer/DealerHero";
import { CatalogSection } from "@/components/dealer/CatalogSection";
import { TrustSection } from "@/components/dealer/TrustSection";
import { SellSection } from "@/components/dealer/SellSection";
import { FinancingSection } from "@/components/dealer/FinancingSection";
import { TestimonialsSection } from "@/components/dealer/TestimonialsSection";
import { DealerFAQSection } from "@/components/dealer/DealerFAQSection";

/**
 * Page d'accueil du gabarit "dealer".
 * Ordre pensé pour les deux parcours annoncés dans le hero : le catalogue
 * pour ceux qui achètent, la confiance et le financement en soutien, puis
 * l'estimation de reprise pour ceux qui vendent — sans hiérarchiser un
 * parcours au détriment de l'autre.
 */
export function DealerHome() {
  const content = getDealerContent();

  return (
    <>
      <DealerHero content={content.hero} />
      <CatalogSection content={content.catalog} />
      <TrustSection content={content.trust} />
      <SellSection content={content.sell} />
      <FinancingSection content={content.financing} />
      <TestimonialsSection content={content.testimonials} />
      <DealerFAQSection />
    </>
  );
}
