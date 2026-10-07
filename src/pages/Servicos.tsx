import { profile } from '@/data/profile';
import { services } from '@/data/services';
import ContactForm from '@/features/contact/ContactForm';
import { Mail, MessageSquare, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SiteLayout from '@/components/layout/SiteLayout';

const Servicos = () => {

  return (
    <SiteLayout>
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
                <ContactForm services={services} />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center animate-in fade-in duration-700">
            <p className="text-muted-foreground mb-4">Prefere entrar em contato diretamente? Use os canais abaixo:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors bg-primary/10 px-6 py-3 rounded-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href={profile.linkedin}
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
    </SiteLayout>
  );
};

export default Servicos;
