# Task: Brand color theme tokens

## Spec
- Goal: Manage site brand colors via CSS custom props in one theme file
- In scope: `src/styles/theme.css` + import; replace brand hex in app Vue/SCSS (`#fb2662`, `#222`, `#666`, `#888`, `#d8d8d8`, `#f4f4f4`, `#fff`/`#ffffff`, `#15803d`)
- Out of scope: Vendor CSS (`magnific-popup`); SVG assets; non-brand one-off hex; Tailwind/new stack
- Done when: Theme file owns brand palette; app uses `var(--…)`; hard-refresh looks unchanged

## Tasks
- [x] Add `src/styles/theme.css` with `:root` brand tokens
- [x] Import theme from `main.js`
- [x] Replace brand hex in app Vue/SCSS with vars
- [ ] Code sweep (prompt D for topics — see AGENTS.md)
