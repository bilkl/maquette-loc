import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getDealerContent } from "@/data/dealer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DealerLinkButton } from "@/components/dealer/DealerButton";

export function DealerAboutPage() {
  const content = getDealerContent();

  return (
    <div>
      <section className="border-b border-brand-line bg-brand-charcoal py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={`${siteConfig.name} — négociant automobile toutes marques entre Lausanne et Genève.`}
          />
        </div>
      </section>

      <section className="bg-brand-black py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-line">
            <Image
              src={siteConfig.images.about}
              alt={`Illustration de démonstration ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-brand-silver first:mt-0">
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 space-y-3">
              {content.about.commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-2.5 text-base text-brand-ivory">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                  {commitment}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DealerLinkButton href="/vehicules" variant="primary">
                Voir les véhicules
              </DealerLinkButton>
              <DealerLinkButton href="/#vendre" variant="secondary">
                Vendre mon véhicule
              </DealerLinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
