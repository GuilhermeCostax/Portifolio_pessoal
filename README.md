# Portfólio Pessoal - Guilherme Francisco Costa

> Portfólio web moderno e responsivo desenvolvido para apresentar projetos, habilidades e experiências profissionais.

## 🎯 Sobre o Projeto

Este é o portfólio pessoal de Guilherme Francisco Costa, desenvolvedor e estudante de Engenharia de Software na PUC Minas. O projeto foi construído com foco em performance, acessibilidade e experiência do usuário, utilizando as mais modernas tecnologias do ecossistema React.

## 🏗️ Arquitetura e Padrões

### Estrutura do Projeto
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do shadcn/ui
│   ├── sections/       # Seções específicas do portfólio
│   ├── Header.tsx      # Navegação principal
│   └── Footer.tsx      # Rodapé com links sociais
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── hooks/              # Hooks personalizados
├── lib/                # Utilitários e configurações
└── styles/             # Estilos globais
```

### Padrões Arquiteturais

- **Component-Based Architecture**: Estrutura modular com componentes reutilizáveis
- **Single Page Application (SPA)**: Navegação fluida com React Router
- **Design System**: Sistema consistente baseado em shadcn/ui
- **Mobile-First**: Abordagem responsiva priorizando dispositivos móveis
- **Atomic Design**: Componentes organizados hierarquicamente

## 🛠️ Stack Tecnológica

### Core
- **React 18** - Biblioteca principal para UI
- **TypeScript** - Tipagem estática para maior robustez
- **Vite** - Build tool moderna e performática

### Styling & UI
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI headless
- **Lucide React** - Ícones SVG otimizados
- **class-variance-authority** - Gerenciamento de variantes de componentes

### State Management & Data
- **TanStack Query** - Gerenciamento de estado servidor
- **React Hook Form** - Formulários performáticos
- **Zod** - Validação de schemas

### Developer Experience
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Path Mapping** - Imports absolutos com @/

## 🎨 Design System

### Tema e Cores
- **Sistema HSL**: Todas as cores definidas em HSL para melhor manipulação
- **CSS Variables**: Customização dinâmica de temas
- **Dark/Light Mode**: Suporte nativo a temas claro e escuro
- **Semantic Colors**: Cores semânticas (primary, secondary, muted, etc.)

### Tipografia
- **Inter Font**: Fonte principal otimizada para legibilidade
- **Hierarquia Clara**: Sistema consistente de tamanhos e pesos
- **Responsive Typography**: Ajuste automático para diferentes telas

### Componentes
- **Acessibilidade**: ARIA labels e navegação por teclado
- **Animações**: Transições suaves com CSS e Tailwind
- **Estados Interativos**: Hover, focus e active states

## 📱 Funcionalidades

### Seções Principais
1. **Hero Section**: Apresentação pessoal com CTAs
2. **About Section**: Biografia e trajetória profissional
3. **Projects Section**: Showcase de projetos com tecnologias
4. **Skills Section**: Habilidades organizadas por categoria
5. **Contact Section**: Formulário de contato e redes sociais

### Recursos Técnicos
- **Navegação Suave**: Scroll suave entre seções
- **Header Dinâmico**: Mudança de estilo baseada no scroll
- **Formulário Funcional**: Validação e feedback visual
- **Toast Notifications**: Feedback de ações do usuário
- **Responsive Design**: Adaptação para todos os dispositivos
- **Performance Otimizada**: Lazy loading e otimizações de bundle

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue até o diretório
cd Portifolio_pessoal

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run build:dev    # Build de desenvolvimento
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 📊 Estrutura de Dados

### Projetos
Cada projeto no portfólio contém:
- **Nome e Subtítulo**: Identificação clara do projeto
- **Descrição Detalhada**: Contexto e funcionalidades
- **Stack Tecnológica**: Tecnologias utilizadas
- **Links**: Repositório GitHub e demo ao vivo
- **Imagem**: Preview visual do projeto

### Habilidades
Organizadas em categorias:
- **Linguagens**: JavaScript, TypeScript, Python, C, HTML5, CSS3
- **Front-End**: React, Next.js, Vite, Tailwind CSS
- **Back-End**: FastAPI, Node.js
- **Bancos de Dados**: SQLite, SQLAlchemy
- **Ferramentas**: Git, GitHub, Docker, VS Code, IA APIs

## 🎯 Destaques Técnicos

### Performance
- **Bundle Splitting**: Carregamento otimizado de recursos
- **Tree Shaking**: Eliminação de código não utilizado
- **Image Optimization**: Imagens otimizadas e lazy loading
- **CSS Purging**: Remoção de CSS não utilizado

### Acessibilidade
- **WCAG 2.1**: Conformidade com diretrizes de acessibilidade
- **Keyboard Navigation**: Navegação completa por teclado
- **Screen Reader**: Compatibilidade com leitores de tela
- **Color Contrast**: Contraste adequado em todos os temas

### SEO
- **Meta Tags**: Otimização para mecanismos de busca
- **Semantic HTML**: Estrutura semântica adequada
- **Open Graph**: Compartilhamento otimizado em redes sociais

## 🔧 Customização

### Temas
O sistema de temas utiliza CSS Variables, permitindo fácil customização:
```css
:root {
  --primary: 210 100% 40%;     /* Cor primária */
  --background: 0 0% 99%;      /* Cor de fundo */
  --foreground: 225 15% 20%;   /* Cor do texto */
  /* ... outras variáveis */
}
```

### Componentes
Todos os componentes seguem o padrão shadcn/ui e podem ser customizados via:
- **Tailwind Classes**: Estilização utilitária
- **CSS Variables**: Cores e espaçamentos
- **Component Variants**: Variações pré-definidas

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

### Estratégia Mobile-First
- Design inicial para mobile
- Progressive enhancement para telas maiores
- Touch-friendly interactions
- Otimização de performance para dispositivos móveis

## 🚀 Deploy

O projeto está configurado para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Qualquer provedor que suporte SPA**

### Build de Produção
```bash
npm run build
```

## 📞 Contato

**Guilherme Francisco Costa**
- 📧 Email: guilhermefcostadev@gmail.com
- 💼 LinkedIn: [guilhermefcostaa](https://www.linkedin.com/in/guilhermefcostaa/)
- 🐙 GitHub: [GuilhermeCostax](https://github.com/GuilhermeCostax)

---

*Desenvolvido com ❤️ por Guilherme Francisco Costa*
