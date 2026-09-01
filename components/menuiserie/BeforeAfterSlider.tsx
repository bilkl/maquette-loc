"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
  className?: string;
}

/**
 * Curseur avant/après en pur CSS + un `<input type="range">` : pas de
 * bibliothèque de drag externe, juste un clip-path piloté par la valeur du
 * range (accessible au clavier nativement, contrairement à un handler
 * pointerdown/pointermove fait main).
 */
export function BeforeAfterSlider({ before, after, alt, className }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={className}>
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-xl border border-brand-line sm:aspect-[16/10]">
        <Image src={after} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />

        {/* Même taille pleine que l'image "après" : seul le clip-path change au
            survol du curseur, pour ne jamais déformer ou recadrer l'image "avant"
            (une largeur de conteneur qui rétrécit ferait "zoomer" l'image avec
            object-cover, au lieu de simplement la révéler). */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-black shadow-md">
            <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Avant
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Après
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Faites glisser pour comparer avant et après"
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
    </div>
  );
}
