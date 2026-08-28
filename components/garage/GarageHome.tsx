import { getGarageContent } from "@/data/garage";
import { GarageHero } from "@/components/garage/GarageHero";
import { ServicesGrid } from "@/components/garage/ServicesGrid";
import { TrustSection } from "@/components/garage/TrustSection";
import { TestimonialsSection } from "@/components/garage/TestimonialsSection";
import { AppointmentSection } from "@/components/garage/AppointmentSection";
import { GarageFAQSection } from "@/components/garage/GarageFAQSection";

/**
 * Page d'accueil du gabarit "garage".
 * Ordre pensé pour une décision rapide : le message direct, ce qu'on propose,
 * pourquoi faire confiance, ce qu'en disent les clients, puis la prise de
 * rendez-vous — sans détour narratif.
 */
export function GarageHome() {
  const content = getGarageContent();

  return (
    <>
      <GarageHero content={content.hero} />
      <ServicesGrid content={content.services} />
      <TrustSection content={content.trust} />
      <TestimonialsSection content={content.testimonials} />
      <AppointmentSection content={content.appointment} services={content.services.items} />
      <GarageFAQSection />
    </>
  );
}
