import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-none border px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-brand-ivory transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-brand-accent bg-brand-accent",
  secondary: "border-brand-line hover:border-brand-accent",
  ghost: "border-transparent hover:text-brand-accent",
};

const sweepClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-black",
  secondary: "bg-brand-accent",
  ghost: "",
};

function ButtonSweep({ variant }: { variant: ButtonVariant }) {
  if (variant === "ghost") return null;
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden",
        sweepClasses[variant],
      )}
    />
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      <ButtonSweep variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: ButtonBaseProps & { href: string }) {
  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)}>
      <ButtonSweep variant={variant} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
