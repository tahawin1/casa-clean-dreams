import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Minus, Plus, Calendar, User, MessageCircle } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { getPriceCategories, type PriceCategory, type PriceItem } from "@/data/pricing";
import { buildPageHead } from "@/lib/service-head";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

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

const SLOTS = ["08h00 – 12h00", "12h00 – 16h00", "16h00 – 20h00"] as const;

const COPY = {
  fr: {
    stepLabels: ["Articles", "Planification", "Coordonnées", "Résumé"],
    heroEyebrow: "Commander",
    heroTitle: "Passer commande",
    heroSubtitle: "Choisissez vos articles, planifiez la collecte, c'est tout.",
    articlesTitle: "Que voulez-vous nettoyer ?",
    washLabel: "Lavage + repassage",
    ironLabel: "Repassage seul",
    removeAria: "Retirer",
    addAria: "Ajouter",
    planningTitle: "Quand souhaitez-vous le ramassage ?",
    planningSubtitle: "Nous sommes ouverts du lundi au samedi, de 8h à 20h.",
    dateLabel: "Date de ramassage",
    slotLabel: "Créneau souhaité",
    sundayWarning: "Nous sommes fermés le dimanche — merci de choisir un autre jour.",
    contactTitle: "Vos coordonnées",
    contactSubtitle: "Pour que nous puissions venir chercher vos articles.",
    nameLabel: "Nom complet",
    namePlaceholder: "Votre nom",
    phoneLabel: "Téléphone",
    phonePlaceholder: "06 12 34 56 78",
    addressLabel: "Adresse de ramassage",
    addressPlaceholder: "Rue, immeuble, étage, quartier...",
    notesLabel: "Notes (optionnel)",
    notesPlaceholder: "Instructions particulières...",
    summaryTitle: "Résumé de votre commande",
    pickupLabel: "Ramassage",
    contactInfoLabel: "Coordonnées",
    notesPrefix: "Notes",
    confirmButton: "Confirmer et envoyer sur WhatsApp",
    confirmNote:
      "Vous serez redirigé vers WhatsApp avec votre commande déjà rédigée : il ne vous reste qu'à appuyer sur envoyer.",
    prev: "Précédent",
    next: "Suivant",
    cartTitle: "Votre panier",
    article: "article",
    articles: "articles",
    emptyCart: "Aucun article sélectionné",
    subtotal: "Sous-total",
    delivery: "Livraison",
    deliveryFree: "Gratuite",
    total: "Total",
    msg: {
      title: "Nouvelle commande — Pressing Zerktouni",
      items: "Articles :",
      subtotal: "Sous-total",
      delivery: "Livraison",
      free: "gratuite",
      pickup: "Ramassage souhaité",
      name: "Nom",
      phone: "Téléphone",
      address: "Adresse",
      notes: "Notes",
    },
    dateLocale: "fr-FR",
  },
  en: {
    stepLabels: ["Items", "Schedule", "Contact", "Summary"],
    heroEyebrow: "Order",
    heroTitle: "Place your order",
    heroSubtitle: "Choose your items, schedule the pickup, that's it.",
    articlesTitle: "What would you like cleaned?",
    washLabel: "Wash + press",
    ironLabel: "Press only",
    removeAria: "Remove",
    addAria: "Add",
    planningTitle: "When would you like the pickup?",
    planningSubtitle: "We're open Monday to Saturday, 8am to 8pm.",
    dateLabel: "Pickup date",
    slotLabel: "Preferred time slot",
    sundayWarning: "We're closed on Sundays — please choose another day.",
    contactTitle: "Your details",
    contactSubtitle: "So we can come pick up your items.",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "06 12 34 56 78",
    addressLabel: "Pickup address",
    addressPlaceholder: "Street, building, floor, neighborhood...",
    notesLabel: "Notes (optional)",
    notesPlaceholder: "Special instructions...",
    summaryTitle: "Order summary",
    pickupLabel: "Pickup",
    contactInfoLabel: "Contact details",
    notesPrefix: "Notes",
    confirmButton: "Confirm and send via WhatsApp",
    confirmNote: "You'll be redirected to WhatsApp with your order already written up — just tap send.",
    prev: "Back",
    next: "Next",
    cartTitle: "Your cart",
    article: "item",
    articles: "items",
    emptyCart: "No items selected",
    subtotal: "Subtotal",
    delivery: "Delivery",
    deliveryFree: "Free",
    total: "Total",
    msg: {
      title: "New order — Pressing Zerktouni",
      items: "Items:",
      subtotal: "Subtotal",
      delivery: "Delivery",
      free: "free",
      pickup: "Requested pickup",
      name: "Name",
      phone: "Phone",
      address: "Address",
      notes: "Notes",
    },
    dateLocale: "en-GB",
  },
  ar: {
    stepLabels: ["العناصر", "الجدولة", "معلوماتكم", "الملخص"],
    heroEyebrow: "اطلب الآن",
    heroTitle: "قدّموا طلبكم",
    heroSubtitle: "اختاروا قطعكم، حددوا موعد الاستلام، هذا كل شيء.",
    articlesTitle: "ماذا تريدون تنظيفه؟",
    washLabel: "غسيل + كي",
    ironLabel: "كي فقط",
    removeAria: "إزالة",
    addAria: "إضافة",
    planningTitle: "متى تريدون الاستلام؟",
    planningSubtitle: "نحن مفتوحون من الاثنين إلى السبت، من 8 صباحا إلى 8 مساء.",
    dateLabel: "تاريخ الاستلام",
    slotLabel: "الفترة المفضلة",
    sundayWarning: "نحن مغلقون يوم الأحد — الرجاء اختيار يوم آخر.",
    contactTitle: "معلوماتكم",
    contactSubtitle: "لكي نتمكن من القدوم لاستلام قطعكم.",
    nameLabel: "الاسم الكامل",
    namePlaceholder: "اسمكم",
    phoneLabel: "الهاتف",
    phonePlaceholder: "06 12 34 56 78",
    addressLabel: "عنوان الاستلام",
    addressPlaceholder: "الشارع، العمارة، الطابق، الحي...",
    notesLabel: "ملاحظات (اختياري)",
    notesPlaceholder: "تعليمات خاصة...",
    summaryTitle: "ملخص طلبكم",
    pickupLabel: "الاستلام",
    contactInfoLabel: "معلومات التواصل",
    notesPrefix: "ملاحظات",
    confirmButton: "تأكيد الإرسال عبر واتساب",
    confirmNote: "سيتم توجيهكم إلى واتساب مع طلبكم جاهزا للإرسال: لن يبقى سوى الضغط على زر الإرسال.",
    prev: "السابق",
    next: "التالي",
    cartTitle: "سلتكم",
    article: "منتج",
    articles: "منتجات",
    emptyCart: "لم يتم اختيار أي منتج",
    subtotal: "المجموع الفرعي",
    delivery: "التوصيل",
    deliveryFree: "مجاني",
    total: "المجموع",
    msg: {
      title: "طلب جديد — برسينغ الزرقطوني",
      items: "المنتجات:",
      subtotal: "المجموع الفرعي",
      delivery: "التوصيل",
      free: "مجاني",
      pickup: "موعد الاستلام المطلوب",
      name: "الاسم",
      phone: "الهاتف",
      address: "العنوان",
      notes: "ملاحظات",
    },
    dateLocale: "ar-MA",
  },
} satisfies Record<Lang, Record<string, unknown>>;

function parsePrice(price: string): number | null {
  const match = price.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(iso: string, locale: string) {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(
    date,
  );
}

function Commander() {
  const { lang } = useLanguage();
  const c = COPY[lang];
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
      c.msg.title,
      "",
      c.msg.items,
      ...lines,
      "",
      `${c.msg.subtotal} : ${subtotal} DH`,
      `${c.msg.delivery} : ${c.msg.free}`,
      "",
      `${c.msg.pickup} : ${pickupDate ? formatDate(pickupDate, c.dateLocale) : "—"} · ${pickupSlot}`,
      "",
      `${c.msg.name} : ${name}`,
      `${c.msg.phone} : ${phone}`,
      `${c.msg.address} : ${address}`,
      ...(notes ? [`${c.msg.notes} : ${notes}`] : []),
    ].join("\n");
  }, [cartLines, subtotal, pickupDate, pickupSlot, name, phone, address, notes, c]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-12 lg:py-16">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            {c.heroEyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">{c.heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{c.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-tight">
          <Stepper current={step} labels={c.stepLabels} />

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
                    <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                    {c.prev}
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
                    {c.next}
                    <ChevronRight className="h-4 w-4 rtl:rotate-180" />
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

function Stepper({ current, labels }: { current: number; labels: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
      {labels.map((label, index) => {
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
            {stepNumber < labels.length && (
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
  const { lang } = useLanguage();
  const c = COPY[lang];
  const categories = getPriceCategories(lang);
  const category = categories[activeCategory] ?? categories[0]!;
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{c.articlesTitle}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat, index) => (
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
  const { lang } = useLanguage();
  const c = COPY[lang];
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
            label={c.washLabel}
            price={item.wash}
            quantity={washQty}
            removeAria={c.removeAria}
            addAria={c.addAria}
            onDecrement={() => onChange(item.name, "wash", c.washLabel, washPrice, -1)}
            onIncrement={() => onChange(item.name, "wash", c.washLabel, washPrice, 1)}
          />
        )}
        {ironPrice !== null && (
          <QuantityChip
            label={c.ironLabel}
            price={item.iron}
            quantity={ironQty}
            removeAria={c.removeAria}
            addAria={c.addAria}
            onDecrement={() => onChange(item.name, "iron", c.ironLabel, ironPrice, -1)}
            onIncrement={() => onChange(item.name, "iron", c.ironLabel, ironPrice, 1)}
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
  removeAria,
  addAria,
  onDecrement,
  onIncrement,
}: {
  label: string;
  price: string;
  quantity: number;
  removeAria: string;
  addAria: string;
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
        aria-label={`${removeAria} ${label}`}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:opacity-30"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-4 shrink-0 text-center text-sm font-semibold text-foreground">{quantity}</span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label={`${addAria} ${label}`}
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
  const { lang } = useLanguage();
  const c = COPY[lang];
  const isSunday = pickupDate ? new Date(`${pickupDate}T00:00:00`).getDay() === 0 : false;
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{c.planningTitle}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{c.planningSubtitle}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup-date" className="text-sm font-medium text-foreground">
            {c.dateLabel}
          </label>
          <input
            id="pickup-date"
            type="date"
            min={todayISO()}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          />
          {isSunday && <p className="mt-2 text-sm text-destructive">{c.sundayWarning}</p>}
        </div>
        <div>
          <label htmlFor="pickup-slot" className="text-sm font-medium text-foreground">
            {c.slotLabel}
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
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{c.contactTitle}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{c.contactSubtitle}</p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="order-name" className="text-sm font-medium text-foreground">
              {c.nameLabel}
            </label>
            <input
              id="order-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={c.namePlaceholder}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="order-phone" className="text-sm font-medium text-foreground">
              {c.phoneLabel}
            </label>
            <input
              id="order-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={c.phonePlaceholder}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>
        <div>
          <label htmlFor="order-address" className="text-sm font-medium text-foreground">
            {c.addressLabel}
          </label>
          <textarea
            id="order-address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={c.addressPlaceholder}
            className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="order-notes" className="text-sm font-medium text-foreground">
            {c.notesLabel}
          </label>
          <textarea
            id="order-notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={c.notesPlaceholder}
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
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{c.summaryTitle}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            {c.pickupLabel}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{pickupDate ? formatDate(pickupDate, c.dateLocale) : "—"}</p>
          <p className="text-sm text-muted-foreground">{pickupSlot}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <User className="h-4 w-4 text-primary" />
            {c.contactInfoLabel}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{phone}</p>
          <p className="text-sm text-muted-foreground">{address}</p>
          {notes && (
            <p className="mt-1 text-sm text-muted-foreground">
              {c.notesPrefix} : {notes}
            </p>
          )}
        </div>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:brightness-95"
      >
        <MessageCircle className="h-5 w-5" />
        {c.confirmButton}
      </a>
      <p className="mt-3 text-sm text-muted-foreground">{c.confirmNote}</p>
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
  const { lang } = useLanguage();
  const c = COPY[lang];
  return (
    <div className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
      <h3 className="font-display text-lg font-semibold text-foreground">{c.cartTitle}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {itemCount} {itemCount > 1 ? c.articles : c.article}
      </p>
      {lines.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">{c.emptyCart}</p>
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
          <span>{c.subtotal}</span>
          <span>{subtotal} DH</span>
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <span>{c.delivery}</span>
          <span className="font-medium text-primary">{c.deliveryFree}</span>
        </div>
        <div className="flex items-center justify-between font-display text-base font-bold text-foreground">
          <span>{c.total}</span>
          <span>{subtotal} DH</span>
        </div>
      </div>
    </div>
  );
}
