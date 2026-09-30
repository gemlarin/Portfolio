# Task: Blog a11y + meta + tags + errors

## Spec
- Goal: OG meta per post; clickable tags → `/blog?tag=`; retry/empty states; Esc closes overlay pages
- In scope: Blog, BlogPost; Esc on Blog/BlogPost/Stack/Resume/Contact; client tag filter
- Out of scope: SSR for crawlers; project detail Esc; new deps
- Done when: tags filter list; post has og/twitter/canonical; error/empty have retry or clear; Esc matches × close

## Tasks
- [x] Escape-close mixin + wire overlay pages
- [x] Clickable tags + `/blog?tag=` filter UI
- [x] Open Graph / twitter / description on BlogPost
- [x] Error retry + empty filter / empty body handling
- [ ] Code sweep (prompt D for topics — see AGENTS.md)
