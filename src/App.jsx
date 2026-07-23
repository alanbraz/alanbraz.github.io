import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Podcast, 
  Mic,
  FileText, 
  Award, 
  Globe, 
  Mail, 
  Moon, 
  Sun, 
  BookOpen, 
  Users, 
  Code, 
  ExternalLink,
  GraduationCap,
  MessageSquare,
  BotMessageSquare,
  Rss,
  Play,
  Radio,
  Video,
  Megaphone,
  Instagram,
  MessagesSquare,
  FileDown,
  Presentation,
  Youtube,
  Apple
} from 'lucide-react';
import speakerImg from './assets/speaker.jpg';

// --- Data & Content Configuration ---
// const RESUME_CHAT_URL = "https://chatgpt.com/g/g-69246c1df0ec8191b36d8d7a8b84c249-alan-braz-liderando-transformacoes-com-ia";
const RESUME_CHAT_URL = "https://cv.alanbraz.com.br/?model=alan-braz";
const WHATSAPP_CHAT_URL = "https://api.whatsapp.com/send?phone=5519999850853&text=Olá Alan, vi o seu site e gostaria de conversar sobre uma palestra ou workshop sobre IA agêntica.";

const DATA = {
  en: {
    nav: {
      about: "Mission",
      projects: "Impact",
      media: "Signals",
      talks: "Talks",
      teaching: "Teaching",
      contact: "Mentoring"
    },
    podcast_feed: {
      title: "Recent Signals",
      subtitle: "Field notes & broadcasts",
      listen: "Listen now",
      loading: "Fetching latest signal...",
      error: "Signal lost. Unable to load feed."
    },
    hero: {
      // role: "Technology Executive in Deep Tech",
      role: "Agentic AI Systems Architect, building and evaluating multi-agent systems since 2017.",
      cta: "See how I build defensible technology",
      resume_chat: "Ask my AI agent about my talks & experience",
      whatsapp_cta: "Book me for a talk on WhatsApp"
    },
    about: {
      title: "Depth, Scale, and Governance",
      text: "I build AI agents that survive contact with production. I've worked on multi-agent and conversational AI since 2017, before \"agentic AI\" was a category, producing patents in multi-agent coordination, hierarchical model deployment, and black-box evaluation of agents. As Lead Generative AI Systems Architect at IBM Consulting (Latin America), I design and ship end-to-end agentic solutions: LLM orchestration, RAG, guardrails, and agent evaluation frameworks, with security, compliance, resilience, and cost as first-class requirements. Master's in Computer Science from UNICAMP, 15 patents, and 18 publications (h-index 10, 400+ citations), with 2.5 years at IBM Research headquarters in New York. I coordinate the Generative AI tracks at TDC, teach AI to executives at MIT Sloan Management Review Brazil and to developers at Alura, and host the PullreCast podcast."
      // text: "I operate where software engineering meets complex science and generative AI shifts from research to product. My career is built on turning impractical ideas or so-called impossible problems into scalable, profitable technology. I design engineering cultures that value rigor, open-source collaboration, and autonomy to ship the future, not just manage it."
    },
    stats: [
      { label: "Talks & Workshops", value: "150+", icon: <Megaphone size={20} /> },
      { label: "Patents", value: "15", icon: <Award size={20} /> },
      { label: "Peer-reviewed papers (h-index 10)", value: "18", icon: <FileText size={20} /> },
      { label: "Building multi-agent systems since", value: "2017", icon: <BotMessageSquare size={20} /> },
    ],
    eminence: {
      title: "Technical Eminence",
      items: [
        {
          title: "IBM Generative & Agentic AI Expert: Architect",
          org: "IBM",
          year: "2025"
        },
        { 
          title: "IBM Tech 2024", 
          org: "IBM Corp.", 
          year: "2024"
        },
        { 
          title: "Community All-Star", 
          org: "IBM Open Innovation Community", 
          year: "2023"
        },
        {
          title: "Multi-agent & agent evaluation patents",
          org: "USPTO",
          year: "2017-2020"
        },
        { title: "Research Division Award (RDA), 2x", org: "IBM Research", year: "2013,2014" }
      ]
    },
    logos: {
      title: "Stages & Classrooms",
      items: ["TDC (The Developer's Conference)", "IBM InterConnect (Las Vegas)", "Agile Conference (Washington, DC)", "SRII Global Conference (San Jose)", "IBM Innovate (Orlando)", "MIT Sloan Management Review Brasil", "Alura", "Harvard Business School Online", "Northwestern University", "Fundação Dom Cabral", "UNICAMP", "PUC-Campinas", "TechNights (IBM)", "CBSoft AIware", "Rádio JP News"]
    },
    talks: {
      title: "Featured Talks",
      subtitle: "Anyone can demo an agent. Few can prove it works, know why it fails, or what it costs at scale. Available as keynote, hands-on workshop, or executive briefing.",
      items: [
        {
          title: "Agents That Survive Production",
          audience: "Technical, for architects & engineering leaders",
          desc: "Orchestration, guardrails, and the evaluation problem nobody demos. A reference architecture for agentic systems in production and a concrete method to prove your agents actually work, including black-box testing. Grounded in patents and real production systems, not slides.",
          tags: ["Reference architecture", "Agent evaluation", "Failure modes & cost"],
          icon: <BotMessageSquare size={24} className="text-blue-500" />
        },
        {
          title: "AI Agents for Your Business",
          audience: "Executive, for leaders & business owners",
          desc: "Where AI agents make money and where they waste it. A hype-free, plain-language map of what agents really are (the \"AI employee\" metaphor), the low-risk use cases with real ROI, and the five pitfalls that quietly cost money. You leave with a 30-day plan.",
          tags: ["No-hype", "Real ROI", "30-day plan"],
          icon: <Presentation size={24} className="text-teal-500" />
        }
      ]
    },
    experience: {
      title: "Experience in the Arena",
      items: [
        { role: "Lead Generative AI Systems Architect", company: "IBM Consulting, Data & AI Latin America", period: "Dec 2025 - Present", desc: "Architect and Subject Matter Expert for AI agent solutions across banking and telecom clients, including multi-agent systems and a voice-enabled, low-latency solution. I design end-to-end agentic AI with IBM watsonx Orchestrate and strategic partners (Azure, Deepgram, ElevenLabs), balancing security, compliance, resilience, cost, and responsible AI." },
        { role: "Professor", company: "MIT Sloan Management Review Brasil", period: "2025 - Present", desc: "Equipping executives to lead AI-first strategies, from prompt engineering discipline to product delivery frameworks." },
        { role: "Guest Lecturer", company: "Alura", period: "2025 - Present", desc: "Teaching developers advanced modules in the Artificial Intelligence career tracks: Advanced RAG techniques with LangChain, and building intelligent agents with LangChain, LangGraph, and LangSmith." },
        { role: "Research Engineering Manager, AI & Hybrid Cloud", company: "IBM Research Brazil", period: "2023 - 2025", desc: "Led engineering of LLM/agent systems: RAG pipelines, guardrails, inference optimization, and enterprise-grade LLM validation/evaluation frameworks that withstand enterprise scale." },
        { role: "Podcast Co-founder and Host", company: "PullreCast", period: "2022 - Present", desc: "Providing the podcast’s technical, analytical, and strategic foundation, representing the “lab side” with a perspective deeply grounded in research, innovation, and real-world practice" },
        { role: "Senior Research Software Engineer & Global Tech Lead", company: "IBM Research Brazil", period: "2019 - 2023", desc: "Productized multi-tenant SaaS on OpenShift/AWS, automated multi-cloud infrastructure, and led the distributed OSDU APIs that became IBM Open Data for Industries and a Schlumberger partnership." },
        { 
          role: "Software Engineering Researcher 🇺🇸", 
          company: "IBM TJ Watson Research Center (NY, USA)", 
          period: "2017 - 2019", 
          desc: "Selected to operate from HQ. Co-authored patents and papers on multi-agent conversational architectures and agent evaluation (the foundation of today's agentic AI), and co-maintained the open-source AIMMX (MSR)." 
        },
        { role: "Software Engineering Researcher, Social Data Analytics", company: "IBM Research Brazil", period: "2013 - 2016", desc: "Architected real-time Big Data pipelines for social analytics during the FIFA World Cup, feeding live TV broadcast apps; earned 2x Research Division Awards." },
        { role: "Visiting Professor", company: "UNICAMP", period: "2012 - 2016", desc: "Driving engineers beyond theory with extension courses in Agile and Software Engineering." }
      ]
    },
    mentoring: {
      title: "Book a Talk or Workshop",
      subtitle: "Putting AI agents into production and need them to actually work?",
      text: "I deliver keynotes, hands-on workshops, and executive briefings on agentic AI, grounded in patents and real production systems, not slides. From engineering teams shipping multi-agent systems to boards deciding where AI generates ROI.",
      cta: "Schedule a conversation"
    }
  },
  pt: {
    nav: {
      about: "Missão",
      // projects: "Projetos",
      media: "Sinais",
      teaching: "Ensino",
      contact: "Mentoria"
    },
    podcast_feed: {
      title: "Últimos episódios",
      subtitle: "Relatos de campo",
      listen: "Ouvir agora",
      loading: "Coletando o último sinal...",
      error: "Sinal perdido. Não foi possível carregar o feed."
    },
    hero: {
      // role: "Executivo de Tecnologia em Deep Tech",
      role: "Arquiteto de Sistemas de IA Agêntica, construindo e avaliando sistemas multiagentes desde 2017.",
      cta: "Veja como construo tecnologia defensável",
      resume_chat: "Pergunte ao meu agente de IA sobre palestras & experiência",
      whatsapp_cta: "Contrate uma palestra pelo WhatsApp"
    },
    about: {
      title: "Profundidade, Escala e Governança",
      text: "Construo agentes de IA que sobrevivem ao contato com a produção. Trabalho com IA multiagente e conversacional desde 2017, antes de \"IA agêntica\" virar categoria, gerando patentes em coordenação de agentes, deployment hierárquico de modelos e avaliação (black-box testing) de agentes. Como Lead Generative AI Systems Architect na IBM Consulting (América Latina), projeto e entrego soluções agênticas de ponta a ponta: orquestração de LLMs, RAG, guardrails e frameworks de avaliação, com segurança, conformidade, resiliência e custo como requisitos de primeira classe. Mestre em Ciência da Computação pela UNICAMP, 15 patentes e 18 publicações (índice h 10, 400+ citações), com 2,5 anos na sede da IBM Research em Nova York. Coordeno as trilhas de IA Generativa no TDC, ensino IA a executivos na MIT Sloan Management Review Brasil e desenvolvedores na Alura, e ainda apresento o PullreCast."
      // text: "Atuo onde engenharia de software encontra ciência complexa e IA Generativa sai da pesquisa para virar produto. Minha carreira é transformar pesquisas que parecem impraticáveis ou problemas que chamam de insolúveis em tecnologia escalável e lucrativa. Desenho culturas de engenharia que valorizam rigor, colaboração open-source e autonomia para projetar o futuro, não apenas gerenciá-lo."
    },
    stats: [
      { label: "Palestras e workshops", value: "150+", icon: <Megaphone size={20} /> },
      { label: "Patentes", value: "15", icon: <Award size={20} /> },
      { label: "Papers revisados (índice h 10)", value: "18", icon: <FileText size={20} /> },
      { label: "Sistemas multiagentes desde", value: "2017", icon: <BotMessageSquare size={20} /> },
    ],
    eminence: {
      title: "Eminência Técnica",
      items: [
        {
          title: "IBM Generative & Agentic AI Expert: Architect",
          org: "IBM",
          year: "2025"
        },
        { 
          title: "IBM Tech 2024", 
          org: "IBM Corp.", 
          year: "2024"
        },
        { 
          title: "Community All-Star", 
          org: "IBM Open Innovation Community", 
          year: "2023"
        },
        {
          title: "Patentes em multiagente & avaliação de agentes",
          org: "USPTO",
          year: "2017-2020"
        },
        { title: "Research Division Award (RDA), 2x", org: "IBM Research", year: "2013,2014" }
      ]
    },
    media: {
      title: "Influência Técnica",
      items: [
        {
          title: "IA Sob Controle #229",
          desc: "Comentando a queda das ações da IBM depois no anúncio da Anthropic sobre como o Cloude Code pode modernizar aplicações em COBOL.",
          type: "Podcast",
          link: "https://open.spotify.com/episode/6ImA44eWtjNb8JF22U1nks?si=XX4aYZEPSkGi43onNMEYmw&t=1659",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "IA Sob Controle #162",
          desc: "Dissecando a estratégia de IA da IBM e as disciplinas necessárias para entregar produtos, não apenas apresentações.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/162-o-que-a-ibm-vem-fazendo-pelo-mercado-de-la-com-alan-braz/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Liderança Humanizada e o Impacto da IA",
          desc: "Podcast do TDC - Tem tempo para Pergunta? - Alan recebe Valéria Baptista, Product Manager na Magalu.", // Na conversa, eles falam a importância da liderança humanizada, a evolução do papel do líder e o impacto da inteligência artificial nas carreiras e nas empresas, com foco em nuvem e segurança.",
          type: "Videocast",
          link: "https://www.youtube.com/watch?v=SwQ7JCMaQ9g",
          icon: <Video size={20} className="text-red-600" />
        },
        {
          title: "Entrevista Rádio JP News Campinas",
          desc: "Como a IA de fronteira altera modelos de negócio e por que governança precisa ser engenharia, não improviso.",
          type: "TV / Rádio",
          link: "https://www.youtube.com/watch?v=Cbixa3LSXCk",
          icon: <Radio size={20} className="text-blue-500" />
        },
        // {
        //   title: "Seminário PUC-Campinas",
        //   desc: "Human AI & Education: convertendo pesquisa acadêPodcasta em sistemas resilientes de IA para a indústria.",
        //   type: "Painel",
        //   link: "https://www.youtube.com/watch?v=hOivpEPPIuE&t=3656s",
        //   icon: <Video size={20} className="text-red-500" />
        // },
        {
          title: "IA Sob Controle #42",
          desc: "Sobre entregar IA com responsabilidade: embeddings, deepfakes e a engenharia por trás da abordagem da IBM.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/42-novos-modelos-de-embedding-da-openai-deepfake-do-biden-ia-na-ibm/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Vida com IA #103",
          desc: "Mergulho técnico em engenharia de IA e em como navegar uma carreira na fronteira.",
          type: "Podcast",
          link: "https://open.spotify.com/episode/40pdjHdfCbNQ7ayBo9f60Q",
          icon: <Play size={20} className="text-green-500" />
        }
      ]
    },
    logos: {
      title: "Palcos & Salas de Aula",
      items: ["TDC (The Developer's Conference)", "IBM InterConnect (Las Vegas)", "Agile Conference (Washington, DC)", "SRII Global Conference (San Jose)", "IBM Innovate (Orlando)", "MIT Sloan Management Review Brasil", "Alura", "Harvard Business School Online", "Northwestern University", "Fundação Dom Cabral", "UNICAMP", "PUC-Campinas", "TechNights (IBM)", "CBSoft AIware", "Rádio JP News"]
    },
    talks: {
      title: "Palestras em Destaque",
      subtitle: "Qualquer um demonstra um agente. Poucos conseguem provar que funciona, saber por que falha ou quanto custa em escala. Disponíveis como keynote, workshop hands-on ou briefing executivo.",
      items: [
        {
          title: "Agentes que Sobrevivem à Produção",
          audience: "Técnica, para arquitetos & líderes de engenharia",
          desc: "Orquestração, guardrails e o problema de avaliação que ninguém demonstra. Uma arquitetura de referência para sistemas agênticos em produção e um método concreto para provar que seus agentes realmente funcionam, incluindo black-box testing. Baseada em patentes e sistemas reais, não em slides.",
          tags: ["Arquitetura de referência", "Avaliação de agentes", "Modos de falha & custo"],
          icon: <BotMessageSquare size={24} className="text-blue-500" />
        },
        {
          title: "Agentes de IA para o Seu Negócio",
          audience: "Executiva, para líderes & donos de negócio",
          desc: "Onde agentes de IA geram lucro e onde desperdiçam. Um mapa sem hype, em linguagem simples, do que agentes realmente são (a metáfora do \"funcionário de IA\"), os casos de uso de baixo risco com ROI real e as cinco armadilhas que custam dinheiro silenciosamente. Você sai com um plano de 30 dias.",
          tags: ["Sem hype", "ROI real", "Plano de 30 dias"],
          icon: <Presentation size={24} className="text-teal-500" />
        }
      ]
    },
    projects: {
      title: "Entregando Hard Tech",
      items: [
        {
          title: "PullreCast Podcast",
          desc: "Dissecando como IA de fronteira vira vantagem empresarial. Conversas testadas em campo sobre arquitetura, governança e modelos operacionais.",
          tags: ["Podcast", "IA", "Estratégia"],
          link: "https://podcast.ia.br",
          icon: <Podcast size={24} className="text-teal-500" />
        },
        {
          title: "AIMMX",
          desc: "Engenharia para expor o dado escuro de experimentação em IA. Mina repositórios para gerar metadados e impor rigor nas cadeias de IA.",
          tags: ["Python", "Hard Tech", "MSR Paper"],
          link: "https://github.com/ibm/aimmx",
          icon: <Code size={24} className="text-blue-500" />
        },
        {
          title: "GeoScience Advisor",
          desc: "Endureci um protótipo de pesquisa volátil em um advisor de IA pronto para produção em Óleo & Gás. Reduzi incerteza científica em decisões operacionais.",
          tags: ["IA", "Sistemas Complexos", "Produtização"],
          link: "https://www.ibm.com/case-studies/petrobras-geoscience-advisor",
          icon: <Globe size={24} className="text-green-500" />
        }
      ]
    },
    teaching: {
      title: "Ensino & Liderança Intelectual",
      items: [
        {
          title: "LangChain: Técnicas Avançadas de RAG (Alura)",
          desc: "Professor convidado nas trilhas de IA da Alura. Módulos avançados de RAG e desenvolvimento de agentes inteligentes com LangChain, LangGraph e LangSmith.",
          tags: ["Alura", "RAG Avançado", "Agentes / LangGraph"],
          link: "https://www.alura.com.br/curso-online-langchain-rag-avancado",
          icon: <BotMessageSquare size={24} className="text-teal-500" />
        },
        {
          title: "Maratona IA na sua Carreira",
          desc: "Programa intensivo que força líderes a aplicar IA de fronteira em contextos de negócio com resultados mensuráveis.",
          tags: ["Todas as carreiras", "IA Generativa", "Prompts"],
          link: "https://maratona.ia.br",
          icon: <BookOpen size={24} className="text-orange-500" />
        }
      ]
    },
    experience: {
      title: "Experiência em Campo",
      items: [
        { role: "Arquiteto Líder de Sistemas de IA Generativa", company: "IBM Consulting, Data & AI Latin America", period: "Dez 2025 - Presente", desc: "Arquiteto e Especialista (SME) em soluções de agentes de IA para clientes de bancos e telecom, incluindo sistemas multiagentes e uma solução com voz e baixa latência. Projeto IA agêntica de ponta a ponta com IBM watsonx Orchestrate e parceiros estratégicos (Azure, Deepgram, ElevenLabs), equilibrando segurança, conformidade, resiliência, custo e IA responsável." },
        { role: "Professor", company: "MIT Sloan Management Review Brasil", period: "2025 - Presente", desc: "Preparando executivos para liderar estratégias AI-first, do rigor em prompt engineering aos frameworks de entrega de produto." },
        { role: "Professor Convidado", company: "Alura", period: "2025 - Presente", desc: "Ensinando desenvolvedores em módulos avançados das trilhas de Inteligência Artificial: técnicas avançadas de RAG com LangChain e desenvolvimento de agentes inteligentes com LangChain, LangGraph e LangSmith." },
        { role: "Gerente de Engenharia em Pesquisa, IA & Nuvem Híbrida", company: "IBM Research Brasil", period: "2023 - 2025", desc: "Liderei a engenharia de sistemas de LLM/agentes: pipelines de RAG, guardrails, otimização de inferência e frameworks de validação/avaliação de LLMs de nível corporativo, prontos para escala empresarial." },
        { role: "Cofundador e Host de Podcast", company: "PullreCast", period: "2022 - Presente", desc: "Fornecendo a base técnica, analítica e estratégica do podcast, representando o lado de laboratório com uma perspectiva profundamente ancorada em pesquisa, inovação e prática real." },
        { role: "Engenheiro de Software de Pesquisa Sênior & Global Tech Lead", company: "IBM Research Brasil", period: "2019 - 2023", desc: "Produtizei SaaS multi-tenant em OpenShift/AWS, automatizei infraestrutura multi-cloud e liderei as APIs distribuídas do OSDU que viraram o produto IBM Open Data for Industries e uma parceria com a Schlumberger." },
        { 
          role: "Pesquisador de Engenharia de Software 🇺🇸", 
          company: "IBM TJ Watson Research Center (NY, EUA)", 
          period: "2017 - 2019", 
          desc: "Selecionado para operar a partir do QG. Coautor de patentes e artigos sobre arquiteturas conversacionais multiagente e avaliação de agentes (a base da IA agêntica de hoje), e comantenedor do open-source AIMMX (MSR)." 
        },
        { role: "Pesquisador de Engenharia de Software, Social Data Analytics", company: "IBM Research Brasil", period: "2013 - 2016", desc: "Arquitetei pipelines de Big Data em tempo real para análise social durante a Copa do Mundo FIFA, alimentando apps de transmissão de TV ao vivo; recebi 2x Research Division Awards." },
        { role: "Professor Visitante", company: "UNICAMP", period: "2012 - 2016", desc: "Levando engenheiros além da teoria com cursos de extensão em Engenharia de Software e Ágil." }
      ]
    },
    mentoring: {
      title: "Contrate uma Palestra ou Workshop",
      subtitle: "Colocando agentes de IA em produção e precisa que eles realmente funcionem?",
      text: "Entrego keynotes, workshops hands-on e briefings executivos sobre IA agêntica, baseados em patentes e sistemas reais de produção, não em slides. De times de engenharia entregando sistemas multiagentes a conselhos decidindo onde a IA gera ROI.",
      cta: "Marcar uma conversa"
    }
  }
};

const SUPPORTED_LANGS = ['en', 'pt'];

const getLangFromUrl = () => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const urlLang = (params.get('lang') || '').toLowerCase();
  return SUPPORTED_LANGS.includes(urlLang) ? urlLang : null;
};

const detectBrowserLang = () => {
  if (typeof navigator === 'undefined') return 'en';
  const locales = [
    ...(navigator.languages || []),
    navigator.language,
    navigator.userLanguage,
    Intl.DateTimeFormat().resolvedOptions().locale
  ]
    .filter(Boolean)
    .map((l) => l.toLowerCase());

  const prefersPortuguese = locales.some(
    (loc) => loc.startsWith('pt') || loc.includes('-br') || loc.includes('_br')
  );
  return prefersPortuguese ? 'pt' : 'en';
};

const detectDefaultLang = () => getLangFromUrl() || detectBrowserLang();

const SOCIAL_LINKS = [
  { href: "https://linkedin.com/in/alanbraz", icon: <Linkedin size={20} />, label: { en: "LinkedIn", pt: "LinkedIn" } },
  { href: "https://podcast.ia.br", icon: <Podcast size={20} />, label: { en: "Spotify", pt: "Spotify" } },
  { href: "https://comece.ia.br", icon: <MessagesSquare size={20} />, label: { en: "WhatsApp", pt: "WhatsApp" } },
  { href: "https://github.com/alanbraz", icon: <Github size={20} />, label: { en: "GitHub", pt: "GitHub" } },
  { href: "https://instagram.com/pullrecast", icon: <Instagram size={20} />, label: { en: "Instagram", pt: "Instagram" } },
  { href: "mailto:alan@podcast.ia.br", icon: <Mail size={20} />, label: { en: "Email", pt: "Email" } },
  { href: "/alanbraz_full_resume.pdf", icon: <FileDown size={20} />, label: { en: "Download full resume", pt: "Baixar currículo completo [Inglês]" } },
  // { href: "/Granite-Mellea.pdf", icon: <Presentation size={20} />, label: { en: "Download TN25 slides", pt: "Baixar TN25 slides" } },
];

// --- Components ---

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-slate-700 dark:text-slate-300 transition-all transform hover:scale-110"
    aria-label={label}
    title={label}
  >
    {icon}
  </a>
);

const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
  </div>
);

// New Podcast Feed Component
const PodcastFeed = ({ lang }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const t = DATA[lang].podcast_feed;

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // Using rss2json to convert RSS XML to JSON for client-side consumption
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2Fb411a8c8%2Fpodcast%2Frss&api_key=i6j6dxyipagpit5c0re5kriwol0awey9cclv8h0z&order_dir=desc&count=2');
        const data = await res.json();
        if (data.items) {
          setEpisodes(data.items.slice(0, 2)); // Get top 2 episodes
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  // Helper to strip HTML tags from description
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  if (error) return null; // Hide section if fetch fails gracefully

  return (
    <section className="w-full">
      <SectionHeader title={t.title} icon={<Rss size={24} />} />
      
      {loading ? (
        <div className="flex items-center justify-center p-12 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col items-center gap-3 animate-pulse">
             <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
             <span className="text-slate-700 text-sm font-mono">{t.loading}</span>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {episodes.map((episode, i) => (
            <div key={i} className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Thumbnail or Date Box Fallback */}
                {episode.thumbnail ? (
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title} 
                    className="hidden md:block w-32 h-32 object-cover rounded-xl shadow-md shrink-0" 
                  />
                ) : (
                  <div className="hidden md:flex flex-col items-center justify-center w-32 h-32 bg-teal-100 dark:bg-teal-900/30 rounded-xl text-teal-700 dark:text-teal-300 shrink-0">
                     <span className="text-xs font-bold uppercase">{new Date(episode.pubDate).toLocaleString(lang, { month: 'short' })}</span>
                     <span className="text-3xl font-bold">{new Date(episode.pubDate).getDate()}</span>
                  </div>
                )}

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                     <span>{new Date(episode.pubDate).toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                     <span className="hidden md:inline">•</span>
                     <span className="hidden md:inline">{t.subtitle}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {episode.title}
                  </h3>
                  
                  <p className="text-slate-800 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                    {stripHtml(episode.description)}
                  </p>

                  <a 
                    href={episode.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 mt-2 hover:gap-3 transition-all"
                  >
                    <div className="p-1.5 bg-teal-100 dark:bg-teal-900 rounded-full">
                      <Play size={12} fill="currentColor" />
                    </div>
                    {t.listen}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({ item }) => (
  <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:scale-105 transition-transform">
        {item.icon}
      </div>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <ExternalLink size={18} className="text-slate-600 dark:text-slate-200 hover:text-blue-500 cursor-pointer" />
      </a>
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
    <p className="text-slate-800 dark:text-slate-300 mb-4 text-sm leading-relaxed">
      {item.desc}
    </p>
    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const MediaCard = ({ item }) => (
  <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all">
    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-full shrink-0 group-hover:scale-110 transition-transform">
      {item.icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
           <span className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">{item.type}</span>
           <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h4>
        </div>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 dark:text-slate-200 hover:text-blue-600 transition-colors">
          <ExternalLink size={16} />
        </a>
      </div>
      <p className="text-slate-700 dark:text-slate-300 text-sm mt-1 leading-snug">
        {item.desc}
      </p>
    </div>
  </div>
);

const LogoWall = ({ title, items }) => (
  <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
    <h3 className="text-lg font-bold text-slate-600 dark:text-slate-200 uppercase tracking-widest mb-6">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {items.map((logo, i) => (
        <span key={i} className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-default select-none">
          {logo}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ item, isLast }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
      {!isLast && <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 my-2"></div>}
    </div>
    <div className="pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
        <span className="hidden sm:inline text-slate-500 dark:text-slate-300">•</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</span>
      </div>
      <span className="text-sm text-slate-700 dark:text-slate-300 block mb-2">{item.period}</span>
      <p className="text-slate-800 dark:text-slate-300 leading-relaxed text-sm max-w-2xl">
        {item.desc}
      </p>
    </div>
  </div>
);

export default function AlanBrazPortfolio() {
  const [lang, setLang] = useState(() => detectDefaultLang());
  const [darkMode, setDarkMode] = useState(false);
  const t = DATA[lang];

  // Handle system theme preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Keep the URL (?lang=) and <html lang> in sync with the selected language
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (url.searchParams.get('lang') !== lang) {
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  // Respond to browser back/forward navigation changing the ?lang= param
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onPopState = () => {
      const urlLang = getLangFromUrl();
      if (urlLang) setLang(urlLang);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-slate-950' : 'bg-slate-50'}`}>
      <div className="dark:text-slate-200 text-slate-800">
        
        {/* Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-teal-300 bg-clip-text text-transparent">
              alan.ia.br
            </span>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Globe size={16} />
                {lang.toUpperCase()}
              </button>
              {/* <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button> */}
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-20">
          
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={speakerImg} 
                    alt="Alan Braz Speaking at IBM Research Forum" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/600x800?text=Alan+Braz+Photo";
                    }}
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg flex items-center gap-2 border border-slate-100 dark:border-slate-700">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-xs font-bold text-slate-900 dark:text-white">{(lang === 'en' ? 'Available for talks & workshops' : 'Disponível para palestras & workshops')}</span>
                </div>
              </div>

              <div className="mt-14 flex flex-col gap-3 w-full mt-15">
              <a 
                href={RESUME_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all w-full text-center"
              >
                <BotMessageSquare size={52} aria-hidden="true" />
                <span className="text-sm leading-snug">{t.hero.resume_chat}</span>
              </a>

                {/*<a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-teal-600 dark:bg-teal-700 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all w-full text-center"
                >
                  <img
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    className="h-8 w-8"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug">{t.hero.whatsapp_cta}</span>
                </a>*/}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                  Alan Braz
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
                  {t.hero.role}
                </p>
                {/*<p className="text-lg text-slate-700 dark:text-slate-300 mt-2">
                  {t.hero.subrole}
                </p>*/}
              </div>

              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-300 max-w-2xl">
                {t.about.text}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center shadow-sm relative overflow-hidden group hover:border-blue-500 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-600"></div>
                    <div className="flex justify-center text-blue-500 mb-1">{stat.icon}</div>
                    <div className="font-bold text-xl text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink 
                    key={link.href} 
                    href={link.href} 
                    icon={link.icon} 
                    label={link.label[lang]} 
                  />
                ))}
              </div>
            </div>
          </section>

          {/* NEW SECTION: External Participations & Media */}
          {lang === 'pt' && (<section>
            <SectionHeader title={t.media.title} icon={<Radio size={24} />} />
            <div className="grid md:grid-cols-2 gap-4">
              {t.media.items.map((item, i) => (
                <MediaCard key={i} item={item} />
              ))}
            </div>
          </section>)}

          {/* Teaching & Courses - NEW SECTION (hidden in EN) */}
          {lang === 'pt' && (
            <section>
              <SectionHeader title={t.teaching.title} icon={<GraduationCap size={24} />} />
              <div className="grid md:grid-cols-2 gap-6">
                {t.teaching.items.map((item, i) => (
                  <ProjectCard key={i} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* NEW SECTION: Logos Wall */}
          <section>
             <LogoWall title={t.logos.title} items={t.logos.items} />
          </section>

          {/* Signature Talks Section */}
          <section>
            <SectionHeader title={t.talks.title} icon={<Mic size={24} />} />
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-3xl leading-relaxed -mt-4">
              {t.talks.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {t.talks.items.map((item, i) => (
                <div key={i} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-blue-500 transition-all flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.audience}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-800 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eminence & Awards */}
          <section className="grid md:grid-cols-2 gap-8">
             <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-yellow-400" />
                  {t.eminence.title}
                </h3>
                <div className="space-y-6 relative z-10">
                  {t.eminence.items.map((item, i) => (
                    <div key={i} className="border-l-2 border-blue-500/30 pl-4 hover:border-blue-500 transition-colors">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      {item.desc && <p className="text-slate-200 text-sm mt-1 mb-2 leading-relaxed">{item.desc}</p>}
                      <div className="text-slate-300 text-xs mt-1 flex justify-between uppercase tracking-wider">
                        <span>{item.org}</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Quick links / Podcast Highlight */}
             <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <Podcast size={32} className="text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-bold bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded uppercase">Podcast</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">PullreCast Podcast</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  {lang === 'en' 
                    ? "The real-world AI podcast for leaders and professionals. I co-host conversations that cut through the hype to explore how generative and agentic AI, open source, and solid engineering translate into real business outcomes. Practical, honest, and grounded in what actually ships to production, with guests from research, industry, and the open-source community. Available on all major platforms." 
                    : "O podcast de IA da vida real para líderes e profissionais. Coapresento conversas que cortam o hype para explorar como IA generativa e agêntica, código aberto e engenharia sólida se transformam em resultados reais de negócio. Prático, honesto e ancorado no que de fato vai para produção, com convidados da pesquisa, da indústria e da comunidade open source. Disponível em todas as plataformas."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://open.spotify.com/show/5zHeJgaZsj9WCMXfJoCVmD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    aria-label="Spotify"
                  >
                    <Podcast size={18} className="text-green-500" /> Spotify
                  </a>
                  <a
                    href="https://www.youtube.com/@pullrecast?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} className="text-red-600" /> YouTube
                  </a>
                  <a
                    href="https://podcasts.apple.com/br/podcast/pullrecast-podcast-da-vida-real-para-explorar-ia-do/id1643158720?l=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    aria-label="Apple Podcasts"
                  >
                    <Apple size={18} className="text-slate-700 dark:text-slate-200" /> Apple Podcasts
                  </a>
                  <a
                    href="https://podcast.ia.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                    aria-label="Website"
                  >
                    <Globe size={18} className="text-purple-600 dark:text-purple-400" /> podcast.ia.br
                  </a>
                </div>
             </div>
          </section>

          {/* New Podcast Feed Section */}
          {lang === 'pt' && (<PodcastFeed lang={lang} />)}

          {/* Projects Grid */}
          {/* <section>
            <SectionHeader title={t.projects.title} icon={<Code size={24} />} />
            <div className="grid md:grid-cols-3 gap-6">
              {t.projects.items.map((item, i) => (
                <ProjectCard key={i} item={item} />
              ))}
            </div>
          </section> */}

          {/* Experience Timeline */}
          <section className="max-w-3xl">
            <SectionHeader title={t.experience.title} icon={<Users size={24} />} />
            <div className="pl-2">
              {t.experience.items.map((item, i) => (
                <ExperienceItem key={i} item={item} isLast={i === t.experience.items.length - 1} />
              ))}
            </div>
          </section>

          {/* Contact & Mentoring - NEW SECTION */}
          <section className="bg-gradient-to-r from-blue-600 to-teal-300 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2 justify-center md:justify-start text-blue-200 font-medium">
                   <MessageSquare size={20} />
                   <span>{t.mentoring.title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {t.mentoring.subtitle}
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {t.mentoring.text}
                </p>
              </div>
              <a 
                href="mailto:alan@podcast.ia.br?subject=Mentoring%20Inquiry"
                className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
              >
                {t.mentoring.cta} <Mail size={20} />
              </a>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-900 py-12 mt-20 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              &copy; {new Date().getFullYear()} Alan Braz. All rights reserved.
            </p>
            {/* <div className="flex justify-center gap-6 text-sm text-slate-400">
               <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
               <a href="#" className="hover:text-blue-500 transition-colors">Google Scholar</a>
            </div> */}
          </div>
        </footer>

      </div>
    </div>
  );
}
