import { getImmobilierContent } from "@/data/immobilier";
import { ImmobilierHero } from "@/components/immobilier/ImmobilierHero";
import { CatalogSection } from "@/components/immobilier/CatalogSection";
import { ServicesSection } from "@/components/immobilier/ServicesSection";
import { TrustSection } from "@/components/immobilier/TrustSection";
import { EstimateSection } from "@/components/immobilier/EstimateSection";
import { TestimonialsSection } from "@/components/immobilier/TestimonialsSection";
import { ImmobilierFAQSection } from "@/components/immobilier/ImmobilierFAQSection";

/**
 * Page d'accueil du gabarit "immobilier".
 * Ordre pensé pour les deux parcours annoncés dans le hero : le catalogue
 * pour ceux qui achètent, les services et la confiance en soutien, puis
 * l'estimation gratuite pour ceux qui vendent (voir components/dealer/DealerHome.tsx
 * pour le même parti pris côté négoce automobile).
 */
export function ImmobilierHome() {
  const content = getImmobilierContent();

  return (
    <>
      <ImmobilierHero content={content.hero} />
      <CatalogSection content={content.catalog} />
      <ServicesSection content={content.services} />
      <TrustSection content={content.trust} />
      <EstimateSection content={content.estimate} />
      <TestimonialsSection content={content.testimonials} />
      <ImmobilierFAQSection />
    </>
  );
}
