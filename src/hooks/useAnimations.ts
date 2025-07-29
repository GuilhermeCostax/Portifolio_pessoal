/**
 * Hook personalizado para gerenciar animações e efeitos visuais
 * Segue os princípios SOLID e clean code
 */
export const useAnimations = () => {
  // Configurações de animação para diferentes elementos
  const animationClasses = {
    fadeInUp: 'animate-in fade-in slide-in-from-bottom-4 duration-700',
    fadeInLeft: 'animate-in fade-in slide-in-from-left-4 duration-700',
    fadeInRight: 'animate-in fade-in slide-in-from-right-4 duration-700',
    scaleIn: 'animate-in zoom-in duration-500',
    slideInUp: 'animate-in slide-in-from-bottom-8 duration-700',
    bounceIn: 'animate-bounce',
    pulseGlow: 'animate-pulse',
  };

  // Delays escalonados para animações em sequência
  const getStaggeredDelay = (index: number, baseDelay: number = 100) => ({
    animationDelay: `${index * baseDelay}ms`
  });

  // Efeito de hover para cards
  const cardHoverEffect = 'hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out';

  // Efeito de hover para botões
  const buttonHoverEffect = 'hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out';

  // Gradientes animados
  const animatedGradients = {
    primary: 'bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-size-200 animate-gradient-x',
    secondary: 'bg-gradient-to-br from-background via-muted/20 to-accent/10',
    hero: 'bg-gradient-to-br from-background via-background to-muted/20',
  };

  return {
    animationClasses,
    getStaggeredDelay,
    cardHoverEffect,
    buttonHoverEffect,
    animatedGradients,
  };
};

export default useAnimations;