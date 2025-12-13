# T5 — Storage Module (MinIO / S3)

## Goal
Provide a reusable storage abstraction for file uploads.

## Scope
- Create storage module in API:
  - putObject(buffer/stream, key, contentType)
  - getSignedUrl(key, expiresIn)
- Configuration via env vars
- Default local target: MinIO

## Out of Scope
- Cleanup jobs
- Encryption
- CDN

## Acceptance Criteria
- File can be uploaded to MinIO
- Signed URL allows download
- Errors handled gracefully

## Definition of Done
- Storage code isolated in its module
- No hardcoded bucket names
- Simple smoke test documented

## Notes for Codex
- Use AWS S3-compatible SDK
- Do not tie logic to MinIO specifics
