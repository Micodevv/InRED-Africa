import { copy } from "../content";
import type { NewsArticle as NewsArticleData } from "../news";
import Button from "./Button";

export default function NewsArticle({
  article,
  t,
}: {
  article: NewsArticleData;
  t: typeof copy.fr | typeof copy.en;
}) {
  const isFr = t === copy.fr;

  return (
    <main>
      <article className="container news-article">
        <a className="news-back-link" href="/news">
          ← {t.allNewsTitle}
        </a>
        <header className="news-article-header">
          <p className="eyebrow">{isFr ? "Dossier à la une" : "Featured story"}</p>
          <h1>{article.title}</h1>
          <div className="news-meta">
            <time dateTime={article.dateTime}>
              <svg className="meta-icon" viewBox="0 0 16 16" aria-hidden="true">
                <rect x="1.5" y="3" width="13" height="11.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.4" />
                <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {article.date}
            </time>
            <span aria-hidden="true">·</span>
            <span>
              <svg className="meta-icon" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 4.8V8l2.3 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {article.readTime}
            </span>
          </div>
        </header>
        <div className="news-article-layout">
          <figure className="news-article-image">
            <img
              src={article.image}
              alt={article.imageAlt}
              onError={(e) => {
                // Image de repli si le visuel de l'article est indisponible.
                e.currentTarget.src = "/og-image.jpg";
              }}
            />
          </figure>
          <div className="news-article-body">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="news-download">
            {article.link && (
              <Button to={article.link.url} tone="green">
                {article.link.label}
              </Button>
            )}
            <Button to="news" tone="outline">
              {t.allNewsTitle}
            </Button>
            {article.pdf ? (
              <a
                className="pill pill-green"
                href={article.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t.downloadArticle}</span>
                <span className="arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            ) : (
              <button className="pill pill-green" type="button" disabled>
                <span>{t.downloadArticle}</span>
                <span className="arrow" aria-hidden="true">
                  ↓
                </span>
              </button>
            )}
          </div>
        </div>
        </div>
      </article>
    </main>
  );
}
