import { copy, routes, logoEn, logoFr } from "../content";

export default function Footer({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <a href="/" className="footer-logo" aria-label="InRED Africa">
            <img
              src={isFr ? logoFr : logoEn}
              alt={isFr ? "Logo InRED Africa en français" : "InRED Africa logo in English"}
            />
          </a>
          <p>{t.footerTag}</p>
        </div>
        <nav>
          {routes.map((route, i) => (
            <a href={route === "home" ? "/" : `/${route}`} key={route}>
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <address>
          <a href="mailto:contact@inredafrica.org">contact@inredafrica.org</a>
          <a href="tel:+2290160833631">+229 0160833631</a>
          <span>
            Porto-Novo, Ouémé
            <br />
            République du Bénin
          </span>
        </address>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 InRED Africa. {t.rights}</span>
        <span>ONG-707357</span>
      </div>
    </footer>
  );
}
