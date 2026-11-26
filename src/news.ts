import { photos, type Lang } from "./content";

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  date: string;
  dateTime: string;
  readTime: string;
  content: string[];
  /** Lié à un événement ou pièce jointe (ex. lien d'inscription externe). */
  link?: { url: string; label: string };
  /** Fichier PDF téléchargeable de l'article, s'il existe. */
  pdf?: string;
};

export const newsArticles: Record<Lang, NewsArticle[]> = {
  fr: [
    {
      id: "webinaire-conditionnement-cigarettes",
      title:
        "Webinaire | Lancement de la première édition du rapport sur le conditionnement des cigarettes en Afrique",
      summary:
        "InRED Africa co-anime le webinaire de lancement du rapport de la Région africaine de l’OMS sur le conditionnement des cigarettes. Vendredi 4 décembre 2026, sur Zoom, avec interprétation en français, en anglais et en portugais.",
      image: "/webinaire-rapport-cigarettes.jpg",
      imageAlt:
        "Affiche du webinaire « The State of Cigarette Packaging in Africa » : intervenants, date du 4 décembre 2026 et QR code d’inscription",
      date: "26 novembre 2026",
      dateTime: "2026-11-26",
      readTime: "3 min de lecture",
      content: [
        "Le rapport de la Région africaine de l’OMS sur le conditionnement des cigarettes présente un état des lieux des politiques relatives au conditionnement des cigarettes et aux avertissements sanitaires dans la Région africaine de l’OMS.",
        "Ce webinaire mettra en lumière les progrès réalisés à l’échelle régionale, les lacunes persistantes ainsi que les possibilités de renforcer la réglementation en matière de conditionnement des produits du tabac, notamment à travers l’adoption du paquet neutre. Les échanges s’appuieront également sur les expériences et les enseignements tirés de différents pays.",
        "Les participants examineront par ailleurs comment ce rapport peut contribuer au plaidoyer, à l’action politique, à la recherche et au renforcement de la collaboration régionale.",
        "Rendez-vous vendredi 4 décembre 2026 à 13h GMT | 15h SAST | 14h CAT | 8h EST, sur Zoom. L’interprétation sera disponible en anglais, en français et en portugais.",
        "Intervenants : Ms Bintou Camara Bityeki (Campaign for Tobacco-Free Kids – CTFK), Mr Rob Cunningham (Canadian Cancer Society – CCS), Mr Leonce Sessou (Inclusion, Resilience & Empowerment for Development in Africa – InRED Africa), Prof Catherine Egbe (South African Medical Research Council – SAMRC), Prof Lekan Ayo-Yusuf (Africa Centre for Tobacco Industry Monitoring and Policy Research, Université de Pretoria – ATIM) et Mr Bode Oluwafemi (Corporate Accountability and Public Participation Africa – CAPPA).",
        "Modératrices : Ms Ouleymatou Diop (Global Alliance for Tobacco Control – GATC) et Ms Cecilia Lubanga (Kenya Tobacco Control & Health Promotion Alliance – KETCA).",
      ],
      link: {
        url: "https://bit.ly/4ARyQA6",
        label: "S’inscrire au webinaire",
      },
    },
    {
      id: "education-inclusive",
      title: "L’éducation inclusive, un levier d’autonomie",
      summary:
        "Comment l’éducation, la formation et la valorisation des talents peuvent renforcer le pouvoir d’agir de chacun.",
      image: photos.education,
      imageAlt: "Une salle de classe consacrée à l’apprentissage",
      date: "24 novembre 2026",
      dateTime: "2026-11-24",
      readTime: "4 min de lecture",
      content: [
        "L’accès à une éducation inclusive et de qualité est essentiel pour permettre à chacun de développer ses capacités et de participer pleinement à la vie de sa communauté.",
        "La formation professionnelle, le renforcement des compétences et l’entrepreneuriat ouvrent des perspectives concrètes. La créativité, les arts et le patrimoine culturel contribuent eux aussi à l’autonomie et au développement humain.",
        "InRED Africa place l’éducation et l’autonomisation au cœur de son engagement pour des communautés fortes, capables d’agir sur leur avenir.",
      ],
    },
    {
      id: "sante-communautes",
      title: "Santé et bien-être : agir au plus près des communautés",
      summary:
        "La prévention, l’accès aux soins et les pratiques d’hygiène sont des piliers d’un développement durable.",
      image: photos.health,
      imageAlt: "Un professionnel de santé accompagne une communauté",
      date: "24 novembre 2026",
      dateTime: "2026-11-24",
      readTime: "3 min de lecture",
      content: [
        "La santé des communautés repose à la fois sur la prévention, l’accès à des soins de qualité et la diffusion de bonnes pratiques d’hygiène et de bien-être.",
        "La lutte contre les épidémies et les maladies non transmissibles demande une mobilisation durable et des réponses adaptées aux réalités locales.",
        "Promouvoir la santé et les droits humains contribue à protéger la dignité de chaque personne et à renforcer la résilience collective.",
      ],
    },
    {
      id: "environnement-climat",
      title: "Environnement et climat : renforcer la résilience locale",
      summary:
        "Des communautés mieux préparées peuvent protéger leurs ressources et faire face aux risques environnementaux.",
      image: photos.environment,
      imageAlt: "Une forêt, ressource naturelle à préserver",
      date: "24 novembre 2026",
      dateTime: "2026-11-24",
      readTime: "5 min de lecture",
      content: [
        "La protection de l’environnement et la résilience climatique sont étroitement liées aux conditions de vie et aux ressources des communautés.",
        "L’assainissement, la gestion des risques environnementaux et l’accès aux énergies renouvelables et propres font partie des leviers d’action pour un avenir durable.",
        "La participation des populations est déterminante pour concevoir et faire vivre des solutions adaptées aux contextes locaux.",
      ],
    },
    {
      id: "innovation-numerique",
      title: "L’innovation numérique au service du développement",
      summary:
        "Adapter les technologies aux besoins locaux peut faciliter l’accès à l’information et améliorer les conditions de vie.",
      image: photos.technology,
      imageAlt: "Des personnes utilisent des outils numériques",
      date: "24 novembre 2026",
      dateTime: "2026-11-24",
      readTime: "4 min de lecture",
      content: [
        "Les technologies de l’information et de la communication peuvent contribuer à répondre à des besoins concrets lorsqu’elles sont accessibles et adaptées aux usages locaux.",
        "Le transfert, l’appropriation et l’utilisation des technologies sont des étapes importantes pour que l’innovation bénéficie durablement aux communautés.",
        "La transformation numérique est un levier complémentaire de l’éducation, de l’inclusion et du renforcement des capacités.",
      ],
    },
  ],
  en: [
    {
      id: "webinaire-conditionnement-cigarettes",
      title:
        "Webinar | Launch of the first edition of the report on cigarette packaging in Africa",
      summary:
        "InRED Africa co-hosts the webinar launching the WHO African Region report on cigarette packaging. Friday, December 4, 2026, on Zoom, with interpretation in English, French and Portuguese.",
      image: "/webinaire-rapport-cigarettes.jpg",
      imageAlt:
        "Poster for the “The State of Cigarette Packaging in Africa” webinar: speakers, December 4, 2026 date and registration QR code",
      date: "November 26, 2026",
      dateTime: "2026-11-26",
      readTime: "3 min read",
      content: [
        "The WHO African Region report on cigarette packaging presents an overview of policies related to cigarette packaging and health warnings across the WHO African Region.",
        "This webinar will highlight progress made at regional level, persistent gaps, and opportunities to strengthen tobacco product packaging regulation, notably through the adoption of plain packaging. Discussions will also draw on experiences and lessons learned from different countries.",
        "Participants will also examine how this report can contribute to advocacy, policy action, research and the strengthening of regional collaboration.",
        "Join us on Friday, December 4, 2026 at 1pm GMT | 3pm SAST | 2pm CAT | 8am EST, on Zoom. Interpretation will be available in English, French and Portuguese.",
        "Speakers: Ms Bintou Camara Bityeki (Campaign for Tobacco-Free Kids – CTFK), Mr Rob Cunningham (Canadian Cancer Society – CCS), Mr Leonce Sessou (Inclusion, Resilience & Empowerment for Development in Africa – InRED Africa), Prof Catherine Egbe (South African Medical Research Council – SAMRC), Prof Lekan Ayo-Yusuf (Africa Centre for Tobacco Industry Monitoring and Policy Research, University of Pretoria – ATIM) and Mr Bode Oluwafemi (Corporate Accountability and Public Participation Africa – CAPPA).",
        "Moderators: Ms Ouleymatou Diop (Global Alliance for Tobacco Control – GATC) and Ms Cecilia Lubanga (Kenya Tobacco Control & Health Promotion Alliance – KETCA).",
      ],
      link: {
        url: "https://bit.ly/4ARyQA6",
        label: "Register for the webinar",
      },
    },
    {
      id: "education-inclusive",
      title: "Inclusive education as a path to empowerment",
      summary:
        "How education, training and the value of talent can strengthen everyone’s ability to shape their future.",
      image: photos.education,
      imageAlt: "A classroom dedicated to learning",
      date: "November 24, 2026",
      dateTime: "2026-11-24",
      readTime: "4 min read",
      content: [
        "Access to inclusive, quality education is essential to help everyone develop their abilities and participate fully in community life.",
        "Vocational training, capacity building and entrepreneurship create practical opportunities. Creativity, the arts and cultural heritage also contribute to autonomy and human development.",
        "InRED Africa places education and empowerment at the heart of its commitment to strong communities that can shape their own future.",
      ],
    },
    {
      id: "sante-communautes",
      title: "Health and well-being: working alongside communities",
      summary:
        "Prevention, access to care and good hygiene practices are pillars of sustainable development.",
      image: photos.health,
      imageAlt: "A health professional supporting a community",
      date: "November 24, 2026",
      dateTime: "2026-11-24",
      readTime: "3 min read",
      content: [
        "Community health depends on prevention, access to quality care and the sharing of good hygiene and well-being practices.",
        "Addressing epidemics and non-communicable diseases calls for sustained engagement and responses adapted to local realities.",
        "Promoting health and human rights helps protect every person’s dignity and strengthen collective resilience.",
      ],
    },
    {
      id: "environnement-climat",
      title: "Environment and climate: strengthening local resilience",
      summary:
        "Well-prepared communities can protect their resources and respond to environmental risks.",
      image: photos.environment,
      imageAlt: "A forest and natural resource to protect",
      date: "November 24, 2026",
      dateTime: "2026-11-24",
      readTime: "5 min read",
      content: [
        "Environmental protection and climate resilience are closely connected to community livelihoods and resources.",
        "Sanitation, environmental risk management and access to clean, renewable energy are important pathways toward a sustainable future.",
        "Community participation is essential to designing and sustaining solutions adapted to local contexts.",
      ],
    },
    {
      id: "innovation-numerique",
      title: "Digital innovation in support of development",
      summary:
        "Adapting technology to local needs can expand access to information and improve living conditions.",
      image: photos.technology,
      imageAlt: "People using digital tools",
      date: "November 24, 2026",
      dateTime: "2026-11-24",
      readTime: "4 min read",
      content: [
        "Information and communication technologies can help address practical needs when they are accessible and adapted to local use.",
        "Technology transfer, ownership and adoption are important steps in ensuring innovation benefits communities over time.",
        "Digital transformation is a complementary lever for education, inclusion and capacity building.",
      ],
    },
  ],
};
