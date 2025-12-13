# CLAP Framework – Repository Structure

This repository contains **two clearly separated concerns**:
- **CLAP** – a reusable framework for working with AI
- **PRODUCT** – a concrete application built using CLAP

```
## Repository Tree
clap/
├─ README.md
├─ MANIFEST.md
│
├─ clp/                              # Context Log Protocol
│  ├─ NEXT.md
│  ├─ DECISION_LOG.md
│  ├─ contexts/
│  ├─ decisions/
│  ├─ artifacts/                     # 🧠 Thinking artifacts
│  │  ├─ architecture/
│  │  ├─ diagrams/
│  │  ├─ schemas/
│  │  └─ flows/
│  └─ templates/
│
├─ atp/                              # Agent Task Protocol
│  ├─ tasks/
│  ├─ runs/
│  ├─ artifacts/                     # ⚙️ Execution artifacts
│  │  ├─ db/
│  │  ├─ api/
│  │  ├─ code/
│  │  ├─ infra/
│  │  └─ rules/
│  └─ templates/
│
└─ docs/

```