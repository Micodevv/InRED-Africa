import { useEffect, useMemo, useState } from "react";
import { copy, routes, type Lang, type Page } from "./content";
import About from "./components/About";
import Areas from "./components/Areas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Join from "./components/Join";
import News from "./components/News";
import Partners from "./components/Partners";

function getPage(): Page {
  const route = window.location.hash.replace("#/", "").split(/[?#]/, 1)[0] as Page;
  return routes.includes(route) ? route : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage());
  const [locationHash, setLocationHash] = useState(window.location.hash);
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem("inred-lang") as Lang) || "fr",
  );
  useEffect(() => {
    const onHash = () => {
      setPage(getPage());
      setLocationHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const setLang = (next: Lang) => {
    localStorage.setItem("inred-lang", next);
    setLangState(next);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const t = copy[lang];
  const content = useMemo(() => {
    if (page === "about") return <About t={t} />;
    if (page === "areas") return <Areas t={t} />;
    if (page === "partners") return <Partners t={t} />;
    if (page === "news") return <News t={t} />;
    if (page === "join") return <Join t={t} />;
    if (page === "contact") return <Contact t={t} />;
    return <Home t={t} />;
  }, [locationHash, page, t]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <Header page={page} lang={lang} setLang={setLang} />
      <div id="main-content">{content}</div>
      <Footer t={t} />
    </>
  );
}
