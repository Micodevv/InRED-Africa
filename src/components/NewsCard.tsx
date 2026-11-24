import { copy } from "../content";
import type { NewsArticle } from "../news";

export default function NewsCard({
  article,
  t,
  featured = false,
}: {
  article: NewsArticle;
  t: typeof copy.fr | typeof copy.en;
  featured?: boolean;
}) {
  return (
    <article className={`news-card ${featured ? "news-card-featured" : ""}`}>
      <a className="news-card-image" href={`#/news?article=${article.id}`} tabIndex={-1}>
        <img src={article.image} alt={article.imageAlt} loading="lazy" />
      </a>
      <div className="news-card-content">
        <h2>
          <a href={`#/news?article=${article.id}`}>{article.title}</a>
        </h2>
        <p>{article.summary}</p>
        <div className="news-meta">
          <time dateTime={article.dateTime}>{article.date}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>
        <a className="pill pill-green news-read-link" href={`#/news?article=${article.id}`}>
          <span>{t.readMore}</span>
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
