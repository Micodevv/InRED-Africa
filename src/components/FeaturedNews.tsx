import { copy } from "../content";
import type { NewsArticle } from "../news";
import NewsCard from "./NewsCard";

export default function FeaturedNews({
  t,
  articles,
  title,
  showAllLink = false,
  featuredOnly = false,
}: {
  t: typeof copy.fr | typeof copy.en;
  articles: NewsArticle[];
  title: string;
  showAllLink?: boolean;
  featuredOnly?: boolean;
}) {
  const [featured, ...others] = articles;

  if (!featured) return null;

  return (
    <section className="container section featured-news" aria-labelledby="featured-news-title">
      <div className="featured-news-heading">
        <h2 id="featured-news-title">{title}</h2>
        {showAllLink && (
          <a className="see-more" href="/news">
            {t.allNewsTitle}
          </a>
        )}
      </div>
      <NewsCard article={featured} t={t} featured />
      {!featuredOnly && others.length > 0 && (
        <div className="news-card-grid">
          {others.map((article) => (
            <NewsCard article={article} t={t} key={article.id} />
          ))}
        </div>
      )}
    </section>
  );
}
