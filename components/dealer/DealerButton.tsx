import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "dealer" : coins arrondis, casse normale — même parti pris
 * que components/garage/GarageButton.tsx (ton fonctionnel, pas prestige).
 * Dupliqué plutôt que partagé entre gabarits : chaque verticale du dépôt a son
 * propre bouton pour rester libre de faire évoluer son style sans impacter
 * les autres (voir components/ui/Button.tsx pour "classic"/"showroom").
 *
 * Le balayage lumineux au survol (`Sheen`) est purement décoratif et masqué
 * aux lecteurs d'écran ; il est neutralisé par prefers-reduced-motion via
 * `motion-reduce:hidden`, comme les autres animations du site.
 */

type DealerButtonVariant = "primary" | "secondary";

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0";

const variantClasses: Record<DealerButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--color-brand-accent)_0%,var(--color-brand-accent-soft)_100%)] text-white shadow-md shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/35",
  secondary:
    "border border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent hover:shadow-md hover:shadow-black/5",
};

function Sheen({ variant }: { variant: DealerButtonVariant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.35)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
    />
  );
}

interface DealerButtonProps {
  variant?: DealerButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function DealerButton({
  variant = "primary",
  className,
  children,
  ...props
}: DealerButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function DealerLinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: DealerButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  }) {
  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
