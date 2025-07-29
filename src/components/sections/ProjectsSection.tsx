import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const projects = [
    {
      id: 1,
      name: "AI Text Summarizer",
      subtitle: "Aplicação web multiusuário para resumir textos com IA.",
      description: "Uma solução completa que utiliza a API do Google Gemini para gerar resumos de textos longos. O projeto inclui um sistema de autenticação seguro com JWT, onde cada usuário possui seu próprio histórico de resumos salvo em um banco de dados, garantindo privacidade e personalização. A arquitetura foi construída com um back-end robusto em FastAPI e um front-end reativo em Next.js.",
      technologies: ["FastAPI", "Next.js", "TypeScript", "Python", "SQLAlchemy", "JWT", "SQLite", "Google Gemini API", "Vercel"],
      liveUrl: "https://resumidor-texto.vercel.app",
      codeUrl: "https://github.com/GuilhermeCostax/Resumidor_Texto",
      image: "/images/projects/SummarizeAI.png"
    },
    {
      id: 2,
      name: "Pizza da Praça",
      subtitle: "Site institucional moderno para uma pizzaria local.",
      description: "Website institucional totalmente responsivo e performático para a \"Pizza da Praça\". O projeto foi desenvolvido com foco na experiência do usuário (UX), apresentando um design atrativo, sistema de tema claro/escuro, menu interativo com filtros e carregamento otimizado (skeleton loading). Acessibilidade foi uma prioridade, com uso de ARIA labels e navegação completa por teclado.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "React Query", "React Hook Form", "Zod"],
      liveUrl: "https://pizza-praca.vercel.app",
      codeUrl: "https://github.com/GuilhermeCostax/pizza-praca",
      image: "/images/projects/pizza-da-praca.png"
    }
  ];

  return (
    <section 
      ref={ref}
      id="projetos" 
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading text-center mb-12 sm:mb-16">
          Projetos
        </h2>
        
        <div className="grid grid-cols-1 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.id} className={`h-full flex flex-col md:flex-row hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <CardHeader className="p-0 md:w-2/5">
                <div className="w-full h-48 md:h-full bg-muted rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-8 flex-1 flex flex-col md:w-3/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-heading mb-3">
                    {project.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-1 bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                  {project.liveUrl ? (
                    <Button asChild className="flex-1 h-11 sm:h-10">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver ao Vivo
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="flex-1 h-11 sm:h-10 opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver ao Vivo
                    </Button>
                  )}
                  
                  <Button variant="outline" asChild className="flex-1 h-11 sm:h-10">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;