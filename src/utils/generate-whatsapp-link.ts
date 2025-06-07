import { WHATSAPP_NUMBER } from "../constants/whatsapp-number";

export const generateWhatsAppLink = (text: string) => {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
};
