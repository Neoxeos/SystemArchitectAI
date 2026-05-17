# UI Context

## Theme

Dark by default. The UI uses shadcn/ui primitives on top
of Tailwind CSS v4 with CSS custom properties for theme
tokens. No default light theme should appear.

## Colors

All components must use theme tokens from `app/globals.css`;
do not hardcode color values in component classes.

| Role            | CSS Variable         | Value                         |
| --------------- | -------------------- | ----------------------------- |
| Page background | `--background`       | `oklch(0.145 0 0)`            |
| Surface         | `--card`             | `oklch(0.205 0 0)`            |
| Primary text    | `--foreground`       | `oklch(0.985 0 0)`            |
| Muted text      | `--muted-foreground` | `oklch(0.708 0 0)`            |
| Primary accent  | `--primary`          | `oklch(0.922 0 0)`            |
| Border          | `--border`           | `oklch(1 0 0 / 10%)`          |
| Error           | `--destructive`      | `oklch(0.704 0.191 22.216)`   |
| Input           | `--input`            | `oklch(1 0 0 / 15%)`          |

## Typography

| Role      | Font       | Variable      |
| --------- | ---------- | ------------- |
| UI text   | Geist Sans | `--font-sans` |
| Code/mono | Geist Mono | `--font-mono` |

## Border Radius

| Context           | Class                    |
| ----------------- | ------------------------ |
| Inline / small UI | `rounded-sm` / `rounded-md` |
| Cards / panels    | `rounded-lg`             |
| Modals / overlays | `rounded-lg`             |

## Component Library

shadcn/ui on top of Tailwind CSS v4. Components live in
`components/ui/`. Use the shadcn CLI to add generated
components and do not hand-edit generated files after
installation.

Installed primitives:

- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

## Layout Patterns

- App shell uses global dark background and foreground tokens.
- Panels and cards use shadcn `card`, `border`, and `muted`
  theme tokens.
- Dialogs use generated shadcn overlay/content primitives.
- Scrollable regions use the generated `ScrollArea` primitive.

## Icons

Lucide React. Stroke-based icons only. Use `h-4 w-4` for
inline icons and `h-5 w-5` for larger button icons.
