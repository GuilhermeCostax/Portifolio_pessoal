import { profile } from '@/data/profile';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { animationClasses, buttonHoverEffect } from "@/lib/animations";

const HeroSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      ref={ref}
      id="inicio"
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 pb-12 overflow-hidden aurora-mesh transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Main heading with enhanced typography */}
        <div className={`mb-8 ${animationClasses.fadeInUp}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="gradient-text-primary animate-gradient-x bg-size-200">
              Guilherme Francisco Costa
            </span>
          </h1>

          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-primary/60 mx-auto rounded-full glow-primary" />
        </div>

        {/* Subtitle with improved spacing */}
        <div className={`mb-12 ${animationClasses.fadeInUp}`} style={{ animationDelay: '200ms' }}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto px-4 leading-relaxed">
            Desenvolvedor Full-Stack especializado em
            <span className="text-primary font-semibold"> React, Next.js & Python </span>
            com FastAPI
          </p>
        </div>

        {/* Enhanced CTA button */}
        <div className={`mb-16 ${animationClasses.scaleIn}`} style={{ animationDelay: '400ms' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection('projetos')}
            className={`px-12 py-4 text-base font-semibold rounded-2xl shadow-xl ${buttonHoverEffect} bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 h-16 glow-primary hover:glow-primary-strong transition-all duration-300`}
          >
            Ver Projetos
            <ArrowDown className="ml-3 w-5 h-5 animate-bounce" />
          </Button>
        </div>

        {/* Enhanced social links */}
        <div className={`flex justify-center gap-6 ${animationClasses.fadeInUp}`} style={{ animationDelay: '600ms' }}>
          <a
            href={profile.linkedin}
              aria-label="LinkedIn de Guilherme Costa"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-subtle rounded-2xl hover:glass transition-all duration-300 hover:scale-110 hover:glow-primary min-h-[64px] min-w-[64px] flex items-center justify-center"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href={profile.github}
              aria-label="GitHub de Guilherme Costa"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-subtle rounded-2xl hover:glass transition-all duration-300 hover:scale-110 hover:glow-primary min-h-[64px] min-w-[64px] flex items-center justify-center"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-10 ${animationClasses.fadeInUp}`} style={{ animationDelay: '800ms' }} aria-hidden="true">
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
