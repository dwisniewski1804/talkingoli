# T1 — Product Skeleton & Local Docker Environment

## Goal

Create a runnable **product-level application skeleton** with a defined technology stack and a fully working **local Docker environment**.

This task establishes the execution boundary of the product and serves as the foundation for all further development.

> This task applies **only to `/product`**.  
> CLAP remains a conceptual framework and must not be used as a runtime dependency.

---

## Scope

### Project Structure
- Initialize the project structure inside `/product`
- Create logical separation between:
  - `apps/web` — frontend (React + Vite)
  - `apps/api` — backend (Node.js + NestJS)
  - `packages/shared` — shared types/contracts (placeholder)
  - `infra/docker` — infrastructure and Docker-related files

### Technology Stack
- Frontend: React + Vite
- Backend: Node.js + NestJS
- Database (local): MongoDB
- Queue: Redis + BullMQ
- Storage (local S3-compatible): MinIO
- Email (local): Mailhog or Mailpit
- Infrastructure: Docker + Docker Compose

### Docker Environment
- Provide a single `docker-compose.yml` that starts:
  - talkingoli-api
  - product-web
  - mongo
  - redis
  - minio
  - mailhog / mailpit
- Add `.env.example` containing all required environment variables
- Enable persistent volumes for MongoDB and MinIO
- Use clear and consistent service naming (prefix: `product-`)

### Smoke Test Flow
- Backend:
  - Expose `GET /health`
  - Response:
    ```json
    { "status": "ok", "service": "talkingoli-api" }
    ```
- Frontend:
  - Load successfully in the browser
  - Fetch the `/health` endpoint
  - Display backend status in the UI

### Prepared (Stubbed) Integrations
Configuration only (no real external calls):
- OpenAI (LLM)
- Stripe
- S3 / R2 (via MinIO)
- Email provider
- STT / TTS providers

### Queue Setup
- Configure Redis
- Create one BullMQ queue: `default`
- Add a worker that processes a test job (`PING_JOB`) and logs execution

### Documentation
- Create `product/README.md` containing:
  - prerequisites
  - how to run the product locally
  - list of services and ports
  - how to verify the system is running
  - how to reset the environment

---

## Out of Scope

- Production deployment or cloud configuration
- CI/CD pipelines
- Authentication and authorization
- Business logic
- AI prompts, orchestration, or model calls
- CLAP runtime integration
- External services (Mongo Atlas, Stripe live, R2, etc.)

---

## Acceptance Criteria

- `docker compose up` starts the entire product stack without errors
- Frontend is accessible in a browser
- Frontend successfully communicates with the backend
- `/health` endpoint returns the expected response
- MongoDB, Redis, MinIO, and Mail UI are reachable locally
- `.env.example` is complete and documented
- No runtime code exists in `/clap`

---

## Definition of Done

- [ ] Product folder structure is created and committed
- [ ] Docker Compose setup is functional
- [ ] Backend health endpoint implemented
- [ ] Frontend displays backend health status
- [ ] Redis queue and worker execute a test job
- [ ] README and `.env.example` are present and accurate
- [ ] Entire system runs via a single command

---

## Notes

- This task defines the **baseline execution environment** for the product.
- Decisions made here (structure, naming, ports) are considered **foundational**.
- Keep implementation minimal — correctness and repeatability take priority over completeness.
- CLAP remains strictly **out of runtime scope**.
