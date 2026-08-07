import { Link } from "@tanstack/react-router";
import {
  Check,
  MapPin,
  Phone,
  Truck,
  Zap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { getService, getServices } from "@/data/services";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const COPY: Record<
  Lang,
  {
    breadcrumbHome: string;
    breadcrumbServices: string;
    quote: string;
    call: string;
    express: string;
    delivery: string;
    address: string;
    detailsEyebrow: string;
    detailsTitle: string;
    discoverEyebrow: string;
    discoverTitle: string;
    backHome: string;
    ctaTitle: string;
  }
> = {
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbServices: "Services",
    quote: "Demander un devis",
    call: "Appeler",
    express: "Express 6h",
    delivery: "Ramassage & livraison gratuite",
    address: "237 Bd Mohamed Zerktouni, Casablanca",
    detailsEyebrow: "Détails du service",
    detailsTitle: "Ce que comprend notre service",
    discoverEyebrow: "À découvrir aussi",
    discoverTitle: "Nos autres services de pressing à Casablanca",
    backHome: "Retour à l'accueil du pressing Pressing Zerktouni",
    ctaTitle: "Prêt à confier vos vêtements à des experts ?",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    quote: "Request a quote",
    call: "Call",
    express: "6h express",
    delivery: "Free pickup & delivery",
    address: "237 Bd Mohamed Zerktouni, Casablanca",
    detailsEyebrow: "Service details",
    detailsTitle: "What's included in this service",
    discoverEyebrow: "You may also like",
    discoverTitle: "Our other dry cleaning services in Casablanca",
    backHome: "Back to the Pressing Zerktouni home page",
    ctaTitle: "Ready to trust your clothes to experts?",
  },
  ar: {
    breadcrumbHome: "الرئيسية",
    breadcrumbServices: "الخدمات",
    quote: "اطلب عرض سعر",
    call: "اتصل بنا",
    express: "خدمة سريعة 6 ساعات",
    delivery: "استلام وتوصيل مجاني",
    address: "237 شارع محمد الزرقطوني، الدار البيضاء",
    detailsEyebrow: "تفاصيل الخدمة",
    detailsTitle: "ما تتضمنه خدمتنا",
    discoverEyebrow: "اكتشفوا أيضا",
    discoverTitle: "خدمات التنظيف الأخرى لدينا في الدار البيضاء",
    backHome: "العودة إلى الصفحة الرئيسية لبرسينغ الزرقطوني",
    ctaTitle: "مستعدون لتوكيل ملابسكم إلى خبراء؟",
  },
};

export function ServicePageLayout({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const service = getService(slug, lang);
  const others = getServices(lang).filter((item) => item.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="border-b border-border bg-brand-50">
        <div className="container-tight flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            {c.breadcrumbHome}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
          <Link to="/services" className="hover:text-primary">
            {c.breadcrumbServices}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
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
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600"
              >
                {c.quote}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <a
                href="tel:+212522363634"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4" />
                {c.call}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" /> {c.express}
              </span>
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> {c.delivery}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {c.address}
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
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            {c.detailsEyebrow}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {c.detailsTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 100}
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            {c.discoverEyebrow}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {c.discoverTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((item, index) => (
              <Reveal key={item.slug} delay={index * 100}>
                <Link
                  to={item.path}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
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
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {c.backHome}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand-50 py-16 lg:py-20">
        <div className="container-tight flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {c.ctaTitle}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600"
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
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
