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

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red"
        >
          NL Prestige — Suisse
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-brand-ivory sm:text-6xl"
        >
          L&apos;excellence automobile, le temps d&apos;un trajet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-brand-silver"
        >
          Location de véhicules de prestige en Suisse, en courte et longue durée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
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
          className="mt-16 grid grid-cols-1 gap-4 border-t border-brand-line/50 pt-8 sm:grid-cols-3"
        >
          {infoBlocks.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
              <span className="text-sm font-medium text-brand-ivory">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
