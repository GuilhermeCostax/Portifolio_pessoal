import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Settings,
  FileCode,
  Globe,
  Cpu
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

const SkillsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [focusedCard, setFocusedCard] = useState<number | null>(1); // Default focus on Front-End
  
  const skillCategories = [
    {
      id: 0,
      title: "Front-End",
      icon: <Palette className="w-8 h-8" />,
      description: "Interfaces modernas e responsivas",
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "TypeScript", logo: "📘" },
        { name: "Tailwind CSS", logo: "🎨" }
      ]
    },
    {
      id: 1,
      title: "Back-End",
      icon: <Server className="w-8 h-8" />,
      description: "APIs robustas e escaláveis",
      technologies: [
        { name: "Python", logo: "🐍" },
        { name: "FastAPI", logo: "🚀" },
        { name: "Node.js", logo: "🟢" },
        { name: "JWT", logo: "🔐" },
        { name: "Docker", logo: "🐳" },
        { name: "Git", logo: "📝" }
      ]
    },
    {
      id: 2,
      title: "Bancos de Dados",
      icon: <Database className="w-8 h-8" />,
      description: "Gerenciamento eficiente de dados",
      technologies: [
        { name: "PostgreSQL", logo: "🐘" },
        { name: "SQLite", logo: "💾" },
        { name: "SQLAlchemy", logo: "🔗" },
        { name: "Prisma", logo: "🔺" }
      ]
    }
  ];

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
              className={`group relative transition-all duration-500 ease-out cursor-pointer ${
                focusedCard === category.id 
                  ? 'transform scale-105 z-20' 
                  : 'hover:scale-102 z-10'
              }`}
              onMouseEnter={() => setFocusedCard(category.id)}
              onMouseLeave={() => setFocusedCard(null)}
            >
              <Card className={`h-full border-0 transition-all duration-500 ${
                focusedCard === category.id
                  ? 'glass glow-primary shadow-2xl shadow-primary/20'
                  : 'glass-subtle hover:glass'
              }`}>
                <CardHeader className="pb-6 text-center">
                  <CardTitle className="flex flex-col items-center gap-6">
                    <div className={`p-6 rounded-2xl transition-all duration-500 ${
                      focusedCard === category.id
                        ? 'bg-gradient-to-br from-primary/30 to-accent/20 glow-primary scale-110'
                        : 'bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-105'
                    } text-primary`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                        focusedCard === category.id
                          ? 'gradient-text-primary'
                          : 'text-heading group-hover:gradient-text-primary'
                      }`}>
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        {category.description}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                          focusedCard === category.id
                            ? 'glass-subtle hover:glass hover:glow-primary'
                            : 'hover:bg-primary/5'
                        } group/tech`}
                      >
                        <div className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                          {tech.logo}
                        </div>
                        <span className={`text-xs font-medium text-center transition-colors duration-200 ${
                          focusedCard === category.id
                            ? 'text-foreground group-hover/tech:gradient-text-primary'
                            : 'text-foreground/80 group-hover/tech:text-foreground'
                        }`}>
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