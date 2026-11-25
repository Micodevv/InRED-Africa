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

const SITE_URL = "https://inredafrica.org";

/** Titre + description uniques par page et par langue, répercutés dans le <head>. */
const seo = {
  fr: {
    home: {
      title: "InRED Africa | Inclusion, Résilience & Empowerment pour le Développement en Afrique",
      description:
        "Découvrez InRED Africa, ses missions et ses sept domaines d’action, et trouvez comment devenir bénévole, partenaire ou soutenir ses initiatives.",
    },
    about: {
      title: "À propos — InRED Africa",
      description:
        "Qui sommes-nous ? L’histoire, la vision, la mission et les valeurs d’InRED Africa, ONG d’inclusion et de résilience pour le développement en Afrique.",
    },
    areas: {
      title: "Domaines d’action — InRED Africa",
      description:
        "Éducation, santé, environnement, technologie, collaboration, culture et innovation : découvrez les sept domaines d’action d’InRED Africa.",
    },
    news: {
      title: "Actualités — InRED Africa",
      description:
        "Toute l’actualité d’InRED Africa : nos projets sur le terrain, nos événements et nos dernières nouvelles.",
    },
    partners: {
      title: "Partenaires — InRED Africa",
      description:
        "Entreprises, institutions, ONG : devenez partenaire d’InRED Africa et contribuez à des projets d’impact en Afrique.",
    },
    join: {
      title: "Nous rejoindre — InRED Africa",
      description:
        "Rejoignez InRED Africa comme bénévole, stagiaire ou collaborateur, et donnez du sens à votre engagement.",
    },
    contact: {
      title: "Contact — InRED Africa",
      description:
        "Une question, une idée de partenariat ? Contactez l’équipe d’InRED Africa.",
    },
  },
  en: {
    home: {
      title: "InRED Africa | Inclusion, Resilience & Empowerment for Development in Africa",
      description:
        "Learn about InRED Africa, its mission and seven areas of action, and find out how to volunteer, partner or support its initiatives.",
    },
    about: {
      title: "About us — InRED Africa",
      description:
        "Who are we? The story, vision, mission and values of InRED Africa, an NGO promoting inclusion and resilience across Africa.",
    },
    areas: {
      title: "Focus areas — InRED Africa",
      description:
        "Education, health, environment, technology, collaboration, culture and innovation: explore InRED Africa’s seven areas of action.",
    },
    news: {
      title: "News — InRED Africa",
      description:
        "All the latest from InRED Africa: field projects, events and updates.",
    },
    partners: {
      title: "Partners — InRED Africa",
      description:
        "Companies, institutions, NGOs: become a partner of InRED Africa and help deliver high-impact projects in Africa.",
    },
    join: {
      title: "Join us — InRED Africa",
      description:
        "Join InRED Africa as a volunteer, intern or team member, and make your engagement matter.",
    },
    contact: {
      title: "Contact — InRED Africa",
      description:
        "A question, a partnership idea? Get in touch with the InRED Africa team.",
    },
  },
} as const;

function setMeta(attr: string, key: string, content: string) {
  document
    .querySelector(`meta[${attr}="${key}"]`)
    ?.setAttribute("content", content);
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
  // SEO : chaque page porte son propre titre et sa propre description.
  useEffect(() => {
    const { title, description } = seo[lang][page];
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:locale", lang === "fr" ? "fr_FR" : "en_US");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [page, lang]);
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
