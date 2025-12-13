# T3 — API Skeleton + Healthcheck

## Goal
Create a minimal backend server with healthcheck endpoint.

## Scope
- Setup API app (NestJS or Fastify)
- Environment config via .env.example
- GET /health → { ok: true }
- Basic request logging with requestId
- Folder structure:
  - modules/intake
  - modules/storage
  - modules/email (stub)
  - modules/jobs (stub)

## Out of Scope
- Business logic
- Database models
- Auth
- AI integrations

## Acceptance Criteria
- API starts locally
- /health endpoint responds correctly
- No runtime errors on boot

## Definition of Done
- Clear app entry point
- Readable folder structure
- Logs do not include PII

## Notes for Codex
- Prefer clarity over abstraction
- Keep server minimal
