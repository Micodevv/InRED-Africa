export default function DomainIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Z" />
      <path d="M7 9.5V15c2.8 2.2 7.2 2.2 10 0V9.5M20 8v6" />
    </>,
    <>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
      <path d="M8.5 12h2l1-2.5 1.5 5 1-2.5h2" />
    </>,
    <>
      <path d="M12 21V10M12 13c-4 0-6-2.2-6-6 4 0 6 2 6 6ZM12 16c4 0 6-2.2 6-6-4 0-6 2-6 6Z" />
    </>,
    <>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M8 21h8M12 17v4M8 9h3v3H8zM14 9h2M14 12h2" />
    </>,
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M3.5 19c.4-4 2.4-6 5.5-6s5 2 5.5 6M14 14c3.8 0 5.7 1.7 6 5" />
    </>,
    <>
      <path d="M4 20h16M6 20V9h12v11M4 9l8-5 8 5M9 12v4M15 12v4" />
    </>,
    <>
      <path d="M5 19c2-5 4-9 7-14 3 5 5 9 7 14H5Z" />
      <path d="M8 15h8M10 11h4" />
      <circle cx="12" cy="7" r=".5" />
    </>,
  ];
  return (
    <svg
      className="domain-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}
