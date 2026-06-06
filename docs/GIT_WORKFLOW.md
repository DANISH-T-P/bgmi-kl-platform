# Git Workflow

## Purpose

This document defines the source control strategy for BGMI-KL.

---

# Branch Structure

main

develop

feature/*

hotfix/*

release/*

---

# Main Branch

Production-ready code only.

Never commit directly.

Never develop directly.

---

# Develop Branch

Integration branch.

All completed features are merged here first.

---

# Feature Branches

Examples:

feature/navbar

feature/community-page

feature/tournaments

feature/team-finder

feature/player-profile

---

# Hotfix Branches

Examples:

hotfix/mobile-navbar

hotfix/auth-bug

hotfix/api-error

---

# Release Branches

Examples:

release/v1.0.0

release/v1.1.0

release/v2.0.0

---

# Commit Convention

Feature:

feat: add tournament cards

Fix:

fix: resolve mobile menu issue

Documentation:

docs: update deployment guide

Refactor:

refactor: optimize hero component

Style:

style: adjust spacing system

Performance:

perf: improve image loading

---

# Pull Request Rules

Every PR must:

Describe changes

Include screenshots

Pass tests

Update documentation

Receive review

---

# Merge Rules

Feature
↓
Develop
↓
Testing
↓
Main

Never bypass this process.

---

# Protected Branches

Protect:

main

develop

Require:

Reviews

Status checks

Successful builds

---

# Release Process

1. Create release branch

2. Test thoroughly

3. Fix issues

4. Merge to main

5. Create tag

6. Deploy

7. Publish release notes

---

# Rollback Strategy

Always maintain:

Last stable release

If deployment fails:

Rollback immediately

Investigate after recovery.

Production stability is the priority.
