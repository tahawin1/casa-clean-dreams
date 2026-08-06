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
import { ProcessStepsTimeline } from "@/components/ProcessSteps";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const SITE_URL = "https://www.pressingzerktouni.com";
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
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
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
            latitude: "33.5903249",
            longitude: "-7.6359013",
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

const COPY: Record<
  Lang,
  {
    heroTitle: React.ReactNode;
    heroSubtitle: string;
    heroCta: string;
    quote: string;
    ourServices: string;
    express: string;
    pickupFree: string;
    qualityGuaranteed: string;
    trustSince: string;
    trustSinceSub: string;
    trustExpress: string;
    trustExpressSub: string;
    trustFree: string;
    trustFreeSub: string;
    promoEyebrow: string;
    promoTitle: string;
    promoSubtitle: string;
    promoBadgeDays: string;
    promoBadgeLoyalty: string;
    promoAlt1: string;
    promoAlt2: string;
    promoAlt3: string;
    promoCta: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesSubtitle: string;
    services: { title: string; description: string }[];
    seeAllServices: string;
    howEyebrow: string;
    howTitle: string;
    discoverProcess: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    testimonials: { quote: string; author: string; role: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  }
> = {
  fr: {
    heroTitle: (
      <>
        Pressing Zerktouni à Casablanca, <span className="text-primary">soin premium</span>
      </>
    ),
    heroSubtitle:
      "Votre pressing sur le Boulevard Mohamed Zerktouni à Casablanca. Nettoyage à sec, repassage, blanchisserie, cuir, sacs et tapis avec service express 6h et livraison gratuite.",
    heroCta: "Commander",
    quote: "Demander un devis",
    ourServices: "Nos services",
    express: "Express 6h",
    pickupFree: "Ramassage & livraison gratuite",
    qualityGuaranteed: "Qualité garantie",
    trustSince: "Depuis 2010",
    trustSinceSub: "À votre service au Bd Mohamed Zerktouni",
    trustExpress: "Express 6h",
    trustExpressSub: "Service ultra-rapide disponible",
    trustFree: "Gratuit",
    trustFreeSub: "Ramassage & livraison à domicile",
    promoEyebrow: "Offres du moment",
    promoTitle: "Nos promotions exclusives",
    promoSubtitle:
      "Costumes et tailleurs à prix mini le mercredi et le vendredi, et un lavage gratuit tous les 4 lavages.",
    promoBadgeDays: "Mer & Ven",
    promoBadgeLoyalty: "Fidélité",
    promoAlt1: "Promo : lavage de costume homme à 45 DH le mercredi et le vendredi",
    promoAlt2: "Promo : soin premium couture et retouche à 45 DH le mercredi et le vendredi",
    promoAlt3: "Offre fidélité : le 5ème lavage est offert après 4 lavages",
    promoCta: "Profiter de l'offre",
    servicesEyebrow: "Nos prestations",
    servicesTitle: "Des services complets pour tous vos textiles",
    servicesSubtitle:
      "Du linge quotidien aux pièces les plus délicates, nous prenons soin de vos vêtements et accessoires avec expertise.",
    services: [
      {
        title: "Pressing vêtements",
        description:
          "Nettoyage à sec et repassage de vos chemises, pantalons, robes et vêtements du quotidien. Service express 6h et livraison gratuite.",
      },
      {
        title: "Costumes & cérémonies",
        description:
          "Entretien spécialisé des costumes, smoking, robes de soirée, caftans et takchitas. Traitement haute couture et emballage soigné.",
      },
      {
        title: "Linge de maison & tapis",
        description:
          "Nettoyage et repassage de draps, couettes, rideaux, nappes et linge de bain. Nettoyage de tapis et tapis de prière sur demande.",
      },
      {
        title: "Cuir, sacs & chaussures",
        description:
          "Nettoyage, rénovation et imperméabilisation de vos chaussures, sacs, vestes et accessoires en cuir.",
      },
    ],
    seeAllServices: "Voir tous nos services",
    howEyebrow: "Comment ça marche",
    howTitle: "Trois étapes simples",
    discoverProcess: "Découvrir notre processus",
    reviewsEyebrow: "Avis clients",
    reviewsTitle: "Ils nous font confiance",
    testimonials: [
      {
        quote:
          "Service impeccable et rapide. Mes costumes sont toujours traités avec une grande attention. Le meilleur pressing du centre-ville de Casablanca.",
        author: "Karim B.",
        role: "Consultant",
      },
      {
        quote:
          "Je confie mes robes de soirée et mon linge de maison depuis des années. Qualité constante et équipe très professionnelle.",
        author: "Salma M.",
        role: "Avocate",
      },
      {
        quote:
          "La rénovation de mes chaussures en cuir a été bluffante. On dirait qu'elles sont neuves. Je recommande vivement !",
        author: "Youssef T.",
        role: "Entrepreneur",
      },
    ],
    ctaTitle: "Prêt à confier vos vêtements à des experts ?",
    ctaSubtitle: "Demandez votre devis gratuit ou contactez-nous directement : nous vous répondons rapidement.",
  },
  en: {
    heroTitle: (
      <>
        Pressing Zerktouni in Casablanca, <span className="text-primary">premium care</span>
      </>
    ),
    heroSubtitle:
      "Your dry cleaner on Boulevard Mohamed Zerktouni in Casablanca. Dry cleaning, ironing, laundry, leather, bags and rugs with 6h express service and free delivery.",
    heroCta: "Order now",
    quote: "Request a quote",
    ourServices: "Our services",
    express: "Express 6h",
    pickupFree: "Free pickup & delivery",
    qualityGuaranteed: "Guaranteed quality",
    trustSince: "Since 2010",
    trustSinceSub: "At your service on Bd Mohamed Zerktouni",
    trustExpress: "Express 6h",
    trustExpressSub: "Ultra-fast service available",
    trustFree: "Free",
    trustFreeSub: "Home pickup & delivery",
    promoEyebrow: "Current offers",
    promoTitle: "Our exclusive promotions",
    promoSubtitle:
      "Suits and skirt suits at the best price on Wednesday and Friday, plus a free wash every 4 washes.",
    promoBadgeDays: "Wed & Fri",
    promoBadgeLoyalty: "Loyalty",
    promoAlt1: "Promo: men's suit cleaning for 45 DH on Wednesday and Friday",
    promoAlt2: "Promo: premium tailoring and alterations for 45 DH on Wednesday and Friday",
    promoAlt3: "Loyalty offer: the 5th wash is free after 4 washes",
    promoCta: "Take advantage",
    servicesEyebrow: "Our services",
    servicesTitle: "Complete care for all your textiles",
    servicesSubtitle:
      "From everyday laundry to the most delicate pieces, we take care of your clothes and accessories with expertise.",
    services: [
      {
        title: "Clothes dry cleaning",
        description:
          "Dry cleaning and ironing of your shirts, trousers, dresses and everyday clothes. 6h express service and free delivery.",
      },
      {
        title: "Suits & ceremonies",
        description:
          "Specialized care for suits, tuxedos, evening gowns, caftans and takchitas. Couture-level treatment and careful packaging.",
      },
      {
        title: "Home linen & rugs",
        description:
          "Cleaning and ironing of sheets, duvets, curtains, tablecloths and bath linen. Rug and prayer rug cleaning on request.",
      },
      {
        title: "Leather, bags & shoes",
        description: "Cleaning, restoration and waterproofing of your shoes, bags, jackets and leather accessories.",
      },
    ],
    seeAllServices: "See all our services",
    howEyebrow: "How it works",
    howTitle: "Three simple steps",
    discoverProcess: "Discover our process",
    reviewsEyebrow: "Customer reviews",
    reviewsTitle: "They trust us",
    testimonials: [
      {
        quote:
          "Impeccable, fast service. My suits are always handled with great care. The best dry cleaner in downtown Casablanca.",
        author: "Karim B.",
        role: "Consultant",
      },
      {
        quote:
          "I've trusted them with my evening gowns and home linen for years. Consistent quality and a very professional team.",
        author: "Salma M.",
        role: "Lawyer",
      },
      {
        quote: "The restoration of my leather shoes was stunning. They look brand new. Highly recommend!",
        author: "Youssef T.",
        role: "Entrepreneur",
      },
    ],
    ctaTitle: "Ready to trust your clothes to experts?",
    ctaSubtitle: "Request your free quote or contact us directly: we'll get back to you quickly.",
  },
  ar: {
    heroTitle: (
      <>
        برسينغ الزرقطوني بالدار البيضاء، <span className="text-primary">عناية فاخرة</span>
      </>
    ),
    heroSubtitle:
      "برسينغكم في شارع محمد الزرقطوني بالدار البيضاء. تنظيف جاف، كي، غسيل، جلد، حقائب وسجاد مع خدمة سريعة 6 ساعات وتوصيل مجاني.",
    heroCta: "اطلب الآن",
    quote: "اطلب عرض سعر",
    ourServices: "خدماتنا",
    express: "خدمة سريعة 6 ساعات",
    pickupFree: "استلام وتوصيل مجاني",
    qualityGuaranteed: "جودة مضمونة",
    trustSince: "منذ 2010",
    trustSinceSub: "في خدمتكم بشارع محمد الزرقطوني",
    trustExpress: "خدمة سريعة 6 ساعات",
    trustExpressSub: "خدمة فائقة السرعة متوفرة",
    trustFree: "مجاني",
    trustFreeSub: "استلام وتوصيل إلى المنزل",
    promoEyebrow: "عروضنا الحالية",
    promoTitle: "عروضنا الحصرية",
    promoSubtitle: "بدلات وتياءير بأفضل الأسعار يوم الأربعاء والجمعة، وغسلة مجانية كل 4 غسلات.",
    promoBadgeDays: "أربعاء وجمعة",
    promoBadgeLoyalty: "الولاء",
    promoAlt1: "عرض: تنظيف بدلة رجالية بـ45 درهم يوم الأربعاء والجمعة",
    promoAlt2: "عرض: خياطة وتفصيل راقٍ بـ45 درهم يوم الأربعاء والجمعة",
    promoAlt3: "عرض الولاء: الغسلة الخامسة مجانية بعد 4 غسلات",
    promoCta: "استفيدوا من العرض",
    servicesEyebrow: "خدماتنا",
    servicesTitle: "خدمات شاملة لجميع أقمشتكم",
    servicesSubtitle: "من الغسيل اليومي إلى القطع الأكثر حساسية، نعتني بملابسكم وإكسسواراتكم بخبرة عالية.",
    services: [
      {
        title: "كي وتنظيف الملابس",
        description:
          "تنظيف جاف وكي لقمصانكم وسراويلكم وفساتينكم وملابسكم اليومية. خدمة سريعة 6 ساعات وتوصيل مجاني.",
      },
      {
        title: "البدلات والمناسبات",
        description:
          "عناية متخصصة بالبدلات والسموكينغ وفساتين السهرة والقفاطين والتقاشيط. معالجة راقية وتغليف دقيق.",
      },
      {
        title: "بياضات المنزل والسجاد",
        description:
          "تنظيف وكي الشراشف واللحف والستائر والمفارش ومناشف الحمام. تنظيف السجاد وسجاد الصلاة عند الطلب.",
      },
      {
        title: "الجلد والحقائب والأحذية",
        description: "تنظيف وترميم وحماية من الماء لأحذيتكم وحقائبكم وستراتكم وإكسسواراتكم الجلدية.",
      },
    ],
    seeAllServices: "شاهدوا كل خدماتنا",
    howEyebrow: "كيف نعمل",
    howTitle: "ثلاث خطوات بسيطة",
    discoverProcess: "اكتشفوا كيف نعمل",
    reviewsEyebrow: "آراء عملائنا",
    reviewsTitle: "يثقون بنا",
    testimonials: [
      {
        quote:
          "خدمة لا تشوبها شائبة وسريعة. بدلاتي تعالج دائما بعناية كبيرة. أفضل برسينغ في وسط مدينة الدار البيضاء.",
        author: "كريم ب.",
        role: "مستشار",
      },
      {
        quote: "أوكل فساتين السهرة وبياضات منزلي منذ سنوات. جودة ثابتة وفريق محترف جدا.",
        author: "سلمى م.",
        role: "محامية",
      },
      {
        quote: "ترميم أحذيتي الجلدية كان مذهلا. كأنها جديدة تماما. أنصح بشدة!",
        author: "يوسف ت.",
        role: "رائد أعمال",
      },
    ],
    ctaTitle: "مستعدون لتوكيل ملابسكم إلى خبراء؟",
    ctaSubtitle: "اطلبوا عرض السعر المجاني أو تواصلوا معنا مباشرة: نرد عليكم بسرعة.",
  },
};

function Index() {
  const { lang } = useLanguage();
  const c = COPY[lang];

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
              {c.heroTitle}
            </h1>

            <p className="max-w-xl text-lg text-white/85">{c.heroSubtitle}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/commander"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-primary/30"
              >
                {c.heroCta}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {c.ourServices}
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>{c.express}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <span>{c.pickupFree}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span>{c.qualityGuaranteed}</span>
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
            <div className="font-display text-3xl font-bold text-primary">{c.trustSince}</div>
            <p className="mt-1 text-sm text-muted-foreground">{c.trustSinceSub}</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">{c.trustExpress}</div>
            <p className="mt-1 text-sm text-muted-foreground">{c.trustExpressSub}</p>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-primary">{c.trustFree}</div>
            <p className="mt-1 text-sm text-muted-foreground">{c.trustFreeSub}</p>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="bg-brand-900 py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              {c.promoEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{c.promoTitle}</h2>
            <p className="mt-4 text-white/70">{c.promoSubtitle}</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30 hover:ring-2 hover:ring-primary/60">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-brand-900 shadow-md">
                {c.promoBadgeDays}
              </span>
              <img
                src={promoCostume}
                alt={c.promoAlt1}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30 hover:ring-2 hover:ring-primary/60">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-brand-900 shadow-md">
                {c.promoBadgeDays}
              </span>
              <img
                src={promoCouture}
                alt={c.promoAlt2}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30 hover:ring-2 hover:ring-primary/60">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-brand-900 shadow-md">
                {c.promoBadgeLoyalty}
              </span>
              <img
                src={promoFidelite}
                alt={c.promoAlt3}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl"
            >
              {c.promoCta}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              {c.servicesEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">{c.servicesTitle}</h2>
            <p className="mt-4 text-muted-foreground">{c.servicesSubtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              image={serviceVetements}
              icon={<Shirt className="h-5 w-5" />}
              to="/services/pressing-vetements"
              title={c.services[0]!.title}
              description={c.services[0]!.description}
            />
            <ServiceCard
              image={serviceCostumes}
              icon={<Sparkles className="h-5 w-5" />}
              to="/services/costumes-ceremonies"
              title={c.services[1]!.title}
              description={c.services[1]!.description}
            />
            <ServiceCard
              image={serviceLinge}
              icon={<BedDouble className="h-5 w-5" />}
              to="/services/linge-de-maison"
              title={c.services[2]!.title}
              description={c.services[2]!.description}
            />
            <ServiceCard
              image={serviceCuir}
              icon={<Footprints className="h-5 w-5" />}
              to="/services/cuir-chaussures"
              title={c.services[3]!.title}
              description={c.services[3]!.description}
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {c.seeAllServices}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça marche — teaser */}
      <section className="bg-brand-50 py-16 lg:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              {c.howEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">{c.howTitle}</h2>
          </div>

          <div className="mt-14">
            <ProcessStepsTimeline />
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/processus"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {c.discoverProcess}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              {c.reviewsEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">{c.reviewsTitle}</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {c.testimonials.map((t) => (
              <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 lg:py-28">
        <div className="container-tight">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{c.ctaTitle}</h2>
            <p className="max-w-xl text-primary-foreground/90">{c.ctaSubtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-base font-medium text-foreground shadow-lg transition-all hover:bg-muted"
              >
                {c.quote}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
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
