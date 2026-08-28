"use client";

import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Car, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { DealerLinkButton } from "@/components/dealer/DealerButton";

interface DealerMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Menu mobile du gabarit "dealer". Rendu via un portail dans <body>, comme
 * les autres gabarits : un ancêtre avec backdrop-filter (l'en-tête collant)
 * redéfinirait sinon le containing block du position: fixed.
 */
export function DealerMobileMenu({ isOpen, onClose }: DealerMobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof document === "undefined" || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-black lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div className="flex min-h-full flex-col px-5 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="text-lg font-extrabold tracking-tight text-brand-ivory"
          >
            {siteConfig.logo.primaryText}
            <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-line text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="mt-10 flex flex-1 flex-col gap-1">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg border-b border-brand-line/70 px-2 py-4 text-xl font-semibold text-brand-ivory transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pb-6">
          <DealerLinkButton href="/vehicules" variant="secondary" onClick={onClose} className="w-full">
            <Car className="h-4 w-4" aria-hidden="true" />
            Voir les véhicules
          </DealerLinkButton>
          <DealerLinkButton href="/#vendre" variant="primary" onClick={onClose} className="w-full">
            Vendre mon véhicule
          </DealerLinkButton>
        </div>
      </div>
    </div>,
    document.body,
  );
}
