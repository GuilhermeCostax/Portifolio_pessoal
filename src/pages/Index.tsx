import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import SkeletonLoader from "@/components/SkeletonLoader";
import { useLoadingState } from "@/hooks/useLoadingState";

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
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
