import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowRight, Gift, Tag } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const PAGE_TITLE = "Contact | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Contactez Pressing Zerktouni au 237 Boulevard Mohamed Zerktouni, Casablanca. Devis gratuit, téléphone, email et itinéraire.";
const PAGE_KEYWORDS =
  "contact pressing Casablanca, adresse pressing Zerktouni, téléphone pressing Casablanca, devis pressing gratuit Casablanca";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/contact",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Contact", path: "/contact" },
      ],
    }),
  component: Contact,
});

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    promoTitle: string;
    promoText: (parts: { costume: string; tailleur: string; price: string }) => React.ReactNode;
    loyaltyTitle: string;
    loyaltyText: (parts: { washes: string; free: string }) => React.ReactNode;
    offered: string;
    addressTitle: string;
    hoursTitle: string;
    hours: string;
    closed: string;
    phoneTitle: string;
    emailTitle: string;
    directions: string;
    formTitle: string;
    formSubtitle: string;
    sentTitle: string;
    sentText: string;
    sendAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  }
> = {
  fr: {
    eyebrow: "Contact & adresse",
    title: "Venez nous rendre visite",
    subtitle:
      "Situé en plein centre-ville de Casablanca, notre pressing est facilement accessible. Nous sommes à votre écoute pour tous vos besoins.",
    promoTitle: "Promo mercredi & vendredi",
    promoText: ({ costume, tailleur, price }) => (
      <>
        Chaque mercredi et vendredi, profitez du nettoyage de vos{" "}
        <span className="font-semibold text-foreground">{costume}</span> et{" "}
        <span className="font-semibold text-foreground">{tailleur}</span> à{" "}
        <span className="font-semibold text-foreground">{price}</span> seulement. Offre valable uniquement ces deux
        jours, dans la limite des places disponibles.
      </>
    ),
    loyaltyTitle: "Notre carte de fidélité",
    loyaltyText: ({ washes, free }) => (
      <>
        Demandez votre carte de fidélité dès votre premier passage. Chaque lavage vous rapporte un cachet : après{" "}
        <span className="font-semibold text-foreground">{washes}</span>, votre{" "}
        <span className="font-semibold text-foreground">{free}</span>.
      </>
    ),
    offered: "Offert",
    addressTitle: "Adresse",
    hoursTitle: "Horaires d'ouverture",
    hours: "Lundi – Samedi : 8h00 – 20h00",
    closed: "Dimanche : Fermé",
    phoneTitle: "Téléphone",
    emailTitle: "Email",
    directions: "Itinéraire",
    formTitle: "Demander un devis gratuit",
    formSubtitle: "Remplissez ce formulaire et nous vous recontactons rapidement.",
    sentTitle: "Demande envoyée !",
    sentText: "Merci de nous avoir contactés. Notre équipe vous rappellera dans les plus brefs délais.",
    sendAnother: "Envoyer une nouvelle demande",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    phoneLabel: "Téléphone",
    phonePlaceholder: "06 12 34 56 78",
    serviceLabel: "Service souhaité",
    serviceOptions: ["Pressing vêtements", "Costumes & cérémonies", "Linge de maison", "Sacs & chaussures", "Autre"],
    messageLabel: "Message",
    messagePlaceholder: "Décrivez vos besoins...",
    submit: "Envoyer ma demande",
  },
  en: {
    eyebrow: "Contact & address",
    title: "Come visit us",
    subtitle:
      "Located right in downtown Casablanca, our dry cleaner is easy to reach. We're here to help with all your needs.",
    promoTitle: "Wed & Fri promo",
    promoText: ({ costume, tailleur, price }) => (
      <>
        Every Wednesday and Friday, enjoy cleaning of your{" "}
        <span className="font-semibold text-foreground">{costume}</span> and{" "}
        <span className="font-semibold text-foreground">{tailleur}</span> for just{" "}
        <span className="font-semibold text-foreground">{price}</span>. Offer valid only on these two days, subject
        to availability.
      </>
    ),
    loyaltyTitle: "Our loyalty card",
    loyaltyText: ({ washes, free }) => (
      <>
        Ask for your loyalty card on your first visit. Every wash earns you a stamp: after{" "}
        <span className="font-semibold text-foreground">{washes}</span>, your{" "}
        <span className="font-semibold text-foreground">{free}</span>.
      </>
    ),
    offered: "Free",
    addressTitle: "Address",
    hoursTitle: "Opening hours",
    hours: "Monday – Saturday: 8am – 8pm",
    closed: "Sunday: Closed",
    phoneTitle: "Phone",
    emailTitle: "Email",
    directions: "Directions",
    formTitle: "Request a free quote",
    formSubtitle: "Fill in this form and we'll get back to you shortly.",
    sentTitle: "Request sent!",
    sentText: "Thanks for contacting us. Our team will call you back as soon as possible.",
    sendAnother: "Send another request",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "06 12 34 56 78",
    serviceLabel: "Service needed",
    serviceOptions: ["Clothes dry cleaning", "Suits & ceremonies", "Home linen", "Bags & shoes", "Other"],
    messageLabel: "Message",
    messagePlaceholder: "Describe what you need...",
    submit: "Send my request",
  },
  ar: {
    eyebrow: "التواصل والعنوان",
    title: "تفضلوا بزيارتنا",
    subtitle: "يقع برسينغنا في قلب وسط مدينة الدار البيضاء، ويسهل الوصول إليه. نحن في خدمتكم لتلبية جميع احتياجاتكم.",
    promoTitle: "عرض الأربعاء والجمعة",
    promoText: ({ costume, tailleur, price }) => (
      <>
        كل أربعاء وجمعة، استفيدوا من تنظيف <span className="font-semibold text-foreground">{costume}</span> و
        <span className="font-semibold text-foreground">{tailleur}</span> بـ
        <span className="font-semibold text-foreground">{price}</span> فقط. العرض ساري في هذين اليومين فقط، وفي حدود
        الأماكن المتاحة.
      </>
    ),
    loyaltyTitle: "بطاقة الولاء لدينا",
    loyaltyText: ({ washes, free }) => (
      <>
        اطلبوا بطاقة الولاء الخاصة بكم منذ أول زيارة. كل غسلة تمنحكم ختما: بعد{" "}
        <span className="font-semibold text-foreground">{washes}</span>، تحصلون على{" "}
        <span className="font-semibold text-foreground">{free}</span>.
      </>
    ),
    offered: "مجاني",
    addressTitle: "العنوان",
    hoursTitle: "ساعات العمل",
    hours: "الاثنين – السبت: 8:00 – 20:00",
    closed: "الأحد: مغلق",
    phoneTitle: "الهاتف",
    emailTitle: "البريد الإلكتروني",
    directions: "الاتجاهات",
    formTitle: "اطلبوا عرض سعر مجاني",
    formSubtitle: "املأوا هذه الاستمارة وسنتواصل معكم في أقرب وقت.",
    sentTitle: "تم إرسال الطلب!",
    sentText: "شكرا لتواصلكم معنا. سيتصل بكم فريقنا في أقرب وقت ممكن.",
    sendAnother: "إرسال طلب جديد",
    nameLabel: "الاسم",
    namePlaceholder: "اسمكم",
    phoneLabel: "الهاتف",
    phonePlaceholder: "06 12 34 56 78",
    serviceLabel: "الخدمة المطلوبة",
    serviceOptions: ["كي وتنظيف الملابس", "البدلات والمناسبات", "بياضات المنزل", "الحقائب والأحذية", "أخرى"],
    messageLabel: "الرسالة",
    messagePlaceholder: "صفوا احتياجاتكم...",
    submit: "إرسال طلبي",
  },
};

function Contact() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            {c.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{c.subtitle}</p>
        </div>
      </section>

      <section className="border-b border-border bg-brand-50 py-12">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-background p-6 text-center shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Tag className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{c.promoTitle}</h2>
              <p className="text-muted-foreground">
                {c.promoText({
                  costume: lang === "fr" ? "costumes (hommes)" : lang === "ar" ? "بدلات (رجالية)" : "suits (men)",
                  tailleur:
                    lang === "fr" ? "tailleurs (femmes)" : lang === "ar" ? "تياءير (نسائية)" : "skirt suits (women)",
                  price: "45 DH",
                })}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-background p-6 text-center shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Gift className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{c.loyaltyTitle}</h2>
              <p className="text-muted-foreground">
                {c.loyaltyText({
                  washes: lang === "fr" ? "4 lavages tamponnés" : lang === "ar" ? "4 غسلات مختومة" : "4 stamped washes",
                  free: lang === "fr" ? "5ème lavage est offert" : lang === "ar" ? "الغسلة الخامسة مجانية" : "5th wash is free",
                })}
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/40 bg-background font-display text-sm font-bold text-primary"
                  >
                    {n}
                  </div>
                ))}
                <span className="text-lg text-muted-foreground">+</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-center font-display text-[11px] font-bold leading-tight text-primary-foreground">
                  {c.offered}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{c.addressTitle}</h3>
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
                    <h3 className="font-display text-base font-semibold text-foreground">{c.hoursTitle}</h3>
                    <p className="text-sm text-muted-foreground">
                      {c.hours}
                      <br />
                      {c.closed}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{c.phoneTitle}</h3>
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
                    <h3 className="font-display text-base font-semibold text-foreground">{c.emailTitle}</h3>
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
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6457%2C33.5829%2C-7.6257%2C33.5979&layer=mapnik&marker=33.590421%2C-7.63566"
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
                    {c.directions}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">{c.formTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.formSubtitle}</p>
              {formSubmitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-xl bg-background p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{c.sentTitle}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.sentText}</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    {c.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium text-foreground">
                        {c.nameLabel}
                      </label>
                      <input
                        id="nom"
                        type="text"
                        required
                        placeholder={c.namePlaceholder}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="text-sm font-medium text-foreground">
                        {c.phoneLabel}
                      </label>
                      <input
                        id="telephone"
                        type="tel"
                        required
                        placeholder={c.phonePlaceholder}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      {c.serviceLabel}
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {c.serviceOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      {c.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={c.messagePlaceholder}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-brand-600 hover:shadow-xl"
                  >
                    {c.submit}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
