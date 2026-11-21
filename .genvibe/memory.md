<!-- genvibe-memory covers:oOXunXoBqgn3CEek -->
## What this app is
- FORGE, a gym and fitness app for Android and iOS, with the tagline “Train Smarter. Grow Stronger.”
- Requested stack: React Native, Expo, TypeScript, and Expo Router.

## Working (confirmed)
- The `/` page passed a crash check with no crash or failed backend request (check: crash check on `/`; passed again after onboarding and personalization changes).

## Claimed, not yet confirmed
- Agent describes an offline-first training app with a charcoal-and-lime dashboard, onboarding, five tabs, searchable exercise library, muscle map, routine builder, live workout tracking, rest timers, workout history, progress records, and nutrition and recovery logs (agent claim).
- Agent says the mobile web preview rendered and all five tabs were checked (agent claim).
- Agent says native storage uses SQLite and workout sessions can be resumed (agent claim).
- Agent says the bottom navigation uses a lime pill, dark icon, and lime label for the active tab; inactive tabs have muted icons and labels; Train stays highlighted while editing a routine (agent claim, not checked after the change).
- Agent says onboarding collects measurements, goals, experience, training space, and equipment, and exercise suggestions and a starter routine adapt to available equipment (agent claim).
- Agent says exercise details show targeted muscles with illustrative 2D diagrams; verified 3D movement demonstrations are not available (agent claim).
- Agent says dependencies were installed, including Zustand and `expo-sqlite` (agent claim).
- Agent says it fixed the height field to allow entering `5'6` and continuing onboarding; changed `app/onboarding.tsx` (agent claim, not confirmed).
- Files reported changed: `src/storage.ts`, `src/storage.native.ts`, `src/store.ts`, `src/ui.tsx`, `src/personalization.ts`, `app/index.tsx`, `app/onboarding.tsx`, `app/_layout.tsx`, `src/exercises.ts`, `src/anatomy.tsx`, `app/explore.tsx`, `app/builder.tsx`, `app/train.tsx`, `app/progress.tsx`, `app/profile.tsx`.

## Open bugs
- Typecheck failed with exit code 2; error details unknown — reported 1×; tried: `yarn typecheck`.

## Design
- Agent describes charcoal surfaces and lime accents (agent claim).
- Agent describes active bottom-navigation states with a lime pill and dark icon, and muted inactive icons and labels (agent claim).

## Structure
- Agent describes five main tabs; named pages in changed files include onboarding, explore, builder, train, progress, and profile (agent claim).
- Navigation requested: Expo Router.
- Bottom-navigation implementation reported in `app/_layout.tsx` (agent claim).

## User preferences & rules
- Build a complete, premium, production-quality fitness app named FORGE; user explicitly said it should feel like a real premium product, not a basic AI-generated template.
- Target Android and iOS with React Native, Expo, and TypeScript.
- User asked to modify the bottom navigation tab states.
- On app start, ask about equipment, gym or home, weight, height, and other relevant questions; adapt exercises to the user’s selections.
- Show a 3D character and targeted muscles for exercises.
