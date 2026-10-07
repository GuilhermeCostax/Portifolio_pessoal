export const siteUrl = 'https://portifolio-pessoal-rust.vercel.app';
export const socialImage = `${siteUrl}/social-preview.png`;

export interface PageMetadata {
  title: string;
  description: string;
  indexable: boolean;
}

export const pages: Record<string, PageMetadata> = {
  '/': {
    title: 'Guilherme Costa | Desenvolvedor Full Stack',
    description: 'Projetos e serviços de Guilherme Costa. Desenvolvimento web com React, Next.js, TypeScript e Python/FastAPI.',
    indexable: true,
  },
  '/servicos': {
    title: 'Desenvolvimento web e serviços | Guilherme Costa',
    description: 'Sites, landing pages, aplicações full stack, APIs e otimização de performance. Conheça os serviços de Guilherme Costa e solicite um orçamento.',
    indexable: true,
  },
};

export const notFoundMetadata: PageMetadata = {
  title: 'Página não encontrada | Guilherme Costa',
  description: 'A página solicitada não foi encontrada. Volte ao portfólio de Guilherme Costa para conhecer projetos e serviços.',
  indexable: false,
};

export const getPageMetadata = (pathname: string): PageMetadata =>
  pages[pathname.replace(/\/$/, '') || '/'] ?? notFoundMetadata;
