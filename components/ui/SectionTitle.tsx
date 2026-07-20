import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          <span className="h-px w-8 bg-brand-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-brand-ivory sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-brand-silver">{description}</p>
      ) : null}
    </div>
  );
}
