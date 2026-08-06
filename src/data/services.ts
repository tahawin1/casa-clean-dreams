import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";
import type { Lang } from "@/i18n/LanguageContext";

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

const SERVICES_FR: ServiceContent[] = [
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

const SERVICES_EN: ServiceContent[] = [
  {
    slug: "pressing-vetements",
    path: "/services/pressing-vetements",
    navTitle: "Clothes Dry Cleaning",
    h1: "Clothes Dry Cleaning in Casablanca – Bd Mohamed Zerktouni",
    title: "Clothes Dry Cleaning Casablanca | Cleaning & Pressing 24h",
    description:
      "Pressing Zerktouni in Casablanca: dry cleaning, pressing and stain removal for your everyday clothes. 6h express service, free pickup and delivery. Since 2010.",
    keywords:
      "clothes dry cleaning Casablanca, dry cleaner Casablanca, pressing Casablanca, Zerktouni dry cleaner",
    image: serviceVetements,
    intro:
      "Since 2010, Pressing Zerktouni has taken care of your shirts, trousers, dresses and everyday clothes on Boulevard Mohamed Zerktouni, Casablanca. Cleaning, pressing and careful finishing, with free home pickup and delivery.",
    items: [
      {
        title: "Professional dry cleaning",
        text: "Gentle solvents and modern machines suited to every fabric: cotton, linen, wool, silk or synthetic.",
      },
      {
        title: "Steam pressing",
        text: "Steam press finishing for crisp creases, held collars and a perfect drape.",
      },
      {
        title: "Targeted stain removal",
        text: "Treatment of common stains (coffee, sweat, ink, makeup) before washing.",
      },
      {
        title: "6h express service",
        text: "Urgent need? Drop off in the morning at 237 Bd Mohamed Zerktouni and pick up your clothes in just 6 hours.",
      },
      {
        title: "Free pickup & delivery",
        text: "Enjoy free pickup and drop-off at home in the areas near Boulevard Zerktouni.",
      },
    ],
    faq: [
      {
        question: "How long does it take to clean a shirt?",
        answer:
          "Our shirts are pressed and ready within 24 hours as standard. The 6h express service is available for urgent needs.",
      },
      {
        question: "Do you offer home delivery?",
        answer:
          "Yes, pickup and delivery are free around Boulevard Mohamed Zerktouni and downtown Casablanca.",
      },
    ],
  },
  {
    slug: "costumes-ceremonies",
    path: "/services/costumes-ceremonies",
    navTitle: "Suits & Ceremonies",
    h1: "Suit & Ceremony Outfit Cleaning in Casablanca",
    title: "Suit & Ceremony Cleaning Casablanca | Pressing Zerktouni",
    description:
      "Pressing Zerktouni: cleaning and pressing of suits, tuxedos, evening gowns, caftans and takchitas. Couture-level treatment, 6h express service and free delivery.",
    keywords:
      "suit cleaning Casablanca, tuxedo dry cleaning Casablanca, evening gown cleaning, caftan dry cleaning, takchita Zerktouni",
    image: serviceCostumes,
    intro:
      "Wedding, evening event or business meeting: Pressing Zerktouni brings your suits, tuxedos, evening gowns, caftans and takchitas back to their original shine, with piece-by-piece treatment and hand pressing.",
    items: [
      {
        title: "Jacket + trousers treatment",
        text: "The set is cleaned together to keep a perfectly even shade.",
      },
      {
        title: "Hand pressing on a mannequin",
        text: "Shoulders, lapels and pleats reshaped on a steam mannequin for a tailored drape.",
      },
      {
        title: "Ceremony pieces",
        text: "Embroidered dresses, caftans, takchitas and beaded outfits handled by hand.",
      },
      {
        title: "Minor alterations",
        text: "Buttons resewn and quick hems on request before return.",
      },
      {
        title: "Ceremony packaging",
        text: "Protective garment bag and careful folding to keep your outfit perfect until the big day.",
      },
    ],
    faq: [
      {
        question: "Should the jacket and trousers be cleaned together?",
        answer:
          "Yes, we always recommend it: it avoids any shade difference between the two pieces over repeated cleanings.",
      },
      {
        question: "Do you clean embroidered caftans and takchitas?",
        answer: "Yes, these pieces are hand-treated, protecting embroidery, beads and gold thread.",
      },
    ],
  },
  {
    slug: "linge-de-maison",
    path: "/services/linge-de-maison",
    navTitle: "Home Linen",
    h1: "Home Linen Cleaning in Casablanca – Pressing Zerktouni",
    title: "Home Linen Casablanca | Sheets, Duvets, Curtains, Rugs",
    description:
      "Pressing Zerktouni in Casablanca: cleaning of sheets, duvets, curtains, tablecloths, rugs and bath linen. High capacity, long-lasting freshness, free pickup and delivery.",
    keywords:
      "duvet cleaning Casablanca, laundry Casablanca, curtain cleaning Casablanca, rug cleaning, Zerktouni home linen",
    image: serviceLinge,
    intro:
      "Sheets, duvets, throws, curtains, tablecloths, towels and rugs: our high-capacity machines ensure deep cleanliness and lasting freshness. Pressing Zerktouni also offers free pickup and delivery in Casablanca.",
    items: [
      {
        title: "Duvets and pillows",
        text: "High-capacity washing, controlled drying and refluffing of down or synthetic filling.",
      },
      {
        title: "Curtains and sheers",
        text: "Dusting, fabric-appropriate cleaning and made-to-fit pressing, ready to hang back up.",
      },
      {
        title: "Sheets, tablecloths and towels",
        text: "Hygienic washing, gentle whitening and careful folding for immediate storage.",
      },
      {
        title: "Rugs and prayer rugs",
        text: "Deep cleaning of rugs and small rugs to remove dust, odors and stains.",
      },
      {
        title: "Volume pricing",
        text: "Discounted rates for large volumes, riads, guesthouses and residences.",
      },
    ],
    faq: [
      {
        question: "How often should a duvet be cleaned?",
        answer:
          "Once or twice a year is enough for a duvet used daily, ideally at the start and end of the season.",
      },
      {
        question: "Do you clean rugs too?",
        answer:
          "Yes, we deep clean small rugs and prayer rugs. For large rugs, contact us for a custom quote.",
      },
    ],
  },
  {
    slug: "cuir-chaussures",
    path: "/services/cuir-chaussures",
    navTitle: "Leather & Shoes",
    h1: "Leather, Bag & Shoe Cleaning in Casablanca",
    title: "Leather, Bag & Shoe Cleaning Casablanca | Pressing Zerktouni",
    description:
      "Pressing Zerktouni: cleaning, restoration and waterproofing of leather, bags and shoes in Casablanca. Dyeing, polishing and care by specialists. Since 2010.",
    keywords:
      "leather cleaning Casablanca, leather jacket restoration Casablanca, leather bag cleaning, shoe cleaning Casablanca, Zerktouni dry cleaner",
    image: serviceCuir,
    intro:
      "Leather requires special expertise. Jackets, bags, shoes, belts, suede and nubuck are entrusted to our Pressing Zerktouni specialists for deep cleaning followed by conditioning of the material.",
    items: [
      {
        title: "Deep cleaning",
        text: "Specific products for leather, suede and nubuck, without drying out or dulling the material.",
      },
      {
        title: "Restoration and dyeing",
        text: "Touch-up of faded areas, scuffs and worn edges to revive the original color.",
      },
      {
        title: "Conditioning and polishing",
        text: "Application of nourishing balms to keep leather supple and prevent cracking.",
      },
      {
        title: "Leather bags and accessories",
        text: "Cleaning and re-plating of handbags, wallets, belts and small leather goods.",
      },
      {
        title: "Waterproofing",
        text: "Protection against rain and stains, particularly useful for suede and shoes.",
      },
    ],
    faq: [
      {
        question: "How long does a leather restoration take?",
        answer: "Allow 3 to 5 business days depending on the item's condition and the dyeing work needed.",
      },
      {
        question: "Can you clean leather bags?",
        answer:
          "Yes, we treat handbags, wallets and leather accessories: interior/exterior cleaning, re-plating and conditioning.",
      },
    ],
  },
];

export function getServices(lang: Lang): ServiceContent[] {
  return lang === "en" ? SERVICES_EN : SERVICES_FR;
}

export function getService(slug: string, lang: Lang): ServiceContent {
  return getServices(lang).find((service) => service.slug === slug)!;
}
