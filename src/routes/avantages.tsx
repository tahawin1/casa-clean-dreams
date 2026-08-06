import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Truck, Award, Shirt, Sparkles, BedDouble, Footprints, ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const PAGE_TITLE = "Nos avantages | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Pourquoi choisir Pressing Zerktouni à Casablanca : service express 6h, ramassage et livraison gratuite, expertise depuis 2010.";
const PAGE_KEYWORDS =
  "avantages pressing Casablanca, pressing express 6h Casablanca, ramassage livraison pressing gratuit, pressing Zerktouni depuis 2010";

export const Route = createFileRoute("/avantages")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/avantages",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Avantages", path: "/avantages" },
      ],
    }),
  component: Avantages,
});

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
    categories: { title: string; description: string }[];
    ctaTitle: string;
    ctaButton: string;
  }
> = {
  fr: {
    eyebrow: "Pourquoi nous choisir",
    title: "La propreté, sans compromis",
    subtitle:
      "Nous combinons savoir-faire traditionnel et technologies modernes pour offrir un résultat parfait à chaque passage.",
    items: [
      {
        title: "Service express 6h",
        description: "Besoin urgent ? Profitez de notre service express pour récupérer vos vêtements en 6 heures chrono.",
      },
      {
        title: "Ramassage & livraison gratuite",
        description: "Nous venons chercher vos articles et vous les ramenons propres et repassés, sans frais de livraison.",
      },
      {
        title: "Expertise depuis 2010",
        description: "Depuis 2010, notre équipe qualifiée maîtrise les techniques de nettoyage adaptées à chaque matière.",
      },
    ],
    categories: [
      { title: "Linge quotidien", description: "Chemises, pantalons, robes, jupes" },
      { title: "Articles délicats", description: "Soie, laine, cachemire, dentelle" },
      { title: "Gros volumes", description: "Draps, couettes, rideaux, nappes" },
      { title: "Cuirs & peaux", description: "Vestes, sacs, chaussures, ceintures" },
    ],
    ctaTitle: "Découvrez notre processus en 3 étapes",
    ctaButton: "Notre processus",
  },
  en: {
    eyebrow: "Why choose us",
    title: "Cleanliness, without compromise",
    subtitle: "We combine traditional know-how with modern technology to deliver a perfect result every time.",
    items: [
      {
        title: "6h express service",
        description: "Urgent need? Enjoy our express service to get your clothes back in 6 hours flat.",
      },
      {
        title: "Free pickup & delivery",
        description: "We come pick up your items and bring them back clean and pressed, at no extra cost.",
      },
      {
        title: "Expertise since 2010",
        description: "Since 2010, our skilled team has mastered cleaning techniques suited to every fabric.",
      },
    ],
    categories: [
      { title: "Everyday laundry", description: "Shirts, trousers, dresses, skirts" },
      { title: "Delicate items", description: "Silk, wool, cashmere, lace" },
      { title: "Large volumes", description: "Sheets, duvets, curtains, tablecloths" },
      { title: "Leather & hides", description: "Jackets, bags, shoes, belts" },
    ],
    ctaTitle: "Discover our 3-step process",
    ctaButton: "Our process",
  },
  ar: {
    eyebrow: "لماذا تختاروننا",
    title: "نظافة بلا تنازلات",
    subtitle: "نجمع بين الخبرة التقليدية والتقنيات الحديثة لنقدم نتيجة مثالية في كل مرة.",
    items: [
      {
        title: "خدمة سريعة 6 ساعات",
        description: "هل لديكم حاجة مستعجلة؟ استفيدوا من خدمتنا السريعة لاسترجاع ملابسكم خلال 6 ساعات بالضبط.",
      },
      {
        title: "استلام وتوصيل مجاني",
        description: "نأتي لاستلام قطعكم ونعيدها نظيفة ومكوية، دون أي رسوم توصيل إضافية.",
      },
      {
        title: "خبرة منذ 2010",
        description: "منذ 2010، يتقن فريقنا المؤهل تقنيات التنظيف المناسبة لكل نوع قماش.",
      },
    ],
    categories: [
      { title: "الملابس اليومية", description: "قمصان، سراويل، فساتين، تنانير" },
      { title: "القطع الحساسة", description: "حرير، صوف، كشمير، دانتيل" },
      { title: "الكميات الكبيرة", description: "شراشف، لحف، ستائر، مفارش" },
      { title: "الجلود والفراء", description: "سترات، حقائب، أحذية، أحزمة" },
    ],
    ctaTitle: "اكتشفوا كيف نعمل في 3 خطوات",
    ctaButton: "كيف نعمل",
  },
};

function Avantages() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const icons = [Zap, Truck, Award];
  const categoryIcons = [Shirt, Sparkles, BedDouble, Footprints];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            {c.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{c.subtitle}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-6">
              {c.items.map((item, index) => {
                const Icon = icons[index]!;
                return (
                  <AdvantageItem
                    key={item.title}
                    icon={<Icon className="h-5 w-5" />}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {c.categories.map((category, index) => {
                  const Icon = categoryIcons[index]!;
                  return (
                    <div key={category.title} className="rounded-xl bg-background p-6 shadow-sm card-lift">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-foreground">{category.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{c.ctaTitle}</h2>
          <Link
            to="/processus"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600"
          >
            {c.ctaButton}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function AdvantageItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
