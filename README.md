# Yumkin App – Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/37d6d797-4b07-41dc-a380-4aee4845d8b8/deploy-status)](https://app.netlify.com/sites/yumkin-website/deploys)

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Docker Dev Environment

```bash
# this command opens a shell in node docker container to run the 
# npm commands without installing node on your machine
docker run --rm -it -v $(pwd):/usr/src/app -p 4321:4321 -w /usr/src/app node:18-alpine /bin/sh

## run this command inside the docker container to start the dev server
npx astro dev --host

## build the site to the directory dist/
docker run --rm -it -v $(pwd):/usr/src/app -p 4321:4321 -w /usr/src/app node:18-alpine npm run build

```