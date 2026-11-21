import { copy, photos, africaMap } from "../content";
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
        <svg className="hero-map-defs" aria-hidden="true">
          <defs>
            <filter id="africa-map-alpha" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="-0.2126 -0.7152 -0.0722 0 1
                        -0.2126 -0.7152 -0.0722 0 1
                        -0.2126 -0.7152 -0.0722 0 1
                        -0.2126 -0.7152 -0.0722 0 1"
              />
            </filter>
            <mask
              id="africa-map-mask"
              maskUnits="objectBoundingBox"
              maskContentUnits="objectBoundingBox"
            >
              <image
                href={africaMap}
                x="-0.06"
                y="-0.02"
                width="1.12"
                height="1.03"
                preserveAspectRatio="none"
                filter="url(#africa-map-alpha)"
              />
            </mask>
          </defs>
        </svg>
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
