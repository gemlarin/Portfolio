# Task: Font sizes to rem

## Spec
- Goal: Convert app `font-size` values from `px` to `rem` for a11y (user font prefs)
- In scope: `font-size: …px` in app Vue/SCSS/CSS (`px / 16`); visual size unchanged at default 16px root
- Out of scope: margins/padding/widths/borders; line-height; vendor CSS; SVG assets; other shorthands unless they only set size
- Done when: no app `font-size: …px` left; hard-refresh looks the same at default zoom

## Tasks
- [x] Convert `font-size` px → rem in app styles
- [x] Verify build; spot-check blog + a project detail
- [ ] Code sweep (prompt D for topics — see AGENTS.md)
