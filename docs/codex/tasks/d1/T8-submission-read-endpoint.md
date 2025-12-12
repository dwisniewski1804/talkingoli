# T8 — Submission Read Endpoint

## Goal
Allow frontend to fetch submission status and CV link.

## Scope
- GET /submissions/:id
- Returns:
  - status
  - createdAt
  - offerUrl
  - signed CV download URL (short TTL)

## Out of Scope
- Auth
- Editing submissions
- Deletion

## Acceptance Criteria
- Valid ID returns data
- Invalid ID returns 404
- Signed URL works

## Definition of Done
- Minimal response payload
- No sensitive fields exposed

## Notes for Codex
- Prepare for future auth integration
