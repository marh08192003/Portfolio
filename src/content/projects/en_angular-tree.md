---
title: "Angular Tree"
lang: "en"
businessDescription: "Visual Studio Code extension engineered to scan and map Angular Standalone project architectures in real time. Generates interactive hierarchical trees using D3.js to minimize cognitive load during code reviews, audits, and refactoring workflows."
tags: ["TypeScript", "VS Code Extension", "D3.js", "Angular", "Node.js"]
repositories:
  - label: "Marketplace & Repository"
    url: "https://github.com/marh08192003/angular-tree"
  - label: "Marketplace"
    url: "https://marketplace.visualstudio.com/items?itemName=Marh0819.angular-tree"
---

## 📌 Project Overview

**Angular Tree** is a developer productivity tool tailored for the modern frontend ecosystem. It was engineered to tackle complexity and the lack of structural visibility in large-scale applications built with **Angular Standalone Components**, where component inheritance, selector footprints, and deep import trees can easily obscure architectural clarity as projects scale.

> **The Approach:** Operating directly within Visual Studio Code, the extension executes static analysis over the active workspace to render a graphical, interactive hierarchy map. This transforms opaque directory structures and raw source declarations into an intuitive navigation map, significantly accelerating technical _onboarding_ and eliminating friction during complex _code reviews_ or architectural refactoring.

---

## 🛠️ Architecture and Technical Decisions

The core logic is completely decoupled into two primary operational layers: a static file-system analyzer leveraging the native VS Code API, and a reactive frontend WebView container.

### 1. Static Scanning and Smart Extraction (AST Analysis)

The extension handles reactive workspace parsing by monitoring framework-native design patterns, abstracting developers from tedious configuration files:

- **Metadata and Selectores:** Intercepts `@Component({ selector })` decorators and actively maps their utilization directly inside corresponding HTML templates.
- **Dependency Map Tracking:** Scans array structures inside standalone `imports` blocks to automatically deduce physical and structural hierarchy.
- **Lazy Loading Resolution:** Evaluates route configurations to intercept dynamic component bindings declared via the asynchronous `loadComponent: () => import(...)` syntax.

### 2. D3.js-Driven Graphic Engine (Custom WebView)

To deliver fluid, high-performance rendering without locking or degrading the main VS Code thread, data structures formatted as Parent $\rightarrow$ Child trees are serialized and injected into a custom HTML `WebView`. The renderer relies on **D3.js** to compute complex canvas geometries on the fly, enabling collapsible node mechanics while persistently preserving the viewport state as developers work.

### 3. Real-Time Sinks and Workspace Hot-Reloading

Built on top of native Node.js file system listeners, the utility watches active workspace buffers. The exact millisecond a developer saves modifications to a `.ts` source file or an HTML layout template, the analyzer invalidates its local memory cache, runs an incremental re-scan, and instantly pushes hot updates to the graphic interface.

---

## 📡 Operational Control and Editor Workflow

Workspace integration is entirely transparent, maintaining zero-friction configuration policies:

- **Unified Command Trigger:** Developers summon the hierarchical canvas directly via the native VS Code command palette (`angular-tree.showHierarchy`), splitting the active layout into an adjacent panel.
- **Bi-directional Navigation:** The graph functions as an active IDE directory; clicking on any component label triggers a file lookup event, opening the raw source `.ts` file instantly in the text editor to optimize file switching inside large monorepos.

---

## 🧩 Resolving UI/UX Challenges and Technical Constraints

- **Massive Project Scalability:** Complex apps with hundreds of active nodes suffer heavily from visual overflow. This bottleneck was mitigated in release `1.1.0` by writing dynamic collapsible node logic, empowering developers to fold away out-of-scope hierarchies and focus tightly on specific feature modules.
- **Standalone-First Paradigm:** A conscious engineering trade-off was made to ignore legacy `NgModule` parsing architecture. This technical decision kept the regex and AST engines lightweight, fast, and completely focused on modern Angular standards.
- **Static Boundary Constraints:** The engine intentionally limits its scope to explicit template declarations and router trees. Highly dynamic injections occurring at runtime via `ViewContainerRef` or advanced structural directives are isolated gracefully to prevent compilation overhead and maintain editor performance.
