import { copy } from "../content";
import Button from "./Button";

export default function CTA({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <section className="container section cta">
      <div>
        <p className="eyebrow light">InRED Africa</p>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
      </div>
      <div className="cta-actions">
        <Button to="join" tone="white">
          {t.collaborate}
        </Button>
        <Button to="contact" tone="outline">
          {t.contactUs}
        </Button>
      </div>
    </section>
  );
}
