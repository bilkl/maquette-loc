import type { Property } from "@/types/property";

/**
 * Catalogue de démonstration pour B. Mooser Immobilier.
 * Biens, prix et descriptions à valider par l'agence avant publication.
 *
 * Photos génériques libres de droits (Wikimedia Commons — CC BY 2.0), en
 * attendant les vraies photos des biens en portefeuille. Le terrain utilise
 * un schéma de démonstration plutôt qu'une photo, faute de visuel générique
 * pertinent (voir config/brands/bmimmobilier.ts pour le détail des crédits).
 */
export const properties: Property[] = [
  {
    slug: "villa-vue-lac-cologny",
    title: "Villa contemporaine avec vue sur le lac",
    type: "Villa",
    location: "Cologny",
    price: 4850000,
    surface: 320,
    rooms: 7.5,
    bedrooms: 4,
    status: "à vendre",
    coverImage: "/brands/bmimmobilier/properties/villa-cologny-1.jpg",
    gallery: [
      "/brands/bmimmobilier/properties/villa-cologny-1.jpg",
      "/brands/bmimmobilier/properties/villa-cologny-2.jpg",
    ],
    description:
      "Villa contemporaine sur parcelle arborée, avec vue dégagée sur le lac Léman. Grand séjour ouvert sur terrasse, cuisine entièrement équipée et finitions haut de gamme dans l'ensemble des pièces.",
    highlights: [
      "Vue lac depuis le séjour et la terrasse",
      "Cuisine ouverte entièrement équipée",
      "Parcelle arborée avec piscine",
      "Garage double et places de parc visiteurs",
    ],
  },
  {
    slug: "appartement-lumineux-cointrin",
    title: "Appartement lumineux avec balcon",
    type: "Appartement",
    location: "Cointrin",
    price: 1250000,
    surface: 110,
    rooms: 4.5,
    bedrooms: 3,
    status: "à vendre",
    coverImage: "/brands/bmimmobilier/properties/appartement-cointrin-1.jpg",
    gallery: ["/brands/bmimmobilier/properties/appartement-cointrin-1.jpg"],
    description:
      "Appartement traversant au calme, proche de l'aéroport et des axes autoroutiers. Séjour lumineux ouvert sur balcon, trois chambres et cave incluse.",
    highlights: [
      "Séjour traversant, très lumineux",
      "Balcon exposé sud-ouest",
      "Proche transports publics et aéroport",
      "Cave et place de parc incluses",
    ],
  },
  {
    slug: "duplex-terrasse-vernier",
    title: "Duplex avec terrasse plein sud",
    type: "Appartement",
    location: "Vernier",
    price: 1450000,
    surface: 145,
    rooms: 5.5,
    bedrooms: 3,
    status: "réservé",
    coverImage: "/brands/bmimmobilier/properties/duplex-vernier-1.jpg",
    gallery: ["/brands/bmimmobilier/properties/duplex-vernier-1.jpg"],
    description:
      "Duplex sur les deux derniers étages d'une résidence récente, avec grande terrasse plein sud. Cuisine ouverte haut de gamme et suite parentale avec dressing.",
    highlights: [
      "Terrasse de 35 m² plein sud",
      "Cuisine ouverte haut de gamme",
      "Suite parentale avec dressing",
      "Résidence récente, charges maîtrisées",
    ],
  },
  {
    slug: "terrain-a-batir-bellevue",
    title: "Terrain à bâtir, vue dégagée",
    type: "Terrain",
    location: "Bellevue",
    price: 1980000,
    surface: 950,
    status: "à vendre",
    coverImage: "/brands/bmimmobilier/properties/terrain-bellevue.svg",
    gallery: ["/brands/bmimmobilier/properties/terrain-bellevue.svg"],
    description:
      "Parcelle constructible en zone villa, vue dégagée et environnement calme. Idéal pour un projet de villa individuelle ou de petite promotion, sous réserve d'autorisation.",
    highlights: [
      "Zone villa, vue dégagée",
      "Environnement calme, quartier résidentiel",
      "Étude de faisabilité disponible sur demande",
      "Accompagnement possible pour le projet de construction",
    ],
  },
];
