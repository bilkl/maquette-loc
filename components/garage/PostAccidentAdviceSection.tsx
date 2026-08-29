import type { GarageAdviceContent } from "@/data/garage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GarageLinkButton } from "@/components/garage/GarageButton";

interface PostAccidentAdviceSectionProps {
  content: GarageAdviceContent;
}

/**
 * Conseils pratiques "après un accident" : liste numérotée plutôt qu'un mur
 * de texte, pour rester lisible par quelqu'un qui consulte cette page depuis
 * son téléphone, juste après un choc.
 */
export function PostAccidentAdviceSection({ content }: PostAccidentAdviceSectionProps) {
  return (
    <section id="apres-un-accident" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} />

        <ol className="mt-10 space-y-6">
          {content.tips.map((tip, index) => (
            <li key={tip.title} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-sm font-extrabold text-brand-accent">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-ivory">{tip.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-silver">{tip.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {content.cta ? (
          <GarageLinkButton href={content.cta.href} variant="primary" className="mt-10">
            {content.cta.label}
          </GarageLinkButton>
        ) : null}
      </div>
    </section>
  );
}
