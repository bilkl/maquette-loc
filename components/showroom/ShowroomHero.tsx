"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/showroom/primitives";
import type { ShowroomContent } from "@/data/showroom";

interface ShowroomHeroProps {
  content: ShowroomContent["hero"];
}

/**
 * Hero plein écran : photographie de la voiture en fond, dégradés successifs
 * pour garder le texte lisible, titre serif révélé ligne par ligne et léger
 * effet de parallaxe au défilement.
 */
export function ShowroomHero({ content }: ShowroomHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const lines = [...content.titleLines, content.titleAccent];

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex min-h-[100svh] flex-col justify-end overflow-hidden bg-brand-black"
    >
      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { y: imageY }}
        initial={shouldReduceMotion ? undefined : { scale: 1.12 }}
        animate={shouldReduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {siteConfig.images.heroVideo && !shouldReduceMotion ? (
          // Muette et sans contrôles : purement décorative, le titre porte le
          // message. `images.hero` reste le poster affiché avant lecture et
          // le repli si la vidéo échoue à charger.
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.images.hero}
            className="h-full w-full object-cover"
          >
            <source src={siteConfig.images.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={siteConfig.images.hero}
            alt={`${siteConfig.name} — supercar de la collection, image de démonstration`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={shouldReduceMotion ? undefined : { opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(200,162,74,0.16),transparent_60%)]" />
      </motion.div>

      <Container className="relative pb-14 pt-32 sm:pb-20 sm:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.42em] text-brand-accent"
        >
          <span className="h-px w-10 bg-brand-accent/60" aria-hidden="true" />
          {content.eyebrow}
        </motion.p>

        <h1 className="font-display mt-7 max-w-4xl text-balance text-[2.6rem] font-normal leading-[1.03] tracking-[-0.02em] text-brand-ivory sm:text-6xl lg:text-7xl">
          {lines.map((line, index) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                index === lines.length - 1
                  ? "block italic text-brand-accent"
                  : "block"
              }
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-brand-silver sm:text-lg"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href={content.primaryCta.href}
            className="group relative inline-flex items-center justify-center overflow-hidden border border-brand-accent bg-brand-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-brand-black transition-colors duration-300 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-brand-black transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden"
            />
            <span className="relative z-10">{content.primaryCta.label}</span>
          </Link>
          <Link
            href={content.secondaryCta.href}
            className="group inline-flex items-center justify-center border border-brand-line px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-brand-ivory transition-colors duration-300 hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            {content.secondaryCta.label}
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-14 grid grid-cols-3 gap-6 border-t border-brand-line/60 pt-8 sm:mt-20 sm:max-w-2xl sm:gap-10"
        >
          {content.stats.map((stat) => (
            // flex-col-reverse : le chiffre se lit au-dessus du libellé, tout en
            // gardant l'ordre <dt> puis <dd> attendu dans une liste de définitions.
            <div key={stat.label} className="flex flex-col-reverse gap-2">
              <dt className="text-xs uppercase tracking-[0.22em] text-brand-silver sm:text-sm">
                {stat.label}
              </dt>
              <dd className="font-display text-2xl font-normal text-brand-ivory sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="pointer-events-none absolute bottom-6 right-6 hidden flex-col items-center gap-3 lg:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-brand-silver [writing-mode:vertical-rl]">
          Faire défiler
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.span>
    </section>
  );
}
