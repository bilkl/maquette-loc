import { cn } from "@/lib/utils";

/**
 * Briques visuelles partagées par les sections du gabarit "showroom".
 * Elles fixent le rythme typographique (serif large, capitales très espacées,
 * filets fins) pour que l'ensemble reste cohérent d'une section à l'autre.
 */

/** Largeur de contenu commune à toutes les sections. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

/** Sur-titre en capitales espacées, précédé d'un filet doré. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-4 text-sm font-medium uppercase tracking-[0.42em] text-brand-accent",
        className,
      )}
    >
      <span className="h-px w-8 bg-brand-accent/50" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Titre de section : serif, grande taille, interlignage resserré. */
export function DisplayTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "font-display text-balance text-3xl font-normal leading-[1.08] tracking-[-0.01em] text-brand-ivory sm:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Numéro de chapitre affiché en filigrane, ex. « 01 ». */
export function ChapterNumber({ value, className }: { value: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-display text-5xl font-normal leading-none text-brand-accent/25 sm:text-6xl",
        className,
      )}
    >
      {value}
    </span>
  );
}

/** Filet horizontal dégradé, utilisé comme séparateur de section. */
export function HairLine({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block h-px w-full bg-gradient-to-r from-transparent via-brand-line to-transparent",
        className,
      )}
    />
  );
}
