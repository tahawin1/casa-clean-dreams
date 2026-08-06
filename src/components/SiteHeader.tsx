import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logoImage from "@/assets/logo.png";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const NAV_LINKS: Record<Lang, { to: string; label: string }[]> = {
  fr: [
    { to: "/", label: "Accueil" },
    { to: "/services", label: "Services" },
    { to: "/tarifs", label: "Tarifs" },
    { to: "/commander", label: "Commander" },
    { to: "/avantages", label: "Avantages" },
    { to: "/processus", label: "Processus" },
    { to: "/contact", label: "Contact" },
  ],
  en: [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/tarifs", label: "Pricing" },
    { to: "/commander", label: "Order" },
    { to: "/avantages", label: "Advantages" },
    { to: "/processus", label: "Process" },
    { to: "/contact", label: "Contact" },
  ],
  ar: [
    { to: "/", label: "الرئيسية" },
    { to: "/services", label: "الخدمات" },
    { to: "/tarifs", label: "الأسعار" },
    { to: "/commander", label: "اطلب الآن" },
    { to: "/avantages", label: "مميزاتنا" },
    { to: "/processus", label: "كيف نعمل" },
    { to: "/contact", label: "اتصل بنا" },
  ],
};

const COPY: Record<Lang, { order: string; open: string; close: string }> = {
  fr: { order: "Commander", open: "Ouvrir le menu", close: "Fermer le menu" },
  en: { order: "Order now", open: "Open menu", close: "Close menu" },
  ar: { order: "اطلب الآن", open: "فتح القائمة", close: "إغلاق القائمة" },
};

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const links = NAV_LINKS[lang];
  const c = COPY[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Logo Pressing Zerktouni" className="h-9 w-9 rounded-lg object-contain" />
          <span className="font-display text-lg font-bold text-foreground">
            Pressing <span className="text-primary">Zerktouni</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="tel:+212522363634"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            05 22 36 36 34
          </a>
          <Link
            to="/commander"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-brand-600"
          >
            {c.order}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? c.close : c.open}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="container-tight flex flex-col gap-2 py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-muted text-foreground" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/commander"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {c.order}
            </Link>
            <a
              href="tel:+212522363634"
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground"
            >
              05 22 36 36 34
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
