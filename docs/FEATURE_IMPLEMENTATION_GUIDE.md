# Feature Implementation Guide

## Purpose

This document defines how new features must be created and integrated into the BGMI-KL platform.

---

# Feature Lifecycle

Every feature follows:

Planning
→ Architecture
→ Development
→ Testing
→ Review
→ Deployment

---

# Creating A New Feature

Example:

Leaderboard

Create:

features/leaderboard/

Structure:

leaderboard/

components/

hooks/

services/

types/

utils/

---

# Feature Requirements

Every feature must include:

* Types
* Components
* Services
* Documentation

No exceptions.

---

# Page Creation Rules

Pages belong inside:

app/

Example:

app/tournaments/page.tsx

app/community/page.tsx

app/leaderboard/page.tsx

---

# Shared Component Policy

Before creating a component ask:

Can another feature use this?

If yes:

Place it in:

components/ui/

---

# State Management

Local state:

useState

Feature state:

Custom hooks

Global state:

Only when truly necessary.

Avoid unnecessary global state.

---

# API Integration

Never call APIs directly from UI.

Wrong:

Component → API

Correct:

Component
↓
Hook
↓
Service
↓
API

---

# Database Rules

All database logic belongs in:

services/

Never inside UI components.

---

# Feature Documentation

Every feature requires:

README.md

Inside its feature folder.

Example:

features/tournaments/README.md

Document:

Purpose

Dependencies

Data Sources

Future Improvements

---

# Testing Requirements

Every feature must be tested for:

Desktop

Tablet

Mobile

Dark Mode

Performance

---

# Future Compatibility

Every feature must support future:

* User accounts
* Rankings
* Tournament integrations
* Community profiles

Avoid hardcoded implementations.

---

# Feature Completion Checklist

✓ UI complete

✓ Mobile responsive

✓ Types defined

✓ Services separated

✓ Documentation written

✓ Tested

✓ Review completed

✓ Approved for merge
