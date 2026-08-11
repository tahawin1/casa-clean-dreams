import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { SITE_URL } from "@/data/services";
import { getPriceCategories } from "@/data/pricing";
import { buildPageHead } from "@/lib/service-head";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const PAGE_TITLE = "Tarifs pressing & nettoyage à sec à Casablanca | Pressing Zerktouni";
const PAGE_DESCRIPTION =
  "Tous les tarifs de Pressing Zerktouni à Casablanca : vêtements de ville, tenues traditionnelles, linge de maison et ameublement. Prix transparents, lavage + repassage ou repassage seul.";
const PAGE_KEYWORDS =
  "tarifs pressing Casablanca, prix pressing Casablanca, prix nettoyage à sec Casablanca, prix repassage Casablanca, tarif takchita caftan pressing";

export const Route = createFileRoute("/tarifs")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/tarifs",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Tarifs", path: "/tarifs" },
      ],
    }),
  component: Tarifs,
});

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    orderNow: string;
    washCol: string;
    ironCol: string;
    note: string;
    ctaTitle: string;
    quote: string;
  }
> = {
  fr: {
    eyebrow: "Services",
    title: "Tarifs",
    subtitle: "Des prix transparents pour chaque pièce. Aucun frais caché.",
    intro:
      "Pressing Zerktouni nettoie, lave et repasse vos vêtements de ville, tenues traditionnelles, linge de maison et articles d'ameublement, avec ramassage et livraison à domicile. Chaque article est proposé en deux formules : lavage + repassage, ou repassage seul.",
    orderNow: "Commander maintenant",
    washCol: "Lavage et repassage",
    ironCol: "Repassage seulement",
    note: "Les prix « à partir de » et les tarifs au m² sont des estimations ; le prix final est confirmé lors de l'enlèvement, après vérification de la pièce.",
    ctaTitle: "Une question sur nos tarifs ?",
    quote: "Demander un devis",
  },
  en: {
    eyebrow: "Services",
    title: "Pricing",
    subtitle: "Transparent prices for every item. No hidden fees.",
    intro:
      "Pressing Zerktouni cleans, washes and presses your everyday clothes, traditional wear, home linen and furnishings, with pickup and delivery at home. Every item comes in two options: wash + press, or pressing only.",
    orderNow: "Order now",
    washCol: "Wash & press",
    ironCol: "Pressing only",
    note: "\"From\" prices and per-m² rates are estimates; the final price is confirmed at pickup, after checking the item.",
    ctaTitle: "A question about our pricing?",
    quote: "Request a quote",
  },
  ar: {
    eyebrow: "الخدمات",
    title: "الأسعار",
    subtitle: "أسعار شفافة لكل قطعة. بدون رسوم خفية.",
    intro:
      "ينظف برسينغ الزرقطوني ويغسل ويكوي ملابسكم اليومية وأزياءكم التقليدية وبياضات منزلكم ومفروشاتكم، مع خدمة استلام وتوصيل مجانية إلى المنزل. كل قطعة متوفرة بصيغتين: غسيل وكي، أو كي فقط.",
    orderNow: "اطلب الآن",
    washCol: "غسيل وكي",
    ironCol: "كي فقط",
    note: "الأسعار المذكورة بـ«ابتداء من» والأسعار بالمتر المربع هي تقديرية؛ يتم تأكيد السعر النهائي عند الاستلام، بعد معاينة القطعة.",
    ctaTitle: "لديكم سؤال حول أسعارنا؟",
    quote: "اطلب عرض سعر",
  },
};

function Tarifs() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const categories = getPriceCategories(lang);
  const [activeCategory, setActiveCategory] = useState(0);
  const category = categories[activeCategory] ?? categories[0]!;

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
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{c.intro}</p>
          <div className="mt-6">
            <Link
              to="/commander"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl"
            >
              {c.orderNow}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight flex flex-col gap-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  index === activeCategory
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <Reveal key={category.title}>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {category.icon}
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {category.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left rtl:text-right">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-5 py-3" />
                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground rtl:text-left">
                        {c.washCol}
                      </th>
                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground rtl:text-left">
                        {c.ironCol}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, index) => (
                      <tr
                        key={item.name}
                        className={index !== category.items.length - 1 ? "border-b border-border" : ""}
                      >
                        <td className="px-5 py-3 text-sm text-foreground">{item.name}</td>
                        <td className="px-5 py-3 text-right text-sm font-bold text-primary rtl:text-left">{item.wash}</td>
                        <td className="px-5 py-3 text-right text-sm font-bold text-primary rtl:text-left">{item.iron}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <p className="text-center text-sm text-muted-foreground">{c.note}</p>
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <Reveal className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{c.ctaTitle}</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:scale-[1.03] active:scale-[0.97]"
            >
              {c.quote}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <a
              href="tel:+212522363634"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              05 22 36 36 34
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
