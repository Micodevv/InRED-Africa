import { copy } from "../content";

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
                {item}
                <span>↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
