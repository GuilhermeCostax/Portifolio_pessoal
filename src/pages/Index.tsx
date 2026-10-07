import SiteLayout from "@/components/layout/SiteLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <SiteLayout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
    </SiteLayout>
  );
};

export default Index;
