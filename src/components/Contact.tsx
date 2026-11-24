import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { copy, type Lang } from "../content";
import { useI18n } from "../hooks/useI18n";
import Arrow from "./Arrow";
import PageHero from "./PageHero";
import ReasonIcon from "./ReasonIcon";

// Clés EmailJS lues depuis l'environnement (voir .env.example) — aucune valeur en dur.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type SendStatus = "idle" | "sending" | "success" | "error";

export default function Contact({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const formRef = useRef<HTMLFormElement>(null);
  const lang: Lang = t === copy.fr ? "fr" : "en";
  const { tr } = useI18n(lang);
  const [status, setStatus] = useState<SendStatus>("idle");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const honeypot = form.elements.namedItem("website") as HTMLInputElement | null;
    // Anti-bot : si le champ caché est rempli, on n'envoie rien
    // et on affiche le même écran de succès.
    if (honeypot && honeypot.value.trim() !== "") {
      setStatus("success");
      form.reset();
      return;
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS non configuré : définir VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY (voir .env.example).",
      );
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Échec de l'envoi EmailJS :", error);
      setStatus("error");
    }
  };
  const closeConfirmation = () => setStatus("idle");
  return (
    <main>
      <PageHero title={t.contactTitle} text={t.contactText} />
      <section className="container contact-grid">
        <div className="contact-card">
          <p className="eyebrow">InRED Africa</p>
          <h2>{t.contactUs}</h2>
          <dl>
            {Array.from({ length: t.address.length / 2 }).map((_, i) => (
              <div key={t.address[i * 2]}>
                <dt>{t.address[i * 2]}</dt>
                <dd>
                  {i === 2 ? (
                    <a href="mailto:contact@inredafrica.org">{t.address[i * 2 + 1]}</a>
                  ) : i === 3 ? (
                    <a href="tel:+2290160833631">{t.address[i * 2 + 1]}</a>
                  ) : (
                    t.address[i * 2 + 1]
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <form ref={formRef} onSubmit={submit}>
          <label>
            {tr("form.name")}
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            {tr("form.email")}
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            {tr("form.phone")}
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            {tr("form.message")}
            <textarea name="message" required rows={6} />
          </label>
          <input
            type="text"
            name="website"
            className="honeypot"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
          />
          <button className="pill pill-green" type="submit" disabled={status === "sending"}>
            <span>{status === "sending" ? tr("common.sending") : tr("form.send")}</span>
            <Arrow />
          </button>
          {status === "error" && <p className="form-error">{tr("common.error")}</p>}
        </form>
      </section>
      {status === "success" && (
        <div className="send-modal-backdrop" onMouseDown={closeConfirmation}>
          <div
            className="send-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="send-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="send-modal-close"
              type="button"
              onClick={closeConfirmation}
              aria-label={tr("form.success.aria")}
            >
              ×
            </button>
            <ReasonIcon />
            <h2 id="send-modal-title">{tr("form.success.title")}</h2>
            <p>{tr("form.success.text")}</p>
            <button className="pill pill-green" type="button" onClick={closeConfirmation}>
              <span>{tr("form.success.close")}</span>
              <Arrow />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
