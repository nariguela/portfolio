# Pedro Dias da Cunha | Portfólio

Portfólio front-end migrado para Next.js com App Router, TypeScript, Tailwind CSS e Framer Motion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

- `npm run dev`: inicia o Next.js em desenvolvimento.
- `npm run build`: gera a build de produção.
- `npm run start`: executa a build de produção.
- `npm run lint`: roda o lint do projeto.

## Estrutura

- `app/`: rotas, layout, metadata, sitemap e robots.
- `components/`: componentes reutilizáveis.
- `sections/`: seções principais da landing page.
- `data/`: conteúdo do portfólio.
- `public/assets/`: imagens usadas no site.

## Personalização

Atualize textos, links, skills e projetos em `data/portfolio.ts`. Quando definir a URL final de deploy, configure `NEXT_PUBLIC_SITE_URL` para melhorar sitemap, robots e Open Graph.
