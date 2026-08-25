import { Vehicle } from "@/types/vehicle";

/**
 * Données de démonstration.
 * Reprend la même flotte de démonstration que NL Prestige (photos de stock
 * génériques, non liées à l'identité de marque). Modifiez librement cette
 * liste pour donner à Elegancy Rent sa propre flotte, indépendamment des
 * autres agences.
 */
export const vehicles: Vehicle[] = [
  {
    slug: "mercedes-amg-a45-s",
    brand: "Mercedes-AMG",
    model: "A45 S",
    category: "Compacte sportive",
    seats: 4,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 390,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/images/vehicles/mercedes-amg-a45-s-1.jpg",
    gallery: [
      "/images/vehicles/mercedes-amg-a45-s-1.jpg",
      "/images/vehicles/mercedes-amg-a45-s-2.jpg",
      "/images/vehicles/mercedes-amg-a45-s-3.jpg",
    ],
    description:
      "Compacte survitaminée à la présence affirmée, la Mercedes-AMG A45 S combine motorisation quatre cylindres suralimentée et transmission intégrale pour une expérience de conduite intense au quotidien.",
    highlights: [
      "Motorisation AMG haute performance",
      "Transmission intégrale 4MATIC+",
      "Intérieur sport avec finitions premium",
      "Idéale pour un usage urbain dynamique",
    ],
    options: ["Conducteur additionnel", "Kilométrage étendu", "Prise en charge à domicile"],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 3 ans",
      "Âge minimum requis selon le véhicule",
      "Caution demandée avant la remise des clés",
    ],
  },
  {
    slug: "bmw-m4-competition",
    brand: "BMW",
    model: "M4 Competition",
    category: "Sportive",
    seats: 4,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 490,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/images/vehicles/bmw-m4-competition-1.jpg",
    gallery: [
      "/images/vehicles/bmw-m4-competition-1.jpg",
      "/images/vehicles/bmw-m4-competition-2.jpg",
      "/images/vehicles/bmw-m4-competition-3.jpg",
    ],
    description:
      "La BMW M4 Competition incarne la sportivité allemande dans sa forme la plus aboutie : un six cylindres en ligne biturbo, un châssis affûté et une ligne qui ne passe pas inaperçue.",
    highlights: [
      "Moteur six cylindres biturbo",
      "Châssis M optimisé pour la route",
      "Freins hautes performances",
      "Silhouette coupé exclusive",
    ],
    options: ["Conducteur additionnel", "Kilométrage étendu", "Livraison sur lieu événementiel"],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 3 ans",
      "Âge minimum requis selon le véhicule",
      "Caution demandée avant la remise des clés",
    ],
  },
  {
    slug: "audi-rs3",
    brand: "Audi",
    model: "RS3",
    category: "Compacte sportive",
    seats: 4,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 350,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/images/vehicles/audi-rs3-1.jpg",
    gallery: [
      "/images/vehicles/audi-rs3-1.jpg",
      "/images/vehicles/audi-rs3-2.jpg",
      "/images/vehicles/audi-rs3-3.jpg",
    ],
    description:
      "Avec son cinq cylindres emblématique et sa transmission quattro, l'Audi RS3 offre un équilibre rare entre polyvalence quotidienne et sensations sportives affirmées.",
    highlights: [
      "Cinq cylindres au son caractéristique",
      "Transmission intégrale quattro",
      "Format compact facile à vivre",
      "Finition intérieure soignée",
    ],
    options: ["Conducteur additionnel", "Kilométrage étendu", "Sièges baquets"],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 3 ans",
      "Âge minimum requis selon le véhicule",
      "Caution demandée avant la remise des clés",
    ],
  },
  {
    slug: "porsche-911-carrera",
    brand: "Porsche",
    model: "911 Carrera",
    category: "Sportive",
    seats: 4,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 690,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/images/vehicles/porsche-911-carrera-1.jpg",
    gallery: [
      "/images/vehicles/porsche-911-carrera-1.jpg",
      "/images/vehicles/porsche-911-carrera-2.jpg",
      "/images/vehicles/porsche-911-carrera-3.jpg",
    ],
    description:
      "Icône intemporelle, la Porsche 911 Carrera réunit héritage sportif et raffinement contemporain. Une référence pour une occasion qui mérite d'être marquée.",
    highlights: [
      "Silhouette iconique reconnaissable entre toutes",
      "Comportement routier de référence",
      "Confort adapté aux longs trajets",
      "Présence incomparable",
    ],
    options: ["Conducteur additionnel", "Kilométrage étendu", "Prise en charge à domicile"],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 5 ans",
      "Âge minimum requis selon le véhicule",
      "Caution demandée avant la remise des clés",
    ],
  },
  {
    slug: "range-rover-sport",
    brand: "Range Rover",
    model: "Sport",
    category: "SUV de luxe",
    seats: 5,
    transmission: "Automatique",
    fuel: "Hybride",
    pricePerDay: 450,
    available: true,
    durations: ["courte", "longue"],
    coverImage: "/images/vehicles/range-rover-sport-1.jpg",
    gallery: [
      "/images/vehicles/range-rover-sport-1.jpg",
      "/images/vehicles/range-rover-sport-2.jpg",
      "/images/vehicles/range-rover-sport-3.jpg",
    ],
    description:
      "Le Range Rover Sport conjugue prestance, confort et polyvalence. Un choix naturel pour les déplacements professionnels comme pour les escapades en famille.",
    highlights: [
      "Habitacle spacieux et raffiné",
      "Position de conduite dominante",
      "Motorisation hybride équilibrée",
      "Comportement routier rassurant",
    ],
    options: ["Conducteur additionnel", "Kilométrage étendu", "Siège bébé sur demande"],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 3 ans",
      "Âge minimum requis selon le véhicule",
      "Caution demandée avant la remise des clés",
    ],
  },
  {
    slug: "mercedes-classe-g",
    brand: "Mercedes-Benz",
    model: "Classe G",
    category: "SUV de luxe",
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    pricePerDay: 790,
    available: false,
    durations: ["longue"],
    coverImage: "/images/vehicles/mercedes-classe-g-1.jpg",
    gallery: [
      "/images/vehicles/mercedes-classe-g-1.jpg",
      "/images/vehicles/mercedes-classe-g-2.jpg",
      "/images/vehicles/mercedes-classe-g-3.jpg",
    ],
    description:
      "Silhouette culte et prestance inégalée, la Mercedes-Benz Classe G reste l'un des SUV les plus désirables du marché, aussi à l'aise en ville que sur les routes de montagne.",
    highlights: [
      "Design iconique et intemporel",
      "Habitacle luxueux et robuste",
      "Position de conduite surélevée",
      "Statut et prestige incomparables",
    ],
    options: ["Conducteur additionnel", "Kilométrage étendu", "Prise en charge à domicile"],
    essentialConditions: [
      "Permis de conduire valide depuis au moins 5 ans",
      "Âge minimum requis selon le véhicule",
      "Caution demandée avant la remise des clés",
    ],
  },
];
