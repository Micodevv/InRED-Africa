export default function EditorialImage({
  src,
  alt,
  credit,
  className = "",
  showCaption = true,
}: {
  src: string;
  alt: string;
  credit: string;
  className?: string;
  showCaption?: boolean;
}) {
  return (
    <figure className={`editorial-image ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {showCaption && <figcaption>Photo — {credit} / Unsplash</figcaption>}
    </figure>
  );
}
