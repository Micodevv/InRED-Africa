import logoFr from "./assets/logo-fr.jpg";
import logoEn from "./assets/logo-en.jpg";
import africaMap from "./assets/africa-map.jpeg";

export type Lang = "fr" | "en";

export type Page = "home" | "about" | "areas" | "partners" | "news" | "join" | "contact";

export const routes: Page[] = ["home", "about", "areas", "news", "partners", "join", "contact"];

export const photos = {
  hero: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1600&q=85",
  education:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85",
  collaboration:
    "https://images.unsplash.com/photo-1653566031486-dc4ead13a35d?auto=format&fit=crop&w=1600&q=85",
  health:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  environment:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
  technology:
    "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=1400&q=85",
  culture:
    "https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?auto=format&fit=crop&w=1400&q=85",
  news: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&w=1400&q=85",
} as const;

export const domainImages = [
  photos.education,
  photos.health,
  photos.environment,
  photos.technology,
  photos.collaboration,
  photos.culture,
] as const;

export const copy = {
  fr: {
    nav: [
      "Accueil",
      "À propos",
      "Domaines",
      "Actualités",
      "Partenaires",
      "Nous rejoindre",
      "Contact",
    ],
    place: "ONG basée à Porto-Novo, Bénin",
    hero: ["Construisons ensemble une Afrique ", "inclusive,", " résiliente", " et durable."],
    heroText:
      "InRED Africa œuvre pour un développement durable et inclusif à travers l'éducation, l'autonomisation des communautés, la santé, l'innovation technologique et la préservation de l'environnement.",
    discover: "Découvrir InRED",
    seeAreas: "Nos domaines d'intervention",
    becomePartner: "Devenir partenaire",
    visual: "L’humain d’abord. Des communautés fortes, actrices de leur avenir.",
    vision: "L’humain d’abord. Des communautés fortes, actrices de leur avenir.",
    motto: ["Communauté", "Solidarité", "Progrès"],
    visionTitle: "Notre vision",
    visionText:
      "Une Afrique plus juste, inclusive et résiliente, où les populations sont en bonne santé, les droits humains respectés, les institutions responsables et les communautés autonomes, grâce notamment à l'innovation technologique, aux énergies propres et à une gestion durable des ressources.",
    missionTitle: "Notre mission",
    missionText:
      "Promouvoir un développement durable, inclusif et résilient à travers des initiatives qui passent par :",
    mission: [
      "La promotion de la santé et des droits humains",
      "L'éducation et le renforcement des capacités",
      "L'autonomisation des populations",
      "La gouvernance éthique et participative",
      "L'appropriation des technologies",
      "La préservation de l'environnement",
    ],
    areasTitle: "Nos domaines d'intervention",
    areasIntro: "Six champs d’action, une même ambition.",
    areas: [
      [
        "Éducation, formation et autonomisation",
        "Promouvoir l’accès à une éducation inclusive et de qualité, à la formation professionnelle, au renforcement des capacités et à l’entrepreneuriat. Soutenir également la créativité et la valorisation des arts et du patrimoine culturel comme leviers d’autonomie et de développement humain.",
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
        "Encourager le transfert, l’adaptation et l’utilisation des technologies, notamment des technologies de l’information et de la communication, pour accélérer le développement et améliorer les conditions de vie des communautés.",
      ],
      [
        "Droits humains, inclusion et équité de genre",
        "Promouvoir les droits humains, l’inclusion sociale, l’égalité des chances et l’équité de genre, en veillant à la protection de la dignité humaine et à la valorisation du potentiel de chaque personne.",
      ],
      [
        "Citoyenneté et gouvernance participative",
        "Contribuer à l’éducation à la citoyenneté et promouvoir une gouvernance éthique, transparente, responsable et participative, favorisant l’engagement citoyen et la redevabilité des institutions.",
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
    readMore: "Lire plus",
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
      "contact@inredafrica.org",
      "Téléphone",
      "+229 0160833631",
      "Site web",
      "www.inredafrica.org",
    ],
    form: ["Nom", "Adresse e-mail", "Message", "Envoyer le message"],
    footerTag: "Inclusion, Résilience & Empowerment pour le Développement en Afrique",
    rights: "Tous droits réservés.",
  },
  en: {
    nav: ["Home", "About", "Focus areas", "News", "Partners", "Join us", "Contact"],
    place: "NGO based in Porto-Novo, Benin",
    hero: ["Let’s build an ", "inclusive,", " resilient", " and sustainable Africa."],
    heroText:
      "InRED Africa works for inclusive and sustainable development through education, community empowerment, health, technological innovation and environmental protection.",
    discover: "Discover InRED",
    seeAreas: "Our focus areas",
    becomePartner: "Become a partner",
    visual: "People first. Strong communities, shaping their own future.",
    vision: "People first. Strong communities, shaping their own future.",
    motto: ["Community", "Solidarity", "Progress"],
    visionTitle: "Our vision",
    visionText:
      "A fairer, more inclusive and resilient Africa, where people are healthy, human rights are respected, institutions are accountable and communities are autonomous, thanks in particular to technological innovation, clean energy and sustainable resource management.",
    missionTitle: "Our mission",
    missionText:
      "Promote sustainable, inclusive and resilient development through initiatives based on:",
    mission: [
      "Promoting health and human rights",
      "Education and capacity building",
      "Empowering people",
      "Ethical and participatory governance",
      "Technology ownership",
      "Environmental protection",
    ],
    areasTitle: "Our focus areas",
    areasIntro: "Six fields of action, one ambition.",
    areas: [
      [
        "Education, training and empowerment",
        "Promote access to inclusive, quality education, vocational training, capacity building and entrepreneurship. Also support creativity and the appreciation of arts and cultural heritage as drivers of autonomy and human development.",
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
        "Encourage the transfer, adaptation and use of technology, particularly information and communication technologies, to accelerate development and improve communities’ living conditions.",
      ],
      [
        "Human rights, inclusion and gender equity",
        "Promote human rights, social inclusion, equal opportunities and gender equity, protecting human dignity and valuing each person’s potential.",
      ],
      [
        "Citizenship and participatory governance",
        "Contribute to citizenship education and promote ethical, transparent, accountable and participatory governance that encourages civic engagement and institutional accountability.",
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
    readMore: "Read more",
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
      "contact@inredafrica.org",
      "Phone",
      "+229 0160833631",
      "Website",
      "www.inredafrica.org",
    ],
    form: ["Name", "Email address", "Message", "Send message"],
    footerTag: "Inclusion, Resilience & Empowerment for Development in Africa",
    rights: "All rights reserved.",
  },
} as const;

export { logoFr, logoEn, africaMap };
