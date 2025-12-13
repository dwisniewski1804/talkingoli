# T6 — Local Demo Flow with Mocked Data (No AI)

## Goal

Create a fully runnable local demo flow that simulates the main product experience using mocked data only, without calling any AI, external APIs, or real payment providers.

This allows early end-to-end demos and UX validation.

---

## Scope

### Seed & Test Data

- Add a simple seed script for MongoDB that creates:
  - one or more example `Candidate` documents.
  - one or more example `JobOffer` documents.
  - one `InterviewSession` with:
    - a small list of “questions”.
    - a few “answers” / “turns”.
  - one sample `EvaluationReport` with structured sections (e.g. strengths, weaknesses, score).
- Provide an npm script to run the seed:
  - e.g. `npm run seed` in `apps/api` or at root.
  - document that it assumes the local Docker stack is running.

### Backend Demo Endpoints

Implement minimal backend endpoints to support the fake demo flow:

- `POST /api/v1/demo/sessions`:
  - creates (or returns a prepared) demo `InterviewSession`.
  - returns a session ID.
- `GET /api/v1/demo/sessions/:id`:
  - returns mocked Q&A turns for that session.
- `GET /api/v1/demo/reports/:id`:
  - returns the mocked report object.

These endpoints can:

- return seeded data from Mongo, or
- return static in-memory JSON, as long as the contract matches the shared model.

### Frontend Demo Flow

- `/upload`:
  - allow the user to “upload” CV + job description:
    - for now: accept text or fake file and store it locally in state.
  - on submit, call `POST /api/v1/demo/sessions`.
  - redirect the user to `/interview` with the session ID.
- `/interview`:
  - fetch `GET /api/v1/demo/sessions/:id`.
  - display mocked “questions” and “answers” in a simple conversation view.
  - include a “Finish interview” button that sends the user to `/report`.
- `/report`:
  - fetch `GET /api/v1/demo/reports/:id`.
  - display a structured view of the report (sections, scores, recommendations).

### UX & Documentation

- Make it clear in the UI that this is a demo/mock flow:
  - no real AI.
  - fixed/sample data.
- Update `product/README.md` to include:
  - how to run the demo:
    - `docker compose up`
    - run seed script
    - which URL to open.
  - what to expect (screens, sample data).

---

## Out of Scope

- Real AI calls to OpenAI, STT, TTS, or any ML model.
- Real interview recording (no audio or streaming).
- Persisting user-specific sessions by authenticated identity.
- Payments or Stripe integration.

---

## Acceptance Criteria

- After running the Docker stack and seed script, a user can:
  1. Open the product web app.
  2. “Upload” CV + job description on `/upload`.
  3. Trigger a demo interview session.
  4. View a mock interview conversation on `/interview`.
  5. View a mock report on `/report`.
- Data returned by backend endpoints matches the shared contracts from `packages/shared`.
- No external network calls (AI, Stripe, etc.) are made during the demo.
- README clearly explains how to run the demo and what is mocked.

---

## Definition of Done

- [ ] Seed data script exists and runs successfully.
- [ ] Demo endpoints exist and return mocked data.
- [ ] Frontend implements a full fake flow: upload → interview → report.
- [ ] No external services are required to run the demo.
- [ ] Demo flow is documented for other developers and stakeholders.

---

## Notes

- This is a product-facing milestone: stakeholders can see the “shape” of the product without backend depth or AI.
- Keep the contracts realistic to avoid refactoring the flow when real logic is implemented.
