import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import type { ServicePath } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";

export function ServiceCard({
  image,
  icon,
  title,
  description,
  to,
}: {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  to: ServicePath;
}) {
  const { lang } = useLanguage();
  return (
    <Link to={to} className="group block overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-brand-900/5">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={944}
          height={704}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          {lang === "fr" ? "En savoir plus" : "Learn more"}
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
