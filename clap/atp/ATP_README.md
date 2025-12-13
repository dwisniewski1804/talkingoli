# ATP — Agent Task Protocol

ATP is the execution layer for CLAP. Every task definition, run log, and generated artifact created by agents belongs here. Treat this area like an operations log: clearly state desired outcomes, record what happened, and store the resulting outputs.

## Layout
- `tasks/` — structured task definitions with clear acceptance criteria.
- `log/` — append-only execution logs (`YYYY-MM-DD_task-XXXX.md`).
- `artifacts/` — generated outputs grouped by type (code, db, infra, etc.).
- `templates/` — canned formats for tasks and logs.

Rules of thumb:
1. Reference CLP context instead of duplicating it.
2. When a task finishes, link to the artifacts and log entries it produced.
3. Keep generated assets in `artifacts/` even if they also live in the product tree; this directory is the traceable archive.
