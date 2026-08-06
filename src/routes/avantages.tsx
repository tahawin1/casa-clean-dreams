import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Truck, Award, Shirt, Sparkles, BedDouble, Footprints, ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";

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

function Avantages() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Pourquoi nous choisir
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            La propreté, sans compromis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Nous combinons savoir-faire traditionnel et technologies modernes pour offrir un résultat parfait à chaque passage.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-6">
              <AdvantageItem
                icon={<Zap className="h-5 w-5" />}
                title="Service express 6h"
                description="Besoin urgent ? Profitez de notre service express pour récupérer vos vêtements en 6 heures chrono."
              />
              <AdvantageItem
                icon={<Truck className="h-5 w-5" />}
                title="Ramassage & livraison gratuite"
                description="Nous venons chercher vos articles et vous les ramenons propres et repassés, sans frais de livraison."
              />
              <AdvantageItem
                icon={<Award className="h-5 w-5" />}
                title="Expertise depuis 2010"
                description="Depuis 2010, notre équipe qualifiée maîtrise les techniques de nettoyage adaptées à chaque matière."
              />
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-background p-6 shadow-sm card-lift">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Shirt className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">Linge quotidien</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Chemises, pantalons, robes, jupes</p>
                </div>
                <div className="rounded-xl bg-background p-6 shadow-sm card-lift">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">Articles délicats</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Soie, laine, cachemire, dentelle</p>
                </div>
                <div className="rounded-xl bg-background p-6 shadow-sm card-lift">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BedDouble className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">Gros volumes</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Draps, couettes, rideaux, nappes</p>
                </div>
                <div className="rounded-xl bg-background p-6 shadow-sm card-lift">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Footprints className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">Cuirs & peaux</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Vestes, sacs, chaussures, ceintures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Découvrez notre processus en 3 étapes
          </h2>
          <Link
            to="/processus"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600"
          >
            Notre processus
            <ArrowRight className="h-4 w-4" />
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
