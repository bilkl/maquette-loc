import { getCoachContent } from "@/data/coach";
import { CoachHero } from "@/components/coach/CoachHero";
import { AudienceSection } from "@/components/coach/AudienceSection";
import { MethodSection } from "@/components/coach/MethodSection";
import { ResultsSection } from "@/components/coach/ResultsSection";
import { PricingSection } from "@/components/coach/PricingSection";
import { TestimonialsSection } from "@/components/coach/TestimonialsSection";
import { BookingSection } from "@/components/coach/BookingSection";
import { CoachFAQSection } from "@/components/coach/CoachFAQSection";

/**
 * Page d'accueil du gabarit "coach". Ordre pensé pour la conversion vers le
 * bilan gratuit : le message fort, le ciblage ("Pour qui"), la méthode, les
 * résultats et les tarifs pour lever les objections, les avis pour rassurer,
 * puis la réservation.
 */
export function CoachHome() {
  const content = getCoachContent();

  return (
    <>
      <CoachHero content={content.hero} />
      <AudienceSection content={content.audience} />
      <MethodSection content={content.method} />
      <ResultsSection content={content.results} />
      <PricingSection content={content.pricing} />
      <TestimonialsSection content={content.testimonials} />
      <BookingSection content={content.booking} />
      <CoachFAQSection />
    </>
  );
}
