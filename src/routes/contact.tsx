import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowRight, Gift } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const SITE_URL = "https://casa-clean-dreams.lovable.app/contact";
const PAGE_TITLE = "Contact | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Contactez Pressing Zerktouni au 237 Boulevard Mohamed Zerktouni, Casablanca. Devis gratuit, téléphone, email et itinéraire.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Contact,
});

function Contact() {
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
            Contact & adresse
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Venez nous rendre visite
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Situé en plein centre-ville de Casablanca, notre pressing est facilement accessible. Nous sommes à votre écoute pour tous vos besoins.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-brand-50 py-10">
        <div className="container-tight">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Gift className="h-6 w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Notre carte de fidélité
            </h2>
            <p className="text-muted-foreground">
              Demandez votre carte de fidélité Pressing Zerktouni dès votre premier passage. Chaque lavage vous rapporte un cachet : après{" "}
              <span className="font-semibold text-foreground">4 lavages tamponnés</span>, votre{" "}
              <span className="font-semibold text-foreground">5ème lavage est offert</span>.
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
                Offert
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
              <h2 className="font-display text-xl font-semibold text-foreground">Demander un devis gratuit</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Remplissez ce formulaire et nous vous recontactons rapidement.
              </p>
              {formSubmitted ? (
                <div className="mt-6 flex flex-col items-center justify-center rounded-xl bg-background p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    Demande envoyée !
                  </h3>
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

      <SiteFooter />
    </div>
  );
}
