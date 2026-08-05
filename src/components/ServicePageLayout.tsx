import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Check,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { services, type ServiceContent } from "@/data/services";

export function ServicePageLayout({ service }: { service: ServiceContent }) {
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container-tight flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Pressing <span className="text-primary">Casablanca</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {services.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.navTitle}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+212522123456"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-brand-600"
          >
            <Phone className="h-4 w-4" />
            05 22 12 34 56
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-border bg-brand-50">
        <div className="container-tight flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Accueil
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/" hash="services" className="hover:text-primary">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{service.navTitle}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero">
        <div className="container-tight grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {service.h1}
            </h1>
            <p className="text-lg text-muted-foreground">{service.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+212522123456"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Service express 24h
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> 123 Bd Mohammed V, Casablanca
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={service.image}
              alt={service.h1}
              width={944}
              height={704}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Ce que comprend notre service
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm card-lift"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50 py-16 lg:py-24">
        <div className="container-tight max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-8 grid gap-4">
            {service.faq.map((entry) => (
              <div
                key={entry.question}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {entry.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {entry.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Nos autres services de pressing à Casablanca
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.navTitle}
                    width={944}
                    height={704}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.navTitle}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Retour à l'accueil du pressing Casablanca centre-ville
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="container-tight flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Pressing Casablanca Centre Ville. Tous droits réservés.</p>
          <p>123 Bd Mohammed V, Casablanca — 05 22 12 34 56</p>
        </div>
      </footer>
    </div>
  );
}
