# NL Prestige — Maquette commerciale

Maquette complète du futur site de **NL Prestige**, entreprise suisse de location de véhicules de
prestige en courte et longue durée. Construit avec Next.js (App Router), TypeScript, Tailwind CSS,
Framer Motion et Lucide React.

> ⚠️ Il s'agit d'une **maquette commerciale**. Les véhicules, tarifs, coordonnées et contenus
> juridiques sont fictifs ou génériques et doivent être validés par NL Prestige avant toute mise en
> ligne officielle (voir la section [Informations à valider](#informations-à-valider-par-nl-prestige)).

## Sommaire

- [Installation](#installation)
- [Gabarits : « classic » et « showroom »](#gabarits--classic-et-showroom)
- [Lancer le projet](#lancer-le-projet)
- [Architecture du projet](#architecture-du-projet)
- [Modifier les coordonnées](#modifier-les-coordonnées)
- [Modifier les véhicules](#modifier-les-véhicules)
- [Remplacer les images](#remplacer-les-images)
- [Connecter le formulaire à un service réel](#connecter-le-formulaire-à-un-service-réel)
- [Modifier le numéro WhatsApp](#modifier-le-numéro-whatsapp)
- [Déployer sur Vercel](#déployer-sur-vercel)
- [Informations à valider par NL Prestige](#informations-à-valider-par-nl-prestige)

## Installation

Prérequis : Node.js 20 ou supérieur.

```bash
npm install
```

## Gabarits : « classic » et « showroom »

Le dépôt sert plusieurs agences (`NEXT_PUBLIC_BRAND`, voir
[`config/brands/index.ts`](config/brands/index.ts)) et, depuis LuxurCars, **deux directions
artistiques distinctes**. Chaque agence choisit la sienne dans `config/brands/<id>.ts` :

```ts
template: "showroom",   // "classic" par défaut
theme: "showroom",      // palette : "dark" | "light" | "showroom"
```

| | `classic` | `showroom` |
| --- | --- | --- |
| Intention | Location pratique : flotte, filtres, réservation | Collection premium : récit de marque, modèles racontés |
| Palette | Anthracite + accent agence | Noir profond `#050506` + or `#c8a24a` |
| Typographie | Fraunces (titres) + Geist | Playfair Display (titres) + Geist |
| Page d'accueil | Hero + flotte + avantages + FAQ | Hero plein écran + manifeste + chapitres de collection + expérience + réservation |
| Formulaire | `BookingForm` (un écran) | `ShowroomBookingForm` (3 étapes, estimation en direct) |
| Composants | `components/sections/`, `components/vehicles/` | `components/showroom/` |
| Contenu éditorial | `config/brands/<id>.ts` | `config/brands/<id>.ts` **+** `data/showroom/<id>.ts` |

Les deux gabarits partagent la même base : routes, données véhicules, FAQ, envoi des formulaires,
liens WhatsApp, pages légales. Seules les pages `/`, `/vehicules` et `/vehicules/[slug]` changent de
rendu selon `template` ; les autres pages (à propos, contact, mentions légales) sont communes et
reprennent automatiquement la palette de l'agence.

### Le gabarit showroom en détail

```
components/showroom/
  ShowroomHeader.tsx / ShowroomMobileMenu.tsx / ShowroomFooter.tsx
  ShowroomHero.tsx            Hero plein écran, parallaxe légère
  ManifestoSection.tsx        Prise de parole de l'agence
  CollectionSection.tsx       Chapitres par marque + modèles rattachés
  ExperienceSection.tsx       Les étapes, racontées
  ReservationSection.tsx      Formulaire + réassurance + coordonnées
  ShowroomFAQSection.tsx      FAQ en filets fins
  ShowroomCollectionPage.tsx  Page /vehicules
  ShowroomVehicleDetail.tsx   Page /vehicules/[slug]
  Reveal.tsx / primitives.tsx Apparitions au scroll et briques typographiques
components/forms/ShowroomBookingForm.tsx
data/showroom/<id>.ts         Tout le texte du gabarit (aucune phrase en dur dans les composants)
```

Le formulaire de réservation s'adapte au visiteur : choix visuel du modèle (ou « conseillez-moi »),
date de retour corrigée automatiquement, durée et estimation recalculées en direct, âge minimum
exigé variable selon le modèle (`minDriverAge` dans `data/vehicles/<id>.ts`), validation étape par
étape et reprise de la demande sur WhatsApp avec récapitulatif pré-rempli.

Les animations utilisent Framer Motion et respectent `prefers-reduced-motion`.

### Créer une maquette showroom pour un nouveau prospect

1. `config/brands/<id>.ts` — identité, couleurs, coordonnées, navigation, avec
   `template: "showroom"` et `theme: "showroom"`, puis enregistrer l'agence dans
   [`config/brands/index.ts`](config/brands/index.ts).
2. `data/showroom/<id>.ts` — le récit : hero, manifeste, chapitres par marque, expérience, textes de
   réservation et de FAQ. Enregistrer le fichier dans [`data/showroom/index.ts`](data/showroom/index.ts).
3. `data/vehicles/<id>.ts` — la collection, avec les champs narratifs `story`, `signature`, `power`,
   `acceleration`, `topSpeed` et `minDriverAge`.
4. `data/faq/<id>.ts` — les questions fréquentes, puis enregistrement dans `data/faq/index.ts`.
5. `public/brands/<id>/` — visuels : `hero.svg`, `about.svg`, `collection/<marque>.svg`,
   `vehicles/<slug>-1..3.svg` (ou de vraies photographies, mêmes chemins).
6. Créer un projet Vercel pointant sur ce dépôt avec `NEXT_PUBLIC_BRAND=<id>`.

Aucun composant n'est à dupliquer : les chapitres, les modèles et les textes viennent tous des
fichiers de données.

### Coordonnées : espaces réservés explicites

Sur une maquette non encore personnalisée, les coordonnées sont écrites entre crochets —
`[TÉLÉPHONE]`, `[E-MAIL]`, `[ADRESSE]`, `[NUMÉRO WHATSAPP]`, `[LIEN INSTAGRAM]`… — plutôt qu'avec de
faux numéros suisses plausibles, pour qu'aucune donnée fictive ne puisse être prise pour une donnée
réelle. [`lib/placeholders.ts`](lib/placeholders.ts) les détecte : ces valeurs s'affichent en clair
mais ne produisent jamais de lien `tel:`, `mailto:` ou externe cassé, et sont exclues du JSON-LD.
Dès que la valeur réelle est saisie dans `config/brands/<id>.ts`, les liens redeviennent actifs.

Le lien WhatsApp reste utilisable même sans numéro : il ouvre WhatsApp avec le message pré-rempli et
laisse choisir le destinataire, jusqu'à ce que `contact.whatsappNumber` soit renseigné.

## Lancer le projet

```bash
npm run dev
```

Le site est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

Autres commandes utiles :

```bash
npm run lint    # vérifie le code avec ESLint
npm run build   # génère le build de production
npm run start   # lance le build de production
```

## Architecture du projet

```
app/                     Pages et routes (App Router)
  vehicules/             Liste des véhicules + fiche dynamique [slug]
  longue-duree/          Page location longue durée
  a-propos/               Page à propos
  contact/                Page contact
  mentions-legales/       Page légale (modèle)
  confidentialite/        Page légale (modèle)
  conditions-generales/   Page légale (modèle)
  sitemap.ts / robots.ts  Référencement
components/
  layout/                Header, MobileMenu, Footer, WhatsAppButton
  sections/               Sections de la page d'accueil (Hero, FAQ, CTA…)
  vehicles/               VehicleCard, VehicleGrid, VehicleFilters, VehicleGallery
  forms/                  BookingForm, ContactForm, LongTermForm
  legal/                  Bandeau d'avertissement des pages légales
  ui/                     Button, SectionTitle, icônes
config/
  site.ts                 Configuration centralisée (coordonnées, nav, horaires…)
data/
  vehicles.ts             Données des véhicules de démonstration
  faq.ts                  Questions/réponses de la FAQ
lib/
  booking-actions.ts      Logique d'envoi des formulaires (isolée, à connecter)
  validation.ts           Validation des formulaires
  whatsapp.ts             Génération des liens WhatsApp
types/                   Types TypeScript partagés
public/images/           Images (voir public/images/vehicles/README.md)
```

## Modifier les coordonnées

Toutes les informations de contact, horaires, réseaux sociaux et liens de navigation sont
centralisés dans [`config/site.ts`](config/site.ts). Les valeurs non confirmées sont marquées :

```ts
// TODO: remplacer par l'information officielle de NL Prestige
```

Modifiez ce fichier pour mettre à jour l'e-mail, le téléphone, l'adresse, les horaires ou le lien
Instagram sur l'ensemble du site en une seule fois.

## Modifier les véhicules

Les véhicules affichés sont des **données de démonstration fictives**, centralisées dans
[`data/vehicles.ts`](data/vehicles.ts). Chaque véhicule est un objet décrivant :

- la marque, le modèle, la catégorie ;
- le nombre de places, la transmission, le carburant ;
- le prix indicatif par jour et la disponibilité ;
- les images (`coverImage`, `gallery`) ;
- la description, les caractéristiques, les options et les conditions essentielles.

Pour ajouter, modifier ou retirer un véhicule, éditez simplement ce tableau : toutes les pages
(accueil, liste, fiche véhicule, formulaires) se mettent à jour automatiquement.

## Remplacer les images

Les visuels actuels sont des illustrations SVG générées automatiquement, clairement identifiées
« image de démonstration — à remplacer ». Pour les remplacer par de vraies photographies :

1. Consultez [`public/images/vehicles/README.md`](public/images/vehicles/README.md) pour le
   format, les dimensions et le nommage conseillés.
2. Ajoutez vos fichiers dans `public/images/vehicles/`.
3. Mettez à jour les champs `coverImage` et `gallery` correspondants dans `data/vehicles.ts`.

Le composant `next/image` est utilisé partout pour bénéficier de l'optimisation automatique des
images.

## Connecter le formulaire à un service réel

Toute la logique d'envoi des formulaires (réservation, contact, longue durée) est isolée dans
[`lib/booking-actions.ts`](lib/booking-actions.ts). Pour cette maquette, les soumissions sont
journalisées dans la console du navigateur et une réponse de succès est simulée.

Pour connecter un service réel, remplacez le contenu de `submitBookingRequest`,
`submitContactRequest` et `submitLongTermRequest` par un appel à :

- [Resend](https://resend.com) (envoi d'e-mails transactionnels) ;
- [Formspree](https://formspree.io) ;
- une API personnalisée (route API Next.js, backend externe) ;
- un workflow [n8n](https://n8n.io) ;
- Google Sheets (via une API ou un webhook) ;
- un CRM.

La signature des fonctions (entrée : valeurs du formulaire, sortie : `{ success, message }`) peut
rester identique, aucun autre composant n'a besoin d'être modifié.

## Modifier le numéro WhatsApp

Le numéro WhatsApp et le message pré-rempli sont définis dans
[`config/site.ts`](config/site.ts) (`contact.whatsappNumber` et
`contact.whatsappDefaultMessage`). Le numéro actuel est une valeur factice à remplacer par le
numéro officiel de NL Prestige, au format international sans « + » ni espaces (ex. `41791234567`).

## Déployer sur Vercel

1. Poussez le projet sur un dépôt Git (GitHub, GitLab…).
2. Importez le dépôt sur [vercel.com/new](https://vercel.com/new).
3. Vercel détecte automatiquement Next.js : aucune configuration supplémentaire n'est nécessaire.
4. Une fois déployé, mettez à jour `siteConfig.url` dans `config/site.ts` avec le domaine final
   pour que le sitemap, les URLs canoniques et les balises Open Graph soient corrects.

## Informations à valider par NL Prestige

Avant toute publication officielle, NL Prestige doit fournir et valider :

- l'adresse postale exacte et le lien Google Maps ;
- le numéro de téléphone et le numéro WhatsApp officiels ;
- les horaires d'ouverture réels ;
- le lien Instagram officiel ;
- la raison sociale, le numéro IDE et les mentions légales complètes ;
- la politique de confidentialité (durées de conservation, cookies, base légale LPD) ;
- les conditions générales de location (âge minimum, caution, kilométrage, sortie du territoire,
  assurance) ;
- la liste réelle des véhicules disponibles, leurs tarifs et leurs photographies ;
- le nom de domaine définitif (actuellement une valeur d'exemple dans `config/site.ts`).

