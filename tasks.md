# Task: Blog post link previews

## Spec

- Goal: LinkedIn (and similar) can read each post’s title, description, and cover from the portfolio URL
- In scope: Build-time HTML for `/blog/<slug>/` with Open Graph and Twitter card tags from Hashnode
- Out of scope: Changing the in-app article layout; moving off GitHub Pages; converting cover files
- Done when: A production build writes `dist/blog/<slug>/index.html` that includes `og:title` and `og:image` before any script runs

## Tasks

- [x] Prerender one static post page per Hashnode slug during `npm run build`
- [x] Rebuild the site daily so new Hashnode posts get preview HTML
- [ ] Code sweep (offer Topics to run or Run all — [code-sweep options](../Agents/Skills/code-sweep/options.md); Code Sweeper runs them)
