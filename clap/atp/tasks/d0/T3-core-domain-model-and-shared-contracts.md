# T3 — Core Domain Model & Shared Contracts

## Goal

Define the core domain vocabulary and shared data contracts for the product so that backend and frontend speak the same language.

This creates a stable foundation for future business logic, API design, and UI flows.

---

## Scope

### Domain Modeling

Identify and model the initial core entities, for example:

- `Candidate`
- `JobOffer`
- `InterviewSession`
- `InterviewTurn` (or `Question` / `Answer`)
- `EvaluationReport` (or `Report`)

For each, define:

- minimal required fields
- types and constraints (e.g. enums where appropriate)
- relationships between entities (IDs, references, etc.)

### Shared Contracts Package

- In `packages/shared`:
  - Create TypeScript types/interfaces/classes representing the domain entities.
  - If using runtime validation:
    - add schemas with e.g. `zod` or `class-validator` to validate incoming/outgoing payloads.
  - Export these models so they can be imported from both `apps/api` and `apps/web`:
    - e.g. `@shared/domain`, `@shared/contracts`.

### API Contracts

- Define the first version of the HTTP API for the product:
  - adopt a versioning scheme: e.g. `/api/v1/...`.
  - focus on the endpoints that will be needed soon, such as:
    - `POST /api/v1/interview-sessions` – initiate a session (even if later mocked).
    - `GET /api/v1/interview-sessions/:id` – get session data.
    - `GET /api/v1/reports/:id` – get an evaluation report.
- Create DTOs for these endpoints using the shared contracts.
- Wire the DTOs into NestJS controllers and services (even if implementations are stubbed).

### Documentation / OpenAPI

- Enable Swagger/OpenAPI in NestJS (e.g. via `SwaggerModule`) at `/api/docs` or similar.
- Document at least:
  - the key endpoints above.
  - schemas for the core entities (request/response models).

---

## Out of Scope

- Fully implemented persistence or repositories (Mongo schemas can be defined but full repos are optional).
- Complex validation or business rules.
- AI evaluation logic.
- Any user authentication / authorization logic.

---

## Acceptance Criteria

- `packages/shared` exports domain types/contracts that compile and are used by:
  - `apps/api`
  - `apps/web`.
- NestJS:
  - controllers exist for core endpoints (even if returning static data or TODO placeholders).
  - DTOs are defined and wired into validation (e.g. via pipes if using `class-validator`).
- `/api/docs` (or the chosen docs route) is accessible and shows:
  - core entities.
  - at least 2–3 main endpoints with request/response schemas.
- There is no duplication of type definitions between backend and frontend; both import from `packages/shared`.

---

## Definition of Done

- [ ] Core domain entities are defined and documented.
- [ ] Shared contracts package exists and is consumed by both apps.
- [ ] API endpoints and DTOs for core flows are defined in NestJS.
- [ ] Swagger/OpenAPI is available and reflects the current contracts.
- [ ] README (or a separate `DOMAIN.md`) explains the core model in plain language.

---

## Notes

- Focus on clarity and stability, not completeness.
- It is acceptable to start with a minimal subset of fields and grow later, as long as breaking changes are controlled.
- This task sets the language of the system; future AI prompts and UX will rely on these concepts.
