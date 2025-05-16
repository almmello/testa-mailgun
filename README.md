# Mailgun Test App

Este projeto é um exemplo de integração Next.js + Mailgun para envio de emails via API.

## Como usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Copie o arquivo `.env.example` para `.env`:
     ```bash
     cp .env.example .env
     ```
   - Preencha os valores reais no `.env`:
     - `MAILGUN_API_KEY`: sua chave privada do Mailgun
     - `MAILGUN_DOMAIN`: seu domínio verificado no Mailgun (ex: `institutochaya.app`)
     - `MAILGUN_FROM_EMAIL`: email do remetente (ex: `postmaster@institutochaya.app`)
     - `MAILGUN_FROM_NAME`: nome do remetente (ex: `Instituto Chaya`)
     - `MAILGUN_DEFAULT_TO`: destinatário padrão para testes
     - `MAILGUN_DEFAULT_SUBJECT` e `MAILGUN_DEFAULT_TEXT`: (opcional) valores padrão do formulário
     - `MAILGUN_API_URL`: (opcional) use `https://api.eu.mailgun.net` para domínios europeus

4. **Rode o projeto em desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) para usar o formulário.

## Produção
- Certifique-se de usar um domínio verificado e ativo no Mailgun.
- Nunca suba seu arquivo `.env` para o GitHub.
- O projeto está pronto para deploy em Vercel, Netlify, etc.

## Segurança
- As chaves e segredos ficam apenas no backend (API routes do Next.js).
- O frontend nunca expõe variáveis sensíveis.
- O arquivo `.env` está no `.gitignore` por padrão.

## Licença
MIT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
