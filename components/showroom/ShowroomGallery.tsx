"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShowroomGalleryProps {
  images: string[];
  alt: string;
}

/** Galerie sobre : une grande image, des vignettes en filets fins. */
export function ShowroomGallery({ images, alt }: ShowroomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-brand-line/70 bg-brand-charcoal">
        <Image
          src={activeImage}
          alt={`${alt} — image de démonstration ${activeIndex + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 92vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 ? (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher l'image ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={cn(
                "relative aspect-[16/10] overflow-hidden border transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                index === activeIndex
                  ? "border-brand-accent"
                  : "border-brand-line/60 hover:border-brand-accent/60",
              )}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 18vw, 30vw"
                className={cn(
                  "object-cover transition-opacity duration-300",
                  index === activeIndex ? "opacity-100" : "opacity-60 hover:opacity-90",
                )}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
