# MAJU Transportes

[Português](README.pt.md) | **English**

Institutional website for **MAJU Transportadora**, developed with React and Vite. The application presents the company's transportation services, fleet, insurance coverage, partners, and contact channels.

## Features

- Section navigation with an active state based on the currently visible content.
- Information about the company, fleet, and transportation services.
- Details about RCTR-C and RCF-DC insurance coverage.
- Partners section.
- Contact form integrated with EmailJS.
- Direct WhatsApp shortcut.
- Responsive layout for different screen sizes.

## Technologies

- React 19
- Vite 8
- JavaScript
- CSS
- EmailJS
- Lucide React
- React Icons

## Prerequisites

- Node.js 20 or later
- npm

## Installation

```bash
npm install
```

## EmailJS configuration

Create a `.env.local` file in the project root with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The `.env.local` file is excluded by `.gitignore` and must not be committed to the repository.

Use the [EmailJS](https://www.emailjs.com/) dashboard to create a service and email template, then obtain these credentials. The email template must use the following fields:

- `from_name`
- `from_email`
- `phone`
- `subject`
- `message`

## Running the project

```bash
npm run dev
```

The application will be available at the address reported by Vite, normally `http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Starts the development server
npm run build    # Creates the production build in dist/
npm run preview  # Locally previews the production build
npm run lint     # Runs ESLint
```

## Main project structure

```text
src/
├── assets/images/       # Images, logos, and backgrounds
├── components/pages/    # Page sections
├── config/              # Configuration, such as the WhatsApp link
├── style/               # CSS stylesheets
├── App.jsx              # Application section composition
└── main.jsx             # Application entry point
```

## Production build

```bash
npm run build
```

The final files are generated in the `dist/` directory and can be published to any static hosting service.

## License

Institutional project for MAJU Transportes.
