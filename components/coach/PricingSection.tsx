"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import type { CoachContent, CoachPricingPlan } from "@/data/coach";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CoachLinkButton } from "@/components/coach/CoachButton";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  content: CoachContent["pricing"];
}

export function PricingSection({ content }: PricingSectionProps) {
  return (
    <section id="tarifs" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {content.plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-brand-silver">{content.note}</p>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: CoachPricingPlan; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.3) }}
      className={cn(
        "flex h-full flex-col rounded-xl border p-7",
        plan.highlighted
          ? "border-brand-accent bg-brand-accent/5 shadow-lg shadow-brand-accent/10"
          : "border-brand-line bg-brand-charcoal",
      )}
    >
      {plan.highlighted ? (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Le plus choisi
        </span>
      ) : null}

      <h3 className="text-lg font-bold text-brand-ivory">{plan.name}</h3>
      <p className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-black text-brand-accent">{plan.price}</span>
        {plan.period ? <span className="text-sm text-brand-silver">{plan.period}</span> : null}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-brand-silver">{plan.description}</p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-ivory">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <CoachLinkButton
        href="/#bilan"
        variant={plan.highlighted ? "primary" : "secondary"}
        className="mt-7 w-full"
      >
        Réserver mon bilan
      </CoachLinkButton>
    </motion.div>
  );
}
