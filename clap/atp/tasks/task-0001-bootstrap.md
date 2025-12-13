# Task 0001 — Repo Bootstrap (Monorepo Skeleton)

## Goal
Create a clean monorepo skeleton for the TalkingOli project with shared tooling.

## Scope
- Create folders:
  - apps/api
  - apps/web
  - packages/shared
  - packages/prompting
  - docs/
- Setup TypeScript at workspace level
- Add ESLint + Prettier
- Root package.json with scripts:
  - lint
  - format
  - typecheck
  - dev (placeholder)
- Choose ONE package manager (pnpm recommended)

## Out of Scope
- Business logic
- Docker
- CI/CD
- Environment secrets

## Acceptance Criteria
- `pnpm install` works
- `pnpm lint` passes
- `pnpm typecheck` passes
- No secrets committed

## Definition of Done
- Repo structure matches scope
- Tooling configured once at root
- Each app/package has its own tsconfig extending base

## Notes for Codex
- Keep configs minimal
- Do not over-engineer
- No frameworks yet
