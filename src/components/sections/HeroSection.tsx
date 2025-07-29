import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-heading mb-6 leading-tight">
          Guilherme Francisco Costa
        </h1>
        
        <h2 className="text-xl md:text-2xl text-subtle mb-8 font-medium">
          Desenvolvedor e Estudante de Engenharia de Software
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Construindo soluções web eficientes e interfaces intuitivas, da concepção à realidade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projetos')}
            className="w-full sm:w-auto px-8 py-6 text-lg"
          >
            Ver Projetos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection('contato')}
            className="w-full sm:w-auto px-8 py-6 text-lg"
          >
            Entrar em Contato
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/guilhermefcostaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary" />
          </a>
          <a 
            href="https://github.com/GuilhermeCostax" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary transition-all duration-300"
          >
            <Github className="w-6 h-6 text-muted-foreground hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;