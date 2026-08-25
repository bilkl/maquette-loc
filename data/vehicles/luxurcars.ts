import { Vehicle } from "@/types/vehicle";

/**
 * Collection de démonstration LuxurCars.
 *
 * Les modèles, tarifs et disponibilités sont fictifs et doivent être remplacés
 * par la flotte réelle de l'agence. Les visuels sont des illustrations SVG
 * marquées « image de démonstration — à remplacer ».
 *
 * Les champs `story`, `signature`, `power`, `acceleration`, `topSpeed` et
 * `minDriverAge` sont propres au gabarit "showroom" : ils alimentent le récit
 * de la fiche modèle et la validation du formulaire de réservation.
 */
export const vehicles: Vehicle[] = [
  {
    slug: "ferrari-296-gtb",
    brand: "Ferrari",
    model: "296 GTB",
    category: "Supercar",
    seats: 2,
    transmission: "Automatique",
    fuel: "Hybride",
    pricePerDay: 1890,
    available: true,
    durations: ["courte"],
    coverImage: "/brands/luxurcars/vehicles/ferrari-296-gtb-1.jpg",
    gallery: [
      "/brands/luxurcars/vehicles/ferrari-296-gtb-1.jpg",
      "/brands/luxurcars/vehicles/ferrari-296-gtb-2.jpg",
      "/brands/luxurcars/vehicles/ferrari-296-gtb-3.jpg",
    ],
    description:
      "Berlinette centrale arrière à motorisation hybride rechargeable, la 296 GTB conjugue une mécanique d'exception et une conduite étonnamment lisible au quotidien.",
    story:
      "Elle démarre en silence, glisse hors du showroom comme une citadine, puis change de nature dès la première ligne droite. La 296 GTB est la Ferrari des contrastes : assez douce pour traverser Genève à l'heure de pointe, assez sauvage pour transformer une route du Jura en souvenir durable. C'est le modèle que nous confions le plus souvent à ceux qui découvrent la marque — parce qu'elle rassure avant d'impressionner.",
    signature: "Le silence du départ, puis tout le reste.",
    power: "830 ch",
    acceleration: "0–100 km/h en 2.9 s",
    topSpeed: "330 km/h",
    minDriverAge: 28,
    highlights: [
      "Motorisation V6 hybride rechargeable",
      "Mode électrique pour les départs discrets",
      "Freinage céramique de série",
      "Configuration deux places, coffre cabine",
    ],
    options: [
      "Livraison à l'adresse de votre choix",
      "Prise en main accompagnée (1 h)",
      "Kilométrage étendu",
      "Second conducteur",
    ],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 5 ans",
      "Âge minimum : 28 ans",
      "Caution et pièce d'identité demandées à la remise des clés",
      "Kilométrage journalier inclus à confirmer selon le contrat",
    ],
  },
  {
    slug: "ferrari-roma",
    brand: "Ferrari",
    model: "Roma",
    category: "Grand Tourisme",
    seats: 4,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 1450,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/brands/luxurcars/vehicles/ferrari-roma-1.jpg",
    gallery: [
      "/brands/luxurcars/vehicles/ferrari-roma-1.jpg",
      "/brands/luxurcars/vehicles/ferrari-roma-2.jpg",
      "/brands/luxurcars/vehicles/ferrari-roma-3.jpg",
    ],
    description:
      "Grand tourisme à moteur V8 avant, la Roma privilégie l'élégance de la ligne et le confort sur long trajet sans renoncer au tempérament de la marque.",
    story:
      "La Roma ne cherche pas le regard, elle l'obtient. Ligne tendue, calandre discrète, habitacle feutré : c'est la Ferrari que l'on choisit pour un dîner à Lausanne, un week-end sur la Riviera ou un mariage. Elle avale les kilomètres d'autoroute en silence, puis rappelle d'un coup d'accélérateur ce qu'elle est vraiment. Nos clients la réservent souvent pour deux ou trois jours ; ils reviennent en parlant du voyage, pas des chiffres.",
    signature: "La discrétion, jusqu'au moment où l'on appuie.",
    power: "620 ch",
    acceleration: "0–100 km/h en 3.4 s",
    topSpeed: "320 km/h",
    minDriverAge: 25,
    highlights: [
      "V8 biturbo à l'avant, propulsion",
      "Configuration 2+2 places",
      "Coffre adapté au voyage à deux",
      "Suspensions réglables pour long trajet",
    ],
    options: [
      "Livraison à l'adresse de votre choix",
      "Forfait week-end (3 jours)",
      "Kilométrage étendu",
      "Second conducteur",
    ],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 5 ans",
      "Âge minimum : 25 ans",
      "Caution et pièce d'identité demandées à la remise des clés",
      "Sortie du territoire suisse à annoncer avant le départ",
    ],
  },
  {
    slug: "lamborghini-huracan-evo",
    brand: "Lamborghini",
    model: "Huracán EVO",
    category: "Supercar",
    seats: 2,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 1750,
    available: true,
    durations: ["courte"],
    coverImage: "/brands/luxurcars/vehicles/lamborghini-huracan-evo-1.jpg",
    gallery: [
      "/brands/luxurcars/vehicles/lamborghini-huracan-evo-1.jpg",
      "/brands/luxurcars/vehicles/lamborghini-huracan-evo-2.jpg",
      "/brands/luxurcars/vehicles/lamborghini-huracan-evo-3.jpg",
    ],
    description:
      "V10 atmosphérique, transmission intégrale et architecture centrale arrière : la Huracán EVO reste l'une des dernières supercars à moteur atmosphérique de sa catégorie.",
    story:
      "Il y a le bruit, et il y a le V10. Aucun turbo, aucun filtre : la Huracán EVO monte dans les tours comme un instrument, et c'est précisément pour cela qu'on la réserve. Basse, large, immédiatement identifiable, elle transforme la moindre sortie en événement. Nous la conseillons pour une journée plutôt que pour une semaine — c'est une voiture d'occasion marquante, pas de trajet quotidien.",
    signature: "Dix cylindres, aucune excuse.",
    power: "640 ch",
    acceleration: "0–100 km/h en 2.9 s",
    topSpeed: "325 km/h",
    minDriverAge: 28,
    highlights: [
      "V10 atmosphérique 5.2 l",
      "Transmission intégrale et roues arrière directrices",
      "Modes de conduite Strada, Sport, Corsa",
      "Configuration deux places",
    ],
    options: [
      "Livraison à l'adresse de votre choix",
      "Prise en main accompagnée (1 h)",
      "Journée découverte sur itinéraire conseillé",
      "Kilométrage étendu",
    ],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 5 ans",
      "Âge minimum : 28 ans",
      "Caution et pièce d'identité demandées à la remise des clés",
      "Usage sur circuit exclu",
    ],
  },
  {
    slug: "lamborghini-urus-s",
    brand: "Lamborghini",
    model: "Urus S",
    category: "SUV supersport",
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 1290,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/brands/luxurcars/vehicles/lamborghini-urus-s-1.jpg",
    gallery: [
      "/brands/luxurcars/vehicles/lamborghini-urus-s-1.jpg",
      "/brands/luxurcars/vehicles/lamborghini-urus-s-2.jpg",
      "/brands/luxurcars/vehicles/lamborghini-urus-s-3.jpg",
    ],
    description:
      "SUV supersport à V8 biturbo, l'Urus S offre cinq places et un volume de coffre réel sans rien céder sur les performances.",
    story:
      "C'est la voiture des séjours en montagne. Cinq places, des skis à l'arrière, la route de Verbier sous la neige — et malgré tout, un V8 qui rappelle le blason à chaque relance. L'Urus S est le modèle que l'on garde une semaine, celui qui sert autant à emmener la famille qu'à arriver quelque part. En hiver, c'est notre réservation la plus demandée.",
    signature: "La montagne, sans compromis.",
    power: "666 ch",
    acceleration: "0–100 km/h en 3.5 s",
    topSpeed: "305 km/h",
    minDriverAge: 25,
    highlights: [
      "V8 biturbo, transmission intégrale",
      "Cinq places et coffre de voyage",
      "Suspensions pneumatiques pilotées",
      "Modes neige et route de montagne",
    ],
    options: [
      "Pneus hiver (saison froide)",
      "Coffre de toit / porte-skis",
      "Livraison en station",
      "Kilométrage étendu",
    ],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 3 ans",
      "Âge minimum : 25 ans",
      "Caution et pièce d'identité demandées à la remise des clés",
      "Équipement hiver selon la saison et l'itinéraire",
    ],
  },
  {
    slug: "maserati-mc20",
    brand: "Maserati",
    model: "MC20",
    category: "Supercar",
    seats: 2,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 1590,
    available: true,
    durations: ["courte"],
    coverImage: "/brands/luxurcars/vehicles/maserati-mc20-1.jpg",
    gallery: [
      "/brands/luxurcars/vehicles/maserati-mc20-1.jpg",
      "/brands/luxurcars/vehicles/maserati-mc20-2.jpg",
      "/brands/luxurcars/vehicles/maserati-mc20-3.jpg",
    ],
    description:
      "Portes papillon, châssis carbone et V6 Nettuno : la MC20 marque le retour de Maserati sur le terrain des supercars.",
    story:
      "La MC20 est la moins attendue des trois, et souvent la plus commentée. Là où d'autres crient, elle articule : une ligne sobre, presque classique, posée sur un châssis carbone et un V6 conçu pour la marque. Ceux qui la réservent connaissent déjà les italiennes et cherchent autre chose — une supercar que l'on ne croise pas dix fois dans la même journée sur la rade.",
    signature: "L'italienne que l'on ne croise pas deux fois.",
    power: "630 ch",
    acceleration: "0–100 km/h en 2.9 s",
    topSpeed: "325 km/h",
    minDriverAge: 28,
    highlights: [
      "Monocoque en fibre de carbone",
      "V6 Nettuno développé par Maserati",
      "Portes papillon",
      "Configuration deux places",
    ],
    options: [
      "Livraison à l'adresse de votre choix",
      "Prise en main accompagnée (1 h)",
      "Séance photo sur itinéraire conseillé",
      "Kilométrage étendu",
    ],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 5 ans",
      "Âge minimum : 28 ans",
      "Caution et pièce d'identité demandées à la remise des clés",
      "Usage sur circuit exclu",
    ],
  },
  {
    slug: "maserati-grecale-trofeo",
    brand: "Maserati",
    model: "Grecale Trofeo",
    category: "SUV supersport",
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 890,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/brands/luxurcars/vehicles/maserati-grecale-trofeo-1.jpg",
    gallery: [
      "/brands/luxurcars/vehicles/maserati-grecale-trofeo-1.jpg",
      "/brands/luxurcars/vehicles/maserati-grecale-trofeo-2.jpg",
      "/brands/luxurcars/vehicles/maserati-grecale-trofeo-3.jpg",
    ],
    description:
      "Le Grecale Trofeo reprend le V6 Nettuno dans une carrosserie SUV : cinq places, usage quotidien et tempérament de sportive.",
    story:
      "C'est la porte d'entrée de la collection, et probablement la plus polyvalente. Le Grecale Trofeo se conduit toute la semaine sans effort — parking souterrain, sièges enfants, coffre de courses — puis retrouve le V6 Nettuno le samedi matin. Nos clients longue durée le choisissent presque toujours : le luxe qui reste utilisable.",
    signature: "Le luxe qui reste utilisable.",
    power: "530 ch",
    acceleration: "0–100 km/h en 3.8 s",
    topSpeed: "285 km/h",
    minDriverAge: 23,
    highlights: [
      "V6 Nettuno en configuration SUV",
      "Cinq places, coffre familial",
      "Suspensions pneumatiques",
      "Adapté à la location longue durée",
    ],
    options: [
      "Pneus hiver (saison froide)",
      "Forfait mensuel longue durée",
      "Livraison à l'adresse de votre choix",
      "Second conducteur",
    ],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 3 ans",
      "Âge minimum : 23 ans",
      "Caution et pièce d'identité demandées à la remise des clés",
      "Conditions longue durée établies sur devis",
    ],
  },
];
