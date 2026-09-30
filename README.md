# Portfolio (Vue 2)

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Dev server: http://localhost:8080

Contact form needs a free [Web3Forms](https://web3forms.com/) access key in `.env` for local builds:

```bash
WEB3FORMS_ACCESS_KEY=your-key-here
```

```bash
npm run build
```

## Deploy (GitHub Pages)

Push to `master`. GitHub Actions builds and publishes `dist/` to [`gemlarin.github.io`](https://github.com/gemlarin/gemlarin.github.io) → **https://gemlarin.github.io/**

Required repo secrets:

- `GH_PAGES_TOKEN` — deploy token for the Pages repo
- `WEB3FORMS_ACCESS_KEY` — baked into the production contact form at build time

Source stays in this repo. Only the built site is pushed to Pages. The access key is baked into the client bundle (public by design; lock domains in the Web3Forms dashboard).

Build tooling was updated for modern Node (Webpack 5). App code remains Vue 2.
