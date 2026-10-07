import { useCallback } from 'react';

/**
 * Hook personalizado para scroll suave até seções específicas
 * Segue o princípio de responsabilidade única (SRP) do SOLID
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  }, []);

  return { scrollToSection };
};
