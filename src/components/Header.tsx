import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold text-heading">
            Guilherme Costa
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary">
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary">
              Sobre Mim
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projetos')} className="text-foreground hover:text-primary">
              Projetos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('habilidades')} className="text-foreground hover:text-primary">
              Habilidades
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary">
              Contato
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;