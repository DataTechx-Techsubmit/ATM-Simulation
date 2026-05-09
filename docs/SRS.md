# 📋 Software Requirements Specification (SRS)
## ATM-Simulation | DataTechx-Techsubmit | Version 1.0

---

## 1. Introduction

### 1.1 Purpose
This document describes the functional and non-functional requirements for the ATM-Simulation web application built by the DataTechx-Techsubmit team. It serves as the reference guide for all development, testing, and delivery activities.

### 1.2 Project Name
ATM-Simulation

### 1.3 Team
| Name | Role |
|------|------|
| Oliver | Project Leader & Database Engineer |
| Princeton | Backend Developer & GitHub Manager |
| Regstopher | Frontend Developer |
| Alex | Framework Engineer & Integration |

### 1.4 Scope
The ATM-Simulation is a full-stack web application that simulates the core functionality of a real Automated Teller Machine. Users can register bank accounts, authenticate via PIN, and perform standard banking operations through a browser-based ATM interface.

### 1.5 Development Model — Agile & Incremental Model
This project follows the **Agile Incremental Development Model**. The system is built and delivered in increments — each increment adds working functionality on top of the previous one. The team works in short sprints, reviews progress after each increment, and adjusts based on feedback.

#### Why Agile & Incremental?
- The project has a clear deadline (post-exam delivery)
- Team members work on separate modules simultaneously
- Each feature (auth, transactions, admin) can be built and tested independently
- Allows early testing of core features before full system is complete
- Easy to adapt if requirements change during development

#### Increments Plan
| Increment | Features Delivered | Owner |
|-----------|-------------------|-------|
| Increment 1 | Database setup, user registration & login | Oliver & Princeton |
| Increment 2 | Balance check, deposit, withdrawal | Alex & Oliver |
| Increment 3 | Fund transfer, mini-statement | Alex & Princeton |
| Increment 4 | ATM Frontend UI connected to backend | Regstopher |
| Increment 5 | Admin dashboard, account management | Princeton & Regstopher |
| Increment 6 | Testing, bug fixes, final demo | All |

---

## 2. Separation of Concerns

Each team member owns a specific layer of the system. No member should modify another member's layer without agreement. This ensures clean code, easy debugging, and parallel development.

| Concern | Layer | Owner | Location |
|---------|-------|-------|----------|
| User Interface | Frontend (HTML/CSS/JS) | Regstopher | client/ |
| Business Logic | Backend Routes & Controllers | Princeton & Alex | server/routes/, server/controllers/ |
| Data Access | Database Models & Queries | Oliver | server/models/ |
| App Configuration | Express Setup & Middleware | Alex | server/config/ |
| Authentication | JWT & bcrypt | Princeton | server/controllers/auth.controller.js |
| Version Control | GitHub Management | Princeton | All branches |

---

## 3. Functional Requirements

### 3.1 Authentication Module (Princeton)
- FR-01: Users shall register with full name, email, and 4-digit PIN
- FR-02: System shall auto-generate a unique account number on registration
- FR-03: Users shall log in using account number and PIN
- FR-04: System shall lock account after 3 consecutive failed PIN attempts
- FR-05: System shall auto-logout after 60 seconds of inactivity
- FR-06: JWT token shall expire after 60 minutes

### 3.2 Account Operations Module (Alex)
- FR-07: Users shall check current account balance
- FR-08: Users shall deposit money into their account
- FR-09: Users shall withdraw money subject to available balance
- FR-10: Users shall transfer funds to another valid account number
- FR-11: Users shall view mini-statement of last 10 transactions

### 3.3 Database Module (Oliver)
- FR-12: System shall store all user records securely in MySQL
- FR-13: System shall record every transaction with timestamp
- FR-14: System shall log all login attempts with IP address
- FR-15: All PINs shall be hashed with bcrypt before storage

### 3.4 Frontend Module (Regstopher)
- FR-16: System shall display a welcome screen with card insert animation
- FR-17: System shall display a PIN entry screen with masked numpad
- FR-18: System shall display a main menu with all ATM options
- FR-19: System shall display a receipt screen after every transaction
- FR-20: System shall display error messages for invalid actions

### 3.5 Admin Module (Princeton & Regstopher)
- FR-21: Admin shall view all registered user accounts
- FR-22: Admin shall reset any user PIN
- FR-23: Admin shall freeze or unfreeze any account
- FR-24: Admin shall view full system transaction logs

---

## 4. Non-Functional Requirements

| ID | Requirement | Details |
|----|------------|---------|
| NFR-01 | Performance | All API responses under 500ms |
| NFR-02 | Security | PINs hashed, JWT auth, parameterized SQL |
| NFR-03 | Usability | Clean ATM-styled UI, mobile responsive |
| NFR-04 | Reliability | System stable during full demo session |
| NFR-05 | Maintainability | MVC structure, commented code, git commits |
| NFR-06 | Scalability | MySQL schema supports multiple account types |

---

## 5. Project Plan Summary

### 5.1 Phases & Timeline
| Phase | Activity | Owner | Status |
|-------|----------|-------|--------|
| Phase 1 | Planning, GitHub setup, documentation | Oliver | ✅ Done |
| Phase 2 | Database schema & MySQL setup | Oliver | ⏳ Next |
| Phase 3 | Backend auth & account API | Princeton & Alex | ⏳ Next |
| Phase 4 | Frontend ATM UI | Regstopher | ⏳ Next |
| Phase 5 | Frontend-Backend integration | All | ⏳ Next |
| Phase 6 | Admin panel | Princeton & Regstopher | ⏳ Next |
| Phase 7 | Testing & bug fixes | All | ⏳ Next |
| Phase 8 | Final demo & deployment | Princeton | ⏳ Next |

### 5.2 Constraints
- Development starts after final exams
- All team members must clone repo and set up local environment before coding
- All code must be pushed via feature branches — no direct commits to main
- Pull Requests must be reviewed before merging

---

## 6. Assumptions
- All team members have Node.js and MySQL installed locally
- Internet access is available for GitHub collaboration
- Each member is responsible for their own module as defined in Section 2

---

*DataTechx-Techsubmit | Version 1.0 | April 2026 | Confidential*
