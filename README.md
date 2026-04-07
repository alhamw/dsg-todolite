# dsg-todolite

## Overview

Starting time: 2026-04-07 11:11
Finished time: 2026-04-07 14:16

## How to run this project

### Clone and Install Dependencies

```bash
git clone https://github.com/alhamw/dsg-todolite.git
cd dsg-todolite
npm install
```

### Setup Environment

Create a .env file in the root directory and add the following line:

```bash
DATABASE_URL=postgresql://postgres@localhost:5432/dsg_todolite
```

### Setup Database

Create local database named `dsg_todolite` and run the following command:

```bash
CREATE DATABASE dsg_todolite;
```

### Run Migrations

To make sure the database schema is up to date and populated with initial data, run the following commands:

```bash
npm run db:migrate
npm run db:seed
```
*(Note: Use `npm run db:migrate` instead of `npm run db:push` to avoid relation conflicts).*

### Run Development Server

```bash
npm run dev
```

### Run Tests

```bash
npm run test
```

## Technical Decisions

1. Fastify is used as the web framework because it is a fast and low-overhead framework that is well-suited for building APIs.
2. Drizzle is used because it is a lightweight ORM, TypeScript safety, raw SQL syntax flexibility, and zero cold start overhead.
3. Zod is used for defining schemas for request validation (body, params) with type inference. Integrated directly with Fastify to automatically validate incoming requests before they hit the controller.
4. Vitest is because its fast execution speed and native out-of-the-box TypeScript support, making it easier to configure and run compared to Jest.
5. Used Module-Based Structure Architecture to improves maintainability and scalability as the app grows.

## Assumptions

1. Developers run a standard local instance of PostgreSQL on port `5432` with no password for the `postgres` user.
2. No Authentication & Authorization since it is used for recruitment purposes.
3. No need for complex data relation since it is not mentioned on the document.



