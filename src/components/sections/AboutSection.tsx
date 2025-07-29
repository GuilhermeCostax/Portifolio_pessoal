import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, User, Code, Lightbulb } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAnimations } from "@/hooks/useAnimations";

const AboutSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="sobre" 
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading text-center mb-12 sm:mb-16">
          Sobre Mim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="flex justify-center md:justify-end order-1 md:order-none">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-3 border-primary/15 shadow-md">
              <img 
                src="/images/profile/EU.jpeg" 
                alt="Guilherme Costa - Foto Profissional"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 order-2 md:order-none">
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-foreground text-center md:text-left">
              <p>
                Sou Guilherme, estudante de Engenharia de Software na PUC Minas e um desenvolvedor apaixonado por transformar desafios complexos em soluções de software eficientes.
              </p>
              
              <p>
                Com um foco intenso em aprendizado prático, desenvolvi e implantei aplicações full-stack utilizando um ecossistema moderno com React/Next.js no frontend e Python/FastAPI no backend. Minha abordagem envolve o uso estratégico de ferramentas de IA para acelerar a prototipagem e a arquitetura, permitindo-me focar na integração, na lógica de negócio e na entrega de produtos robustos em tempo recorde.
              </p>
              
              <p>
                Atualmente, estou aprofundando minhas habilidades na otimização e codificação manual de componentes, buscando minha primeira oportunidade para aplicar minha visão sistêmica e minha dedicação para contribuir com uma equipe inovadora.
              </p>
            </div>
            
            <div className="pt-4 sm:pt-6 flex justify-center md:justify-start">
              <Button 
                variant="outline" 
                size="lg" 
                disabled
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg opacity-50 cursor-not-allowed h-12 sm:h-auto"
              >
                Download CV (Em breve)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;