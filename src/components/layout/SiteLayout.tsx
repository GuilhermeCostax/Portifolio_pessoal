import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  const { scrollToSection } = useScrollToSection();
  useScrollToTop();
  usePageMetadata(pathname);
  useEffect(() => {
    if (pathname === '/' && hash) {
      const frame = requestAnimationFrame(() => scrollToSection(hash.slice(1)));
      return () => cancelAnimationFrame(frame);
    }
  }, [pathname, hash, scrollToSection]);
  return <div className="min-h-screen bg-background text-foreground">
    <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:p-4 focus:text-foreground">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo" tabIndex={-1}>{children}</main>
    <Footer />
  </div>;
}
