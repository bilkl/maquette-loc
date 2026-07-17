# Images des véhicules

Ce dossier contient actuellement des **photographies réelles de démonstration**, utilisées pour
illustrer la maquette. Elles proviennent de Wikimedia Commons (contenus sous licences libres type
CC-BY / CC-BY-SA selon les fichiers) et servent uniquement à représenter les modèles de véhicules
utilisés dans les données de démonstration — elles ne montrent pas la flotte réelle de NL Prestige et
ne constituent pas des photos prises par NL Prestige.

> ⚠️ Avant toute publication commerciale, ces images doivent être remplacées par de vraies photos
> de la flotte NL Prestige, ou par des photos dont la licence et l'attribution ont été vérifiées et
> validées par NL Prestige.

## Format conseillé

- Format de fichier : `.jpg` ou `.webp` (le `.webp` est recommandé pour un poids réduit).
- Orientation paysage, cadrage 3/4 avant ou profil, fond neutre ou en situation.
- Éviter les filtres trop marqués : privilégier des photos nettes et bien exposées.

## Dimensions recommandées

- Image principale (carte véhicule / fiche véhicule) : **1600 × 1000 px minimum**.
- Images de galerie : **1600 × 1000 px minimum**, ratio 16:10 conseillé pour une mise en page homogène.
- Poids conseillé : entre 150 Ko et 400 Ko par image après compression.

## Nommage des fichiers

Utilisez le `slug` du véhicule (voir `data/vehicles.ts`) suivi d'un numéro d'ordre :

```
<slug-du-vehicule>-1.jpg   → image principale
<slug-du-vehicule>-2.jpg   → galerie
<slug-du-vehicule>-3.jpg   → galerie
```

Exemple pour la Porsche 911 Carrera :

```
porsche-911-carrera-1.jpg
porsche-911-carrera-2.jpg
porsche-911-carrera-3.jpg
```

## Compression recommandée

Avant d'ajouter vos photographies :

1. Redimensionnez-les à la largeur maximale utile (1600 px de large suffit dans la majorité des cas).
2. Compressez-les avec un outil comme [Squoosh](https://squoosh.app) ou `sharp`/`imagemin` en ligne de commande.
3. Visez un poids final de 150 à 400 Ko par image afin de préserver les performances du site.

## Mise à jour des données

Une fois vos photos ajoutées dans ce dossier, mettez à jour les chemins `coverImage` et `gallery`
correspondants dans [`data/vehicles.ts`](../../../data/vehicles.ts).
