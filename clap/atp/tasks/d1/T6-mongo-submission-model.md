# T6 — MongoDB Submission Model

## Goal
Define Submission persistence layer.

## Scope
- submissions collection
- Fields:
  - email
  - offerUrl
  - cvFileKey
  - status (default: created)
  - createdAt
  - expiresAt (TTL index)
  - locale, currency, country (optional)
- Repository methods:
  - createSubmission
  - getSubmissionById

## Out of Scope
- Match results
- Stage runs
- Payments

## Acceptance Criteria
- TTL index exists
- Submission can be created and fetched
- Schema validation in place

## Definition of Done
- No business logic in controllers
- Repository tested manually

## Notes for Codex
- Prefer simplicity
- Avoid over-normalization
