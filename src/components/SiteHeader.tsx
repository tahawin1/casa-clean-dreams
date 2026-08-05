import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logoImage from "@/assets/logo.jpg";

const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/avantages", label: "Avantages" },
  { to: "/processus", label: "Processus" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Logo Pressing Zerktouni" className="h-9 w-9 rounded-lg object-cover" />
          <span className="font-display text-lg font-bold text-foreground">
            Pressing <span className="text-primary">Zerktouni</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
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
          <a
            href="tel:+212522363634"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            05 22 36 36 34
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-brand-600"
          >
            Devis gratuit
          </Link>
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
            {NAV_LINKS.map((link) => (
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
  );
}
