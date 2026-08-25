import { faqItems } from "@/data/faq";
import type { ShowroomContent } from "@/data/showroom";
import { Reveal } from "@/components/showroom/Reveal";
import { Container, DisplayTitle, Eyebrow } from "@/components/showroom/primitives";
import { ShowroomFAQAccordion } from "@/components/showroom/ShowroomFAQAccordion";

interface ShowroomFAQSectionProps {
  content: ShowroomContent["faq"];
}

export function ShowroomFAQSection({ content }: ShowroomFAQSectionProps) {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-brand-line/60 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <DisplayTitle className="mt-6">{content.title}</DisplayTitle>
            <p className="mt-6 text-base leading-relaxed text-brand-silver">{content.intro}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ShowroomFAQAccordion items={faqItems} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
