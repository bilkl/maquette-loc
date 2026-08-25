import { Check } from "lucide-react";
import type { ShowroomContent } from "@/data/showroom";
import { Reveal } from "@/components/showroom/Reveal";
import { ChapterNumber, Container, DisplayTitle, Eyebrow } from "@/components/showroom/primitives";

interface ExperienceSectionProps {
  content: ShowroomContent["experience"];
}

/**
 * L'expérience, racontée en quatre moments plutôt qu'en tunnel de réservation :
 * chaque étape est un texte, pas une case à cocher.
 */
export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-brand-line/60 bg-brand-charcoal/40 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <DisplayTitle className="mt-6">{content.title}</DisplayTitle>
          <p className="mt-6 text-base leading-relaxed text-brand-silver sm:text-lg">
            {content.intro}
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-brand-line/60 bg-brand-line/60 sm:grid-cols-2">
          {content.steps.map((step, index) => (
            <li key={step.title} className="bg-brand-black">
              <Reveal delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-4 p-7 sm:p-9">
                  <ChapterNumber value={String(index + 1).padStart(2, "0")} />
                  <h3 className="font-display text-xl font-normal text-brand-ivory sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-brand-silver">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm text-brand-silver">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
