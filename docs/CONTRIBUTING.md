# Contributing to BGMI-KL

Thank you for contributing to Kerala's BGMI community platform.

---

## Before You Start

Read these documents in order:

1. [PROJECT_ARCHITECTURE.md](./PROJECT_ARCHITECTURE.md)
2. [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
3. [DEVELOPMENT_GUIDELINES.md](./DEVELOPMENT_GUIDELINES.md)
4. [FEATURE_IMPLEMENTATION_GUIDE.md](./FEATURE_IMPLEMENTATION_GUIDE.md)
5. [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)
6. [BRANCHING.md](./BRANCHING.md)

---

## Branch Workflow

| Action | Branch |
|--------|--------|
| Daily development | `feature/*` from `develop` |
| Integration | merge PR into `develop` |
| Release prep | `release/*` from `develop` |
| Production | merge `release/*` into `main` |
| Urgent fix | `hotfix/*` from `main` |

Never commit directly to `main` or `develop`.

---

## Development Steps

1. Fork or clone the repository.
2. Checkout `develop` and create a feature branch:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```
3. Follow [DEVELOPMENT_GUIDELINES.md](./DEVELOPMENT_GUIDELINES.md) and [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
4. Run checks before pushing:
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. Update documentation when your change affects architecture, APIs, or components.
6. Open a pull request targeting `develop` with screenshots for UI changes.

---

## Pull Request Checklist

- [ ] Branch name follows convention (`feature/*`, `hotfix/*`, `release/*`)
- [ ] Build, lint, and type-check pass
- [ ] Mobile and desktop tested
- [ ] Documentation updated if needed
- [ ] PR description explains what and why
- [ ] Screenshots included for visual changes

---

## Code of Conduct

All contributors must follow [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

Report security issues privately per [SECURITY.md](./SECURITY.md).
