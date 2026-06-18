---
title: "Servicios Generales UCEVA"
lang: "en"
businessDescription: "Mobile and web ecosystem designed to optimize infrastructural and physical incident reporting at UCEVA. It centralizes internal communication workflows, reducing operational response times through robust backend architectures."
tags: ["Spring Boot", "JWT", "Java", "MySQL", "REST API", "Flutter"]
repositories:
  - label: "Backend API (Spring Boot)"
    url: "https://github.com/marh08192003/serviciosGenerales"
  - label: "Mobile App (Flutter)"
    url: "https://github.com/marh08192003/servicios_generales_dart"
---

## 📌 Project Overview

**Servicios Generales UCEVA** was developed to address a critical operational and infrastructural issue within the institution: the lack of a centralized, agile channel to report, track, and resolve physical and structural damages across the campus.

> **The Approach:** By developing a robust REST API coupled with a reactive mobile interface, the system automates the complete lifecycle of an incident (registration, validation, maintenance assignment, and operational closure), drastically minimizing administrative friction and institutional response times.

---

## 🛠️ Architecture and Technical Decisions

The core backend was engineered using **Spring Boot 3** and **Java 17**, structured under a clean, decoupled architecture segmented by functional layers (`Config`, `Controller`, `Service`, `Persistence`).

### 1. Security Model and Asymmetric Authentication (JWT)

To shield institutional data and mitigate potential attack vectors, traditional authentication schemes were bypassed in favor of **JSON Web Tokens (JWT)** backed by an **RSA** cryptographic key pair.

- **Asymmetric Signing:** Incoming requests are signed with a private key and dynamically verified via a public key (`private.key.pem` / `public.key.pem`), guaranteeing absolute token integrity.
- **Role-Based Access Control (RBAC):** Security layers are injected at the controller level through a custom JWT utility service, strictly modulating the operational scope across the platform.

### 2. Data Layer and Relational Persistence

Data consistency was delegated to a **MySQL** engine managed through **Spring Data JPA and Hibernate**:

- **Soft Delete** (logical deletion) strategies were implemented for critical entities like users and incidents, preserving referential integrity and enabling historical audit trails without altering physical database records.
- Operational loads were optimized by cleanly mapping relationships at the persistence layer to avoid redundant database roundtrips.

### 3. Centralized Validation and Exception Handling

The reliability of incoming payloads is enforced using **Jakarta Validation** within Data Transfer Objects (DTOs), intercepting malformed data before it compromises business logic. Furthermore, a global exception handler was structured to unify HTTP status response payloads (e.g., standardizing an `UnauthorizedException`).

---

## 🔐 Role-Based Access Control Matrix (RBAC)

The ecosystem classifies platform actors into three well-defined authorization layers parsed via network headers (`Authorization: Bearer <token>`):

- **`usuario` (User):** Minimum privileges. Authorized exclusively to report new infrastructural incidents and list their personal submission history.
- **`servicios_generales` (General Services):** Operational role. Complete technical management of incidents, maintenance workflows, and assigned task status tracking.
- **`administrador` (Admin):** Full control. Global CRUD access over user registries, physical campus areas, technician assignments, and system logs.

---

## 📡 Endpoint Ecosystem Structure

The API exposes a fabric of RESTful services semantically organized by business domains under the `/api/v1` base route:

- **Authentication Module (`/auth`):** Public gateways dedicated to registering new users and handling login flows to issue asymmetric signed tokens.
- **Incidents Module (`/incidents`):** Dynamic endpoints for asynchronous report creation, filtered queries for the authenticated user (`/my-incidents`), and institutional administrative access.
- **Maintenance and Assignments Module (`/maintenances` & `/maintenance-assignments`):** Workflow orchestration linking specific active incident reports with targeted field technicians in real time.
- **Physical Areas Module (`/physical-areas`):** An indexed campus infrastructure catalog used to geolocate issues accurately within the institution.

---

## 🧩 Resolving UI/UX and Connectivity Challenges

- **Development Flexibility (CORS):** To streamline cross-platform development with the mobile frontend, a flexible policy was configured within `CorsConfig.java` using `allowedOriginPatterns("*")`, enabling smooth testing across local emulators and physical devices before narrowing origins down for production environments.
- **Robustness Over Unstable Network Conditions:** Mobile endpoint payloads were optimized to deliver lightweight JSON responses, ensuring field maintenance staff can successfully sync and update operational statuses even from campus areas with low signal coverage.
