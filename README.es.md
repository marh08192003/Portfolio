# Portfolio Personal

Portfolio web desarrollado con **Astro**, **Tailwind CSS** y **TypeScript**, diseñado para presentar proyectos, experiencia y tecnologías utilizadas en distintos desarrollos.

## Características principales

- Sitio estático optimizado para rendimiento.
- Soporte para Español e Inglés.
- Gestión de contenido mediante Astro Content Collections.
- Generación automática de sitemap.
- Despliegue automático mediante GitHub Actions.
- Diseño responsive para dispositivos móviles y escritorio.
- Código mantenible siguiendo buenas prácticas y arquitectura modular.

## Stack Tecnológico

- **Framework:** Astro 6
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Linting:** ESLint
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## Estructura del Proyecto

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

## Requisitos

- Node.js >= 22.12.0
- pnpm >= 11.7.0

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/marh08192003/Portfolio.git
```

### 2. Ingresar al proyecto

```bash
cd Portfolio
```

### 3. Instalar dependencias

```bash
pnpm install
```

### 4. Ejecutar en modo desarrollo

```bash
pnpm run dev
```

La aplicación estará disponible en:

```text
http://localhost:4321
```

## Scripts disponibles

### Desarrollo

```bash
pnpm run dev
```

Inicia el servidor de desarrollo.

### Build de producción

```bash
pnpm run build
```

Genera los archivos estáticos en la carpeta `dist`.

### Vista previa local

```bash
pnpm run preview
```

Permite visualizar el build generado localmente.

### Linter

```bash
pnpm run lint
```

Ejecuta ESLint sobre el proyecto.

### Lighthouse

```bash
pnpm run lighthouse
```

Genera métricas de rendimiento y calidad utilizando Lighthouse.

## Despliegue

El proyecto se despliega automáticamente mediante GitHub Actions hacia GitHub Pages cuando se realizan cambios en la rama principal.

## Autor

Desarrollado por Miguel Rivera (Marh0819).
