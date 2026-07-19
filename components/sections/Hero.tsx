"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Clock3, Sparkles, Timer } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const infoBlocks = [
  { icon: Timer, label: "Location courte durée" },
  { icon: Clock3, label: "Location longue durée" },
  { icon: Sparkles, label: "Service personnalisé" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero/hero-prestige.svg"
            alt="Véhicule de prestige NL Prestige, image de démonstration"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/60" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-red"
        >
          <span className="h-px w-10 bg-brand-red/60" aria-hidden="true" />
          NL Prestige — Suisse
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display mt-8 max-w-4xl text-balance text-6xl font-semibold leading-[0.98] tracking-tight text-brand-ivory sm:text-7xl lg:text-8xl"
        >
          L&apos;excellence automobile, le temps d&apos;un trajet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-xl text-xl leading-relaxed text-brand-silver"
        >
          Location de véhicules de prestige en Suisse, en courte et longue durée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <LinkButton href="/vehicules" variant="primary">
            Découvrir les véhicules
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Demander une réservation
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 flex flex-col divide-y divide-brand-line/50 border-t border-brand-line/50 sm:flex-row sm:divide-x sm:divide-y-0"
        >
          {infoBlocks.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 py-5 sm:flex-1 sm:justify-center sm:py-8">
              <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
              <span className="text-base font-medium uppercase tracking-wide text-brand-ivory">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-silver">
          Découvrir
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
}
