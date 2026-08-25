import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/ui/icons";
import { Container } from "@/components/showroom/primitives";
import { ContactValue } from "@/components/showroom/ContactValue";
import { externalHref, mailtoHref, telHref } from "@/lib/placeholders";

export function ShowroomFooter() {
  const instagramUrl = externalHref(siteConfig.social.instagram);
  const mapsUrl = externalHref(siteConfig.address.mapsUrl);

  return (
    <footer className="border-t border-brand-line/70 bg-brand-charcoal">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <p className="font-display text-2xl font-normal uppercase tracking-[0.28em] text-brand-ivory">
              {siteConfig.logo.primaryText}
              <span className="text-brand-accent">{siteConfig.logo.accentText}</span>
            </p>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-brand-silver">
              {siteConfig.tagline}
            </p>
            {instagramUrl ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-brand-silver transition-colors hover:text-brand-accent"
              >
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            ) : (
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-brand-silver/80">
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                {siteConfig.social.instagram}
              </p>
            )}
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-brand-accent">
              Maison
            </h2>
            <ul className="mt-5 space-y-3">
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
            <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-brand-accent">
              Informations légales
            </h2>
            <ul className="mt-5 space-y-3">
              {siteConfig.footerLinks.legal.map((link) => (
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
            <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-brand-accent">
              Nous joindre
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <ContactValue
                  value={siteConfig.contact.phone}
                  href={telHref(siteConfig.contact.phone)}
                />
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <ContactValue
                  value={siteConfig.contact.email}
                  href={mailtoHref(siteConfig.contact.email)}
                />
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <ContactValue
                  value={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
                  href={mapsUrl}
                  external
                />
              </li>
            </ul>

            <ul className="mt-6 space-y-2 text-sm text-brand-silver/80">
              {siteConfig.hours.map((slot) => (
                <li key={slot.day} className="flex justify-between gap-4">
                  <span>{slot.day}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-brand-line/70 pt-8 text-sm text-brand-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p className="text-brand-silver/70">
            Maquette commerciale — coordonnées entre crochets à personnaliser avant publication.
          </p>
        </div>
      </Container>
    </footer>
  );
}
