---
title: "Servicios Generales UCEVA"
lang: "es"
businessDescription: "Sistema ecosistémico móvil y web para la optimización de reportes de incidencias físicas e infraestructurales en la UCEVA. Centraliza el flujo de comunicación interna reduciendo los tiempos de respuesta operativa mediante arquitecturas backend robustas."
tags: ["Spring Boot", "JWT", "Java", "MySQL", "REST API", "Flutter"]
repositories:
  - label: "Backend API (Spring Boot)"
    url: "https://github.com/marh08192003/serviciosGenerales"
  - label: "App Mobile (Flutter)"
    url: "https://github.com/marh08192003/servicios_generales_dart"
---

## 📌 Visión General del Proyecto

**Servicios Generales UCEVA** nació con el propósito de resolver una problemática operativa e infraestructural crítica en la institución: la falta de un canal centralizado y ágil para el reporte, seguimiento y solución de daños físico-estructurales en el campus.

> **El Enfoque:** Mediante el desarrollo de una API REST robusta acoplada a una interfaz móvil reactiva, el sistema automatiza el ciclo de vida de una incidencia (registro, validación, asignación de mantenimiento y cierre operativo), reduciendo drásticamente la fricción administrativa y los tiempos de respuesta institucionales.

---

## 🛠️ Arquitectura y Decisiones Técnicas

El núcleo del backend se construyó utilizando **Spring Boot 3** y **Java 17**, estructurado bajo una arquitectura limpia y desacoplada por capas funcionales (`Config`, `Controller`, `Service`, `Persistence`).

### 1. Modelo de Seguridad y Autenticación Asimétrica (JWT)

Para blindar los datos institucionales y mitigar vectores de ataque, se prescindió de esquemas de autenticación tradicionales en favor de **JSON Web Tokens (JWT)** basados en un par de claves criptográficas **RSA**.

- **Firma Asimétrica:** Las solicitudes se firman mediante una clave privada y se verifican dinámicamente con una clave pública (`private.key.pem` / `public.key.pem`), asegurando la integridad absoluta del token.
- **Control de Acceso Basado en Roles (RBAC):** La seguridad se inyecta a nivel de controlador a través del servicio de utilidades JWT, modulando estrictamente el alcance operativo del sistema.

### 2. Capa de Datos y Persistencia Relacional

La consistencia de los datos se delegó en un motor **MySQL** administrado a través de **Spring Data JPA e Hibernate**:

- Se implementaron estrategias de **Soft Delete** (eliminación lógica) en entidades críticas como usuarios e incidencias, preservando la integridad referencial y permitiendo históricos de auditoría sin corromper la base de datos física.
- Las cargas operativas se optimizaron mapeando relaciones de forma limpia a nivel de persistencia para evitar consultas redundantes.

### 3. Validación y Control de Excepciones Centralizado

La fiabilidad de los payloads entrantes se garantiza mediante **Jakarta Validation** en los Data Transfer Objects (DTOs), interceptando datos malformados antes de comprometer la lógica de negocio. Además, se estructuró un manejador global de excepciones encargado de unificar los códigos de respuesta HTTP (ej. `UnauthorizedException`).

---

## 🔐 Matriz de Control de Acceso (RBAC)

El ecosistema clasifica a los actores de la plataforma en tres niveles de autorización bien delimitados en las cabeceras de red (`Authorization: Bearer <token>`):

- **`usuario`:** Permisos mínimos. Capacidad única de reportar incidencias infraestructurales y listar su historial personal.
- **`servicios_generales`:** Rol operativo. Gestión técnica completa de incidencias, flujos de mantenimientos y control de tareas asignadas.
- **`administrador`:** Control total. Acceso CRUD global sobre el catálogo de usuarios, áreas físicas del campus, asignaciones y logs del sistema.

---

## 📡 Estructura del Ecosistema de Endpoints

La API expone un tejido de servicios RESTful organizados semánticamente por dominios de negocio específicos bajo la ruta base `/api/v1`:

- **Módulo de Autenticación (`/auth`):** Pasarelas públicas dedicadas al registro de nuevos usuarios y flujos de login para el intercambio de tokens firmados.
- **Módulo de Incidencias (`/incidents`):** Endpoints dinámicos para la creación asíncrona de reportes, consultas filtradas para el usuario autenticado (`/my-incidents`) y accesos de administración institucional.
- **Módulo de Mantenimientos y Asignaciones (`/maintenances` & `/maintenance-assignments`):** Orquestación de flujos de trabajo que permiten enlazar un incidente específico con un técnico asignado en tiempo real.
- **Módulo de Áreas Físicas (`/physical-areas`):** Catálogo indexado de la infraestructura del campus para geolocalizar los reportes dentro de la institución.

---

## 🧩 Solución de Retos de UI/UX y Conectividad

- **Flexibilidad en Desarrollo (CORS):** Para facilitar un entorno de desarrollo multiplataforma ágil con el frontend móvil, se diseñó una política flexible en `CorsConfig.java` mediante `allowedOriginPatterns("*")`, permitiendo pruebas cruzadas en emuladores y dispositivos locales antes de restringir los orígenes en la etapa de producción.
- **Robustez ante Conexiones Inestables:** El consumo de los endpoints desde la app móvil se optimizó estructurando respuestas JSON ligeras, asegurando que el personal de mantenimiento pueda actualizar los estados operacionales incluso en zonas del campus con baja cobertura de red.
