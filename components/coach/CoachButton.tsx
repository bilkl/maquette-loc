import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "coach" : casse capitale et coins peu arrondis pour une
 * lecture plus "impactante" que les gabarits artisan (voir ElectricienButton.tsx
 * pour le parti pris inverse) — cohérent avec la typographie bold du gabarit.
 */

type CoachButtonVariant = "primary" | "secondary";

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50";

function variantClasses(variant: CoachButtonVariant): string {
  if (variant === "secondary") {
    return "border-2 border-white/25 bg-white/5 text-brand-ivory hover:border-brand-accent hover:text-brand-accent";
  }
  return "bg-[linear-gradient(135deg,var(--color-brand-accent)_0%,var(--color-brand-accent-soft)_100%)] text-white shadow-lg shadow-brand-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/40";
}

function Sheen({ variant }: { variant: CoachButtonVariant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.32)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
    />
  );
}

interface CoachButtonProps {
  variant?: CoachButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function CoachButton({
  variant = "primary",
  className,
  children,
  ...props
}: CoachButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses(variant), className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function CoachLinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: CoachButtonProps &
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
