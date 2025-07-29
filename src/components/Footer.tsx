import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-heading mb-2">
              Guilherme Francisco Costa
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedor e Estudante de Engenharia de Software
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/guilhermefcostaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://github.com/GuilhermeCostax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Guilherme Francisco Costa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;