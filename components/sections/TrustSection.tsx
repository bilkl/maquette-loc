import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const trustPoints = [
  "Accompagnement personnalisé à chaque étape de votre demande",
  "Conditions de location présentées clairement avant confirmation",
  "Véhicules préparés et contrôlés avant chaque départ",
  "Assistance disponible pendant toute la durée de la location",
];

export function TrustSection() {
  return (
    <section className="bg-brand-black py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Confiance"
          title="Une approche transparente et rassurante"
          description="NL Prestige s'engage à instaurer une relation de confiance avec chaque client, avant, pendant et après la location."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl border border-brand-line/60 bg-brand-charcoal/40 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-brand-silver">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
