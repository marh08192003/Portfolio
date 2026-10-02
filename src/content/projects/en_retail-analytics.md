---
title: "Retail Analytics Pipeline"
lang: "en"
isFeatured: true
businessDescription: "End-to-end ELT transactional analytics pipeline for e-commerce. Models large-scale data in Google BigQuery using a Star Schema with dbt, and consumes analytical marts via Python to evaluate cohort retention rates and Customer Lifetime Value (LTV)."
tags: ["Google BigQuery", "dbt", "Python", "SQL", "Pandas", "Star Schema"]
repositories:
  - label: "Main Repository"
    url: "https://github.com/marh08192003/retail-analytics-pipeline-bigquery-dbt-python"
---

## 📌 Project Overview

The **Retail Analytics Pipeline** solves the challenge of turning unstructured transactional e-commerce data into a scalable, queryable enterprise analytics ecosystem.

> **The Approach:** Implement a modern **ELT (Extract, Load, Transform)** architecture that decouples high-volume Data Warehouse ingestion from dimensional transformation logic, enabling advanced customer behavior metrics like churn curves and Customer Lifetime Value (*LTV*).

---

## 🛠️ Architecture & Technical Decisions

The pipeline enforces strict layer separation inside the Data Warehouse, ensuring data lineage, quality, and query performance.

### 1. Dimensional Modeling (Star Schema) with dbt

A dimensional model was built in **Google BigQuery** managed by **dbt (data build tool)** across three transformation layers:

- **Staging (`stg_`):** Initial data cleaning, type casting, deduplication, and removal of invalid transactions or returns (`Quantity <= 0`).
- **Intermediate (`int_`):** Intermediate aggregations and consolidation of customer identities and dates.
- **Marts (Star Schema):** Construction of the core fact table `fact_ventas` linked to optimized dimensions (`dim_cliente`, `dim_producto`, `dim_fecha`).

### 2. Data Quality & Integrity Tests

To guarantee data reliability, automated dbt tests were configured (`schema_star_schema.yml`):

- Primary key uniqueness and non-null validation (`unique`, `not_null`).
- Referential integrity verification between fact and dimension tables (`relationships`).

### 3. Cohort Analysis & LTV Modeling in Python

Clean marts from BigQuery are ingested by a **Python (Pandas / Seaborn)** analytics script that computes:

- **Retention Matrix:** Grouping users by acquisition month (`CohortMonth`) and activity index (`CohortIndex`).
- **Descriptive LTV:** Calculation of Average Order Value ($AOV$), annualized purchase frequency, and average lifespan ($AvgLifespan$) per cohort.

---

## 📡 Pipeline & Data Flow

1. **Raw Layer:** Ingestion of raw transactional data (+500k records) into Google BigQuery.
2. **dbt Transformation Engine:** Modular SQL transformations, materialized table/view compilation, and automated lineage documentation.
3. **Data Analytics Layer:** Python processing for retention heatmaps and churn decay curves.

---

## 🧩 Key Insights & Engineering Challenges

- **Data Anomaly Handling:** Rigorous filtering of anonymous records (`CustomerID` nulls) and negative prices that skewed revenue figures.
- **Early Churn Detection:** Cohort analysis revealed a retention drop of **75% to 82%** in Month 1 following initial purchase, signaling a key opportunity for early re-engagement campaigns.
- **High-Value Cohort Identification:** The `2010-12` acquisition cohort showed the highest long-term retention, achieving an average LTV of **$5,087.02 USD** per customer.