# BGMI-KL Git Branching Strategy

## Purpose

This document defines the official branch structure, naming conventions, merge flow, and protection rules for the BGMI-KL website repository. It extends [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) with actionable setup and usage guidance aligned with [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) and [DEVELOPMENT_GUIDELINES.md](./DEVELOPMENT_GUIDELINES.md).

---

## Branch Overview

| Branch | Type | Purpose | Merge target |
|--------|------|---------|--------------|
| `main` | Long-lived | Production-ready releases only | — |
| `develop` | Long-lived | Integration of completed features | `release/*`, `main` (via release) |
| `feature/*` | Short-lived | New features and enhancements | `develop` |
| `release/*` | Short-lived | Release preparation and QA | `main`, then back-merge to `develop` |
| `hotfix/*` | Short-lived | Urgent production fixes | `main`, then back-merge to `develop` |

---

## Long-Lived Branches

### `main`

- Holds **production-ready** code deployed to Vercel production.
- **Never** commit or develop directly on this branch.
- Receives merges only from `release/*` and `hotfix/*`.
- Must pass: build, lint, type-check, and review before merge.
- Tagged on each production release (e.g. `v1.0.0`).

### `develop`

- Default integration branch for day-to-day development.
- All completed `feature/*` branches merge here first.
- Used for pre-release validation against the staging/preview environment.
- Must remain stable enough to cut `release/*` branches at any time.

---

## Short-Lived Branches

### `feature/*`

Create from `develop` for any new capability, page, or enhancement.

Examples (aligned with [ROADMAP.md](./ROADMAP.md)):

```
feature/navbar
feature/community-page
feature/tournaments
feature/team-finder
feature/player-profile
feature/leaderboard
feature/squad-directory
```

Workflow:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
# implement, commit, push
git push -u origin feature/your-feature-name
# open PR: feature/your-feature-name → develop
```

### `release/*`

Create from `develop` when preparing a version for production.

Examples:

```
release/v1.0.0
release/v1.1.0
release/v2.0.0
```

Workflow:

1. Create `release/vX.Y.Z` from `develop`.
2. Fix release-only bugs (no new features).
3. Run full QA checklist from [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).
4. Merge to `main` and tag `vX.Y.Z`.
5. Back-merge `main` into `develop`.
6. Publish release notes in [CHANGELOG.md](./CHANGELOG.md).

### `hotfix/*`

Create from `main` for urgent production fixes that cannot wait for the next release cycle.

Examples:

```
hotfix/mobile-navbar
hotfix/auth-bug
hotfix/api-error
```

Workflow:

1. Create `hotfix/description` from `main`.
2. Fix, test, and open PR to `main`.
3. After merge and deploy, back-merge `main` into `develop`.

---

## Merge Flow

```
feature/*  ──PR──►  develop  ──PR──►  release/*  ──PR──►  main
                                              │
hotfix/*   ───────────────────────────────────┘
```

Never bypass this flow. See [GIT_WORKFLOW.md](./GIT_WORKFLOW.md) for protected branch requirements.

---

## Commit Convention

| Type | Example |
|------|---------|
| Feature | `feat: add tournament cards` |
| Fix | `fix: resolve mobile menu issue` |
| Documentation | `docs: update deployment guide` |
| Refactor | `refactor: optimize hero component` |
| Style | `style: adjust spacing system` |
| Performance | `perf: improve image loading` |

---

## Pull Request Requirements

Every PR must:

- Describe what changed and why
- Include screenshots for UI changes
- Pass CI (build, lint, type-check)
- Update relevant documentation
- Receive at least one review before merge

### PR title examples

```
feat(tournaments): add tournament listing page
fix(navbar): resolve mobile menu overflow on iOS
docs(deployment): add staging environment checklist
release: prepare v1.0.0 for production
hotfix(auth): fix session expiry redirect loop
```

---

## Environment Mapping

| Environment | Branch source | Hosting |
|-------------|---------------|---------|
| Local | any feature branch | `npm run dev` |
| Preview / Staging | `develop` or PR branches | Vercel preview |
| Production | `main` | Vercel production |

---

## Protected Branches (GitHub)

Configure branch protection for `main` and `develop`:

- Require pull request reviews before merging
- Require status checks to pass (build, lint, type-check)
- Disallow force pushes
- Disallow direct commits (except repository admins for emergencies)

---

## Quick Reference

```bash
# Start new feature
git checkout develop && git pull
git checkout -b feature/my-feature

# Prepare release
git checkout develop && git pull
git checkout -b release/v1.0.0

# Emergency hotfix
git checkout main && git pull
git checkout -b hotfix/critical-fix
```

For contributing steps, see [CONTRIBUTING.md](./CONTRIBUTING.md).
