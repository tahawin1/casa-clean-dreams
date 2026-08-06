import { ShoppingBag, Truck, PackageCheck } from "lucide-react";
import type { ReactNode } from "react";

export const PROCESS_STEPS: { icon: ReactNode; title: string; description: string }[] = [
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
];

export function ProcessStepsTimeline() {
  return (
    <div className="relative grid gap-12 sm:grid-cols-3 sm:gap-6">
      <div
        aria-hidden="true"
        className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t-2 border-dashed border-primary/30 sm:block"
      />
      {PROCESS_STEPS.map((step) => (
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
