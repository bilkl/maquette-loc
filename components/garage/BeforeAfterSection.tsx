import { ArrowRight, ImageOff } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { GarageBeforeAfterContent, GarageBeforeAfterExample } from "@/data/garage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

interface BeforeAfterSectionProps {
  content: GarageBeforeAfterContent;
}

/**
 * Section "avant / après" : la mise en page laisse la place à de vraies
 * photos de réalisations, mais tant qu'elles n'ont pas été fournies par
 * l'atelier, chaque vignette affiche un espace réservé explicitement
 * identifié — jamais une image plausible qui pourrait passer pour une vraie
 * réparation (voir `content.note`, affiché sous la grille).
 */
export function BeforeAfterSection({ content }: BeforeAfterSectionProps) {
  return (
    <section id="avant-apres" className="scroll-mt-20 border-b border-brand-line bg-brand-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} align="left" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.items.map((item) => (
            <BeforeAfterCard key={item.damageType} item={item} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-brand-silver">{content.note}</p>
      </div>
    </section>
  );
}

function BeforeAfterCard({ item }: { item: GarageBeforeAfterExample }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-brand-line bg-brand-black transition-shadow",
        siteConfig.premium && "hover:shadow-lg hover:shadow-black/20",
      )}
    >
      <div className="grid grid-cols-2">
        <Placeholder label="AVANT" />
        <Placeholder label="APRÈS" accent />
      </div>
      <div className="flex items-start gap-2.5 p-5">
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
        <div>
          <h3 className="text-base font-bold text-brand-ivory">{item.damageType}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-brand-silver">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function Placeholder({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`relative flex aspect-[4/3] flex-col items-center justify-center gap-2 border-dashed ${
        accent ? "border-l border-brand-accent/30 bg-brand-accent/5" : "bg-brand-charcoal"
      }`}
      aria-hidden="true"
    >
      <ImageOff className="h-6 w-6 text-brand-silver/50" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-wider text-brand-silver/70">{label}</span>
      <span className="px-4 text-center text-[0.65rem] leading-tight text-brand-silver/50">
        Photo d&apos;exemple
      </span>
    </div>
  );
}
