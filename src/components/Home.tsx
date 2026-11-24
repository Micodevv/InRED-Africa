import { copy } from "../content";
import CTA from "./CTA";
import FeaturedNews from "./FeaturedNews";
import HomeAreas from "./HomeAreas";
import HomeApproach from "./HomeApproach";
import HomeHero from "./HomeHero";
import VisionMission from "./VisionMission";
import { newsArticles } from "../news";

export default function Home({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const articles = newsArticles[t === copy.fr ? "fr" : "en"];

  return (
    <>
      <main>
        <HomeHero t={t} />
        <VisionMission t={t} />
        <FeaturedNews t={t} articles={articles} title={t.featuredNewsTitle} showAllLink featuredOnly />
        <HomeAreas t={t} />
        <HomeApproach t={t} />
        <CTA t={t} />
      </main>
    </>
  );
}
