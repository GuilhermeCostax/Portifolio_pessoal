import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";
import { useLoadingState } from "@/hooks/useLoadingState";
import { Link } from "react-router-dom";

const Index = () => {
  const { isLoading } = useLoadingState({ delay: 800 });

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
        
        {/* Seção de Serviços Informativa */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Serviços Disponíveis
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ofereço serviços de desenvolvimento web completo, desde a criação de landing pages até aplicações web complexas. 
                Especializado em React, TypeScript e desenvolvimento full-stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/servicos" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Ver Todos os Serviços
                </Link>
                <p className="text-sm text-muted-foreground">
                  Consulta gratuita disponível
                </p>
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
