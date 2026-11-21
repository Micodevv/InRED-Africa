import { copy } from "../content";
import Button from "./Button";
import DomainIcon from "./DomainIcon";
import SectionHead from "./SectionHead";

export default function HomeAreas({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <section className="container section home-areas">
      <SectionHead title={t.areasTitle} />
      <div className="home-domain-blocks">
        {t.areas.map(([title, text], i) => (
          <article key={title}>
            <div className={i % 2 ? "red" : "green"}>
              <DomainIcon index={i} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Button to="areas" tone="outline">
              {t.readMore}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
