import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-heading text-center mb-16">
          Sobre Mim
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Card className="w-80 h-80 bg-muted flex items-center justify-center rounded-2xl">
              <div className="text-center text-muted-foreground">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-secondary-foreground">GC</span>
                </div>
                <p className="text-sm">Foto Profissional</p>
                <p className="text-xs mt-1">(Placeholder)</p>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                Sou Guilherme, um desenvolvedor web e estudante de Engenharia de Software na PUC Minas. 
                Minha paixão pela tecnologia e pela construção de soluções digitais começou aos 17 anos, 
                e hoje canalizo essa energia para criar projetos que resolvem problemas reais.
              </p>
              
              <p>
                Minha jornada acadêmica tem aprofundado meu conhecimento técnico, enquanto meus projetos 
                práticos me permitem explorar o ecossistema de desenvolvimento web moderno. Tenho um interesse 
                especial em Inteligência Artificial e em como ela pode ser integrada para criar aplicações 
                mais inteligentes e eficientes.
              </p>
              
              <p>
                Busco constantemente aprimorar minhas habilidades e aplicar novos conhecimentos para entregar 
                produtos de alta qualidade, combinando uma base sólida de engenharia com as mais recentes 
                ferramentas do mercado.
              </p>
            </div>
            
            <div className="pt-6">
              <Button 
                variant="outline" 
                size="lg" 
                disabled
                className="px-8 py-6 text-lg opacity-50 cursor-not-allowed"
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