import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

import logoImage from "@/assets/logo.png";
import { getServices } from "@/data/services";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const COPY: Record<
  Lang,
  {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    order: string;
    pricing: string;
    advantages: string;
    process: string;
    contact: string;
    jobs: string;
    contactTitle: string;
    hours: string;
    rights: string;
    privacy: string;
    legal: string;
  }
> = {
  fr: {
    tagline: "Votre pressing premium au centre-ville de Casablanca. Qualité et rapidité au service de vos vêtements.",
    servicesTitle: "Services",
    companyTitle: "Entreprise",
    order: "Commander",
    pricing: "Tarifs",
    advantages: "Nos avantages",
    process: "Notre processus",
    contact: "Contact",
    jobs: "Recrutement",
    contactTitle: "Contact",
    hours: "Ouvert tous les jours : 8h00 – 20h00",
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    legal: "Mentions légales",
  },
  en: {
    tagline: "Your premium dry cleaner in downtown Casablanca. Quality and speed for your clothes.",
    servicesTitle: "Services",
    companyTitle: "Company",
    order: "Order",
    pricing: "Pricing",
    advantages: "Our advantages",
    process: "Our process",
    contact: "Contact",
    jobs: "Careers",
    contactTitle: "Contact",
    hours: "Open every day: 8am – 8pm",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    legal: "Legal notice",
  },
  ar: {
    tagline: "برسينغكم الفاخر في وسط مدينة الدار البيضاء. جودة وسرعة في خدمة ملابسكم.",
    servicesTitle: "الخدمات",
    companyTitle: "الشركة",
    order: "اطلب الآن",
    pricing: "الأسعار",
    advantages: "مميزاتنا",
    process: "كيف نعمل",
    contact: "اتصل بنا",
    jobs: "التوظيف",
    contactTitle: "اتصل بنا",
    hours: "مفتوح كل أيام الأسبوع: 8:00 – 20:00",
    rights: "جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    legal: "الإشعار القانوني",
  },
};

export function SiteFooter() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const services = getServices(lang);

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-tight">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Logo Pressing Zerktouni" className="h-9 w-9 rounded-lg object-contain" />
              <span className="font-display text-lg font-bold text-foreground">
                Pressing <span className="text-primary">Zerktouni</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">{c.tagline}</p>
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
            <h3 className="font-display text-sm font-semibold text-foreground">{c.servicesTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={service.path} className="hover:text-primary">
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">{c.companyTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/commander" className="hover:text-primary">
                  {c.order}
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="hover:text-primary">
                  {c.pricing}
                </Link>
              </li>
              <li>
                <Link to="/avantages" className="hover:text-primary">
                  {c.advantages}
                </Link>
              </li>
              <li>
                <Link to="/processus" className="hover:text-primary">
                  {c.process}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  {c.contact}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@pressingzerktouni.ma?subject=Candidature%20spontan%C3%A9e"
                  className="hover:text-primary"
                >
                  {c.jobs}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">{c.contactTitle}</h3>
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
              <li>{c.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Pressing Zerktouni. {c.rights}</p>
          <div className="flex gap-6">
            <Link to="/politique-confidentialite" className="hover:text-primary">
              {c.privacy}
            </Link>
            <Link to="/mentions-legales" className="hover:text-primary">
              {c.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
