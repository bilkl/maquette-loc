import { getPlombierContent } from "@/data/plombier";
import { PlombierHero } from "@/components/plombier/PlombierHero";
import { ServicesGrid } from "@/components/plombier/ServicesGrid";
import { TrustSection } from "@/components/plombier/TrustSection";
import { TestimonialsSection } from "@/components/plombier/TestimonialsSection";
import { AppointmentSection } from "@/components/plombier/AppointmentSection";
import { PlombierFAQSection } from "@/components/plombier/PlombierFAQSection";

/**
 * Page d'accueil du gabarit "plombier". Ordre pensé pour une décision
 * rapide en situation d'urgence : le message direct (avec l'accès
 * d'urgence), ce qu'on propose, pourquoi faire confiance, les avis, puis la
 * demande d'intervention.
 */
export function PlombierHome() {
  const content = getPlombierContent();

  return (
    <>
      <PlombierHero content={content.hero} emergency={content.emergency} />
      <ServicesGrid content={content.services} />
      <TrustSection content={content.trust} />
      <TestimonialsSection content={content.testimonials} />
      <AppointmentSection content={content.appointment} services={content.services.items} />
      <PlombierFAQSection />
    </>
  );
}
