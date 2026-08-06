import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/i18n/LanguageContext";

const GREETING = {
  fr: "Bonjour, je souhaite avoir des informations sur vos services de pressing.",
  en: "Hello, I'd like some information about your dry cleaning services.",
};

const ARIA_LABEL = {
  fr: "Contactez-nous sur WhatsApp",
  en: "Contact us on WhatsApp",
};

export function WhatsAppButton() {
  const { lang } = useLanguage();
  return (
    <a
      href={getWhatsAppUrl(GREETING[lang])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ARIA_LABEL[lang]}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4.001 8.373 4.001 15c0 2.288.638 4.428 1.744 6.253L4 29l7.938-1.706A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.78 9.78 0 0 1-4.988-1.365l-.358-.213-4.71 1.012 1.03-4.59-.234-.372A9.78 9.78 0 0 1 5.183 15c0-5.973 4.85-10.818 10.821-10.818S26.825 9.027 26.825 15 21.976 24.818 16.004 24.818Zm5.94-8.104c-.325-.163-1.924-.95-2.222-1.058-.298-.109-.515-.163-.732.163-.217.325-.84 1.058-1.03 1.276-.19.217-.38.244-.705.081-.325-.163-1.373-.506-2.615-1.612-.967-.862-1.62-1.927-1.81-2.252-.19-.325-.02-.5.143-.663.147-.147.325-.38.488-.57.163-.19.217-.325.325-.542.109-.217.054-.407-.027-.57-.081-.163-.732-1.765-1.003-2.417-.264-.635-.532-.549-.732-.559l-.624-.011c-.217 0-.57.081-.868.407-.298.325-1.138 1.112-1.138 2.713 0 1.6 1.165 3.147 1.328 3.364.163.217 2.293 3.502 5.556 4.912.776.335 1.382.535 1.854.685.779.248 1.488.213 2.049.129.625-.093 1.924-.787 2.195-1.547.271-.76.271-1.412.19-1.548-.081-.135-.298-.217-.623-.38Z" />
      </svg>
    </a>
  );
}
