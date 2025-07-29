import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection: scrollToSectionBase } = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Se não estiver na página inicial, navegar para lá primeiro
      window.location.href = `/#${sectionId}`;
      return;
    }
    // Usar o hook para scroll suave
    scrollToSectionBase(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-semibold text-heading">
              Guilherme Costa
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary px-4 py-2">
                Início
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary px-4 py-2">
                Sobre Mim
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('projetos')} className="text-foreground hover:text-primary px-4 py-2">
                Projetos
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('habilidades')} className="text-foreground hover:text-primary px-4 py-2">
                Habilidades
              </Button>
              <Link 
                to="/servicos"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Button variant="ghost" onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary px-4 py-2">
                Contato
              </Button>
              <ThemeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="p-2 h-9 w-9"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bg-card border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('inicio')} 
                className="justify-start text-foreground hover:text-primary h-12 px-4 text-base"
              >
                Início
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('sobre')} 
                className="justify-start text-foreground hover:text-primary h-12 px-4 text-base"
              >
                Sobre Mim
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('projetos')} 
                className="justify-start text-foreground hover:text-primary h-12 px-4 text-base"
              >
                Projetos
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('habilidades')} 
                className="justify-start text-foreground hover:text-primary h-12 px-4 text-base"
              >
                Habilidades
              </Button>
              <Link 
                to="/servicos"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left h-12 px-4 text-base flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contato')} 
                className="justify-start text-foreground hover:text-primary h-12 px-4 text-base"
              >
                Contato
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;