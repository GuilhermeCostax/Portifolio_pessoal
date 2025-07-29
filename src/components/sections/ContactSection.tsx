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
      className={`relative py-20 md:py-32 px-4 sm:px-6 aurora-bg overflow-hidden transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-primary tracking-tight leading-tight">
            Vamos Conversar?
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estou disponível para novos projetos, oportunidades de freelancer e colaborações. 
            Sinta-se à vontade para entrar em contato.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details Column */}
          <div className="glass-ultra rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 tracking-tight">Detalhes de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600 mb-1">Email</p>
                      <a 
                        href="mailto:guilhermefcostadev@gmail.com"
                        className="text-slate-800 hover:text-indigo-600 font-medium transition-colors duration-300 text-sm"
                      >
                        guilhermefcostadev@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-6 tracking-tight">Redes Sociais</h4>
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/guilhermefcostaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-subtle hover:glass border-0 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">LinkedIn</p>
                      <p className="text-xs text-slate-500">Conecte-se comigo</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/GuilhermeCostax" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-subtle hover:glass border-0 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">GitHub</p>
                      <p className="text-xs text-slate-500">Veja meus projetos</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div className="glass-ultra rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3 tracking-wide">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300 font-medium"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3 tracking-wide">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300 font-medium"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3 tracking-wide">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  rows={4}
                  className="w-full min-h-[140px] p-4 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all duration-300 resize-none font-medium"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 text-base tracking-wide"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;