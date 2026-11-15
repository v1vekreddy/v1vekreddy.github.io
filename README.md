# Vivek Reddy - AI/ML Portfolio

Personalized from [igmoni/devfolio-v2](https://github.com/igmoni/devfolio-v2), with its original layout and animated cover.
Live website: https://v1vekreddy.github.io/

## Development

```sh
npm ci
npm run dev
```

## Build and publish

```sh
npm run build
```

Next.js exports the static site into `out/`. Publish that directory to the repository's `gh-pages` branch, including a `.nojekyll` file. Source is maintained on the `portfolio-v2` branch. GitHub Pages serves the root of `gh-pages`.

There are no server API routes. The contact form opens a draft in the visitor's email app; messages must be sent there. Resume links use the supplied Google Drive viewer. Profile photos, donation links, Spotify, YouTube, Pinterest, GitHub activity, the animated cat, and quotes have been removed from the visible site.

Profile and social links: `src/config/hero.ts` and `src/config/common.ts`.
Experience: `src/config/experience.ts`. Education: `src/components/home/Education.tsx`.
Project content: `src/data/projects/`. Unpublished template entries remain excluded.

No credentials or `.env.local` files are committed.
