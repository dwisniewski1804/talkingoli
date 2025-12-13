# CLAP — Context & Logic–Agent Protocol

CLAP is an **internal engineering framework** used in this repository to work with AI in a
**structured, explicit, and auditable way**.

CLAP is **not part of the product runtime**.  
It exists to govern how humans and AI collaborate during design, implementation, and iteration.

---

## What CLAP Solves

AI-assisted development often fails due to:
- lost or implicit context,
- undocumented architectural decisions,
- mixing reasoning with execution,
- uncontrolled accumulation of generated artifacts.

CLAP addresses this by:
- externalizing context and decisions,
- separating **thinking** from **execution**,
- making AI outputs traceable and disposable,
- enforcing clear ownership of artifacts.

---

## Core Principle

> **Humans decide.  
> AI executes.  
> Everything important is written down.**

---

## CLAP Structure Overview

CLAP consists of two protocols:

### CLP — Context Log Protocol
The **thinking layer**.
Owns intent, priorities, architectural decisions, and reasoning artifacts.

### ATP — Agent Task Protocol
The **execution layer**.
Owns task definitions, execution logs, and all generated outputs.

The product **uses** CLAP, but CLAP never depends on the product.

---

## CLAP Directory Tree
talkingoli/
├─ README.md                      # MAIN README (product-centered)
├─ CLAP_README.md                 # CLAP overview, philosophy, structure (root-level)
│
├─ clap/                          # CLAP framework implementation
│  ├─ MANIFEST.md                 # CLAP principles & philosophy (formal)
│  │
│  ├─ clp/                        # Context Log Protocol (thinking layer)
│  │  ├─ CLP_README.md             # How to use CLP
│  │  ├─ next.md                  # Current priorities (when active)
│  │  │
│  │  ├─ adrs/                    # Architectural Decision Records
│  │  │  ├─ adr-0001-two-tracks.md
│  │  │  └─ adr-0002-artifact-split.md
│  │  │
│  │  ├─ log/                     # Context & AI chat snapshots
│  │  │  ├─ 2025-12-13_clp_log.md
│  │  │  └─ ...
│  │  │
│  │  ├─ artifacts/               # THINKING artifacts (diagrams, schemas, flows)
│  │  │  ├─ architecture/
│  │  │  ├─ diagrams/
│  │  │  ├─ schemas/
│  │  │  └─ flows/
│  │  │
│  │  └─ templates/               # Non-editable CLP templates
│  │     ├─ adr.template.md
│  │     ├─ next.template.md
│  │     └─ log.template.md
│  │
│  └─ atp/                        # Agent Task Protocol (execution layer)
│     ├─ ATP_README.md             # How to use ATP
│     │
│     ├─ tasks/                   # Task definitions (what to do)
│     │  ├─ task-0001-bootstrap.md
│     │  └─ ...
│     │
│     ├─ log/                     # Execution logs (what happened)
│     │  ├─ 2025-12-13_task-0001.md
│     │  └─ ...
│     │
│     ├─ artifacts/               # ALL generated outputs
│     │  ├─ db/
│     │  ├─ api/
│     │  ├─ code/
│     │  ├─ infra/
│     │  ├─ rules/
│     │  ├─ reports/
│     │  ├─ transcripts/
│     │  └─ exports/
│     │
│     └─ templates/               # Non-editable ATP templates
│        ├─ task.template.md
│        └─ log.template.md
│
├─ product/                       # PRODUCT (pure application code)
│  ├─ PRODUCT_README.md           # Product-specific documentation
│  │
│  ├─ docs/                       # Product docs (MVP, flows, etc.)
│  │  ├─ mvp.md
│  │  └─ user_flows.md
│  │
│  └─ app/                        # Application source code ONLY
│
└─ .github/                       # CI / PR / issue templates (optional)
