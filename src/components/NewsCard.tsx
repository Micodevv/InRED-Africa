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
          <time dateTime={article.dateTime}>
            <svg className="meta-icon" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="1.5" y="3" width="13" height="11.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            {article.date}
          </time>
          <span>
            <svg className="meta-icon" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M8 4.8V8l2.3 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {article.readTime}
          </span>
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
