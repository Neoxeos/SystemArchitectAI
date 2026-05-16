# Development Workflow

## Approach

Build this project incrementally using a spec-driven workflow. Context files define what to build , how to build it, and what the current state of progress is. Always implement against these specs - do not infer or invent behavior from scratch.

## Scoping rules
- Work on one feature unit or subsystem at a time.
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrealted system boundaries in a single implementation step.

## When to split work
Split an implementation step if it combines:
- UI changes and background task cahnges
- real time canvas state and database persistence
- multiple unrelated api routes.
- behavior that is not clearly defined in the context files

if a change cannot be verified end to end quickly, teh scope is too broad - split it.

## handling missing requirements
- do not invent product behavior that is not defined in the context files.
- if a requirement is ambiguous, resolve it in the relevant context file before implementing.
- If a requierement is missing, add it as an open question in progress-tracker.md before continuing.

## Protected Foundation Components
Do not modify generated third-party foundation componenets unless explicitly instructed.

This includes:
- components/ui/* (shadcn/ui components)
- third-party library internals
These should remain default and reusable.

Project-specific styling, layout changes, and feature logic must be implemented in app-level components instead of modifying foundation components.
Only modify these files when a task explicitly requires it.

## Keeping Docs in Sync
Update the relevant context file whenever implementation changes:
- System architecture or boundaries.
- Storage model decisions.
- Code conventions or standards.
- Feature scope.

Progress state must reflect the actual state of the implementation, not the intended state.

## Before moving to the next unit
1. The current unit works end to end whithin its defined scope.
2. No invariant defined in architecture-context.md was violated.
3. progress-tracker.md reflects the completed work.