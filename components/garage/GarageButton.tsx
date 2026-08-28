import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "garage" : coins arrondis, casse normale — délibérément
 * différent du bouton partagé components/ui/Button.tsx (coins droits,
 * capitales espacées) pensé pour les gabarits "classic"/"showroom". Éviter de
 * réutiliser ce dernier ici plutôt que de le surcharger : ses classes de base
 * (rounded-none, uppercase) entreraient en conflit de spécificité avec une
 * surcharge via className.
 */

type GarageButtonVariant = "primary" | "secondary";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<GarageButtonVariant, string> = {
  primary: "bg-brand-accent text-white hover:bg-brand-accent-soft",
  secondary: "border border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent",
};

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
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
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
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </Link>
  );
}
