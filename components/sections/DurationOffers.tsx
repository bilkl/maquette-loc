import { LinkButton } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DurationOffers() {
  return (
    <section className="bg-brand-charcoal py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Formules" title="Courte ou longue durée" />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-line/60 bg-brand-black/50 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl hover:shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-red">
              Courte durée
            </p>
            <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-brand-ivory">
              Pour un week-end, un événement ou un déplacement professionnel
            </h3>
            <p className="mt-5 text-base leading-relaxed text-brand-silver">
              Profitez d&apos;un véhicule de prestige le temps d&apos;une occasion particulière :
              cérémonie, séminaire, escapade ou simple envie de conduire une voiture d&apos;exception.
              Une solution flexible, sans engagement à long terme.
            </p>
            <LinkButton href="/vehicules" variant="secondary" className="mt-8">
              Voir les véhicules disponibles
            </LinkButton>
          </div>

          <div className="rounded-2xl border border-brand-line/60 bg-brand-black/50 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl hover:shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-red">
              Longue durée
            </p>
            <h3 className="font-display mt-4 text-3xl font-semibold leading-tight text-brand-ivory">
              Une solution automobile flexible, sans achat immédiat
            </h3>
            <p className="mt-5 text-base leading-relaxed text-brand-silver">
              Idéale pour les particuliers comme pour les professionnels souhaitant maîtriser leur
              budget automobile, la location longue durée offre une grande souplesse contractuelle
              et un accès simplifié à un véhicule de prestige.
            </p>
            <LinkButton href="/longue-duree" variant="secondary" className="mt-8">
              Découvrir la location longue durée
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
