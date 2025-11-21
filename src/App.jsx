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
  Cpu,
  GraduationCap,
  MessageSquare,
  Rss,
  Play,
  Radio,
  Video,
  Megaphone,
  Instagram,
  Music,
  MessageCircle
} from 'lucide-react';
import speakerImg from './assets/speaker.jpg';

// --- Data & Content Configuration ---
const DATA = {
  en: {
    nav: {
      about: "The Mission",
      projects: "Projects",
      media: "Signals",
      teaching: "Teaching",
      contact: "Contact"
    },
    podcast_feed: {
      title: "Latest Transmissions",
      subtitle: "Direct from the Source",
      listen: "Listen Transmission",
      loading: "Establishing connection...",
      error: "Signal interrupted. Unable to load feed."
    },
    hero: {
      role: "Engineering Manager Driven by Challenges",
      subrole: "Taming Chaos & Architecting AI",
      cta: "See How I Solve Problems"
    },
    about: {
      title: "The Tech-Business Translator",
      text: "I bridge the impossible gap between deep research and real-world impact. My superpower is translating complex technical concepts into clear, actionable business strategies. I lead teams to conquer 'insoluble' problems in AI and Cloud Architecture, ensuring that cutting-edge innovation makes sense for the enterprise. If it's complex, undefined, and difficult, that's where I thrive."
    },
    stats: [
      { label: "Impactful Talks", value: "100+", icon: <Megaphone size={20} /> },
      { label: "Patents Won", value: "15+", icon: <Award size={20} /> },
      { label: "Complex Papers", value: "18+", icon: <FileText size={20} /> },
      { label: "Years in the Trenches", value: "20+", icon: <Terminal size={20} /> },
    ],
    eminence: {
      title: "Victories & Recognition",
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
      title: "Industry Signals",
      items: [
        {
          title: "TDC: Humanized Leadership & AI",
          desc: "Live at The Developer's Conference. Discussing the impact of AI on companies and the future of leadership.",
          type: "Conference / Video",
          link: "https://www.youtube.com/watch?v=SwQ7JCMaQ9g",
          icon: <Video size={20} className="text-red-600" />
        },
        {
          title: "IA Sob Controle #162",
          desc: "What IBM is doing for the AI Market. A deep conversation about strategy and innovation.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/162-o-que-a-ibm-vem-fazendo-pelo-mercado-de-la-com-alan-braz/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Rádio Brasil Interview",
          desc: "Overview of AI impact on society and business. (Video Interview)",
          type: "TV/Radio",
          link: "https://www.youtube.com/watch?v=Cbixa3LSXCk",
          icon: <Radio size={20} className="text-blue-500" />
        },
        {
          title: "PUC-Campinas Seminar",
          desc: "Human AI & Education International Seminar. Discussing the future of learning.",
          type: "Keynote",
          link: "https://www.youtube.com/watch?v=hOivpEPPIuE&t=3656s",
          icon: <Video size={20} className="text-red-500" />
        },
        {
          title: "IA Sob Controle #42",
          desc: "OpenAI Embeddings, Biden Deepfake, and AI at IBM. Navigating the noise.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/42-novos-modelos-de-embedding-da-openai-deepfake-do-biden-ia-na-ibm/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Vida com IA #103",
          desc: "Deep dive into AI Engineering and career insights.",
          type: "Podcast",
          link: "https://open.spotify.com/episode/40pdjHdfCbNQ7ayBo9f60Q",
          icon: <Play size={20} className="text-green-500" />
        }
      ]
    },
    logos: {
      title: "Where I've Spoken",
      items: ["Harvard Business School Online", "Northwestern University", "Fundação Dom Cabral", "MIT Sloan Review", "UNICAMP", "PUC-Campinas", "Rádio JP News", "IA Sob Controle", "The Developer's Conference", "CBSoft", "Klabin", "John Deere", "Grupo Brinox"]
    },
    projects: {
      title: "Solving the Unsolvable",
      items: [
        {
          title: "PullreCast Podcast",
          desc: "Breaking down the most complex barriers in Open-Source AI. A deep dive into the bleeding edge of productivity and career growth where technical depth meets strategy.",
          tags: ["Podcast", "GenAI", "Strategy"],
          link: "#",
          icon: <Mic size={24} className="text-purple-500" />
        },
        {
          title: "AIMMX",
          desc: "Solved the 'black box' problem of AI metadata. Engineered a tool to mine software repositories and extract intelligence where none existed before.",
          tags: ["Python", "Hard Tech", "MSR Paper"],
          link: "https://github.com/ibm/aimmx",
          icon: <Code size={24} className="text-blue-500" />
        },
        {
          title: "GeoScience Advisor",
          desc: "Took a complex research prototype and hardened it for the Oil & Gas industry. Transformed volatility into a stable, productized AI advisor.",
          tags: ["AI", "Complex Systems", "Productization"],
          link: "#",
          icon: <Globe size={24} className="text-green-500" />
        }
      ]
    },
    teaching: {
      title: "Advanced Training",
      items: [
        {
          title: "Software Engineering Powered by AI",
          desc: "UNICAMP Extension. Challenging the status quo of software development. We explore how AI breaks traditional paradigms and demands new engineering rigors.",
          tags: ["UNICAMP", "Advanced", "Disruption"],
          link: "https://www.extecamp.unicamp.br/dados.asp?sigla=%8El%DF%C2%5E%E3%D8%9E&of=%F7%12%A8",
          icon: <GraduationCap size={24} className="text-red-500" />
        },
        {
          title: "Maratona IA",
          desc: "Intensive training designed to push your understanding of Artificial Intelligence concepts and applications to the limit.",
          tags: ["Deep Dive", "AI", "Mastery"],
          link: "https://maratona.ia.br",
          icon: <BookOpen size={24} className="text-orange-500" />
        }
      ]
    },
    experience: {
      title: "Battle-Hardened Experience",
      items: [
        { role: "Research Engineering Manager", company: "IBM Research", period: "2025 - Present", desc: "Leading the charge on applied AI for Hybrid Cloud. Solving critical issues in Guardrails and RAG systems where standard solutions fail." },
        { role: "Professor", company: "MIT Sloan Management Review Brasil", period: "2025 - Present", desc: "Challenging leaders to adopt AI Leadership and master Prompt Engineering in complex business environments." },
        { role: "Senior Research Software Engineer", company: "IBM Research Brazil", period: "2019 - Present", desc: "Architecting automation for cloud infrastructure and leading technical breakthroughs in OSDU." },
        { 
          role: "Software Engineer Researcher (International)", 
          company: "IBM TJ Watson Research Center (NY, USA)", 
          period: "2017 - 2019", 
          desc: "Deployed to HQ to conquer the 'AI Workflow' chaos. I engineered the tools that forced Data Science experiments into disciplined production pipelines, bridging the impossible gap between researchers and engineers." 
        },
        { role: "Visiting Professor", company: "UNICAMP", period: "2012 - 2016", desc: "Pushing students beyond theory with Agile and Software Engineering extension courses." }
      ]
    },
    mentoring: {
      title: "Face Your Challenges",
      subtitle: "Stuck on an 'impossible' problem or career plateau?",
      text: "I don't do basic coaching. I help professionals break through their hardest technical and career ceilings. If you are ready to tackle the most difficult aspects of Generative AI and Leadership, let's talk.",
      cta: "Challenge Accepted"
    }
  },
  pt: {
    nav: {
      about: "A Missão",
      // projects: "Projetos",
      media: "Radar",
      teaching: "Ensino",
      contact: "Contato"
    },
    podcast_feed: {
      title: "Últimas Transmissões",
      subtitle: "Direto da Fonte",
      listen: "Ouvir Transmissão",
      loading: "Estabelecendo conexão...",
      error: "Sinal interrompido. Não foi possível carregar o feed."
    },
    hero: {
      role: "Gerente de Engenharia Movido por Desafios",
      subrole: "Domando o Caos & Arquitetando IA",
      cta: "Veja Como Resolvo Problemas"
    },
    about: {
      title: "O Tradutor Tech-Business",
      text: "Eu faço a ponte impossível entre a pesquisa profunda e o impacto no mundo real. Meu superpoder é traduzir conceitos técnicos complexos em estratégias de negócios claras e acionáveis. Lidero equipes para conquistar problemas 'insolúveis' em IA e Arquitetura de Nuvem, garantindo que a inovação de ponta faça sentido para a empresa. Se é complexo, indefinido e difícil, é onde eu prospero."
    },
    stats: [
      { label: "Palestras Impactantes", value: "100+", icon: <Megaphone size={20} /> },
      { label: "Patentes Vencidas", value: "15+", icon: <Award size={20} /> },
      { label: "Artigos Complexos", value: "18+", icon: <FileText size={20} /> },
      { label: "Anos no Front", value: "20+", icon: <Terminal size={20} /> },
    ],
    eminence: {
      title: "Vitórias & Reconhecimento",
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
      title: "Radar da Indústria",
      items: [
        {
          title: "TDC: Liderança Humanizada & IA",
          desc: "Ao vivo no The Developer's Conference. Discutindo o impacto da IA nas empresas e o futuro da liderança.",
          type: "Conferência / Vídeo",
          link: "https://www.youtube.com/watch?v=SwQ7JCMaQ9g",
          icon: <Video size={20} className="text-red-600" />
        },
        {
          title: "IA Sob Controle #162",
          desc: "O que a IBM vem fazendo pelo mercado de IA. Uma conversa profunda sobre estratégia e inovação.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/162-o-que-a-ibm-vem-fazendo-pelo-mercado-de-la-com-alan-braz/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Entrevista Rádio Brasil",
          desc: "Visão geral do impacto da IA na sociedade e nos negócios. (Entrevista em Vídeo)",
          type: "TV/Rádio",
          link: "https://www.youtube.com/watch?v=Cbixa3LSXCk",
          icon: <Radio size={20} className="text-blue-500" />
        },
        {
          title: "Seminário PUC-Campinas",
          desc: "Seminário Internacional Human AI & Education. Discutindo o futuro do aprendizado.",
          type: "Keynote",
          link: "https://www.youtube.com/watch?v=hOivpEPPIuE&t=3656s",
          icon: <Video size={20} className="text-red-500" />
        },
        {
          title: "IA Sob Controle #42",
          desc: "Embeddings da OpenAI, Deepfake do Biden e IA na IBM. Navegando no ruído.",
          type: "Podcast",
          link: "https://www.iasobcontrole.tech/42-novos-modelos-de-embedding-da-openai-deepfake-do-biden-ia-na-ibm/",
          icon: <Mic size={20} className="text-pink-500" />
        },
        {
          title: "Vida com IA #103",
          desc: "Mergulho profundo em Engenharia de IA e insights de carreira.",
          type: "Podcast",
          link: "https://open.spotify.com/episode/40pdjHdfCbNQ7ayBo9f60Q",
          icon: <Play size={20} className="text-green-500" />
        }
      ]
    },
    logos: {
      title: "Onde Já Palestrei",
      items: ["Harvard Business School Online", "Northwestern University", "Fundação Dom Cabral", "MIT Sloan Review", "UNICAMP", "PUC-Campinas", "Rádio JP News", "IA Sob Controle", "The Developer's Conference", "CBSoft", "Klabin", "John Deere", "Grupo Brinox"]
    },
    projects: {
      title: "Resolvendo o Insolúvel",
      items: [
        {
          title: "PullreCast Podcast",
          desc: "Quebrando as barreiras mais complexas da IA Open-Source. Um mergulho profundo na fronteira da produtividade e crescimento de carreira onde profundidade técnica encontra estratégia.",
          tags: ["Podcast", "GenAI", "Estratégia"],
          link: "#",
          icon: <Mic size={24} className="text-purple-500" />
        },
        {
          title: "AIMMX",
          desc: "Resolvi o problema 'caixa preta' de metadados de IA. Engenharia de uma ferramenta para minerar repositórios e extrair inteligência onde nada existia antes.",
          tags: ["Python", "Hard Tech", "MSR Paper"],
          link: "https://github.com/ibm/aimmx",
          icon: <Code size={24} className="text-blue-500" />
        },
        {
          title: "GeoScience Advisor",
          desc: "Peguei um protótipo de pesquisa complexo e o endureci para a indústria de Óleo & Gás. Transformei volatilidade em um consultor de IA estável e produtizado.",
          tags: ["IA", "Sistemas Complexos", "Produtização"],
          link: "#",
          icon: <Globe size={24} className="text-green-500" />
        }
      ]
    },
    teaching: {
      title: "Treinamento de Elite",
      items: [
        {
          title: "Engenharia de Software Potencializada por IA",
          desc: "Extensão UNICAMP. Desafiando o status quo do desenvolvimento de software. Exploramos como a IA quebra paradigmas tradicionais e exige novos rigores de engenharia.",
          tags: ["UNICAMP", "Avançado", "Disrupção"],
          link: "https://www.extecamp.unicamp.br/dados.asp?sigla=%8El%DF%C2%5E%E3%D8%9E&of=%F7%12%A8",
          icon: <GraduationCap size={24} className="text-red-500" />
        },
        {
          title: "Maratona IA",
          desc: "Treinamento intensivo projetado para levar seu entendimento de conceitos e aplicações de Inteligência Artificial ao limite.",
          tags: ["Mergulho Profundo", "IA", "Domínio"],
          link: "https://maratona.ia.br",
          icon: <BookOpen size={24} className="text-orange-500" />
        }
      ]
    },
    experience: {
      title: "Experiência de Combate",
      items: [
        { role: "Gerente de Engenharia de Pesquisa", company: "IBM Research", period: "2025 - Presente", desc: "Liderando a carga em IA aplicada para Nuvem Híbrida. Resolvendo problemas críticos em Guardrails e sistemas RAG onde soluções padrão falham." },
        { role: "Professor", company: "MIT Sloan Management Review Brasil", period: "2025 - Presente", desc: "Desafiando líderes a adotar Liderança em IA e dominar Engenharia de Prompt em ambientes de negócios complexos." },
        { role: "Engenheiro de Software de Pesquisa Sênior", company: "IBM Research Brasil", period: "2019 - Presente", desc: "Arquitetando automação para infraestrutura de nuvem e liderando avanços técnicos no OSDU." },
        { 
          role: "Pesquisador de Engenharia de Software (Internacional)", 
          company: "IBM TJ Watson Research Center (NY, EUA)", 
          period: "2017 - 2019", 
          desc: "Enviado ao QG para conquistar o caos do 'Workflow de IA'. Engenharei as ferramentas que forçaram experimentos de Ciência de Dados em pipelines de produção disciplinados, unindo o abismo impossível entre pesquisadores e engenheiros." 
        },
        { role: "Professor Visitante", company: "UNICAMP", period: "2012 - 2016", desc: "Levando alunos além da teoria com cursos de extensão em Engenharia de Software e Ágil." }
      ]
    },
    mentoring: {
      title: "Encare Seus Desafios",
      subtitle: "Preso em um problema 'impossível' ou platô na carreira?",
      text: "Eu não faço coaching básico. Ajudo profissionais a romperem seus tetos técnicos e de carreira mais difíceis. Se você está pronto para enfrentar os aspectos mais árduos da IA Generativa e Liderança, vamos conversar.",
      cta: "Aceito o Desafio"
    }
  }
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
             <span className="text-slate-500 text-sm font-mono">{t.loading}</span>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {episodes.map((episode, i) => (
            <div key={i} className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Thumbnail or Date Box Fallback */}
                {episode.thumbnail ? (
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title} 
                    className="hidden md:block w-32 h-32 object-cover rounded-xl shadow-md shrink-0" 
                  />
                ) : (
                  <div className="hidden md:flex flex-col items-center justify-center w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-700 dark:text-purple-300 shrink-0">
                     <span className="text-xs font-bold uppercase">{new Date(episode.pubDate).toLocaleString(lang, { month: 'short' })}</span>
                     <span className="text-3xl font-bold">{new Date(episode.pubDate).getDate()}</span>
                  </div>
                )}

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                     <span>{new Date(episode.pubDate).toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                     <span className="hidden md:inline">•</span>
                     <span className="hidden md:inline">{t.subtitle}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {episode.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                    {stripHtml(episode.description)}
                  </p>

                  <a 
                    href={episode.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 mt-2 hover:gap-3 transition-all"
                  >
                    <div className="p-1.5 bg-purple-100 dark:bg-purple-900 rounded-full">
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
        <ExternalLink size={18} className="text-slate-400 hover:text-blue-500 cursor-pointer" />
      </a>
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
      {item.desc}
    </p>
    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
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
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.type}</span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h4>
         </div>
         <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
           <ExternalLink size={16} />
         </a>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-snug">
        {item.desc}
      </p>
    </div>
  </div>
);

const LogoWall = ({ title, items }) => (
  <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {items.map((logo, i) => (
        <span key={i} className="text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 transition-colors cursor-default select-none">
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
        <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</span>
      </div>
      <span className="text-sm text-slate-500 dark:text-slate-400 block mb-2">{item.period}</span>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm max-w-2xl">
        {item.desc}
      </p>
    </div>
  </div>
);

export default function AlanBrazPortfolio() {
  const [lang, setLang] = useState('en');
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
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
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
                 <span className="text-xs font-bold text-slate-900 dark:text-white">Open to Speaking</span>
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
                <p className="text-lg text-slate-500 dark:text-slate-400 mt-2">
                  {t.hero.subrole}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                {t.about.text}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center shadow-sm relative overflow-hidden group hover:border-blue-500 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-600"></div>
                    <div className="flex justify-center text-blue-500 mb-1">{stat.icon}</div>
                    <div className="font-bold text-xl text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <SocialLink href="https://linkedin.com/in/alanbraz" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://podcast.ia.br" icon={<Mic size={20} />} label="Spotify" />
                <SocialLink href="https://comece.ia.br" icon={<MessageCircle size={20} />} label="WhatsApp" />
                <SocialLink href="https://github.com/alanbraz" icon={<Github size={20} />} label="GitHub" />
                <SocialLink href="https://instagram.com/pullrecast" icon={<Instagram size={20} />} label="Instagram" />
                {/* <SocialLink href="https://researcher.ibm.com/researcher/view.php" icon={<BookOpen size={20} />} label="IBM Research" /> */}
                <SocialLink href="mailto:alan@pullrecast.dev" icon={<Mail size={20} />} label="Email" />
              </div>
            </div>
          </section>

          {/* NEW SECTION: External Participations & Media */}
          <section>
            <SectionHeader title={t.media.title} icon={<Radio size={24} />} />
            <div className="grid md:grid-cols-2 gap-4">
              {t.media.items.map((item, i) => (
                <MediaCard key={i} item={item} />
              ))}
            </div>
          </section>

          {/* Teaching & Courses - NEW SECTION */}
          <section>
            <SectionHeader title={t.teaching.title} icon={<GraduationCap size={24} />} />
            <div className="grid md:grid-cols-2 gap-6">
              {t.teaching.items.map((item, i) => (
                <ProjectCard key={i} item={item} />
              ))}
            </div>
          </section>

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
                      {item.desc && <p className="text-slate-300 text-sm mt-1 mb-2 leading-relaxed">{item.desc}</p>}
                      <div className="text-slate-400 text-xs mt-1 flex justify-between uppercase tracking-wider">
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
          <PodcastFeed lang={lang} />

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
          <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
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
            <p className="text-slate-500 dark:text-slate-500 mb-4">
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
