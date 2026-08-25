"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Décalage en secondes, pour animer une série d'éléments en cascade */
  delay?: number;
  /** Amplitude verticale de l'apparition (px) */
  distance?: number;
  /** Part de l'élément qui doit être visible avant de déclencher l'animation */
  amount?: number;
}

/**
 * Apparition discrète au défilement, commune à toutes les sections du gabarit
 * "showroom" : léger fondu + montée, une seule fois, désactivée si l'utilisateur
 * a demandé une réduction des animations (prefers-reduced-motion).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  amount = 0.2,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
