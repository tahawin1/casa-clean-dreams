import { Shirt, Sparkles, BedDouble, Sofa } from "lucide-react";
import type { ReactNode } from "react";
import type { Lang } from "@/i18n/LanguageContext";

export type PriceItem = { name: string; wash: string; iron: string };

export type PriceCategory = {
  title: string;
  description: string;
  icon: ReactNode;
  items: PriceItem[];
};

const PRICE_CATEGORIES_FR: PriceCategory[] = [
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

const PRICE_CATEGORIES_EN: PriceCategory[] = [
  {
    title: "Everyday clothes",
    description:
      "Shirts, trousers, suits, jackets, dresses and more — careful dry cleaning and pressing for your everyday wardrobe.",
    icon: <Shirt className="h-5 w-5" />,
    items: [
      { name: "Trousers", wash: "19 DH", iron: "14 DH" },
      { name: "Suit trousers", wash: "22 DH", iron: "16 DH" },
      { name: "Shirt, on hanger", wash: "18 DH", iron: "12 DH" },
      { name: "Shirt, folded", wash: "22 DH", iron: "14 DH" },
      { name: "Suit vest", wash: "18 DH", iron: "12 DH" },
      { name: "Suit", wash: "49 DH", iron: "31 DH" },
      { name: "Skirt suit", wash: "49 DH", iron: "31 DH" },
      { name: "Trouser suit", wash: "49 DH", iron: "31 DH" },
      { name: "Jacket", wash: "26 DH", iron: "17 DH" },
      { name: "Sweater", wash: "22 DH", iron: "14 DH" },
      { name: "Fancy sweater", wash: "28 DH", iron: "14 DH" },
      { name: "Dress", wash: "38 DH", iron: "20 DH" },
      { name: "Skirt", wash: "22 DH", iron: "14 DH" },
      { name: "Long skirt", wash: "28 DH", iron: "16 DH" },
      { name: "Pleated skirt", wash: "32 DH", iron: "16 DH" },
      { name: "Jumpsuit", wash: "44 DH", iron: "28 DH" },
      { name: "Silk blouse", wash: "28 DH", iron: "16 DH" },
      { name: "Coat", wash: "44 DH", iron: "28 DH" },
      { name: "Raincoat", wash: "64 DH", iron: "20 DH" },
      { name: "Undershirt", wash: "13 DH", iron: "9 DH" },
      { name: "Shorts", wash: "16 DH", iron: "9 DH" },
      { name: "Puffer jacket", wash: "50 DH", iron: "—" },
      { name: "Down jacket", wash: "60 DH", iron: "—" },
      { name: "Jacket (casual)", wash: "40 DH", iron: "18 DH" },
      { name: "Polo shirt", wash: "18 DH", iron: "12 DH" },
      { name: "T-shirt", wash: "18 DH", iron: "12 DH" },
      { name: "Tie", wash: "15 DH", iron: "7 DH" },
    ],
  },
  {
    title: "Traditional wear",
    description:
      "Takchita, caftan, djellaba, gandora and jabador treated with special care to preserve fabrics and embroidery.",
    icon: <Sparkles className="h-5 w-5" />,
    items: [
      { name: "Traditional outfit “Takchita” · from", wash: "150 DH", iron: "60 DH" },
      { name: "Djellaba · from", wash: "39 DH", iron: "20 DH" },
      { name: "Gandora · from", wash: "44 DH", iron: "27 DH" },
      { name: "Jabador", wash: "44 DH", iron: "28 DH" },
      { name: "Jabador, triple", wash: "72 DH", iron: "38 DH" },
      { name: "Caftan, simple", wash: "96 DH", iron: "60 DH" },
      { name: "Caftan, luxury", wash: "120 DH", iron: "60 DH" },
      { name: "Caftan, triple", wash: "160 DH", iron: "80 DH" },
    ],
  },
  {
    title: "Home linen",
    description: "Sheets, duvet covers, bedspreads and blankets, deep washed then pressed.",
    icon: <BedDouble className="h-5 w-5" />,
    items: [
      { name: "Duvet cover · from", wash: "60 DH", iron: "35 DH" },
      { name: "Flat sheet · from", wash: "20 DH", iron: "30 DH" },
      { name: "Fitted sheet · from", wash: "20 DH", iron: "30 DH" },
      { name: "Bedspread · from", wash: "55 DH", iron: "28 DH" },
      { name: "Blanket", wash: "70 DH", iron: "—" },
      { name: "Synthetic duvet · from", wash: "150 DH", iron: "—" },
    ],
  },
  {
    title: "Furnishings",
    description: "Curtains, sheers, tablecloths and rugs cleaned per square meter, at home or in our workshop.",
    icon: <Sofa className="h-5 w-5" />,
    items: [
      { name: "Tablecloth", wash: "30 DH / m²", iron: "15 DH / m²" },
      { name: "Curtain · from", wash: "20 DH / m²", iron: "15 DH / m²" },
      { name: "Sheer curtain · from", wash: "15 DH / m²", iron: "11 DH / m²" },
      { name: "Rug · from", wash: "40 DH / m²", iron: "—" },
      { name: "Sofa cover", wash: "10 DH / ml", iron: "10 DH / ml" },
    ],
  },
];

const PRICE_CATEGORIES_AR: PriceCategory[] = [
  {
    title: "ملابس يومية",
    description: "قمصان، سراويل، بدلات، سترات، فساتين وأكثر — تنظيف جاف وكي دقيق لملابسكم اليومية.",
    icon: <Shirt className="h-5 w-5" />,
    items: [
      { name: "سروال", wash: "19 DH", iron: "14 DH" },
      { name: "سروال بدلة", wash: "22 DH", iron: "16 DH" },
      { name: "قميص على علاقة", wash: "18 DH", iron: "12 DH" },
      { name: "قميص مطوي", wash: "22 DH", iron: "14 DH" },
      { name: "صديري بدلة", wash: "18 DH", iron: "12 DH" },
      { name: "بدلة", wash: "49 DH", iron: "31 DH" },
      { name: "تايور بتنورة", wash: "49 DH", iron: "31 DH" },
      { name: "تايور بسروال", wash: "49 DH", iron: "31 DH" },
      { name: "سترة", wash: "26 DH", iron: "17 DH" },
      { name: "بولوفر", wash: "22 DH", iron: "14 DH" },
      { name: "بولوفر مزخرف", wash: "28 DH", iron: "14 DH" },
      { name: "فستان", wash: "38 DH", iron: "20 DH" },
      { name: "تنورة", wash: "22 DH", iron: "14 DH" },
      { name: "تنورة طويلة", wash: "28 DH", iron: "16 DH" },
      { name: "تنورة مثنية", wash: "32 DH", iron: "16 DH" },
      { name: "جمبسوت", wash: "44 DH", iron: "28 DH" },
      { name: "بلوزة حرير", wash: "28 DH", iron: "16 DH" },
      { name: "معطف", wash: "44 DH", iron: "28 DH" },
      { name: "معطف واق من المطر", wash: "64 DH", iron: "20 DH" },
      { name: "قميص داخلي", wash: "13 DH", iron: "9 DH" },
      { name: "شورت", wash: "16 DH", iron: "9 DH" },
      { name: "سترة منفوخة", wash: "50 DH", iron: "—" },
      { name: "سترة منفوخة بالريش", wash: "60 DH", iron: "—" },
      { name: "جاكيت", wash: "40 DH", iron: "18 DH" },
      { name: "قميص بولو", wash: "18 DH", iron: "12 DH" },
      { name: "تي شيرت", wash: "18 DH", iron: "12 DH" },
      { name: "ربطة عنق", wash: "15 DH", iron: "7 DH" },
    ],
  },
  {
    title: "ملابس تقليدية",
    description: "التقشيطة، القفطان، الجلابة، الڭندورة والجابادور تعالج بعناية خاصة للحفاظ على الأقمشة والتطريز.",
    icon: <Sparkles className="h-5 w-5" />,
    items: [
      { name: "تقشيطة تقليدية · ابتداء من", wash: "150 DH", iron: "60 DH" },
      { name: "جلابة · ابتداء من", wash: "39 DH", iron: "20 DH" },
      { name: "ڭندورة · ابتداء من", wash: "44 DH", iron: "27 DH" },
      { name: "جابادور", wash: "44 DH", iron: "28 DH" },
      { name: "جابادور ثلاثي", wash: "72 DH", iron: "38 DH" },
      { name: "قفطان بسيط", wash: "96 DH", iron: "60 DH" },
      { name: "قفطان فاخر", wash: "120 DH", iron: "60 DH" },
      { name: "قفطان ثلاثي", wash: "160 DH", iron: "80 DH" },
    ],
  },
  {
    title: "بياضات المنزل",
    description: "الشراشف، أغطية اللحف، أغطية السرير والبطانيات تُغسل بعمق ثم تُكوى.",
    icon: <BedDouble className="h-5 w-5" />,
    items: [
      { name: "غطاء لحاف · ابتداء من", wash: "60 DH", iron: "35 DH" },
      { name: "شرشف مسطح · ابتداء من", wash: "20 DH", iron: "30 DH" },
      { name: "شرشف بأطراف مطاطية · ابتداء من", wash: "20 DH", iron: "30 DH" },
      { name: "غطاء سرير · ابتداء من", wash: "55 DH", iron: "28 DH" },
      { name: "بطانية", wash: "70 DH", iron: "—" },
      { name: "لحاف صناعي · ابتداء من", wash: "150 DH", iron: "—" },
    ],
  },
  {
    title: "المفروشات",
    description: "الستائر، الستائر الشفافة، المفارش والسجاد تُنظف بالمتر المربع، في المنزل أو في الورشة.",
    icon: <Sofa className="h-5 w-5" />,
    items: [
      { name: "مفرش طاولة", wash: "30 DH / m²", iron: "15 DH / m²" },
      { name: "ستارة · ابتداء من", wash: "20 DH / m²", iron: "15 DH / m²" },
      { name: "ستارة شفافة · ابتداء من", wash: "15 DH / m²", iron: "11 DH / m²" },
      { name: "سجادة · ابتداء من", wash: "40 DH / m²", iron: "—" },
      { name: "غطاء أريكة", wash: "10 DH / ml", iron: "10 DH / ml" },
    ],
  },
];

export function getPriceCategories(lang: Lang): PriceCategory[] {
  if (lang === "en") return PRICE_CATEGORIES_EN;
  if (lang === "ar") return PRICE_CATEGORIES_AR;
  return PRICE_CATEGORIES_FR;
}
