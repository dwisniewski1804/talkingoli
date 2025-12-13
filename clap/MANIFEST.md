# CLAP Framework Manifest

**CLAP (Context & Logic–Agent Protocol)** is a framework for building software **with AI as a first-class collaborator**.  
It provides structure, traceability, and separation of concerns when working with large language models, agents, and humans in complex projects.

CLAP is **not a product**.  
It is a **meta-framework** that can be applied to any product, domain, or technology stack.

---

## 1. Why CLAP Exists

Modern AI-assisted development suffers from:
- lost context,
- non-reproducible decisions,
- blurred responsibility between thinking and execution,
- fragile, non-auditable AI outputs.

CLAP exists to solve this by:
- **making context explicit and persistent**,
- **logging decisions as first-class artifacts**,
- **separating reasoning from execution**,
- **treating AI agents as deterministic workers, not oracles**.

---

## 2. Core Principles

### 2.1 Separation of Concerns (Non-Negotiable)

CLAP enforces strict separation between:

| Layer | Responsibility |
|-----|---------------|
| **CLP** | Context, reasoning, decisions, intent |
| **ATP** | Task execution, generation, implementation |
| **Product** | Business logic, UX, domain rules |

> If a concept cannot be reused outside the current product, it **does not belong in CLAP**.

---

### 2.2 Decisions Are More Valuable Than Code

Code can be rewritten.  
Decisions cannot be recovered once lost.

CLAP treats:
- architectural choices,
- scope decisions,
- trade-offs,
- rejections,

as **permanent, auditable artifacts**.

---

### 2.3 Context Is a Resource, Not a Side Effect

Context is:
- finite,
- expensive,
- degradable over time.

CLAP externalizes context into **explicit logs**, so it can be:
- reloaded,
- reviewed,
- transferred between humans and agents.

---

### 2.4 AI Is a Tool, Not an Authority

In CLAP:
- AI **executes tasks**, it does not define intent.
- AI outputs are **artifacts**, not truth.
- Humans own decisions, accountability, and direction.

---

## 3. CLAP Architecture

CLAP consists of two protocols:

---

## 4. CLP — Context Log Protocol

**CLP is the thinking layer.**

It captures:
- current project state,
- intent and direction,
- decisions and rationale,
- constraints and assumptions.

### CLP Owns:
- context snapshots
- decision logs
- priorities (`NEXT.md`)
- reasoning history

### CLP Does NOT Own:
- code
- generated content
- execution details

---

## 5. ATP — Agent Task Protocol

**ATP is the execution layer.**

It defines:
- what task should be performed,
- what inputs are provided,
- what outputs are expected,
- what “done” means.

### ATP Owns:
- task definitions
- execution runs
- generated artifacts

### ATP Does NOT Own:
- intent
- strategy
- product direction

---

## 6. Artifacts vs Logs

CLAP distinguishes between:

### Logs (CLP)
- permanent
- explain *why*
- human-authored
- low volume, high value

### Artifacts (ATP / Product)
- disposable
- explain *what*
- often AI-generated
- high volume

This distinction prevents log pollution and preserves signal.

---

## 7. What CLAP Is NOT

CLAP is **not**:
- a project management tool,
- a coding framework,
- a replacement for Git,
- a prompt library,
- a specific AI model strategy.

CLAP does not prescribe:
- languages,
- databases,
- cloud providers,
- UI patterns.

---

## 8. How CLAP Is Used

1. **Establish context** (CLP)
2. **Log decisions** (CLP)
3. **Define tasks** (ATP)
4. **Execute via agents** (ATP)
5. **Review artifacts**
6. **Update context**

This loop is continuous and explicit.

---

## 9. Design Constraints

- CLAP must remain **product-agnostic**
- CLAP must be **readable by humans**
- CLAP must survive **agent turnover**
- CLAP must scale with project complexity

---

## 10. Philosophy

CLAP is built on a simple belief:

> **Clear thinking scales better than clever code.**

By making intent, context, and decisions explicit,  
CLAP turns AI from a stochastic assistant into a reliable collaborator.

---

## 11. Versioning

This manifest describes **CLAP v0.1**.

The framework is expected to evolve, but:
- core principles are stable,
- backwards compatibility of ideas matters more than format.

---

## 12. Final Rule

> If you are unsure where something belongs, ask:
>
> **“Is this about thinking, or about doing?”**
>
> If it is thinking → **CLP**  
> If it is doing → **ATP**

Everything else is product code.

---
