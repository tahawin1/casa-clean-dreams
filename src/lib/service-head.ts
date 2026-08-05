import type { ServiceContent } from "@/data/services";

export function buildPageHead(
  siteUrl: string,
  opts: {
    path: string;
    title: string;
    description: string;
    keywords: string;
    breadcrumb: { name: string; path: string }[];
    extraSchemas?: object[];
  },
) {
  const url = `${siteUrl}${opts.path}`;

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "keywords", content: opts.keywords },
      { name: "geo.region", content: "MA-CAS" },
      { name: "geo.placename", content: "Casablanca" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: opts.breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.path}`,
          })),
        }),
      },
      ...(opts.extraSchemas ?? []).map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    ],
  };
}

export function buildServiceHead(service: ServiceContent, siteUrl: string) {
  const url = `${siteUrl}${service.path}`;

  return {
    meta: [
      { title: service.title },
      { name: "description", content: service.description },
      { name: "keywords", content: service.keywords },
      { name: "geo.region", content: "MA-CAS" },
      { name: "geo.placename", content: "Casablanca" },
      { property: "og:title", content: service.title },
      { property: "og:description", content: service.description },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "fr_MA" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: service.title },
      { name: "twitter:description", content: service.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.h1,
          description: service.description,
          url,
          serviceType: service.navTitle,
          areaServed: { "@type": "City", name: "Casablanca" },
          provider: {
            "@type": "DryCleaningOrLaundry",
            "@id": `${siteUrl}/#pressing`,
            name: "Pressing Zerktouni",
            telephone: "+212522363634",
            address: {
              "@type": "PostalAddress",
              streetAddress: "237 Boulevard Mohamed Zerktouni",
              addressLocality: "Casablanca",
              addressRegion: "Casablanca-Settat",
              addressCountry: "MA",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "20:00",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: `${siteUrl}/services`,
            },
            { "@type": "ListItem", position: 3, name: service.navTitle, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((entry) => ({
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: { "@type": "Answer", text: entry.answer },
          })),
        }),
      },
    ],
  };
}
