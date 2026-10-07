# Análise do portfólio

Análise realizada em 6 de outubro de 2026. O diagnóstico abaixo registra a situação inicial; a primeira rodada de correções está registrada a seguir.

## Correções aplicadas — primeira rodada

- Dependências e caches retirados do índice do Git, preservando os arquivos locais. O grande número de exclusões staged é esperado; não houve commit nem reescrita de histórico.
- Manifesto e lockfile sincronizados, Node definido em `.nvmrc`, instalação limpa com `npm ci` validada.
- TypeScript estrito e verificação de imports/variáveis sem uso ativados. Lint sem erros nem avisos.
- Scroll ao topo limitado à mudança de rota; no navegador, o scroll ficou em 1.756 px antes e depois de digitar no formulário de serviços.
- Contato compartilhado entre home e serviços, validação e normalização centralizadas, mensagens acessíveis e prevenção de envio duplicado. Sem EmailJS configurado, o visitante pode preparar uma mensagem para abrir no aplicativo de email.
- Espera artificial e skeletons sem uso removidos.
- React Query, Sonner, componentes e dependências sem consumidores removidos. SDK EmailJS carregado sob demanda.
- Imagens WebP responsivas: variantes de 1280 px somam 87.838 bytes, contra 4.242.851 bytes dos PNGs originais (97,9% menos). Originais preservados em `design/originals`, fora do build.
- Rotas de serviços/404 carregadas sob demanda. JavaScript principal: 264,57 kB / 82,03 kB gzip, comparado a 396,34 kB / 120,40 kB gzip na execução inicial. A comparação também reflete a instalação reproduzível pelo lockfile; não é uma medição de Core Web Vitals.
- Dados tipados em `src/data`, catálogo único de serviços, layout compartilhado, hover em CSS, observer desconectado após entrada e listener de scroll estável.
- Tema com armazenamento protegido, contraste do contato corrigido, transições globais redundantes removidas e movimento reduzido respeitado.
- Navegação por hash, links sociais nomeados, menu com Escape/foco e estado expandido; 404 em português e link para pular conteúdo.
- README atualizado, testes de validação e workflow de CI adicionados. `npm run check` passou: lint, tipos, quatro testes e build. CI remoto ainda não executado.
- Verificação local: home, serviços, digitação sem salto ao topo, retorno de serviços para projetos, imagens WebP carregadas, mobile 390 × 844 px sem overflow horizontal na medida observada, abertura do menu e Escape devolvendo foco. Não foram observados erros de console na sessão verificada.

### Pendências após esta rodada

- Configurar os três valores reais do EmailJS e validar entrega; nenhuma mensagem foi enviada durante a verificação.
- Fornecer currículo atualizado, definir domínio/canonical/sitemap e criar imagem de compartilhamento própria; a imagem antiga de Open Graph ainda precisa ser substituída.
- Revisar a atualização das dependências com advisories antes de publicação. A remoção de bibliotecas sem uso não significa que todos os advisories foram resolvidos.
- Medir Lighthouse/Core Web Vitals em produção e aprofundar a revisão editorial dos projetos e serviços. As extrações de cards/títulos/fundos restantes podem ser feitas quando reduzirem repetição de maneira clara.

## Diagnóstico

### Resultado da execução

- Servidor iniciado em `http://127.0.0.1:8080/`, com home e serviços abertas no navegador.
- Dependências locais completadas com npm, sem alterar `package.json` ou `package-lock.json`. Como `node_modules` já é rastreado pelo Git, essa instalação gera muitos diffs de dependências; esses diffs não são uma refatoração proposta.
- Build de produção aprovado: JS 396,34 kB (120,40 kB gzip), CSS 65,82 kB (10,65 kB gzip), HTML 1,88 kB. Há um único arquivo principal de JavaScript no resultado observado.
- ESLint: zero erros e quatro avisos de Fast Refresh.
- TypeScript: falhou em `src/components/ui/carousel.tsx:4`, por `embla-carousel-react` ausente.
- Bug do formulário de serviços confirmado: antes de digitar no nome, scroll em 1.654 px; após digitar, scroll voltou a 0 px. Nenhuma mensagem foi enviada.
- Tema escuro: a seção de contato apresenta textos escuros sobre fundo escuro, observado em screenshot; precisa de correção de cores e medição de contraste.
- Viewport mobile de 390 × 844 px: home renderizou, as três imagens carregaram e o menu abriu e fechou ao selecionar Projetos. Não foi observada rolagem horizontal na medida coletada. Isso é uma verificação pontual, não uma auditoria completa de dispositivos.
- Instalação npm reportou 14 vulnerabilidades (8 moderadas e 6 altas). Esse total não demonstra, sozinho, exposição em produção; revisar o relatório por dependência e alcance antes de atualizar. Não executar `audit fix --force` indiscriminadamente.
- Não há configuração local de EmailJS; entrega de mensagens não foi validada. Não foi executado Lighthouse nem calculada uma pontuação de Core Web Vitals.

A base React + TypeScript + Vite é adequada ao tamanho do portfólio. A separação entre páginas, seções, componentes de interface e tema já é útil. Não há motivo demonstrado para migrar todo o projeto para outro framework. As maiores oportunidades estão em simplificar código, corrigir comportamentos e reduzir imagens e dependências carregadas.

### Estrutura atual

| Área | Responsabilidade atual | Avaliação |
| --- | --- | --- |
| `src/App.tsx` | Providers, notificações, tema e rotas | Contém providers e sistemas redundantes; todas as páginas são importadas diretamente. |
| `src/pages` | Home, serviços e 404 | Serviços concentra 380 linhas; falta um layout compartilhado. |
| `src/components/sections` | Seções da home | Boa divisão inicial; conteúdo, apresentação e lógica de formulário ainda misturados. |
| `src/components/ui` | Componentes base | Há componentes sem consumidores e um carousel com dependência não declarada. |
| `src/components/skeletons` | Placeholders de carregamento | Hoje atendem principalmente a uma espera artificial, sem busca de dados. |
| `src/hooks` | Scroll, observer, notificações, tema e animações | Alguns são úteis; animações são apenas constantes e scroll ao topo tem efeito colateral durante renderização. |
| `src/contexts`, `services`, `types` | Tema | Separação razoável; tratamento de armazenamento e transições pode melhorar. |
| `src/constants` | Configurações e breakpoints | Algumas constantes duplicam valores definidos em outros arquivos. |
| `src/lib/emailjs.ts` | Integração de contato | Centraliza o envio, mas devolve só um booleano e oculta a causa da falha. |
| `src/index.css` | Tokens, estilos e efeitos | 362 linhas; transições globais competem com estilos injetados por `ThemeTransition`. |
| `public` | Imagens, favicon e robots | Duas imagens de projetos somam 4.242.851 bytes, aproximadamente 4,05 MiB. |

## Prioridade 1 — Funcionamento e qualidade básica

1. **Tornar a instalação reproduzível.** A cópia recebida não tinha `@emailjs/browser`, apesar de estar declarado, e a instalação de TypeScript estava incompleta (`./_tsc.js` ausente). O manifesto informa versão 3.0.0 e o lockfile registra 0.0.0 na raiz. Conferir e sincronizar manifesto/lockfile e validar uma instalação limpa com `npm ci`. Registrar uma versão de Node compatível e adicionar `typecheck` aos scripts. O build do Vite não substitui a checagem de tipos.

2. **Retirar dependências e caches do índice do Git.** Há 11.762 arquivos de `node_modules` versionados, além de arquivos de `.vite` e `.DS_Store`. O `.gitignore` já ignora `node_modules`, mas isso não afeta arquivos anteriormente rastreados. Remover essas entradas do índice, preservando os arquivos locais; manter `package-lock.json` versionado. Isso melhora clones, diffs e portabilidade, sem reduzir diretamente o JavaScript servido ao visitante. Não é necessário reescrever o histórico para começar.

3. **Corrigir `useScrollToTop`.** `src/hooks/useScrollToTop.ts` chama `window.scrollTo` no corpo do hook. Cada alteração de formulário em `Servicos.tsx` causa um novo render e pode disparar scroll para o topo. Executar em `useEffect` na entrada/mudança de rota, com respeito a movimento reduzido.

4. **Resolver o contato antes de publicar.** Nesta cópia existe somente `.env.example`; não há arquivo local com os três valores do EmailJS. Configurar o ambiente e validar entrega em um teste autorizado. Enquanto indisponível, oferecer contato direto com mensagem simples para o visitante. Unificar validação, normalização e envio nos dois formulários. No contato da home, `errors` é atualizado, mas não aparece nos campos; adicionar mensagens associadas por `aria-describedby` e `aria-invalid`. Não é necessário adicionar uma biblioteca de formulário para apenas três campos.

5. **Restabelecer as verificações de código.** `strict`, `noUnusedLocals` e `noUnusedParameters` estão desativados; o ESLint desativa `no-unused-vars`. Ativar gradualmente, removendo imports e variáveis sem uso. `ui/carousel.tsx` importa `embla-carousel-react`, que não está declarado: remover o componente se não for necessário, ou declarar a dependência se houver uso real. Separar exports do contexto/hook de tema se necessário para Fast Refresh. Os avisos de variantes do shadcn são de desenvolvimento e têm prioridade menor que bugs funcionais.

## Prioridade 2 — Performance

6. **Eliminar a espera artificial de 800 ms.** `pages/Index.tsx` troca a página inteira por skeletons via `useLoadingState`. Não existe carregamento de dados que justifique isso. Renderizar o conteúdo estático imediatamente e reservar placeholders para operações assíncronas reais. Os skeletons também têm dimensões diferentes do conteúdo final, com potencial de deslocamento visual.

7. **Otimizar as imagens.** `pizza-da-praca.png` tem 3.262.515 bytes e `SummarizeAI.png` tem 980.336 bytes. Gerar versões WebP/AVIF e variantes adequadas ao tamanho dos cards, comparando nitidez antes de substituir. Usar `srcset`, `sizes`, dimensões ou `aspect-ratio`, `decoding="async"` e `loading="lazy"` nas imagens fora da primeira tela. Não aplicar lazy loading indiscriminadamente ao conteúdo principal visível. Medir a redução depois; não assumir uma porcentagem sem gerar e conferir os arquivos.

8. **Remover infraestrutura sem uso.** Não foram encontrados `useQuery` ou `useMutation`, embora `App.tsx` monte `QueryClientProvider`. Há Toaster Radix e Sonner simultaneamente; os formulários usam o sistema Radix. Manter um único sistema. `ThemeToggle`, dropdown, dialog, separator e `use-mobile` não têm consumidores diretos na aplicação atual. Remover os módulos e as dependências que ficarem sem uso após conferir o grafo de imports. Arquivos não importados geralmente já ficam fora do bundle; limpá-los melhora principalmente manutenção.

9. **Dividir o código por rota.** Carregar `/servicos` e a página 404 com `React.lazy` e `Suspense`, mantendo a home imediata. Considerar import dinâmico do EmailJS no envio. Avaliar tamanho e waterfall antes de dividir cada pequena seção em um chunk: fragmentação excessiva também tem custo.

10. **Simplificar os efeitos visuais.** Há vários fundos com blur, sombras, pulsos e animações contínuas. `.glass-ultra` usa blur de 32 px e saturação de 180%. Preservar efeitos nas áreas de destaque e reduzir camadas em cards e mobile. `ThemeTransition` injeta `* { transition: ... !important }`, sobrepondo transições locais; centralizar isso no CSS e limitar às propriedades e elementos necessários. Implementar `prefers-reduced-motion`. O impacto de GPU precisa ser medido; o código sozinho não prova travamentos.

11. **Evitar trabalho desnecessário no scroll e hover.** `Header.tsx` mantém `lastScrollY` em estado e recria o listener quando muda. Usar `useRef`, listener estável e `requestAnimationFrame` se a medição justificar. Cards de projetos e habilidades usam estado React para efeitos de mouse que podem ser feitos com `hover`, `group-hover` e `focus-visible`. No observer, desconectar após a primeira entrada quando a animação só deve acontecer uma vez.

## Prioridade 3 — Modularização e organização

12. **Centralizar o conteúdo tipado.** Extrair projetos, tecnologias, serviços e links sociais para `data/`. Definir tipos pequenos em `types/portfolio.ts`. Usar a mesma lista de serviços na home, página detalhada e select: hoje as três listas diferem. Dados estáticos podem ficar fora dos componentes, sem necessidade de `useMemo`.

13. **Extrair padrões realmente repetidos.** Criar `SiteLayout`, `Section`, `SectionHeading`, `SectionBackground`, `ProjectCard`, `ServiceCard` e `SocialLinks` onde houver repetição. Separar um formulário compartilhado e um hook de contato. Manter componentes pequenos próximos da funcionalidade. Evitar camadas de repositories, factories ou classes para conteúdo estático. `useAnimations` pode ser um módulo de constantes, pois não usa hooks React.

14. **Unificar navegação e tema.** A navegação desktop e mobile repete os mesmos botões; gerar ambos a partir de uma lista. Substituir `window.location.href` por navegação do router com hash e tratar o hash depois da montagem da seção. O atraso artificial atual torna a navegação por âncora frágil. Proteger acesso ao `localStorage` com tratamento de falha e validar `light`, `dark` e `system`, tanto no script inicial quanto no serviço. Consolidar tokens de cor em vez de misturar variáveis semânticas com `text-slate-*` fixo.

### Estrutura sugerida

```text
src/
  app/
    App.tsx
    providers.tsx
  pages/
    HomePage.tsx
    ServicesPage.tsx
    NotFoundPage.tsx
  components/
    layout/             # Header, Footer, SiteLayout
    sections/           # seções da home
    shared/             # títulos, fundos, links sociais, cards
    ui/                 # somente componentes base usados
  features/
    contact/
      ContactForm.tsx
      useContactForm.ts
      contactService.ts
      validation.ts
    theme/
      ThemeProvider.tsx
      useTheme.ts
      ThemeToggle.tsx
      themeStorage.ts
  data/
    projects.ts
    services.ts
    skills.ts
    profile.ts
    navigation.ts
  hooks/                # apenas hooks genéricos
  lib/
    utils.ts
  types/
    portfolio.ts
  styles/
    index.css
```

Esta árvore é uma direção, não uma obrigação de mover todos os arquivos de uma vez. A estrutura atual pode evoluir em etapas pequenas.

## Prioridade 4 — Apresentação para o público

15. **Acessibilidade e semântica.** Alterar `lang="en"` para `pt-BR`. Nomear links sociais que contêm só ícones. O menu mobile precisa de nome, estado expandido, Escape e gerenciamento de foco. Evitar `<Link><Button /></Link>`: usar `Button asChild` para produzir um único link. `SkillsSection` coloca um `h3` dentro de `CardTitle`, que já renderiza `h3`. Adicionar link para pular ao conteúdo e testar teclado. Não declarar conformidade WCAG sem uma auditoria própria.

16. **Consistência visual e profissional.** Disponibilizar um currículo real ou retirar o botão desativado. Corrigir cores do contato no tema escuro, onde vários textos usam tons fixos de slate. Padronizar layout e rodapé também em `/servicos`, traduzir a 404 e reduzir espaços e efeitos que competem com os projetos. Substituir emojis de tecnologias por ícones coerentes, se desejado. Apresentar cada projeto com problema, contribuição pessoal, decisões técnicas e resultados verificáveis, evitando promessas genéricas ou números inventados.

17. **SEO e identidade próprios.** Substituir imagens de Open Graph/Twitter do Lovable por uma imagem do portfólio; conferir o identificador do Twitter. A descrição atual destaca Node.js, enquanto a hero destaca Python/FastAPI: alinhar posicionamento. O HTML referencia `/favicon.ico`, mas só existe `favicon.svg`. Definir título/descrição específicos para serviços, canonical, sitemap e metadados do domínio quando escolhido. Considerar pré-renderização de páginas públicas se houver necessidade demonstrada de indexação; não é obrigatório migrar de framework.

18. **Documentação e manutenção.** Enxugar o README, sincronizar versões e retirar alegações não comprovadas de lazy loading, otimização de imagens, acessibilidade completa e bundle splitting. Adicionar CI com instalação limpa, lint, typecheck e build. Testes devem cobrir comportamento: navegar entre serviços e home, manter scroll ao digitar, validar campos, lidar com falha no envio e persistir tema. Conferir responsividade, teclado e contraste. Medir desempenho em build de produção; o servidor de desenvolvimento não representa o desempenho final.

## Ordem recomendada de execução

1. Instalação reproduzível, higiene do Git, scroll do formulário e estado do contato.
2. Remoção do atraso artificial, imagens e providers redundantes.
3. Dados compartilhados, formulário e layout; checagem estrita gradual.
4. Navegação por hash, lazy loading por rota e simplificação dos efeitos.
5. Acessibilidade, currículo, conteúdo, SEO e documentação.
6. Validar o resultado em produção local e comparar medidas antes/depois.

## Referências técnicas

- [React: lazy](https://react.dev/reference/react/lazy) — adiar carregamento de componentes por import dinâmico.
- [Vite: recursos de build](https://vite.dev/guide/features.html) — tratamento de chunks assíncronos e CSS.
- [web.dev: lazy loading de imagens](https://web.dev/articles/browser-level-image-lazy-loading) — uso de lazy loading fora da primeira tela e cuidados com imagens críticas.
