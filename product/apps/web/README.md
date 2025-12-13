# @product/web

React + Vite frontend for the TalkingOli product. Renders the baseline status page that polls the API `/health` endpoint.

## Scripts
- `npm run dev` — local development server (default `http://localhost:5173`).
- `npm run build` — type-check and build production assets.
- `npm run preview` — preview the built assets.

## Environment
Vite consumes env vars prefixed with `VITE_`. The key one is `VITE_API_BASE_URL`, which should point to the API (defaults to `http://localhost:3000`). Set it in `.env` or pass via Docker build args.

## Development
```
cd product/apps/web
npm install
npm run dev
```
Open `http://localhost:5173` in your browser; the page pings the API every 5 seconds and shows the current status.
