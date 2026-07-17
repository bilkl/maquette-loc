"use client";

import Image from "next/image";
import { useState } from "react";

interface VehicleGalleryProps {
  images: string[];
  alt: string;
}

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-line/60">
        <Image
          src={images[activeIndex]}
          alt={`${alt} — photo ${activeIndex + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 ? (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher la photo ${index + 1} de ${alt}`}
              aria-pressed={activeIndex === index}
              className={`relative aspect-[16/10] overflow-hidden rounded-xl border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red ${
                activeIndex === index ? "border-brand-red" : "border-brand-line/60"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="200px"
                className="object-cover"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
