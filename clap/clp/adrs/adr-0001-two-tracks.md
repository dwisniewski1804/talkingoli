# ADR-0001 — Dual Tracks For Thinking And Doing

- **Status:** Accepted
- **Context:** We need a way to prevent reasoning artifacts from being polluted by generated execution details.
- **Decision:** Maintain two explicit protocols: CLP for context/logs, ATP for task execution and generated outputs. Each protocol owns its own logs, artifacts, and templates.
- **Consequences:**
  - Hand-offs between CLP and ATP become explicit and reviewable.
  - Contributors must decide where an artifact lives before creating it.
  - Automation scripts can reason about intent vs execution data via directory boundaries.
