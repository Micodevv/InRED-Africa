import { copy } from "../content";
import CTA from "./CTA";
import PageHero from "./PageHero";
import SectionHead from "./SectionHead";

export default function About({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.aboutTitle} />
      <section className="container about-intro">
        <div className="about-lead">
          <p>{t.about[0]}</p>
        </div>
      </section>
      <section className="container identity">
        <SectionHead title={t.identity} />
        <dl>
          {t.identityRows.map(([a, b]) => (
            <div key={a}>
              <dt>{a}</dt>
              <dd>{b}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="container section">
        <SectionHead title={t.valuesTitle} />
        <div className="values-grid">
          {t.values.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3 className={i % 2 ? "red" : "green"}>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA t={t} />
    </main>
  );
}
