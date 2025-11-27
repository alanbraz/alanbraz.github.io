import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
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
  Terminal,
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
  MessagesSquare
} from 'lucide-react';
import speakerImg from './assets/speaker.jpg';

// --- Data & Content Configuration ---
// const RESUME_CHAT_URL = "https://chatgpt.com/g/g-69246c1df0ec8191b36d8d7a8b84c249-alan-braz-liderando-transformacoes-com-ia";
const RESUME_CHAT_URL = "https://cv.alanbraz.com.br";
const WHATSAPP_CHAT_URL = "https://api.whatsapp.com/send?phone=5519999850853&text=Olá vi o seu site e gostaria de conversar sobre uma palestra com Alan Braz";

const DATA = {
  en: {
    nav: {
      about: "Mission",
      projects: "Impact",
      media: "Signals",
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
      role: "Technology Executive in Deep Tech",
      subrole: "Where software engineering, applied science, and business value converge.",
      cta: "See how I build defensible technology",
      resume_chat: "Chat with my full resume with GenAI",
      whatsapp_cta: "Chat with me in WhatsApp"
    },
    about: {
      title: "Engineering for Market Impact",
      text: "I operate where software engineering meets complex science and generative AI shifts from research to product. My career is built on turning impractical ideas or so-called impossible problems into scalable, profitable technology. I design engineering cultures that value rigor, open-source collaboration, and autonomy to ship the future, not just manage it."
    },
    stats: [
      { label: "Talks & Workshops", value: "150+", icon: <Megaphone size={20} /> },
      { label: "Patents & disclosures", value: "15", icon: <Award size={20} /> },
      { label: "Peer-reviewed papers", value: "18", icon: <FileText size={20} /> },
      { label: "Years building systems", value: "20+", icon: <Terminal size={20} /> },
    ],
    eminence: {
      title: "Technical Eminence",
      items: [
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
        { title: "Research Division Award (RDA)", org: "IBM Research", year: "Multiple" }
      ]
    },
    media: {
      title: "Signals from the Field",
      items: [
        {
          title: "TDC: Engineering Leadership with AI",
          desc: "On stage at The Developer's Conference detailing how to structure AI programs that survive real-world constraints.",
          type: "Webnair",
          link: "https://www.youtube.com/watch?v=SwQ7JCMaQ9g",
          icon: <Video size={20} className="text-red-600" />
        },
        {
          title: "IA Sob Controle #162",
          desc: "Deconstructing IBM's strategy for the AI market and the disciplines needed to ship products, not slides.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/162-o-que-a-ibm-vem-fazendo-pelo-mercado-de-la-com-alan-braz/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Rádio Brasil Interview",
          desc: "How frontier AI changes business models and why governance must be engineered, not improvised.",
          type: "TV / Radio",
          link: "https://www.youtube.com/watch?v=Cbixa3LSXCk",
          icon: <Radio size={20} className="text-blue-500" />
        },
        {
          title: "PUC-Campinas Seminar",
          desc: "Human AI & Education: turning academic research into resilient AI systems for industry.",
          type: "Panel",
          link: "https://www.youtube.com/watch?v=hOivpEPPIuE&t=3656s",
          icon: <Video size={20} className="text-red-500" />
        },
        {
          title: "IA Sob Controle #42",
          desc: "On shipping AI responsibly: embeddings, deepfakes, and the engineering behind IBM's approach.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/42-novos-modelos-de-embedding-da-openai-deepfake-do-biden-ia-na-ibm/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Vida com IA #103",
          desc: "A technical deep dive into AI engineering and how to navigate a career at the frontier.",
          type: "Podcast",
          link: "https://open.spotify.com/episode/40pdjHdfCbNQ7ayBo9f60Q",
          icon: <Play size={20} className="text-green-500" />
        }
      ]
    },
    logos: {
      title: "Stages & Classrooms",
      items: ["Harvard Business School Online", "Northwestern University", "Fundação Dom Cabral", "MIT Sloan Review", "UNICAMP", "PUC-Campinas", "Rádio JP News", "Cidade Empreende", "The Developer's Conference", "CBSoft AIware", "Klabin", "John Deere", "Grupo Brinox", "EXEC"]
    },
    projects: {
      title: "Shipping Hard Tech",
      items: [
        {
          title: "PullreCast Podcast",
          desc: "Deconstructing how frontier AI becomes enterprise advantage. Field-tested conversations on architecture, governance, and operating models.",
          tags: ["Podcast", "AI", "Strategy"],
          link: "https://podcast.ia.br",
          icon: <Mic size={24} className="text-teal-500" />
        },
        {
          title: "AIMMX",
          desc: "Engineered a way to expose the dark data of AI experimentation. Mines repositories to surface metadata and force rigor into AI supply chains.",
          tags: ["Python", "Hard Tech", "MSR Paper"],
          link: "https://github.com/ibm/aimmx",
          icon: <Code size={24} className="text-blue-500" />
        },
        {
          title: "GeoScience Advisor",
          desc: "Hardened a volatile research prototype into a production-grade AI advisor for Oil & Gas. Reduced scientific uncertainty into operational decisions.",
          tags: ["AI", "Complex Systems", "Productization"],
          link: "https://www.ibm.com/case-studies/petrobras-geoscience-advisor",
          icon: <Globe size={24} className="text-green-500" />
        }
      ]
    },
    teaching: {
      title: "Teaching & Thought Leadership",
      items: [
        {
          title: "Software Engineering Powered by AI",
          desc: "UNICAMP Extension. Challenging conventional development by applying AI to rewrite engineering rigor and delivery speed.",
          tags: ["UNICAMP", "Advanced", "AI Engineering"],
          link: "https://www.extecamp.unicamp.br/dados.asp?sigla=%8El%DF%C2%5E%E3%D8%9E&of=%F7%12%A8",
          icon: <GraduationCap size={24} className="text-red-500" />
        },
        {
          title: "Maratona IA",
          desc: "An intensive program that forces leaders to apply frontier AI in business contexts with measurable outcomes.",
          tags: ["Executive", "AI", "Delivery"],
          link: "https://maratona.ia.br",
          icon: <BookOpen size={24} className="text-orange-500" />
        }
      ]
    },
    experience: {
      title: "Experience in the Arena",
      items: [
        { role: "Research Engineering Manager", company: "IBM Research Brazil", period: "2025 - Present", desc: "Commanding applied AI programs for Hybrid Cloud. Engineering guardrails, RAG systems, and production AI workflows that withstand enterprise scale." },
        { role: "Professor", company: "MIT Sloan Management Review Brasil", period: "2025 - Present", desc: "Equipping executives to lead AI-first strategies, from prompt engineering discipline to product delivery frameworks." },
        { role: "Senior Research Software Engineer", company: "IBM Research Brazil", period: "2019 - 2025", desc: "Architecting automation for cloud infrastructure and leading technical breakthroughs in OSDU for energy clients." },
        { 
          role: "Software Engineer Researcher (International)", 
          company: "IBM TJ Watson Research Center (NY, USA)", 
          period: "2017 - 2019", 
          desc: "Selected to operate from HQ to engineer the AI workflow stack, forcing research experiments into disciplined production pipelines across global teams." 
        },
        { role: "Visiting Professor", company: "UNICAMP", period: "2012 - 2016", desc: "Driving engineers beyond theory with extension courses in Agile and Software Engineering." }
      ]
    },
    mentoring: {
      title: "Technical Mentoring",
      subtitle: "Need to break through a hard technical or leadership barrier?",
      text: "I mentor leaders and principal engineers who must ship frontier technology under business pressure. No generic playbooks; only frameworks that turn complex AI and cloud initiatives into execution.",
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
      role: "Executivo de Tecnologia em Deep Tech",
      // subrole: "Onde engenharia de software, ciência aplicada e negócio se encontram.",
      cta: "Veja como construo tecnologia defensável",
      resume_chat: "Converse com meu currículo completo com GenAI",
      whatsapp_cta: "Fale comigo no WhatsApp"
    },
    about: {
      title: "Engenharia para Impacto de Mercado",
      text: "Atuo onde engenharia de software encontra ciência complexa e IA Generativa sai da pesquisa para virar produto. Minha carreira é transformar pesquisas que parecem impraticáveis ou problemas que chamam de insolúveis em tecnologia escalável e lucrativa. Desenho culturas de engenharia que valorizam rigor, colaboração open-source e autonomia para projetar o futuro, não apenas gerenciá-lo."
    },
    stats: [
      { label: "Palestras e workshops", value: "150+", icon: <Megaphone size={20} /> },
      { label: "Patentes & disclosures", value: "15", icon: <Award size={20} /> },
      { label: "Papers revisados", value: "18", icon: <FileText size={20} /> },
      { label: "Anos entregando software", value: "20+", icon: <Terminal size={20} /> },
    ],
    eminence: {
      title: "Eminência Técnica",
      items: [
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
        { title: "Research Division Award (RDA)", org: "IBM Research", year: "Múltiplos" }
      ]
    },
    media: {
      title: "Influência Técnica",
      items: [
        {
          title: "TDC: Liderança de Engenharia com IA",
          desc: "No palco do The Developer's Conference mostrando como estruturar programas de IA que sobrevivem aos limites do mundo real.",
          type: "Webnair",
          link: "https://www.youtube.com/watch?v=SwQ7JCMaQ9g",
          icon: <Video size={20} className="text-red-600" />
        },
        {
          title: "IA Sob Controle #162",
          desc: "Dissecando a estratégia de IA da IBM e as disciplinas necessárias para entregar produtos, não apenas apresentações.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/162-o-que-a-ibm-vem-fazendo-pelo-mercado-de-la-com-alan-braz/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Entrevista Rádio JP News Campinas",
          desc: "Como a IA de fronteira altera modelos de negócio e por que governança precisa ser engenharia, não improviso.",
          type: "TV / Rádio",
          link: "https://www.youtube.com/watch?v=Cbixa3LSXCk",
          icon: <Radio size={20} className="text-blue-500" />
        },
        {
          title: "Seminário PUC-Campinas",
          desc: "Human AI & Education: convertendo pesquisa acadêmica em sistemas resilientes de IA para a indústria.",
          type: "Painel",
          link: "https://www.youtube.com/watch?v=hOivpEPPIuE&t=3656s",
          icon: <Video size={20} className="text-red-500" />
        },
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
      items: ["Harvard Business School Online", "Northwestern University", "Fundação Dom Cabral", "MIT Sloan Review", "UNICAMP", "PUC-Campinas", "Rádio JP News", "Cidade Empreende", "The Developer's Conference", "CBSoft AIware", "Klabin", "John Deere", "Grupo Brinox", "EXEC"]
    },
    projects: {
      title: "Entregando Hard Tech",
      items: [
        {
          title: "PullreCast Podcast",
          desc: "Dissecando como IA de fronteira vira vantagem empresarial. Conversas testadas em campo sobre arquitetura, governança e modelos operacionais.",
          tags: ["Podcast", "IA", "Estratégia"],
          link: "https://podcast.ia.br",
          icon: <Mic size={24} className="text-teal-500" />
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
          title: "Engenharia de Software Potencializada por IA",
          desc: "Extensão UNICAMP. Desafiando o desenvolvimento tradicional ao aplicar IA para reescrever rigor e velocidade de entrega.",
          tags: ["UNICAMP", "Avançado", "Engenharia de IA"],
          link: "https://www.extecamp.unicamp.br/dados.asp?sigla=%8El%DF%C2%5E%E3%D8%9E&of=%F7%12%A8",
          icon: <GraduationCap size={24} className="text-red-500" />
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
        { role: "Gerente de Engenharia em Pesquisa", company: "IBM Research Brasil", period: "2025 - Presente", desc: "Liderando programas de IA aplicada para Nuvem Híbrida. Engenhando guardrails, sistemas RAG e workflows de IA prontos para escala empresarial." },
        { role: "Professor", company: "MIT Sloan Management Review Brasil", period: "2025 - Presente", desc: "Preparando executivos para liderar estratégias AI-first, do rigor em prompt engineering aos frameworks de entrega de produto." },
        { role: "Engenheiro de Software de Pesquisa Sênior", company: "IBM Research Brasil", period: "2019 - 2025", desc: "Arquitetando automação para infraestrutura de nuvem e liderando avanços técnicos no OSDU para clientes de energia." },
        { 
          role: "Pesquisador de Engenharia de Software 🇺🇸", 
          company: "IBM TJ Watson Research Center (NY, EUA)", 
          period: "2017 - 2019", 
          desc: "Selecionado para operar a partir do QG e engenhar o stack de workflows de IA, forçando experimentos de pesquisa a virarem pipelines de produção disciplinados em times globais." 
        },
        { role: "Professor Visitante", company: "UNICAMP", period: "2012 - 2016", desc: "Levando engenheiros além da teoria com cursos de extensão em Engenharia de Software e Ágil." }
      ]
    },
    mentoring: {
      title: "Mentoria Técnica",
      subtitle: "Precisa romper uma barreira técnica ou de liderança?",
      text: "Eu mentoro líderes técnicos e de negócios que precisam entregar tecnologia de fronteira sob pressão de negócio. Nada de playbooks genéricos; uma experiência individualizada para transformar iniciativas complexas de IA e nuvem em execução.",
      cta: "Marcar uma conversa"
    }
  }
};

const detectDefaultLang = () => {
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

// --- Components ---

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-slate-700 dark:text-slate-300 transition-all transform hover:scale-110"
    aria-label={label}
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
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://anchor.fm/s/b411a8c8/podcast/rss');
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
            <div className="w-full md:w-1/3 shrink-0 relative group">
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
                 <span className="text-xs font-bold text-slate-900 dark:text-white">{(lang === 'en' ? 'Open to Speaking' : 'Contrate para palestras')}</span>
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
                {/* <p className="text-lg text-slate-700 dark:text-slate-300 mt-2">
                  {t.hero.subrole}
                </p> */}
              </div>

              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-300 max-w-2xl">
                {t.about.text}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a 
                  href={RESUME_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
                >
                  <BotMessageSquare size={52} aria-hidden="true" />
                  <span className="text-sm leading-snug">{t.hero.resume_chat}</span>
                </a>

                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-teal-600 dark:bg-teal-700 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
                >
                  <img
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    className="h-8 w-8"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug">{t.hero.whatsapp_cta}</span>
                </a>
              </div>

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
                <SocialLink href="https://linkedin.com/in/alanbraz" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://podcast.ia.br" icon={<Mic size={20} />} label="Spotify" />
                <SocialLink href="https://comece.ia.br" icon={<MessagesSquare size={20} />} label="WhatsApp" />
                <SocialLink href="https://github.com/alanbraz" icon={<Github size={20} />} label="GitHub" />
                <SocialLink href="https://instagram.com/pullrecast" icon={<Instagram size={20} />} label="Instagram" />
                {/* <SocialLink href="https://researcher.ibm.com/researcher/view.php" icon={<BookOpen size={20} />} label="IBM Research" /> */}
                <SocialLink href="mailto:alan@pullrecast.dev" icon={<Mail size={20} />} label="Email" />
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
             <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Mic size={32} className="text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-bold bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded uppercase">Podcast</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">PullreCast</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  {lang === 'en' 
                    ? "Join me as we explore the intersection of Open Source and Artificial Intelligence. Available on all major platforms." 
                    : "Junte-se a mim enquanto exploramos a interseção entre Código Aberto e Inteligência Artificial. Disponível em todas as plataformas."}
                </p>
                <a href="https://podcast.ia.br" className="inline-flex items-center gap-2 font-semibold text-purple-700 dark:text-purple-400 hover:gap-3 transition-all">
                  {lang === 'en' ? "Listen Now" : "Ouvir Agora"} <ExternalLink size={16} />
                </a>
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
                href="mailto:alan@pullrecast.dev?subject=Mentoring%20Inquiry"
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
