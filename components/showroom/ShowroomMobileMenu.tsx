"use client";

import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ShowroomLogo } from "@/components/showroom/ShowroomLogo";
import { InstagramIcon } from "@/components/ui/icons";
import { externalHref } from "@/lib/placeholders";

interface ShowroomMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Menu plein écran du gabarit "showroom".
 * Rendu via un portail dans <body>, comme le menu du gabarit "classic" : un
 * ancêtre avec backdrop-filter redéfinirait sinon le containing block du
 * position: fixed (voir components/layout/MobileMenu.tsx).
 */
export function ShowroomMobileMenu({ isOpen, onClose }: ShowroomMobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (typeof document === "undefined" || !isOpen) return null;

  const instagramUrl = externalHref(siteConfig.social.instagram);

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-black lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div className="flex min-h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <ShowroomLogo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="inline-flex items-center justify-center border border-brand-line p-2.5 text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="mt-14 flex flex-1 flex-col">
          {siteConfig.nav.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline gap-4 border-b border-brand-line/70 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              <span
                aria-hidden="true"
                className="text-xs uppercase tracking-[0.3em] text-brand-accent/70"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-3xl font-normal text-brand-ivory transition-colors group-hover:text-brand-accent">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-5 pb-6">
          <Link
            href="/#reservation"
            onClick={onClose}
            className="border border-brand-accent bg-brand-accent px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.24em] text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            Réserver un modèle
          </Link>
          {instagramUrl ? (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm text-brand-silver transition-colors hover:text-brand-accent"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              Suivre {siteConfig.name} sur Instagram
            </a>
          ) : (
            <p className="inline-flex items-center gap-2 text-sm text-brand-silver/70">
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              Instagram : {siteConfig.social.instagram}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
