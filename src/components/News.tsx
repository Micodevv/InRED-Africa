import { copy } from "../content";
import PageHero from "./PageHero";

export default function News({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.newsTitle} text={t.newsText} />
      <section className="container empty-news">
        <div className="empty-news-content">
          <div className="news-mark">N°01</div>
          <h2>{t.soon}</h2>
        </div>
      </section>
    </main>
  );
}
