interface Project { id: number; name: string; subtitle: string; description: string; technologies: string[]; liveUrl: string; codeUrl: string; image: string; }

export const projects: Project[] = [
    {
      id: 1,
      name: "AI Text Summarizer",
      subtitle: "Aplicação web multiusuário para resumir textos com IA.",
      description: "Uma solução completa que utiliza a API do Google Gemini para gerar resumos de textos longos. O projeto inclui um sistema de autenticação seguro com JWT, onde cada usuário possui seu próprio histórico de resumos salvo em um banco de dados, garantindo privacidade e personalização. A arquitetura foi construída com um back-end robusto em FastAPI e um front-end reativo em Next.js.",
      technologies: ["FastAPI", "Next.js", "TypeScript", "Python", "SQLAlchemy", "JWT", "SQLite", "Google Gemini API", "Vercel"],
      liveUrl: "https://resumidor-texto.vercel.app",
      codeUrl: "https://github.com/GuilhermeCostax/Resumidor_Texto",
      image: "/images/projects/SummarizeAI-1280.webp"
    },
    {
      id: 2,
      name: "Pizza da Praça",
      subtitle: "Site institucional moderno para uma pizzaria local.",
      description: "Website institucional totalmente responsivo e performático para a \"Pizza da Praça\". O projeto foi desenvolvido com foco na experiência do usuário (UX), apresentando um design atrativo, sistema de tema claro/escuro, menu interativo com filtros e carregamento otimizado (skeleton loading). Acessibilidade foi uma prioridade, com uso de ARIA labels e navegação completa por teclado.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "React Query", "React Hook Form", "Zod"],
      liveUrl: "https://pizza-praca.vercel.app",
      codeUrl: "https://github.com/GuilhermeCostax/pizza-praca",
      image: "/images/projects/pizza-da-praca-1280.webp"
    }
  ];
