import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { sendContactEmail, initEmailJS, isEmailJSConfigured, type ContactFormData } from "@/lib/emailjs";

const ContactSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  // Inicializar EmailJS quando o componente montar
  useEffect(() => {
    initEmailJS();
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro quando o usuário começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim()
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Enviar email usando EmailJS
      const emailData: ContactFormData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };
      
      const success = await sendContactEmail(emailData);
      
      if (success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Obrigado pelo contato. Em breve retornarei sua mensagem.",
        });
        
        // Limpar formulário apenas se o envio foi bem-sucedido
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Falha no envio do email');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      const errorMessage = !isEmailJSConfigured() 
        ? "EmailJS não está configurado. Entre em contato diretamente pelo email."
        : "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente pelo email.";
        
      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      ref={ref}
      id="contato" 
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading text-center mb-6 sm:mb-8">
          Vamos Conversar?
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Estou disponível para novos projetos, oportunidades de freelancer e colaborações. 
          Sinta-se à vontade para entrar em contato.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-heading mb-1">Email</h3>
                <a 
                  href="mailto:guilhermefcostadev@gmail.com"
                  className="text-primary hover:underline font-medium break-all text-sm sm:text-base"
                >
                  guilhermefcostadev@gmail.com
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-heading">Redes Sociais</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="https://www.linkedin.com/in/guilhermefcostaa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300 min-h-[48px]"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/GuilhermeCostax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300 min-h-[48px]"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-foreground">GitHub</span>
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={`mt-1 transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : formData.name 
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                        : 'border-border focus:border-primary'
                  }`}
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`mt-1 transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                        : 'border-border focus:border-primary'
                  }`}
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  rows={4}
                  className={`mt-1 transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                      : formData.message 
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                        : 'border-border focus:border-primary'
                  }`}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 sm:h-10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base sm:text-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;