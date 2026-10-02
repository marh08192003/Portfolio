---
title: "Retail Analytics Pipeline"
lang: "es"
isFeatured: true
businessDescription: "Pipeline ELT end-to-end de analítica transaccional para e-commerce. Modela datos masivos en Google BigQuery utilizando un Esquema en Estrella con dbt, y consume los marts analíticos desde Python para evaluar la retención de usuarios por cohortes y el Customer Lifetime Value (LTV)."
tags: ["Google BigQuery", "dbt", "Python", "SQL", "Pandas", "Star Schema"]
repositories:
  - label: "Repositorio Principal"
    url: "https://github.com/marh08192003/retail-analytics-pipeline-bigquery-dbt-python"
---

## 📌 Visión General del Proyecto

**Retail Analytics Pipeline** resuelve el desafío de transformar datos transaccionales sin estructurar en un ecosistema de analítica empresarial escalable y consultable. 

> **El Enfoque:** Implementar una arquitectura **ELT (Extract, Load, Transform)** moderna que desacopla la ingesta masiva en el Data Warehouse de la lógica de transformación dimensional, permitiendo calcular métricas avanzadas de comportamiento de clientes como curvas de deserción (*churn*) y valor acumulado del cliente (*LTV*).

---

## 🛠️ Arquitectura y Decisiones Técnicas

El pipeline sigue una separación de capas estricta dentro del Data Warehouse, asegurando trazabilidad, calidad y rendimiento en las consultas.

### 1. Modelado Dimensional (Star Schema) con dbt

Se estructuró un esquema dimensional en **Google BigQuery** administrado por **dbt (data build tool)**, dividiendo las transformaciones en tres capas:

- **Staging (`stg_`):** Limpieza inicial, casteos de datos, deduplicación y filtrado de transacciones inválidas o devoluciones (`Quantity <= 0`).
- **Intermediate (`int_`):** Agregaciones intermedias y unificación de identidades de clientes y fechas.
- **Marts (Star Schema):** Construcción de la tabla de hechos central `fact_ventas` conectada a dimensiones optimizadas (`dim_cliente`, `dim_producto`, `dim_fecha`).

### 2. Pruebas de Calidad e Integridad de Datos

Para garantizar la confiabilidad del modelo, se configuraron tests automatizados en dbt (`schema_star_schema.yml`):

- Validación de claves primarias únicas y no nulas (`unique`, `not_null`).
- Verificación de integridad referencial entre la tabla de hechos y las dimensiones (`relationships`).

### 3. Análisis de Cohortes y LTV en Python

Los marts limpios de BigQuery son consumidos por un motor de analítica en **Python (Pandas / Seaborn)** que ejecuta:

- **Matriz de Retención:** Agrupación de usuarios por mes de adquisición (`CohortMonth`) e índice de actividad (`CohortIndex`).
- **LTV Descriptivo:** Cálculo del Ticket Promedio ($AOV$), frecuencia mensualizada de compra y tiempo de vida observado ($AvgLifespan$) por cohorte.

---

## 📡 Pipeline de Datos y Flujo de Procesamiento

1. **Raw Layer:** Ingesta del dataset transaccional crudo (+500k registros) en BigQuery.
2. **dbt Transformation Engine:** Transformación SQL modular, compilación de vistas/tablas materializadas y documentación automatizada.
3. **Data Analytics Layer:** Modelado en Python para la generación de heatmaps de retención y curvas de decaimiento.

---

## 🧩 Solución de Retos y Hallazgos de Negocio

- **Manejo de Anomalías:** Filtrado riguroso de registros anónimos (`CustomerID` nulo) y precios unitarios negativos que distorsionaban el ingreso real.
- **Detección de Churn Temprano:** El análisis reveló una caída de retención entre el **75% y 82%** en el primer mes posterior a la compra inicial, identificando una ventana crítica para activar estrategias de *remarketing*.
- **Identificación de Cohortes de Alto Valor:** La cohorte de adquisición `2010-12` demostró la mayor retención acumulada con un LTV promedio de **$5,087.02 USD** por cliente.