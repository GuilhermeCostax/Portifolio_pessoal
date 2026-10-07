# Portfólio de Guilherme Costa

Portfólio pessoal com projetos, tecnologias, serviços e contato. Construído com React 18, TypeScript, Vite e Tailwind CSS.

## Executar

Use a versão de Node indicada em `.nvmrc` (22.17.0).

```bash
nvm use
npm ci
npm run dev
```

O servidor abre em `http://localhost:8080`. O build estático é gerado em `dist/`.

```bash
npm run check     # lint, TypeScript estrito, testes e build
npm run test      # validação do contato
npm run build
npm run preview
```

## Organização

```text
src/
  components/
    layout/       # layout compartilhado entre páginas
    sections/     # seções da home
    ui/           # componentes base utilizados
  contexts/       # provider e definição do contexto de tema
  data/           # projetos, tecnologias, serviços, perfil e navegação
  features/
    contact/      # formulário, hook e validação compartilhados
  hooks/          # tema, scroll, observer e notificações
  lib/            # integração EmailJS, animações e utilitários
  pages/          # home, serviços e 404
  services/       # armazenamento e aplicação do tema
  types/          # tipos do tema
public/           # arquivos entregues ao visitante
design/originals/ # imagens originais de referência, fora do build
```

Projetos, tecnologias e serviços são editados em `src/data/`. Os dados de contato ficam em `src/data/profile.ts`. A página de serviços e a 404 são carregadas sob demanda; o SDK de email é carregado apenas quando há envio. As imagens dos projetos possuem variantes WebP de 640 e 1280 px, com originais preservados em `design/originals/`.

## Contato

Copie `.env.example` para `.env.local` e substitua os três valores pelo serviço, template e chave pública da sua conta EmailJS. Reinicie o servidor após configurar.

```bash
cp .env.example .env.local
```

Sem configuração, o site oferece contato direto por email. A chave pública e as variáveis `VITE_*` são incorporadas no frontend; não coloque segredos nessas variáveis. Veja [EMAILJS_SETUP.md](EMAILJS_SETUP.md) para os campos do template.

## Publicar

Execute `npm run check` e publique `dist/` em um host de arquivos estáticos. Configure o host para servir `index.html` nas rotas da SPA, incluindo `/servicos`. Configure as variáveis de contato antes do build. Não versionar `node_modules`, `.vite`, `.env.local` ou `dist`.

O workflow em `.github/workflows/ci.yml` executa as verificações em pushes e pull requests. Os testes locais de validação não confirmam entrega de email; esse fluxo depende da configuração da conta e de um teste real autorizado.

## Pendências de conteúdo

- Adicionar um currículo atualizado antes de oferecer seu download.
- Definir o domínio público para canonical e sitemap.
- Confirmar a entrega do EmailJS com a conta configurada.

Consulte [ANALISE_PROJETO.md](ANALISE_PROJETO.md) para o diagnóstico original e o registro das melhorias.
