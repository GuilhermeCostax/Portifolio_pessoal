import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import HeaderThemeToggle from "@/components/HeaderThemeToggle";

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
      <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className={`glass-ultra rounded-full px-8 py-4 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-400/30 dark:hover:shadow-indigo-400/30 dark:hover:border-indigo-400/40 ${
          isScrolled ? 'glow-primary scale-[0.98]' : 'scale-100'
        }`}>
          <nav className="flex items-center justify-between w-full">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('inicio')} 
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 rounded-full border-0 hover:scale-105"
              >
                Início
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('projetos')} 
                className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-purple-50/50 dark:hover:bg-purple-900/30 rounded-full border-0 hover:scale-105"
              >
                Projetos
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('habilidades')} 
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 rounded-full border-0 hover:scale-105"
              >
                Habilidades
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('servicos')} 
                className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-purple-50/50 dark:hover:bg-purple-900/30 rounded-full border-0 hover:scale-105"
              >
                Serviços
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contato')} 
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 rounded-full border-0 hover:scale-105"
              >
                Contato
              </Button>
            </div>

            {/* Theme Toggle - Desktop */}
             <div className="hidden md:flex items-center">
               <HeaderThemeToggle />
             </div>

             {/* Mobile Menu Button */}
             <div className="md:hidden flex items-center space-x-2">
               <HeaderThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 rounded-full transition-all duration-300"
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
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-24 left-4 right-4 glass-ultra rounded-3xl shadow-2xl border border-white/20 dark:border-white/10">
            <nav className="flex flex-col p-8 space-y-2">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('inicio')} 
                className="justify-start text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 h-12 px-6 text-base font-medium rounded-2xl hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-105"
              >
                Início
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('projetos')} 
                className="justify-start text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 h-12 px-6 text-base font-medium rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105"
              >
                Projetos
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('habilidades')} 
                className="justify-start text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 h-12 px-6 text-base font-medium rounded-2xl hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-105"
              >
                Habilidades
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('servicos')} 
                className="justify-start text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 h-12 px-6 text-base font-medium rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-105"
              >
                Serviços
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contato')} 
                className="justify-start text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 h-12 px-6 text-base font-medium rounded-2xl hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-105"
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