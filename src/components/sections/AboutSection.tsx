import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="sobre"
      className={`relative py-20 md:pt-32 md:pb-16 px-4 sm:px-6 aurora-bg overflow-hidden transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold gradient-text-primary tracking-tight leading-tight">
              Sobre Mim
            </h2>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-none">
            <div className="relative group">
              {/* Glowing Border Animation */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 rounded-[3rem] blur-sm opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000 group-hover:duration-200" />

              {/* Photo Container - Squircle Shape */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[3rem] overflow-hidden bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
                <img
                  src="/images/profile/EU.jpeg"
                  width={384}
                  height={384}
                  loading="lazy"
                  decoding="async"
                  alt="Guilherme Costa - Foto Profissional"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-2 lg:order-none">
            <div className="glass-ultra rounded-3xl p-8 md:p-10 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10 transition-all duration-500">
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p className="text-center lg:text-left">
                  Sou <span className="font-semibold text-slate-800 dark:text-slate-200">Guilherme</span>, estudante de Engenharia de Software na PUC Minas e um desenvolvedor apaixonado por transformar desafios complexos em soluções de software eficientes.
                </p>

                <p className="text-center lg:text-left">
                  Com um foco intenso em aprendizado prático, desenvolvi e implantei aplicações full-stack utilizando um ecossistema moderno com <span className="font-medium text-indigo-600 dark:text-indigo-400">React/Next.js</span> no frontend e <span className="font-medium text-purple-600 dark:text-purple-400">Python/FastAPI</span> no backend. Minha abordagem envolve o uso estratégico de ferramentas de IA para acelerar a prototipagem e a arquitetura, permitindo-me focar na integração, na lógica de negócio e na entrega de produtos robustos em tempo recorde.
                </p>

                <p className="text-center lg:text-left">
                  Atualmente, estou aprofundando minhas habilidades na otimização e codificação manual de componentes, buscando minha primeira oportunidade para aplicar minha visão sistêmica e minha dedicação para contribuir com uma equipe inovadora.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
