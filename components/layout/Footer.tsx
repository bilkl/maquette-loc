import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-brand-line/60 bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-brand-ivory">
              NL <span className="text-brand-red">PRESTIGE</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-silver">
              {siteConfig.tagline}
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-brand-silver transition-colors hover:text-brand-red"
            >
              <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              Instagram
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ivory">
              Entreprise
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-silver transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ivory">
              Informations légales
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-silver transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ivory">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-silver">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-red">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-brand-red"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-line/60 pt-8 text-xs text-brand-silver sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p className="text-brand-silver/70">
            Maquette commerciale — contenus à valider avant publication officielle.
          </p>
        </div>
      </div>
    </footer>
  );
}
