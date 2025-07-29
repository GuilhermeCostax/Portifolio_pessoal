import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useAnimations } from "@/hooks/useAnimations";

const HeroSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const { scrollToSection } = useScrollToSection();
  const { animationClasses, buttonHoverEffect, animatedGradients } = useAnimations();

  return (
    <section 
      ref={ref}
      id="inicio" 
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden ${animatedGradients.hero} transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Main heading with enhanced typography */}
        <div className={`mb-8 ${animationClasses.fadeInUp}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient-x bg-size-200">
              Guilherme Francisco Costa
            </span>
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
        </div>
        
        {/* Subtitle with improved spacing */}
        <div className={`mb-12 ${animationClasses.fadeInUp}`} style={{ animationDelay: '200ms' }}>
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto px-4 leading-relaxed">
            Desenvolvedor Full-Stack especializado em 
            <span className="text-primary font-semibold"> React, Next.js & Python </span>
            com FastAPI
          </h2>
        </div>
        
        {/* Enhanced CTA button */}
        <div className={`mb-16 ${animationClasses.scaleIn}`} style={{ animationDelay: '400ms' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projetos')}
            className={`px-10 py-4 text-base font-semibold rounded-xl shadow-lg ${buttonHoverEffect} bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-0 h-14`}
          >
            Ver Projetos
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </Button>
        </div>
        
        {/* Enhanced social links */}
        <div className={`flex justify-center gap-6 ${animationClasses.fadeInUp}`} style={{ animationDelay: '600ms' }}>
          <a 
            href="https://www.linkedin.com/in/guilhermefcostaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg min-h-[64px] min-w-[64px] flex items-center justify-center"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
          <a 
            href="https://github.com/GuilhermeCostax" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-2xl border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg min-h-[64px] min-w-[64px] flex items-center justify-center"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${animationClasses.fadeInUp}`} style={{ animationDelay: '800ms' }}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Role para baixo</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;