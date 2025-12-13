# T2 — Docker Compose (Local Dev Infrastructure)

## Goal
Provide a reproducible local environment for backend development.

## Scope
Create docker-compose.local.yml with:
- MongoDB
- Redis
- MinIO (S3-compatible)
- Mailhog

Add docs explaining how to run and access services.

## Services & Ports
- MongoDB: 27017
- Redis: 6379
- MinIO API + Console
- Mailhog SMTP + UI

## Out of Scope
- API or frontend containers
- Production setup
- TLS

## Acceptance Criteria
- `docker compose -f docker-compose.local.yml up -d` works
- All services are reachable from host
- Volumes persist data
- MinIO console usable to create buckets

## Definition of Done
- docker-compose.local.yml committed
- docs/local-dev.md explains:
  - startup
  - ports
  - credentials (dev-only)

## Notes for Codex
- Use latest stable images
- No hardcoded secrets (use defaults only)
