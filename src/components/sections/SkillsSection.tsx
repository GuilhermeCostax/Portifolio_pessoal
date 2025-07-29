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

const SkillsSection = () => {
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
    <section id="habilidades" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-heading text-center mb-16">
          Habilidades
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-heading">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{skill}</span>
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