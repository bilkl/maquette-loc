import type { MenuiserieContent } from "@/data/menuiserie";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { valueIcons } from "@/components/menuiserie/icons";

interface TrustSectionProps {
  content: MenuiserieContent["trust"];
}

/** Section confiance : sur-mesure, choix des essences, neuf/rénovation, devis gratuit. */
export function TrustSection({ content }: TrustSectionProps) {
  return (
    <section id="confiance" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-brand-line py-8">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-3xl font-semibold tabular-nums text-brand-accent sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm font-medium text-brand-silver sm:text-base">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.values.map((value) => {
            const Icon = valueIcons[value.icon];
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-brand-line bg-brand-charcoal p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-brand-ivory">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-silver">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
