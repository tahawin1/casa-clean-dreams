import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";

const PAGE_TITLE = "Notre processus | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Découvrez comment fonctionne Pressing Zerktouni à Casablanca : dépôt en magasin, nettoyage expert, retour impeccable. Un processus simple en 3 étapes.";
const PAGE_KEYWORDS =
  "processus pressing Casablanca, comment fonctionne pressing Zerktouni, dépôt vêtements pressing Casablanca, étapes nettoyage pressing";

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
            Déposez, nous nettoyons, vous récupérez. Un processus fluide pensé pour votre confort.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-3">
            <ProcessStep
              step="01"
              title="Dépôt en magasin"
              description="Apportez vos articles dans notre pressing au centre-ville de Casablanca. Nous établissons un diagnostic précis et un devis transparent."
            />
            <ProcessStep
              step="02"
              title="Nettoyage expert"
              description="Nos professionnels traitent chaque pièce selon sa matière et ses besoins spécifiques, avec des produits adaptés et respectueux."
            />
            <ProcessStep
              step="03"
              title="Retour impeccable"
              description="Récupérez vos vêtements propres, repassés et emballés avec soin. Livraison disponible sur demande dans Casablanca."
            />
          </div>
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

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {step}
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
