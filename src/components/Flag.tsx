import type { Lang } from "../content";

export default function Flag({ country }: { country: Lang }) {
  if (country === "fr") {
    return (
      <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
        <rect width="8" height="16" fill="#1d3f91" />
        <rect x="8" width="8" height="16" fill="#fff" />
        <rect x="16" width="8" height="16" fill="#e32b3d" />
      </svg>
    );
  }
  return (
    <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#173b7a" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3.8" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#d72b3f" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#d72b3f" strokeWidth="2.6" />
    </svg>
  );
}
