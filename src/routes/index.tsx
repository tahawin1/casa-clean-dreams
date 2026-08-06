import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shirt,
  Sparkles,
  BedDouble,
  Footprints,
  Award,
  ChevronRight,
  ArrowRight,
  Zap,
  Truck,
  Leaf,
} from "lucide-react";

import heroImage from "@/assets/hero-pressing.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import serviceVetements from "@/assets/service-vetements.jpg";
import serviceCostumes from "@/assets/service-costumes.jpg";
import serviceLinge from "@/assets/service-linge.jpg";
import serviceCuir from "@/assets/service-cuir.jpg";
import promoCostume from "@/assets/promo-costume.png";
import promoCouture from "@/assets/promo-couture.webp";
import promoFidelite from "@/assets/promo-fidelite.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceCard } from "@/components/ServiceCard";

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

const USPS = [
  { icon: <Zap className="h-5 w-5" />, title: "Service express 6h" },
  { icon: <Truck className="h-5 w-5" />, title: "Ramassage & livraison gratuite" },
  { icon: <Award className="h-5 w-5" />, title: "Expertise depuis 2010" },
  { icon: <Leaf className="h-5 w-5" />, title: "Engagement écologique" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden lg:min-h-[640px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroImage}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/60 to-brand-900/30" />
        <div className="container-tight relative grid gap-10 py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-28">
          <div className="flex max-w-xl flex-col gap-6">
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Pressing Zerktouni à Casablanca,{" "}
              <span className="text-primary">soin premium</span>
            </h1>

            <p className="max-w-xl text-lg text-white/85">
              Votre pressing sur le Boulevard Mohamed Zerktouni à Casablanca. Nettoyage à sec, repassage, blanchisserie, cuir, sacs et tapis avec service express 6h et livraison gratuite.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-primary/30"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Nos services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-white/80">
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
          <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
            <img
              src={heroImage}
              alt="Façade du pressing Pressing Zerktouni sur le Boulevard Mohamed Zerktouni à Casablanca"
              width={1448}
              height={1086}
              className="relative rounded-2xl border-4 border-white/80 shadow-2xl"
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

      {/* Promotions */}
      <section className="bg-brand-900 py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Offres du moment
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Nos promotions exclusives
            </h2>
            <p className="mt-4 text-white/70">
              Costumes et tailleurs à prix mini le mercredi et le vendredi, et un lavage gratuit tous les 4 lavages.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <img
              src={promoCostume}
              alt="Promo : lavage de costume homme à 45 DH le mercredi et le vendredi"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <img
              src={promoCouture}
              alt="Promo : soin premium couture et retouche à 45 DH le mercredi et le vendredi"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <img
              src={promoFidelite}
              alt="Offre fidélité : le 5ème lavage est offert après 4 lavages"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 lg:py-28">
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

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Voir tous nos services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us — teaser */}
      <section className="bg-brand-50 py-16 lg:py-20">
        <div className="container-tight">
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Pourquoi nous choisir
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              La propreté, sans compromis
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USPS.map((usp) => (
              <div
                key={usp.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-background p-6 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {usp.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{usp.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/avantages"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Découvrir nos avantages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border py-20 lg:py-28">
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
              author="Salma M."
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

      {/* CTA banner */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Prêt à confier vos vêtements à des experts ?
            </h2>
            <p className="max-w-xl text-primary-foreground/90">
              Demandez votre devis gratuit ou contactez-nous directement : nous vous répondons rapidement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-base font-medium text-foreground shadow-lg transition-all hover:bg-muted"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+212522363634"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                05 22 36 36 34
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
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
      <div className="mb-4 text-4xl text-primary">"</div>
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
