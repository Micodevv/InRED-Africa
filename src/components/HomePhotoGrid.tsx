import { copy, photos } from "../content";
import EditorialImage from "./EditorialImage";

export default function HomePhotoGrid({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;

  return (
    <section
      className="container photo-grid"
      aria-label={isFr ? "Nos engagements en images" : "Our commitments in pictures"}
    >
      <EditorialImage
        src={photos.education}
        alt={isFr ? "Une salle de classe" : "A classroom"}
        credit="Unsplash"
        showCaption={false}
      />
      <EditorialImage
        src={photos.collaboration}
        alt={
          isFr
            ? "Des personnes échangent autour d’un projet communautaire"
            : "People discussing a community project"
        }
        credit="WOCinTech"
        showCaption={false}
      />
      <EditorialImage
        src={photos.technology}
        alt={isFr ? "Des personnes utilisent des outils numériques" : "People using digital tools"}
        credit="InRED Africa"
        showCaption={false}
      />
    </section>
  );
}
