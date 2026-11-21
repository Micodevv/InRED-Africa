import { useState } from "react";
import { copy, domainImages } from "../content";

export default function AreasExplorer({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <section className="container areas-page-accordion">
      <div className="domains-showcase">
        <div className="domains-accordion">
          {t.areas.map(([title, text], i) => {
            const isActive = activeDomain === i;
            const panelId = `areas-domain-panel-${i}`;
            return (
              <div className={`domain-accordion-item ${isActive ? "open" : ""}`} key={title}>
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveDomain(i)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <i aria-hidden="true" />
                </button>
                <div
                  className="domain-accordion-panel"
                  id={panelId}
                  aria-hidden={!isActive}
                  inert={!isActive}
                >
                  <div className="domain-accordion-content">
                    <p>{text}</p>
                    <img
                      src={domainImages[i]}
                      alt=""
                      className="domain-mobile-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <figure className="domains-visual">
          <img src={domainImages[activeDomain]} alt={t.areas[activeDomain][0]} />
          <figcaption>
            <span>{String(activeDomain + 1).padStart(2, "0")}</span>
            <strong>{t.areas[activeDomain][0]}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
