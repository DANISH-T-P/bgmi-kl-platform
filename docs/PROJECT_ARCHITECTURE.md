# BGMI-KL Project Architecture

## Architecture Philosophy

The project follows a scalable and modular architecture.

Every feature must be:

* Independent
* Reusable
* Maintainable
* Scalable

---

## Folder Structure

src/

├── app/
├── components/
│
├── features/
│ ├── tournaments/
│ ├── community/
│ ├── squads/
│ ├── players/
│ ├── creators/
│ └── leaderboard/
│
├── services/
│
├── hooks/
│
├── lib/
│
├── styles/
│
└── types/

---

## Feature Based Development

Every major feature must exist inside its own feature module.

Example:

features/tournaments/

├── components/
├── hooks/
├── services/
├── types/
└── utils/

Never place tournament-specific code outside this module.

---

## Shared Components

Shared UI components belong in:

components/ui/

Examples:

* Button
* Card
* Modal
* Badge
* Input
* SectionHeading

---

## Data Flow

UI
↓
Feature Layer
↓
Services
↓
Database

UI components must never directly communicate with database services.

---

## Scalability Rule

Every implementation must support future growth.

Do not create shortcuts that make future development difficult.
