import type { Page } from "../content";
import Arrow from "./Arrow";

export default function Button({
  children,
  to,
  tone = "green",
}: {
  children: React.ReactNode;
  to: Page | string;
  tone?: "green" | "red" | "outline" | "white";
}) {
  const external = to.startsWith("mailto:");
  return (
    <a className={`pill pill-${tone}`} href={external ? to : `#/${to}`}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}
