import { skillCategories } from '@/data/skills';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SkillsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="habilidades"
      className={`relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 aurora-bg overflow-hidden transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text-primary text-center mb-20 sm:mb-24 tracking-tight leading-tight">
          Tecnologias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="group relative transition-transform duration-300 hover:-translate-y-1"
            >
              <Card className="h-full border-0 glass-subtle transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-6 rounded-2xl bg-primary/10 text-primary">
                      <category.icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-heading">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-primary/5 group/tech"
                      >
                        <div className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                          {tech.logo}
                        </div>
                        <span className="text-xs font-medium text-center text-foreground">
                          {tech.name}
                        </span>
                      </div>
                    ))}
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

export default SkillsSection;
