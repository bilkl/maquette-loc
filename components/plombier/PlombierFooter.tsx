import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/ui/icons";
import { ContactValue } from "@/components/showroom/ContactValue";
import { externalHref, mailtoHref, telHref } from "@/lib/placeholders";

export function PlombierFooter() {
  const instagramUrl = externalHref(siteConfig.social.instagram);
  const mapsUrl = externalHref(siteConfig.address.mapsUrl);

  return (
    <footer className="border-t border-brand-line bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-brand-ivory">
              {siteConfig.logo.primaryText}
              <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-silver">
              {siteConfig.tagline}
            </p>
            {instagramUrl ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-brand-silver transition-colors hover:text-brand-accent"
              >
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            ) : null}
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-ivory">Entreprise</h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-silver transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-ivory">Nous joindre</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <ContactValue value={siteConfig.contact.phone} href={telHref(siteConfig.contact.phone)} />
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <ContactValue value={siteConfig.contact.email} href={mailtoHref(siteConfig.contact.email)} />
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <ContactValue
                  value={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
                  href={mapsUrl}
                  external
                />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-ivory">Horaires</h2>
            <ul className="mt-4 space-y-2 text-sm text-brand-silver">
              {siteConfig.hours.map((slot) => (
                <li key={slot.day} className="flex justify-between gap-4">
                  <span>{slot.day}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-line pt-6 text-sm text-brand-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p className="text-brand-silver/80">
            Maquette commerciale — coordonnées entre crochets à personnaliser avant publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
