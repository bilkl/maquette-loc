/**
 * Certaines agences sont livrées en maquette avant d'avoir communiqué leurs
 * coordonnées définitives. Plutôt que d'inventer des valeurs plausibles
 * (numéro suisse, adresse genevoise…) qui pourraient être prises pour de vraies
 * données, la configuration contient des espaces réservés explicites entre
 * crochets — ex. `[TÉLÉPHONE]`, `[ADRESSE]`.
 *
 * Les helpers ci-dessous permettent aux composants d'afficher ces valeurs
 * telles quelles, sans jamais générer de lien `tel:`, `mailto:` ou externe qui
 * serait cassé. Dès que la valeur réelle est renseignée dans
 * config/brands/<id>.ts, les liens redeviennent actifs automatiquement.
 */

const PLACEHOLDER_PATTERN = /\[[^\]]+\]/;

export function isPlaceholder(value: string | undefined | null): boolean {
  return !value || PLACEHOLDER_PATTERN.test(value);
}

/** `tel:` nettoyé, ou `null` si la valeur est encore un espace réservé. */
export function telHref(phone: string): string | null {
  if (isPlaceholder(phone)) return null;
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** `mailto:`, ou `null` si la valeur est encore un espace réservé. */
export function mailtoHref(email: string): string | null {
  if (isPlaceholder(email)) return null;
  return `mailto:${email}`;
}

/** URL externe (Instagram, Google Maps…), ou `null` si espace réservé. */
export function externalHref(url: string): string | null {
  if (isPlaceholder(url)) return null;
  return url;
}

/** Ne garde que les valeurs réellement renseignées (utile pour le JSON-LD). */
export function definedValues(...values: Array<string | undefined | null>): string[] {
  return values.filter((value): value is string => !isPlaceholder(value));
}

/**
 * Libellé lisible d'un compte Instagram à partir de son URL (« @agence »).
 * Si la valeur est encore un espace réservé, elle est renvoyée telle quelle.
 */
export function instagramLabel(url: string): string {
  if (isPlaceholder(url)) return url;
  const handle = url.replace(/\/+$/, "").split("/").pop();
  return handle ? `@${handle}` : url;
}
