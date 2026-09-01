import { getMenuiserieContent } from "@/data/menuiserie";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GallerySection } from "@/components/menuiserie/GallerySection";
import { AppointmentSection } from "@/components/menuiserie/AppointmentSection";

/** Page "Réalisations" : la galerie complète en grand format, sans limite d'aperçu. */
export function MenuiserieGalleryPage() {
  const content = getMenuiserieContent();

  return (
    <>
      <section className="border-b border-brand-line bg-brand-charcoal py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={content.galleryPage.eyebrow}
            title={content.galleryPage.title}
            description={content.galleryPage.intro}
            align="left"
          />
        </div>
      </section>

      <GallerySection content={content.gallery} families={content.services.items} showCta={false} />

      <AppointmentSection content={content.appointment} families={content.services.items} />
    </>
  );
}
