import { ShieldCheck } from "lucide-react";
import type { GarageContent } from "@/data/garage";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface TrustSectionProps {
  content: GarageContent["trust"];
}

export function TrustSection({ content }: TrustSectionProps) {
  return (
    <section id="confiance" className="scroll-mt-20 border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.intro}
              align="left"
            />

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-line pt-8">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-3xl font-extrabold text-brand-accent sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-brand-silver sm:text-sm">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-brand-line bg-brand-black p-7 sm:p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-brand-ivory">{content.networkLabel}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-silver">
              {content.networkDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
