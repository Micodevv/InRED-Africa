import { copy } from "../content";
import domainsIcon from "../assets/domains.png";

export default function VisionMission({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <>
      <section className="vision-band">
        <div className="container">
          <p className="vision-statement">{t.vision}</p>
        </div>
      </section>
      <section className="container section two-cols">
        <div>
          <h2>{t.visionTitle}</h2>
          <p className="body-large">{t.visionText}</p>
        </div>
        <div>
          <h2>{t.missionTitle}</h2>
          <p>{t.missionText}</p>
          <ul className="line-list">
            {t.mission.map((item) => (
              <li key={item}>
                <img src={domainsIcon} alt="" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
