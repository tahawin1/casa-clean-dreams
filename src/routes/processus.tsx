import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProcessStepsTimeline } from "@/components/ProcessSteps";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";

const PAGE_TITLE = "Notre processus | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Découvrez comment fonctionne Pressing Zerktouni à Casablanca : choisissez vos articles, on vient les récupérer chez vous, livraison impeccable. Un processus simple en 3 étapes.";
const PAGE_KEYWORDS =
  "processus pressing Casablanca, comment fonctionne pressing Zerktouni, ramassage pressing Casablanca, étapes nettoyage pressing";

export const Route = createFileRoute("/processus")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/processus",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Processus", path: "/processus" },
      ],
    }),
  component: Processus,
});

function Processus() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Comment ça marche
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Trois étapes simples
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choisissez, nous venons chercher, vous récupérez. Un processus fluide pensé pour votre confort.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <ProcessStepsTimeline />
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Prêt à nous confier vos vêtements ?
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
