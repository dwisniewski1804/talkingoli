# T2 — Developer Tooling & Code Quality Baseline

## Goal

Establish a consistent, productive developer experience (DX) across the `/product` workspace, including TypeScript configuration, linting, formatting, and basic testing setup for both backend and frontend.

This task ensures future tasks are implemented on top of a reliable, opinionated tooling baseline.

---

## Scope

### Monorepo Tooling

- Define a single package manager for the product (`npm`, `pnpm`, or `yarn`) and apply it consistently:
  - root `package.json` with workspace configuration (if using workspaces)
  - `apps/web`, `apps/api`, `packages/shared` wired into the same workspace
- Add a root `tsconfig.base.json` to share compiler options:
  - strict mode (`"strict": true`)
  - path aliases for shared modules (e.g. `@shared/*`, `@api/*`, `@web/*`)
  - `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, etc.
- Add project-level `tsconfig.json` files in:
  - `apps/web`
  - `apps/api`
  - `packages/shared`
  Each extending the base config and configured for their respective environments (browser vs Node).

### Linting & Formatting

- Add ESLint configuration at the root, with:
  - separate overrides for:
    - backend (`apps/api`)
    - frontend (`apps/web`)
    - shared (`packages/shared`)
  - recommended rules for:
    - TypeScript
    - React (for web)
    - Node/NestJS (for api)
  - basic code-quality rules:
    - no unused imports
    - no `any` in public contracts (where reasonable)
    - consistent import order
- Add Prettier with:
  - shared config at root
  - ESLint integration (no conflicting rules)
- Add npm scripts:
  - `lint` – runs ESLint on all workspaces
  - `format` – runs Prettier on all workspaces

### Testing Setup

- Backend (`apps/api`):
  - Configure Jest or Vitest with:
    - TypeScript support
    - a simple example test (e.g. testing the `/health` handler or a pure function)
    - test scripts: `test`, `test:watch`
- Frontend (`apps/web`):
  - Minimal testing setup:
    - either unit tests (Vitest) or component tests (Vitest + React Testing Library)
    - one example test to verify the health status component or a simple UI element

### Developer Scripts

- At the root:
  - `dev` – runs both `web` and `api` in dev mode (optionally via a simple orchestrator like `concurrently` or a minimal custom script)
  - `lint`, `format`, `test` – proxy scripts to run across workspaces
- In each app:
  - `dev` – local dev for that app alone
  - `build` – build the app
  - `test` – tests scoped to that app

---

## Out of Scope

- CI/CD integration (GitHub Actions, etc.).
- Pre-commit hooks / Husky setup.
- Advanced test architecture (fixtures, integration tests, E2E).
- Performance or load testing.

---

## Acceptance Criteria

- Running the root lint command (e.g. `npm run lint`) lints backend, frontend, and shared packages successfully.
- Running the root format command (e.g. `npm run format`) formats code without errors.
- Running the root test command (e.g. `npm run test`) executes at least:
  - one test in `apps/api`
  - one test in `apps/web`
- TypeScript:
  - successfully compiles in `apps/api`, `apps/web`, `packages/shared`
  - no TypeScript errors in the baseline code.
- All tooling works inside Docker (if applicable) or at least locally on the host with documented requirements.

---

## Definition of Done

- [ ] Root workspace is configured and working (install, build, lint, test).
- [ ] ESLint + Prettier are configured and run successfully.
- [ ] TypeScript is configured with a shared base and per-project configs.
- [ ] At least one passing test exists in `apps/api` and `apps/web`.
- [ ] Tooling commands are documented in `product/README.md` (or linked file).

---

## Notes

- Keep configurations as simple and explicit as possible; avoid premature optimization.
- Prefer convention over heavy customization.
- This task is foundational: future tasks must assume that `lint`, `test`, and `build` are always green before merging.
