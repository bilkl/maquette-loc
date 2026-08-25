"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ShowroomMobileMenu } from "@/components/showroom/ShowroomMobileMenu";
import { ShowroomLogo } from "@/components/showroom/ShowroomLogo";
import { cn } from "@/lib/utils";

/**
 * En-tête du gabarit "showroom" : transparent au-dessus du hero plein écran,
 * puis fond noir et filet doré dès le premier défilement.
 */
export function ShowroomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-brand-line/70 bg-brand-black/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-brand-black/70 to-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-12",
          isScrolled ? "h-16" : "h-20 sm:h-24",
        )}
      >
        <ShowroomLogo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((link) => {
            const isHash = link.href.includes("#");
            const isActive = isHash
              ? false
              : link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative text-sm font-medium uppercase tracking-[0.24em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent",
                  isActive ? "text-brand-ivory" : "text-brand-silver hover:text-brand-ivory",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-brand-accent transition-transform duration-300 ease-out group-hover:scale-x-100",
                    isActive && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#reservation"
            className="group relative inline-flex items-center overflow-hidden border border-brand-accent/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-brand-accent transition-colors duration-300 hover:text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-brand-accent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden"
            />
            <span className="relative z-10">Réserver</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center justify-center border border-brand-line p-2.5 text-brand-ivory transition-colors hover:border-brand-accent hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <ShowroomMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
