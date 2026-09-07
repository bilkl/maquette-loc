"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CoachLinkButton } from "@/components/coach/CoachButton";
import { CoachMobileMenu } from "@/components/coach/CoachMobileMenu";
import { cn } from "@/lib/utils";

/**
 * En-tête du gabarit "coach" : sticky, sobre en dehors du CTA principal —
 * l'énergie du gabarit vient du hero et des sections, pas d'un en-tête chargé.
 */
export function CoachHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line bg-brand-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-1 text-xl font-black uppercase tracking-tight text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          {siteConfig.logo.primaryText}
          <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((link) => {
            const isHash = link.href.includes("#");
            const isActive = isHash
              ? false
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                  isActive
                    ? "text-brand-accent"
                    : "text-brand-silver hover:bg-brand-charcoal hover:text-brand-ivory",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <CoachLinkButton href="/#bilan" variant="primary">
              Réserver mon bilan
            </CoachLinkButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <CoachMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
