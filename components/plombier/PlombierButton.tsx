import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "plombier" — repris du gabarit "electricien" (voir
 * ElectricienButton.tsx pour le détail des choix), avec une variante
 * "emergency" en orange/rouge plutôt qu'ambre : la demande explicite du
 * client était "accent orange ou rouge pour les CTA d'urgence", un rouge-
 * orangé lisant plus immédiatement comme urgent qu'un jaune ambre.
 */

type PlombierButtonVariant = "primary" | "secondary" | "emergency";

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50";

function variantClasses(variant: PlombierButtonVariant): string {
  if (variant === "secondary") {
    return "border border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent";
  }
  if (variant === "emergency") {
    return "bg-orange-600 text-white shadow-md shadow-orange-600/30 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/40";
  }
  return "bg-[linear-gradient(135deg,var(--color-brand-accent)_0%,var(--color-brand-accent-soft)_100%)] text-white shadow-md shadow-brand-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/35";
}

function Sheen({ variant }: { variant: PlombierButtonVariant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
    />
  );
}

interface PlombierButtonProps {
  variant?: PlombierButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function PlombierButton({
  variant = "primary",
  className,
  children,
  ...props
}: PlombierButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses(variant), className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function PlombierLinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: PlombierButtonProps &
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
