import { getFeaturedVehicles } from "@/data/vehicles";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";
import { LinkButton } from "@/components/ui/Button";

export function FeaturedVehicles() {
  const vehicles = getFeaturedVehicles(6);

  return (
    <section className="bg-brand-black py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sélection"
          title="Véhicules en vedette"
          description="Une sélection de véhicules de démonstration, présentée à titre d'exemple pour illustrer le fonctionnement du site."
        />

        <div className="mt-16">
          <VehicleGrid vehicles={vehicles} />
        </div>

        <div className="mt-14 flex justify-center">
          <LinkButton href="/vehicules" variant="secondary">
            Voir tous les véhicules
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
