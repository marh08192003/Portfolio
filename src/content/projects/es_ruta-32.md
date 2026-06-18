---
title: "Ruta 32"
lang: "es"
isFeatured: true
businessDescription: "Plataforma educativa móvil gamificada orientada a la descentralización del conocimiento cultural en Colombia. Reduce la fricción de aprendizaje geográfico mediante dinámicas de juego interactivas y consumo eficiente de datos públicos (API Colombia)."
tags: ["Flutter", "Dart", "API Integration", "Mobile Gaming"]
repositories:
  - label: "Repositorio Principal"
    url: "https://github.com/marh08192003/ruta_32"
---

## 📌 Visión General del Proyecto

**Ruta 32** nació con el propósito de resolver una problemática educativa clara: la falta de herramientas interactivas modernas para la enseñanza de la geografía y diversidad cultural de los 32 departamentos de Colombia.

> **El Enfoque:** A través de dinámicas de _Mobile Gaming_, la aplicación transforma datos planos gubernamentales en mecánicas de precisión y descubrimiento en tiempo real, garantizando una experiencia de usuario fluida y reactiva en cualquier dispositivo móvil.

---

## 🛠️ Arquitectura y Decisiones Técnicas

El núcleo de la aplicación se estructuró bajo principios de **Clean Architecture** adaptados al ecosistema móvil, garantizando un código mantenible, desacoplado y altamente testeable.

### 1. Gestión de Estado con Riverpod

Se seleccionó **Riverpod** debido a su seguridad en tiempo de compilación y su capacidad para manejar estados globales independientes del árbol de widgets (`BuildContext`).

- El ciclo de vida del juego (puntos, colisiones y vidas) se gestiona centralizadamente mediante un `StateNotifier`.
- Se implementaron `Providers` especializados para inyectar servicios de manera limpia.

### 2. Optimización de Red y Sistema de Caché

Considerando que la aplicación consume datos públicos asíncronos, se priorizó la eficiencia en la transferencia de red:

- **`DepartmentCacheNotifier`**: Una solución de caché _in-memory_ personalizada que retiene la información de los departamentos consultados. Esto mitiga las peticiones duplicadas al navegar entre la vista del mapa y los detalles de las regiones.

### 3. Localización Dinámica (i18n)

La interfaz soporta localización completa para **Español e Inglés** utilizando archivos `.arb` gestionados por `flutter_localizations`, garantizando una arquitectura global libre de strings estáticos en el código de las vistas.

---

## 📡 Integración y Consumo de APIs

La robustez informativa se logra consumiendo de forma asíncrona múltiples capas de datos estructurados:

- **Capa Geográfica:** Mapeo de superficie, población y capitales por cada departamento.
- **Capa Cultural:** Consumo de endpoints dinámicos para listar tradiciones y patrimonio inmaterial regional en estructuras `FutureProvider`.
- **Gastronomía:** Despliegue optimizado de platos típicos filtrados por regiones geográficas.

---

## 🧩 Solución de Retos de UI/UX

- **Rendimiento en Listas Complejas:** Para evitar caídas de frames (_jank_) al renderizar imágenes y datos culturales simultáneamente, se estructuraron scrolls horizontales optimizados usando `ListView.builder` embebidos dentro de un viewport principal inercial.
- **Game Loop Fluido:** Separación estricta entre la UI reactiva y el motor de cálculo de colisiones, logrando tasas de refresco constantes incluso en dispositivos de gama media-baja.
