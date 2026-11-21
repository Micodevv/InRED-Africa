import { copy } from "../content";
import CTA from "./CTA";
import HomeAreas from "./HomeAreas";
import HomeApproach from "./HomeApproach";
import HomeHero from "./HomeHero";
import HomePhotoGrid from "./HomePhotoGrid";
import VisionMission from "./VisionMission";

export default function Home({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <>
      <main>
        <HomeHero t={t} />
        <VisionMission t={t} />
        <HomePhotoGrid t={t} />
        <HomeAreas t={t} />
        <HomeApproach t={t} />
        <CTA t={t} />
      </main>
    </>
  );
}
