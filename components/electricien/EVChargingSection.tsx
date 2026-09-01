import { Check, PlugZap } from "lucide-react";
import type { ElectricienContent } from "@/data/electricien";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ElectricienLinkButton } from "@/components/electricien/ElectricienButton";

interface EVChargingSectionProps {
  content: ElectricienContent["evCharging"];
}

/**
 * Section dédiée aux bornes de recharge pour véhicules électriques — un
 * marché en forte croissance en Suisse, mis en avant volontairement à part
 * de la grille de prestations générale plutôt que noyé dedans.
 */
export function EVChargingSection({ content }: EVChargingSectionProps) {
  return (
    <section
      id="bornes-ve"
      className="scroll-mt-20 border-b border-brand-line bg-[linear-gradient(135deg,var(--color-brand-accent)_0%,var(--color-brand-accent-soft)_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <PlugZap className="h-7 w-7" aria-hidden="true" />
            </span>

            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.intro}
              align="left"
              className="mt-6 [&_h2]:text-white [&_p]:text-white/85 [&_span:first-child]:text-white [&_span.h-px]:bg-white/60"
            />

            <ul className="mt-8 space-y-3">
              {content.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white sm:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <ElectricienLinkButton
                href={content.cta.href}
                variant="secondary"
                className="!border-white/40 !bg-white/10 !text-white backdrop-blur-sm hover:!border-white hover:!bg-white/20"
              >
                {content.cta.label}
              </ElectricienLinkButton>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm sm:p-8">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {content.stats.map((stat) => (
                <div key={stat.label} className="border-b border-white/15 pb-5 last:border-0 last:pb-0 lg:border-b lg:last:border-b-0">
                  <dd className="text-3xl font-extrabold tabular-nums text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-sm font-medium text-white/80">{stat.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-white/70">{content.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
