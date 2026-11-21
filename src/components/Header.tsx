import { useEffect, useState } from "react";
import { copy, routes, logoEn, logoFr, type Lang, type Page } from "../content";
import Button from "./Button";
import Flag from "./Flag";

export default function Header({
  page,
  lang,
  setLang,
}: {
  page: Page;
  lang: Lang;
  setLang: (x: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  useEffect(() => setOpen(false), [page, lang]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#/home" className="logo-link" aria-label="InRED Africa">
          <img
            src={lang === "fr" ? logoFr : logoEn}
            alt={lang === "fr" ? "Logo InRED Africa en français" : "InRED Africa logo in English"}
          />
        </a>
        <nav
          className={open ? "open" : ""}
          aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}
        >
          {routes.slice(0, 6).map((route, i) => (
            <a className={page === route ? "active" : ""} href={`#/${route}`} key={route}>
              {t.nav[i]}
            </a>
          ))}
          <div className="mobile-contact">
            <Button to="contact">{t.nav[6]}</Button>
          </div>
        </nav>
        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              className={lang === "fr" ? "selected" : ""}
              onClick={() => setLang("fr")}
              aria-label="Passer en français"
              aria-pressed={lang === "fr"}
            >
              <Flag country="fr" />
              <span>FR</span>
            </button>
            <button
              className={lang === "en" ? "selected" : ""}
              onClick={() => setLang("en")}
              aria-label="Switch to English"
              aria-pressed={lang === "en"}
            >
              <Flag country="en" />
              <span>EN</span>
            </button>
          </div>
          <div className="desktop-contact">
            <Button to="contact">{t.nav[6]}</Button>
          </div>
          <button
            className={`menu-button ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
