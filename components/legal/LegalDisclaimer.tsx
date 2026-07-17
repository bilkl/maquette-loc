import { AlertTriangle } from "lucide-react";

export function LegalDisclaimer() {
  return (
    <div className="mb-10 flex items-start gap-3 rounded-xl border border-brand-red/40 bg-brand-red/10 p-5">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-brand-red-soft">
        Ce contenu est un modèle générique fourni à titre indicatif dans le cadre de cette maquette.
        Il doit impérativement être relu, complété et validé par NL Prestige (ou son conseil
        juridique) avant toute publication officielle.
      </p>
    </div>
  );
}
