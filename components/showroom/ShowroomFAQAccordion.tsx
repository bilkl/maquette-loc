"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

interface ShowroomFAQAccordionProps {
  items: FaqItem[];
}

/**
 * Accordéon du gabarit "showroom" : filets fins plutôt que cartes arrondies,
 * une seule question ouverte à la fois.
 */
export function ShowroomFAQAccordion({ items }: ShowroomFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-brand-line/60">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `showroom-faq-panel-${index}`;
        const buttonId = `showroom-faq-button-${index}`;

        return (
          <div key={item.question} className="border-b border-brand-line/60">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              >
                <span
                  className={cn(
                    "font-display text-lg font-normal leading-snug transition-colors duration-300 sm:text-xl",
                    isOpen ? "text-brand-accent" : "text-brand-ivory",
                  )}
                >
                  {item.question}
                </span>
                <Plus
                  className={cn(
                    "mt-1 h-4 w-4 shrink-0 text-brand-accent transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-base leading-relaxed text-brand-silver">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
