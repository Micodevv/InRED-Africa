import { copy } from "../content";
import SectionHead from "./SectionHead";

export default function HomeApproach({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <section className="approach section">
      <div className="container">
        <SectionHead title={t.approachTitle} />
        <div className="principles">
          {t.principles.map(([title, text], i) => (
            <article key={title} className={i % 2 ? "accent-red" : ""}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
