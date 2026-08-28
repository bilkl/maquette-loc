import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "dealer" : coins arrondis, casse normale — même parti pris
 * que components/garage/GarageButton.tsx (ton fonctionnel, pas prestige).
 * Dupliqué plutôt que partagé entre gabarits : chaque verticale du dépôt a son
 * propre bouton pour rester libre de faire évoluer son style sans impacter
 * les autres (voir components/ui/Button.tsx pour "classic"/"showroom").
 */

type DealerButtonVariant = "primary" | "secondary";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0";

const variantClasses: Record<DealerButtonVariant, string> = {
  primary: "bg-brand-accent text-white shadow-md shadow-brand-accent/25 hover:bg-brand-accent-soft hover:shadow-lg hover:shadow-brand-accent/30",
  secondary: "border border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent hover:shadow-md hover:shadow-black/5",
};

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
      {children}
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
      {children}
    </Link>
  );
}
