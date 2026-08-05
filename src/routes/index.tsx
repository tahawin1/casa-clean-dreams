import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shirt,
  Sparkles,
  BedDouble,
  Footprints,
  Clock,
  Award,
  Leaf,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  ArrowRight,
  Zap,
  Truck,
  CalendarCheck,
  Gift,
} from "lucide-react";

import heroImage from "@/assets/hero-pressing.jpg";
import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";
import type { ServicePath } from "@/data/services";

const SITE_URL = "https://casa-clean-dreams.lovable.app";
const PAGE_TITLE = "Pressing Zerktouni Casablanca | Nettoyage à Sec 6h";
const PAGE_DESCRIPTION =
  "Pressing Zerktouni à Casablanca, 237 Boulevard Mohamed Zerktouni. Depuis 2010, nettoyage à sec, repassage, costumes, linge de maison, cuir, sacs et tapis. Service express 6h, ramassage et livraison gratuite.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "pressing Zerktouni Casablanca, pressing Casablanca, nettoyage à sec Casablanca, blanchisserie Bd Zerktouni, repassage Casablanca, pressing 24h, pressing 6h, ramassage livraison pressing, nettoyage tapis Casablanca",
      },
      { name: "geo.region", content: "MA-CAS" },
      { name: "geo.placename", content: "Casablanca" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DryCleaningOrLaundry",
          "@id": `${SITE_URL}/#pressing`,
          name: "Pressing Zerktouni",
          description: PAGE_DESCRIPTION,
          url: SITE_URL,
          telephone: "+212522363634",
          email: "contact@pressingzerktouni.ma",
          priceRange: "MAD",
          foundingDate: "2010",
          address: {
            "@type": "PostalAddress",
            streetAddress: "237 Boulevard Mohamed Zerktouni",
            addressLocality: "Casablanca",
            addressRegion: "Casablanca-Settat",
            addressCountry: "MA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "33.5750",
            longitude: "-7.6315",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
          areaServed: {
            "@type": "City",
            name: "Casablanca",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services de pressing",
            itemListElement: [
              "Nettoyage à sec de vêtements",
              "Costumes et tenues de cérémonie",
              "Linge de maison",
              "Cuir, sacs et chaussures",
              "Tapis et tapis de prière",
              "Repassage",
              "Service express 6h",
              "Ramassage et livraison gratuite",
            ].map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Pressing Zerktouni",
          url: SITE_URL,
          inLanguage: "fr-MA",
        }),
      },
    ],
  }),
  component: Index,
});


function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container-tight flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Pressing <span className="text-primary">Zerktouni</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#avantages" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Avantages
            </a>
            <a href="#processus" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Processus
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+212522363634"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              05 22 36 36 34
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-brand-600"
            >
              Devis gratuit
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="container-tight flex flex-col gap-2 py-4">
              <a
                href="#services"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#avantages"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Avantages
              </a>
              <a
                href="#processus"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Processus
              </a>
              <a
                href="#contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:+212522363634"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                05 22 36 36 34
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Promo banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-tight flex flex-col items-center justify-center gap-2 py-2.5 text-center sm:flex-row sm:gap-3">
          <Gift className="h-4 w-4 shrink-0" />
          <p className="text-sm font-medium">
            Promo du moment : demandez-nous nos offres en magasin ou par téléphone
          </p>
          <a
            href="tel:+212522363634"
            className="text-sm font-semibold underline underline-offset-2 hover:no-underline"
          >
            05 22 36 36 34
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container-tight grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 shadow-sm">
              <CalendarCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Depuis 2010 à votre service</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Pressing Zerktouni à Casablanca,{" "}
              <span className="text-primary">soin premium</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground">
              Depuis 2010, votre pressing sur le Boulevard Mohamed Zerktouni à Casablanca. Nettoyage à sec, repassage, blanchisserie, cuir, sacs et tapis avec service express 6h et livraison gratuite.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-primary/30"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Nos services
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Express 6h</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <span>Ramassage & livraison gratuite</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>Qualité garantie</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
            <img
              src={heroImage}
              alt="Façade du pressing Pressing Zerktouni sur le Boulevard Mohamed Zerktouni à Casablanca"
              width={1440}
              height={912}
              className="relative rounded-2xl border border-white/50 shadow-2xl shadow-brand-900/10"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-background">
        <div className="container-tight grid gap-8 py-10 sm:grid-cols-3">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">Depuis 2010</div>
            <p className="mt-1 text-sm text-muted-foreground">À votre service au Bd Mohamed Zerktouni</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">Express 6h</div>
            <p className="mt-1 text-sm text-muted-foreground">Service ultra-rapide disponible</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">Gratuit</div>
            <p className="mt-1 text-sm text-muted-foreground">Ramassage & livraison à domicile</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Nos prestations
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Des services complets pour tous vos textiles
            </h2>
            <p className="mt-4 text-muted-foreground">
              Du linge quotidien aux pièces les plus délicates, nous prenons soin de vos vêtements et accessoires avec expertise.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Advantages */}
      <section id="avantages" className="bg-brand-50 py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Pourquoi nous choisir
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
                La propreté, sans compromis
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nous combinons savoir-faire traditionnel et technologies modernes pour offrir un résultat parfait à chaque passage.
              </p>

              <div className="mt-8 grid gap-6">
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
                <AdvantageItem
                  icon={<Leaf className="h-5 w-5" />}
                  title="Engagement écologique"
                  description="Nous utilisons des produits doux et des procédés économes en eau pour préserver vos textiles et l'environnement."
                />
              </div>
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

      {/* Process */}
      <section id="processus" className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Comment ça marche
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Trois étapes simples
            </h2>
            <p className="mt-4 text-muted-foreground">
              Déposez, nous nettoyons, vous récupérez. Un processus fluide pensé pour votre confort.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
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

      {/* Testimonials */}
      <section className="border-y border-border bg-brand-50 py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Avis clients
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Ils nous font confiance
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Service impeccable et rapide. Mes costumes sont toujours traités avec une grande attention. Le meilleur pressing du centre-ville de Casablanca."
              author="Karim B."
              role="Consultant"
            />
            <TestimonialCard
              quote="Je confie mes robes de soirée et mon linge de maison depuis des années. Qualité constante et équipe très professionnelle."
              author="Leïla M."
              role="Avocate"
            />
            <TestimonialCard
              quote="La rénovation de mes chaussures en cuir a été bluffante. On dirait qu'elles sont neuves. Je recommande vivement !"
              author="Youssef T."
              role="Entrepreneur"
            />
          </div>
        </div>
      </section>

      {/* Contact / Location */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Contact & adresse
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
                Venez nous rendre visite
              </h2>
              <p className="mt-4 text-muted-foreground">
                Situé en plein centre-ville de Casablanca, notre pressing est facilement accessible. Nous sommes à votre écoute pour tous vos besoins.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">Adresse</h3>
                    <p className="text-sm text-muted-foreground">
                      237 Boulevard Mohamed Zerktouni
                      <br />
                      Casablanca, Maroc
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">Horaires d'ouverture</h3>
                    <p className="text-sm text-muted-foreground">
                      Lundi – Samedi : 8h00 – 20h00
                      <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">Téléphone</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="tel:+212522363634" className="hover:text-primary">
                        05 22 36 36 34
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:contact@pressingzerktouni.ma" className="hover:text-primary">
                        contact@pressingzerktouni.ma
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Carte de localisation du pressing – 237 Bd Mohamed Zerktouni, Casablanca"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6415%2C33.5675%2C-7.6215%2C33.5825&layer=mapnik&marker=33.5750%2C-7.6315"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex items-center justify-between gap-3 bg-background px-4 py-3">
                  <p className="text-sm text-muted-foreground">237 Bd Mohamed Zerktouni, Casablanca</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=237+Boulevard+Mohamed+Zerktouni+Casablanca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-primary hover:underline"
                  >
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>


            <div className="rounded-2xl border border-border bg-muted p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">Demander un devis gratuit</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Remplissez ce formulaire et nous vous recontactons rapidement.
              </p>
              {formSubmitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-xl bg-background p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold text-foreground">
                    Demande envoyée !
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Merci de nous avoir contactés. Notre équipe vous rappellera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    Envoyer une nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium text-foreground">
                        Nom
                      </label>
                      <input
                        id="nom"
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="text-sm font-medium text-foreground">
                        Téléphone
                      </label>
                      <input
                        id="telephone"
                        type="tel"
                        required
                        placeholder="06 12 34 56 78"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Pressing vêtements</option>
                      <option>Costumes & cérémonies</option>
                      <option>Linge de maison</option>
                      <option>Cuir & chaussures</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Décrivez vos besoins..."
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl"
                  >
                    Envoyer ma demande
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="font-display text-lg font-bold text-foreground">
                  Pressing <span className="text-primary">Casablanca</span>
                </span>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Votre pressing premium au centre-ville de Casablanca. Qualité, rapidité et écologie au service de vos vêtements.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/services/pressing-vetements" className="hover:text-primary">
                    Pressing vêtements
                  </Link>
                </li>
                <li>
                  <Link to="/services/costumes-ceremonies" className="hover:text-primary">
                    Costumes & cérémonies
                  </Link>
                </li>
                <li>
                  <Link to="/services/linge-de-maison" className="hover:text-primary">
                    Linge de maison
                  </Link>
                </li>
                <li>
                  <Link to="/services/cuir-chaussures" className="hover:text-primary">
                    Cuir & chaussures
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Entreprise</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#avantages" className="hover:text-primary">
                    Nos avantages
                  </a>
                </li>
                <li>
                  <a href="#processus" className="hover:text-primary">
                    Notre processus
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Recrutement
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>237 Bd Mohamed Zerktouni, Casablanca</li>
                <li>
                  <a href="tel:+212522363634" className="hover:text-primary">
                    05 22 36 36 34
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@pressingzerktouni.ma" className="hover:text-primary">
                    contact@pressingzerktouni.ma
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
            <p>© 2026 Pressing Zerktouni. Depuis 2010 à votre service.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  image,
  icon,
  title,
  description,
  to,
}: {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  to: ServicePath;
}) {
  return (
    <Link to={to} className="group block overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-brand-900/5">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={944}
          height={704}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          En savoir plus
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
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

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
      <div className="mb-4 text-4xl text-primary">“</div>
      <p className="text-sm leading-relaxed text-foreground">{quote}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-display text-sm font-semibold text-foreground">{author}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}
