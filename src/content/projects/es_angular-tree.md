---
title: "Angular Tree"
lang: "es"
businessDescription: "Extensión para Visual Studio Code diseñada para escanear y mapear la arquitectura de proyectos Angular Standalone en tiempo real. Genera árboles jerárquicos interactivos utilizando D3.js para reducir la carga cognitiva en auditorías de código y refactorizaciones."
tags: ["TypeScript", "VS Code Extension", "D3.js", "Angular", "Node.js"]
repositories:
  - label: "Marketplace & Repositorio"
    url: "https://github.com/marh08192003/angular-tree"
---

## 📌 Visión General del Proyecto

**Angular Tree** es una herramienta de productividad orientada al ecosistema de desarrollo frontend. Nació con el propósito de mitigar la complejidad y la falta de visibilidad en las arquitecturas modernas basadas en **Angular Standalone Components**, donde la herencia y las dependencias de selectores e importaciones pueden difuminarse a medida que el proyecto escala.

> **El Enfoque:** Al ejecutarse directamente dentro de Visual Studio Code, la extensión analiza estáticamente el espacio de trabajo para renderizar una jerarquía gráfica e interactiva. Esto transforma la estructura jerárquica opaca de los componentes en un mapa de navegación dinámico, acelerando los procesos de _onboarding_ técnico y reduciendo la fricción durante _code reviews_ o refactorizaciones complejas.

---

## 🛠️ Arquitectura y Decisiones Técnicas

El núcleo del software opera desacoplado en dos capas principales: análisis estático del sistema de archivos mediante la API de VS Code y una vista reactiva web.

### 1. Escaneo Estático y Detección Astuta (Análisis de AST)

La extensión realiza un parseo reactivo sobre los archivos del workspace buscando patrones nativos del framework, abstrayendo al desarrollador de configuraciones manuales:

- **Metadatos y Selectores:** Intercepta decoradores `@Component({ selector })` e identifica su consumo directo dentro de los templates HTML.
- **Detección de Relaciones:** Rastrea las declaraciones en el arreglo de `imports` de los componentes autónomos para deducir dependencias físicas.
- **Carga Perezosa (Lazy Loading):** Analiza la configuración de rutas identificando inyecciones dinámicas mediante la sintaxis de `loadComponent: () => import(...)`.

### 2. Motor Gráfico Basado en D3.js (WebView Customizada)

Para renderizar un árbol de jerarquía fluido e interactivo sin sobrecargar el hilo principal de procesamiento de VS Code, los datos estructurados tipo Padre $\rightarrow$ Hijo se inyectan en un panel personalizado (`WebView`). El renderizador utiliza **D3.js** para gestionar geometrías complejas, permitiendo colapsar y expandir nodos dinámicamente y preservando el estado de la vista de forma persistente mientras se navega.

### 3. Sincronización en Tiempo Real y Hot-Reload

Se implementaron observadores del sistema de archivos nativos de Node.js. Cada vez que un desarrollador guarda cambios en un componente `.ts` o plantilla HTML, la extensión reanaliza las dependencias e invalida la memoria caché del árbol, actualizando la interfaz visual instantáneamente.

---

## 📡 Control Operacional y Uso en el Workspace

La experiencia de integración con el editor de código es directa, requiriendo cero fricción de configuración:

- **Comando Unificado:** A través de la paleta de comandos de VS Code (`angular-tree.showHierarchy`), el desarrollador despliega la interfaz gráfica en un panel adyacente.
- **Navegación Bidireccional:** El grafo no es meramente consultivo; hacer clic sobre la etiqueta de cualquier componente del árbol dispara un evento que abre inmediatamente el archivo fuente `.ts` correspondiente en el editor, optimizando los tiempos de navegación en monorepositorios o carpetas densas.

---

## 🧩 Solución de Retos de UI/UX y Limitaciones Técnicas

- **Eficiencia en Proyectos Masivos:** En estructuras con cientos de componentes, los árboles estáticos sufren de desbordamiento visual. El reto se solucionó introduciendo nodos colapsables dinámicamente en la versión `1.1.0`, permitiendo un control granular del Viewport al aislar sub-árboles lógicos.
- **Focalización en el Paradigma Standalone:** Se tomó la decisión consciente de diseño de omitir la arquitectura legacy basada en `NgModule` para mantener un parser ligero, rápido y optimizado bajo los estándares modernos de Angular.
- **Límites de Análisis Estático:** Actualmente, la extensión abstrae jerarquías explícitas basadas en plantillas y enrutamiento, aislando de forma controlada componentes inyectados dinámicamente mediante `ViewContainerRef` o directivas estructurales para evitar caídas de rendimiento en el editor.
