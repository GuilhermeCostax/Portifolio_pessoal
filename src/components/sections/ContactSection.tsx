import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Em breve retornarei sua mensagem.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-heading text-center mb-8">
          Vamos Conversar?
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Estou disponível para novos projetos, oportunidades de freelancer e colaborações. 
          Sinta-se à vontade para entrar em contato.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-heading mb-1">Email</h3>
                <a 
                  href="mailto:guilhermefcostadev@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  guilhermefcostadev@gmail.com
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-heading">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/guilhermefcostaa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/GuilhermeCostax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:border-primary transition-all duration-300"
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
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="mt-1"
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
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="mt-1"
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
                  onChange={handleInputChange}
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  rows={4}
                  className="mt-1"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;