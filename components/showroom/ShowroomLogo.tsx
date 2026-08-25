import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Logo texte du gabarit "showroom" : serif, capitales espacées, accent doré. */
export function ShowroomLogo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} — retour à l'accueil`}
      className={cn(
        "font-display text-lg font-normal uppercase tracking-[0.3em] text-brand-ivory transition-colors duration-300 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent sm:text-xl",
        className,
      )}
    >
      {siteConfig.logo.primaryText}
      <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
    </Link>
  );
}
