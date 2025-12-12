# T9 — Web Upload Flow

## Goal
Provide minimal UI to submit CV and view status.

## Scope
- Upload form:
  - email
  - offer URL
  - file input
- Submit to POST /submissions
- Redirect to /s/:id
- Status page fetches GET /submissions/:id

## Out of Scope
- Styling
- Auth
- Error analytics

## Acceptance Criteria
- End-to-end local flow works
- Loading and error states handled

## Definition of Done
- No console errors
- Clean component structure

## Notes for Codex
- Keep UI dumb
- All logic should live in API
