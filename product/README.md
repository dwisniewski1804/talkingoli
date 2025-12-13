# TalkingOli Product Skeleton

Baseline monorepo that powers the TalkingOli product. It includes a NestJS API, a Vite + React web app, and local infrastructure via Docker.

## Prerequisites
- Node.js 20+
- npm 9+
- Docker & Docker Compose

## Project Structure
```
product/
├─ apps/
│  ├─ api        # NestJS API + BullMQ worker
│  └─ web        # React + Vite frontend
├─ packages/
│  └─ shared     # Placeholder shared contracts
├─ infra/
│  └─ docker     # Dockerfiles used by docker-compose.yml
├─ docker-compose.yml
├─ .env.example
└─ README.md
```

## Environment Variables
1. Copy `.env.example` to `.env` and modify values if needed.
2. Key variables:
   - `API_PORT`, `WEB_PORT`
   - `MONGO_URI`
   - `REDIS_HOST` / `REDIS_PORT`
   - `MINIO_ROOT_USER` / `MINIO_ROOT_PASSWORD`
   - `MAILHOG_*`
   - `VITE_API_BASE_URL` (built into the web app; defaults to `http://localhost:3000` even inside Docker)
   - `WEB_ORIGIN` (CORS allow-list for the API, default `http://localhost:5173`)
   - Stubbed integration keys (OpenAI, Stripe, Email, STT/TTS)

## Install Dependencies (optional for host development)
```
cd apps/api && npm install
cd ../web && npm install
cd ../../packages/shared && npm install
```

## Run the Stack
```
cd product
cp .env.example .env   # first time
docker compose up --build
```
This starts:
- `talkingoli-api` — NestJS API on `http://localhost:3000` (health response identifies as `talkingoli-api`)
- `talkingoli-web` — React app on `http://localhost:5173`
- `talkingoli-mongo` — MongoDB on `localhost:27017`
- `talkingoli-redis` — Redis on `localhost:6379`
- `talkingoli-minio` — MinIO API `localhost:9000`, console `localhost:9001`
- `talkingoli-mailhog` — Mailhog UI `http://localhost:8025`

## Smoke Test
1. Visit `http://localhost:5173` to load the frontend. It pings the backend every 5 seconds and displays the health status.
2. Call `curl http://localhost:3000/health` to verify the API responds with `{ "status": "ok", "service": "talkingoli-api" }`.
3. Watch the Docker logs for `talkingoli-api` to see BullMQ processing the `PING_JOB` test job.

## Reset the Environment
```
docker compose down -v
rm -rf apps/**/node_modules packages/**/node_modules
```
This tears down containers, removes Mongo & MinIO volumes, and deletes installed node modules.

## Notes
- All runtime code lives under `/product`; the `/clap` directory remains a conceptual reference only.
- MinIO, Mailhog, Redis, and MongoDB are strictly local development dependencies.
- Use the shared package as the home for future cross-cutting types or utilities.
