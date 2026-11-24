import { copy } from "../content";
import { newsArticles } from "../news";
import FeaturedNews from "./FeaturedNews";
import NewsArticle from "./NewsArticle";
import PageHero from "./PageHero";

export default function News({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const language = t === copy.fr ? "fr" : "en";
  const articles = newsArticles[language];
  const selectedArticleId = new URLSearchParams(window.location.hash.split("?")[1] ?? "").get(
    "article",
  );
  const selectedArticle = articles.find((article) => article.id === selectedArticleId);

  if (selectedArticle) return <NewsArticle article={selectedArticle} t={t} />;

  return (
    <main>
      <PageHero title={t.newsTitle} text={t.newsText} />
      <FeaturedNews t={t} articles={articles} title={t.allNewsTitle} />
    </main>
  );
}
