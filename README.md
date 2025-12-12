# TalkingOli — AI-powered Interview Preparation Platform 🎙️🤖

TalkingOli is an **open-source, AI-powered platform** that helps candidates prepare for recruitment processes using **realistic, voice-based interview simulations**.

The system analyzes a candidate’s CV and a job offer, calculates a **Match Rate**, and conducts structured interview stages (starting with HR interviews) using **natural voice conversations** powered by modern LLMs and Text-to-Speech.

This repository contains the **MVP implementation (HRWomen stage)** built with a **DDD-inspired, event-driven architecture**.

---

## 🚀 Key Features (MVP)

- 📄 Upload CV + job offer link
- 🎯 AI-generated **Match Rate** (CV ↔ job offer)
- 🎙️ **Voice-based HR interview** (HRWomen stage)
- 🌍 Interview language derived from the **job offer**, not candidate nationality
- 🎧 Randomized recruiter voice per interview (ElevenLabs)
- 🧠 AI-driven questions, follow-ups, and evaluations
- 💳 Payment required **after completing the first stage** (Stripe)
- ⏳ Delayed result delivery (simulated human analysis)
- 📧 Results delivered via email (no account required)
- 🌐 Multi-language, multi-currency ready

---

## 🧱 Architecture Overview

TalkingOli is built as a **modular monolith** with clear domain boundaries and event-driven workflows.

### Core Principles
- **Pragmatic Domain-Driven Design (DDD)**
- **Event Storming–driven modeling**
- **Asynchronous processing** for AI workloads
- **Privacy-first** handling of candidate data (PII)

### Bounded Contexts
- **Intake** — CV + offer submission
- **Match** — CV ↔ offer analysis
- **Stages** — interview stages (HRWomen in MVP)
- **Payments** — Stripe checkout & webhooks
- **Delivery** — delayed reports & email delivery
- **Audio** — TTS (ElevenLabs) & STT
- **Jobs** — background processing (BullMQ)

---

## 🛠️ Tech Stack

### Backend
- Node.js (NestJS)
- MongoDB (logical relational model)
- Redis + BullMQ (background jobs)
- OpenAI API (LLM + Speech-to-Text)
- ElevenLabs API (Text-to-Speech)
- Stripe (payments)

### Frontend
- React (Vite)
- Web Audio API
- i18n ready

### Infrastructure
- Object Storage (S3 / Cloudflare R2)
- Email provider (e.g. SES / Resend / SendGrid)

---

## 🎙️ Voice & Language Model

- Interview language is resolved from the **job offer**
- GPT generates interview content **directly in the target language**
- ElevenLabs converts **pure text → voice**
- One recruiter voice is **randomly selected per interview stage** and kept consistent
- Audio answers are transcribed and evaluated by AI

---

## 📊 Domain Model & Event Flow

The project is designed using:
- **Logical ERD (even though MongoDB is used)**
- **Event Storming (Big Picture & Process Level)**
- Clear separation of:
  - Commands
  - Domain Events
  - Policies (automation rules)

This makes it easy to:
- add new interview stages (TechCall, HomeWork)
- experiment with different AI policies
- scale parts of the system independently

---

## 🔐 Privacy & Security

- CVs and audio recordings are stored outside the database (object storage)
- Automatic data retention (TTL) is planned
- No PII data is logged
- Stripe webhooks are idempotent and verified
- Backend-only access to API keys (OpenAI, ElevenLabs)

---

## 📦 Project Status

🚧 **Early MVP / Active Design Phase**

What exists:
- Domain model & architecture
- Event Storming & ERD
- Clear roadmap for MVP implementation

What’s next:
- HRWomen Stage Policy v1
- API contracts
- First end-to-end vertical slice

---

## 🤝 Contributing

This project is **open-source and contribution-friendly**.

Ways to contribute:
- architecture & domain modeling feedback
- backend implementation (NestJS, jobs, integrations)
- frontend UX for voice interviews
- prompt engineering & evaluation logic
- documentation & diagrams

Please open an Issue or Discussion before large changes.

---

## 📄 License

MIT License  
Feel free to use, modify, and build upon this project.

---

## 🧠 Philosophy

> *“Treat AI as a collaborator, not a magic function.”*

TalkingOli focuses on:
- realism over gimmicks
- structured interviews over chatbots
- explainable results over black boxes

---

**If this project resonates with you — star ⭐ the repo and join the discussion.**


This project is licensed under the **Business Source License 1.1 (BSL)**.

- The source code is publicly available
- You are free to use and modify it for development and internal purposes
- Offering this software as a hosted or managed service requires
  a commercial license

After the Change Date, the project will automatically be licensed
under the Apache License 2.0.
