export default function PageHero({
  title,
  text,
  index,
}: {
  title: string;
  text?: string;
  index?: string;
}) {
  return (
    <section className="container page-hero">
      {index && <p className="eyebrow">{index} — InRED Africa</p>}
      <h1>{title}</h1>
      {text && <p className="lead">{text}</p>}
    </section>
  );
}
