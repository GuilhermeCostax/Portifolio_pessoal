import { profile } from '@/data/profile';
import ContactForm from '@/features/contact/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ContactSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

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

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou disponível para novos projetos, oportunidades de freelancer e colaborações.
            Sinta-se à vontade para entrar em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details Column */}
          <div className="glass-ultra rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Detalhes de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-foreground hover:text-indigo-600 font-medium transition-colors duration-300 text-sm"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 tracking-tight">Redes Sociais</h4>
                <div className="space-y-4">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-subtle hover:glass border-0 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-indigo-600 transition-colors duration-300">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Conecte-se comigo</p>
                    </div>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-subtle hover:glass border-0 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-indigo-600 transition-colors duration-300">GitHub</p>
                      <p className="text-xs text-muted-foreground">Veja meus projetos</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="glass-ultra rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
