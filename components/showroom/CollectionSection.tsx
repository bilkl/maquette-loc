import Image from "next/image";
import { getVehicleBySlug } from "@/data/vehicles";
import type { Vehicle } from "@/types/vehicle";
import type { ShowroomChapter, ShowroomContent } from "@/data/showroom";
import { Reveal } from "@/components/showroom/Reveal";
import { ShowroomVehicleCard } from "@/components/showroom/ShowroomVehicleCard";
import { ChapterNumber, Container, DisplayTitle, Eyebrow } from "@/components/showroom/primitives";
import { cn } from "@/lib/utils";

interface CollectionSectionProps {
  content: ShowroomContent["collection"];
}

/**
 * Cœur du gabarit "showroom" : la collection racontée marque par marque.
 * Chaque chapitre alterne image et récit, et n'expose ses modèles qu'après le
 * texte — l'inverse d'un catalogue trié par prix.
 */
export function CollectionSection({ content }: CollectionSectionProps) {
  return (
    <section id="collection" className="scroll-mt-24 border-t border-brand-line/60 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-6">{content.title}</DisplayTitle>
          <p className="mt-6 text-base leading-relaxed text-brand-silver sm:text-lg">
            {content.intro}
          </p>
        </Reveal>
      </Container>

      <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-28">
        {content.chapters.map((chapter, index) => (
          <CollectionChapterBlock key={chapter.id} chapter={chapter} index={index} />
        ))}
      </div>
    </section>
  );
}

function CollectionChapterBlock({
  chapter,
  index,
}: {
  chapter: ShowroomChapter;
  index: number;
}) {
  const vehicles = chapter.vehicleSlugs
    .map((slug) => getVehicleBySlug(slug))
    .filter((vehicle): vehicle is Vehicle => vehicle !== undefined);
  const isReversed = index % 2 === 1;

  return (
    <article id={chapter.id} className="scroll-mt-24">
      <Container>
        <div
          className={cn(
            "grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16",
            isReversed && "lg:[&>*:first-child]:order-2",
          )}
        >
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-line/70 bg-brand-charcoal">
                <Image
                  src={chapter.image}
                  alt={`${chapter.marque} — image de démonstration`}
                  fill
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b border-r border-brand-accent/50 sm:block"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-6">
            <div className="flex items-center gap-5">
              <ChapterNumber value={String(index + 1).padStart(2, "0")} />
              <span className="text-sm font-medium uppercase tracking-[0.42em] text-brand-accent">
                {chapter.marque}
              </span>
            </div>

            <DisplayTitle as="h3" className="mt-6">
              {chapter.title}
            </DisplayTitle>

            <div className="mt-6 space-y-5">
              {chapter.story.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-brand-silver">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 border-l border-brand-accent/60 pl-6">
              <p className="font-display text-xl font-normal italic leading-snug text-brand-ivory sm:text-2xl">
                {chapter.quote}
              </p>
            </blockquote>

            <ul className="mt-8 space-y-3">
              {chapter.hallmarks.map((hallmark) => (
                <li key={hallmark} className="flex items-start gap-3 text-sm text-brand-silver">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-5 shrink-0 bg-brand-accent/70"
                  />
                  {hallmark}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          {vehicles.map((vehicle, vehicleIndex) => (
            <Reveal key={vehicle.slug} delay={vehicleIndex * 0.08}>
              <ShowroomVehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>
      </Container>
    </article>
  );
}
