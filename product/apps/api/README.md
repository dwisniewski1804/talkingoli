# @product/api

NestJS API for the TalkingOli product. Exposes the `/health` endpoint and boots a BullMQ worker that pushes a `PING_JOB` into the default queue.

## Scripts
- `npm run start:dev` — run locally with ts-node-dev.
- `npm run build` — compile TypeScript to `dist/`.
- `npm run start` — run the compiled build.

## Environment
Read values from `.env` at the repo root (in Docker) or your shell env. Key vars:
- `API_PORT` (default `3000`)
- `MONGO_URI`
- `REDIS_HOST` / `REDIS_PORT`
- `WEB_ORIGIN` (CORS allow list, e.g. `http://localhost:5173`)

## Development
```
cd product/apps/api
npm install
npm run start:dev
```
The health endpoint will be available at `http://localhost:3000/health`.
