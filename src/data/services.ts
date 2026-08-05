import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";

export const SITE_URL = "https://casa-clean-dreams.lovable.app";

export type ServiceContent = {
  slug: string;
  path: string;
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
    h1: "Pressing vêtements à Casablanca centre-ville",
    title: "Pressing Vêtements Casablanca Centre-Ville | Nettoyage 24h",
    description:
      "Pressing vêtements au centre-ville de Casablanca : nettoyage à sec chemises, pantalons et robes, repassage soigné et service express 24h. Devis gratuit.",
    keywords:
      "pressing vêtements Casablanca, nettoyage à sec Casablanca centre-ville, repassage chemises Casablanca",
    image: serviceVetements,
    intro:
      "Chemises, pantalons, robes, vestes : notre pressing du centre-ville de Casablanca nettoie et repasse vos vêtements du quotidien avec un rendu impeccable, prêt à porter en 24 heures.",
    items: [
      {
        title: "Nettoyage à sec professionnel",
        text: "Machines modernes et solvants doux adaptés à chaque matière : coton, lin, laine, soie ou synthétique.",
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
        title: "Service express 24h",
        text: "Déposez le matin au 123 Bd Mohammed V, récupérez vos vêtements le lendemain.",
      },
    ],
    faq: [
      {
        question: "Combien de temps prend le nettoyage d'une chemise ?",
        answer:
          "Nos chemises sont lavées, repassées et prêtes en 24 heures avec le service express, ou en 48 heures en délai standard.",
      },
      {
        question: "Traitez-vous les vêtements délicats ?",
        answer:
          "Oui, la soie, la laine et le cachemire sont traités séparément avec des programmes doux et un repassage manuel.",
      },
    ],
  },
  {
    slug: "costumes-ceremonies",
    path: "/services/costumes-ceremonies",
    navTitle: "Costumes & cérémonies",
    h1: "Nettoyage de costumes et tenues de cérémonie à Casablanca",
    title: "Nettoyage Costumes Casablanca Centre-Ville | Pressing Cérémonie",
    description:
      "Nettoyage de costumes, smokings, robes de soirée et caftans au centre-ville de Casablanca. Traitement haute couture, repassage main, service express 24h.",
    keywords:
      "nettoyage costume Casablanca, pressing smoking Casablanca, nettoyage robe de soirée Casablanca, pressing caftan",
    image: serviceCostumes,
    intro:
      "Mariage, entretien professionnel ou soirée : nous redonnons à vos costumes, smokings, robes de soirée et caftans leur éclat d'origine, avec un traitement pièce par pièce.",
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
    h1: "Nettoyage de linge de maison à Casablanca centre-ville",
    title: "Linge de Maison Casablanca | Draps, Couettes, Rideaux",
    description:
      "Nettoyage de draps, couettes, rideaux, nappes et linge de bain au centre-ville de Casablanca. Grande capacité, fraîcheur durable et enlèvement possible.",
    keywords:
      "nettoyage couette Casablanca, blanchisserie Casablanca centre-ville, nettoyage rideaux Casablanca, pressing draps",
    image: serviceLinge,
    intro:
      "Draps, couettes, plaids, rideaux, nappes et linge de bain : nos machines grande capacité assurent une propreté profonde et une fraîcheur qui dure, sans abîmer les fibres.",
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
        question: "Proposez-vous des tarifs pour les professionnels ?",
        answer:
          "Oui, nous travaillons avec des riads, maisons d'hôtes et restaurants du centre-ville avec des tarifs au volume.",
      },
    ],
  },
  {
    slug: "cuir-chaussures",
    path: "/services/cuir-chaussures",
    navTitle: "Cuir & chaussures",
    h1: "Nettoyage cuir et chaussures à Casablanca centre-ville",
    title: "Nettoyage Cuir & Chaussures Casablanca Centre-Ville",
    description:
      "Nettoyage, rénovation et imperméabilisation du cuir à Casablanca centre-ville : vestes, sacs, chaussures et daim. Teinture et soin par des spécialistes.",
    keywords:
      "nettoyage cuir Casablanca, rénovation veste cuir Casablanca, nettoyage sac cuir, nettoyage chaussures Casablanca",
    image: serviceCuir,
    intro:
      "Le cuir demande un savoir-faire particulier. Vestes, sacs, chaussures, daim et nubuck sont confiés à nos spécialistes pour un nettoyage en profondeur suivi d'un nourrissage de la matière.",
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
        title: "Imperméabilisation",
        text: "Protection contre la pluie et les taches, particulièrement utile pour le daim.",
      },
    ],
    faq: [
      {
        question: "Combien de temps dure une rénovation de cuir ?",
        answer:
          "Comptez 3 à 5 jours ouvrés selon l'état de la pièce et le travail de teinture nécessaire.",
      },
      {
        question: "Pouvez-vous traiter le daim et le nubuck ?",
        answer:
          "Oui, ces matières sont nettoyées à sec avec des produits dédiés puis rebrossées et imperméabilisées.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug)!;
