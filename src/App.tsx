import { FormEvent, useEffect, useMemo, useState } from "react";
import logoFr from "./assets/logo-fr.jpg";
import logoEn from "./assets/logo-en.jpg";

type Lang = "fr" | "en";
type Page = "home" | "about" | "areas" | "partners" | "news" | "join" | "contact";

const routes: Page[] = ["home", "about", "areas", "partners", "news", "join", "contact"];

const photos = {
  hero: "https://images.unsplash.com/photo-1753818268681-2686059a4dc8?auto=format&fit=crop&w=1400&q=85",
  community:
    "https://images.unsplash.com/photo-1615150338956-542fc878f7e4?auto=format&fit=crop&w=1600&q=85",
  education:
    "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?auto=format&fit=crop&w=1600&q=85",
  collaboration:
    "https://images.unsplash.com/photo-1653566031486-dc4ead13a35d?auto=format&fit=crop&w=1600&q=85",
  health:
    "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1200&q=85",
  environment:
    "https://images.unsplash.com/photo-1753818293918-d4de94349ac7?auto=format&fit=crop&w=1400&q=85",
  agriculture:
    "https://images.unsplash.com/photo-1694286066866-4324f80d7906?auto=format&fit=crop&w=1200&q=85",
  technology:
    "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=1400&q=85",
  culture:
    "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?auto=format&fit=crop&w=1400&q=85",
  news: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&w=1400&q=85",
} as const;

const domainImages = [
  photos.education,
  photos.health,
  photos.environment,
  photos.technology,
  photos.community,
  photos.collaboration,
  photos.culture,
] as const;

const copy = {
  fr: {
    nav: [
      "Accueil",
      "À propos",
      "Domaines",
      "Partenaires",
      "Actualités",
      "Nous rejoindre",
      "Contact",
    ],
    place: "ONG basée à Porto-Novo, Bénin",
    hero: ["Construire une Afrique ", "inclusive,", " résiliente", " et durable."],
    heroText:
      "InRED Africa œuvre pour un développement durable et inclusif à travers l'éducation, l'autonomisation des communautés, la santé, l'innovation et la préservation de l'environnement.",
    discover: "Découvrir notre ONG",
    seeAreas: "Nos domaines d'intervention",
    becomePartner: "Devenir partenaire",
    visual: "L'humain d'abord. Des communautés fortes, actrices de leur propre changement.",
    vision:
      "Une Afrique où chaque personne et chaque communauté disposent des moyens de participer pleinement à leur propre développement.",
    motto: ["Communauté", "Solidarité", "Progrès"],
    visionTitle: "Notre vision",
    visionText:
      "Une Afrique plus juste, inclusive et résiliente, où les populations sont en bonne santé, les droits humains respectés, les institutions responsables et les communautés autonomes, grâce notamment à l'innovation technologique, aux énergies propres et à une gestion durable des ressources.",
    missionTitle: "Notre mission",
    missionText:
      "Promouvoir un développement durable, inclusif et résilient à travers des initiatives qui passent par :",
    mission: [
      "L'éducation et le renforcement des capacités",
      "L'autonomisation des populations",
      "La gouvernance éthique et participative",
      "La promotion de la santé et des droits humains",
      "L'appropriation des technologies",
      "La préservation de l'environnement",
    ],
    areasTitle: "Nos domaines d'intervention",
    areasIntro: "Sept champs d’action, une même ambition.",
    areas: [
      [
        "Éducation, formation et autonomisation",
        "Promouvoir l'accès à l'éducation, à la formation professionnelle, au renforcement des capacités et à l'entrepreneuriat afin de favoriser l'autonomie et l'épanouissement des populations.",
      ],
      [
        "Santé, hygiène et bien-être",
        "Contribuer à la prévention des maladies, à la lutte contre les épidémies et les maladies non transmissibles, à l'amélioration de l'accès aux soins et à la promotion de bonnes pratiques d'hygiène et de bien-être.",
      ],
      [
        "Environnement, climat et énergies propres",
        "Promouvoir la protection de l'environnement, l'assainissement, la résilience climatique, la gestion des risques environnementaux et l'accès aux énergies renouvelables et propres.",
      ],
      [
        "Innovation technologique et transformation numérique",
        "Encourager le transfert, l'adaptation et l'utilisation des technologies, notamment des technologies de l'information et de la communication, au service du développement des communautés.",
      ],
      [
        "Droits humains, inclusion et équité de genre",
        "Promouvoir les droits humains, l'inclusion sociale, l'égalité des chances et l'équité de genre, en valorisant le potentiel de chaque personne.",
      ],
      [
        "Citoyenneté et gouvernance participative",
        "Contribuer à l'éducation à la citoyenneté et promouvoir une gouvernance éthique, transparente, responsable et participative.",
      ],
      [
        "Entrepreneuriat, arts et culture",
        "Soutenir l'esprit d'entreprise, la créativité, l'innovation et la valorisation du patrimoine artistique et culturel comme leviers de développement économique et social.",
      ],
    ],
    approachTitle: "Notre approche",
    approachText:
      "Le développement durable nécessite une action coordonnée sur plusieurs dimensions : humaine, sociale, institutionnelle, économique, technologique et environnementale. Notre approche repose sur cinq principes.",
    principles: [
      ["Inclusion", "Ne laisser personne de côté"],
      ["Participation", "Placer les communautés au cœur des décisions"],
      ["Autonomisation", "Renforcer les capacités et le pouvoir d'action des populations"],
      ["Innovation", "Promouvoir des solutions adaptées aux réalités locales"],
      ["Durabilité", "Privilégier des initiatives ayant un impact positif à long terme"],
    ],
    ctaTitle: "Agir ensemble pour le développement",
    ctaText:
      "Le développement de l'Afrique nécessite des engagements collectifs, des partenariats solides et des solutions adaptées aux réalités des communautés. Rejoignez-nous !",
    collaborate: "Collaborer avec InRED Africa",
    contactUs: "Nous contacter",
    aboutTitle: "Qui sommes-nous ?",
    about: [
      "InRED Africa, dont la dénomination officielle est « Inclusion, Résilience & Empowerment pour le Développement en Afrique », est une organisation non gouvernementale (ONG) engagée dans la promotion d'un développement durable, inclusif et résilient en Afrique.",
      "Notre organisation est née de la conviction que le développement ne saurait être pleinement réalisé sans l'inclusion des populations, le renforcement de leurs capacités, la protection de leurs droits et leur participation active aux décisions qui affectent leur avenir.",
      "Nous œuvrons à la mise en place d'initiatives qui contribuent à améliorer les conditions de vie des populations, à renforcer la résilience des communautés et à promouvoir une société plus juste et plus solidaire.",
      "À travers nos interventions, nous cherchons à créer des passerelles entre les communautés, les institutions, les organisations de la société civile et les partenaires engagés en faveur du développement.",
    ],
    identity: "Notre identité institutionnelle",
    identityRows: [
      ["Dénomination", "Inclusion, Résilience & Empowerment pour le Développement en Afrique"],
      ["Sigle", "InRED Africa"],
      ["Type", "Organisation non gouvernementale (ONG)"],
      ["Pays", "République du Bénin"],
      ["Siège", "Porto-Novo, département de l'Ouémé, Bénin"],
      ["Durée", "Illimitée"],
      ["Enregistrement", "ONG-707357"],
    ],
    valuesTitle: "Nos valeurs",
    values: [
      [
        "Inclusion",
        "Nous croyons en une société où chaque personne, indépendamment de sa situation sociale ou économique, peut accéder aux opportunités et participer au développement.",
      ],
      [
        "Solidarité",
        "Nous encourageons l'entraide, la coopération et la mobilisation collective au service du bien commun.",
      ],
      [
        "Responsabilité",
        "Nous promouvons une gestion responsable des ressources, des engagements et des initiatives de développement.",
      ],
      [
        "Intégrité",
        "Nous agissons avec transparence, honnêteté et respect des principes éthiques.",
      ],
      [
        "Innovation",
        "Nous encourageons la créativité et les solutions nouvelles pour répondre aux défis du développement.",
      ],
      [
        "Résilience",
        "Nous contribuons au renforcement des capacités des individus et des communautés à anticiper, à s'adapter et à faire face aux changements et aux crises.",
      ],
    ],
    partnersTitle: "Ensemble, pour un impact durable.",
    partnersIntro:
      "Le développement durable repose sur la coopération et la mobilisation des compétences, des ressources et des expériences.",
    wish: "Nous souhaitons collaborer avec",
    partnerTypes: [
      "Institutions publiques et collectivités territoriales",
      "Organisations de la société civile",
      "ONG nationales et internationales",
      "Partenaires techniques et financiers",
      "Institutions académiques et de recherche",
      "Entreprises engagées dans la responsabilité sociétale",
      "Acteurs de l'innovation et de la transformation numérique",
    ],
    why: "Pourquoi collaborer avec InRED Africa ?",
    reasons: [
      "Une vision partagée du développement durable",
      "Une approche inclusive et participative",
      "Une volonté de renforcer les capacités des communautés",
      "Une attention particulière à la durabilité des initiatives",
      "Une dynamique de coopération et d'apprentissage mutuel",
    ],
    quote: "Construisons ensemble des partenariats porteurs de changement.",
    newsTitle: "Nos actualités et nos engagements.",
    newsText:
      "À InRED Africa, nous croyons que chaque initiative compte. À travers nos actualités, nous partageons nos engagements, nos actions et les opportunités de contribuer à un développement plus inclusif et durable.",
    soon: "Nos premières actualités seront publiées ici prochainement.",
    write: "Nous écrire",
    joinTitle: "Ensemble, faisons la différence.",
    joinIntro:
      "Le développement de nos communautés nécessite l'engagement de toutes et de tous. Que vous soyez un citoyen engagé, un professionnel, une organisation, une institution ou une entreprise, vous pouvez contribuer à la réalisation de notre mission.",
    join: [
      [
        "Devenir bénévole",
        "Vous souhaitez mettre vos compétences, votre temps ou votre énergie au service du développement ? Rejoignez notre dynamique de bénévolat et participez à des initiatives qui contribuent à améliorer les conditions de vie des populations.",
      ],
      [
        "Devenir partenaire",
        "Vous représentez une organisation, une institution ou une entreprise et souhaitez développer des initiatives communes ? InRED Africa est ouverte aux collaborations qui partagent sa vision et ses valeurs.",
      ],
      [
        "Soutenir nos initiatives",
        "Votre soutien peut contribuer à la mise en œuvre de projets dans les domaines de l'éducation, de la santé, de l'inclusion, de la gouvernance, du numérique et de l'environnement.",
      ],
    ],
    contactTitle: "Entrons en contact.",
    contactText:
      "Vous souhaitez en savoir davantage sur InRED Africa, découvrir nos initiatives ou envisager une collaboration ? Notre équipe est à votre disposition pour échanger avec vous.",
    address: [
      "Siège",
      "Porto-Novo, département de l'Ouémé, République du Bénin",
      "Adresse",
      "5e arrondissement",
      "E-mail",
      "contact@inred-africa.org",
      "Site web",
      "www.inred-africa.org",
    ],
    form: ["Nom", "Adresse e-mail", "Message", "Envoyer le message"],
    footerTag: "Inclusion, Résilience & Empowerment pour le Développement en Afrique",
    rights: "Tous droits réservés.",
  },
  en: {
    nav: ["Home", "About", "Focus areas", "Partners", "News", "Join us", "Contact"],
    place: "NGO based in Porto-Novo, Benin",
    hero: ["Building an ", "inclusive,", " resilient", " and sustainable Africa."],
    heroText:
      "InRED Africa works for inclusive and sustainable development through education, community empowerment, health, innovation and environmental protection.",
    discover: "Discover our NGO",
    seeAreas: "Our focus areas",
    becomePartner: "Become a partner",
    visual: "People first. Strong communities, agents of their own change.",
    vision:
      "An Africa where every person and every community has the means to participate fully in their own development.",
    motto: ["Community", "Solidarity", "Progress"],
    visionTitle: "Our vision",
    visionText:
      "A fairer, more inclusive and resilient Africa, where people are healthy, human rights are respected, institutions are accountable and communities are autonomous, thanks in particular to technological innovation, clean energy and sustainable resource management.",
    missionTitle: "Our mission",
    missionText:
      "Promote sustainable, inclusive and resilient development through initiatives based on:",
    mission: [
      "Education and capacity building",
      "Empowering people",
      "Ethical and participatory governance",
      "Promoting health and human rights",
      "Technology ownership",
      "Environmental protection",
    ],
    areasTitle: "Our focus areas",
    areasIntro: "Seven fields of action, one ambition.",
    areas: [
      [
        "Education, training and empowerment",
        "Promote access to education, vocational training, capacity building and entrepreneurship to foster autonomy and fulfilment.",
      ],
      [
        "Health, hygiene and well-being",
        "Contribute to disease prevention, the fight against epidemics and non-communicable diseases, access to care, and good hygiene and well-being practices.",
      ],
      [
        "Environment, climate and clean energy",
        "Promote environmental protection, sanitation, climate resilience, environmental risk management and access to renewable and clean energy.",
      ],
      [
        "Technological innovation and digital transformation",
        "Encourage the transfer, adaptation and use of technology, particularly information and communication technologies, for community development.",
      ],
      [
        "Human rights, inclusion and gender equity",
        "Promote human rights, social inclusion, equal opportunities and gender equity by valuing each person’s potential.",
      ],
      [
        "Citizenship and participatory governance",
        "Contribute to citizenship education and promote ethical, transparent, accountable and participatory governance.",
      ],
      [
        "Entrepreneurship, arts and culture",
        "Support entrepreneurship, creativity, innovation and artistic and cultural heritage as drivers of economic and social development.",
      ],
    ],
    approachTitle: "Our approach",
    approachText:
      "Sustainable development requires coordinated action across human, social, institutional, economic, technological and environmental dimensions. Our approach is based on five principles.",
    principles: [
      ["Inclusion", "Leave no one behind"],
      ["Participation", "Place communities at the heart of decisions"],
      ["Empowerment", "Strengthen people’s capacities and power to act"],
      ["Innovation", "Promote solutions adapted to local realities"],
      ["Sustainability", "Prioritise initiatives with a positive long-term impact"],
    ],
    ctaTitle: "Acting together for development",
    ctaText:
      "Africa’s development requires collective commitment, strong partnerships and solutions adapted to community realities. Join us!",
    collaborate: "Collaborate with InRED Africa",
    contactUs: "Contact us",
    aboutTitle: "Who are we?",
    about: [
      "InRED Africa, officially named “Inclusion, Resilience & Empowerment for Development in Africa”, is a non-governmental organisation committed to promoting sustainable, inclusive and resilient development in Africa.",
      "Our organisation was born from the conviction that development cannot be fully achieved without including people, strengthening their capacities, protecting their rights and enabling active participation in decisions that affect their future.",
      "We develop initiatives that improve living conditions, strengthen community resilience and promote a fairer, more caring society.",
      "Through our work, we seek to build bridges between communities, institutions, civil society organisations and partners committed to development.",
    ],
    identity: "Our institutional identity",
    identityRows: [
      ["Official name", "Inclusion, Resilience & Empowerment for Development in Africa"],
      ["Acronym", "InRED Africa"],
      ["Type", "Non-governmental organisation (NGO)"],
      ["Country", "Republic of Benin"],
      ["Head office", "Porto-Novo, Ouémé department, Benin"],
      ["Duration", "Unlimited"],
      ["Registration", "NGO-707357"],
    ],
    valuesTitle: "Our values",
    values: [
      [
        "Inclusion",
        "We believe in a society where everyone can access opportunities and participate in development, regardless of social or economic circumstances.",
      ],
      [
        "Solidarity",
        "We encourage mutual assistance, cooperation and collective mobilisation for the common good.",
      ],
      [
        "Responsibility",
        "We promote responsible management of resources, commitments and development initiatives.",
      ],
      ["Integrity", "We act with transparency, honesty and respect for ethical principles."],
      ["Innovation", "We encourage creativity and new solutions to development challenges."],
      [
        "Resilience",
        "We help individuals and communities anticipate, adapt to and cope with change and crises.",
      ],
    ],
    partnersTitle: "Together, for lasting impact.",
    partnersIntro:
      "Sustainable development relies on cooperation and the mobilisation of skills, resources and experience.",
    wish: "We want to collaborate with",
    partnerTypes: [
      "Public institutions and local authorities",
      "Civil society organisations",
      "National and international NGOs",
      "Technical and financial partners",
      "Academic and research institutions",
      "Companies committed to social responsibility",
      "Innovation and digital transformation actors",
    ],
    why: "Why collaborate with InRED Africa?",
    reasons: [
      "A shared vision of sustainable development",
      "An inclusive and participatory approach",
      "A commitment to strengthening community capacities",
      "Particular attention to initiative sustainability",
      "A dynamic of cooperation and mutual learning",
    ],
    quote: "Together, let us build partnerships that drive change.",
    newsTitle: "Our news and commitments.",
    newsText:
      "At InRED Africa, we believe every initiative matters. Through our news, we share our commitments, actions and opportunities to contribute to more inclusive and sustainable development.",
    soon: "Our first news stories will be published here soon.",
    write: "Write to us",
    joinTitle: "Together, we can make a difference.",
    joinIntro:
      "The development of our communities requires everyone’s commitment. Whether you are an engaged citizen, professional, organisation, institution or company, you can contribute to our mission.",
    join: [
      [
        "Volunteer",
        "Would you like to put your skills, time or energy to work for development? Join our volunteer movement and take part in initiatives that improve living conditions.",
      ],
      [
        "Become a partner",
        "Do you represent an organisation, institution or company and want to develop joint initiatives? InRED Africa welcomes collaborations that share its vision and values.",
      ],
      [
        "Support our initiatives",
        "Your support can contribute to projects in education, health, inclusion, governance, digital technology and the environment.",
      ],
    ],
    contactTitle: "Let’s get in touch.",
    contactText:
      "Would you like to learn more about InRED Africa, discover our initiatives or explore a collaboration? Our team is available to talk with you.",
    address: [
      "Head office",
      "Porto-Novo, Ouémé department, Republic of Benin",
      "Address",
      "5th district",
      "Email",
      "contact@inred-africa.org",
      "Website",
      "www.inred-africa.org",
    ],
    form: ["Name", "Email address", "Message", "Send message"],
    footerTag: "Inclusion, Resilience & Empowerment for Development in Africa",
    rights: "All rights reserved.",
  },
} as const;

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function Flag({ country }: { country: Lang }) {
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

function ReasonIcon() {
  return (
    <svg
      className="reason-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.7 2.7L16.5 9" />
    </svg>
  );
}

function EditorialImage({
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

function Button({
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

function DomainIcon({ index }: { index: number }) {
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

function SectionHead({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function CTA({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <section className="container section cta">
      <div>
        <p className="eyebrow light">InRED Africa</p>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
      </div>
      <div className="cta-actions">
        <Button to="join" tone="white">
          {t.collaborate}
        </Button>
        <Button to="contact" tone="outline">
          {t.contactUs}
        </Button>
      </div>
    </section>
  );
}

function HomeAreas({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <section className="container section home-areas">
      <SectionHead title={t.areasTitle} />
      <div className="home-domain-blocks">
        {t.areas.map(([title, text], i) => (
          <article key={title}>
            <div className={i % 2 ? "red" : "green"}>
              <DomainIcon index={i} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AreasExplorer({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <section className="container areas-page-accordion">
      <div className="domains-showcase">
        <div className="domains-accordion">
          {t.areas.map(([title, text], i) => {
            const isActive = activeDomain === i;
            const panelId = `areas-domain-panel-${i}`;
            return (
              <div className={`domain-accordion-item ${isActive ? "open" : ""}`} key={title}>
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveDomain(i)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <i aria-hidden="true" />
                </button>
                <div
                  className="domain-accordion-panel"
                  id={panelId}
                  aria-hidden={!isActive}
                  inert={!isActive}
                >
                  <div className="domain-accordion-content">
                    <p>{text}</p>
                    <img
                      src={domainImages[i]}
                      alt=""
                      className="domain-mobile-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <figure className="domains-visual">
          <img src={domainImages[activeDomain]} alt={t.areas[activeDomain][0]} />
          <figcaption>
            <span>{String(activeDomain + 1).padStart(2, "0")}</span>
            <strong>{t.areas[activeDomain][0]}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Home({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;
  return (
    <>
      <main>
        <section className="container hero">
          <div className="hero-copy">
            <h1>
              {t.hero[0]}
              <span className="green">{t.hero[1]}</span>
              <span className="red">{t.hero[2]}</span>
              {t.hero[3]}
            </h1>
            <p className="lead">{t.heroText}</p>
            <div className="hero-actions">
              <Button to="about">{t.discover}</Button>
              <Button to="areas" tone="outline">
                {t.seeAreas}
              </Button>
            </div>
          </div>
          <div className="hero-art">
            <img src={photos.hero} alt={t.visual} />
            <div className="photo-shade" />
            <div className="rings" />
            <p>{t.visual}</p>
          </div>
        </section>
        <section className="vision-band">
          <div className="container">
            <p className="vision-statement">{t.vision}</p>
          </div>
        </section>
        <section className="container section two-cols">
          <div>
            <h2>{t.visionTitle}</h2>
            <p className="body-large">{t.visionText}</p>
          </div>
          <div>
            <h2>{t.missionTitle}</h2>
            <p>{t.missionText}</p>
            <ul className="line-list">
              {t.mission.slice(0, 4).map((item) => (
                <li key={item}>
                  {item}
                  <span>↗</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section
          className="container photo-grid"
          aria-label={isFr ? "Nos engagements en images" : "Our commitments in pictures"}
        >
          <EditorialImage
            src={photos.agriculture}
            alt={isFr ? "Une femme dans un champ" : "A woman standing in a field"}
            credit="Iboyi Ejiro"
            showCaption={false}
          />
          <EditorialImage
            src={photos.health}
            alt={
              isFr
                ? "Une action de soutien auprès d'un enfant"
                : "A community support action with a child"
            }
            credit="Michael Ali"
            showCaption={false}
          />
          <EditorialImage
            src={photos.environment}
            alt={isFr ? "Un paysage naturel africain" : "A natural African landscape"}
            credit="Damian Patkowski"
            showCaption={false}
          />
        </section>
        <HomeAreas t={t} />
        <section className="approach section">
          <div className="container">
            <SectionHead title={t.approachTitle} />
            <div className="principles">
              {t.principles.map(([title, text], i) => (
                <article key={title} className={i % 2 ? "accent-red" : ""}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <CTA t={t} />
      </main>
    </>
  );
}

function PageHero({ title, text, index }: { title: string; text?: string; index?: string }) {
  return (
    <section className="container page-hero">
      {index && <p className="eyebrow">{index} — InRED Africa</p>}
      <h1>{title}</h1>
      {text && <p className="lead">{text}</p>}
    </section>
  );
}

function About({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.aboutTitle} />
      <section className="container about-intro">
        <div className="about-lead">
          <p>{t.about[0]}</p>
        </div>
      </section>
      <section className="container identity">
        <SectionHead title={t.identity} />
        <dl>
          {t.identityRows.map(([a, b]) => (
            <div key={a}>
              <dt>{a}</dt>
              <dd>{b}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="container section">
        <SectionHead title={t.valuesTitle} />
        <div className="values-grid">
          {t.values.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3 className={i % 2 ? "red" : "green"}>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA t={t} />
    </main>
  );
}

function Areas({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.areasIntro} />
      <AreasExplorer t={t} />
      <CTA t={t} />
    </main>
  );
}

function Partners({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;
  return (
    <main>
      <PageHero title={t.partnersTitle} text={t.partnersIntro} />
      <EditorialImage
        className="container page-image page-image-slim"
        src={photos.collaboration}
        alt={
          isFr
            ? "Des professionnels échangent autour d'une table"
            : "Professionals collaborating around a table"
        }
        credit="WOCinTech"
        showCaption={false}
      />
      <section className="container section partner-section">
        <SectionHead title={t.wish} />
        <div className="partner-types-grid">
          {t.partnerTypes.map((x, i) => (
            <article className="partner-type-card" key={x}>
              <div>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{x}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="container partner-why">
        <SectionHead title={t.why} />
        <ul>
          {t.reasons.map((x) => (
            <li key={x}>
              <ReasonIcon />
              {x}
            </li>
          ))}
        </ul>
      </section>
      <section className="container quote-block">
        <blockquote>“{t.quote}”</blockquote>
        <Button to="mailto:contact@inred-africa.org" tone="red">
          {t.becomePartner}
        </Button>
      </section>
    </main>
  );
}

function ArticleCard({ lang }: { lang: Lang }) {
  return (
    <article className="article-card" aria-hidden="true">
      <div className="article-image" />
      <time>12.06.2026</time>
      <h3>{lang === "fr" ? "Titre de l’article" : "Article title"}</h3>
      <p>
        {lang === "fr"
          ? "Un court extrait de l’article apparaîtra à cet endroit."
          : "A short article excerpt will appear here."}
      </p>
    </article>
  );
}

function News({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;
  return (
    <main>
      <PageHero title={t.newsTitle} text={t.newsText} />
      <section className="container empty-news">
        <img
          src={photos.news}
          alt={isFr ? "Vie communautaire en Afrique" : "Community life in Africa"}
          loading="lazy"
        />
        <div className="empty-news-content">
          <div className="news-mark">N°01</div>
          <h2>{t.soon}</h2>
          <Button to="contact">{t.write}</Button>
        </div>
      </section>
      <div className="hidden-component">
        <ArticleCard lang={t === copy.fr ? "fr" : "en"} />
      </div>
    </main>
  );
}

function Join({ t }: { t: typeof copy.fr | typeof copy.en }) {
  return (
    <main>
      <PageHero title={t.joinTitle} text={t.joinIntro} />
      <section className="container join-grid">
        {t.join.map(([title, text], i) => (
          <a className={`join-tile tile-${i}`} href="#/contact" key={title}>
            <span>0{i + 1}</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </section>
    </main>
  );
}

function Contact({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const [sendConfirmationOpen, setSendConfirmationOpen] = useState(false);
  const isFr = t === copy.fr;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const mailto = `mailto:contact@inred-africa.org?subject=${encodeURIComponent(String(fd.get("name")))}&body=${encodeURIComponent(String(fd.get("message")) + "\n\n" + String(fd.get("email")))}`;
    setSendConfirmationOpen(true);
    window.setTimeout(() => {
      window.location.href = mailto;
    }, 150);
  };
  return (
    <main>
      <PageHero title={t.contactTitle} text={t.contactText} />
      <section className="container contact-grid">
        <div className="contact-card">
          <p className="eyebrow">InRED Africa</p>
          <h2>{t.contactUs}</h2>
          <dl>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={t.address[i * 2]}>
                <dt>{t.address[i * 2]}</dt>
                <dd>
                  {i === 2 ? (
                    <a href="mailto:contact@inred-africa.org">{t.address[i * 2 + 1]}</a>
                  ) : (
                    t.address[i * 2 + 1]
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <form onSubmit={submit}>
          <label>
            {t.form[0]}
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            {t.form[1]}
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            {t.form[2]}
            <textarea name="message" required rows={6} />
          </label>
          <button className="pill pill-green" type="submit">
            <span>{t.form[3]}</span>
            <Arrow />
          </button>
        </form>
      </section>
      {sendConfirmationOpen && (
        <div className="send-modal-backdrop" onMouseDown={() => setSendConfirmationOpen(false)}>
          <div
            className="send-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="send-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="send-modal-close"
              type="button"
              onClick={() => setSendConfirmationOpen(false)}
              aria-label={isFr ? "Fermer la confirmation" : "Close confirmation"}
            >
              ×
            </button>
            <ReasonIcon />
            <h2 id="send-modal-title">
              {isFr ? "Votre message est prêt à être envoyé." : "Your message is ready to send."}
            </h2>
            <p>
              {isFr
                ? "Votre application de messagerie s’est ouverte pour finaliser l’envoi à InRED Africa."
                : "Your email application has opened so you can complete sending your message to InRED Africa."}
            </p>
            <button
              className="pill pill-green"
              type="button"
              onClick={() => setSendConfirmationOpen(false)}
            >
              <span>{isFr ? "Fermer" : "Close"}</span>
              <Arrow />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function Header({ page, lang, setLang }: { page: Page; lang: Lang; setLang: (x: Lang) => void }) {
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

function Footer({ t }: { t: typeof copy.fr | typeof copy.en }) {
  const isFr = t === copy.fr;
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <a href="#/home" className="footer-logo" aria-label="InRED Africa">
            <img
              src={isFr ? logoFr : logoEn}
              alt={isFr ? "Logo InRED Africa en français" : "InRED Africa logo in English"}
            />
          </a>
          <p>{t.footerTag}</p>
        </div>
        <nav>
          {routes.map((route, i) => (
            <a href={`#/${route}`} key={route}>
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <address>
          <a href="mailto:contact@inred-africa.org">contact@inred-africa.org</a>
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

function getPage(): Page {
  const route = window.location.hash.replace("#/", "") as Page;
  return routes.includes(route) ? route : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage());
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem("inred-lang") as Lang) || "fr",
  );
  useEffect(() => {
    const onHash = () => {
      setPage(getPage());
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
  }, [page, t]);
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
