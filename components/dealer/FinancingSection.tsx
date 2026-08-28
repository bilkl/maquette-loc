import { CalendarClock, Handshake, Percent, ShieldCheck, type LucideIcon } from "lucide-react";
import type { DealerContent, DealerFinancingOption } from "@/data/dealer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/showroom/Reveal";

interface FinancingSectionProps {
  content: DealerContent["financing"];
}

const financingIcons: Record<DealerFinancingOption["icon"], LucideIcon> = {
  percent: Percent,
  handshake: Handshake,
  calendar: CalendarClock,
  shield: ShieldCheck,
};

export function FinancingSection({ content }: FinancingSectionProps) {
  return (
    <section id="financement" className="scroll-mt-20 border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} align="left" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.options.map((option, index) => {
            const Icon = financingIcons[option.icon];
            return (
              <Reveal key={option.title} delay={Math.min(index * 0.06, 0.24)}>
                <div className="h-full rounded-xl border border-brand-line bg-brand-black p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand-ivory">{option.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-silver">{option.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
