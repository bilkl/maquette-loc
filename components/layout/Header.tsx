"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LinkButton } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { InstagramIcon } from "@/components/ui/icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-line/60 bg-brand-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.2em] text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        >
          NL <span className="text-brand-red">PRESTIGE</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 lg:flex"
        >
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-brand-silver transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suivre NL Prestige sur Instagram"
            className="text-brand-silver transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            <InstagramIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <LinkButton href="/contact" variant="primary">
            Réserver
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-brand-line p-2 text-brand-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
