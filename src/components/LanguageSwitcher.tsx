import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const OPTIONS: { code: Lang; label: string; badge: string }[] = [
  { code: "fr", label: "Français", badge: "FR" },
  { code: "ar", label: "العربية", badge: "AR" },
  { code: "en", label: "English", badge: "GB" },
];

const CHANGE_LABEL: Record<Lang, string> = {
  fr: "Changer la langue",
  ar: "تغيير اللغة",
  en: "Change language",
};

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0]!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
      >
        <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 text-primary">{current.badge}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-52 rounded-2xl border border-border bg-card p-2 shadow-xl"
        >
          <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">{CHANGE_LABEL[lang]}</p>
          {OPTIONS.map((option) => {
            const isActive = option.code === lang;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted"
              >
                <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 text-xs font-semibold text-primary">
                  {option.badge}
                </span>
                <span className="flex-1 text-left">{option.label}</span>
                {isActive && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
