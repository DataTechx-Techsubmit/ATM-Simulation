# 📋 Software Requirements Specification (SRS)
## ATM-Simulation | DataTechx-Techsubmit | Version 1.0

---

## 1. Introduction

### 1.1 Purpose
This document describes the functional and non-functional requirements for the ATM-Simulation web application built by the DataTechx-Techsubmit team.

### 1.2 Scope
The system simulates a real ATM — users can register, authenticate via PIN, and perform banking operations through a browser-based interface.

---

## 2. Functional Requirements

### 2.1 Authentication
- FR-01: Users shall register with full name, email, and 4-digit PIN
- FR-02: Users shall log in using account number and PIN
- FR-03: System shall lock account after 3 failed PIN attempts
- FR-04: System shall auto-logout after 60 seconds of inactivity

### 2.2 Core ATM Operations
- FR-05: Users shall check current account balance
- FR-06: Users shall deposit money into their account
- FR-07: Users shall withdraw money subject to balance limits
- FR-08: Users shall transfer money to another account number
- FR-09: Users shall view mini-statement of last 10 transactions

### 2.3 Security
- FR-10: All PINs shall be hashed before storage using bcrypt
- FR-11: System shall enforce minimum and maximum withdrawal limits
- FR-12: System shall log IP address and timestamp of every login
- FR-13: JWT tokens shall manage all authenticated sessions

### 2.4 Admin Features
- FR-14: Admin shall view all user accounts and statuses
- FR-15: Admin shall reset any user PIN
- FR-16: Admin shall freeze or unfreeze accounts
- FR-17: Admin shall view full transaction logs

---

## 3. Non-Functional Requirements

| ID | Requirement | Details |
|----|------------|---------|
| NFR-01 | Performance | API responses under 500ms |
| NFR-02 | Security | PINs hashed, JWT auth, HTTPS ready |
| NFR-03 | Usability | Mobile-friendly ATM UI |
| NFR-04 | Reliability | System uptime 99% during demo |
| NFR-05 | Maintainability | MVC structure, commented code |

---

*DataTechx-Techsubmit | Version 1.0 | April 2026*
