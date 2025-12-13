# T5 — Logging, Error Handling & Basic Observability

## Goal

Introduce consistent logging and error handling in the backend, plus minimal observability hooks so developers can understand what the system is doing without attaching a debugger.

---

## Scope

### Backend Logging (NestJS)

- Integrate a structured logger (Nest built-in logger, Pino, or Winston):
  - define log levels: `debug`, `info`, `warn`, `error`.
  - ensure logs are JSON-friendly for future log aggregation.
- Implement middleware/interceptor that:
  - attaches a `requestId` to each incoming request (generated or taken from a header).
  - logs method, path, status code, duration, and requestId.
- Ensure sensitive data (CV text, personal data, secrets) is never logged.

### Error Handling

- Add a global exception filter in NestJS:
  - map known errors to clear HTTP status codes and error bodies.
  - ensure unexpected errors still return a safe 5xx response with a generic message.
- Standardize error response format, for example:
  ```json
  {
    "error": "Bad Request",
    "message": "Invalid input data",
    "code": "VALIDATION_ERROR",
    "requestId": "..."
  }
