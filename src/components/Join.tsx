import { copy } from "../content";
import Arrow from "./Arrow";
import PageHero from "./PageHero";

export default function Join({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.joinTitle} text={t.joinIntro} />
      <section className="container join-grid">
        {t.join.map(([title, text], i) => (
          <a className={`join-tile tile-${i}`} href="#/contact" key={title}>
            <span>0{i + 1}</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </section>
    </main>
  );
}
