import { copy } from "../content";
import AreasExplorer from "./AreasExplorer";
import CTA from "./CTA";
import PageHero from "./PageHero";

export default function Areas({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.areasIntro} />
      <AreasExplorer t={t} />
      <CTA t={t} />
    </main>
  );
}
