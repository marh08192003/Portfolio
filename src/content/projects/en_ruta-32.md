---
title: "Ruta 32"
lang: "en"
isFeatured: true
businessDescription: "Gamified mobile educational platform aimed at decentralizing cultural knowledge in Colombia. Minimizes geographical learning friction through interactive gameplay mechanics and efficient consumption of open public data (Colombia API)."
tags: ["Flutter", "Dart", "API Integration", "Mobile Gaming"]
repositories:
  - label: "Main Repository"
    url: "https://github.com/marh08192003/ruta_32"
---

## 📌 Project Overview

**Ruta 32** was created with the clear purpose of solving a specific educational bottleneck: the lack of modern interactive tools dedicated to teaching the geography and cultural diversity across Colombia's 32 departments.

> **The Approach:** By leveraging _Mobile Gaming_ dynamics, the application transforms flat government open data into high-precision mechanics and real-time discovery workflows, guaranteeing a fluid, highly reactive user experience on any mobile device.

---

## 🛠️ Architecture and Technical Decisions

The application's core is structured under **Clean Architecture** principles adapted to the mobile ecosystem, ensuring a maintainable, decoupled, and highly testable codebase.

### 1. State Management with Riverpod

**Riverpod** was chosen due to its compile-time safety and its built-in capacity to manage global state completely decoupled from the widget tree (`BuildContext`).

- The entire game lifecycle (score calculation, collision feedback, and player lives) is managed centrally through a `StateNotifier`.
- Specialized `Providers` were written to handle clean and scalable dependency injection for all core services.

### 2. Network Optimization and Caching Layer

Considering the application relies on asynchronous requests to public open APIs, bandwidth and network transfer efficiency were prioritized:

- **`DepartmentCacheNotifier`**: A custom _in-memory_ caching solution designed to persist queried department data. This eliminates redundant HTTP network requests when a user toggles back and forth between the active map viewport and regional details.

### 3. Dynamic Localization (i18n)

The interface supports complete localization workflows for **Spanish and English** using framework-native `.arb` templates managed by `flutter_localizations`, ensuring a global architecture free of hardcoded strings inside visual layers.

---

## 📡 API Integration and Data Sinks

Information robustness is achieved by asynchronously consuming multiple layers of structured payload data:

- **Geographical Layer:** Up-to-the-minute surface mapping, population statistics, and capital listings for each specific territory.
- **Cultural Layer:** Direct consumption of dynamic endpoints to stream regional traditions and intangible cultural heritage via `FutureProvider` abstractions.
- **Gastronomy:** High-performance rendering of regional cuisine inventories, filtered dynamically on the fly based on geographical areas.

---

## 🧩 Resolving UI/UX Challenges

- **High-Density List Rendering Performance:** To avoid rendering frame drops (_jank_) when concurrently streaming heavy imagery assets and cultural metadata, horizontal scrolls were engineered using layout-optimized `ListView.builder` widgets nested within an inertial main viewport.
- **Fluid Game Loop Mechanics:** A strict decoupling policy was enforced between the reactive state-driven UI and the collision processing calculus engine, achieving sustained high-refresh rendering benchmarks even across budget or legacy hardware profiles.
