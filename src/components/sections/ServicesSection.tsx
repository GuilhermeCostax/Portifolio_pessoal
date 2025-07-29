import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const services = [
    {
      id: 1,
      title: "Desenvolvimento de Landing Pages",
      description: "Páginas de conversão otimizadas para capturar leads e gerar resultados mensuráveis para seu negócio.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Design focado em conversão",
        "Otimização SEO avançada",
        "Integração com ferramentas",
        "Analytics e métricas"
      ],
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-600 to-purple-700"
    },
    {
      id: 2,
      title: "Criação de APIs",
      description: "APIs robustas e escaláveis desenvolvidas com as melhores práticas de segurança e performance.",
      icon: <Database className="w-8 h-8" />,
      features: [
        "RESTful APIs modernas",
        "Autenticação JWT",
        "Documentação completa",
        "Testes automatizados"
      ],
      gradient: "from-purple-500 to-indigo-600",
      hoverGradient: "from-purple-600 to-indigo-700"
    },
    {
      id: 3,
      title: "Otimização de Performance",
      description: "Melhoria significativa na velocidade e experiência do usuário em aplicações web existentes.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Análise de performance",
        "Otimização de código",
        "Lazy loading avançado",
        "Core Web Vitals"
      ],
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-600 to-purple-700"
    }
  ];

  return (
    <section 
      ref={ref}
      id="servicos" 
      className={`relative py-20 md:py-32 px-4 sm:px-6 aurora-bg overflow-hidden transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text-primary tracking-tight leading-tight">
              Meus Serviços
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-pulse" />
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Soluções digitais personalizadas para transformar suas ideias em realidade. 
            Especializado em desenvolvimento web moderno com foco em resultados.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`group glass-ultra border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer overflow-hidden ${
                hasIntersected ? 'animate-in fade-in slide-in-from-bottom-8' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="relative pb-4">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className={`inline-block ${
            hasIntersected ? 'animate-in fade-in slide-in-from-bottom-4' : ''
          }`} style={{ animationDelay: '600ms' }}>
            <Link to="/servicos">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 dark:hover:shadow-indigo-400/30 transform hover:scale-[1.02] transition-all duration-300 border-0 text-base tracking-wide"
              >
                Saiba Mais sobre meus Serviços
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 font-medium">
              Consulta gratuita disponível • Orçamento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;