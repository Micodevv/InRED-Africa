import { copy, photos } from "../content";
import Button from "./Button";
import EditorialImage from "./EditorialImage";
import PageHero from "./PageHero";
import ReasonIcon from "./ReasonIcon";
import SectionHead from "./SectionHead";

export default function Partners({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;
  return (
    <main>
      <PageHero title={t.partnersTitle} text={t.partnersIntro} />
      <EditorialImage
        className="container page-image page-image-slim"
        src={photos.collaboration}
        alt={
          isFr
            ? "Des professionnels échangent autour d'une table"
            : "Professionals collaborating around a table"
        }
        credit="WOCinTech"
        showCaption={false}
      />
      <section className="container section partner-section">
        <SectionHead title={t.wish} />
        <div className="partner-types-grid">
          {t.partnerTypes.map((x, i) => (
            <article className="partner-type-card" key={x}>
              <div>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{x}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="container partner-why">
        <SectionHead title={t.why} />
        <ul>
          {t.reasons.map((x) => (
            <li key={x}>
              <ReasonIcon />
              {x}
            </li>
          ))}
        </ul>
      </section>
      <section className="container quote-block">
        <blockquote>“{t.quote}”</blockquote>
        <Button to="mailto:contact@inredafrica.org" tone="red">
          {t.becomePartner}
        </Button>
      </section>
    </main>
  );
}
