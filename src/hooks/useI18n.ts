import { copy, type Lang } from "../content";

/**
 * Petit hook i18n local pour le formulaire de contact.
 * Le projet n'a pas de hook i18n global : la langue descend via `copy[lang]`
 * (voir App.tsx). Ce hook expose les clés du formulaire en fr/en.
 */

type MessageKey =
  | "form.name"
  | "form.email"
  | "form.phone"
  | "form.message"
  | "form.send"
  | "common.sending"
  | "common.error"
  | "form.success.title"
  | "form.success.text"
  | "form.success.close"
  | "form.success.aria";

export const messages: Record<Lang, Record<MessageKey, string>> = {
  fr: {
    "form.name": "Nom",
    "form.email": "Adresse e-mail",
    "form.phone": "Téléphone (facultatif)",
    "form.message": "Message",
    "form.send": "Envoyer le message",
    "common.sending": "Envoi…",
    "common.error": "Une erreur est survenue lors de l'envoi du message. Merci de réessayer.",
    "form.success.title": "Votre message a bien été envoyé.",
    "form.success.text":
      "Merci de nous avoir contactés. L'équipe InRED Africa vous répondra dans les plus brefs délais.",
    "form.success.close": "Fermer",
    "form.success.aria": "Fermer la confirmation",
  },
  en: {
    "form.name": "Name",
    "form.email": "Email address",
    "form.phone": "Phone (optional)",
    "form.message": "Message",
    "form.send": "Send message",
    "common.sending": "Sending…",
    "common.error": "Something went wrong while sending your message. Please try again.",
    "form.success.title": "Your message has been sent.",
    "form.success.text":
      "Thank you for reaching out. The InRED Africa team will get back to you shortly.",
    "form.success.close": "Close",
    "form.success.aria": "Close confirmation",
  },
};

export type I18n = {
  lang: Lang;
  t: typeof copy.fr | typeof copy.en;
  tr: (key: MessageKey) => string;
};

export function useI18n(lang: Lang): I18n {
  return {
    lang,
    t: copy[lang],
    tr: (key: MessageKey) => messages[lang][key],
  };
}
