import { projects } from '@/data/projects';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="projetos"
      className={`relative py-20 sm:py-24 md:pt-16 md:pb-32 px-4 sm:px-6 aurora-bg overflow-hidden transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text-primary text-center mb-20 sm:mb-24 tracking-tight leading-tight">
          Projetos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="glass-subtle border-0 overflow-hidden transition-shadow duration-300 h-full flex flex-col shadow-lg group-hover:shadow-xl">
                {/* Project Image */}
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-muted/50 to-muted/80 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={project.image}
                      srcSet={`${project.image.replace('-1280.webp', '-640.webp')} 640w, ${project.image} 1280w`}
                      sizes="(min-width: 1024px) 540px, (min-width: 640px) 90vw, calc(100vw - 64px)"
                      width={1280}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Project Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-heading mb-2 group-hover:gradient-text-primary transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="text-primary font-medium mb-3 text-sm">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs px-2 py-1 glass-subtle border-primary/20 text-primary hover:glass hover:glow-primary transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-1 glass-subtle border-muted-foreground/20 text-muted-foreground"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl ? (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 glass-subtle hover:glass hover:glow-primary border-0 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent transition-all duration-300"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver ao Vivo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        disabled
                        size="sm"
                        className="flex-1 opacity-50 cursor-not-allowed"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver ao Vivo
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      asChild
                      size="sm"
                      className="flex-1 glass-subtle hover:glass hover:glow-primary border-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Ver Código
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
