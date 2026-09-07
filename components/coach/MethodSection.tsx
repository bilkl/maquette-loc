"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CoachContent, CoachPoint } from "@/data/coach";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { coachIcons } from "@/components/coach/icons";

interface MethodSectionProps {
  content: CoachContent["method"];
}

/** Section "La méthode" : approche personnalisée, suivi individuel, en 4 étapes numérotées. */
export function MethodSection({ content }: MethodSectionProps) {
  return (
    <section id="methode" className="scroll-mt-20 border-b border-brand-line bg-brand-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.intro}
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: CoachPoint; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = coachIcons[step.icon];

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className="relative rounded-xl border border-brand-line bg-brand-charcoal p-6"
    >
      <span className="absolute right-5 top-5 text-3xl font-black text-brand-accent/15">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-brand-ivory">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-silver">{step.description}</p>
    </motion.div>
  );
}
