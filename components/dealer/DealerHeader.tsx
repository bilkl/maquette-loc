"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import { DealerLinkButton } from "@/components/dealer/DealerButton";
import { DealerMobileMenu } from "@/components/dealer/DealerMobileMenu";
import { cn } from "@/lib/utils";

/**
 * En-tête du gabarit "dealer" : sobre et sticky, avec un accès direct au
 * catalogue et à l'estimation de reprise — les deux parcours mis en avant
 * dès le hero.
 */
export function DealerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line bg-brand-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 text-lg font-extrabold tracking-tight text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:text-xl"
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
                  "rounded-md px-3.5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
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
          <Link
            href="/vehicules"
            aria-label="Voir les véhicules"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent lg:hidden"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>

          {/* `hidden`/`sm:inline-flex` sur un wrapper plutôt que sur DealerLinkButton
              directement : ses classes de base imposent déjà `inline-flex`
              inconditionnellement, ce qui entrerait en conflit de spécificité
              avec une surcharge `hidden` au même niveau (voir DealerButton.tsx). */}
          <div className="hidden sm:block">
            <DealerLinkButton href="/#vendre" variant="primary">
              Vendre mon véhicule
            </DealerLinkButton>
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

      <DealerMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
