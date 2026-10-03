# Task: Giscus comments on blog posts

## Spec
- Goal: Embed Giscus on `/blog/:slug` post pages
- In scope: Config file + Vue mount/cleanup; map by post slug; light theme aligned with site
- Out of scope: Hashnode comments; moderating Discussions setup beyond documenting steps
- Done when: Comments render under post body (when Giscus config is filled); no leftover script on leave

## Tasks
- [x] Add `src/data/giscus.js` config (+ `.env.example` notes if needed)
- [x] Mount Giscus on BlogPost; remount on slug change; destroy cleanup
- [ ] Code sweep (prompt D for topics — see AGENTS.md)
- [ ] D: Install Giscus GitHub App on Portfolio (required for widget)
