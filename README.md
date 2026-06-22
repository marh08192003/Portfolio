# Portfolio

Language / Idioma

- 🇺🇸 [English](./README.en.md)
- 🇨🇴 [Español](./README.es.md)

Personal portfolio built with Astro, Tailwind CSS and TypeScript.

Live Site: https://marh08192003.github.io/Portfolio/


# Personal Portfolio

Personal portfolio built with **Astro**, **Tailwind CSS**, and **TypeScript**, designed to showcase projects, experience, and technologies used across different software developments.

## Main Features

- High-performance static website.
- Spanish and English support.
- Content management through Astro Content Collections.
- Automatic sitemap generation.
- Automated deployment using GitHub Actions.
- Responsive design for mobile and desktop devices.
- Maintainable codebase following modular architecture principles.

## Tech Stack

- **Framework:** Astro 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Project Structure

```text
src/
├── components/
├── content/
│   └── projects/
├── layouts/
├── pages/
├── styles/
└── utils/

public/
└── cv/

.github/
└── workflows/
```

## Requirements

- Node.js >= 22.12.0
- pnpm >= 11.7.0

## Installation and Usage

### 1. Clone the repository

```bash
git clone https://github.com/marh08192003/Portfolio.git
```

### 2. Enter the project directory

```bash
cd Portfolio
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Run development server

```bash
pnpm run dev
```

The application will be available at:

```text
http://localhost:4321
```

## Available Scripts

### Development

```bash
pnpm run dev
```

Starts the development server.

### Production Build

```bash
pnpm run build
```

Generates the static files inside the `dist` folder.

### Local Preview

```bash
pnpm run preview
```

Runs a local preview of the production build.

### Lint

```bash
pnpm run lint
```

Runs ESLint across the project.

### Lighthouse

```bash
pnpm run lighthouse
```

Generates performance and quality metrics using Lighthouse.

## Deployment

The project is automatically deployed to GitHub Pages through GitHub Actions whenever changes are pushed to the main branch.

## Author

Developed by Miguel Rivera (Marh0819).
