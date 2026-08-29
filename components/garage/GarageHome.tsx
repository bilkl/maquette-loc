import { getGarageContent } from "@/data/garage";
import { GarageHero } from "@/components/garage/GarageHero";
import { ServicesGrid } from "@/components/garage/ServicesGrid";
import { BeforeAfterSection } from "@/components/garage/BeforeAfterSection";
import { TrustSection } from "@/components/garage/TrustSection";
import { TestimonialsSection } from "@/components/garage/TestimonialsSection";
import { PostAccidentAdviceSection } from "@/components/garage/PostAccidentAdviceSection";
import { AppointmentSection } from "@/components/garage/AppointmentSection";
import { GarageFAQSection } from "@/components/garage/GarageFAQSection";

/**
 * Page d'accueil du gabarit "garage".
 * Ordre pensé pour une décision rapide : le message direct, ce qu'on propose,
 * pourquoi faire confiance, ce qu'en disent les clients, puis la prise de
 * rendez-vous — sans détour narratif. "Avant/après" et "après un accident"
 * sont facultatifs : pertinents pour un carrossier-peintre, sans objet pour
 * un garage d'entretien courant (voir data/garage/types.ts).
 */
export function GarageHome() {
  const content = getGarageContent();

  return (
    <>
      <GarageHero content={content.hero} watermarkIcon={content.beforeAfter ? "paint" : "wrench"} />
      <ServicesGrid content={content.services} />
      {content.beforeAfter ? <BeforeAfterSection content={content.beforeAfter} /> : null}
      <TrustSection content={content.trust} />
      <TestimonialsSection content={content.testimonials} />
      {content.postAccidentAdvice ? <PostAccidentAdviceSection content={content.postAccidentAdvice} /> : null}
      <AppointmentSection content={content.appointment} services={content.services.items} />
      <GarageFAQSection />
    </>
  );
}
