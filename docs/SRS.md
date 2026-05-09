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
The ATM-Simulation is a full-stack web application that simulates the core functionality of a real Automated Teller Machine. Users must pass strict KYC (Know Your Customer) identity verification before creating an account. Once verified, they can authenticate via PIN + OTP and perform standard banking operations through a browser-based ATM interface.

### 1.5 Development Model — Agile & Incremental Model
This project follows the **Agile Incremental Development Model**. The system is built and delivered in increments — each increment adds working functionality on top of the previous one.

#### Why Agile & Incremental?
- The project has a clear deadline (post-exam delivery)
- Team members work on separate modules simultaneously
- Each feature can be built and tested independently
- Allows early testing of core features before full system is complete
- Easy to adapt if requirements change during development

#### Increments Plan
| Increment | Features Delivered | Owner |
|-----------|-------------------|-------|
| Increment 1 | Database setup, KYC verification, user registration | Oliver & Princeton |
| Increment 2 | PIN + OTP login, JWT auth, account lockout | Princeton |
| Increment 3 | Balance check, deposit, withdrawal | Alex & Oliver |
| Increment 4 | Fund transfer, mini-statement | Alex & Princeton |
| Increment 5 | ATM Frontend UI connected to backend | Regstopher |
| Increment 6 | Admin dashboard, account management | Princeton & Regstopher |
| Increment 7 | Testing, bug fixes, final demo | All |

---

## 2. Separation of Concerns

| Concern | Layer | Owner | Location |
|---------|-------|-------|----------|
| User Interface | Frontend (HTML/CSS/JS) | Regstopher | client/ |
| Business Logic | Backend Routes & Controllers | Princeton & Alex | server/routes/, server/controllers/ |
| Data Access | Database Models & Queries | Oliver | server/models/ |
| App Configuration | Express Setup & Middleware | Alex | server/config/ |
| Authentication & Security | JWT, bcrypt, OTP, KYC | Princeton | server/controllers/auth.controller.js |
| File Storage | Photo & ID uploads | Princeton & Oliver | server/uploads/ |
| Version Control | GitHub Management | Princeton | All branches |

---

## 3. Functional Requirements

### 3.1 KYC & Identity Verification Module (Princeton & Oliver)
- FR-01: System shall require users to scan their National ID or Passport QR code during registration
- FR-02: System shall extract full name, date of birth, and ID number from QR scan
- FR-03: System shall require users to upload a clear selfie/photo during registration
- FR-04: System shall compare selfie with ID document photo for face match verification
- FR-05: System shall reject registration if identity cannot be verified
- FR-06: System shall store verified ID number, photo, and selfie securely in database
- FR-07: System shall mark account as KYC-verified before activation

### 3.2 Authentication Module (Princeton)
- FR-08: Users shall register with full name, email, phone number, and 4-digit PIN
- FR-09: System shall auto-generate a unique account number on successful KYC verification
- FR-10: System shall send email verification link before account is activated
- FR-11: Users shall log in using account number and PIN
- FR-12: System shall send OTP to registered email/phone on every login attempt
- FR-13: Users must enter correct PIN + OTP to gain access (2FA)
- FR-14: System shall lock account after 3 consecutive failed PIN attempts
- FR-15: System shall auto-logout after 60 seconds of inactivity
- FR-16: JWT token shall expire after 60 minutes

### 3.3 Account Operations Module (Alex)
- FR-17: Users shall check current account balance
- FR-18: Users shall deposit money into their account
- FR-19: Users shall withdraw money subject to available balance
- FR-20: Users shall transfer funds to another verified account number
- FR-21: Users shall view mini-statement of last 10 transactions

### 3.4 Database Module (Oliver)
- FR-22: System shall store all user records securely in MySQL
- FR-23: System shall store KYC documents and photos securely
- FR-24: System shall record every transaction with timestamp
- FR-25: System shall log all login attempts with IP address and timestamp
- FR-26: All PINs shall be hashed with bcrypt before storage
- FR-27: OTP codes shall expire after 5 minutes

### 3.5 Frontend Module (Regstopher)
- FR-28: System shall display a welcome screen with card insert animation
- FR-29: System shall display a KYC registration screen with QR scanner and photo upload
- FR-30: System shall display a PIN + OTP entry screen
- FR-31: System shall display a main menu with all ATM options
- FR-32: System shall display a receipt screen after every transaction
- FR-33: System shall display clear error messages for failed verification or invalid actions

### 3.6 Admin Module (Princeton & Regstopher)
- FR-34: Admin shall view all registered and KYC-verified user accounts
- FR-35: Admin shall view uploaded ID documents and selfies
- FR-36: Admin shall manually approve or reject KYC submissions
- FR-37: Admin shall reset any user PIN
- FR-38: Admin shall freeze or unfreeze any account
- FR-39: Admin shall view full system transaction and login logs

---

## 4. Security Requirements

| ID | Requirement | Details |
|----|------------|---------|
| SR-01 | KYC Verification | QR scan + selfie match before account creation |
| SR-02 | Photo Identity | User selfie stored and matched against ID photo |
| SR-03 | Two-Factor Auth | PIN + OTP required for every login |
| SR-04 | Email Verification | Email confirmed before account activation |
| SR-05 | PIN Hashing | bcrypt with salt rounds of 10 |
| SR-06 | Session Security | JWT token expires after 60 minutes |
| SR-07 | Account Lockout | Locked after 3 failed PIN attempts |
| SR-08 | OTP Expiry | OTP codes expire after 5 minutes |
| SR-09 | IP Logging | Every login attempt logged with IP and timestamp |
| SR-10 | SQL Injection | All queries parameterized — no raw SQL input |
| SR-11 | Session Timeout | Auto-logout after 60 seconds of inactivity |
| SR-12 | Admin Protection | Admin routes require separate admin role JWT |

---

## 5. Non-Functional Requirements

| ID | Requirement | Details |
|----|------------|---------|
| NFR-01 | Performance | All API responses under 500ms |
| NFR-02 | Security | Full KYC, 2FA, bcrypt, JWT, parameterized SQL |
| NFR-03 | Usability | Clean ATM-styled UI, mobile responsive |
| NFR-04 | Reliability | System stable during full demo session |
| NFR-05 | Maintainability | MVC structure, commented code, git commits |
| NFR-06 | Scalability | MySQL schema supports multiple account types |
| NFR-07 | Data Privacy | KYC documents encrypted at rest |

---

## 6. Project Plan Summary

### 6.1 Phases & Timeline
| Phase | Activity | Owner | Status |
|-------|----------|-------|--------|
| Phase 1 | Planning, GitHub setup, documentation | Oliver | ✅ Done |
| Phase 2 | Database schema & MySQL setup | Oliver | ⏳ Next |
| Phase 3 | KYC verification & auth system | Princeton | ⏳ Next |
| Phase 4 | Account operations API | Alex | ⏳ Next |
| Phase 5 | Frontend ATM UI + KYC screens | Regstopher | ⏳ Next |
| Phase 6 | Frontend-Backend integration | All | ⏳ Next |
| Phase 7 | Admin panel | Princeton & Regstopher | ⏳ Next |
| Phase 8 | Testing & bug fixes | All | ⏳ Next |
| Phase 9 | Final demo & deployment | Princeton | ⏳ Next |

### 6.2 Constraints
- Development starts after final exams
- All team members must clone repo and set up local environment before coding
- All code must be pushed via feature branches — no direct commits to main
- Pull Requests must be reviewed before merging
- KYC documents must be handled with strict privacy standards

---

## 7. Assumptions
- All team members have Node.js and MySQL installed locally
- Internet access is available for GitHub collaboration
- Each member is responsible for their own module as defined in Section 2
- QR code scanning will use the device camera via browser API
- OTP will be delivered via email using NodeMailer

---

*DataTechx-Techsubmit | Version 1.0 | April 2026 | Confidential*
