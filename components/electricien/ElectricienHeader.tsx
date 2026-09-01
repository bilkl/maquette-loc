"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Siren } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getElectricienContent } from "@/data/electricien";
import { ElectricienLinkButton } from "@/components/electricien/ElectricienButton";
import { ElectricienMobileMenu } from "@/components/electricien/ElectricienMobileMenu";
import { WhatsAppIcon } from "@/components/ui/icons";
import { telHref } from "@/lib/placeholders";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * En-tête du gabarit "electricien" : sobre et sticky comme le gabarit
 * "garage", avec en plus un accès d'urgence toujours visible (appel direct +
 * WhatsApp) — repris de la demande explicite d'un "bouton d'urgence bien
 * visible", pour une clientèle qui consulte souvent ce site en pleine panne.
 */
export function ElectricienHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const content = getElectricienContent();
  const phoneHref = telHref(siteConfig.contact.phone);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line bg-brand-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col leading-none text-brand-ivory transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          <span className="text-base font-extrabold tracking-tight transition-colors duration-200 group-hover:text-brand-accent sm:text-lg">
            {siteConfig.logo.primaryText}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent transition-opacity duration-200 group-hover:opacity-70 sm:text-sm">
            {siteConfig.logo.accentText}
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
              className="inline-flex h-10 items-center gap-2 rounded-md bg-amber-500 px-3 text-sm font-bold text-black shadow-sm shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-md hover:shadow-amber-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:px-4"
            >
              <Siren className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{content.emergency.callLabel}</span>
            </a>
          ) : null}

          {isWhatsAppEnabled() ? (
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.emergency.whatsappLabel}
              className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border border-brand-line text-[#25D366] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:inline-flex"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : null}

          <div className="hidden sm:block">
            <ElectricienLinkButton href="/#devis" variant="primary">
              Demander un devis
            </ElectricienLinkButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line text-brand-ivory transition-colors duration-200 hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ElectricienMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
