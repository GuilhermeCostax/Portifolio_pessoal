import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, type ContactFormData } from '@/lib/emailjs';
import Header from '@/components/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAnimations } from '@/hooks/useAnimations';

interface FormData {
  name: string;
  email: string;
  message: string;
  service: string;
}

const services = [
  {
    id: 'freelancer',
    title: 'Freelancer Full-Stack',
    description: 'Desenvolvimento completo de aplicações web com expertise em front-end e back-end.',
    features: [
      'React.js, Next.js e TypeScript',
      'Node.js e Python',
      'Banco de dados e APIs',
      'Deploy e manutenção'
    ],
    consultation: 'Consulta gratuita disponível',
    popular: true
  },
  {
    id: 'sites',
    title: 'Sites do Zero',
    description: 'Criação completa de websites modernos e responsivos desde o conceito inicial.',
    features: [
      'Design personalizado',
      'Desenvolvimento responsivo',
      'Otimização SEO',
      'Performance otimizada'
    ],
    consultation: 'Orçamento personalizado',
    popular: false
  },
  {
    id: 'landing',
    title: 'Landing Pages',
    description: 'Páginas de conversão otimizadas para capturar leads e gerar resultados.',
    features: [
      'Design focado em conversão',
      'Integração com ferramentas',
      'Analytics e métricas',
      'Testes A/B'
    ],
    consultation: 'Consulta de valor GRATUITA',
    popular: false
  },
  {
    id: 'homepage',
    title: 'Home Pages Corporativas',
    description: 'Páginas institucionais profissionais que representam sua marca com excelência.',
    features: [
      'Identidade visual forte',
      'Conteúdo estratégico',
      'Experiência do usuário',
      'Integração com sistemas'
    ],
    consultation: 'Consulta de valor GRATUITA',
    popular: false
  }
];

const Servicos = () => {
  // Hook para scroll automático para o topo
  useScrollToTop();
  
  const { animationClasses, cardHoverEffect, buttonHoverEffect, animatedGradients } = useAnimations();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        message: `Serviço: ${formData.service}\n\nMensagem: ${formData.message}`
      };

      const success = await sendContactEmail(emailData);

      if (success) {
        toast({
          title: 'Mensagem enviada!',
          description: 'Entrarei em contato em breve para discutir seu projeto.',
        });

        setFormData({ name: '', email: '', message: '', service: '' });
      } else {
        throw new Error('Falha no envio do email');
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Tente novamente ou entre em contato diretamente.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Meus Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
              Transformo ideias em soluções digitais de alta qualidade. 
              Especializado em desenvolvimento web moderno com foco em performance e experiência do usuário.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className={`relative h-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  service.popular ? 'ring-2 ring-primary' : ''
                }`}>
                  {service.popular && (
                    <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Mais Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-lg font-semibold text-green-600">{service.consultation}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher meus serviços?</h2>
            <p className="text-lg text-muted-foreground">
              Combinação única de experiência técnica, design moderno e foco nos resultados do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-in slide-in-from-left duration-700">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Qualidade Garantida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Código limpo e bem documentado</li>
                    <li>• Testes automatizados</li>
                    <li>• Seguimento de boas práticas</li>
                    <li>• Versionamento com Git</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in slide-in-from-right duration-700">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Diferencial Competitivo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comunicação clara e transparente</li>
                    <li>• Prazos respeitados</li>
                    <li>• Suporte pós-entrega</li>
                    <li>• Preços justos e competitivos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Consulta Gratuita</h2>
            <p className="text-lg text-muted-foreground">
              A consulta de valores para Home Pages e Landing Pages é GRATUITA! Entre em contato por email ou LinkedIn.
            </p>
          </div>

          <div className="animate-in fade-in duration-700">
            <Card>
              <CardHeader>
                <CardTitle>Solicitar Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="frontend">Desenvolvimento Frontend</option>
                      <option value="fullstack">Desenvolvimento Full Stack</option>
                      <option value="consultoria">Consultoria Técnica</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva seu projeto, prazos, orçamento e qualquer informação relevante..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensagem
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center animate-in fade-in duration-700">
            <p className="text-muted-foreground mb-4">Prefere entrar em contato diretamente? Use os canais abaixo:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=guilhermefcostadev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors bg-primary/10 px-6 py-3 rounded-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/guilhermefcostaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors bg-primary/10 px-6 py-3 rounded-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;