import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";

export const SITE_URL = "https://casa-clean-dreams.lovable.app";

export type ServicePath =
  | "/services/pressing-vetements"
  | "/services/costumes-ceremonies"
  | "/services/linge-de-maison"
  | "/services/cuir-chaussures";

export type ServiceContent = {
  slug: string;
  path: ServicePath;
  navTitle: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  image: string;
  intro: string;
  items: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
};

export const services: ServiceContent[] = [
  {
    slug: "pressing-vetements",
    path: "/services/pressing-vetements",
    navTitle: "Pressing vêtements",
    h1: "Pressing vêtements à Casablanca – Bd Mohamed Zerktouni",
    title: "Pressing Vêtements Casablanca | Nettoyage & Repassage 24h",
    description:
      "Pressing Zerktouni à Casablanca : nettoyage à sec, repassage et détachage de vos vêtements du quotidien. Service express 6h, ramassage et livraison gratuite. Depuis 2010.",
    keywords:
      "pressing vêtements Casablanca, nettoyage à sec Casablanca, repassage Casablanca, pressing Zerktouni",
    image: serviceVetements,
    intro:
      "Depuis 2010, Pressing Zerktouni prend soin de vos chemises, pantalons, robes et vêtements du quotidien sur le Boulevard Mohamed Zerktouni, à Casablanca. Nettoyage, repassage et finition soignée, avec ramassage et livraison gratuits à domicile.",
    items: [
      {
        title: "Nettoyage à sec professionnel",
        text: "Solvants doux et machines modernes adaptés à chaque matière : coton, lin, laine, soie ou synthétique.",
      },
      {
        title: "Repassage à la vapeur",
        text: "Finition à la presse vapeur pour des plis nets, des cols tenus et un tombé parfait.",
      },
      {
        title: "Détachage ciblé",
        text: "Traitement des taches courantes (café, transpiration, encre, maquillage) avant lavage.",
      },
      {
        title: "Service express 6h",
        text: "Besoin urgent ? Déposez le matin au 237 Bd Mohamed Zerktouni et récupérez vos vêtements en seulement 6 heures.",
      },
      {
        title: "Ramassage & livraison gratuite",
        text: "Profitez de notre enlèvement et retour à domicile sans frais dans les secteurs voisins du Boulevard Zerktouni.",
      },
    ],
    faq: [
      {
        question: "Quel est le délai pour le nettoyage d'une chemise ?",
        answer:
          "Nos chemises sont repassées et prêtes en 24 heures en standard. Le service express 6h est disponible pour les urgences.",
      },
      {
        question: "Proposez-vous la livraison à domicile ?",
        answer:
          "Oui, le ramassage et la livraison sont gratuits dans les environs du Boulevard Mohamed Zerktouni et du centre-ville de Casablanca.",
      },
    ],
  },
  {
    slug: "costumes-ceremonies",
    path: "/services/costumes-ceremonies",
    navTitle: "Costumes & cérémonies",
    h1: "Nettoyage costumes et tenues de cérémonie à Casablanca",
    title: "Nettoyage Costumes & Cérémonies Casablanca | Pressing Zerktouni",
    description:
      "Pressing Zerktouni : nettoyage et repassage de costumes, smokings, robes de soirée, caftans et takchitas. Traitement haute couture, service express 6h et livraison gratuite.",
    keywords:
      "nettoyage costume Casablanca, pressing smoking Casablanca, nettoyage robe de soirée, pressing caftan, takchita Zerktouni",
    image: serviceCostumes,
    intro:
      "Mariage, soirée ou rendez-vous professionnel : Pressing Zerktouni redonne à vos costumes, smokings, robes de soirée, caftans et takchitas leur éclat d'origine, avec un traitement pièce par pièce et un repassage main.",
    items: [
      {
        title: "Traitement veste + pantalon",
        text: "L'ensemble est nettoyé en même temps pour conserver une teinte parfaitement homogène.",
      },
      {
        title: "Repassage main sur mannequin",
        text: "Épaules, revers et plis remis en forme sur mannequin vapeur pour un tombé de tailleur.",
      },
      {
        title: "Pièces de cérémonie",
        text: "Robes brodées, caftans, takchitas et tenues perlées manipulés à la main.",
      },
      {
        title: "Petites retouches",
        text: "Boutons recousus et ourlets rapides sur demande avant restitution.",
      },
      {
        title: "Emballage cérémonie",
        text: "Housse protectrice et pliage soigné pour conserver la perfection de votre tenue jusqu'au jour J.",
      },
    ],
    faq: [
      {
        question: "Faut-il nettoyer la veste et le pantalon ensemble ?",
        answer:
          "Oui, nous le recommandons systématiquement : cela évite toute différence de nuance entre les deux pièces au fil des nettoyages.",
      },
      {
        question: "Nettoyez-vous les caftans et takchitas brodés ?",
        answer:
          "Oui, ces pièces sont traitées à la main, avec protection des broderies, perles et fils dorés.",
      },
    ],
  },
  {
    slug: "linge-de-maison",
    path: "/services/linge-de-maison",
    navTitle: "Linge de maison",
    h1: "Nettoyage de linge de maison à Casablanca – Pressing Zerktouni",
    title: "Linge de Maison Casablanca | Draps, Couettes, Rideaux, Tapis",
    description:
      "Pressing Zerktouni à Casablanca : nettoyage de draps, couettes, rideaux, nappes, tapis et linge de bain. Grande capacité, fraîcheur durable, ramassage et livraison gratuits.",
    keywords:
      "nettoyage couette Casablanca, blanchisserie Casablanca, nettoyage rideaux Casablanca, pressing tapis, linge de maison Zerktouni",
    image: serviceLinge,
    intro:
      "Draps, couettes, plaids, rideaux, nappes, serviettes et tapis : nos machines grande capacité assurent une propreté profonde et une fraîcheur durable. Pressing Zerktouni vous propose aussi l'enlèvement et la livraison gratuits à Casablanca.",
    items: [
      {
        title: "Couettes et oreillers",
        text: "Lavage grande capacité, séchage contrôlé et regonflage du garnissage en duvet ou synthétique.",
      },
      {
        title: "Rideaux et voilages",
        text: "Dépoussiérage, nettoyage adapté au tissu et repassage sur mesure, prêts à être rependus.",
      },
      {
        title: "Draps, nappes et serviettes",
        text: "Lavage hygiénique, blanchiment doux et pliage soigné pour un rangement immédiat.",
      },
      {
        title: "Tapis et tapis de prière",
        text: "Nettoyage en profondeur des tapis et petits tapis pour enlever poussière, odeurs et taches.",
      },
      {
        title: "Tarifs au volume",
        text: "Prix dégressifs pour les gros volumes, riads, maisons d'hôtes et résidences.",
      },
    ],
    faq: [
      {
        question: "À quelle fréquence nettoyer une couette ?",
        answer:
          "Une à deux fois par an suffit pour une couette utilisée quotidiennement, idéalement en début et en fin de saison.",
      },
      {
        question: "Nettoyez-vous aussi les tapis ?",
        answer:
          "Oui, nous nettoyons les petits tapis et tapis de prière en profondeur. Pour les grands tapis, contactez-nous pour un devis personnalisé.",
      },
    ],
  },
  {
    slug: "cuir-chaussures",
    path: "/services/cuir-chaussures",
    navTitle: "Cuir & chaussures",
    h1: "Nettoyage cuir, sacs et chaussures à Casablanca",
    title: "Nettoyage Cuir, Sacs & Chaussures Casablanca | Pressing Zerktouni",
    description:
      "Pressing Zerktouni : nettoyage, rénovation et imperméabilisation du cuir, des sacs et des chaussures à Casablanca. Teinture, cirage et soin par des spécialistes. Depuis 2010.",
    keywords:
      "nettoyage cuir Casablanca, rénovation veste cuir Casablanca, nettoyage sac cuir, nettoyage chaussures Casablanca, pressing Zerktouni",
    image: serviceCuir,
    intro:
      "Le cuir demande un savoir-faire particulier. Vestes, sacs, chaussures, ceintures, daim et nubuck sont confiés à nos spécialistes de Pressing Zerktouni pour un nettoyage en profondeur suivi d'un nourrissage de la matière.",
    items: [
      {
        title: "Nettoyage en profondeur",
        text: "Produits spécifiques cuir, daim et nubuck, sans dessécher ni ternir la matière.",
      },
      {
        title: "Rénovation et teinture",
        text: "Reprise des zones décolorées, éraflures et angles usés pour raviver la couleur d'origine.",
      },
      {
        title: "Nourrissage et cirage",
        text: "Application de baumes nourrissants pour garder un cuir souple et éviter les craquelures.",
      },
      {
        title: "Sacs et accessoires en cuir",
        text: "Nettoyage et redorure des sacs à main, portefeuilles, ceintures et petits maroquineries.",
      },
      {
        title: "Imperméabilisation",
        text: "Protection contre la pluie et les taches, particulièrement utile pour le daim et les chaussures.",
      },
    ],
    faq: [
      {
        question: "Combien de temps dure une rénovation de cuir ?",
        answer:
          "Comptez 3 à 5 jours ouvrés selon l'état de la pièce et le travail de teinture nécessaire.",
      },
      {
        question: "Pouvez-vous nettoyer des sacs en cuir ?",
        answer:
          "Oui, nous traitons les sacs à main, portefeuilles et accessoires en cuir : nettoyage intérieur/extérieur, redorure et nourrissage.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug)!;
