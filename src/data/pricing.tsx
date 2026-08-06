import { Shirt, Sparkles, BedDouble, Sofa } from "lucide-react";
import type { ReactNode } from "react";

export type PriceItem = { name: string; wash: string; iron: string };

export type PriceCategory = {
  title: string;
  description: string;
  icon: ReactNode;
  items: PriceItem[];
};

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    title: "Vêtements de ville",
    description:
      "Chemises, pantalons, costumes, vestes, robes et plus — nettoyage à sec et repassage soignés pour votre tenue de tous les jours.",
    icon: <Shirt className="h-5 w-5" />,
    items: [
      { name: "Pantalon", wash: "19 DH", iron: "14 DH" },
      { name: "Pantalon costume", wash: "22 DH", iron: "16 DH" },
      { name: "Chemise sur cintre", wash: "18 DH", iron: "12 DH" },
      { name: "Chemise pliée", wash: "22 DH", iron: "14 DH" },
      { name: "Gilet costume", wash: "18 DH", iron: "12 DH" },
      { name: "Costume", wash: "49 DH", iron: "31 DH" },
      { name: "Tailleur jupe", wash: "49 DH", iron: "31 DH" },
      { name: "Tailleur pantalon", wash: "49 DH", iron: "31 DH" },
      { name: "Veste", wash: "26 DH", iron: "17 DH" },
      { name: "Pull-over", wash: "22 DH", iron: "14 DH" },
      { name: "Pull fantaisie", wash: "28 DH", iron: "14 DH" },
      { name: "Robe", wash: "38 DH", iron: "20 DH" },
      { name: "Jupe", wash: "22 DH", iron: "14 DH" },
      { name: "Jupe longue", wash: "28 DH", iron: "16 DH" },
      { name: "Jupe plissée", wash: "32 DH", iron: "16 DH" },
      { name: "Combinaison", wash: "44 DH", iron: "28 DH" },
      { name: "Chemisier soie", wash: "28 DH", iron: "16 DH" },
      { name: "Manteau", wash: "44 DH", iron: "28 DH" },
      { name: "Imperméable", wash: "64 DH", iron: "20 DH" },
      { name: "Tricot de peau", wash: "13 DH", iron: "9 DH" },
      { name: "Short", wash: "16 DH", iron: "9 DH" },
      { name: "Doudoune", wash: "50 DH", iron: "—" },
      { name: "Doudoune plume", wash: "60 DH", iron: "—" },
      { name: "Blouson", wash: "40 DH", iron: "18 DH" },
      { name: "Polo", wash: "18 DH", iron: "12 DH" },
      { name: "T-shirt", wash: "18 DH", iron: "12 DH" },
      { name: "Cravate", wash: "15 DH", iron: "7 DH" },
    ],
  },
  {
    title: "Vêtements traditionnels",
    description:
      "Takchita, caftan, djellaba, gandora et jabador traités avec un soin particulier pour préserver tissus et broderies.",
    icon: <Sparkles className="h-5 w-5" />,
    items: [
      { name: "Tenue traditionnelle « Takchita » · à partir de", wash: "150 DH", iron: "60 DH" },
      { name: "Djellaba · à partir de", wash: "39 DH", iron: "20 DH" },
      { name: "Gandora · à partir de", wash: "44 DH", iron: "27 DH" },
      { name: "Jabador", wash: "44 DH", iron: "28 DH" },
      { name: "Jabador triple", wash: "72 DH", iron: "38 DH" },
      { name: "Caftan simple", wash: "96 DH", iron: "60 DH" },
      { name: "Caftan luxe", wash: "120 DH", iron: "60 DH" },
      { name: "Caftan triple", wash: "160 DH", iron: "80 DH" },
    ],
  },
  {
    title: "Linge de maison",
    description: "Draps, housses de couette, couvre-lits et couvertures lavés en profondeur puis repassés.",
    icon: <BedDouble className="h-5 w-5" />,
    items: [
      { name: "Housse de couette · à partir de", wash: "60 DH", iron: "35 DH" },
      { name: "Drap plat · à partir de", wash: "20 DH", iron: "30 DH" },
      { name: "Drap housse · à partir de", wash: "20 DH", iron: "30 DH" },
      { name: "Couvre-lit · à partir de", wash: "55 DH", iron: "28 DH" },
      { name: "Couverture", wash: "70 DH", iron: "—" },
      { name: "Couette synthétique · à partir de", wash: "150 DH", iron: "—" },
    ],
  },
  {
    title: "Ameublement",
    description: "Rideaux, voilages, nappes et tapis nettoyés au mètre carré, à domicile ou en atelier.",
    icon: <Sofa className="h-5 w-5" />,
    items: [
      { name: "Nappe de maison", wash: "30 DH / m²", iron: "15 DH / m²" },
      { name: "Rideau · à partir de", wash: "20 DH / m²", iron: "15 DH / m²" },
      { name: "Voilage · à partir de", wash: "15 DH / m²", iron: "11 DH / m²" },
      { name: "Tapis · à partir de", wash: "40 DH / m²", iron: "—" },
      { name: "Housse de salon", wash: "10 DH / ml", iron: "10 DH / ml" },
    ],
  },
];
