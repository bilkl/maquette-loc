import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Bouton du gabarit "menuiserie" — même structure que les autres gabarits
 * artisan (voir ElectricienButton.tsx), sans variante "emergency" : ce
 * gabarit n'a pas de dimension urgence, contrairement à electricien/plombier.
 */

type MenuiserieButtonVariant = "primary" | "secondary";

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50";

function variantClasses(variant: MenuiserieButtonVariant): string {
  if (variant === "secondary") {
    return "border border-brand-line bg-brand-black text-brand-ivory hover:border-brand-accent hover:text-brand-accent";
  }
  return "bg-[linear-gradient(135deg,var(--color-brand-accent)_0%,var(--color-brand-accent-soft)_100%)] text-white shadow-md shadow-brand-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/35";
}

function Sheen({ variant }: { variant: MenuiserieButtonVariant }) {
  if (variant !== "primary") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.28)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
    />
  );
}

interface MenuiserieButtonProps {
  variant?: MenuiserieButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function MenuiserieButton({
  variant = "primary",
  className,
  children,
  ...props
}: MenuiserieButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses(variant), className)} {...props}>
      <Sheen variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function MenuiserieLinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: MenuiserieButtonProps &
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
