import { copy, photos } from "../content";
import Button from "./Button";

export default function HomeHero({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <h1>
          {t.hero[0]}
          <span className="green">{t.hero[1]}</span>
          <span className="red">{t.hero[2]}</span>
          {t.hero[3]}
        </h1>
        <p className="lead">{t.heroText}</p>
        <div className="hero-actions">
          <Button to="about">{t.discover}</Button>
          <Button to="areas" tone="outline">
            {t.seeAreas}
          </Button>
        </div>
      </div>
      <div className="hero-art">
        <img
          src={photos.hero}
          alt={
            t === copy.fr
              ? "Une jeune fille africaine engagée dans un événement communautaire"
              : "A young African girl taking part in a community event"
          }
        />
        <div className="photo-shade" />
        <div className="rings" />
      </div>
    </section>
  );
}
