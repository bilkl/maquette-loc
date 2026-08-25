import { getShowroomContent } from "@/data/showroom";
import { ShowroomHero } from "@/components/showroom/ShowroomHero";
import { ManifestoSection } from "@/components/showroom/ManifestoSection";
import { CollectionSection } from "@/components/showroom/CollectionSection";
import { ExperienceSection } from "@/components/showroom/ExperienceSection";
import { ShowroomFAQSection } from "@/components/showroom/ShowroomFAQSection";
import { ReservationSection } from "@/components/showroom/ReservationSection";

/**
 * Page d'accueil du gabarit "showroom".
 * L'ordre des sections suit une lecture de collection : on regarde, on
 * comprend, puis seulement on réserve.
 */
export function ShowroomHome() {
  const content = getShowroomContent();

  return (
    <>
      <ShowroomHero content={content.hero} />
      <ManifestoSection content={content.manifesto} />
      <CollectionSection content={content.collection} />
      <ExperienceSection content={content.experience} />
      <ReservationSection content={content.reservation} />
      <ShowroomFAQSection content={content.faq} />
    </>
  );
}
