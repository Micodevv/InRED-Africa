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
};

export const newsArticles: Record<Lang, NewsArticle[]> = {
  fr: [
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
