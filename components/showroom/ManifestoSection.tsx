import type { ShowroomContent } from "@/data/showroom";
import { Reveal } from "@/components/showroom/Reveal";
import { Container, DisplayTitle, Eyebrow } from "@/components/showroom/primitives";

interface ManifestoSectionProps {
  content: ShowroomContent["manifesto"];
}

/** Prise de parole de l'agence, juste après le hero : le ton avant le catalogue. */
export function ManifestoSection({ content }: ManifestoSectionProps) {
  return (
    <section className="border-t border-brand-line/60 bg-brand-charcoal/40 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <DisplayTitle className="mt-6">{content.title}</DisplayTitle>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              {content.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-lg leading-relaxed text-brand-ivory/90 sm:text-xl"
                      : "text-base leading-relaxed text-brand-silver"
                  }
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-display pt-2 text-base italic text-brand-accent">
                {content.signature}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
