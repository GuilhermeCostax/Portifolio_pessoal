/**
 * Hook personalizado para fazer scroll automático para o topo da página
 * Segue o princípio da responsabilidade única (SRP) do SOLID
 */
export const useScrollToTop = () => {
  // Scroll suave para o topo da página
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

export default useScrollToTop;