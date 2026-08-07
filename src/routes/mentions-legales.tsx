import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/data/services";
import { buildPageHead } from "@/lib/service-head";
import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const PAGE_TITLE = "Mentions légales | Pressing Zerktouni Casablanca";
const PAGE_DESCRIPTION = "Mentions légales de Pressing Zerktouni : éditeur du site, hébergement, propriété intellectuelle.";
const PAGE_KEYWORDS = "mentions légales pressing Zerktouni, informations légales pressing Casablanca";

export const Route = createFileRoute("/mentions-legales")({
  head: () =>
    buildPageHead(SITE_URL, {
      path: "/mentions-legales",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: PAGE_KEYWORDS,
      breadcrumb: [
        { name: "Accueil", path: "/" },
        { name: "Mentions légales", path: "/mentions-legales" },
      ],
    }),
  component: MentionsLegales,
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
    title: "Mentions légales",
    updated: "Dernière mise à jour : août 2026",
    sections: [
      {
        title: "Éditeur du site",
        body: (
          <>
            <p>Le présent site est édité par Pressing Zerktouni.</p>
            <p>
              Adresse : 237 Boulevard Mohamed Zerktouni, Casablanca, Maroc
              <br />
              Téléphone : 05 22 36 36 34
              <br />
              Email : contact@pressingzerktouni.ma
            </p>
          </>
        ),
      },
      {
        title: "Hébergement",
        body: (
          <p>
            Ce site est hébergé par Vercel Inc., San Francisco, États-Unis.{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              vercel.com
            </a>
          </p>
        ),
      },
      {
        title: "Propriété intellectuelle",
        body: (
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logo, mise en page) est la propriété de
            Pressing Zerktouni, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou
            partielle, sans autorisation préalable, est interdite.
          </p>
        ),
      },
      {
        title: "Responsabilité",
        body: (
          <p>
            Pressing Zerktouni s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne peut
            garantir qu'elles soient exemptes d'erreurs. Les tarifs indiqués sont donnés à titre indicatif et
            peuvent être confirmés lors de la prise en charge de vos articles.
          </p>
        ),
      },
      {
        title: "Contact",
        body: (
          <p>
            Pour toute question relative à ces mentions légales, vous pouvez nous contacter à l'adresse{" "}
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
    title: "Legal Notice",
    updated: "Last updated: August 2026",
    sections: [
      {
        title: "Site publisher",
        body: (
          <>
            <p>This website is published by Pressing Zerktouni.</p>
            <p>
              Address: 237 Boulevard Mohamed Zerktouni, Casablanca, Morocco
              <br />
              Phone: 05 22 36 36 34
              <br />
              Email: contact@pressingzerktouni.ma
            </p>
          </>
        ),
      },
      {
        title: "Hosting",
        body: (
          <p>
            This site is hosted by Vercel Inc., San Francisco, USA.{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              vercel.com
            </a>
          </p>
        ),
      },
      {
        title: "Intellectual property",
        body: (
          <p>
            All content on this site (text, images, logo, layout) is the property of Pressing Zerktouni, unless
            stated otherwise. Any reproduction, representation or distribution, in whole or in part, without prior
            authorization, is prohibited.
          </p>
        ),
      },
      {
        title: "Liability",
        body: (
          <p>
            Pressing Zerktouni strives to ensure the accuracy of the information published on this site but cannot
            guarantee it is error-free. Prices shown are indicative and may be confirmed when your items are
            collected.
          </p>
        ),
      },
      {
        title: "Contact",
        body: (
          <p>
            For any question regarding this legal notice, you can reach us at{" "}
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
    title: "الإشعار القانوني",
    updated: "آخر تحديث: غشت 2026",
    sections: [
      {
        title: "ناشر الموقع",
        body: (
          <>
            <p>هذا الموقع منشور من طرف برسينغ الزرقطوني.</p>
            <p>
              العنوان: 237 شارع محمد الزرقطوني، الدار البيضاء، المغرب
              <br />
              الهاتف: 05 22 36 36 34
              <br />
              البريد الإلكتروني: contact@pressingzerktouni.ma
            </p>
          </>
        ),
      },
      {
        title: "الاستضافة",
        body: (
          <p>
            يستضاف هذا الموقع من طرف Vercel Inc.، سان فرانسيسكو، الولايات المتحدة الأمريكية.{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              vercel.com
            </a>
          </p>
        ),
      },
      {
        title: "الملكية الفكرية",
        body: (
          <p>
            جميع محتويات هذا الموقع (النصوص، الصور، الشعار، التصميم) ملك لبرسينغ الزرقطوني، ما لم يُذكر خلاف ذلك.
            يُمنع أي نسخ أو تمثيل أو نشر، كليا أو جزئيا، دون إذن مسبق.
          </p>
        ),
      },
      {
        title: "المسؤولية",
        body: (
          <p>
            يسعى برسينغ الزرقطوني إلى ضمان دقة المعلومات المنشورة على هذا الموقع، لكنه لا يضمن خلوها من الأخطاء.
            الأسعار المذكورة إرشادية ويتم تأكيدها عند استلام قطعكم.
          </p>
        ),
      },
      {
        title: "التواصل",
        body: (
          <p>
            لأي سؤال يتعلق بهذا الإشعار القانوني، يمكنكم التواصل معنا على{" "}
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

function MentionsLegales() {
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
