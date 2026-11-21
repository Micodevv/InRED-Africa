import { useState, type FormEvent } from "react";
import { copy } from "../content";
import Arrow from "./Arrow";
import PageHero from "./PageHero";
import ReasonIcon from "./ReasonIcon";

export default function Contact({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const [sendConfirmationOpen, setSendConfirmationOpen] = useState(false);
  const isFr = t === copy.fr;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const mailto = `mailto:contact@inredafrica.org?subject=${encodeURIComponent(String(fd.get("name")))}&body=${encodeURIComponent(String(fd.get("message")) + "\n\n" + String(fd.get("email")))}`;
    setSendConfirmationOpen(true);
    window.setTimeout(() => {
      window.location.href = mailto;
    }, 150);
  };
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
        <form onSubmit={submit}>
          <label>
            {t.form[0]}
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            {t.form[1]}
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            {t.form[2]}
            <textarea name="message" required rows={6} />
          </label>
          <button className="pill pill-green" type="submit">
            <span>{t.form[3]}</span>
            <Arrow />
          </button>
        </form>
      </section>
      {sendConfirmationOpen && (
        <div className="send-modal-backdrop" onMouseDown={() => setSendConfirmationOpen(false)}>
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
              onClick={() => setSendConfirmationOpen(false)}
              aria-label={isFr ? "Fermer la confirmation" : "Close confirmation"}
            >
              ×
            </button>
            <ReasonIcon />
            <h2 id="send-modal-title">
              {isFr ? "Votre message est prêt à être envoyé." : "Your message is ready to send."}
            </h2>
            <p>
              {isFr
                ? "Votre application de messagerie s’est ouverte pour finaliser l’envoi à InRED Africa."
                : "Your email application has opened so you can complete sending your message to InRED Africa."}
            </p>
            <button
              className="pill pill-green"
              type="button"
              onClick={() => setSendConfirmationOpen(false)}
            >
              <span>{isFr ? "Fermer" : "Close"}</span>
              <Arrow />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
