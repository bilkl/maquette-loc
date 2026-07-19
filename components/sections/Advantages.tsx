import { CalendarCheck, Car, Headset, Timer } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const advantages = [
  {
    icon: Car,
    title: "Véhicules sélectionnés",
    description: "Une gamme de véhicules de prestige choisis pour leur standing et leur fiabilité.",
  },
  {
    icon: CalendarCheck,
    title: "Réservation simple",
    description: "Un formulaire clair et une prise de contact rapide par WhatsApp ou e-mail.",
  },
  {
    icon: Headset,
    title: "Service personnalisé",
    description: "Un accompagnement dédié pour définir la formule la plus adaptée à vos besoins.",
  },
  {
    icon: Timer,
    title: "Courte et longue durée",
    description: "Des formules flexibles, du week-end à la location prolongée sur plusieurs mois.",
  },
];

export function Advantages() {
  return (
    <section className="bg-brand-charcoal py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Pourquoi NL Prestige" title="Une expérience de location pensée pour vous" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-line/60 bg-brand-black/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/50 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                <Icon className="h-6 w-6 text-brand-red" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-brand-ivory">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-silver">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
