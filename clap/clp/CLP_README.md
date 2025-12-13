# CLP — Context Log Protocol

CLP is the thinking layer of CLAP. It captures direction, intent, and the rationale that guides ATP execution. Everything in this area should be human-authored, slow-changing, and treated as the authoritative source of truth for context.

## Key Files
- `next.md` tracks the current priorities and focus areas.
- `adrs/` stores architectural decision records, each immutable once accepted.
- `log/` contains chronological context logs and chat snapshots.
- `artifacts/` hosts diagrams, schemas, and other thinking aids that support the log.
- `templates/` holds the non-editable writing aids used when creating the above files.

Follow these conventions when updating CLP:
1. Keep entries concise and intentional.
2. Include links to related tasks or artifacts whenever possible.
3. Never mix execution details with reasoning artifacts.

## Operating Principles
- **Thinking before doing.** CLP content must describe why something matters before ATP or the product touches how it is implemented.
- **Append-only logs.** `log/` entries are chronological snapshots; never rewrite history, add a new entry instead.
- **Immutable decisions.** An ADR stays frozen once accepted—supersede it with a new file if the decision changes.
- **Explicit hand-offs.** Every priority or ADR should reference its downstream ATP task IDs so executors know where to start.
- **Product agnostic.** Nothing product-specific (APIs, DB schemas, etc.) belongs here; keep those in ATP or `product/`.

## Directory Layout
```txt
clap/clp/
├─ CLP_README.md
├─ next.md
├─ adrs/
│  ├─ adr-0001-two-tracks.md
│  └─ adr-0002-artifact-split.md
├─ log/
│  └─ 2025-12-13_clp_log.md
├─ artifacts/
│  ├─ architecture/
│  ├─ diagrams/
│  ├─ schemas/
│  └─ flows/
└─ templates/
   ├─ adr.template.md
   ├─ next.template.md
   └─ log.template.md
```
Use this tree as the source of truth—any time you add or remove a file, update the relevant section (key files, principles, templates) so future operators can trust CLP as their onboarding map.
