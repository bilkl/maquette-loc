import { cn } from "@/lib/utils";

interface ContactValueProps {
  /** Valeur affichée : coordonnée réelle ou espace réservé, ex. "[TÉLÉPHONE]" */
  value: string;
  /** Lien à générer, ou `null` si la valeur est encore un espace réservé */
  href: string | null;
  external?: boolean;
  className?: string;
}

/**
 * Affiche une coordonnée. Tant qu'elle n'est qu'un espace réservé
 * (voir lib/placeholders.ts), la valeur est rendue en texte simple, jamais en
 * lien cliquable cassé — et reste visuellement identifiable comme à compléter.
 */
export function ContactValue({ value, href, external = false, className }: ContactValueProps) {
  if (!href) {
    return (
      <span
        className={cn("text-brand-silver/80", className)}
        title="Coordonnée à renseigner avant publication"
      >
        {value}
      </span>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "text-brand-silver transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
        className,
      )}
    >
      {value}
    </a>
  );
}
