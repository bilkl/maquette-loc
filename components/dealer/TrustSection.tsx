import { CheckCircle2, ShieldCheck } from "lucide-react";
import type { DealerContent } from "@/data/dealer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/showroom/Reveal";

interface TrustSectionProps {
  content: DealerContent["trust"];
}

export function TrustSection({ content }: TrustSectionProps) {
  return (
    <section className="border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} align="left" />

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-line pt-8">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-3xl font-extrabold tabular-nums text-brand-accent sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-brand-silver sm:text-sm">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-brand-line bg-brand-black p-7 shadow-sm sm:p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <ul className="mt-5 space-y-3">
                {content.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-brand-ivory">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
