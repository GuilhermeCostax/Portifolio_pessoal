import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";
import { useLoadingState } from "@/hooks/useLoadingState";
import { useAnimations } from "@/hooks/useAnimations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const { isLoading } = useLoadingState({ delay: 800 });
  const { animationClasses, cardHoverEffect, buttonHoverEffect } = useAnimations();
  const { ref: servicesRef, hasIntersected: servicesIntersected } = useIntersectionObserver();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <SkeletonLoader type="hero" />
          <SkeletonLoader type="about" />
          <SkeletonLoader type="projects" />
          <SkeletonLoader type="skills" />
          <SkeletonLoader type="contact" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        
        {/* Seção de Serviços Informativa Aprimorada */}
        <section 
          ref={servicesRef}
          className={`relative py-20 bg-gradient-to-br from-muted/20 via-background to-accent/10 overflow-hidden transition-all duration-1000 ${
            servicesIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Enhanced heading */}
              <div className={`mb-8 ${animationClasses.fadeInUp}`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Serviços Disponíveis
                  </h2>
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <div className="h-1 w-32 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
              </div>
              
              {/* Enhanced description */}
              <div className={`mb-12 ${animationClasses.fadeInUp}`} style={{ animationDelay: '200ms' }}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Transformo suas ideias em soluções digitais de alta qualidade. Especializado em desenvolvimento web moderno 
                  com foco em performance, experiência do usuário e resultados mensuráveis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>React & Next.js</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Python & FastAPI</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Full-Stack Solutions</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced CTA section */}
              <div className={`${animationClasses.scaleIn}`} style={{ animationDelay: '400ms' }}>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link 
                      to="/servicos" 
                      className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold shadow-lg ${buttonHoverEffect} border-0`}
                    >
                      Ver Todos os Serviços
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <div className="text-center sm:text-left">
                      <p className="text-sm font-medium text-foreground mb-1">
                        Consulta Gratuita
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Vamos discutir seu projeto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
