# Task: Site-wide type scale via theme vars

## Spec
- Goal: Consistent heading/body/meta font sizes, all controllable from `theme.css`
- In scope: CSS variables + wire components to them; unify obvious outliers
- Out of scope: Vendor CSS (magnific-popup)
- Done when: Type tokens live in theme; app text uses `var(--…)`; no one-off rem literals for shared roles

## Tasks
- [x] Define type scale + semantic aliases in theme.css
- [x] Wire element defaults (p, h1–h5, code)
- [x] Replace site font-size literals with vars
- [ ] Code sweep (prompt D for topics — see AGENTS.md)
