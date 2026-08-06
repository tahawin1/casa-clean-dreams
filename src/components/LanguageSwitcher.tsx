import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const OPTIONS: { code: Lang | "ar"; label: string; badge: string; disabled?: boolean }[] = [
  { code: "fr", label: "Français", badge: "FR" },
  { code: "ar", label: "العربية", badge: "MA", disabled: true },
  { code: "en", label: "English", badge: "GB" },
];

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
          <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
            {lang === "fr" ? "Changer la langue" : "Change language"}
          </p>
          {OPTIONS.map((option) => {
            const isActive = option.code === lang;
            return (
              <button
                key={option.code}
                type="button"
                disabled={option.disabled}
                onClick={() => {
                  if (option.disabled) return;
                  setLang(option.code as Lang);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-sm transition-colors ${
                  option.disabled
                    ? "cursor-not-allowed text-muted-foreground/50"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 text-xs font-semibold text-primary">
                  {option.badge}
                </span>
                <span className="flex-1 text-left">{option.label}</span>
                {option.disabled && (
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {lang === "fr" ? "Bientôt" : "Soon"}
                  </span>
                )}
                {isActive && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
