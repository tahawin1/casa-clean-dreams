import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const PAGE_TITLE = "Politique de confidentialité | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION =
  "Politique de confidentialité de Pressing Zerktouni : quelles données sont collectées via ce site, pourquoi, et comment elles sont protégées.";
const PAGE_KEYWORDS = "politique de confidentialité pressing Zerktouni, protection des données pressing Casablanca";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/politique-confidentialite",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Politique de confidentialité", path: "/politique-confidentialite" },
      ],
    }),
  component: PolitiqueConfidentialite,
});

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    updated: string;
    sections: { title: string; body: React.ReactNode }[];
  }
> = {
  fr: {
    eyebrow: "Informations",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : août 2026",
    sections: [
      {
        title: "Données collectées",
        body: (
          <p>
            Lorsque vous utilisez le formulaire de contact ou la page « Commander », nous collectons uniquement les
            informations que vous saisissez vous-même : nom, numéro de téléphone, adresse (pour le ramassage),
            service souhaité et message ou notes éventuelles.
          </p>
        ),
      },
      {
        title: "Utilisation des données",
        body: (
          <p>
            Ces informations sont utilisées exclusivement pour répondre à votre demande de devis, organiser le
            ramassage et la livraison de vos articles, et vous contacter au sujet de votre commande. Elles ne sont
            ni vendues, ni cédées, ni utilisées à des fins publicitaires.
          </p>
        ),
      },
      {
        title: "WhatsApp",
        body: (
          <p>
            Le bouton WhatsApp ouvre une conversation que vous initiez vous-même, depuis votre propre appareil, vers
            le numéro de Pressing Zerktouni. Aucune donnée n'est transmise automatiquement à WhatsApp par notre site.
          </p>
        ),
      },
      {
        title: "Cookies",
        body: (
          <p>
            Ce site n'utilise pas de cookies publicitaires ni de traceurs tiers à des fins de suivi ou de profilage.
            Seuls des éléments techniques strictement nécessaires au bon fonctionnement du site peuvent être
            utilisés (par exemple, la mémorisation de votre langue préférée).
          </p>
        ),
      },
      {
        title: "Conservation des données",
        body: (
          <p>
            Vos informations sont conservées uniquement le temps nécessaire au traitement de votre demande ou de
            votre commande.
          </p>
        ),
      },
      {
        title: "Vos droits",
        body: (
          <p>
            Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données
            personnelles en nous écrivant à{" "}
            <a href="mailto:contact@pressingzerktouni.ma" className="text-primary hover:underline">
              contact@pressingzerktouni.ma
            </a>
            .
          </p>
        ),
      },
    ],
  },
  en: {
    eyebrow: "Information",
    title: "Privacy Policy",
    updated: "Last updated: August 2026",
    sections: [
      {
        title: "Data we collect",
        body: (
          <p>
            When you use the contact form or the "Order" page, we only collect the information you enter yourself:
            name, phone number, address (for pickup), the service you want and any message or notes.
          </p>
        ),
      },
      {
        title: "How we use your data",
        body: (
          <p>
            This information is used solely to respond to your quote request, organize the pickup and delivery of
            your items, and contact you about your order. It is never sold, shared, or used for advertising
            purposes.
          </p>
        ),
      },
      {
        title: "WhatsApp",
        body: (
          <p>
            The WhatsApp button opens a conversation that you start yourself, from your own device, to Pressing
            Zerktouni's number. No data is automatically transmitted to WhatsApp by our site.
          </p>
        ),
      },
      {
        title: "Cookies",
        body: (
          <p>
            This site does not use advertising cookies or third-party trackers for tracking or profiling purposes.
            Only technical elements strictly necessary for the site to function may be used (for example,
            remembering your preferred language).
          </p>
        ),
      },
      {
        title: "Data retention",
        body: <p>Your information is kept only for as long as necessary to process your request or order.</p>,
      },
      {
        title: "Your rights",
        body: (
          <p>
            You may request access to, correction of, or deletion of your personal data at any time by writing to{" "}
            <a href="mailto:contact@pressingzerktouni.ma" className="text-primary hover:underline">
              contact@pressingzerktouni.ma
            </a>
            .
          </p>
        ),
      },
    ],
  },
  ar: {
    eyebrow: "معلومات",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: غشت 2026",
    sections: [
      {
        title: "البيانات التي نجمعها",
        body: (
          <p>
            عند استخدامكم لاستمارة التواصل أو صفحة «اطلب الآن»، نجمع فقط المعلومات التي تدخلونها بأنفسكم: الاسم،
            رقم الهاتف، العنوان (للاستلام)، الخدمة المطلوبة وأي رسالة أو ملاحظات.
          </p>
        ),
      },
      {
        title: "استخدام البيانات",
        body: (
          <p>
            تُستخدم هذه المعلومات حصريا للرد على طلب عرض السعر، وتنظيم استلام وتوصيل قطعكم، والتواصل معكم بخصوص
            طلبكم. لا تُباع أو تُشارك أو تُستخدم لأغراض إعلانية.
          </p>
        ),
      },
      {
        title: "واتساب",
        body: (
          <p>
            زر واتساب يفتح محادثة تبدؤونها بأنفسكم، من جهازكم الخاص، نحو رقم برسينغ الزرقطوني. لا تُرسل أي بيانات
            تلقائيا إلى واتساب من طرف موقعنا.
          </p>
        ),
      },
      {
        title: "ملفات تعريف الارتباط (كوكيز)",
        body: (
          <p>
            لا يستخدم هذا الموقع ملفات تعريف ارتباط إعلانية أو أدوات تتبع من أطراف ثالثة لأغراض التتبع أو التنميط.
            تُستخدم فقط عناصر تقنية ضرورية لعمل الموقع بشكل صحيح (مثل حفظ لغتكم المفضلة).
          </p>
        ),
      },
      {
        title: "مدة الاحتفاظ بالبيانات",
        body: <p>يتم الاحتفاظ بمعلوماتكم فقط للمدة اللازمة لمعالجة طلبكم أو الاستجابة له.</p>,
      },
      {
        title: "حقوقكم",
        body: (
          <p>
            يمكنكم في أي وقت طلب الوصول إلى بياناتكم الشخصية أو تصحيحها أو حذفها بالكتابة إلينا على{" "}
            <a href="mailto:contact@pressingzerktouni.ma" className="text-primary hover:underline">
              contact@pressingzerktouni.ma
            </a>
            .
          </p>
        ),
      },
    ],
  },
};

function PolitiqueConfidentialite() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="gradient-hero py-16 lg:py-20">
        <div className="container-tight text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            {c.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">{c.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{c.updated}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-tight mx-auto max-w-3xl space-y-10">
          {c.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{section.title}</h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">{section.body}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
