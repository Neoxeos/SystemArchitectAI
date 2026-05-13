## Overview
Thi sproject is a real-time collaborative sustem design worksapce. Users describe a system in plain English and the agent maps that system onto a shared canvas, collaborators refine the architecture and the app generates a technical specification fomr the resulting graph.

## Goals
1. Let authenticated users create and manage architecture projects.
2. Provide a collaborative real-time canvas for system design.
3. Let users import prebuilt starter system designs into the canvas.
4. let AI generate an initial architecture from a natural language prompt.
5. Let collaborators refine the generated architecture.
6. Convert the final graph into a persistent Markdown technical spec.

## Core user flow
1. User signs in.
2. User creates or slects a project.
3. User enters teh project worksapce.
4. User optionally imports a starter system design template into the canvas.
5. User prompts the AI to generate or extend teh system design.
6. AI generates nodes and edges in shared canvas.
7. Collaborators edit and refine the design.
8. User triggers spec generation.
9. App persists teh generated Markdown spec.
10. User reviews or downloads spec.

## Features
### Authentication and Projects
- User sign-in and route protection.
- Project creation, ownership and collaborator access.
- Project list and workspace navigation.

### Collaborative canvas
- Shared real-time canvas using Liveblocks and React Flow.
- Live cursors, presence indicators, and node/edge editing.
- Canvas snapshots persisted to the filesystem.

### Starte System designs
- 