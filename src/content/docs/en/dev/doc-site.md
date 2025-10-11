---
title: Documentation Site
layout: /src/layouts/autonum.astro
sidebar:
  label: Doc Site
  order: 60
lastUpdated: 2025-10-06
---

This page "documents" this "documentation site" itself.

The repo of this doc site is [here](https://github.com/end-4/dots-hyprland-wiki) and it's open to [contribution](../doc-site-contrib).

# Development

Currently, this project is based on Starlight, which is based on Astro.

The website is hosted on GitHub Pages using a workflow for GitHub Actions.

The workflow is triggered when a push involves changing under following paths:
- `src/`
- `public/`

It can also be triggered manually.

## Run Locally

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

:::tip
If this error occured: `vips/vips8: no such file or directory`, you may install `libvips` manually, e.g. on Arch Linux: `sudo pacman -S libvips`
:::

:::caution
When running locally, there seems to be a bug that it doesn't apply a proper base url. But it seems okay on GitHub Pages.
Therefore, do NOT easily "fix" a relative link just because a `404` happened locally. Otherwise, while the link for locally hosted site is "fixed", the site on GitHub Pages will be broken.
Similarly, open <http://localhost:4321/en>, NOT <http://localhost:4321> when running locally.
:::

## How to

### Edit/add pages
:::caution
Always prioritize updating the English documents,
so that other languages can be uniformly updated through English translation.
:::

Edit markdown files under `src/content/docs/en/` .
- **Update the value of `lastUpdated` in frontmatter manually,** e.g. `lastUpdated: 2024-02-10`.
  - When publishing this site by GitHub Action, this value is used by `l10-notify` to determine whether a translated version is outdated.
  - If you think your update on the original page does not make the translated page out of sync, such as typo or grammar fix which only involes the natural language part of the original page, then it's OK to skip this step.
- Somehow different to the markdown on GitHub. [Reference](https://starlight.astro.build/guides/authoring-content).

### Misc
- Publish HTML files: Put it under `src/pages`.

- Edit sidebar: Edit `astro.config.mjs`.

- Edit theme: Edit `src/styles/custom.css` ([Reference](https://starlight.astro.build/guides/css-and-tailwind/)).

- Edit homepage: Edit `src/content/docs/en/index.mdx`

:::caution
When generating link paths, the uppercase characters inside original markdown filename will be converted to lowercase, and the `.` will be removed. If you still use the original filename as link path, it may result in a `404`.
:::

# References

- [Astro documentation](https://docs.astro.build)
- [Starlight’s docs](https://starlight.astro.build/)
- [Expressive-code](https://expressive-code.com/)

# History
This doc site started from [dots-hyprland#246](https://github.com/end-4/dots-hyprland/issues/246) and was then initialized mainly by [@clsty](https://github.com/clsty) with contents from the README and built-in wiki of [dots-hyprland](https://github.com/end-4/dots-hyprland) and the README of [dots-hyprarch](https://github.com/clsty/dots-hyprarch).
