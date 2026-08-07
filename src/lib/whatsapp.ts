// TODO: replace with the real WhatsApp Business number (client will provide it).
// Format: country code + number, digits only, no "+" or spaces.
export const WHATSAPP_NUMBER = "212712126425";

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
