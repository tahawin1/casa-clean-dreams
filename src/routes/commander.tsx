import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Minus, Plus, Calendar, User, MessageCircle } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { PRICE_CATEGORIES, type PriceCategory, type PriceItem } from "@/data/pricing";
import { buildPageHead } from "@/lib/service-head";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const PAGE_TITLE = "Commander un ramassage | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Choisissez vos articles, planifiez le ramassage et recevez votre récapitulatif de commande directement sur WhatsApp. Pressing Zerktouni, Casablanca.";

export const Route = createFileRoute("/commander")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/commander",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: "commander pressing Casablanca, ramassage pressing Casablanca, commande en ligne pressing Zerktouni",
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Commander", path: "/commander" },
      ],
    }),
  component: Commander,
});

type ItemType = "wash" | "iron";

type CartLine = {
  key: string;
  itemName: string;
  typeLabel: string;
  unitPrice: number;
  quantity: number;
};

const STEP_LABELS = ["Articles", "Planification", "Coordonnées", "Résumé"] as const;
const SLOTS = ["08h00 – 12h00", "12h00 – 16h00", "16h00 – 20h00"] as const;

function parsePrice(price: string): number | null {
  const match = price.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDateFr(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(date);
}

function Commander() {
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState(0);
  const [cart, setCart] = useState<Record<string, CartLine>>({});
  const [pickupDate, setPickupDate] = useState("");
  const [pickupSlot, setPickupSlot] = useState<string>(SLOTS[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const cartLines = useMemo(() => Object.values(cart).filter((line) => line.quantity > 0), [cart]);
  const itemCount = cartLines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cartLines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0);

  function updateQuantity(itemName: string, type: ItemType, typeLabel: string, unitPrice: number, delta: number) {
    const key = `${itemName}__${type}`;
    setCart((prev) => {
      const nextQty = Math.max(0, (prev[key]?.quantity ?? 0) + delta);
      return { ...prev, [key]: { key, itemName, typeLabel, unitPrice, quantity: nextQty } };
    });
  }

  const canGoStep2 = cartLines.length > 0;
  const canGoStep3 = pickupDate !== "";
  const canGoStep4 = name.trim() !== "" && phone.trim() !== "" && address.trim() !== "";
  const canProceed = step === 1 ? canGoStep2 : step === 2 ? canGoStep3 : canGoStep4;

  const whatsappMessage = useMemo(() => {
    const lines = cartLines.map(
      (line) => `• ${line.itemName} (${line.typeLabel}) x${line.quantity} — ${line.quantity * line.unitPrice} DH`,
    );
    return [
      "Nouvelle commande — Pressing Zerktouni",
      "",
      "Articles :",
      ...lines,
      "",
      `Sous-total : ${subtotal} DH`,
      "Livraison : gratuite",
      "",
      `Ramassage souhaité : ${pickupDate ? formatDateFr(pickupDate) : "—"} · ${pickupSlot}`,
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Adresse : ${address}`,
      ...(notes ? [`Notes : ${notes}`] : []),
    ].join("\n");
  }, [cartLines, subtotal, pickupDate, pickupSlot, name, phone, address, notes]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-12 lg:py-16">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Commander
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Passer commande
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choisissez vos articles, planifiez la collecte, c'est tout.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-tight">
          <Stepper current={step} />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              {step === 1 && (
                <StepArticles activeCategory={activeCategory} setActiveCategory={setActiveCategory} cart={cart} onChange={updateQuantity} />
              )}
              {step === 2 && (
                <StepPlanning pickupDate={pickupDate} setPickupDate={setPickupDate} pickupSlot={pickupSlot} setPickupSlot={setPickupSlot} />
              )}
              {step === 3 && (
                <StepContact
                  name={name}
                  setName={setName}
                  phone={phone}
                  setPhone={setPhone}
                  address={address}
                  setAddress={setAddress}
                  notes={notes}
                  setNotes={setNotes}
                />
              )}
              {step === 4 && (
                <StepSummary
                  pickupDate={pickupDate}
                  pickupSlot={pickupSlot}
                  name={name}
                  phone={phone}
                  address={address}
                  notes={notes}
                  whatsappUrl={getWhatsAppUrl(whatsappMessage)}
                />
              )}

              <div className="mt-8 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Précédent
                  </button>
                ) : (
                  <span />
                )}
                {step < 4 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(4, s + 1))}
                    disabled={!canProceed}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/25 transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <CartSidebar lines={cartLines} itemCount={itemCount} subtotal={subtotal} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stepper({ current }: { current: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === current;
        const isDone = stepNumber < current;
        return (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  isDone || isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {isDone ? <Check className="h-4 w-4" /> : stepNumber}
              </div>
              <span className={`hidden text-xs font-medium sm:block ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {label}
              </span>
            </div>
            {stepNumber < STEP_LABELS.length && (
              <div className={`h-px w-6 sm:w-12 ${isDone ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function StepArticles({
  activeCategory,
  setActiveCategory,
  cart,
  onChange,
}: {
  activeCategory: number;
  setActiveCategory: (index: number) => void;
  cart: Record<string, CartLine>;
  onChange: (itemName: string, type: ItemType, typeLabel: string, unitPrice: number, delta: number) => void;
}) {
  const category = PRICE_CATEGORIES[activeCategory] ?? PRICE_CATEGORIES[0]!;
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Que voulez-vous nettoyer ?</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {PRICE_CATEGORIES.map((cat, index) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setActiveCategory(index)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              index === activeCategory
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card p-2 sm:p-4">
        {category.items.map((item) => (
          <ItemRow key={item.name} category={category} item={item} cart={cart} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}

function ItemRow({
  item,
  cart,
  onChange,
}: {
  category: PriceCategory;
  item: PriceItem;
  cart: Record<string, CartLine>;
  onChange: (itemName: string, type: ItemType, typeLabel: string, unitPrice: number, delta: number) => void;
}) {
  const washPrice = parsePrice(item.wash);
  const ironPrice = parsePrice(item.iron);
  const washQty = cart[`${item.name}__wash`]?.quantity ?? 0;
  const ironQty = cart[`${item.name}__iron`]?.quantity ?? 0;

  return (
    <div className="flex flex-col gap-3 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-medium text-foreground">{item.name}</p>
      <div className="flex flex-wrap gap-3">
        {washPrice !== null && (
          <QuantityChip
            label="Lavage + repassage"
            price={item.wash}
            quantity={washQty}
            onDecrement={() => onChange(item.name, "wash", "Lavage + repassage", washPrice, -1)}
            onIncrement={() => onChange(item.name, "wash", "Lavage + repassage", washPrice, 1)}
          />
        )}
        {ironPrice !== null && (
          <QuantityChip
            label="Repassage seul"
            price={item.iron}
            quantity={ironQty}
            onDecrement={() => onChange(item.name, "iron", "Repassage seul", ironPrice, -1)}
            onIncrement={() => onChange(item.name, "iron", "Repassage seul", ironPrice, 1)}
          />
        )}
      </div>
    </div>
  );
}

function QuantityChip({
  label,
  price,
  quantity,
  onDecrement,
  onIncrement,
}: {
  label: string;
  price: string;
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border py-1 pl-3 pr-1 ${
        quantity > 0 ? "border-primary bg-primary/5" : "border-border"
      }`}
    >
      <div className="text-xs leading-tight">
        <div className="font-medium text-foreground">{label}</div>
        <div className="text-muted-foreground">{price}</div>
      </div>
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity === 0}
        aria-label={`Retirer ${label}`}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:opacity-30"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-4 shrink-0 text-center text-sm font-semibold text-foreground">{quantity}</span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label={`Ajouter ${label}`}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-brand-600"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function StepPlanning({
  pickupDate,
  setPickupDate,
  pickupSlot,
  setPickupSlot,
}: {
  pickupDate: string;
  setPickupDate: (value: string) => void;
  pickupSlot: string;
  setPickupSlot: (value: string) => void;
}) {
  const isSunday = pickupDate ? new Date(`${pickupDate}T00:00:00`).getDay() === 0 : false;
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
        Quand souhaitez-vous le ramassage ?
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">Nous sommes ouverts du lundi au samedi, de 8h à 20h.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup-date" className="text-sm font-medium text-foreground">
            Date de ramassage
          </label>
          <input
            id="pickup-date"
            type="date"
            min={todayISO()}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          />
          {isSunday && (
            <p className="mt-2 text-sm text-destructive">Nous sommes fermés le dimanche — merci de choisir un autre jour.</p>
          )}
        </div>
        <div>
          <label htmlFor="pickup-slot" className="text-sm font-medium text-foreground">
            Créneau souhaité
          </label>
          <select
            id="pickup-slot"
            value={pickupSlot}
            onChange={(e) => setPickupSlot(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          >
            {SLOTS.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function StepContact({
  name,
  setName,
  phone,
  setPhone,
  address,
  setAddress,
  notes,
  setNotes,
}: {
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  notes: string;
  setNotes: (value: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Vos coordonnées</h2>
      <p className="mt-2 text-sm text-muted-foreground">Pour que nous puissions venir chercher vos articles.</p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="order-name" className="text-sm font-medium text-foreground">
              Nom complet
            </label>
            <input
              id="order-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="order-phone" className="text-sm font-medium text-foreground">
              Téléphone
            </label>
            <input
              id="order-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="06 12 34 56 78"
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>
        <div>
          <label htmlFor="order-address" className="text-sm font-medium text-foreground">
            Adresse de ramassage
          </label>
          <textarea
            id="order-address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Rue, immeuble, étage, quartier..."
            className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="order-notes" className="text-sm font-medium text-foreground">
            Notes (optionnel)
          </label>
          <textarea
            id="order-notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Instructions particulières..."
            className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>
    </div>
  );
}

function StepSummary({
  pickupDate,
  pickupSlot,
  name,
  phone,
  address,
  notes,
  whatsappUrl,
}: {
  pickupDate: string;
  pickupSlot: string;
  name: string;
  phone: string;
  address: string;
  notes: string;
  whatsappUrl: string;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Résumé de votre commande</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            Ramassage
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{pickupDate ? formatDateFr(pickupDate) : "—"}</p>
          <p className="text-sm text-muted-foreground">{pickupSlot}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <User className="h-4 w-4 text-primary" />
            Coordonnées
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{phone}</p>
          <p className="text-sm text-muted-foreground">{address}</p>
          {notes && <p className="mt-1 text-sm text-muted-foreground">Notes : {notes}</p>}
        </div>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:brightness-95"
      >
        <MessageCircle className="h-5 w-5" />
        Confirmer et envoyer sur WhatsApp
      </a>
      <p className="mt-3 text-sm text-muted-foreground">
        Vous serez redirigé vers WhatsApp avec votre commande déjà rédigée : il ne vous reste qu'à appuyer sur envoyer.
      </p>
    </div>
  );
}

function CartSidebar({
  lines,
  itemCount,
  subtotal,
}: {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
}) {
  return (
    <div className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
      <h3 className="font-display text-lg font-semibold text-foreground">Votre panier</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {itemCount} article{itemCount > 1 ? "s" : ""}
      </p>
      {lines.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">Aucun article sélectionné</p>
      ) : (
        <ul className="mt-4 space-y-3 border-t border-border pt-4">
          {lines.map((line) => (
            <li key={line.key} className="flex items-start justify-between gap-3 text-sm">
              <span className="text-foreground">
                {line.itemName}{" "}
                <span className="text-muted-foreground">
                  ({line.typeLabel}) x{line.quantity}
                </span>
              </span>
              <span className="shrink-0 font-semibold text-primary">{line.quantity * line.unitPrice} DH</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Sous-total</span>
          <span>{subtotal} DH</span>
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Livraison</span>
          <span className="font-medium text-primary">Gratuite</span>
        </div>
        <div className="flex items-center justify-between font-display text-base font-bold text-foreground">
          <span>Total</span>
          <span>{subtotal} DH</span>
        </div>
      </div>
    </div>
  );
}
