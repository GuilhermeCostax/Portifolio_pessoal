export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  consultation: string;
  popular: boolean;
}

export const services: Service[] = [
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
  },
  {
    id: 'apis', title: 'Criação de APIs',
    description: 'APIs para integrar aplicações, automatizar processos e organizar dados.',
    features: ['RESTful APIs', 'Autenticação JWT', 'Documentação', 'Testes automatizados'],
    consultation: 'Orçamento personalizado', popular: false,
  },
  {
    id: 'performance', title: 'Otimização de Performance',
    description: 'Análise e melhoria do carregamento e da experiência em aplicações web.',
    features: ['Análise de performance', 'Otimização de código', 'Lazy loading', 'Core Web Vitals'],
    consultation: 'Orçamento personalizado', popular: false,
  }
];
