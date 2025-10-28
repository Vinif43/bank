This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requisitos do desafio

### Home Page

- [x] Uma página inicial simples que dá boas-vindas aos usuários.
- [x] Exibir informações sobre o saldo da conta corrente e um extrato das últimas transações.
- [x] Incluir uma seção para iniciar uma nova transação, com opções para selecionar o tipo de transação e inserir o valor.

### Listagem de Transações

- [x] Uma página que exibe a lista de transações realizadas, com opções para visualizar detalhes, editar e deletar cada transação.

### Adicionar Nova Transação

- [X] Uma página ou modal para adicionar uma nova transação ao banco de dados.
- [ ] Formulário deve incluir campos como tipo de transação (depósito, transferência, etc.), valor e data.

### Editar Transação

- [x] Uma página ou modal para editar as informações de uma transação existente.

### Next.js

- [ ] Configure e organize o projeto utilizando Next.js.
  - Adicionar error boundaries (error.tsx) para cada rota?

### Design System

- [ ] Crie um design system que garanta consistência visual e reutilização de componentes.
  - Assegurar a acessibilidade de contraste de cores
- [x] Use ferramentas como Storybook, Docusaurus ou GitBook para documentar os componentes.
- [x] Explore bibliotecas como Material-UI, Bootstrap ou Tailwind UI para agilizar o desenvolvimento.
- [ ] Garantir consistência visual, boa usabilidade e acessibilidade.
  - Testar navegação pelo teclado e controle do foco ao abrir e fechar modais.

### Material para a entrega

- [ ] Link do repositório Git do projeto.
- [ ] README do projeto com as informações para executá-lo em ambiente de desenvolvimento.
- [ ] Vídeo de até 5min explicando todo o fluxo do front-end desenvolvido.
  - Devemos entregar o link do vídeo ou o vídeo em si?

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
