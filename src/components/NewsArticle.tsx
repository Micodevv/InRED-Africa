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
        <a className="news-back-link" href="#/news">
          ← {t.allNewsTitle}
        </a>
        <header className="news-article-header">
          <p className="eyebrow">{isFr ? "Dossier à la une" : "Featured story"}</p>
          <h1>{article.title}</h1>
          <div className="news-meta">
            <time dateTime={article.dateTime}>{article.date}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
        </header>
        <figure className="news-article-image">
          <img src={article.image} alt={article.imageAlt} />
        </figure>
        <div className="news-article-body">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="news-download">
            <Button to="news" tone="outline">
              {t.allNewsTitle}
            </Button>
            <button
              className="pill pill-green"
              type="button"
              disabled
              title={
                isFr
                  ? "Le PDF sera ajouté dès qu’il nous sera fourni."
                  : "The PDF will be added when it is provided."
              }
            >
              <span>{t.downloadArticle}</span>
              <span className="arrow" aria-hidden="true">
                ↓
              </span>
            </button>
            <p>{t.pdfComingSoon}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
