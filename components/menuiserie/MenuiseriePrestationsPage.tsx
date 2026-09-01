import { Check } from "lucide-react";
import { getMenuiserieContent } from "@/data/menuiserie";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MenuiserieLinkButton } from "@/components/menuiserie/MenuiserieButton";
import { familyIcons } from "@/components/menuiserie/icons";
import { AppointmentSection } from "@/components/menuiserie/AppointmentSection";

/** Page "Nos savoir-faire" : le détail de chaque famille, avec des exemples de réalisations. */
export function MenuiseriePrestationsPage() {
  const content = getMenuiserieContent();

  return (
    <>
      <section className="border-b border-brand-line bg-brand-charcoal py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={content.servicesPage.eyebrow}
            title={content.servicesPage.title}
            description={content.servicesPage.intro}
            align="left"
          />
        </div>
      </section>

      <section className="bg-brand-black py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-brand-line">
            {content.services.items.map((family) => {
              const Icon = familyIcons[family.icon];
              return (
                <article
                  key={family.slug}
                  id={family.slug}
                  className="scroll-mt-24 grid grid-cols-1 gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-14"
                >
                  <div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="font-display mt-4 text-2xl font-semibold text-brand-ivory">
                      {family.name}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-brand-silver">
                      {family.shortDescription}
                    </p>
                    <MenuiserieLinkButton
                      href="/#devis"
                      variant="secondary"
                      className="mt-5 w-full sm:w-auto"
                    >
                      Demander un devis
                    </MenuiserieLinkButton>
                  </div>

                  <ul className="space-y-2.5">
                    {family.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2.5 text-sm text-brand-ivory">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AppointmentSection content={content.appointment} families={content.services.items} />
    </>
  );
}
