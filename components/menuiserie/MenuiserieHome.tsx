import { getMenuiserieContent } from "@/data/menuiserie";
import { MenuiserieHero } from "@/components/menuiserie/MenuiserieHero";
import { ServicesGrid } from "@/components/menuiserie/ServicesGrid";
import { GallerySection } from "@/components/menuiserie/GallerySection";
import { TrustSection } from "@/components/menuiserie/TrustSection";
import { TestimonialsSection } from "@/components/menuiserie/TestimonialsSection";
import { AppointmentSection } from "@/components/menuiserie/AppointmentSection";
import { MenuiserieFAQSection } from "@/components/menuiserie/MenuiserieFAQSection";

/**
 * Page d'accueil du gabarit "menuiserie". Ordre pensé pour le rendu visuel
 * avant tout : le hero en grande photo, les savoir-faire, un aperçu de la
 * galerie de réalisations (le détail complet vit sur /realisations), puis la
 * confiance, les avis et la demande de devis.
 */
export function MenuiserieHome() {
  const content = getMenuiserieContent();

  return (
    <>
      <MenuiserieHero content={content.hero} />
      <ServicesGrid content={content.services} />
      <GallerySection content={content.gallery} families={content.services.items} limit={4} />
      <TrustSection content={content.trust} />
      <TestimonialsSection content={content.testimonials} />
      <AppointmentSection content={content.appointment} families={content.services.items} />
      <MenuiserieFAQSection />
    </>
  );
}
