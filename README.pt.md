# MAJU Transportes

**Português** | [English](README.md)

Site institucional da **Transportadora MAJU**, desenvolvido com React e Vite. A aplicação apresenta os serviços de transporte, a frota, as coberturas de seguro, os parceiros e os canais de contato da empresa.

## Funcionalidades

- Navegação por seções com destaque conforme o conteúdo exibido na tela.
- Apresentação da empresa, da frota e dos serviços de transporte.
- Informações sobre RCTR-C e RCF-DC.
- Área de parceiros.
- Formulário de contato integrado ao EmailJS.
- Atalho direto para o WhatsApp.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias

- React 19
- Vite 8
- JavaScript
- CSS
- EmailJS
- Lucide React
- React Icons

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

## Configuração do EmailJS

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

O arquivo `.env.local` já está protegido pelo `.gitignore` e não deve ser enviado ao repositório.

Acesse o painel do [EmailJS](https://www.emailjs.com/) para criar o serviço, o modelo de e-mail e obter essas credenciais. No modelo, os campos utilizados pelo formulário são:

- `from_name`
- `from_email`
- `phone`
- `subject`
- `message`

## Executando o projeto

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente em `http://localhost:5173`.

## Scripts disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera a versão de produção em dist/
npm run preview  # Visualiza localmente a versão de produção
npm run lint     # Executa o ESLint
```

## Estrutura principal

```text
src/
├── assets/images/       # Imagens, logotipos e fundos
├── components/pages/    # Seções da página
├── config/              # Configurações, como o link do WhatsApp
├── style/               # Folhas de estilo CSS
├── App.jsx              # Composição das seções
└── main.jsx             # Ponto de entrada da aplicação
```

## Build de produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/` e poderão ser publicados em qualquer serviço de hospedagem estática.

## Licença

Projeto de uso institucional da MAJU Transportes.
