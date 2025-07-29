import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const HeroSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      id="inicio" 
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 bg-gradient-to-br from-background via-background to-muted/20 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-heading mb-6 sm:mb-8 leading-tight">
          Guilherme Francisco Costa
        </h1>
        
        <h2 className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 sm:mb-16 font-normal max-w-2xl mx-auto px-4">
          Desenvolvedor Full-Stack especializado em React e Node.js
        </h2>
        
        <div className="flex justify-center mb-16 sm:mb-20">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projetos')}
            className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-lg hover:shadow-lg transition-all duration-300 h-12 sm:h-auto"
          >
            Ver Projetos
          </Button>
        </div>
        
        <div className="flex justify-center gap-4 sm:gap-6">
          <a 
            href="https://www.linkedin.com/in/guilhermefcostaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full border border-border hover:bg-accent hover:border-primary transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-primary" />
          </a>
          <a 
            href="https://github.com/GuilhermeCostax" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-full border border-border hover:bg-accent hover:border-primary transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;