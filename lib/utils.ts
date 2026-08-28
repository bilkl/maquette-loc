export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Regroupe un nombre entier par milliers (ex. 1890 → "1 890").
 *
 * N'utilise volontairement pas `Intl.NumberFormat`/`toLocaleString` : le
 * séparateur de milliers qu'ils produisent dépend de la version d'ICU du
 * moteur JS (apostrophe sur certains runtimes serveur, espace fine
 * insécable dans les navigateurs récents). Rendu depuis le serveur (build
 * statique) puis réhydraté côté client, cet écart provoque un mismatch
 * d'hydratation React. Ce regroupement manuel produit un résultat
 * identique dans n'importe quel environnement.
 */
export function groupThousands(amount: number): string {
  return Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** Formate un montant en CHF (ex. 1890 -> "1 890 CHF"). */
export function formatChf(amount: number): string {
  return `${groupThousands(amount)} CHF`;
}

/** Formate un kilometrage (ex. 42000 -> "42 000 km"). */
export function formatKm(amount: number): string {
  return `${groupThousands(amount)} km`;
}

/** Date du jour au format `YYYY-MM-DD`, attendu par les champs `<input type="date">`. */
export function todayIso(): string {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
}

/**
 * Nombre de jours de location entre deux dates ISO (`YYYY-MM-DD`).
 * Renvoie 0 si l'une des dates manque ou si l'intervalle est invalide.
 * Une journée de location est facturée dès le jour du départ : un aller-retour
 * sur la même date compte donc pour 1 jour.
 */
export function countRentalDays(startDate: string, endDate: string): number {
  if (!startDate || !endDate) return 0;
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  const days = Math.round((end.getTime() - start.getTime()) / 86_400_000) + 1;
  return days > 0 ? days : 0;
}

/** Formate une date ISO (`YYYY-MM-DD`) en français, ex. « 12 septembre 2026 ». */
export function formatDateFr(isoDate: string): string {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("fr-CH", { dateStyle: "long" }).format(date);
}
