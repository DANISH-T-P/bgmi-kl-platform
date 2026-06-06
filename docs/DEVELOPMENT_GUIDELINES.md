# Development Guidelines

## Purpose

This document defines the development standards for the BGMI-KL website.

All contributors must follow these guidelines to maintain code quality, scalability, consistency, and maintainability.

---

# Core Development Principles

Every implementation must be:

* Clean
* Reusable
* Scalable
* Maintainable
* Performant
* Accessible

Before writing code ask:

1. Can this be reused?
2. Will this scale in the future?
3. Is this easy to maintain?
4. Does this follow project architecture?

---

# Naming Conventions

## Components

Use PascalCase.

Examples:

HeroSection.tsx

TournamentCard.tsx

CommunityStats.tsx

PlayerProfile.tsx

---

## Functions

Use camelCase.

Examples:

getTournamentData()

fetchPlayerProfile()

calculateLeaderboardRank()

---

## Variables

Use descriptive names.

Good:

activeTournamentCount

communityMemberCount

playerRegistrationStatus

Bad:

data

info

value

temp

---

# Component Rules

Each component must:

* Have a single responsibility
* Be reusable
* Avoid unnecessary logic

Bad:

One component handling UI, API calls, state management, and validation.

Good:

Separate responsibilities into independent modules.

---

# TypeScript Rules

Never use:

any

Unless absolutely unavoidable.

Always define:

* Interfaces
* Types
* Return Types

Example:

interface Tournament {
id: string;
name: string;
prizePool: number;
}

---

# Styling Rules

Use Tailwind CSS only.

Avoid:

* Inline styling
* Random custom CSS files

All colors must come from DESIGN_SYSTEM.md.

No unapproved colors.

---

# Performance Requirements

Pages must:

* Load quickly
* Avoid unnecessary requests
* Minimize bundle size

Requirements:

* Lazy load heavy components
* Optimize images
* Use Next.js Image component
* Avoid unnecessary re-renders

---

# Accessibility

All pages must support:

* Keyboard navigation
* Screen readers
* Proper heading hierarchy
* Sufficient color contrast

Accessibility is mandatory.

---

# Code Review Checklist

Before merging:

✓ Build passes

✓ Lint passes

✓ Type checks pass

✓ Mobile tested

✓ Desktop tested

✓ No console errors

✓ Documentation updated

---

# Technical Debt Policy

Never leave undocumented shortcuts.

If temporary code is added:

Create a TODO issue.

Document why it exists.

Provide a future solution plan.

---

# Final Rule

Code is written for future developers.

Optimization for readability is more important than writing clever code.
