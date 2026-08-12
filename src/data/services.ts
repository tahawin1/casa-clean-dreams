import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";
import type { Lang } from "@/i18n/LanguageContext";

export const SITE_URL = "https://www.pressingzerktouni.com";

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
  addon?: { title: string; text: string };
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
    addon: {
      title: "Retouche & couture",
      text: "Pressing Zerktouni est votre pressing et blanchisserie complet à Casablanca depuis 2010 : nettoyage à sec, lavage, repassage, linge de maison, tapis, et bien plus. En plus de ce service complet, nos couturiers expérimentés réalisent aussi vos ourlets, ajustements de taille et petites retouches, pour que chaque pièce retrouve une coupe impeccable. Commandez directement depuis notre site en quelques clics, et profitez du ramassage et de la livraison gratuits à domicile : vous n'avez rien à vous déplacer, on s'occupe de tout, du retrait de vos vêtements jusqu'à leur retour prêts à porter. Un service soigné et fiable, à l'image de la qualité qui fait la réputation de Pressing Zerktouni.",
    },
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
    navTitle: "Sacs & chaussures",
    h1: "Nettoyage sacs et chaussures à Casablanca",
    title: "Nettoyage Sacs & Chaussures Casablanca | Pressing Zerktouni",
    description:
      "Pressing Zerktouni : nettoyage et entretien de vos sacs et chaussures à Casablanca. Détachage, désodorisation et imperméabilisation par des spécialistes. Depuis 2010.",
    keywords:
      "nettoyage sac Casablanca, nettoyage chaussures Casablanca, pressing sac à main, nettoyage baskets Casablanca, pressing Zerktouni",
    image: serviceCuir,
    intro:
      "Sacs à main, sacs à dos, baskets et chaussures de ville : nos spécialistes de Pressing Zerktouni leur redonnent tout leur éclat grâce à un nettoyage en profondeur et un entretien adapté à chaque matière.",
    addon: {
      title: "Cirage & petite réparation",
      text: "Pressing Zerktouni est votre pressing et blanchisserie complet à Casablanca depuis 2010 : nettoyage à sec, lavage, repassage, linge de maison, tapis, sacs et chaussures. Vos chaussures de ville et vos baskets méritent le même soin que vos vêtements : nos spécialistes assurent le cirage professionnel, le changement de talons et les petites réparations pour prolonger leur durée de vie et leur redonner tout leur éclat. Comme pour tous nos services, la commande se fait simplement en ligne sur notre site, avec ramassage et livraison gratuits à domicile — un gain de temps précieux pour un résultat impeccable.",
    },
    items: [
      {
        title: "Nettoyage en profondeur",
        text: "Produits doux adaptés à chaque matière (toile, synthétique, daim) pour un nettoyage sans dommage.",
      },
      {
        title: "Détachage ciblé",
        text: "Traitement des taches tenaces sur vos sacs et chaussures avant un nettoyage complet.",
      },
      {
        title: "Désodorisation",
        text: "Élimination des mauvaises odeurs pour des sacs et chaussures comme neufs.",
      },
      {
        title: "Sacs et accessoires",
        text: "Nettoyage et remise en état des sacs à main, sacs à dos, ceintures et petite maroquinerie.",
      },
      {
        title: "Imperméabilisation",
        text: "Protection contre la pluie et les taches, particulièrement utile pour les baskets et chaussures de ville.",
      },
    ],
    faq: [
      {
        question: "Combien de temps dure le nettoyage d'un sac ou d'une paire de chaussures ?",
        answer: "Comptez 2 à 4 jours ouvrés selon l'état de la pièce et le traitement nécessaire.",
      },
      {
        question: "Pouvez-vous nettoyer les baskets et sacs à main ?",
        answer:
          "Oui, nous traitons les sacs à main, sacs à dos, baskets et chaussures de ville : nettoyage intérieur/extérieur et désodorisation.",
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
    addon: {
      title: "Alterations & Tailoring",
      text: "Pressing Zerktouni is your complete dry cleaning and laundry business in Casablanca since 2010: dry cleaning, washing, ironing, home linen, rugs, and more. In addition to this full range of services, our experienced tailors also handle hemming, resizing and small alterations, so every piece fits perfectly. Order directly from our website in a few clicks, and enjoy free home pickup and delivery: you don't have to move a thing, we take care of everything, from picking up your clothes to bringing them back ready to wear. A careful, reliable service that reflects the quality behind Pressing Zerktouni's reputation.",
    },
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
    navTitle: "Bags & Shoes",
    h1: "Bag & Shoe Cleaning in Casablanca",
    title: "Bag & Shoe Cleaning Casablanca | Pressing Zerktouni",
    description:
      "Pressing Zerktouni: cleaning and care for your bags and shoes in Casablanca. Stain removal, deodorizing and waterproofing by specialists. Since 2010.",
    keywords:
      "bag cleaning Casablanca, shoe cleaning Casablanca, handbag dry cleaning, sneaker cleaning Casablanca, Zerktouni dry cleaner",
    image: serviceCuir,
    intro:
      "Handbags, backpacks, sneakers and dress shoes: our Pressing Zerktouni specialists restore their shine with deep cleaning and care suited to every material.",
    addon: {
      title: "Polishing & Minor Repairs",
      text: "Pressing Zerktouni is your complete dry cleaning and laundry business in Casablanca since 2010: dry cleaning, washing, ironing, home linen, rugs, bags and shoes. Your dress shoes and sneakers deserve the same care as your clothes: our specialists handle professional polishing, heel replacement and minor repairs to extend their life and restore their shine. As with all our services, ordering is simple through our website, with free home pickup and delivery — a real time-saver for a flawless result.",
    },
    items: [
      {
        title: "Deep cleaning",
        text: "Gentle products suited to every material (canvas, synthetic, suede) for damage-free cleaning.",
      },
      {
        title: "Targeted stain removal",
        text: "Treatment of stubborn stains on bags and shoes before a full clean.",
      },
      {
        title: "Deodorizing",
        text: "Removal of unpleasant odors, leaving bags and shoes like new.",
      },
      {
        title: "Bags and accessories",
        text: "Cleaning and restoration of handbags, backpacks, belts and small accessories.",
      },
      {
        title: "Waterproofing",
        text: "Protection against rain and stains, especially useful for sneakers and dress shoes.",
      },
    ],
    faq: [
      {
        question: "How long does cleaning a bag or pair of shoes take?",
        answer: "Allow 2 to 4 business days depending on the item's condition and the treatment needed.",
      },
      {
        question: "Can you clean sneakers and handbags?",
        answer:
          "Yes, we treat handbags, backpacks, sneakers and dress shoes: interior/exterior cleaning and deodorizing.",
      },
    ],
  },
];

const SERVICES_AR: ServiceContent[] = [
  {
    slug: "pressing-vetements",
    path: "/services/pressing-vetements",
    navTitle: "كي وتنظيف الملابس",
    h1: "كي وتنظيف الملابس في الدار البيضاء – شارع محمد الزرقطوني",
    title: "تنظيف الملابس بالدار البيضاء | تنظيف وكي خلال 24 ساعة",
    description:
      "برسينغ الزرقطوني بالدار البيضاء: تنظيف جاف وكي وإزالة البقع لملابسكم اليومية. خدمة سريعة خلال 6 ساعات، واستلام وتوصيل مجاني. منذ 2010.",
    keywords: "تنظيف ملابس الدار البيضاء, تنظيف جاف الدار البيضاء, كي الملابس الدار البيضاء, برسينغ الزرقطوني",
    image: serviceVetements,
    intro:
      "منذ سنة 2010، يعتني برسينغ الزرقطوني بقمصانكم وسراويلكم وفساتينكم وملابسكم اليومية في شارع محمد الزرقطوني بالدار البيضاء. تنظيف وكي وتشطيب دقيق، مع استلام وتوصيل مجاني إلى المنزل.",
    addon: {
      title: "التصليح والخياطة",
      text: "برسينغ الزرقطوني هو مقصدكم الكامل للتنظيف والغسيل بالدار البيضاء منذ 2010: تنظيف جاف، غسيل، كي، بياضات المنزل، سجاد، وأكثر. بالإضافة إلى هذه الخدمة الشاملة، يقوم خياطونا ذوو الخبرة أيضًا بتقصير وتعديل المقاسات والتصليحات الصغيرة، ليستعيد كل قطعة قصتها المثالية. اطلبوا مباشرة من موقعنا الإلكتروني ببضع نقرات، واستفيدوا من الاستلام والتوصيل المجانيين إلى المنزل: لا داعي للتنقل، نتكفل بكل شيء من استلام ملابسكم إلى إعادتها جاهزة للارتداء. خدمة عناية وموثوقية تعكس الجودة التي يشتهر بها برسينغ الزرقطوني.",
    },
    items: [
      {
        title: "تنظيف جاف احترافي",
        text: "مذيبات لطيفة وآلات حديثة تناسب كل نوع قماش: قطن، كتان، صوف، حرير أو أقمشة صناعية.",
      },
      {
        title: "كي بالبخار",
        text: "تشطيب بمكواة البخار للحصول على كي متقن وياقات ثابتة وسقوط مثالي للقماش.",
      },
      {
        title: "إزالة بقع مستهدفة",
        text: "معالجة البقع الشائعة (القهوة، العرق، الحبر، المكياج) قبل الغسيل.",
      },
      {
        title: "خدمة سريعة 6 ساعات",
        text: "هل لديكم حاجة مستعجلة؟ أحضروا ملابسكم صباحا إلى شارع محمد الزرقطوني رقم 237 واستلموها خلال 6 ساعات فقط.",
      },
      {
        title: "استلام وتوصيل مجاني",
        text: "استفيدوا من خدمة الاستلام والتوصيل المجانية إلى المنزل في المناطق القريبة من شارع الزرقطوني.",
      },
    ],
    faq: [
      {
        question: "ما هي مدة تنظيف قميص؟",
        answer: "قمصاننا يتم كيها وتكون جاهزة خلال 24 ساعة كخدمة عادية. الخدمة السريعة خلال 6 ساعات متوفرة للحالات المستعجلة.",
      },
      {
        question: "هل تقدمون خدمة التوصيل إلى المنزل؟",
        answer: "نعم، الاستلام والتوصيل مجانيان في محيط شارع محمد الزرقطوني ووسط مدينة الدار البيضاء.",
      },
    ],
  },
  {
    slug: "costumes-ceremonies",
    path: "/services/costumes-ceremonies",
    navTitle: "البدلات والمناسبات",
    h1: "تنظيف البدلات وأزياء المناسبات في الدار البيضاء",
    title: "تنظيف البدلات والمناسبات بالدار البيضاء | برسينغ الزرقطوني",
    description:
      "برسينغ الزرقطوني: تنظيف وكي البدلات، السموكينغ، فساتين السهرة، القفاطين والتقاشيط. معالجة راقية، خدمة سريعة 6 ساعات وتوصيل مجاني.",
    keywords: "تنظيف بدلة الدار البيضاء, تنظيف سموكينغ الدار البيضاء, تنظيف فستان سهرة, تنظيف قفطان, تقشيطة الزرقطوني",
    image: serviceCostumes,
    intro:
      "زفاف، سهرة أو موعد عمل: برسينغ الزرقطوني يعيد لبدلاتكم وسموكينغاتكم وفساتين السهرة والقفاطين والتقاشيط بريقها الأصلي، بمعالجة دقيقة لكل قطعة وكي يدوي.",
    items: [
      {
        title: "معالجة السترة والسروال معا",
        text: "تنظف المجموعة في نفس الوقت للحفاظ على تناسق تام في اللون.",
      },
      {
        title: "كي يدوي على المانيكان",
        text: "إعادة تشكيل الأكتاف والياقات والطيات على مانيكان بخاري للحصول على سقوط أنيق.",
      },
      {
        title: "قطع المناسبات",
        text: "الفساتين المطرزة والقفاطين والتقاشيط والأزياء المرصعة باللؤلؤ تعالج يدويا.",
      },
      {
        title: "إصلاحات بسيطة",
        text: "إعادة خياطة الأزرار وتقصير سريع عند الطلب قبل التسليم.",
      },
      {
        title: "تغليف خاص بالمناسبات",
        text: "غلاف واقٍ وطي دقيق للحفاظ على أناقة إطلالتكم حتى يوم المناسبة.",
      },
    ],
    faq: [
      {
        question: "هل يجب تنظيف السترة والسروال معا؟",
        answer: "نعم، ننصح بذلك دائما: فهذا يمنع أي اختلاف في درجة اللون بين القطعتين مع تكرار التنظيف.",
      },
      {
        question: "هل تنظفون القفاطين والتقاشيط المطرزة؟",
        answer: "نعم، تعالج هذه القطع يدويا مع حماية التطريز واللؤلؤ والخيوط الذهبية.",
      },
    ],
  },
  {
    slug: "linge-de-maison",
    path: "/services/linge-de-maison",
    navTitle: "بياضات المنزل",
    h1: "تنظيف بياضات المنزل في الدار البيضاء – برسينغ الزرقطوني",
    title: "بياضات المنزل بالدار البيضاء | أغطية، لحف، ستائر، سجاد",
    description:
      "برسينغ الزرقطوني بالدار البيضاء: تنظيف الشراشف واللحف والستائر ومفارش الطاولة والسجاد ومناشف الحمام. سعة كبيرة، نضارة تدوم طويلا، استلام وتوصيل مجاني.",
    keywords: "تنظيف لحاف الدار البيضاء, مصبغة الدار البيضاء, تنظيف ستائر الدار البيضاء, تنظيف سجاد, بياضات الزرقطوني",
    image: serviceLinge,
    intro:
      "شراشف، لحف، أغطية، ستائر، مفارش، مناشف وسجاد: آلاتنا ذات السعة الكبيرة تضمن نظافة عميقة ونضارة تدوم طويلا. يقدم برسينغ الزرقطوني أيضا خدمة استلام وتوصيل مجانية في الدار البيضاء.",
    items: [
      {
        title: "اللحف والوسائد",
        text: "غسيل بسعة كبيرة، تجفيف مراقب وإعادة انتفاخ الحشو من الريش أو الألياف الصناعية.",
      },
      {
        title: "الستائر والستائر الشفافة",
        text: "إزالة الغبار وتنظيف يناسب القماش وكي مخصص، جاهزة لإعادة تعليقها.",
      },
      {
        title: "الشراشف والمفارش والمناشف",
        text: "غسيل صحي، تبييض لطيف وطي دقيق لترتيب فوري.",
      },
      {
        title: "السجاد وسجاد الصلاة",
        text: "تنظيف عميق للسجاد الصغير وسجاد الصلاة لإزالة الغبار والروائح والبقع.",
      },
      {
        title: "أسعار حسب الكمية",
        text: "أسعار تنازلية للكميات الكبيرة، الرياضات، دور الضيافة والإقامات.",
      },
    ],
    faq: [
      {
        question: "كم مرة يجب تنظيف اللحاف؟",
        answer: "مرة أو مرتين في السنة تكفي للحاف المستعمل يوميا، ويفضل في بداية ونهاية كل فصل.",
      },
      {
        question: "هل تنظفون السجاد أيضا؟",
        answer: "نعم، ننظف السجاد الصغير وسجاد الصلاة تنظيفا عميقا. بالنسبة للسجاد الكبير، تواصلوا معنا للحصول على عرض سعر مخصص.",
      },
    ],
  },
  {
    slug: "cuir-chaussures",
    path: "/services/cuir-chaussures",
    navTitle: "الحقائب والأحذية",
    h1: "تنظيف الحقائب والأحذية في الدار البيضاء",
    title: "تنظيف الحقائب والأحذية بالدار البيضاء | برسينغ الزرقطوني",
    description:
      "برسينغ الزرقطوني: تنظيف والعناية بحقائبكم وأحذيتكم بالدار البيضاء. إزالة البقع، إزالة الروائح والحماية من الماء من طرف متخصصين. منذ 2010.",
    keywords: "تنظيف حقائب الدار البيضاء, تنظيف أحذية الدار البيضاء, تنظيف حقيبة يد, تنظيف سنيكرز الدار البيضاء, برسينغ الزرقطوني",
    image: serviceCuir,
    intro:
      "حقائب اليد، حقائب الظهر، السنيكرز والأحذية الرسمية: يعيد متخصصو برسينغ الزرقطوني لها بريقها من خلال تنظيف عميق وعناية تناسب كل مادة.",
    addon: {
      title: "التلميع والتصليحات الصغيرة",
      text: "برسينغ الزرقطوني هو مقصدكم الكامل للتنظيف والغسيل بالدار البيضاء منذ 2010: تنظيف جاف، غسيل، كي، بياضات المنزل، سجاد، حقائب وأحذية. أحذيتكم الكلاسيكية والرياضية تستحق نفس العناية التي توليها لملابسكم: يقوم متخصصونا بالتلميع الاحترافي، تغيير الكعوب والتصليحات الصغيرة لإطالة عمرها واستعادة بريقها. كما هو الحال مع جميع خدماتنا، الطلب يتم ببساطة عبر موقعنا الإلكتروني، مع استلام وتوصيل مجانيين إلى المنزل — كسب حقيقي للوقت مقابل نتيجة لا تشوبها شائبة.",
    },
    items: [
      {
        title: "تنظيف عميق",
        text: "منتجات لطيفة تناسب كل مادة (قماش، صناعي، سويدي) لتنظيف دون أي ضرر.",
      },
      {
        title: "إزالة بقع مستهدفة",
        text: "معالجة البقع الصعبة على الحقائب والأحذية قبل التنظيف الكامل.",
      },
      {
        title: "إزالة الروائح",
        text: "التخلص من الروائح الكريهة لحقائب وأحذية تبدو كالجديدة.",
      },
      {
        title: "الحقائب والإكسسوارات",
        text: "تنظيف وإعادة تأهيل حقائب اليد وحقائب الظهر والأحزمة والإكسسوارات الصغيرة.",
      },
      {
        title: "الحماية من الماء",
        text: "حماية من المطر والبقع، مفيدة بشكل خاص للسنيكرز والأحذية الرسمية.",
      },
    ],
    faq: [
      {
        question: "كم يستغرق تنظيف حقيبة أو زوج أحذية؟",
        answer: "احسبوا من 2 إلى 4 أيام عمل حسب حالة القطعة والمعالجة اللازمة.",
      },
      {
        question: "هل يمكنكم تنظيف السنيكرز وحقائب اليد؟",
        answer: "نعم، نعالج حقائب اليد وحقائب الظهر والسنيكرز والأحذية الرسمية: تنظيف داخلي وخارجي وإزالة الروائح.",
      },
    ],
  },
];

export function getServices(lang: Lang): ServiceContent[] {
  if (lang === "en") return SERVICES_EN;
  if (lang === "ar") return SERVICES_AR;
  return SERVICES_FR;
}

export function getService(slug: string, lang: Lang): ServiceContent {
  return getServices(lang).find((service) => service.slug === slug)!;
}
