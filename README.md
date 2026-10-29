# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@1.1.1 create --template minimal --types ts --add prettier tailwindcss="plugins:forms,typography" sveltekit-adapter="adapter:node" eslint --install pnpm school_landingpage
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

For example, to add Tailwind CSS:

```sh
npx sv add tailwindcss
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## SEO and GitHub Pages

Page titles, descriptions, canonical URLs, and social-sharing metadata are managed by
`src/lib/components/Seo.svelte`. Update `SITE_URL` in `src/lib/utils/seo.ts` and the sitemap URL in
`static/robots.txt` if the site moves to a custom domain. The GitHub Pages workflow sets
`GITHUB_PAGES=true` to build the app under the repository's `/school_landingpage` path.

The sitemap at `/sitemap.xml` is generated from the published routes and blog posts. The FAQ and
installations routes are excluded from indexing until they have full content.
