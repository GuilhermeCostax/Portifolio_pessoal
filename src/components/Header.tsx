import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeaderThemeToggle from '@/components/HeaderThemeToggle';
import { navigation } from '@/data/navigation';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setIsVisible(y < lastScrollY.current || y < 100);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLElement>('a')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === 'Tab') {
        const controls = [menuButton.current, ...Array.from(menu.current?.querySelectorAll<HTMLElement>('a') || [])].filter((item): item is HTMLElement => item !== null);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [isMobileMenuOpen]);

  const selectSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsVisible(true);
    if (pathname === '/') scrollToSection(id);
  };

  return <>
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 focus-within:translate-y-0 ${isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
      <div className={`glass-ultra rounded-full px-6 py-4 shadow-lg ${isScrolled ? 'border-primary/30' : ''}`}>
        <nav aria-label="Navegação principal" className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {navigation.map(item => <Button key={item.id} variant="ghost" asChild className="rounded-full text-foreground">
              <Link to={`/#${item.id}`} onClick={() => selectSection(item.id)}>{item.label}</Link>
            </Button>)}
          </div>
          <HeaderThemeToggle />
          <Button ref={menuButton} variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setIsMobileMenuOpen(open => !open)} aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMobileMenuOpen} aria-controls="menu-mobile">
            {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </nav>
      </div>
    </header>
    {isMobileMenuOpen && <div className="fixed inset-0 z-40 md:hidden">
      <div className="absolute inset-0 bg-background/80" onClick={() => { setIsMobileMenuOpen(false); menuButton.current?.focus(); }} aria-hidden="true" />
      <div ref={menu} id="menu-mobile" className="fixed top-28 left-4 right-4 glass-ultra rounded-2xl p-4">
        <nav aria-label="Navegação mobile" className="flex flex-col gap-2">
          {navigation.map(item => <Button key={item.id} variant="ghost" asChild className="justify-start h-12">
            <Link to={`/#${item.id}`} onClick={() => selectSection(item.id)}>{item.label}</Link>
          </Button>)}
        </nav>
      </div>
    </div>}
  </>;
}
