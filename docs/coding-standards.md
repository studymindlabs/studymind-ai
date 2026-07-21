# StudyMind AI Coding Standards v1.0

## General Rules

- Write clean and readable code.
- Prefer reusable components.
- Do not duplicate code.
- Use TypeScript everywhere.
- Keep files small and focused.

---

## Naming Convention

### Components

PascalCase

Example:

Button.tsx

Card.tsx

QuizCard.tsx

---

### Variables

camelCase

Example:

userName

quizScore

currentQuestion

---

### Constants

UPPER_SNAKE_CASE (for true constants)

Example:

MAX_QUESTIONS

API_TIMEOUT

Design token objects may use camelCase keys.

---

### Functions

camelCase

Example:

calculateScore()

generateQuiz()

---

### Folders

lowercase

Example:

components

features

services

---

## Component Rules

One component = One responsibility.

Avoid very large files.

---

## Comments

Write comments only when they add useful context.

Do not comment obvious code.

---

## Imports

Use absolute imports whenever possible.

Example:

import { COLORS } from "@/constants/design-tokens";