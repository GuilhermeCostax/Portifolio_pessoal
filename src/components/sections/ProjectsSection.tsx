import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "AI Text Summarizer",
      subtitle: "Aplicação web multiusuário para resumir textos com IA.",
      description: "Uma solução completa que utiliza a API do Google Gemini para gerar resumos de textos longos. O projeto inclui um sistema de autenticação seguro com JWT, onde cada usuário possui seu próprio histórico de resumos salvo em um banco de dados, garantindo privacidade e personalização. A arquitetura foi construída com um back-end robusto em FastAPI e um front-end reativo em Next.js.",
      technologies: ["FastAPI", "Next.js", "TypeScript", "Python", "SQLAlchemy", "JWT", "SQLite", "Google Gemini API", "Vercel"],
      liveUrl: "https://resumidor-texto.vercel.app",
      codeUrl: "https://github.com/GuilhermeCostax/Resumidor_Texto",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Pizza da Praça",
      subtitle: "Site institucional moderno para uma pizzaria local.",
      description: "Website institucional totalmente responsivo e performático para a \"Pizza da Praça\". O projeto foi desenvolvido com foco na experiência do usuário (UX), apresentando um design atrativo, sistema de tema claro/escuro, menu interativo com filtros e carregamento otimizado (skeleton loading). Acessibilidade foi uma prioridade, com uso de ARIA labels e navegação completa por teclado.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "React Query", "React Hook Form", "Zod"],
      liveUrl: null,
      codeUrl: "https://github.com/GuilhermeCostax/pizza-praca",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projetos" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-heading text-center mb-16">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-muted rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-heading mb-2">
                    {project.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl ? (
                    <Button asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver ao Vivo
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="flex-1 opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver ao Vivo
                    </Button>
                  )}
                  
                  <Button variant="outline" asChild className="flex-1">
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