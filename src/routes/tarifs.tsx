import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, Sparkles, BedDouble, Sofa, ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";

const PAGE_TITLE = "Tarifs pressing & nettoyage à sec à Casablanca | Pressing Zerktouni";
const PAGE_DESCRIPTION =
  "Tous les tarifs de Pressing Zerktouni à Casablanca : vêtements de ville, tenues traditionnelles, linge de maison et ameublement. Prix transparents, lavage + repassage ou repassage seul.";
const PAGE_KEYWORDS =
  "tarifs pressing Casablanca, prix pressing Casablanca, prix nettoyage à sec Casablanca, prix repassage Casablanca, tarif takchita caftan pressing";

type PriceItem = { name: string; wash: string; iron: string };

type PriceCategory = {
  title: string;
  description: string;
  icon: ReactNode;
  items: PriceItem[];
};

const CATEGORIES: PriceCategory[] = [
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

function Tarifs() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Tarifs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Des prix transparents pour chaque pièce. Aucun frais caché.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Pressing Zerktouni nettoie, lave et repasse vos vêtements de ville, tenues traditionnelles, linge de maison et articles d'ameublement, avec ramassage et livraison à domicile. Chaque article est proposé en deux formules : lavage + repassage, ou repassage seul.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight flex flex-col gap-12">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
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
                  <table className="w-full min-w-[520px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-5 py-3" />
                        <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Lavage et repassage
                        </th>
                        <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Repassage seulement
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
                          <td className="px-5 py-3 text-right text-sm font-bold text-primary">{item.wash}</td>
                          <td className="px-5 py-3 text-right text-sm font-bold text-primary">{item.iron}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}

          <p className="text-center text-sm text-muted-foreground">
            Les prix « à partir de » et les tarifs au m² sont des estimations ; le prix final est confirmé lors de l'enlèvement, après vérification de la pièce.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Une question sur nos tarifs ?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+212522363634"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              05 22 36 36 34
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
