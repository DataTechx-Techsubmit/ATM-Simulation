markdown# 🏧 ATM-Simulation

> A full-stack web application simulating core ATM functionality, built by the DataTechx-Techsubmit team.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 👥 Team

| Name | Role | Responsibility |
|------|------|---------------|
| Oliver | Database Engineer | Schema Design & MySQL |
| Princeton | Backend Developer | Node.js API & GitHub |
| Regstopher | Frontend Developer | GUI & ATM Interface |
| Alex | Framework Engineer | Express & Integration |

---

## 📌 Project Overview

The ATM-Simulation is a beginner-to-intermediate full-stack project that simulates the core functionality of a real Automated Teller Machine. Users can create bank accounts, authenticate via PIN, and perform standard banking operations through a browser-based ATM-styled interface.

---

## ⚙️ Tech Stack

| Layer | Technology | Owner |
|-------|-----------|-------|
| Frontend | HTML, CSS, JavaScript | Regstopher |
| Backend | Node.js + Express.js | Princeton & Alex |
| Database | MySQL | Oliver |
| Version Control | GitHub | Princeton |
| Architecture | MVC Pattern | All |

---

## 📁 Folder Structure
ATM-Simulation/
├── client/
├── server/
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   └── models/
├── docs/
└── README.md

---

## 🚀 Core Features

- User registration and PIN authentication
- Account balance check
- Deposit and withdrawal
- Fund transfers between accounts
- Last 10 transactions mini-statement
- Account lockout after 3 failed PIN attempts
- Auto-logout after 60 seconds of inactivity
- Admin dashboard to manage users and accounts

---

## 🔐 Security

- PINs hashed with bcrypt
- JWT tokens for session management
- Parameterized SQL queries
- Account locks after 3 failed attempts
- Admin role protected routes

---

## 📋 Project Phases

| Phase | Name | Owner |
|-------|------|-------|
| Phase 1 | Planning & Setup | All |
| Phase 2 | Database Setup | Oliver |
| Phase 3 | Backend Core | Princeton & Alex |
| Phase 4 | Frontend Core | Regstopher |
| Phase 5 | Integration | All |
| Phase 6 | Admin Panel | Princeton & Regstopher |
| Phase 7 | Testing & Polish | All |
| Phase 8 | Demo & Deploy | Princeton |

---

## 🌿 Git Branch Strategy

- `main` — stable, demo-ready code only
- `dev` — active development branch
- `feature/auth` — authentication work
- `feature/frontend` — UI work
- `feature/admin` — admin panel

---

## 📄 Documents

All project documents are in the `/docs` folder:
- Project Plan
- Software Requirements Specification (SRS)
- Software Design Document (SDD)

---

*DataTechx-Techsubmit | Version 1.0 | April 2026*
