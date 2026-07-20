import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function LegalDisclaimer() {
  return (
    <div className="mb-10 flex items-start gap-3 rounded-xl border border-brand-accent/40 bg-brand-accent/10 p-5">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-brand-accent-soft">
        Ce contenu est un modèle générique fourni à titre indicatif dans le cadre de cette maquette.
        Il doit impérativement être relu, complété et validé par {siteConfig.name} (ou son conseil
        juridique) avant toute publication officielle.
      </p>
    </div>
  );
}
