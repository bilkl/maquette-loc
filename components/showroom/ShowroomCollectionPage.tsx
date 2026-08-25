import { vehicles } from "@/data/vehicles";
import { getShowroomContent } from "@/data/showroom";
import { Reveal } from "@/components/showroom/Reveal";
import { Container, DisplayTitle, Eyebrow } from "@/components/showroom/primitives";
import { ShowroomVehicleCard } from "@/components/showroom/ShowroomVehicleCard";
import { ReservationSection } from "@/components/showroom/ReservationSection";

/**
 * Page « collection » du gabarit "showroom" : une grille éditoriale, sans
 * filtres ni tri par prix — la collection tient sur un écran, elle se parcourt.
 */
export function ShowroomCollectionPage() {
  const content = getShowroomContent();
  const chapters = content.collection.chapters;

  return (
    <>
      <section className="border-b border-brand-line/60 pb-16 pt-12 sm:pb-20 sm:pt-20">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{content.collectionPage.eyebrow}</Eyebrow>
            <DisplayTitle as="h1" className="mt-6">
              {content.collectionPage.title}
            </DisplayTitle>
            <p className="mt-6 text-base leading-relaxed text-brand-silver sm:text-lg">
              {content.collectionPage.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-16 sm:gap-20">
            {chapters.map((chapter) => {
              const chapterVehicles = vehicles.filter((vehicle) =>
                chapter.vehicleSlugs.includes(vehicle.slug),
              );

              if (chapterVehicles.length === 0) return null;

              return (
                <div key={chapter.id}>
                  <Reveal>
                    <div className="flex items-baseline justify-between gap-6 border-b border-brand-line/60 pb-5">
                      <h2 className="font-display text-2xl font-normal uppercase tracking-[0.16em] text-brand-ivory sm:text-3xl">
                        {chapter.marque}
                      </h2>
                      <span className="text-xs uppercase tracking-[0.22em] text-brand-silver">
                        {chapterVehicles.length} modèle
                        {chapterVehicles.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </Reveal>

                  <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
                    {chapterVehicles.map((vehicle, index) => (
                      <Reveal key={vehicle.slug} delay={index * 0.08}>
                        <ShowroomVehicleCard vehicle={vehicle} priority={index === 0} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ReservationSection content={content.reservation} />
    </>
  );
}
