import { ShoppingBag, Truck, PackageCheck } from "lucide-react";
import type { ReactNode } from "react";

import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const STEPS: Record<Lang, { icon: ReactNode; title: string; description: string }[]> = {
  fr: [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Choisissez vos articles",
      description: "Sélectionnez les pièces à nettoyer et planifiez votre ramassage en quelques clics.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "On vient chez vous",
      description: "Notre équipe récupère gratuitement vos vêtements à l'heure choisie, à domicile.",
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "Livraison impeccable",
      description: "Vos vêtements nettoyés, repassés et emballés avec soin, livrés directement chez vous.",
    },
  ],
  en: [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Choose your items",
      description: "Select the pieces to clean and schedule your pickup in a few clicks.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "We come to you",
      description: "Our team picks up your clothes for free, at home, at the time you choose.",
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "Flawless delivery",
      description: "Your clothes cleaned, pressed and carefully packed, delivered straight to your door.",
    },
  ],
  ar: [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "اختاروا قطعكم",
      description: "اختاروا القطع المراد تنظيفها وحددوا موعد الاستلام في بضع نقرات.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "نأتي إليكم",
      description: "فريقنا يستلم ملابسكم مجانا من منزلكم في الوقت الذي تختارونه.",
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "توصيل بلا عيوب",
      description: "ملابسكم منظفة ومكوية ومغلفة بعناية، تُسلَّم مباشرة إلى باب منزلكم.",
    },
  ],
};

export function ProcessStepsTimeline() {
  const { lang } = useLanguage();
  const steps = STEPS[lang];

  return (
    <div className="relative grid gap-12 sm:grid-cols-3 sm:gap-6">
      <div
        aria-hidden="true"
        className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t-2 border-dashed border-primary/30 sm:block"
      />
      {steps.map((step) => (
        <div key={step.title} className="relative flex flex-col items-center gap-3 text-center">
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
            {step.icon}
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
          <p className="max-w-xs text-sm text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
