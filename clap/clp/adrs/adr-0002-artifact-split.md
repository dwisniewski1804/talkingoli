# ADR-0002 — Artifact Split Between CLP And ATP

- **Status:** Accepted
- **Context:** Generated artifacts (code, specs, migrations) evolve rapidly and should not clog the context log. CLP artifacts should stay lightweight and conceptual.
- **Decision:** Store all generated outputs, even drafts, inside `clap/atp/artifacts/`. Reserve `clap/clp/artifacts/` for diagrams, schemas, and flows that support reasoning but are product-agnostic.
- **Consequences:**
  - Reviewers can quickly locate authoritative reasoning in CLP without sifting through generated files.
  - ATP cleanly owns disposable outputs and can purge or regenerate them without risking CLP signal.
  - Tooling can treat CLP artifacts as read-mostly and ATP artifacts as write-heavy.
