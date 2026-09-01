import { getElectricienContent } from "@/data/electricien";
import { ElectricienHero } from "@/components/electricien/ElectricienHero";
import { ServicesGrid } from "@/components/electricien/ServicesGrid";
import { EVChargingSection } from "@/components/electricien/EVChargingSection";
import { TrustSection } from "@/components/electricien/TrustSection";
import { TestimonialsSection } from "@/components/electricien/TestimonialsSection";
import { AppointmentSection } from "@/components/electricien/AppointmentSection";
import { ElectricienFAQSection } from "@/components/electricien/ElectricienFAQSection";

/**
 * Page d'accueil du gabarit "electricien". Ordre pensé pour une décision
 * rapide : le message direct (avec l'accès d'urgence), ce qu'on propose, la
 * mobilité électrique mise en avant à part (marché en forte croissance),
 * pourquoi faire confiance, les avis, puis la demande de devis.
 */
export function ElectricienHome() {
  const content = getElectricienContent();

  return (
    <>
      <ElectricienHero content={content.hero} emergency={content.emergency} />
      <ServicesGrid content={content.services} />
      <EVChargingSection content={content.evCharging} />
      <TrustSection content={content.trust} />
      <TestimonialsSection content={content.testimonials} />
      <AppointmentSection content={content.appointment} services={content.services.items} />
      <ElectricienFAQSection />
    </>
  );
}
