import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, Sparkles, BedDouble, Footprints, ArrowRight, Phone } from "lucide-react";

import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceCard } from "@/components/ServiceCard";
import { services, SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";

const PAGE_TITLE = "Nos services de pressing à Casablanca | Pressing Zerktouni";
const PAGE_DESCRIPTION =
  "Découvrez tous les services de Pressing Zerktouni à Casablanca : pressing vêtements, costumes & cérémonies, linge de maison, cuir, sacs & chaussures. Express 6h, ramassage et livraison gratuite.";
const PAGE_KEYWORDS =
  "services pressing Casablanca, pressing vêtements Zerktouni, nettoyage à sec Casablanca, blanchisserie Casablanca, nettoyage cuir chaussures Casablanca";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/services",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Services", path: "/services" },
      ],
      extraSchemas: [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.navTitle,
            url: `${SITE_URL}${service.path}`,
          })),
        },
      ],
    }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Nos prestations
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Des services complets pour tous vos textiles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Du linge quotidien aux pièces les plus délicates, Pressing Zerktouni prend soin de vos vêtements et accessoires avec expertise, sur le Boulevard Mohamed Zerktouni à Casablanca.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              image={serviceVetements}
              icon={<Shirt className="h-5 w-5" />}
              to="/services/pressing-vetements"
              title="Pressing vêtements"
              description="Nettoyage à sec et repassage de vos chemises, pantalons, robes et vêtements du quotidien. Service express 6h et livraison gratuite."
            />
            <ServiceCard
              image={serviceCostumes}
              icon={<Sparkles className="h-5 w-5" />}
              to="/services/costumes-ceremonies"
              title="Costumes & cérémonies"
              description="Entretien spécialisé des costumes, smoking, robes de soirée, caftans et takchitas. Traitement haute couture et emballage soigné."
            />
            <ServiceCard
              image={serviceLinge}
              icon={<BedDouble className="h-5 w-5" />}
              to="/services/linge-de-maison"
              title="Linge de maison & tapis"
              description="Nettoyage et repassage de draps, couettes, rideaux, nappes et linge de bain. Nettoyage de tapis et tapis de prière sur demande."
            />
            <ServiceCard
              image={serviceCuir}
              icon={<Footprints className="h-5 w-5" />}
              to="/services/cuir-chaussures"
              title="Cuir, sacs & chaussures"
              description="Nettoyage, rénovation et imperméabilisation de vos chaussures, sacs, vestes et accessoires en cuir."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Une question sur un de nos services ?
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
