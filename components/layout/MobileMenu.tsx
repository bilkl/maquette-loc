"use client";

import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LinkButton } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // isOpen ne devient vrai qu'après un clic côté client, donc document existe
  // toujours ici. Rendu via portail directement dans <body> : évite qu'un
  // ancêtre avec backdrop-filter/filter/transform (ex. le header en verre
  // dépoli) ne redéfinisse le "containing block" du menu en position fixed.
  // Remarque : une précédente version utilisait framer-motion (AnimatePresence)
  // pour un fondu, mais l'animation restait parfois bloquée à mi-course
  // (menu semi-transparent) une fois combinée au portail ; l'affichage direct
  // ci-dessous est plus simple et fiable.
  if (typeof document === "undefined" || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-black lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div className="flex min-h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={onClose}
            className="font-display text-xl font-semibold tracking-[0.18em] text-brand-ivory"
          >
            {siteConfig.logo.primaryText} <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="inline-flex items-center justify-center rounded-full border border-brand-line p-2 text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav
          aria-label="Navigation mobile"
          className="mt-12 flex flex-1 flex-col gap-2"
        >
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display border-b border-brand-line/60 py-4 text-3xl font-medium text-brand-ivory transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pb-6">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm text-brand-silver hover:text-brand-accent"
          >
            <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            Suivre {siteConfig.name} sur Instagram
          </a>
          <LinkButton href="/contact" variant="primary" className="w-full">
            Réserver
          </LinkButton>
        </div>
      </div>
    </div>,
    document.body,
  );
}
