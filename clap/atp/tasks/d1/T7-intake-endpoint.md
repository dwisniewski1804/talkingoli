# T7 — Intake Endpoint (POST /submissions)

## Goal
Allow users to submit CV + offer URL + email.

## Scope
- POST /submissions
- multipart/form-data
- Fields:
  - email
  - offerUrl
  - cv (file)
- Validation:
  - email format
  - allowed file types
  - max file size
- Flow:
  1. validate
  2. upload file to storage
  3. save submission
  4. return submissionId

## Out of Scope
- Auth
- Background jobs
- AI analysis

## Acceptance Criteria
- Works via curl/Postman
- Rejects invalid inputs
- Does not log file contents

## Definition of Done
- Clear error responses
- Endpoint documented in comments

## Notes for Codex
- Security > convenience
- Fail fast on invalid input
