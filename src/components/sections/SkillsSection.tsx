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

const SkillsSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const skillCategories = [
    {
      title: "Linguagens",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "C", "HTML5", "CSS3"]
    },
    {
      title: "Front-End",
      icon: <Palette className="w-6 h-6" />,
      skills: ["React", "Next.js", "Vite", "Tailwind CSS"]
    },
    {
      title: "Back-End",
      icon: <Server className="w-6 h-6" />,
      skills: ["FastAPI", "Node.js (básico)"]
    },
    {
      title: "Bancos de Dados",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQLite", "SQLAlchemy"]
    },
    {
      title: "Ferramentas e Outros",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Docker (básico)", "Visual Studio Code", "IA (Google Gemini API)"]
    }
  ];

  return (
    <section 
      ref={ref}
      id="habilidades" 
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading text-center mb-12 sm:mb-16">
          Habilidades
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4 text-center">
                <CardTitle className="flex flex-col items-center gap-4 text-xl text-heading">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl text-primary hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all duration-200"></div>
                      <span className="text-foreground/80 font-medium text-sm group-hover:text-foreground transition-colors duration-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;