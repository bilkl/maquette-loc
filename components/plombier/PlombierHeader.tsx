"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Droplet, Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getPlombierContent } from "@/data/plombier";
import { PlombierLinkButton } from "@/components/plombier/PlombierButton";
import { PlombierMobileMenu } from "@/components/plombier/PlombierMobileMenu";
import { WhatsAppIcon } from "@/components/ui/icons";
import { telHref } from "@/lib/placeholders";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * En-tête du gabarit "plombier" : sticky, avec un accès d'urgence toujours
 * visible (appel direct + WhatsApp) — une fuite d'eau est une urgence
 * immédiate, le bouton d'urgence reste donc au premier plan sur toutes les
 * tailles d'écran, pas seulement en version desktop.
 */
export function PlombierHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const content = getPlombierContent();
  const phoneHref = telHref(siteConfig.contact.phone);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line bg-brand-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 leading-none text-brand-ivory transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
            <Droplet className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight sm:text-lg">
              {siteConfig.logo.primaryText}
              <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
            </span>
          </span>
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
                  "group/nav relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
                  isActive ? "text-brand-accent" : "text-brand-silver hover:text-brand-ivory",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-brand-accent transition-transform duration-200 ease-out group-hover/nav:scale-x-100",
                    isActive && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {phoneHref ? (
            <a
              href={phoneHref}
              aria-label={`${content.emergency.label} ${content.emergency.callLabel}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-orange-600 px-3 text-sm font-bold text-white shadow-md shadow-orange-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:px-4"
            >
              <Droplet className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{content.emergency.callLabel}</span>
            </a>
          ) : null}

          {isWhatsAppEnabled() ? (
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.emergency.whatsappLabel}
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-md border border-brand-line text-[#25D366] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:inline-flex"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : null}

          <div className="hidden sm:block">
            <PlombierLinkButton href="/#devis" variant="primary">
              Demander une intervention
            </PlombierLinkButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-line text-brand-ivory transition-colors duration-200 hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <PlombierMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
