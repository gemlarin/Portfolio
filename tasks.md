# Task: Ship-readiness cleanup

## Spec
- Goal: Single deploy path (Actions); scrub PII from `.env.example` for public repo
- In scope: Remove `deploy.sh` / `npm run deploy`; update README; remove email from `.env.example`
- Out of scope: Changing Contact page public email/phone; Analytics beyond GTM removal already done
- Done when: Only Actions deploys; `.env.example` has no personal email; form still keyed via Actions secret + local `.env`

## Tasks
- [x] Remove local deploy script + npm script; README → push/Actions
- [x] Strip email from `.env.example`
- [ ] Code sweep (prompt D for topics — see AGENTS.md)
