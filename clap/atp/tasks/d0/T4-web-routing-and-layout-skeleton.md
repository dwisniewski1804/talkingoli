# T4 — Web Application Routing & Layout Skeleton

## Goal

Provide a navigable, minimal but coherent UI skeleton for the product web application (`apps/web`), with routes and layout ready for future features.

No real business logic is required yet; focus on structure, navigation, and basic state handling.

---

## Scope

### Routing

- Set up client-side routing (e.g. React Router) with at least these routes:
  - `/` – landing / overview of the product.
  - `/upload` – placeholder for CV + job offer upload.
  - `/interview` – placeholder for the interview experience.
  - `/report` – placeholder for the generated report.
- Each route should:
  - have its own screen component.
  - display a clear title and short description (placeholder copy is fine).
  - expose basic navigation to other core routes (buttons/links).

### Layout & UI Shell

- Create a shared layout component:
  - header with app name/logo and navigation links.
  - main content area.
  - optional footer.
- Implement a simple visual design:
  - consistent spacing, typography, and a basic color palette.
  - reasonable responsiveness for common desktop sizes.
- Add a global loading / error UI pattern:
  - simple “Loading…” and “Something went wrong” components that can be reused per screen.

### Backend Integration (Health Status)

- Use the existing `/health` endpoint from `talkingoli-api`:
  - on app load (or inside the header), call `/health`.
  - display backend status (e.g. badge: `API: OK` / `API: DOWN`).
- Handle API errors gracefully:
  - show a warning or error state if the health check fails.
  - avoid crashing the app on network errors.

### Developer Experience

- Add basic structure for:
  - `components/` – shared UI components.
  - `pages/` or `routes/` – per-route components.
  - `hooks/` – custom hooks if needed (e.g. `useHealthStatus()`).
- Ensure the app is served correctly via Docker and local dev (`npm run dev` or equivalent).

---

## Out of Scope

- Final styling, design system, or branding.
- State management libraries (Redux, Zustand, etc.) unless trivial.
- Implementing the actual upload, interview, or report logic.
- Authentication and user management.

---

## Acceptance Criteria

- Navigating to `/`, `/upload`, `/interview`, and `/report` works without errors.
- Layout is consistent across pages (shared header/footer).
- The app calls `/health` and visualizes backend status.
- On network errors:
  - the app remains usable.
  - a visible error message or banner is shown.
- The structure of `apps/web` is clear and ready for additional feature modules.

---

## Definition of Done

- [ ] Routing is configured and functional for the core paths.
- [ ] Shared layout shell is implemented.
- [ ] Backend health status is displayed in the UI.
- [ ] Basic loading and error components exist and are used.
- [ ] Web app runs in Docker and via local dev scripts.

---

## Notes

- Prioritize clarity of structure over pixel-perfect design.
- Keep components small and composable; avoid monolithic screens.
- This skeleton will be the base for implementing the actual user flows later.
