import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "garage" : coins arrondis, casse normale — délibérément
 * différent du bouton partagé components/ui/Button.tsx (coins droits,
 * capitales espacées) pensé pour les gabarits "classic"/"showroom". Éviter de
 * réutiliser ce dernier ici plutôt que de le surcharger : ses classes de base
 * (rounded-none, uppercase) entreraient en conflit de spécificité avec une
 * surcharge via className.
 *
 * Le bouton primaire a deux traitements possibles, choisis par agence via
 * `siteConfig.premium` (voir config/brands/types.ts) plutôt que par un fork
 * de composant : un aplat sobre par défaut (Garage Carlos Atelier), ou un
 * dégradé avec balayage lumineux au survol pour une agence qui a demandé un
 * rendu plus premium. Le balayage est purement décoratif, masqué aux lecteurs
 * d'écran et neutralisé par `prefers-reduced-motion`.
 */

type GarageButtonVariant = "primary" | "secondary";

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50";

function variantClasses(variant: GarageButtonVariant): string {
  if (variant === "secondary") {
    return "border border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent";
  }

  if (siteConfig.premium) {
    return "bg-[linear-gradient(135deg,var(--color-brand-accent)_0%,var(--color-brand-accent-soft)_100%)] text-white shadow-md shadow-brand-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/35";
  }

  return "bg-brand-accent text-white hover:bg-brand-accent-soft";
}

function Sheen({ variant }: { variant: GarageButtonVariant }) {
  if (variant !== "primary" || !siteConfig.premium) return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
    />
  );
}

interface GarageButtonProps {
  variant?: GarageButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function GarageButton({
  variant = "primary",
  className,
  children,
  ...props
}: GarageButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses(variant), className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function GarageLinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: GarageButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  }) {
  return (
    <Link href={href} className={cn(baseClasses, variantClasses(variant), className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
