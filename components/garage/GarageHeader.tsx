"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CalendarClock, Menu, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GarageLinkButton } from "@/components/garage/GarageButton";
import { GarageMobileMenu } from "@/components/garage/GarageMobileMenu";
import { telHref } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

/**
 * En-tête du gabarit "garage" : sobre, sticky, avec le numéro de téléphone
 * toujours visible et joignable en un geste — le principal point d'entrée
 * pour une clientèle qui cherche souvent depuis son téléphone, dans l'urgence
 * (panne, pneu crevé).
 */
export function GarageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const phoneHref = telHref(siteConfig.contact.phone);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line bg-brand-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-baseline gap-1 text-lg font-extrabold tracking-tight text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:text-xl"
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
          {phoneHref ? (
            <a
              href={phoneHref}
              aria-label={`Appeler ${siteConfig.name}`}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-brand-line px-3 text-sm font-semibold text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:px-4"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
            </a>
          ) : null}

          {/* `hidden`/`sm:block` sur un wrapper plutôt que sur GarageLinkButton
              directement : ses classes de base imposent déjà `inline-flex`
              inconditionnellement, ce qui entrerait en conflit de spécificité
              avec une surcharge de display au même niveau (voir GarageButton.tsx). */}
          <div className="hidden sm:block">
            <GarageLinkButton href="/#rendez-vous" variant="primary">
              Prendre RDV
            </GarageLinkButton>
          </div>

          {/* Version compacte du bouton RDV sur mobile : un accès direct à la
              prise de rendez-vous sans passer par le menu, pour une clientèle
              qui consulte souvent ce site dans l'urgence. */}
          <div className="sm:hidden">
            <GarageLinkButton
              href="/#rendez-vous"
              variant="primary"
              aria-label="Prendre rendez-vous"
              className="h-10 w-10 shrink-0 px-0"
            >
              <CalendarClock className="h-5 w-5" aria-hidden="true" />
            </GarageLinkButton>
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

      <GarageMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
