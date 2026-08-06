import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

import logoImage from "@/assets/logo.png";
import { services } from "@/data/services";

export function SiteFooter() {
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
            <h3 className="font-display text-sm font-semibold text-foreground">Entreprise</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/tarifs" className="hover:text-primary">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/avantages" className="hover:text-primary">
                  Nos avantages
                </Link>
              </li>
              <li>
                <Link to="/processus" className="hover:text-primary">
                  Notre processus
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
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
          <p>© 2026 Pressing Zerktouni. Tous droits réservés.</p>
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
  );
}
