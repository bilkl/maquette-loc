import { LinkButton } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DurationOffers() {
  return (
    <section className="bg-brand-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Formules" title="Courte ou longue durée" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-line/60 bg-brand-black/50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Courte durée
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-ivory">
              Pour un week-end, un événement ou un déplacement professionnel
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-silver">
              Profitez d&apos;un véhicule de prestige le temps d&apos;une occasion particulière :
              cérémonie, séminaire, escapade ou simple envie de conduire une voiture d&apos;exception.
              Une solution flexible, sans engagement à long terme.
            </p>
            <LinkButton href="/vehicules" variant="secondary" className="mt-6">
              Voir les véhicules disponibles
            </LinkButton>
          </div>

          <div className="rounded-2xl border border-brand-line/60 bg-brand-black/50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Longue durée
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-ivory">
              Une solution automobile flexible, sans achat immédiat
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-silver">
              Idéale pour les particuliers comme pour les professionnels souhaitant maîtriser leur
              budget automobile, la location longue durée offre une grande souplesse contractuelle
              et un accès simplifié à un véhicule de prestige.
            </p>
            <LinkButton href="/longue-duree" variant="secondary" className="mt-6">
              Découvrir la location longue durée
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
